// This script gates the docs/ja translation progress.
//
//   MISSING    台帳に未記載のページ数
//   STALE      台帳の sha256 と内容が食い違う行数
//   RESIDUE    中国語残存の機械検出ヒット数 (allowlist 除く)
//   OLD_TERM   旧訳語・誤訳語が残っている行数 (STALE_TERMS 参照)
//   CONTROL    制御文字が混入している行数 (一括置換スクリプトの事故検出)
//   RAW_LINK   <td> 内で MarkdownWrapper に囲まれていない Markdown リンクの行数
//   TABLE      Markdown テーブルの見出し行と区切り行で列数が食い違っている箇所
//   LABEL      リンクテキストにページのファイル名 (原文中国語) を使っている箇所
//
// 上位6つが 0、TABLE/LABEL が基準値以下で exit 0。
//
// TABLE と LABEL は既存の未修正分を基準値として据え置き、**増えたら落とす**ラチェット。
// 既存分を直したら基準値を下げること (上げるのは禁止)。
//
// RESIDUE は品質の証明ではない。高精度・低再現率に振ってあり、
// 「あからさまな機械置換の残骸を落とす」下限ゲートとしてしか機能しない。
// 全ページをLLMに読ませることを強制するのは MISSING / STALE の方。

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const JA_DIR = path.join(ROOT, "docs/ja");
// 台帳と allowlist は tools/ 側に置く。docs/ja は upstream へ出す成果物そのものなので、
// 作業状態を混ぜない。
const LEDGER = path.join(ROOT, "tools/ja-translation-ledger.tsv");
const ALLOWLIST = path.join(ROOT, "tools/ja-residue-allowlist.txt");
const OLD_TERM_ALLOWLIST = path.join(ROOT, "tools/ja-oldterm-allowlist.txt");

// 繁体字が載っているのが仕様のページ。RESIDUE 検査から外す (台帳の対象からは外さない)。
const RESIDUE_EXEMPT_FILES = new Set([
	"glossary.md", // 用語対訳表。1列目が繁体字なのが役目
	"address-terms.md", // 呼称表。原語(zh-TW)列が繁体字なのが役目
	"first-person-pronouns.md", // 一人称表。原語(zh-TW)列が繁体字なのが役目
]);

// 過去に「MOD訳と齟齬がある/旧字体のまま」と判明し、置換で解消したはずの語。
// 全文一括置換のたびに span title 属性等の一部が漏れる事故が起きたため
// (2026-07-23: 修養→品性の置換が事件詳細ページ2件のspan titleに残存)、
// 再発防止として機械チェックに組み込む。中国語残存(RESIDUE)と違い、
// これらは単独では正しい日本語の単語であることが多いので ZH_MARKERS には混ぜない。
//
// bad: 置換済みのはずの旧語。good: 現在の正式訳。note: 根拠(MOD確認元・裏取り)。
// glossary.md 自身は対訳表という性質上 bad 側の語が正しく載るページなので対象外。
//
// compoundOk: 直前が漢字なら別語の複合とみなして検出しない。「丐幫向心」のように
// bad と同綴りで別概念の勢力固有語がある語にだけ付ける。既定 (false) では
// 「唐門叛徒」「唐門劫法場」のような名詞+旧語の複合も検出する。
const STALE_TERMS = [
	{ bad: "修養", good: "品性", note: "PlayerStat/training の MOD訳 (2026-07-23確認)" },
	{ bad: "向心", good: "団結", compoundOk: true, note: "PlayerStat/team の MOD訳。ただし勢力固有の「◯◯向心力」は別概念で対象外" },
	{ bad: "東瀛", good: "日本", note: "日本の雅称。地の文では「日本」と書く。台詞の直接引用のみ原文どおり可 (2026-07-25)" },
	{ bad: "劫法場", good: "刑場破り", note: "唐中翎の処刑場襲撃事件。MOD訳は「刑場破り」「刑場を襲う」(2026-07-27)" },
	{ bad: "法場", good: "刑場", note: "「法場」は日本語にない語。MOD訳は刑場/処刑場 (2026-07-27)" },
	{ bad: "出剣", good: "剣を抜く", note: "「出剣」は日本語では使わない。MOD訳は一貫して「剣を抜く」(2026-07-27)" },
	{ bad: "叛徒", good: "裏切り者", note: "MOD は地の文で叛徒を使うが、wiki は全て裏切り者に統一する方針 (2026-07-27ユーザー判断)" },
	// 旧字体。MOD は新字体で統一しており (幇1446/幫137、宝581/寶1、壮171/壯8、応597/應0、炉63/爐0)、
	// 旧字体側は MOD 自身の取りこぼし。一括置換後に docs/ja の地の文が 0 件になった字だけを
	// ここに載せる。傳/來/與/沒/盡/點/歸/戰/萬/麼 は『活俠傳』(作品名)・出典記事タイトル・
	// 漢詩や歌訣の引用という正しい用例が残るため、字単位のゲートには載せられない。
	// 龍 は MOD が一貫して旧字体を使う (龍1339/竜9) ので対象外。
	{ bad: "幫", good: "幇", note: "MOD は幇 (幇1446/幫137)。原文併記とリンク宛先は allowlist で除外 (2026-07-27)" },
	{ bad: "寶", good: "宝", note: "MOD は宝 (宝581/寶1)。文房四宝・鳳凰宝衣・吞天宝鑑等 (2026-07-27)" },
	{ bad: "壯", good: "壮", note: "MOD は壮 (王二壮84/王二壯8) (2026-07-27)" },
	{ bad: "應", good: "応", note: "MOD に應の用例なし (応597) (2026-07-27)" },
	{ bad: "爐", good: "炉", note: "MOD に爐の用例なし (炉63)。乾坤造化炉・主炉 (2026-07-27)" },
	{ bad: "鐵", good: "鉄", note: "MOD は鉄 (鉄578/鐵14)。鉄琵琶功等。歌訣の引用のみ allowlist で除外 (2026-07-27)" },
	{ bad: "邊", good: "辺", note: "MOD に邊の用例なし (辺115)。歌訣の引用のみ allowlist で除外 (2026-07-27)" },
	{ bad: "錄", good: "録", note: "MOD は録 (江湖鬼蜮録・戦神語録・伝灯録)。旧字体の取りこぼし (2026-07-28)" },
	{ bad: "繪", good: "絵", note: "「立繪」等。日本語は立ち絵 (2026-07-28)" },
	// 中国語のまま残っていた語。ユーザー指摘で一掃したので再発をここで止める。
	{ bad: "決策", good: "決定", compoundOk: true, note: "日本語では使わない語。ゲーム内の選択肢ラベルも「決定：」に統一。原文名『眾人的決策』と「解決策」は直前が漢字なので対象外 (2026-07-28)" },
	{ bad: "支線", good: "サブイベント", compoundOk: true, note: "ルート/サブクエストの意味。英語版は Side Quest。原文併記の「主支線年表」は直前が漢字なので対象外 (2026-07-28)" },
	{ bad: "最晚", good: "最遅", note: "中国語。発生時期の記述に混入していた (2026-07-28)" },
];
// TABLE / LABEL の据え置き基準値。既存の未修正分をここに記録し、これを超えたら落とす。
// 直した分だけ数を下げていく。増やしてはいけない。
const BASELINE = {
	// 4-02-2-東西武林盟會戰.md の「加入唐門の衆人」表 (2026-07-28 時点)
	TABLE: 1,
	// リンクテキストがファイル名のままの箇所 (2026-07-28 時点)。
	// 大半は 3-12-1-眾人的決策 への参照。
	LABEL: 58,
};

const STALE_TERM_EXEMPT_FILES = new Set([
	"glossary.md", // 対訳表。bad側(旧語=原文)が正しく載るページ
]);

// 中国語にしか現れない字・機能語。カナが混じっていても中国語構文の残骸として拾う。
//
// 日本語と共通の語彙 (表示・使用・獲得・影響・同時・因此 など) は絶対に足さないこと。
// 正しい日本語を残骸と誤判定し、allowlist を膨らませる圧力になる。
const ZH_MARKERS = new RegExp(
	[
		// 日本語に存在しない字
		"們", "這", "麼", "沒", "咱", "甭", "嗎",
		// 中国語専用の機能語・語順マーカー
		"抉擇", "因為", "但是", "如果", "已經", "覺得", "喜歡", "知道",
		"而且", "或者", "還是", "還能", "還令", "就算", "就連", "不過是",
		"對於", "對旁人", "亦無妨", "亦是", "自居", "模樣", "身上",
		"事到如今", "無法把", "越教越", "所想", "按汝", "閒聊", "抉択",
		// 置換翻訳の定番残骸 (「汝の」化されても語幹が残る)
		"變得", "看著", "想看", "獲得的", "之際", "畢竟", "不禁",
	].join("|")
);

const KANA = /[぀-ゟ゠-ヿ]/;
const HAN = /[一-鿿]/;
const SENTENCE_END = /[。？！]/;

// 散文とみなす最小の CJK 文字数。これ未満は見出し・表セル・固有名詞の可能性が高い。
const PROSE_MIN_CJK = 12;

// HTML タグ。`掌門好感<30` `サイコロ>=80` のような比較演算子をタグとして
// 食わないよう、タグ名で始まるものだけに限定する。
const HTML_TAG = /<\/?[a-zA-Z][^<>]*>/g;
const MD_LINK = /!?\[[^\]]*\]\([^)]*\)/g;

/**
 * 「訳 (原文)」の併記記法。括弧内は繁体字のままが正しいので検査から外す。
 *   例: title: 汗青書33：全軍覆没 (全軍覆沒)
 *
 * Markdown リンクの `](...)` を食うと本文が壊れるため、リンクを先に落としてから呼ぶこと。
 */
function stripParens(s) {
	return s.replace(/[(（][^)）]*[)）]/g, " ");
}


/** マークアップを剥がして地の文だけ残す */
function stripMarkup(s) {
	return s
		.replace(/<!--[\s\S]*?-->/g, " ")
		.replace(MD_LINK, " ")
		.replace(HTML_TAG, " ")
		.replace(/https?:\/\/\S+/g, " ")
		.replace(/`[^`]*`/g, " ")
		.replace(/[!\[\]()|#*`~=;/\\"'{}]/g, " ");
}

/**
 * ステータス行・能力値リストか判定する。`体力+1、内功+1、銀両-100` のような行は
 * 漢字主体でカナが少ないのが正常。
 *
 * 注意: stripMarkup は ± を消すので、ここでは使えない。
 */
function isStatLine(s) {
	const rest = s
		.replace(MD_LINK, "、")
		.replace(HTML_TAG, "、")
		.replace(/[一-鿿゠-ヿА-я\w《》【】]{1,10}\s*(LV)?\s*[+\-−＋－≧≦≥≤><=]\s*\d*/gi, " ")
		// 発生時期の表記。`二年十月下旬` `第3年12月上旬` は漢字だけでも正常。
		.replace(/第?[〇一二三四五六七八九十百\d]+年/g, " ")
		.replace(/[〇一二三四五六七八九十百\d]+月/g, " ")
		.replace(/[上中下]旬/g, " ")
		.replace(/[、,。・：:／/\s\d%％]/g, "");
	const cjk = [...rest].filter((c) => HAN.test(c) || KANA.test(c));
	return cjk.length < 4;
}

/** 引用・出典行か判定する。中国語の記事タイトルは原語のままが正しい。 */
function isCitation(s) {
	return /^\s*\[\^[^\]]+\]:/.test(s) || /^\s*>\s*(出典|引用)/.test(s);
}

function kanaRatio(s) {
	const cjk = [...stripMarkup(s)].filter((c) => HAN.test(c) || KANA.test(c));
	if (cjk.length === 0) return { ratio: null, len: 0 };
	const k = cjk.filter((c) => KANA.test(c)).length;
	return { ratio: k / cjk.length, len: cjk.length };
}

function walk(dir) {
	const out = [];
	for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) out.push(...walk(p));
		else if (e.name.endsWith(".md")) out.push(p);
	}
	return out.sort();
}

function sha256(p) {
	return crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");
}

function loadAllowlist(file = ALLOWLIST) {
	if (!fs.existsSync(file)) return [];
	return fs
		.readFileSync(file, "utf8")
		.split("\n")
		.map((l) => l.trim())
		.filter((l) => l && !l.startsWith("#"));
}

function scanResidue(file, allow) {
	if (RESIDUE_EXEMPT_FILES.has(path.relative(JA_DIR, file))) return [];
	const rel = path.relative(ROOT, file);
	const hits = [];
	let inFence = false;

	fs.readFileSync(file, "utf8")
		.split("\n")
		.forEach((line, idx) => {
			const s = line.trim();
			if (/^```/.test(s)) {
				inFence = !inFence;
				return;
			}
			if (inFence || !s || !HAN.test(s)) return;
			if (isCitation(s)) return;
			if (allow.some((a) => s.includes(a))) return;

			// リンクを先に落としてから「訳 (原文)」の原文部分を除く
			// (順序が逆だとリンク先を食って本文が壊れる)
			const body = stripParens(s.replace(MD_LINK, " "));
			if (!HAN.test(body)) return;

			if (ZH_MARKERS.test(body)) {
				hits.push({ file: rel, line: idx + 1, why: "zh-marker", text: s.slice(0, 90) });
				return;
			}

			// カナが1文字も無い散文だけを拾う。カナ密度が低いだけの行は、この wiki では
			// 固有名詞が濃いため正常な日本語でも頻出し (「崆峒派留学中に賭博闘技場で敗北」= 0.13)、
			// 未訳 (「渴望の事物求不得。」= 0.13) と比率では分離できない。
			if (isStatLine(s)) return;
			const { ratio, len } = kanaRatio(body);
			if (ratio === 0 && len >= PROSE_MIN_CJK && SENTENCE_END.test(body)) {
				hits.push({ file: rel, line: idx + 1, why: "kana=0", text: s.slice(0, 90) });
			}
		});
	return hits;
}

/**
 * 旧訳語・誤訳語の残存を検出する。RESIDUE と違い ZH_MARKERS(中国語専用の字・機能語)
 * には頼らず、単語単位の完全一致で見る。単独では正しい日本語の語も含まれるため、
 * コードフェンス内・リンクURL・HTMLコメントだけ除外し、それ以外は行の生テキストを
 * そのまま対象にする (span title 属性やテーブルセルも見落とさないため)。
 *
 * ただし「訳 (原文)」の併記括弧は RESIDUE 検査と同様に対象外にする。bad 側の語が
 * 原文としてそこに現れるのは正しい書き方であり (例: `汗青書4：唐門の裏切り者
 * (唐門叛徒)`)、括弧の中まで見ると正しい併記を旧訳語の残存として誤検出する。
 * 判定は括弧を落とした文字列に対して行い、報告する text だけ元の行から取る。
 */
function scanStaleTerms(file, allow) {
	const rel = path.relative(ROOT, file);
	if (STALE_TERM_EXEMPT_FILES.has(path.relative(JA_DIR, file))) return [];
	const hits = [];
	let inFence = false;

	fs.readFileSync(file, "utf8")
		.split("\n")
		.forEach((line, idx) => {
			const s = line.trim();
			if (/^```/.test(s)) {
				inFence = !inFence;
				return;
			}
			if (inFence || !s) return;

			// 原文併記など bad 側の語が出るのが正しい行は、括弧の中身から
			// 推定せず tools/ja-oldterm-allowlist.txt に登録して外す
			if (allow.some((a) => s.includes(a))) return;
			// CharacterName の nameZh は中国語ラベルを描画する props (class="zh" で
			// nameEn と並ぶ)。原語の綴りが入るのが役目なので旧字体ゲートの対象外。
			// 括弧の中身のような推定ではなく、用途が決まっている props 名で外している。
			const scan = s.replace(/nameZh=(['"])[^'"]*\1/g, " ");

			for (const { bad, good, note, compoundOk } of STALE_TERMS) {
				// compoundOk の語 (「丐幫向心」「飛石幫向心」のように bad と同綴りで
				// 別概念の勢力固有語がある語) だけ、直前が漢字なら複合語とみなして
				// スキップする。プレイヤー自身のステータスとしての bad は行頭・記号・
				// 区切り文字の直後に単独で現れる。それ以外の語では「唐門叛徒」
				// 「唐門劫法場」のような名詞+旧語の複合も検出対象にする。
				const re = new RegExp(bad, "g");
				let m;
				while ((m = re.exec(scan))) {
					const before = scan.slice(Math.max(0, m.index - 1), m.index);
					if (compoundOk && HAN.test(before)) continue;
					hits.push({ file: rel, line: idx + 1, bad, good, note, text: s.slice(0, 90) });
					break; // 1行1件で十分。同じ語の複数出現は1行にまとめる
				}
			}
		});
	return hits;
}

/**
 * 制御文字の混入を検出する。
 *
 * 一括置換スクリプトは「保護したい部分をプレースホルダに退避 → 置換 → 復元」という
 * 手順を取ることが多く、復元漏れが起きると NUL 等の制御文字がページに残る。
 * markdown も VitePress のビルドもこれを黙って通すため、リンクが壊れていても
 * dead-link 検査に引っかからない (実例: 849723dc で `](...)` の退避が入れ子になり、
 * 1パスの復元では内側が戻らず 11ファイル17行に NUL が残った)。
 *
 * タブ・改行は正常な文字なので除く。
 */
function scanControlChars(file) {
	const rel = path.relative(ROOT, file);
	const hits = [];
	fs.readFileSync(file, "utf8")
		.split("\n")
		.forEach((line, idx) => {
			const m = line.match(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/);
			if (m) {
				hits.push({
					file: rel,
					line: idx + 1,
					code: `U+${m[0].charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`,
					text: line.trim().slice(0, 90),
				});
			}
		});
	return hits;
}

/**
 * RAW_LINK: `<td>` の中で MarkdownWrapper に囲まれていない Markdown リンクを検出する。
 *
 * `<Table class="timeline-table">` や素の `<table>` の中身は markdown-it から見ると
 * 一続きの raw HTML ブロックで、Markdown リンクが解釈されない。囲みを忘れると
 * `[表示名](/ja/...)` という文字列がそのまま読者に見える (ビルドは通ってしまうので
 * dead link 検査では捕まらない)。
 *
 * `<ChTd>` のような Vue コンポーネントは raw HTML ブロック扱いにならず正しく描画される
 * ため、素の `<td>` に入っている場合だけを対象にする。
 */
function scanRawLinks(file) {
	const rel = path.relative(ROOT, file);
	const hits = [];
	const LINK = /\[[^\]\n]+\]\(\//;
	let td = 0;
	let wrap = 0;
	fs.readFileSync(file, "utf8")
		.split("\n")
		.forEach((line, idx) => {
			const openW = (line.match(/<MarkdownWrapper>/g) || []).length;
			const closeW = (line.match(/<\/MarkdownWrapper>/g) || []).length;
			const openT = (line.match(/<td[ >]/g) || []).length;
			const closeT = (line.match(/<\/td>/g) || []).length;
			// 行頭時点で開いているか、この行で開くかのどちらかなら中にいるとみなす
			const inTd = td > 0 || openT > 0;
			const inWrap = wrap > 0 || openW > 0;
			if (inTd && !inWrap && LINK.test(line)) {
				hits.push({ file: rel, line: idx + 1, text: line.trim().slice(0, 90) });
			}
			wrap += openW - closeW;
			td += openT - closeT;
		});
	return hits;
}

/**
 * TABLE: Markdown テーブルの見出し行と区切り行で列数が食い違っているものを検出する。
 *
 * GFM は両者の列数が一致しない表をテーブルとして認識しない。結果、表全体が
 * `| 人物 | 加入条件 | ...` という1個の段落として読者に見える。ビルドは通るので
 * dead link 検査では捕まらない。
 */
function scanTableShape(file) {
	const rel = path.relative(ROOT, file);
	const hits = [];
	const countCells = (line) => {
		let s = line.trim();
		if (s.startsWith("|")) s = s.slice(1);
		if (s.endsWith("|")) s = s.slice(0, -1);
		return s.split("|").length;
	};
	const isDelimiter = (line) =>
		/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line);
	const lines = fs.readFileSync(file, "utf8").split("\n");
	let inFence = false;
	lines.forEach((line, idx) => {
		if (/^```/.test(line.trim())) {
			inFence = !inFence;
			return;
		}
		if (inFence || idx === 0 || !isDelimiter(line)) return;
		const head = lines[idx - 1];
		if (!head.includes("|") || !head.trim()) return;
		const h = countCells(head);
		const d = countCells(line);
		if (h !== d) {
			hits.push({ file: rel, line: idx + 1, head: h, delim: d });
		}
	});
	return hits;
}

/**
 * LABEL: リンクテキストにページのファイル名 (原文中国語) をそのまま使っているものを検出する。
 *
 * ファイル名の中国語は3ロケールでパスを揃えるための識別子であって、読者に見せる名前ではない。
 * リンクテキストにはリンク先ページの frontmatter title を使う。
 */
function scanFilenameLabels(file) {
	const rel = path.relative(ROOT, file);
	const hits = [];
	const LINK = /\[([^\]\n]+)\]\((\/ja\/[^)\s]+)\)/g;
	let inFence = false;
	fs.readFileSync(file, "utf8")
		.split("\n")
		.forEach((line, idx) => {
			if (/^```/.test(line.trim())) {
				inFence = !inFence;
				return;
			}
			if (inFence) return;
			let m;
			LINK.lastIndex = 0;
			while ((m = LINK.exec(line))) {
				const label = m[1];
				const stem = path.basename(m[2].split("#")[0]);
				// 年-月-旬 の接頭辞を外した形もファイル名扱いにする
				const bare = stem.replace(/^\d+-\d+-\d+-/, "");
				if (label === stem || label === bare) {
					hits.push({ file: rel, line: idx + 1, label, stem });
				}
			}
		});
	return hits;
}

function readLedger() {
	const ledger = new Map();
	if (!fs.existsSync(LEDGER)) return ledger;
	for (const l of fs.readFileSync(LEDGER, "utf8").split("\n")) {
		const s = l.trim();
		if (!s || s.startsWith("#")) continue;
		const [p, status, hash] = s.split("\t");
		if (p) ledger.set(p, { status, hash });
	}
	return ledger;
}

function main() {
	const verbose = process.argv.includes("--verbose");
	const files = walk(JA_DIR);
	const allow = loadAllowlist();
	const ledger = readLedger();

	const missing = [];
	const stale = [];
	for (const f of files) {
		const rel = path.relative(JA_DIR, f);
		const rec = ledger.get(rel);
		if (!rec) missing.push(rel);
		else if (rec.hash !== sha256(f)) stale.push(rel);
	}

	const residue = files.flatMap((f) => scanResidue(f, allow));
	const oldTermAllow = loadAllowlist(OLD_TERM_ALLOWLIST);
	const oldTerms = files.flatMap((f) => scanStaleTerms(f, oldTermAllow));
	const controls = files.flatMap((f) => scanControlChars(f));
	const rawLinks = files.flatMap((f) => scanRawLinks(f));
	const tables = files.flatMap((f) => scanTableShape(f));
	const labels = files.flatMap((f) => scanFilenameLabels(f));

	console.log(`MISSING: ${missing.length}`);
	console.log(`STALE: ${stale.length}`);
	console.log(`RESIDUE: ${residue.length}`);
	console.log(`OLD_TERM: ${oldTerms.length}`);
	console.log(`CONTROL: ${controls.length}`);
	console.log(`RAW_LINK: ${rawLinks.length}`);
	console.log(`TABLE: ${tables.length} (基準 ${BASELINE.TABLE})`);
	console.log(`LABEL: ${labels.length} (基準 ${BASELINE.LABEL})`);

	const show = (label, arr, fmt) => {
		if (!arr.length) return;
		const n = verbose ? arr.length : 15;
		const more = arr.length > n ? `, 先頭${n}件` : "";
		console.log(`\n--- ${label} (${arr.length}件${more}) ---`);
		arr.slice(0, n).forEach((x) => console.log("  " + fmt(x)));
	};
	show("MISSING: 台帳に未記載", missing, (x) => x);
	show("STALE: 台帳のsha256と内容が不一致", stale, (x) => x);
	show("RESIDUE: 中国語残存の疑い", residue, (x) => `${x.file}:${x.line} [${x.why}] ${x.text}`);
	show("OLD_TERM: 旧訳語・誤訳語の残存", oldTerms, (x) => `${x.file}:${x.line} [${x.bad}→${x.good}] ${x.note} :: ${x.text}`);
	show("CONTROL: 制御文字の混入", controls, (x) => `${x.file}:${x.line} [${x.code}] ${x.text}`);
	show(
		"RAW_LINK: <td> 内の Markdown リンクが MarkdownWrapper で囲まれていない",
		rawLinks,
		(x) => `${x.file}:${x.line} ${x.text}`,
	);
	show(
		"TABLE: 見出し行と区切り行の列数が不一致 (表として描画されない)",
		tables,
		(x) => `${x.file}:${x.line} 見出し${x.head}列 / 区切り${x.delim}列`,
	);
	show(
		"LABEL: リンクテキストがファイル名のまま (リンク先ページの title を使う)",
		labels,
		(x) => `${x.file}:${x.line} [${x.label}] → ${x.stem}`,
	);

	const ok =
		!missing.length &&
		!stale.length &&
		!residue.length &&
		!oldTerms.length &&
		!controls.length &&
		!rawLinks.length &&
		tables.length <= BASELINE.TABLE &&
		labels.length <= BASELINE.LABEL;
	if (tables.length > BASELINE.TABLE || labels.length > BASELINE.LABEL) {
		console.log(
			`\n基準値を超過。TABLE ${tables.length}/${BASELINE.TABLE}、LABEL ${labels.length}/${BASELINE.LABEL}。` +
				"新しく作った分を直すこと (既存分の基準値を上げて通すのは禁止)。",
		);
	}
	if (!ok) console.log("\n未達。上記を解消すること。");
	process.exit(ok ? 0 : 1);
}

main();
