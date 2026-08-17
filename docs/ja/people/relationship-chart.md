---
title: 人物相関図
aside: false
sidebar: false
outline: [2, 3]
tags:
    - 人物
---

# {{ $frontmatter.title }}

::: warning ネタバレ注意
このページは物語終盤までの人物関係のネタバレを**区別なく**含みます。
:::

勢力を軸に1枚へまとめています。線には関係の要点だけを短く記し、詳細は図の下の補足に書いています。

<p class="rc-legend"><span style="color:#d98a2b;">━</span> 情誼・家族　<span style="color:#8a8f98;">━</span> 利害・その他　<span style="color:#8a8f98;">╌╌</span> 疑い　<span style="color:#d64545;">╌╌</span> 敵意・対立・離反　<span style="color:#4a7dd6;">╌╌</span> 隠れた関係</p>

## 蜀中唐門相関図

<div class="rc-fig">
<svg viewBox="0 0 1100 700" role="img" aria-label="蜀中唐門相関図">
  <defs>
    <marker id="rc-ar-warm" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 z" fill="#d98a2b"/></marker>
    <marker id="rc-ar-neu" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 z" fill="#8a8f98"/></marker>
    <marker id="rc-ar-neg" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 z" fill="#d64545"/></marker>
    <marker id="rc-ar-neg-s" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="1" refY="5" orient="auto"><path d="M12,0 L0,5 L12,10 z" fill="#d64545"/></marker>
    <marker id="rc-ar-cov" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 z" fill="#4a7dd6"/></marker>
    <clipPath id="rc-c-master"><circle cx="300" cy="200" r="38"/></clipPath>
    <clipPath id="rc-c-ml"><circle cx="330" cy="360" r="38"/></clipPath>
    <clipPath id="rc-c-player"><circle cx="540" cy="420" r="38"/></clipPath>
    <clipPath id="rc-c-b1"><circle cx="140" cy="430" r="38"/></clipPath>
    <clipPath id="rc-c-b2"><circle cx="260" cy="545" r="38"/></clipPath>
    <clipPath id="rc-c-b3"><circle cx="430" cy="555" r="38"/></clipPath>
    <clipPath id="rc-c-b4"><circle cx="640" cy="530" r="38"/></clipPath>
    <clipPath id="rc-c-aunt"><circle cx="860" cy="340" r="38"/></clipPath>
    <clipPath id="rc-c-chao"><circle cx="860" cy="480" r="38"/></clipPath>
  </defs>
  <rect x="60" y="110" width="700" height="530" rx="14" fill="var(--vp-c-bg-soft)" fill-opacity="0.45" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
  <text class="rc-grp" x="115" y="140">蜀中唐門</text>
  <line class="rc-e rc-warm" x1="338" y1="200" x2="432" y2="200"/>
  <text class="rc-lab" x="385" y="190">夫婦</text>
  <line class="rc-e rc-warm" x1="385" y1="202" x2="344.3" y2="318.4" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="350" y="262">娘</text>
  <line class="rc-e rc-neu rc-dash" x1="447" y1="238" x2="287" y2="500" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="400" y="330">母?</text>
  <path class="rc-e rc-warm" d="M 430 210 Q 250 215 175 400" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="230" y="222">万霊丹</text>
  <line class="rc-e rc-warm" x1="495.5" y1="415.6" x2="373.9" y2="380.9" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="430" y="417">子守役</text>
  <line class="rc-e rc-warm" x1="374.5" y1="364.4" x2="496.1" y2="399.1" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="445" y="364">懐く</text>
  <line class="rc-e rc-cov" x1="184" y1="428.9" x2="492" y2="421.2" marker-end="url(#rc-ar-cov)"/>
  <text class="rc-lab" x="330" y="447">密かに指南</text>
  <line class="rc-e rc-neu" x1="300.2" y1="527.1" x2="496.2" y2="439.6" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="400" y="472">罵倒&世話</text>
  <line class="rc-e rc-warm" x1="457.8" y1="520.9" x2="509.6" y2="457.2" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="505" y="512" text-anchor="start">餞別の銭</text>
  <line class="rc-e rc-neu" x1="610.4" y1="497.4" x2="572.3" y2="455.5" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="612" y="472" text-anchor="start">詐欺の相棒</text>
  <line class="rc-e rc-neu" x1="682.9" y1="520.2" x2="813.1" y2="490.7" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="748" y="492">銭を詐取</text>
  <line class="rc-e rc-neg" x1="816.8" y1="471.9" x2="587.2" y2="428.8" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="700" y="436">罪の擦り付け</text>
  <line class="rc-e rc-neg" x1="817.3" y1="350.7" x2="586.6" y2="408.3" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="700" y="366">見下す</text>
  <line class="rc-e rc-warm rc-dash" x1="860" y1="384" x2="860" y2="432" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="874" y="412" text-anchor="start">乾児子</text>
  <line class="rc-e rc-neg" x1="935" y1="160" x2="768" y2="180" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="850" y="156">叛逃</text>
  <line class="rc-e rc-neu" x1="902" y1="52" x2="946" y2="52" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="925" y="40">密命</text>
  <line class="rc-e rc-neg" x1="985" y1="74" x2="712" y2="110" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="860" y="97">暗中工作</text>
  <line class="rc-e rc-neu" x1="1018" y1="74" x2="1018" y2="128"/>
  <text class="rc-lab" x="1032" y="105" text-anchor="start">結託</text>
  <line class="rc-e rc-neu" x1="1018" y1="194" x2="1018" y2="236"/>
  <text class="rc-lab" x="1032" y="218" text-anchor="start">結託</text>
  <line class="rc-e rc-neg" x1="946" y1="262" x2="766" y2="262" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="855" y="250">怨恨</text>
  <line class="rc-e rc-neg" x1="150" y1="78" x2="150" y2="106" marker-start="url(#rc-ar-neg-s)" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="164" y="95" text-anchor="start">宿敵</text>
  <line class="rc-e rc-warm" x1="350" y1="78" x2="350" y2="106" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="364" y="95" text-anchor="start">仲裁役</text>
  <line class="rc-e rc-neg" x1="545" y1="78" x2="545" y2="106" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="559" y="95" text-anchor="start">討滅戦で重創</text>
  <image href="/images/characters/master/normal.webp" x="262" y="162" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-master)"/>
  <circle class="rc-n" cx="300" cy="200" r="38"/>
  <text class="rc-name" x="300" y="255">唐中翎</text>
  <text class="rc-role" x="300" y="271">掌門</text>
  <circle cx="470" cy="200" r="38" fill="var(--vp-c-bg-soft)"/>
  <text class="rc-name" x="470" y="207" style="font-size:20px;">鹿</text>
  <circle class="rc-n" cx="470" cy="200" r="38"/>
  <text class="rc-name" x="470" y="255">唐鹿</text>
  <text class="rc-role" x="470" y="271">師娘・故人</text>
  <image href="/images/characters/girl_0/normal.webp" x="292" y="322" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-ml)"/>
  <circle class="rc-n" cx="330" cy="360" r="38"/>
  <text class="rc-name" x="300" y="410" text-anchor="end">唐默鈴</text>
  <text class="rc-role" x="300" y="426" text-anchor="end">千金・小師妹</text>
  <image href="/images/characters/player/normal.webp" x="502" y="382" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-player)"/>
  <circle class="rc-n" cx="540" cy="420" r="38"/>
  <text class="rc-name" x="540" y="475">趙活</text>
  <text class="rc-role" x="540" y="491">外姓弟子</text>
  <image href="/images/characters/brother1/normal.webp" x="102" y="392" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-b1)"/>
  <circle class="rc-n" cx="140" cy="430" r="38"/>
  <text class="rc-name" x="140" y="485">唐布衣</text>
  <text class="rc-role" x="140" y="501">大師兄</text>
  <image href="/images/characters/brother2/normal.webp" x="222" y="507" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-b2)"/>
  <circle class="rc-n" cx="260" cy="545" r="38"/>
  <text class="rc-name" x="260" y="600">唐錚</text>
  <text class="rc-role" x="260" y="616">二師兄</text>
  <image href="/images/characters/brother3/normal.webp" x="392" y="517" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-b3)"/>
  <circle class="rc-n" cx="430" cy="555" r="38"/>
  <text class="rc-name" x="430" y="610">唐陞</text>
  <text class="rc-role" x="430" y="626">三師兄</text>
  <image href="/images/characters/brother4/normal.webp" x="602" y="492" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-b4)"/>
  <circle class="rc-n" cx="640" cy="530" r="38"/>
  <text class="rc-name" x="640" y="585">唐惟元</text>
  <text class="rc-role" x="640" y="601">四師兄</text>
  <image href="/images/characters/aunt2/normal.webp" x="822" y="302" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-aunt)"/>
  <circle class="rc-n" cx="860" cy="340" r="38"/>
  <text class="rc-name" x="812" y="335" text-anchor="end">唐小楼</text>
  <text class="rc-role" x="812" y="351" text-anchor="end">大師姑・嫁ぎ出た</text>
  <image href="/images/characters/special208/normal.webp" x="822" y="442" width="76" height="76" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-chao)"/>
  <circle class="rc-n" cx="860" cy="480" r="38"/>
  <text class="rc-name" x="860" y="535">晁和</text>
  <text class="rc-role" x="860" y="551">唐小楼の乾児子</text>
  <rect class="rc-f" x="80" y="30" width="140" height="44"/>
  <text class="rc-name" x="150" y="57">点蒼派</text>
  <rect class="rc-f" x="280" y="30" width="140" height="44"/>
  <text class="rc-name" x="350" y="57">南宮世家</text>
  <rect class="rc-f" x="470" y="30" width="150" height="44"/>
  <text class="rc-name" x="545" y="49">極楽教</text>
  <text class="rc-role" x="545" y="66">討滅済</text>
  <rect class="rc-f" x="760" y="30" width="140" height="44"/>
  <text class="rc-name" x="830" y="57">大宋朝廷</text>
  <rect class="rc-f" x="948" y="30" width="142" height="44"/>
  <text class="rc-name" x="1019" y="57">上官世家</text>
  <rect class="rc-f" x="940" y="130" width="150" height="62"/>
  <text class="rc-name" x="1015" y="155">広州唐門</text>
  <text class="rc-role" x="1015" y="175">唐守鴻・唐衫</text>
  <rect class="rc-f" x="950" y="240" width="140" height="44"/>
  <text class="rc-name" x="1020" y="267">釈明</text>
</svg>
</div>

### 唐門内部の補足

- [唐鹿](/ja/people/characters/other10) は [唐中翎](/ja/people/characters/master) の師妹にして妻。[極楽教](/ja/people/factions/elysium-school) の『屍心丹』に中毒して支配されていた間に [唐錚](/ja/people/characters/brother2) を生んだと疑われた (図の「母?」)。[唐默鈴](/ja/people/characters/girl0) を [趙活](/ja/people/characters/player) に託した後、崖に身を投げた。
- 失伝した真の万霊丹は、[唐鹿](/ja/people/characters/other10) が [唐布衣](/ja/people/characters/brother1) に与えた一份だけが残る。同時に贈られたガラスの花は唐門の暗器『無形箭』。
- [唐陞](/ja/people/characters/brother3) は刑場破りの折、まだ掌門就任前の [唐中翎](/ja/people/characters/master) が少年の [唐布衣](/ja/people/characters/brother1)・[唐錚](/ja/people/characters/brother2) を率いて救い出した縁で唐門に入った。
- [唐布衣](/ja/people/characters/brother1) は何度も [趙活](/ja/people/characters/player) の背中を忘形篇で打ち、黒衣の者を装って後山で指南した。
- [唐錚](/ja/people/characters/brother2) は [趙活](/ja/people/characters/player) を「役立たず」「趙氏蠢豚」と罵るが、江陵の千金方に働き口を紹介するなど面倒見はよい。
- [唐陞](/ja/people/characters/brother3) は志気を失って下山する [趙活](/ja/people/characters/player) に、長年身につけていた本命銭を「複数の師兄の代わり」として旅費に持たせた (図の「餞別の銭」)。
- [唐惟元](/ja/people/characters/brother4) は言い逃れの際に [趙活](/ja/people/characters/player) を盾として推し出すが、その助力で [晁和](/ja/people/characters/special208) から詐取した銭は率先して半分を分ける。
- [唐默鈴](/ja/people/characters/girl0) は幼い頃から妹のように [趙活](/ja/people/characters/player) に預けられて世話され、毎晩窓の下でお話を聞いて眠る。趙活が窓の外に座っていることをずっと前から知っていた。
- [唐小楼](/ja/people/characters/aunt2) は講経楼に二十年座った、掌門と同門の大師姑。すでに嫁ぎ出たが折々戻っては輩分を振りかざす。[趙活](/ja/people/characters/player) を低い身分の雑役と見なし、子がなく [晁和](/ja/people/characters/special208) を乾児子として溺愛している。
- [晁和](/ja/people/characters/special208) は [趙活](/ja/people/characters/player) になりすまして広州で偽造医薬を売り、[丐幇](/ja/people/factions/beggar-gang) と [嵩山派](/ja/people/factions/mount-song-sect) を煽動した争いの罪を擦り付けようとした。

### 対外関係の補足

- [点蒼派](/ja/people/factions/dian-cang-sect) との宿怨は剣聖のだまし討ちに始まり、大小数十戦に及ぶ。衰退期の唐門に挑んだ点蒼剣聖 [無名](/ja/people/characters/special406) を掌門が打ち倒し、[南宮世家](/ja/people/factions/nan-gong-family) の仲裁の下で封剣隠退させた。
- [大宋](/ja/people/factions/song-dynasty) 朝廷は刑場破り以来唐門を忌憚し、[趙擴](/ja/people/characters/special817) が [上官世家](/ja/people/factions/shang-guan-family) に暗中での弱体化を命じた。上官世家は南嵩山の [釈明](/ja/people/characters/special826)、広州唐門と結託して難を起こした。
- [釈明](/ja/people/characters/special826) の怨恨は、若き日の [唐中翎](/ja/people/characters/master) が南嵩山寺に罪人を千里追殺した「南嵩山心魔」の一件に由来する。
- 広州唐門は叛逃者「佛手香」[唐守鴻](/ja/people/characters/special812) が開いた分院で、唐門はこれを認めていない。弟子に [唐衫](/ja/people/characters/special811) がいる。
- [極楽教](/ja/people/factions/elysium-school) 討滅戦で唐門は重創を受け、衰退の起点となった。
- [飛石幇](/ja/people/factions/flying-stone-gang) との間には、[唐布衣](/ja/people/characters/brother1) が家出した [石夫人](/ja/people/characters/special815) を保護したのを [石公遠](/ja/people/characters/special7) が拐かしと誤解した一件がある。

<style>
.rc-fig {
    width: min(1100px, 96vw);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    overflow-x: auto;
    margin: 16px 0;
}
.rc-fig svg {
    width: 1100px;
    max-width: none;
    height: auto;
    display: block;
    margin: 0 auto;
}
.rc-e { stroke-width: 2.5; fill: none; }
.rc-warm { stroke: #d98a2b; }
.rc-neu { stroke: #8a8f98; }
.rc-neg { stroke: #d64545; stroke-dasharray: 6 5; }
.rc-cov { stroke: #4a7dd6; stroke-dasharray: 6 5; }
.rc-dash { stroke-dasharray: 6 5; }
.rc-n { fill: none; stroke: var(--vp-c-divider); stroke-width: 2; }
.rc-f { fill: var(--vp-c-bg-soft); stroke: var(--vp-c-divider); stroke-width: 1.5; rx: 10; }
.rc-grp {
    font-size: 16px;
    font-weight: 600;
    text-anchor: middle;
    fill: var(--vp-c-text-2);
}
.rc-lab {
    font-size: 15px;
    text-anchor: middle;
    fill: var(--vp-c-text-1);
    stroke: var(--vp-c-bg);
    stroke-width: 4;
    paint-order: stroke;
}
.rc-name {
    font-size: 15px;
    font-weight: 600;
    text-anchor: middle;
    fill: var(--vp-c-text-1);
    stroke: var(--vp-c-bg);
    stroke-width: 4;
    paint-order: stroke;
}
.rc-role {
    font-size: 12px;
    text-anchor: middle;
    fill: var(--vp-c-text-2);
    stroke: var(--vp-c-bg);
    stroke-width: 3;
    paint-order: stroke;
}
.rc-legend { font-size: 14px; text-align: center; }
</style>
