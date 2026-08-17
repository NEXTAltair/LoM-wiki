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

関係の種類ごとに図を分けています。1枚の図にすべての関係を詰め込むと読めなくなるため、「師承・家族」「対外的な因縁」のように図ごとに主題を固定しています。

<p class="rc-legend"><span style="color:#d98a2b;">━</span> 情誼・家族　<span style="color:#8a8f98;">━</span> 師承・利害・その他　<span style="color:#8a8f98;">╌╌</span> 疑い　<span style="color:#d64545;">╌╌</span> 敵意・対立・離反　<span style="color:#4a7dd6;">╌╌</span> 隠れた関係</p>

## 蜀中唐門 — 師承・家族図

横の並びが同じ段の人物は同世代 (同じ輩分) です。下段の弟子たちは全員 [唐中翎](/ja/people/characters/master) の弟子で、自明な師弟の線は引かず、個別の事情がある線だけを示しています。

<div class="rc-fig">
<svg viewBox="0 0 1010 560" role="img" aria-label="蜀中唐門 師承・家族図">
  <defs>
    <marker id="rc-ar-warm" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 z" fill="#d98a2b"/></marker>
    <marker id="rc-ar-neu" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 z" fill="#8a8f98"/></marker>
    <marker id="rc-ar-neg" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 z" fill="#d64545"/></marker>
    <marker id="rc-ar-cov" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto"><path d="M0,0 L12,5 L0,10 z" fill="#4a7dd6"/></marker>
    <clipPath id="rf-c-aunt"><circle cx="110" cy="100" r="36"/></clipPath>
    <clipPath id="rf-c-master"><circle cx="390" cy="100" r="36"/></clipPath>
    <clipPath id="rf-c-luk"><circle cx="620" cy="100" r="36"/></clipPath>
    <clipPath id="rf-c-chao"><circle cx="90" cy="390" r="36"/></clipPath>
    <clipPath id="rf-c-b1"><circle cx="210" cy="390" r="36"/></clipPath>
    <clipPath id="rf-c-b2"><circle cx="330" cy="390" r="36"/></clipPath>
    <clipPath id="rf-c-b3"><circle cx="450" cy="390" r="36"/></clipPath>
    <clipPath id="rf-c-b4"><circle cx="570" cy="390" r="36"/></clipPath>
    <clipPath id="rf-c-player"><circle cx="690" cy="390" r="36"/></clipPath>
    <clipPath id="rf-c-ml"><circle cx="810" cy="390" r="36"/></clipPath>
    <clipPath id="rf-c-shouhong"><circle cx="948" cy="100" r="36"/></clipPath>
    <clipPath id="rf-c-shan"><circle cx="948" cy="390" r="36"/></clipPath>
  </defs>
  <rect x="25" y="30" width="850" height="450" rx="10" fill="none" stroke="var(--vp-c-divider)" stroke-width="1.5"/>
  <text class="rc-grp" x="45" y="55" text-anchor="start">蜀中唐門</text>
  <rect x="893" y="30" width="112" height="450" rx="10" fill="none" stroke="var(--vp-c-divider)" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text class="rc-grp" x="948" y="55">広州唐門</text>
  <text class="rc-role" x="948" y="70">(唐門非公認)</text>
  <line class="rc-e rc-neu" x1="154" y1="100" x2="346" y2="100"/>
  <text class="rc-lab" x="250" y="90">同門</text>
  <line class="rc-e rc-warm" x1="434" y1="100" x2="576" y2="100"/>
  <text class="rc-lab" x="505" y="90">夫婦・師兄妹</text>
  <line class="rc-e rc-neu" x1="398.9" y1="143.1" x2="440.3" y2="343" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="420" y="240">刑場破りで救出</text>
  <line class="rc-e rc-warm" x1="426.2" y1="125" x2="770.5" y2="362.7" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="616" y="254">父</text>
  <line class="rc-e rc-warm" x1="644.1" y1="136.8" x2="783.7" y2="349.9" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="714" y="243">母</text>
  <line class="rc-e rc-neu rc-dash" x1="588.9" y1="131.1" x2="364" y2="356.1" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="505" y="207">生母と疑われる</text>
  <line class="rc-e rc-warm" x1="584.1" y1="125.4" x2="249.2" y2="362.3" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="513" y="170">万霊丹を託す</text>
  <line class="rc-e rc-warm rc-dash" x1="107" y1="143.9" x2="93.3" y2="342.1" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="140" y="243">乾児子</text>
  <line class="rc-e rc-neg" x1="904" y1="100" x2="878" y2="100" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="893" y="88">叛逃</text>
  <line class="rc-e rc-neu" x1="948" y1="144" x2="948" y2="342" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="962" y="243" text-anchor="start">師</text>
  <image href="/images/characters/aunt2/normal.webp" x="74" y="64" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-aunt)"/>
  <circle class="rc-n" cx="110" cy="100" r="36"/>
  <text class="rc-name" x="110" y="153">唐小楼</text>
  <text class="rc-role" x="110" y="168">大師姑 (掌門と同門)</text>
  <image href="/images/characters/master/normal.webp" x="354" y="64" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-master)"/>
  <circle class="rc-n" cx="390" cy="100" r="36"/>
  <text class="rc-name" x="390" y="153">唐中翎</text>
  <text class="rc-role" x="390" y="168">掌門</text>
  <circle cx="620" cy="100" r="36" fill="var(--vp-c-bg-soft)"/>
  <text class="rc-name" x="620" y="107" style="font-size:20px;">鹿</text>
  <circle class="rc-n" cx="620" cy="100" r="36"/>
  <text class="rc-name" x="620" y="153">唐鹿</text>
  <text class="rc-role" x="620" y="168">師娘・故人</text>
  <image href="/images/characters/special208/normal.webp" x="54" y="354" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-chao)"/>
  <circle class="rc-n" cx="90" cy="390" r="36"/>
  <text class="rc-name" x="90" y="443">晁和</text>
  <text class="rc-role" x="90" y="458">入門弟子</text>
  <image href="/images/characters/brother1/normal.webp" x="174" y="354" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-b1)"/>
  <circle class="rc-n" cx="210" cy="390" r="36"/>
  <text class="rc-name" x="210" y="443">唐布衣</text>
  <text class="rc-role" x="210" y="458">大師兄</text>
  <image href="/images/characters/brother2/normal.webp" x="294" y="354" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-b2)"/>
  <circle class="rc-n" cx="330" cy="390" r="36"/>
  <text class="rc-name" x="330" y="443">唐錚</text>
  <text class="rc-role" x="330" y="458">二師兄</text>
  <image href="/images/characters/brother3/normal.webp" x="414" y="354" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-b3)"/>
  <circle class="rc-n" cx="450" cy="390" r="36"/>
  <text class="rc-name" x="450" y="443">唐陞</text>
  <text class="rc-role" x="450" y="458">三師兄</text>
  <image href="/images/characters/brother4/normal.webp" x="534" y="354" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-b4)"/>
  <circle class="rc-n" cx="570" cy="390" r="36"/>
  <text class="rc-name" x="570" y="443">唐惟元</text>
  <text class="rc-role" x="570" y="458">四師兄</text>
  <image href="/images/characters/player/normal.webp" x="654" y="354" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-player)"/>
  <circle class="rc-n" cx="690" cy="390" r="36"/>
  <text class="rc-name" x="690" y="443">趙活</text>
  <text class="rc-role" x="690" y="458">外姓弟子</text>
  <image href="/images/characters/girl_0/normal.webp" x="774" y="354" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-ml)"/>
  <circle class="rc-n" cx="810" cy="390" r="36"/>
  <text class="rc-name" x="810" y="443">唐默鈴</text>
  <text class="rc-role" x="810" y="458">千金</text>
  <image href="/images/characters/special812/normal.webp" x="912" y="64" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-shouhong)"/>
  <circle class="rc-n" cx="948" cy="100" r="36"/>
  <text class="rc-name" x="948" y="153">唐守鴻</text>
  <text class="rc-role" x="948" y="168">「佛手香」</text>
  <image href="/images/characters/special811/normal.webp" x="912" y="354" width="72" height="72" preserveAspectRatio="xMidYMin slice" clip-path="url(#rf-c-shan)"/>
  <circle class="rc-n" cx="948" cy="390" r="36"/>
  <text class="rc-name" x="948" y="443">唐衫</text>
</svg>
</div>

- [唐鹿](/ja/people/characters/other10) は [唐中翎](/ja/people/characters/master) の師妹にして妻。[極楽教](/ja/people/factions/elysium-school) の『屍心丹』に中毒して支配されていた間に [唐錚](/ja/people/characters/brother2) を生んだと疑われた。[唐默鈴](/ja/people/characters/girl0) を [趙活](/ja/people/characters/player) に託した後、崖に身を投げた。
- [唐陞](/ja/people/characters/brother3) は刑場破りの折、まだ掌門就任前の [唐中翎](/ja/people/characters/master) が少年の [唐布衣](/ja/people/characters/brother1)・[唐錚](/ja/people/characters/brother2) を率いて救い出した縁で唐門に入った。
- [唐小楼](/ja/people/characters/aunt2) は講経楼に二十年座った大師姑。すでに嫁ぎ出たが折々戻っては輩分を振りかざす。子がなく、[晁和](/ja/people/characters/special208) を乾児子として溺愛している。
- 広州唐門は叛逃者「佛手香」[唐守鴻](/ja/people/characters/special812) が開いた分院で、唐門はこれを認めていない。弟子に [唐衫](/ja/people/characters/special811) がいる。
- 失伝した真の万霊丹は、[唐鹿](/ja/people/characters/other10) が [唐布衣](/ja/people/characters/brother1) に与えた一份だけが残る。同時に贈られたガラスの花は唐門の暗器『無形箭』。

## 蜀中唐門 — 弟子世代の間柄図

弟子世代どうしの個人間の間柄です。この図には段と世代の対応はありません。

<div class="rc-fig">
<svg viewBox="0 0 920 640" role="img" aria-label="蜀中唐門 弟子世代の間柄図">
  <defs>
    <clipPath id="rc-c-player"><circle cx="460" cy="300" r="40"/></clipPath>
    <clipPath id="rc-c-b1"><circle cx="150" cy="110" r="40"/></clipPath>
    <clipPath id="rc-c-b2"><circle cx="770" cy="110" r="40"/></clipPath>
    <clipPath id="rc-c-b3"><circle cx="120" cy="330" r="40"/></clipPath>
    <clipPath id="rc-c-b4"><circle cx="200" cy="520" r="40"/></clipPath>
    <clipPath id="rc-c-ml"><circle cx="790" cy="350" r="40"/></clipPath>
    <clipPath id="rc-c-chao"><circle cx="620" cy="540" r="40"/></clipPath>
    <clipPath id="rc-c-aunt"><circle cx="460" cy="80" r="40"/></clipPath>
  </defs>
  <line class="rc-e rc-cov" x1="190.9" y1="135.1" x2="415.7" y2="272.9" marker-end="url(#rc-ar-cov)"/>
  <line class="rc-e rc-neu" x1="729.1" y1="135.1" x2="504.3" y2="272.9" marker-end="url(#rc-ar-neu)"/>
  <line class="rc-e rc-warm" x1="167.8" y1="325.8" x2="408.2" y2="304.6" marker-end="url(#rc-ar-warm)"/>
  <line class="rc-e rc-neu" x1="236.6" y1="489" x2="420.3" y2="333.6" marker-end="url(#rc-ar-neu)"/>
  <line class="rc-e rc-warm" x1="507.5" y1="298.2" x2="738.6" y2="333.2" marker-end="url(#rc-ar-warm)"/>
  <line class="rc-e rc-warm" x1="738.6" y1="351.2" x2="507.5" y2="316.2" marker-end="url(#rc-ar-warm)"/>
  <line class="rc-e rc-neg" x1="593.4" y1="500.1" x2="488.9" y2="343.3" marker-end="url(#rc-ar-neg)"/>
  <line class="rc-e rc-neg" x1="460" y1="128" x2="460" y2="248" marker-end="url(#rc-ar-neg)"/>
  <line class="rc-e rc-neu" x1="248" y1="522.3" x2="568.1" y2="537.5" marker-end="url(#rc-ar-neu)"/>
  <line class="rc-e rc-neg" x1="635.8" y1="494.7" x2="752.9" y2="159.1" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="300" y="195">黒衣で密かに指南</text>
  <text class="rc-lab" x="625" y="195">罵倒しつつ世話を焼く</text>
  <text class="rc-lab" x="288" y="299">本命銭を旅費に贈る</text>
  <text class="rc-lab" x="328" y="405">言い訳の盾/分け前折半</text>
  <text class="rc-lab" x="620" y="296">幼少から世話係</text>
  <text class="rc-lab" x="623" y="352">懐いている</text>
  <text class="rc-lab" x="545" y="418">なりすまし・罪の擦り付け</text>
  <text class="rc-lab" x="460" y="178">雑役と見下す</text>
  <text class="rc-lab" x="410" y="512">銭を詐取</text>
  <text class="rc-lab" x="648" y="466">召喚無視・丹薬爆発</text>
  <image href="/images/characters/player/normal.webp" x="420" y="260" width="80" height="80" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-player)"/>
  <circle class="rc-n" cx="460" cy="300" r="40"/>
  <text class="rc-name" x="460" y="358">趙活</text>
  <text class="rc-role" x="460" y="374">外姓弟子</text>
  <image href="/images/characters/brother1/normal.webp" x="110" y="70" width="80" height="80" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-b1)"/>
  <circle class="rc-n" cx="150" cy="110" r="40"/>
  <text class="rc-name" x="150" y="168">唐布衣</text>
  <text class="rc-role" x="150" y="184">大師兄</text>
  <image href="/images/characters/brother2/normal.webp" x="730" y="70" width="80" height="80" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-b2)"/>
  <circle class="rc-n" cx="770" cy="110" r="40"/>
  <text class="rc-name" x="770" y="168">唐錚</text>
  <text class="rc-role" x="770" y="184">二師兄</text>
  <image href="/images/characters/brother3/normal.webp" x="80" y="290" width="80" height="80" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-b3)"/>
  <circle class="rc-n" cx="120" cy="330" r="40"/>
  <text class="rc-name" x="120" y="388">唐陞</text>
  <text class="rc-role" x="120" y="404">三師兄</text>
  <image href="/images/characters/brother4/normal.webp" x="160" y="480" width="80" height="80" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-b4)"/>
  <circle class="rc-n" cx="200" cy="520" r="40"/>
  <text class="rc-name" x="200" y="578">唐惟元</text>
  <text class="rc-role" x="200" y="594">四師兄</text>
  <image href="/images/characters/girl_0/normal.webp" x="750" y="310" width="80" height="80" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-ml)"/>
  <circle class="rc-n" cx="790" cy="350" r="40"/>
  <text class="rc-name" x="790" y="408">唐默鈴</text>
  <text class="rc-role" x="790" y="424">小師妹</text>
  <image href="/images/characters/special208/normal.webp" x="580" y="500" width="80" height="80" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-chao)"/>
  <circle class="rc-n" cx="620" cy="540" r="40"/>
  <text class="rc-name" x="620" y="598">晁和</text>
  <text class="rc-role" x="620" y="614">唐小楼の乾児子</text>
  <image href="/images/characters/aunt2/normal.webp" x="420" y="40" width="80" height="80" preserveAspectRatio="xMidYMin slice" clip-path="url(#rc-c-aunt)"/>
  <circle class="rc-n" cx="460" cy="80" r="40"/>
  <text class="rc-name" x="405" y="75" text-anchor="end">唐小楼</text>
  <text class="rc-role" x="405" y="91" text-anchor="end">大師姑</text>
</svg>
</div>

- [唐布衣](/ja/people/characters/brother1) は何度も [趙活](/ja/people/characters/player) の背中を忘形篇で打ち、黒衣の者を装って後山で指南した。
- [唐錚](/ja/people/characters/brother2) は [趙活](/ja/people/characters/player) を「役立たず」「趙氏蠢豚」と罵るが、江陵の千金方に働き口を紹介するなど面倒見はよい。
- [唐陞](/ja/people/characters/brother3) は志気を失って下山する [趙活](/ja/people/characters/player) に、長年身につけていた本命銭を「複数の師兄の代わり」として旅費に持たせた。
- [唐惟元](/ja/people/characters/brother4) は言い逃れの際に [趙活](/ja/people/characters/player) を盾として推し出すが、その助力で [晁和](/ja/people/characters/special208) から詐取した銭は率先して半分を分ける。
- [唐默鈴](/ja/people/characters/girl0) は幼い頃から妹のように [趙活](/ja/people/characters/player) に預けられて世話され、毎晩窓の下でお話を聞いて眠る。趙活が窓の外に座っていることをずっと前から知っていた。
- [晁和](/ja/people/characters/special208) は [趙活](/ja/people/characters/player) になりすまして広州で偽造医薬を売り、[丐幇](/ja/people/factions/beggar-gang) と [嵩山派](/ja/people/factions/mount-song-sect) を煽動した争いの罪を擦り付けようとした。
- [唐小楼](/ja/people/characters/aunt2) は [趙活](/ja/people/characters/player) を低い身分の雑役と見なし、彼に良いことが起こるのを快く思わない。

## 蜀中唐門 — 対外因縁図

<div class="rc-fig">
<svg viewBox="0 0 940 590" role="img" aria-label="蜀中唐門 対外因縁図">
  <line class="rc-e rc-neg" x1="213" y1="140" x2="424" y2="272" marker-start="url(#rc-ar-neg)" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="300" y="190">宿敵・数十戦</text>
  <line class="rc-e rc-warm" x1="212" y1="300" x2="412" y2="300" marker-end="url(#rc-ar-warm)"/>
  <text class="rc-lab" x="310" y="288">仲裁・庇護</text>
  <line class="rc-e rc-neg" x1="213" y1="460" x2="424" y2="330" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="300" y="412">討滅戦で唐門重創 (過去)</text>
  <line class="rc-e rc-neg" x1="700" y1="140" x2="516" y2="272" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="600" y="190">刑場破り以来忌憚</text>
  <line class="rc-e rc-neu" x1="760" y1="144" x2="760" y2="276" marker-end="url(#rc-ar-neu)"/>
  <text class="rc-lab" x="772" y="215" text-anchor="start">弱体化の密命</text>
  <line class="rc-e rc-neg" x1="698" y1="300" x2="526" y2="300" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="612" y="288">暗中工作</text>
  <line class="rc-e rc-neg" x1="608" y1="456" x2="496" y2="346" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="590" y="412">南嵩山の怨恨</text>
  <line class="rc-e rc-neu" x1="748" y1="324" x2="646" y2="454"/>
  <text class="rc-lab" x="712" y="390">結託</text>
  <line class="rc-e rc-neu" x1="682" y1="480" x2="788" y2="480"/>
  <text class="rc-lab" x="735" y="470">結託</text>
  <line class="rc-e rc-neg" x1="470" y1="114" x2="470" y2="244" marker-end="url(#rc-ar-neg)"/>
  <text class="rc-lab" x="482" y="185" text-anchor="start">石夫人の件の誤解</text>
  <circle cx="470" cy="300" r="52" fill="var(--vp-c-bg-soft)" stroke="var(--vp-c-text-2)" stroke-width="2"/>
  <text class="rc-name" x="470" y="306" style="font-size:16px;">蜀中唐門</text>
  <rect class="rc-f" x="90" y="98" width="120" height="44"/>
  <text class="rc-name" x="150" y="125">点蒼派</text>
  <rect class="rc-f" x="90" y="278" width="120" height="44"/>
  <text class="rc-name" x="150" y="305">南宮世家</text>
  <rect class="rc-f" x="90" y="458" width="120" height="44"/>
  <text class="rc-name" x="150" y="478">極楽教</text>
  <text class="rc-role" x="150" y="495">討滅済</text>
  <rect class="rc-f" x="410" y="68" width="120" height="44"/>
  <text class="rc-name" x="470" y="95">飛石幇</text>
  <rect class="rc-f" x="700" y="98" width="120" height="44"/>
  <text class="rc-name" x="760" y="125">大宋朝廷</text>
  <rect class="rc-f" x="700" y="278" width="120" height="44"/>
  <text class="rc-name" x="760" y="305">上官世家</text>
  <rect class="rc-f" x="560" y="458" width="120" height="44"/>
  <text class="rc-name" x="620" y="485">釈明</text>
  <rect class="rc-f" x="790" y="458" width="130" height="44"/>
  <text class="rc-name" x="855" y="485">広州唐門</text>
</svg>
</div>

- [点蒼派](/ja/people/factions/dian-cang-sect) との宿怨は剣聖のだまし討ちに始まり、大小数十戦に及ぶ。衰退期の唐門に挑んだ点蒼剣聖 [無名](/ja/people/characters/special406) を掌門が打ち倒し、[南宮世家](/ja/people/factions/nan-gong-family) の仲裁の下で封剣隠退させた。
- [大宋](/ja/people/factions/song-dynasty) 朝廷は刑場破り以来唐門を忌憚し、[趙擴](/ja/people/characters/special817) が [上官世家](/ja/people/factions/shang-guan-family) に暗中での弱体化を命じた。上官世家は南嵩山の [釈明](/ja/people/characters/special826)、広州唐門と結託して難を起こした。
- [釈明](/ja/people/characters/special826) の怨恨は、若き日の [唐中翎](/ja/people/characters/master) が南嵩山寺に罪人を千里追殺した「南嵩山心魔」の一件に由来する。
- [飛石幇](/ja/people/factions/flying-stone-gang) との争いは、[唐布衣](/ja/people/characters/brother1) が家出した [石夫人](/ja/people/characters/special815) を保護したのを [石公遠](/ja/people/characters/special7) が拐かしと誤解したことによる。
- [極楽教](/ja/people/factions/elysium-school) 討滅戦で唐門は重創を受け、衰退の起点となった。

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
.rc-e { stroke-width: 2; fill: none; }
.rc-warm { stroke: #d98a2b; }
.rc-neu { stroke: #8a8f98; }
.rc-neg { stroke: #d64545; stroke-dasharray: 6 5; }
.rc-cov { stroke: #4a7dd6; stroke-dasharray: 6 5; }
.rc-dash { stroke-dasharray: 6 5; }
.rc-n { fill: none; stroke: var(--vp-c-divider); stroke-width: 2; }
.rc-f { fill: var(--vp-c-bg-soft); stroke: var(--vp-c-divider); stroke-width: 1.5; rx: 10; }
.rc-grp {
    font-size: 14px;
    font-weight: 600;
    text-anchor: middle;
    fill: var(--vp-c-text-2);
}
.rc-lab {
    font-size: 13px;
    text-anchor: middle;
    fill: var(--vp-c-text-1);
    stroke: var(--vp-c-bg);
    stroke-width: 4;
    paint-order: stroke;
}
.rc-name {
    font-size: 14px;
    font-weight: 600;
    text-anchor: middle;
    fill: var(--vp-c-text-1);
    stroke: var(--vp-c-bg);
    stroke-width: 4;
    paint-order: stroke;
}
.rc-role {
    font-size: 11px;
    text-anchor: middle;
    fill: var(--vp-c-text-2);
    stroke: var(--vp-c-bg);
    stroke-width: 3;
    paint-order: stroke;
}
.rc-legend { font-size: 13px; text-align: center; }
</style>
