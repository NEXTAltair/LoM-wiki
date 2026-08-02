// docs/{root,ja,en}/event/story-simple-table.md を走査し、イベントページの「時系列で前後」の
// ナビゲーション用データを生成する。
//
// 目的: イベントページ (simple / detailed_description) は locale のどのサイドバーにも
// 属していないため、VitePress 標準の prev/next フッターが常に空になる。読者は
// シナリオ簡易表に戻らないと隣のイベントへ移動できない。この生成物を EventNav.vue が読んで
// フッターに前後リンクを出す。
//
// **順序の SSoT はシナリオ簡易表そのもの**。表の年→月→旬→セル内の並び順をそのまま採用する。
// ページを新設したら簡易表に登録する (clean-event-template.md の「公開後にやること」) だけで
// ナビゲーションが自動で繋がり、別の順序表を二重管理しなくて済む。
//
// 表の並びは編集者が付けた配置であって「話の続き」ではない。同じイベントが複数の月・複数の
// ルート列に重複掲載されることもある (定例の唐門月会、滅門/西武林の両ルートに出る戦役など)。
// そのため重複は初出のみ採用し、EventNav 側の見出しも「次のイベント」ではなく
// 「時系列で次」と名乗る。本当の前提/後続関係は各ページの備考セルに手書きで書く。
//
// 出力先は buildLocalePageManifest.js と同じ theme/data 配下 (component が import するだけで
// URL 経由の配信が不要なため)。生成物は手編集禁止。

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "docs", ".vitepress", "theme", "data", "event_timeline.json");

// localeIndex (VitePress) → docs 配下の locale ディレクトリ。root は接頭辞なし。
const LOCALE_DIRS = {
    root: "",
    ja: "ja",
    en: "en",
};

// シナリオ簡易表のセル内に書かれた Markdown リンクのうち、イベントページを指すものだけ拾う。
// 例: [ゲーム開始](/ja/event/simple/1-04-1-遊戲開局)
const EVENT_LINK = /\[([^\]\n]+)\]\((\/(?:ja\/|en\/)?event\/(?:simple|detailed_description)\/[^)\s#]+)(#[^)\s]*)?\)/g;

// 表を上から読んで、イベントページへのリンクを出現順に集める。
// 同じページが複数のセルに出る場合は初出だけを採用する (定例イベント・ルート別の重複掲載)。
function collectOrderedEntries(tablePath, localeDir) {
    if (!fs.existsSync(tablePath)) {
        return [];
    }
    const source = fs.readFileSync(tablePath, "utf8");
    const seen = new Set();
    const entries = [];
    for (const match of source.matchAll(EVENT_LINK)) {
        const [, text, link] = match;
        if (seen.has(link)) {
            continue;
        }
        // リンク先の実ファイルが無いものは載せない (表側の書き間違い・未作成ページ)。
        const relativePath = `${link.replace(/^\//, "")}.md`;
        if (!fs.existsSync(path.join(ROOT, "docs", relativePath))) {
            console.warn(`  リンク先が存在しないため除外: ${link} (${localeDir || "root"})`);
            continue;
        }
        seen.add(link);
        entries.push({ link, text: text.trim(), relativePath });
    }
    return entries;
}

// useData().page.relativePath をキーにする。route.path と違って base も .html も付かないため、
// component 側で現在ページを引くのに一番素直に使える。
const index = {};
let total = 0;
for (const [locale, localeDir] of Object.entries(LOCALE_DIRS)) {
    const tablePath = path.join(ROOT, "docs", localeDir, "event", "story-simple-table.md");
    const entries = collectOrderedEntries(tablePath, localeDir);
    entries.forEach((entry, i) => {
        const prev = entries[i - 1];
        const next = entries[i + 1];
        index[entry.relativePath] = {
            prev: prev ? { link: prev.link, text: prev.text } : null,
            next: next ? { link: next.link, text: next.text } : null,
        };
    });
    total += entries.length;
    console.log(`  ${locale}: ${entries.length} 件`);
}

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(index, null, 2) + "\n", "utf8");
console.log(`Event timeline index generated: ${path.relative(ROOT, OUTPUT)} (${total} 件)`);
