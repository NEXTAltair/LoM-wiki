---
aside: false
borderless: true
title: 養成コマンド
tags:
  - develop
  - 養成
  - イベント
---

# {{ $frontmatter.title }}
::: warning
本記事は工事中のため、一時的に検索機能なしの通常表に変更しています。
:::

<Table>
	<tr>
		<td :unsortable="true">場所</td>
		<td :unsortable="true">コマンド</td>
		<td :unsortable="true">イベント名</td>
		<td :unsortable="true">貢献</td>
		<td :unsortable="true">心相</td>
		<td :unsortable="true">
			<MoodIcon :mood="`normal`" /><br>
            心相:33~64<br>
            基礎効果
		</td>
		<td :unsortable="true">
			<MoodIcon :mood="`high`" /><br>
            心相:65~100<br>
            追加効果
		</td>
		<td :unsortable="true">
			<MoodIcon :mood="`bad`" /><br>
            心相:0~32<br>
            追加効果
		</td>
        <td :unsortable="true">確率重み</td>
		<td :unsortable="true">必要条件</td>
        <td>備考</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>工作輕鬆</td>
		<td>11</td>
		<td>-12</td>
		<td>
            • 品性+1、処世-1、団結-1<br>
            • 🚩「無可救薬ルート」なし: 唐中翎好感+1<br>
            • 🚩「無可救薬ルート」: 唐陞好感+1<br>            
        </td>
		<td>品性+1<br>処世+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>課外書籍</td>
		<td>11</td>
		<td>-12</td>
		<td>学問+2、処世-1、団結-1</td>
		<td>武学+2、鍛造+2、煉丹+2</td>
		<td>学問-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>打壞家具</td>
		<td>11</td>
		<td>-12</td>
		<td>
            • 処世-1、体力+1、武学+2、団結-2<br>
            • 🚩「無可救薬ルート」なし: 唐中翎好感-1<br>
            • 🚩「無可救薬ルート」: 唐陞好感-1<br> 
        </td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>偷懶馬虎</td>
		<td>11</td>
		<td>+18</td>
		<td>
            • 弁舌+1、処世+1、性情+1、道徳-1、団結-1<br>
            • 🚩「無可救薬ルート」なし: 唐中翎好感+2<br>
            • 🚩「無可救薬ルート」: 唐陞好感+2<br>            
        </td>
		<td>-</td>
		<td>弁舌-1</td>
		<td>
            • 基礎: 50<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>引發火災</td>
		<td>11</td>
		<td>-32</td>
		<td>
            • 銀両-1000、処世+1、団結-2、運命+1<br>
            • 🚩「無可救薬ルート」なし: 唐中翎好感-3<br>
            • 🚩「無可救薬ルート」: 唐陞好感-3<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 心相≤30: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>福韞論佛</td>
		<td>
            11<br>
            +5<br>
        </td>
		<td>-12</td>
		<td>
			• 学問+1<br>
            • 福韞好感+1、唐中翎好感+1<br>
		</td>
		<td>-</td>
		<td>学問-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「福韞が唐門にいる」<br>
            • 🚩「掌門が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>
            三師兄與掌<br>
            門談論古今<br>
        </td>
		<td>11</td>
		<td>-12</td>
		<td>
			• 処世±2、性情±2、団結-1、学問+2、弁舌-1<br>
            • 唐中翎好感+1、唐陞好感+1<br>
		</td>
		<td>-</td>
		<td>学問-1</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「三師兄が代掌門」なし<br>
            • 🚩「掌門が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>一根甘蔗</td>
		<td>11</td>
		<td>+3</td>
		<td>
            • 団結-1、品性+1、処世-1、銀両-50<br>
            • 唐惟元好感+1<br>
			• 「甘蔗」+1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「四師兄が唐門にいる」<br>
            • 🚩「掌門が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>焚香</td>
		<td>
            三師兄與你<br>
            談論古今<br>
        </td>
		<td>11</td>
		<td>-12</td>
		<td>
			• 処世±2、性情±2、団結-2、学問+2、弁舌-1<br>
            • 唐陞好感+1<br>
		</td>
		<td>-</td>
		<td>学問-1</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「三師兄が代掌門」<br>
            • 学問≥50<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>冥想</td>
		<td>打坐療傷</td>
		<td>-</td>
		<td>-</td>
		<td>
            (この項目は独立イベントではなく、瞑想イベントの追加段階。必要条件を参照)<br>
            • 心相≥70: 🚩「内傷の治癒」+3<br>
            • 70＞心相≥30: 🚩「内傷の治癒」+2<br>
            • 心相＜30: 🚩「内傷の治癒」+1<br>
            • 🚩「内傷の治癒」≥10なら: 「経脈閉塞」および「失魂落魄」を解除
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 技能「経脈閉塞」または「失魂落魄」を持っている場合<br>
            • かつ発生した瞑想イベントに「打坐痊癒」効果がある場合<br>
            • この段階に進んで判定<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>冥想</td>
		<td>有點長進</td>
		<td>-</td>
		<td>-8</td>
		<td>
            • 品性+1、弁舌-1、内功+1<br>
            • 「打坐療傷」(上のイベントを参照)<br>
        </td>
		<td>内功+1</td>
		<td>内功-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>冥想</td>
		<td>清心靜坐</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 内功+2、弁舌-1、体力-1、抗毒+2、抗麻+2<br>
			• 品性+1、性情±1、処世±1<br>
            • 🚩「掌門が唐門にいる」なら: 唐中翎好感+1<br>
            • 「打坐療傷」(上のイベントを参照)<br>
		</td>
		<td>-</td>
		<td>内功-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>冥想</td>
		<td>心浮氣躁</td>
		<td>-</td>
		<td>-20</td>
		<td>
            品性-1、処世-1、刀剣+1、鍛造+2、団結-5
        </td>
		<td>-</td>
		<td>刀剣-1</td>
		<td>
            • 基礎: 25<br>
            • 品性≤50: +5<br>
            • 品性≤25: +10<br>
            • 心相≤30: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>冥想</td>
		<td>師弟玩火</td>
		<td>-</td>
		<td>-60</td>
		<td>
            内功-1、体力-1、団結-5、運命+1
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>冥想</td>
		<td>頗有感悟</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 品性+2、弁舌-2、内功+1、拳掌+1<br>
            • 性情±1、処世±1<br>
            • 「打坐療傷」(上のイベントを参照)<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎:25<br>
            • 心相≥70: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>正心堂<br>冥想</td>
		<td>回想初心</td>
		<td>-</td>
		<td>-10</td>
		<td>
            • 品性+2、道徳+2、弁舌-1<br>
            • 性情±2、処世±2<br>
            • 「打坐療傷」(上のイベントを参照)<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び<br>優先判定</td>
		<td>繼續挑柴</td>
		<td>-</td>
		<td>-</td>
		<td>
            優先イベントなし、薪運びイベント判定に続く
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び<br>優先判定</td>
		<td>龍湘練劍</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 👉 そっとしておく: 薪運びイベント判定に続く<br>
            • 👉 剣の使い方を教えよう: 🆚対決：龍湘<br>
            • 勝利：武学+6、敗北：武学+2、龍湘好感+1<br>
            • 初回発生かつ龍湘と夜遊びを発生済みなら: 龍湘の悩みに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「龍湘と結縁」なし<br>
            • 最短で3年目11月中旬<br>            
        </td>
		<td>
			• 龍湘の悩みは龍湘と結縁するための必須イベント<br>
            • <text style="color : red">執筆待ち</text>: 龍湘との夜遊びおよび龍湘の悩みイベント<br>
		</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>穩健幹活</td>
		<td>13</td>
		<td>-20</td>
		<td>性情+1、体力+1、軽功+1</td>
		<td>軽功+1</td>
		<td>体力-1<br>軽功-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>扭傷腳</td>
		<td>13</td>
		<td>-31</td>
		<td>体力+1、軽功+1、性情+1</td>
		<td>-</td>
		<td>体力-1</td>
		<td>
            • 基礎: 20<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>大難不死</td>
		<td>13</td>
		<td>-60</td>
		<td>性情+1、運命+1、銀両-1000</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>踏崩岩壁</td>
		<td>-</td>
		<td>-</td>
		<td><MarkdownWrapper>[生死簿08：我、唐門の谷底にあり](/ja/event/badends/#生死簿-No.8)</MarkdownWrapper>へ進む</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤30: +30<br>
            • 心相≤10: +50<br>
            • 軽功≥50: -50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>抄捷徑</td>
		<td>13</td>
		<td>-5</td>
		<td>軽功+2、性情+1</td>
		<td>-</td>
		<td>軽功-1</td>
		<td>
            • 基礎: 25<br>
            • 軽功≥20: +20<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>無敵號與<br>一團廢紙</td>
		<td>13<br>+10</td>
		<td>-20</td>
		<td>
            • 体力+1、武学+2<br>
            • 葉雲舟好感+1<br>
            • <MarkdownWrapper>[葉雲裳の体当たり](/ja/event/simple/1-08-1-葉雲裳衝擊)</MarkdownWrapper>イベントが発生<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「葉雲舟が唐門にいる」<br>
            • 🚩「小師妹が唐門にいる」<br>
            • <MarkdownWrapper>[師妹の新しい友達](/ja/event/simple/1-08-2-師妹交友)</MarkdownWrapper>を発生済み<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>
            • <MarkdownWrapper>[生死簿08：我、唐門の谷底にあり](/ja/event/badends/#生死簿-No.8)</MarkdownWrapper>を取得可能<br>
		</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>利用陷阱</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 体力+1<br>
            • 李富貴好感+1<br>
            • 🚩「四師兄が唐門にいる」なら: 唐惟元好感+1<br>
            • 🚩「葉雲裳が唐門にいる」なら: 葉雲裳好感+1<br>
        </td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「市場で李富貴に遭遇」を発生済み<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>誤踩陷阱</td>
		<td>13</td>
		<td>-20</td>
		<td>
			👉葉雲裳をかばう: 道徳-1、処世-1、李富貴好感-2、葉雲裳好感+1<br>
			👉葉雲舟に告げ口: 道徳+1、処世+1、李富貴好感+2、葉雲裳好感-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「市場で李富貴に遭遇」を発生済み<br>
            • 🚩「葉雲舟が唐門にいる」<br>
            • 🚩「葉雲裳が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>挖礦</td>
		<td>13</td>
		<td>-20</td>
		<td>• 銀両+500<br>
            • 処世+1、道徳-1<br>
            • 李富貴好感+1<br>            
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「市場で李富貴に遭遇」を発生済み<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>維修棧道</td>
		<td>13<br>+5</td>
		<td>-20</td>
		<td>
            • 体力+1、鍛造+5<br>
            • 唐陞好感+1</td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>登崖眺望</td>
		<td>-</td>
		<td>-20</td>
		<td>
			<MarkdownWrapper>[後山で人を押す](/ja/event/simple/1-04-1-後山推人)</MarkdownWrapper>イベントが発生<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 1年目5月下旬以前<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>
            • <MarkdownWrapper>[生死簿02：転落死](/ja/event/badends/#生死簿-No.2)</MarkdownWrapper>を取得可能<br>
        </td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>採藥</td>
		<td>13<br>+10</td>
		<td>-10</td>
		<td>
            • 煉丹+3<br>
            • 葉雲舟好感+1
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>🚩「葉雲舟が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>薪運び</td>
		<td>路人俠</td>
		<td>13</td>
		<td>-20</td>
		<td>
            • 軽功+1<br>
            • 🆚対決：通りすがりの侠客 が発生:<br>
            • 敗北: <MarkdownWrapper>[生死簿09：失踪ごっこ](/ja/event/badends/#生死簿-No.9)</MarkdownWrapper>へ進む<br>
            • 勝利: 👉逃がす: 道徳+2、名声+1。👉谷底へ突き落とす: 道徳-2。<br>
        </td>
		<td>-</td>
		<td>軽功-1</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>
            • 通りすがりの侠客が誰かはゲーム内時間で決まる:<br>
            • 1年目6月下旬以前<br>
            • 1年目12月下旬以前<br>
            • 2年目6月下旬以前<br>
            • 2年目12月下旬以前<br>
            • 3年目6月下旬以前<br>
            • 4年目6月下旬以前<br>
        </td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>練武<br>優先判定</td>
		<td>繼續修練</td>
		<td>0</td>
		<td>-</td>
		<td>優先イベントなし、練武イベント判定に続く</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>練武<br>優先判定</td>
		<td>小師妹烤魚</td>
		<td>0</td>
		<td>-</td>
		<td>
            🚩「葉雲裳が唐門にいる」:<br>
            👉 水遊びの時間: 心相+20、料理+1、唐默鈴好感+2、葉雲裳好感+2、想い人判定:<br>
            • 想い人が葉雲裳でも唐默鈴でもない: 心変わり+3<br>
            👉 計画を乱すわけにはいかない: 練武イベント判定に続く<br>
            <br>
            🚩「葉雲裳が唐門にいない」:<br>
            👉 魚捕りの時間: 心相+20、料理+1、唐默鈴好感+2、想い人判定:<br>
            • 想い人が唐默鈴でない: 心変わり+3<br>
            👉 計画を乱すわけにはいかない: 🚩「唐默鈴と結縁」を判定: <br>
            • 結縁していない: 練武イベント判定に続く<br>
            • 結縁している: 武学+3、心相+5、唐默鈴好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「小師妹が唐門にいる」<br>
            • 🚩「後山の焼き魚を停止」なし(<MarkdownWrapper>[後山埋葬](/ja/event/simple/3-01-3-後山安葬)</MarkdownWrapper>から<MarkdownWrapper>[一時の平穏](/ja/event/simple/3-02-1-一波暫平)</MarkdownWrapper>まで)<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>練武</td>
		<td>正常</td>
		<td>0</td>
		<td>-20</td>
		<td>武学+5</td>
		<td>武学+3</td>
		<td>-</td>
		<td>基礎: 100</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>練武</td>
		<td>獨自烤魚</td>
		<td>0</td>
		<td>-5</td>
		<td>
            料理+1、心変わり-1
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>
            • 🚩「小師妹が唐門にいない」<br>
            • 想い人が唐默鈴<br>
            • 心相≤40<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>後山<br>練武</td>
		<td>小梅亂入</td>
		<td>0</td>
		<td>-</td>
		<td>
            • 想い人が虞小梅: 虞小梅好感≥45、心相+30<br>
            • 想い人が虞小梅でない: 唐布衣好感＜40、会話差分<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 55</td>
		<td>
            • 🚩「虞小梅が唐門にいる」<br>
            • 最遅で2年目12月下旬<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>鍛冶場<br>鍛冶<br>優先判定</td>
		<td>繼續打鐵</td>
		<td>-</td>
		<td>-</td>
		<td>
            優先イベントなし、鍛冶イベント判定に続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            「兵器損壊」状態なし (<MarkdownWrapper>[東西武林盟会戦](/ja/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>)
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>鍛冶場<br>鍛冶<br>優先判定</td>
		<td>修復兵器</td>
		<td>-</td>
		<td>-</td>
		<td>
            「兵器損壊」状態を解除 (<MarkdownWrapper>[東西武林盟会戦](/ja/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>)。<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            「兵器損壊」状態あり (<MarkdownWrapper>[東西武林盟会戦](/ja/event/detailed_description/4-02-2-東西武林盟會戰)</MarkdownWrapper>)
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>滿意成果</td>
		<td>10</td>
		<td>-16</td>
		<td>鍛造+5</td>
		<td>鍛造+3</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>頭暈腦脹</td>
		<td>10</td>
		<td>-25</td>
		<td>
			• 品性-1、鍛造+5、名声+1<br>
            • 🚩「四師兄が唐門にいる」なら: 銀両+1000、唐惟元好感+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>心有雜念</td>
		<td>10</td>
		<td>-66</td>
		<td>鍛造+5、運命+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 処世≥60: +5<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>品質良好</td>
		<td>10</td>
		<td>-16</td>
		<td>鍛造+8、刀剣+1、品性-1</td>
		<td>-</td>
		<td>刀剣-1</td>
		<td>
            • 基礎: 25<br>
            • 心相≥50: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
    </tr>
<tr>
		<td>唐門</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>留學生想<br>偷窺秘方</td>
		<td>10</td>
		<td>-26</td>
		<td>
            • 品性-1、処世+1<br>
            • 🚩「留学生の紛争」+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≤30: +20<br>
        </td>
		<td>
            • 最短で2年目2月下旬<br>
            • 最遅で2年目8月下旬<br>
            • 🚩「留学生の紛争」≥0<br>
        </td>
		<td>
            🚩「留学生の紛争」≥5なら: <br>
            • <MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>イベントが発生<br>
            • イベント後、🚩「留学生の紛争」=-1に設定<br>
        </td>
	</tr>
<tr>
		<td>唐門</td>
		<td>鍛冶場<br>鍛冶</td>
		<td>留學生尊重</td>
		<td>10</td>
		<td>-6</td>
		<td>
			• 名声+1、鍛造+5、銀両+1000<br>
            • 六大派好感: それぞれ33%の確率で+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最短で2年目2月下旬<br>
            • 最遅で2年目8月下旬<br>
            • 🚩「留学生の紛争」=-1 (<MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>参照)<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>講経堂<br>庶務</td>
		<td>大有學問</td>
		<td>12</td>
		<td>-16</td>
		<td>
            • 学問+1、品性+1<br>
            • 性情＞20なら: 性情-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>学問+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>🚩「三師兄が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>講経堂<br>庶務</td>
		<td>心煩意亂</td>
		<td>12<br>+5</td>
		<td>-16</td>
		<td>
            • 学問+1、体力-1<br>
            • 性情＞20なら: 性情-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩「三師兄が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>講経堂<br>庶務</td>
		<td>誘騙招募</td>
		<td>12</td>
		<td>-16</td>
		<td>
            道徳-1、名声+2、門人+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 道徳＜20: +50<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹<br>優先判定</td>
		<td>苦命葉雲舟</td>
		<td>10</td>
		<td>-16</td>
		<td>
			👉葉雲舟を手伝いに行く: <br>
            • 処世+1、煉丹+3、刀剣+1<br>
            • 葉雲舟好感+2、二師兄好感-1<br>
            <br>
			👉葉雲舟を放っておく:<br>
            • 煉丹イベント判定に続く<br>
		</td>
		<td>-</td>
		<td>👉手伝いに行く:<br>刀剣-1</td>
		<td>
            確率 40%
        </td>
		<td>
            • 🚩「唐錚が唐門にいる」<br>
            • 🚩「葉雲舟が唐門にいる」<br>
        </td>
		<td>
            👉葉雲舟を放っておくと、新しいイベントで心相がさらに減るが、貢献は追加されない<br>
        </td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>滿意成果</td>
		<td>10</td>
		<td>-16</td>
		<td>煉丹+5</td>
		<td>煉丹+3</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>簡化配方</td>
		<td>10</td>
		<td>-16</td>
		<td>煉丹+3、処世+1、団結+2、名声-2</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 性情≥60: +5<br>
            • 心相≤30: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>異想天開</td>
		<td>10</td>
		<td>-16</td>
		<td>
            • 煉丹+10、抗毒+1、抗麻+1<br>
            • 道徳-1、名声-1、団結-5            
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 性情≥60: +5<br>
            • 心相≤30: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>狗血淋頭</td>
		<td>10</td>
		<td>-22</td>
		<td>
            • 煉丹+5、運命+1<br>
            • 唐錚好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相＜30: +40<br>
        </td>
		<td>🚩「唐錚が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>觸類旁通</td>
		<td>10</td>
		<td>+10</td>
		<td>
            • 煉丹+8<br>
            • 道徳≥40の場合: 道徳-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≥70: +40<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>全神貫注</td>
		<td>10</td>
		<td>-20</td>
		<td>
            • 煉丹+10、処世-1<br>
            • 唐錚好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 心相≥80: +40<br>
        </td>
		<td>🚩「唐錚が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>留學生壞壞</td>
		<td>10</td>
		<td>-21</td>
		<td>
            • 煉丹+5、団結-1、名声-1<br>
            • 🚩「留学生の紛争」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最短で2年目2月下旬<br>
            • 最遅で2年目8月下旬<br>
            • 🚩「留学生の紛争」≥0<br>
        </td>
		<td>
            🚩「留学生の紛争」≥5の場合: <br>
            • <MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>イベントが発生<br>
            • イベント後、🚩「留学生の紛争」=-1 に設定<br>
        </td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>留學生友好</td>
		<td>10</td>
		<td>-6</td>
		<td>
			• 煉丹+5、学問+1<br>
            • 六大派好感: それぞれ33%の確率で+1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 最短で2年目2月下旬<br>
            • 最遅で2年目8月下旬<br>
            • 🚩「留学生の紛争」=-1 (<MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>参照)<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>煉丹房<br>煉丹</td>
		<td>小梅的復仇</td>
		<td>10</td>
		<td>-16</td>
		<td>
			👉やめてよ: 対決が発生<br>
            • 勝利: 武学+2(全武学＜200)または+5(全武学＜120)、虞小梅好感-2<br>
            • 敗北: 武学+2(全武学＜120)、団結+1<br>
            <br>
			👉私が手伝うよ:<br>
            • 道徳-2<br>
            • 虞小梅好感+2、唐惟元好感-3<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最遅で2年目12月下旬<br>
            • 🚩「小梅が唐門にいる」<br>
            • 一度きりのイベント、再発生不可
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>預算合理</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+1、団結+1<br>
            • 唐陞好感+1<br>
            • 🚩「四師兄が唐門にいる」場合: 唐惟元好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>胡椒粉</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+1、道徳-1、団結-1、抗毒+3、抗麻+3<br>
            • 🚩「大師兄が唐門にいる」場合: 唐布衣好感-1<br>
            • 🚩「二師兄が唐門にいる」場合: 唐錚好感-1<br>
            • 唐陞好感-1<br>
            • 🚩「四師兄が唐門にいる」場合: 唐惟元好感-1<br>
            • 🚩「小師妹が唐門にいる」場合: 唐默鈴好感-1<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 25<br>
            • 心相≤30: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>狂放廚藝</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+3、団結-5、道徳-1、運命+1<br>
            <br>
            🚩「無可救薬ルート」なし:<br>
            • 🚩「大師兄が唐門にいる」場合: 唐布衣好感-1<br>
            • 🚩「二師兄が唐門にいる」場合: 唐錚好感-1<br>
            • 唐陞好感-1<br>
            • 🚩「四師兄が唐門にいる」場合: 唐惟元好感-1<br>
            • 🚩「小師妹が唐門にいる」場合: 唐默鈴好感-1<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感-1<br>
            <br>
            🚩「無可救薬ルート」:<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感-1<br>
            • 唐陞好感-1、唐惟元好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 性情≥60: +5<br>
            • 処世≥60: +5<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>掌門健康</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+1、団結+2、道徳+1、処世+1<br>
            • 唐中翎好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>小師妹<br>愛吃的菜</td>
		<td>13</td>
		<td>-24</td>
		<td>
            料理+2、団結+5、銀両-200
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩「小師妹が唐門にいない」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>師妹代班</td>
		<td>13<br>-5</td>
		<td>-4</td>
		<td>
            • 🚩「唐默鈴と結縁」: 差分イラストあり<br>
            • 団結+2<br>
            • 唐默鈴好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 料理≥3: +10<br>
            • 料理≥10: +25<br>
        </td>
		<td>🚩「小師妹が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>貪吃龍湘</td>
		<td>13</td>
		<td>-7</td>
		<td>
            • 料理+1、団結+1<br>
            • 龍湘好感+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 料理≥5: +10<br>
            • 料理≥10: +25<br>
        </td>
		<td>
            • 最短で3年目11月中旬<br>
            • 🚩「龍湘が唐門にいる」
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>心血來潮</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 料理+3、団結+3、銀両-200<br>
            • 🚩「大師兄が唐門にいる」場合: 唐布衣好感+1<br>
            • 🚩「二師兄が唐門にいる」場合: 唐錚好感+1<br>
            • 唐陞好感+1<br>
            • 🚩「四師兄が唐門にいる」場合: 唐惟元好感+1<br>
            • 🚩「小師妹が唐門にいる」場合: 唐默鈴好感+1<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 性情≥60: +5<br>
            • 料理≥5: +10<br>
            • 料理≥10: +25<br>
        </td>
		<td>-</td>
		<td>発生時、銀両を判定しない</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>茶肆果子</td>
		<td>13</td>
		<td>-9</td>
		<td>
            • 茶屋建設済み: 名声+1、門派資産+100、🚩「茶屋に小梅の菓子を追加」に設定<br>
            • 茶屋未建設: 門派資産+300<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 2年目12月下旬以前<br>
            • 🚩「虞小梅が唐門にいる」<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>🚩「茶屋に小梅の菓子を追加」: 現状効果なし</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>伙房<br>炊事</td>
		<td>晁和假請客</td>
		<td>13</td>
		<td>-9</td>
		<td><MarkdownWrapper>[晁和搞鬼イベント集](/ja/event/simple/1-08-3-晁和搞鬼事件集)</MarkdownWrapper>イベントが発生</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>
            • 最遅で2年目12月下旬<br>
            • 🚩「晁和が唐門にいる」<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>掃除</td>
		<td>枯燥工作</td>
		<td>12</td>
		<td>-12</td>
		<td>体力+1、団結+1</td>
		<td>体力+1</td>
		<td>体力-1</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>掃除</td>
		<td>收拾善後</td>
		<td>12</td>
		<td>-25</td>
		<td>煉丹+10</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>掃除</td>
		<td>脫手鏢</td>
		<td>12</td>
		<td>-62</td>
		<td>
            • 軽功-1、運命+1<br>
            • 茅台酒x1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>掃除</td>
		<td>洗刷污漬</td>
		<td>12</td>
		<td>-12</td>
		<td>
            • 体力+1、団結+2、性情-1<br>
            • 唐陞好感+1<br>
            • 🚩「小師妹が唐門にいる」場合: 唐默鈴好感+1<br>
        </td>
		<td>-</td>
		<td>体力-1</td>
		<td>
            • 基礎: 25<br>
            • 性情≤50: +5<br>
            • 性情≤25: +5<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>掃除</td>
		<td>揮灑汗水</td>
		<td>12</td>
		<td>-2</td>
		<td>体力+1、団結+3、処世+1</td>
		<td>-</td>
		<td>体力-1</td>
		<td>
            • 基礎: 25<br>
            • 団結≥50: +5<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練<br>優先判定</td>
		<td>小梅切磋</td>
		<td>0</td>
		<td>-</td>
		<td>
			👉今はやめておく: 団練イベント判定に続く<br>
            <br>
            👉いいよ: 🆚戦：小梅 が発生:<br>
            • 勝利: 武学+4、虞小梅好感+1<br>
            • 敗北: 全武学＜120の場合、武学+2。団結+1、心相-15。<br>
		</td>
		<td>武学+2</td>
		<td>-</td>
		<td>確率50%</td>
		<td>
            • 最遅で2年目12月下旬<br>
            • 🚩「虞小梅が唐門にいる」<br>
        </td>
		<td>
            • このイベントが発生しない場合、団練イベント判定に続く<br>
            • 初回対戦時に差分会話あり<br>
        </td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>三師兄帶操</td>
		<td>0</td>
		<td>-16</td>
		<td>
            • 体力+1、内功+1、武学+2、団結+2<br>
            • 唐陞好感+1<br>
        </td>
		<td>武学+2</td>
		<td>体力-1<br>内功-1</td>
		<td>基礎: 30</td>
		<td>🚩「三師兄が唐門にいる」</td>
        <td>-</td>		
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>二師兄帶操</td>
		<td>0</td>
		<td>-16</td>
		<td>
            • 体力+1、内功+1、団結+1、門人-1<br>
            • 唐錚好感+1</td>
		<td>煉丹+2<br></td>
		<td>体力-1<br>内功-1</td>
		<td>基礎: 30</td>
		<td>🚩「二師兄が唐門にいる」</td>
		<td><MarkdownWrapper>[運功による治療](/ja/event/simple/1-05-1-運功療傷)</MarkdownWrapper>の前提条件</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>四師兄帶操</td>
		<td>0</td>
		<td>-10</td>
		<td>
            • 体力+1、武学+1、団結+3<br>
            • 唐惟元好感+1<br>
        </td>
		<td>武学+2</td>
		<td>体力-1</td>
		<td>基礎: 30</td>
		<td>🚩「四師兄が唐門にいる」</td>
        <td>-</td>		
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>大師兄帶操</td>
		<td>0</td>
		<td>-10</td>
		<td>
            • 道徳-1、体力-1、団結+2<br>
            • 唐布衣好感+1<br>
            • 🚩「掌門が唐門にいる」場合: 唐中翎好感-1<br>
        </td>
		<td>
            心相≥80:<br>
            学問+1、軽功+1<br>
        </td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩「大師兄が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>流彈誤傷</td>
		<td>0</td>
		<td>-66</td>
		<td>運命+1、暗器+1、武学+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>小師妹出沒</td>
		<td>0</td>
		<td>-16</td>
		<td>
            • 体力+1、内功+1、武学+2、団結-1<br>
            • 唐陞好感+1<br>
        </td>
		<td>武学+2</td>
		<td>体力-1<br>内功-1</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「小師妹が唐門にいる」<br>
            • 🚩「三師兄が唐門にいる」<br>
        </td>
        <td>-</td>		
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>掌門指點</td>
		<td>0</td>
		<td>-15</td>
		<td>
			• 体力+1、内功+1、軽功+1<br>
            • 団結+1、名声+1、武学+3<br>
            • 唐中翎好感+1<br>
		</td>
		<td>武学+2</td>
		<td>体力-1</td>
		<td>基礎: 10</td>
		<td>🚩「掌門が唐門にいる」</td>
		<td><MarkdownWrapper>[唐門内戦](/ja/event/simple/2-12-3-唐門內戰)</MarkdownWrapper>で掌門が動けない場合: 🚩「掌門が唐門にいない」扱い</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>留學生<br>擅自練功</td>
		<td>0</td>
		<td>-21</td>
		<td>
            • 名声-1、武学+1、団結+1<br>
            • 🚩「留学生の紛争」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最短で2年目3月上旬<br>
            • 最遅で2年目8月中旬<br>
            • 🚩「留学生の紛争」≥0<br>
        </td>
		<td>
            🚩「留学生の紛争」≥5の場合: <br>
            • <MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>イベントが発生<br>
            • イベント後、🚩「留学生の紛争」=-1 に設定<br>
        </td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>留學生<br>推擠</td>
		<td>0</td>
		<td>-16</td>
		<td>
			• 名声-2、団結+1、武学+1<br>
            • 🚩「留学生の紛争」+2<br>
            • 六大派好感それぞれ-1<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 🚩「留学生の紛争」≥1: +30<br>
        </td>
		<td>
            • 最短で2年目3月上旬<br>
            • 最遅で2年目8月中旬<br>
            • 🚩「留学生の紛争」≥0<br>
        </td>
		<td>
            🚩「留学生の紛争」≥5の場合: <br>
            • <MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>イベントが発生<br>
            • イベント後、🚩「留学生の紛争」=-1 に設定<br>
        </td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>留學弟子<br>超團結</td>
		<td>0</td>
		<td>-16</td>
		<td>
			• 体力+1、内功+1、名声+1、団結+1<br>
            • 戦役門人生命力+2、武学+1<br>
            • 六大派好感: それぞれ33%の確率で+1<br>
		</td>
		<td>-</td>
		<td>体力-1</td>
		<td>基礎: 20</td>
		<td>
            • 最短で2年目3月上旬<br>
            • 最遅で2年目8月中旬<br>
            • 🚩「留学生の紛争」=-1 (<MarkdownWrapper>[留学生同士の衝突](/ja/event/simple/2-03-1-留學生衝突)</MarkdownWrapper>参照)<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>趙活帶操<br>感慨</td>
		<td>10</td>
		<td>-26</td>
		<td>名声+1、性情+1、武学+3</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 🚩「大師兄が唐門にいない」<br>
            • 🚩「二師兄が唐門にいない」<br>
            • 🚩「三師兄が代掌門」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>趙活帶操<br>奇葩師弟</td>
		<td>10</td>
		<td>-36</td>
		<td>性情+3、品性-1、団結-2、運命+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 品性≤25: +20<br>
        </td>
        <td>
            • 🚩「大師兄が唐門にいない」<br>
            • 🚩「二師兄が唐門にいない」<br>
            • 🚩「三師兄が代掌門」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>練功場<br>団練</td>
		<td>大師兄<br>蹴鞠</td>
		<td>0</td>
		<td>-16</td>
		<td>
            • 団結+2、体力+1<br>
            • 唐布衣好感+1、唐默鈴好感+1<br>
        </td>
		<td>-</td>
		<td>体力-1</td>
		<td>
            • 基礎: 20<br>
            • 品性≤25: +20<br>
        </td>
		<td>
            • 🚩「大師兄が唐門にいる」<br>
            • 🚩「小師妹が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>女弟子房<br>待ち伏せ</td>
		<td>吊起來打</td>
		<td>0</td>
		<td>-20</td>
		<td>
            • 道徳-2、性情-1、軽功+1、運命+1<br>
            • 🚩「唐默鈴と結縁」なし: 唐默鈴好感-1<br>
            • 唐布衣好感+1、劉顎好感+1<br>
        </td>
		<td>-</td>
		<td>軽功-1</td>
		<td>基礎: 20</td>
		<td>🚩「小師妹が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>女弟子房<br>待ち伏せ</td>
		<td>開窗擊墜</td>
		<td>0</td>
		<td>+50</td>
		<td><MarkdownWrapper>[生死簿02：転落死](/ja/event/badends/#生死簿-No.2)</MarkdownWrapper>へ進む</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 3<br>
            • 軽功≥30: -3<br>
        </td>
		<td>🚩「小師妹が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>女弟子房<br>待ち伏せ</td>
		<td>無可譴責</td>
		<td>0</td>
		<td>+80</td>
		<td>道徳-2、性情-1、軽功+1</td>
		<td>-</td>
		<td>軽功-1</td>
		<td>
            • 基礎: 30<br>
            • 軽功≥20: +10<br>
        </td>
		<td>🚩「小師妹が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>女弟子房<br>折り鶴</td>
		<td>一絲暖意</td>
		<td>0</td>
		<td>+80</td>
		<td>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 60</td>
		<td>
            • 最短で3年目5月上旬<br>
            • 🚩「小師妹が唐門にいない」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>女弟子房<br>折り鶴</td>
		<td>揉成一團</td>
		<td>0</td>
		<td>+40</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 心相≤30: +20<br>
        </td>
		<td>
            • 最短で3年目5月上旬<br>
            • 🚩「小師妹が唐門にいない」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>女弟子房<br>折り鶴</td>
		<td>踏向深谷</td>
		<td>0</td>
		<td>0</td>
		<td><MarkdownWrapper>[生死簿08：我、唐門の谷底にあり](/ja/event/badends/#生死簿-No.8)</MarkdownWrapper>へ進む</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最短で3年目5月上旬<br>
            • 🚩「小師妹が唐門にいない」<br>
            • 心相≤15<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>男弟子房<br>賭博</td>		
		<td>賭博</td>
        <td>0</td>
		<td>+20</td>
		<td>
            🎲天命(上限99)判定が発生:<br>
            •【≥50 大儲け】: 心相+40、銀両+1000、団結-2<br>
            •【＜50 損失】: 心相-10、銀両-500、団結+5<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>銀両≥500</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>睡了一覺</td>
		<td>0</td>
		<td>+40</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>畏懼人間</td>
		<td>0</td>
		<td>-15</td>
		<td>性情-5</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「大師兄が唐門にいない」<br>
            • 🚩「二師兄が唐門にいない」<br>
            • 🚩「掌門が唐門にいない」<br>
            • 🚩「小師妹が唐門にいない」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>學大師兄</td>
		<td>0</td>
		<td>+50</td>
		<td>団結+10、処世+5、品性-5</td>
		<td>軽功+2、暗器+2</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 最短で3年目10月上旬<br>
            • 🚩「大師兄が唐門にいない」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>福韞講法</td>
		<td>0</td>
		<td>+20</td>
		<td>
            • 団結+1、学問+1<br>
            • 福韞好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>🚩「福韞が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>唐門</td>
		<td>男弟子房<br>休息</td>
		<td>福韞淨化<br>四師兄</td>
		<td>0</td>
		<td>+30</td>
		<td>
            • 銀両+100<br>
            • 福韞好感+1、唐惟元好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「福韞が唐門にいる」<br>
            • 🚩「四師兄が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外出<br>優先判定</td>
		<td>無優先事件</td>
		<td>-</td>
		<td>-</td>
		<td>
			外出コマンドメニューに続く
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外出<br>優先判定</td>
		<td>小梅亂入</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 ランニング:<br>
            • 体力+1、軽功+1、虞小梅好感+1<br>
            • 想い人が虞小梅: 心相+20<br>
            • 想い人が虞小梅でない: 心変わり+1<br>
			<br>
            👉 本分を果たす: <br>
            • 処世+1、虞小梅好感-1<br>
            • 外出コマンドメニューに続く<br>
		</td>
		<td>
            心相≥80:<br>
            👉 ランニング:<br>
            体力+1、軽功+1<br>
            虞小梅好感+1
        </td>
		<td>
            👉 ランニング:<br>
            体力-1<br>
        </td>
		<td>基礎: 35</td>
		<td>
            • 最遅で2年目12月下旬<br>
            • 🚩「虞小梅が唐門にいる」<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外出<br>優先判定</td>
		<td>我有帶秘笈</td>
		<td>-</td>
		<td>-</td>
		<td>
			• 本イベントの発生回数により会話差分<br>
            • 外出コマンドメニューに続く<br> 
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 35</td>
		<td>
            • 最遅で2年目10月下旬<br>
            • 🚩「晁和が唐門にいる」<br>
            • 最大3回まで発生<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外出<br>優先判定</td>
		<td>龍湘遭竊</td>
		<td>-</td>
		<td>-</td>
		<td>
			<MarkdownWrapper>[龍湘、盗難に遭う](/ja/event/simple/1-09-2-龍湘遭竊)</MarkdownWrapper>イベントが発生<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>
            • 最遅で2年目5月下旬<br>
            • <MarkdownWrapper>[四師兄、人手を駆り出す](/ja/event/simple/1-09-2-四師兄抓公差)</MarkdownWrapper>を発生済み<br>
            • 一度きりのイベント、再発生不可<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外出<br>優先判定</td>
		<td>姜記肉包</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 並んで買う(銀両＞500 必要):<br>
            • 学問-1、銀両-500、「姜記肉包」x1を獲得 (<MarkdownWrapper>[道具一覧](/ja/system/items/)</MarkdownWrapper>)<br>
            <br>
            👉 時間を無駄にする:<br>
            • 🚩「外出で龍湘に遭遇」を設定<br>
            • 外出コマンドメニューに続く<br>
            <br>
            👉 店を壊す(道徳＜40 かつ 性情≥60 必要):<br>
            • 道徳-2、🆚戦：江湖の拳師 が発生<br>
            • 敗北: <MarkdownWrapper>[生死簿86：肉まんを喉に詰めて](/ja/event/badends/#生死簿-No.86)</MarkdownWrapper><br>
            • 勝利: 武学+4、銀両+1000、名声+2、姜記肉包x5を獲得、(次行に続く)<br>
            • 上官螢好感-3、唐中翎好感-3、宋悲好感-2、丐幇好感+2<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「龍湘が唐門にいる」</td>
		<td>
            🚩「外出で龍湘に遭遇」:<br>
            本コマンドの後続で龍湘イベントが発生できるかに影響<br>
        </td>
	</tr>
<tr>
		<td>外出</td>
		<td>外出<br>優先判定</td>
		<td>李富貴<br>跑腿</td>
		<td>-</td>
		<td>-</td>
		<td>
            👉道案内: <br>
            • 李富貴好感+1<br>
            • 🚩「外出で李富貴に遭遇」を設定<br>
            • 外出コマンドメニューに続く<br>
            <br>
            👉連れて行く: <br>
            • 道徳+1、銀両+200<br>
            <br>
            👉ぼったくり店(🚩「四師兄が唐門にいる」必要): <br>
            • 道徳-1、銀両+500<br>
            • 唐惟元好感+1、李富貴好感-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩「李富貴が唐門にいる」</td>
		<td></td>
	</tr>
<tr>
		<td>外出</td>
		<td>外出<br>優先判定</td>
		<td>李富貴<br>喝涼水</td>
		<td>-</td>
		<td>-</td>
		<td>
            銀両＜100:<br>
            • 🚩「外出で李富貴に遭遇」を設定<br>
            • 外出コマンドメニューに続く<br>
            <br>
            銀両≧100: 選択肢が発生:<br>
            <br>
            👉無視する:<br>
            • 🚩「外出で李富貴に遭遇」を設定<br>
            • 外出コマンドメニューに続く<br>
            <br>
            👉見せつけて飲む:<br>
            • 道徳-1、品性-1、処世+1、銀両-100、心相+30<br>
            • 李富貴好感-1、丐幇好感-1<br>
            <br>
            👉奢る(銀両≧200必要):<br>
            • 道徳+1、処世+2、銀両-200<br>
            • 李富貴好感＜12: 心相+20、李富貴+2<br>
            • 李富貴好感≧12: 心相+10、李富貴+2<br>
            • 李富貴好感≧20、かつ<MarkdownWrapper>[阿摩搪牆拳](/ja/system/books/book_4040)</MarkdownWrapper>を未所持: 該当秘笈を獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「李富貴が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外出<br>優先判定</td>
		<td>福韞<br>強制淨化</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 性情≤40: 会話差分<br>
            • 道徳+1、学問+1、福韞好感+1<br>
            • 🚩「福韞を殴った」を解除<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 40</td>
		<td>
            • 🚩「福韞が唐門にいる」<br>
            • 🚩「福韞を殴った」を発生済み<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>行商</td>
		<td>不多不少</td>
		<td>16</td>
		<td>-15</td>
		<td>銀両+1000、弁舌+1、名声+1</td>
		<td>弁舌+1、名声+1</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>行商</td>
		<td>包袱被割</td>
		<td>16<br>-10</td>
		<td>-30</td>
		<td>
            • 銀両-1000、唐惟元好感-1<br>
            • 2回目の発生: 秘笈<MarkdownWrapper>[《江湖鬼蜮録》](/ja/system/books/book_8005)</MarkdownWrapper>を獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>🚩「四師兄が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>行商</td>
		<td>賭博輸光</td>
		<td>16<br>-10</td>
		<td>-65</td>
		<td>
            • 銀両-2500、品性-2、性情-2、処世+2、運命+1<br>
            • 唐惟元好感-2<br>
            <br>            
            2回目の発生時:<br>
            • 時間＞2年目12月下旬なら: イベント終了<br>
            • 時間≤2年目12月下旬なら: <MarkdownWrapper>[龍湘の食い逃げ](/ja/event/simple/1-04-1-龍湘霸王餐)</MarkdownWrapper>イベントに続く<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 5<br>
            • 心相≤0: +50<br>
        </td>
		<td>
            • 銀両≧3000<br>
            • 🚩「四師兄が唐門にいる」<br>
            • 最大2回まで発生<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>行商</td>
		<td>爭相搶購</td>
		<td>16</td>
		<td>-15</td>
		<td>
            • 銀両+1500、門派資産+100<br>
            • 道徳-1、性情+1、処世-1、弁舌+1<br> 
            • 🚩「行商成功回数」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 15<br>
            • 弁舌≥20: +30<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>行商</td>
		<td>滿載而歸</td>
		<td>16</td>
		<td>-15</td>
		<td>
            • 銀両+2000、門派資産+150<br>
            • 道徳-2、性情+1、処世-2、弁舌+2<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 弁舌≥30: +5<br>
            • 弁舌≥80: +5<br>
            • 弁舌≥90: +5<br>
            • 道徳＜40: +20<br>
        </td>
		<td>🚩「行商成功回数」≥2</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>行商</td>
		<td>長途行商</td>
		<td>16</td>
		<td>-25</td>
		<td>
            • 銀両+3000、門派資産+200<br>
            • 体力+2、行動回数-1<br> 
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 弁舌≥30: +5<br>
            • 弁舌≥80: +5<br>
            • 弁舌≥90: +5<br>
            • 道徳≥60: +20<br>
        </td>
		<td>行動回数≥2</td>
		<td>合計で行動回数2消費</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>逛街舒心</td>
		<td>-</td>
		<td>+20</td>
		<td>処世+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 50</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>包袱被割</td>
		<td>-20</td>
		<td>-20</td>
		<td>性情-1、名声+1</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 心相≤30: +10<br>
        </td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>飛石尋釁</td>
		<td>-</td>
		<td>-</td>
		<td>
			🎲天命が発生(上限99、軽功補正):<br>
            【＜60 戦う】: 🆚戦：飛石幇 が発生(下段へ続く)<br>
            【≥60 回避】: 心相+20、名声+1、飛石幇好感-1、イベント終了<br>
            <br>
            敗北: 銀両-1000、心相-30<br>
            勝利: 武学+2(全武学≤110)、選択肢が発生:<br>
            • 👉逃がす: 道徳+1、品性+1、処世+1、飛石幇好感+1<br>
            • 👉工賃は俺のもの: 道徳-1、性情+1、処世+1、銀両+250、飛石幇好感-1<br>
            • 👉滅多刺しにする: 道徳-3、品性-2、名声+2、宋悲好感-1、飛石幇好感-3、飛石幇向心-2<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>🚩「飛石幇と和解」なし</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>何方妖孽</td>
		<td>-</td>
		<td>-</td>
		<td>
			🆚戦：錦香弟子:<br>
            敗北: <MarkdownWrapper>[生死簿17：晴らせぬ冤](/ja/event/badends/#生死簿-No.17)</MarkdownWrapper>へ進む<br>
            勝利：武学+4(全武学≤150)または+2(全武学＞150)、選択肢が発生:<br>
            👉 落ち着け: 道徳+1、品性+1、名声+1、錦香宮好感+1<br>
			👉 俺と結婚したいか: 道徳-1、性情+1、品性-1、弁舌+1、心変わり+1<br>
			👉 無情に殺す: 道徳-3、品性-2、性情+2、名声-2、錦香宮好感-4、龍湘好感-3<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>胸口碎大石</td>
		<td>-</td>
		<td>-</td>
		<td>
			👉 お金を出して善行を積む: 銀両-100、品性+1、性情-1、処世+1<br>
			<br>
            👉 倍の金額で俺が割る: 🆚戦：江湖の拳師:<br>
            • 敗北: 銀両-200、名声-2、性情-1<br>
			• 勝利: 武学+2(未知の条件)、選択肢が発生:<br>
            • 👉 見逃す: 名声+1、門人+1<br>
			• 👉 殺害する: 道徳-3、品性-3、性情+2、処世-2、銀両-200<br>
		</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀両≥200</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>丐幫搶菜</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩「丐幇との野菜争奪回数」+1に設定、⚔️戦役：丐幇 が発生:<br>
            • 敗北: 心相-10、団結+1、丐幇好感+1、丐幇向心+1<br>
            • 勝利: 武学+2、名声-1、品性-1、心相+10、(次行に続く)<br>
            • 団結+1、門派資産-100、丐幇好感+1、丐幇向心-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>填飽舒心</td>
		<td>-</td>
		<td>+30</td>
		<td>銀両-100</td>
		<td>体力+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀両≥200</td>
		<td>心相判定は心相加算の後</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>摺紙藝人</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両-200<br>
            • 唐默鈴好感+2
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 銀両≥200<br>
            • 🚩「小師妹が唐門にいる」<br>
        </td>
		<td>心相判定は心相加算の後</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>茶肆吃麵</td>
		<td>-</td>
		<td>+20</td>
		<td>学問+1、銀両-100</td>
		<td>学問+1</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>銀両≥200</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>贈送蔬果</td>
		<td>-</td>
		<td>+40</td>
		<td>団結+5、門派資産+500、銀両+500</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 10</td>
		<td>門派規模≥4</td>
		<td>現状では条件を満たせない</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>女俠戰龍湘</td>
		<td>-</td>
		<td>-10</td>
		<td>性情-1、武学+2、刀剣+1</td>
		<td>-</td>
		<td>刀剣-1</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>山賊戰龍湘</td>
		<td>-</td>
		<td>-</td>
		<td>
            🚩「龍湘と姉弟の呼び合い」を判定:<br>
            • はい: 武学+1、心相+6、料理+1、龍湘好感+2<br>
            • いいえ: 武学+1、銀両+500、体力+1、龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>
            はい: 料理-1<br>
            いいえ: 体力-1<br>
        </td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>龍湘打客人</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両-500<br>
            • 龍湘好感+1<br>
            • 🚩「龍湘の除名」+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
            • 🚩「龍湘の除名」≠-1<br>
            • 銀両≥500<br>            
        </td>
		<td>
            現状では🚩「龍湘の除名」=-1を<br>
            設定する仕組みが無いようだ<br>
        </td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>龍湘算錯帳</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両-500<br>
            • 龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
            • 🚩「龍湘の除名」≠-1<br>
            • 銀両≥500<br>            
        </td>
		<td>
            現状では🚩「龍湘の除名」=-1を<br>
            設定する仕組みが無いようだ<br>
        </td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>龍湘燒廚房</td>
		<td>-</td>
		<td>+30</td>
		<td>
            • 銀両-500<br>
            • 龍湘好感+1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「龍湘が唐門にいる」<br>
            • 🚩「外出で龍湘に遭遇」なし<br>
            • 🚩「龍湘の除名」≠-1<br>
            • 銀両≥500<br>            
        </td>
		<td>
            現状では🚩「龍湘の除名」=-1を<br>
            設定する仕組みが無いようだ<br>
        </td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>胸口碎大石</td>
		<td>-</td>
		<td>-</td>
		<td>技能「医術」(<MarkdownWrapper>[技能効果](/ja/system/skill)</MarkdownWrapper>)等級≥2を判定:<br>
            • はい: 李富貴好感+2<br>
            • いいえ: 性情-1<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>弄蛇成功</td>
		<td>-</td>
		<td>+30</td>
		<td>
            李富貴好感≥20、かつ秘笈<MarkdownWrapper>[《蛇形拳》](/ja/system/books/book_4008)</MarkdownWrapper>を未所持: 該当秘笈を獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 20</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>弄蛇失敗</td>
		<td>-</td>
		<td>-</td>
		<td>
            🆚戦：蛇 が発生:<br>
            • 敗北: <MarkdownWrapper>[生死簿88：大道芸人の毒蛇](/ja/event/badends/#生死簿-No.88)</MarkdownWrapper>へ進む<br>
            • 勝利: 抗毒+1、抗麻+1、名声+1、心相-10、(次行に続く)<br>
            • 李富貴好感+1、丐幇好感+1<br>
        </td>
		<td>-</td>
		<td>勝利: <br>抗毒-1<br>抗麻-1</td>
		<td>基礎: 15</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>
            対戦する蛇の種類はゲーム内時間で決まる:<br>
            • 1年目12月下旬以前<br>
            • 2年目12月下旬以前<br>
            • 4年目5月上旬以前<br>
        </td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>弄蛇大成功</td>
		<td>-</td>
		<td>+20</td>
		<td>
            • 李富貴好感+1<br>
            • 秘笈<MarkdownWrapper>[《蓮花落》](/ja/system/books/book_7001)</MarkdownWrapper>を未所持: 該当秘笈を獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 10<br>
            • 心相≥60: +20<br>
            • 処世≥60: +10<br>
        </td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>李富貴<br>釣魚</td>
		<td>-</td>
		<td>+20</td>
		<td>李富貴好感+1、樊嘯天好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>
            • 🚩「李富貴が唐門にいる」<br>
            • 🚩「外出で李富貴に遭遇」なし<br>
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>偶遇福韞</td>
		<td>-</td>
		<td>-</td>
		<td>
            道徳＞40: 道徳+1、学問+1、福韞好感+1<br>
            道徳≤40: 選択肢が発生:<br>
            <br>
            👉 あげない: <br>
            • 道徳-1、処世+1、福韞好感-1、嵩山派好感-1、🆚戦：福韞<br>
            • 敗北: 銀両-200<br>
            • 勝利: 武学+4、🚩「福韞を殴った」を設定<br>
            <br>
            👉 あげる(銀両≥10必要): <br>
            • 道徳+1、学問+1、銀両-10、福韞好感+1<br>
            • 複合判定(該当しない場合のみ次の判定に進む):<br>
            • 「仏学」(<MarkdownWrapper>[技能効果](/ja/system/skill)</MarkdownWrapper>)等級=0、かつ秘笈<MarkdownWrapper>[《羅漢拳譜》](/ja/system/books/book_6001)</MarkdownWrapper>を未所持: これを獲得<br>
            • 仏学等級≥1、かつ道徳≥60、かつ秘笈<MarkdownWrapper>[《金剛腿》](/ja/system/books/book_4001)</MarkdownWrapper>を未所持: これを獲得<br>
            • 仏学等級≥2、かつ道徳≥60、かつ福韞好感≥10、かつ秘笈<MarkdownWrapper>[《金鐘罩》](/ja/system/books/book_1030)</MarkdownWrapper>を未所持: これを獲得<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 25</td>
		<td>🚩「福韞が唐門にいる」</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>帶小師妹<br>下山認路</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両-200、唐默鈴好感+1<br>
            • 想い人が唐默鈴: 心相+30<br>
            • 想い人が唐默鈴でない: 心変わり+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 30<br>
            • 道徳≥50: +10<br>
            • 道徳≥60: +10<br>
        </td>
		<td>
            • 銀両≥200<br>
            • 唐中翎好感≥20<br>
            • 🚩「小師妹が唐門にいる」<br>            
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>小師妹<br>得意洋洋</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 唐默鈴好感+1<br>
            • 想い人が唐默鈴: 心相+30<br>
            • 想い人が唐默鈴でない: 心変わり+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>基礎: 30</td>
		<td>🚩「唐默鈴と結縁」</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>混世魔王</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両-500、葉雲裳好感+1<br>
            • 想い人が葉雲裳: 心相+30<br>
            • 想い人が葉雲裳でない: 心相-30、心変わり+2<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 銀両≥2000: +30<br>
        </td>
		<td>
            • 銀両≥500<br>
            • 🚩「葉雲裳が唐門にいる」<br>            
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>市場<br>街歩き</td>
		<td>監護人</td>
		<td>-</td>
		<td>-</td>
		<td>
            • 銀両-500、唐默鈴好感+1、葉雲裳好感+1<br>
            • 想い人が葉雲裳: 心相+30<br>
            • 想い人が葉雲裳でない: 心変わり+3<br>
        </td>
		<td>-</td>
		<td>-</td>
		<td>
            • 基礎: 20<br>
            • 銀両≥2000: +30<br>
        </td>
		<td>
            • 銀両≥500<br>
            • 🚩「小師妹が唐門にいる」<br> 
            • 🚩「葉雲裳が唐門にいる」<br>            
        </td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>樹下說法</td>
		<td>10</td>
		<td>8</td>
		<td>学問+1<br>品性+1<br>福韞好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞が唐門にいる</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>樹下說法 2</td>
		<td>10</td>
		<td>-12</td>
		<td>学問+1<br>品性+1<br>福韞好感+1<br>葉雲舟好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞が唐門にいる</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>樹下說法</td>
		<td>10</td>
		<td>-6</td>
		<td>品性-<br>葉雲舟好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>• 葉雲舟が唐門にいる<br>• 福韞が唐門にいる</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>住戶糾紛</td>
		<td>10</td>
		<td>-12</td>
		<td>
			※小師妹：銀両+200、門派資産+30<br>※葉雲裳：門派資産+20、葉雲舟好感+<br>※葉雲舟：心相-15、抗毒+1、葉雲裳好感+<br>※上官螢<br>※小菊<br>※小梅<br>※小竹<br>※龍湘<br>上官螢好感+<br>龍湘好感+
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>戦役：勝敗を問わず：武学+2、門派資産-50</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>死皮賴臉</td>
		<td>-</td>
		<td>-12</td>
		<td>貢献+10</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 選択肢 1「金も払わずタダで泊まる気か、失せろ」<br>武学+2、道徳-2、品性-1、銀両+200、資産+10<br>▲
			選択肢 2「困っているならツケでいい」<br>道徳+1、処世+1、貢献-20、資産-10、掌門好感+1、三師兄好感-1
		</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>收到租金</td>
		<td>10+6</td>
		<td>-12</td>
		<td>資産+100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>福韞說教</td>
		<td>-</td>
		<td>-12</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>福韞が唐門にいる</td>
		<td>
			【秘笈】那由它劫指の前提<br>▲ 選択肢
			1「救えないが、苦しみを共にしたい」（行動回数を消費）<br>性情+1、品性+1、心相-5、龍湘好感+2、福韞好感+1<br>▲
			選択肢 2「救えない、逃げる」<br>性情-1、元の行動を継続
		</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>打掃環境</td>
		<td>10</td>
		<td>-12</td>
		<td>外堡住客好感+1<br>※葉雲舟を含む、葉雲裳は含まない</td>
		<td>外堡住客好感が追加で+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>唐門と外堡に入居している者全員の好感が増加<br>※この効果では好感が確かに2回+1される</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>孝敬唐門</td>
		<td>16</td>
		<td>-2</td>
		<td>名声+1<br>銀両+500<br>資産+500</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>★ 上官螢と知り合う最速の手段と思われ、寿宴より早く出会える可能性がある</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>苦命葉雲舟</td>
		<td>-</td>
		<td>-16</td>
		<td>名声+2<br>葉雲舟好感+2、葉雲裳好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>葉雲舟が唐門にいる</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>葉雲舟削劍</td>
		<td>10</td>
		<td>-12</td>
		<td>刀剣+1<br>🚩「葉雲舟の剣削り回数」+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>葉雲舟が唐門にいる</td>
		<td>
			▲ 選択肢 1「僕も欲しい！僕も！」:<br>
            名声-1、処世+1、道徳-1<br>▲
			選択肢 2「手伝う」:<br>
            処世-1、品性+1、鍛造+2、葉雲舟好感+1
		</td>
	</tr>
<tr>
		<td>外出</td>
		<td>外堡<br>管家</td>
		<td>葉雲舟教劍</td>
		<td>10</td>
		<td>-12</td>
		<td>刀剣+1<br>武学+5<br>葉雲舟好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>• 葉雲舟が唐門にいる<br>🚩「葉雲舟の剣削り回数」≥5</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>茶屋<br>茶博士</td>
		<td>茶水太燙</td>
		<td>10</td>
		<td>-32</td>
		<td>学問+1<br>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 選択肢 1「殴る」<br>品性-1<br>勝利し「冷ましてから飲む」を選択：弁舌+1、処世-1、銀両+200<br>▲
			選択肢 2「穏便に済ませる」<br>品性+1、名声-1<br>敗北：熱湯で死亡
		</td>
	</tr>
<tr>
		<td>外出</td>
		<td>茶屋<br>茶博士</td>
		<td>口角糾紛</td>
		<td>10</td>
		<td>-12</td>
		<td>学問+1<br>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>戦役（門派乱戦、ただし好感には影響しない）<br>心相+15、武学+2</td>
	</tr>
<tr>
		<td>外出</td>
		<td>茶屋<br>茶博士</td>
		<td>丐幫尋釁</td>
		<td>10</td>
		<td>-12</td>
		<td>学問+1<br>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			勝利：武学+2、丐幇向心-1<br>▲ 選択肢 1「頼むから、次はもう来るな」<br>品性+1、道徳+1、銀両-500、丐幇好感-1<br>▲
			選択肢 2「くさい乞食め、熱々の茶をただで飲ませてやる」<br>品性-1、道徳-1、名声+2、団結+1、丐幇好感-2
		</td>
	</tr>
<tr>
		<td>外出</td>
		<td>茶屋<br>茶博士</td>
		<td>飛石找碴</td>
		<td>10</td>
		<td>-12</td>
		<td>学問+1<br>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>名声+1<br>武学+2<br>銀両+200<br>資産+50<br>飛石幇向心(力)-1</td>
	</tr>
<tr>
		<td>外出</td>
		<td>茶屋<br>茶博士</td>
		<td>請你吃瓜</td>
		<td>10</td>
		<td>18</td>
		<td>
			学問+1<br>団結+1<br>性情+1<br>品性-1<br>弁舌+1<br>銀両-100
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>茶屋<br>茶博士</td>
		<td>龍湘點茶</td>
		<td>10</td>
		<td>-10</td>
		<td>学問+1<br>品性+1<br>名声+1<br>資産+20<br>龍湘好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>龍湘が唐門にいる</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>茶屋<br>茶博士</td>
		<td>午後小雨</td>
		<td>10</td>
		<td>18</td>
		<td>学問+1<br>品性+2<br>団結+1<br>性情+1/-1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>水果報恩</td>
		<td>10</td>
		<td>8</td>
		<td>団結+1<br>道徳+1<br>銀両+200</td>
		<td>門派資産+10</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>無償看病</td>
		<td>10</td>
		<td>-12</td>
		<td>道徳+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>醫治瞎子</td>
		<td>10</td>
		<td>-12</td>
		<td>道徳+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>醫療糾紛</td>
		<td>10</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			非を認めない：道徳-2 弁舌+1 処世+1 心相-12<br>優しく説得して帰す：道徳+1 弁舌+1 品性+1
			処世-1 心相-62<br>事を荒立てない：銀両-500 性情-1 処世-1 心相-32
		</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>一致認同</td>
		<td>10</td>
		<td>-2</td>
		<td>煉丹 5<br>道徳 1<br>銀両 100<br>二師兄好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>葉雲舟事件</td>
		<td>10</td>
		<td>-</td>
		<td>道徳 1<br>品性 1<br>葉雲舟好感</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>葉雲舟が唐門にいる</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>飛石幫事件</td>
		<td>10</td>
		<td>-12</td>
		<td>
			説得して帰す：<br>道徳+1 飛石幇向心+1 団結-2 貢献-10<br>好きにさせる：<br>団結+1
			飛石幇向心-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>丐幫事件</td>
		<td>10</td>
		<td>-12</td>
		<td>
			「約束だ」：<br>道徳+1 団結-1 貢献-10 丐幇向心+1<br>「勝手に死ね」：<br>道徳-1
			品性-1 団結+1 丐幇向心-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>醫治黑狗</td>
		<td>10</td>
		<td>-</td>
		<td>
			黒犬に咬まれた：<br>心相-42、体力-1、<br>黒犬の贈り物：<br>心相-2、道徳+
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>醫治妓女</td>
		<td>10+20</td>
		<td>-52</td>
		<td>道徳+、大師兄好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>醫治公子哥</td>
		<td>10</td>
		<td>-32</td>
		<td>名声+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>薬屋<br>坐診</td>
		<td>醫治富庶之人</td>
		<td>10</td>
		<td>-12</td>
		<td>道徳+<br>銀両+500<br>門派資産+50</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>温泉</td>
		<td>無事發生</td>
		<td>-</td>
		<td>-</td>
		<td>心相+70</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>温泉</td>
		<td>涼棚垮了</td>
		<td>-</td>
		<td>15</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>生死簿 70：溺死</td>
	</tr>
<tr>
		<td>外出</td>
		<td>温泉</td>
		<td>偷窺事件</td>
		<td>-</td>
		<td>30</td>
		<td>
			選択肢 1「言う通りに見せてみろ」：<br>生死簿 69：自ら死地へ<br>選択肢
			2「やめなさい」：<br>道徳+1、団結-3、貢献-10、唐門女性キャラ好感+1<br>選択肢
			3「水の中に蛇がいる」：<br>道徳+1 弁舌+1 処世+1 団結-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>温泉</td>
		<td>身心舒暢</td>
		<td>-</td>
		<td>70</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>温泉</td>
		<td>龍湘溫泉</td>
		<td>-</td>
		<td>50</td>
		<td>龍湘好感+3<br>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>龍湘の告白後</td>
		<td>-</td>
	</tr>
<tr>
		<td>外出</td>
		<td>義田<br>耕耘</td>
		<td>踏實努力</td>
		<td>12</td>
		<td>-12</td>
		<td>体力+1<br>性情-<br>処世-<br>品性-</td>
		<td>体力+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>街歩き</td>
		<td>四師兄買物<br>銀兩-100</td>
		<td>0</td>
		<td>100</td>
		<td>四師兄好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>街歩き</td>
		<td>別於蜀中<br>銀兩-300</td>
		<td>0</td>
		<td>20</td>
		<td>学問+2<br>処世+2<br>銀両-300</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>街歩き</td>
		<td>鐵拳巷<br>銀兩-300</td>
		<td>0</td>
		<td>20</td>
		<td>鍛造+5<br>銀両-300<br>郁竹好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>街歩き</td>
		<td>偶遇小梅<br>銀兩-300</td>
		<td>0</td>
		<td>-</td>
		<td>処世+1<br>性情+1<br>銀両-300<br>虞小梅好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>賭場</td>
		<td>十賭九詐</td>
		<td>0</td>
		<td>-20</td>
		<td>運命 1<br>処世 1<br>品性-1<br>道徳-1<br>銀両-1000</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>賭場</td>
		<td>小賺一把</td>
		<td>0</td>
		<td>20</td>
		<td>処世 1<br>道徳-1<br>品性-1<br>銀両+1000</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>賭場</td>
		<td>大賺一把</td>
		<td>0</td>
		<td>30</td>
		<td>処世 1<br>道徳-1<br>品性-1<br>銀両+3000</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>擂台</td>
		<td>丐幫弟子&lt;33</td>
		<td>0</td>
		<td>0</td>
		<td>
			武学 2<br>性情 1<br>銀両 500<br>所属門派 1<br>（3回勝利後、追加で弁舌、学問が増加）
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>飛天門(軽功)<br>鉄拳門(体力)<br>玄功門(拳掌)<br>奪魄門(暗器)</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>擂台</td>
		<td>江湖拳師&lt;66</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>無色広場<br>擂台</td>
		<td>路人俠&gt;=66</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>所属門派<br>修練<br>優先判定</td>
		<td>無特殊事件</td>
		<td>0</td>
		<td>-</td>
		<td>所属門派修練イベントに続く</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>所属門派<br>修練<br>優先判定</td>
		<td>小梅跑步</td>
		<td>0</td>
		<td>-</td>
		<td>小梅ランニングイベントに続く</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>虞小梅と知り合っている</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>所属門派<br>修練</td>
		<td>飛天門</td>
		<td>0</td>
		<td>-20</td>
		<td>武学+6<br>軽功+1</td>
		<td>武学+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>所属門派<br>修練</td>
		<td>鐵拳門</td>
		<td>0</td>
		<td>-20</td>
		<td>武学+6<br>体力+1</td>
		<td>武学+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>所属門派<br>修練</td>
		<td>玄功門</td>
		<td>0</td>
		<td>-20</td>
		<td>武学+6<br>拳掌+1</td>
		<td>武学+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>所属門派<br>修練</td>
		<td>奪魄門</td>
		<td>0</td>
		<td>-20</td>
		<td>武学+6<br>暗器+1</td>
		<td>武学+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>嘴炮(內力)</td>
		<td>0</td>
		<td>45</td>
		<td>
			名声 2<br>内功 1<br>
			弁舌 1<br>性情 1<br>処世 1<br>道徳-1<br>品性-1<br>学問-2<br>
			虞小梅好感-2
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>嘴炮(暗器)</td>
		<td>0</td>
		<td>35</td>
		<td>
			弁舌 2<br>名声 2<br>暗器 1<br>性情 1<br>処世 1<br>道徳-1<br>品性-1<br>学問-2<br>掌門好感-1<br>虞小梅好感-2
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>自視甚高</td>
		<td>0</td>
		<td>35</td>
		<td>
			軽功 1<br>内功 1<br>抗毒 1<br>抗麻 1<br>性情 1<br>処世 1<br>学問-1<br>弁舌-1<br>道徳-1<br>品性-1<br>虞小梅好感-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>信口雌黃</td>
		<td>0</td>
		<td>35</td>
		<td>
			学問-<br>品性-<br>道徳-<br>性情+<br>処世+<br>弁舌+<br>名声+<br>虞小梅-<br>唐中翎-<br>唐默鈴-
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>飛天殿<br>修仙</td>
		<td>被道長火球</td>
		<td>0</td>
		<td>15</td>
		<td>学問-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>修仙2回</td>
		<td>生死簿 15：「身から出た錆」</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>鉄拳巷<br>鍛冶</td>
		<td>無能手藝</td>
		<td>-</td>
		<td>-26</td>
		<td>鍛造+5<br>運命+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>鉄拳巷<br>鍛冶</td>
		<td>頭暈腦脹</td>
		<td>-</td>
		<td>-21</td>
		<td>鍛造+5<br>品性-<br>名声+1<br>郁竹好感-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>鉄拳巷<br>鍛冶</td>
		<td>滿意成果</td>
		<td>-</td>
		<td>-16</td>
		<td>鍛造+10<br>郁竹好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>鉄拳巷<br>鍛冶</td>
		<td>熟能生巧</td>
		<td>-</td>
		<td>-16</td>
		<td>鍛造+15<br>品性-<br>暗器+1<br>郁竹好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>鉄拳巷<br>鍛冶</td>
		<td>靈光乍現</td>
		<td>-</td>
		<td>-16</td>
		<td>鍛造+18<br>品性-<br>処世-<br>名声+<br>暗器+2<br>郁竹好感+</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>鉄拳巷<br>鍛冶</td>
		<td>神工附體</td>
		<td>-</td>
		<td>-16</td>
		<td>
			鍛造+20<br>品性-1<br>体力-2<br>内功-2<br>名声+2<br>暗器+3<br>郁竹好感+3
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>玄功洞<br>読書</td>
		<td>誦讀</td>
		<td>-</td>
		<td>10</td>
		<td>学問+1<br>魏菊好感+1</td>
		<td>学問が追加で+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>複数回遭遇すると魏菊が畑仕事をしたがるイベントが発生(耕陽出身の彼女に合う)、追加で好感が1回増加</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>玄功洞<br>読書</td>
		<td>心滿意足</td>
		<td>-</td>
		<td>20</td>
		<td>学問+1</td>
		<td>-</td>
		<td>学問+0</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>玄功洞<br>読書</td>
		<td>開拓思緒</td>
		<td>-</td>
		<td>-20</td>
		<td>学問+1<br>処世-1</td>
		<td>学問が追加で+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>3 回ほど遭遇すると魏菊の承認が発生し、追加で好感が1回増加（魏菊好感+5）</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>捉住破綻</td>
		<td>-</td>
		<td>-2</td>
		<td>武学+6<br>性情+1<br>学問+2<br>銀両+100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>輕鬆取勝</td>
		<td>-</td>
		<td>-12</td>
		<td>武学+6<br>性情+2<br>品性-1<br>銀両+100</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄峰<br>囲碁</td>
		<td>略有所得</td>
		<td>-</td>
		<td>-12</td>
		<td>武学+6<br>学問+1<br>性情-1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>追求者</td>
		<td>-</td>
		<td>-</td>
		<td>軽功+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			武学+1<br>▲ 選択肢 1「逃がす」<br>品性+1、道徳+1、処世-1、名声+1<br>▲
			選択肢 2「階段から突き落とす」<br>性情+1、道徳-1、処世+1、虞小梅好感+1
		</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>抄捷徑：失敗</td>
		<td>-</td>
		<td>-25</td>
		<td>弁舌+1<br>道徳-1<br>名声-1<br>運命+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>不擇手段</td>
		<td>-</td>
		<td>-</td>
		<td>道徳-2<br>品性-1<br>処世+1<br>軽功+1<br>虞小梅好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>英俊少俠</td>
		<td>-</td>
		<td>10</td>
		<td>体力+1<br>軽功+1<br>虞小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>圓滿完程</td>
		<td>-</td>
		<td>10</td>
		<td>体力+2<br>軽功+2<br>虞小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>狀態絕佳</td>
		<td>-</td>
		<td>10</td>
		<td>体力+2<br>軽功+2<br>虞小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>小梅<br>ランニング</td>
		<td>燒烤山味</td>
		<td>-</td>
		<td>50</td>
		<td>体力+1<br>銀両-200<br>虞小梅好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>不置可否</td>
		<td>-</td>
		<td>-5</td>
		<td>武学+5</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>藉口一堆</td>
		<td>-</td>
		<td>-10</td>
		<td>武学+2<br>弁舌+2<br>夏侯蘭好感-2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>亂打一氣</td>
		<td>-</td>
		<td>-10</td>
		<td>武学+2<br>運命+1<br>夏侯蘭好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>鋤草功</td>
		<td>-</td>
		<td>0</td>
		<td>武学+2<br>体力+1<br>刀剣+1<br>夏侯蘭好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>流轉如意</td>
		<td>-</td>
		<td>-10</td>
		<td>武学+7<br>拳掌+1<br>夏侯蘭好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>行招走式</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>得心應手</td>
		<td>-</td>
		<td>-10</td>
		<td>武学+7<br>刀剣+2<br>夏侯蘭好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>刀剣兵器</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>奪魄森林<br>修練</td>
		<td>必殺心得</td>
		<td>-</td>
		<td>-20</td>
		<td>武学+6<br>拳掌+2<br>刀剣+2<br>夏侯蘭好感+2</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>無所事事</td>
		<td>-</td>
		<td>60</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>出來玩</td>
		<td>-</td>
		<td>40</td>
		<td>軽功+1<br>虞小梅好感+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>崆峒</td>
		<td>窩居</td>
		<td>別派觀望</td>
		<td>-</td>
		<td>20</td>
		<td>処世+<br>性情-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>街で気晴らし</td>
		<td>有礙觀瞻</td>
		<td>-</td>
		<td>-20</td>
		<td>
			▲ 選択肢 1「もう一度言ってみろ!」<br>勝利；<br>銀両-100、品性-、性情+<br>処世+、名声+、武学+<br>敗北；<br>心相-20、品性-、名声-<br>▲
			選択肢 2「穏便に済ませる」<br>品性+、処世-1、性情-1
		</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>街で気晴らし</td>
		<td>不由分說</td>
		<td>-</td>
		<td>0</td>
		<td>-</td>
		<td>-</td>
		<td>敗北：<br>行動回数-1</td>
		<td>-</td>
		<td>-</td>
		<td>
			▲ 選択肢 1「役所に突き出す」<br>武学+2、品性+1、性情-1、名声-1、宋悲好感+1<br>▲
			選択肢 2「気絶させて城外に捨てる」<br>道徳-2、品性-1、処世+1、名声+1<br>▲ 選択肢
			3「喧嘩するほど仲がいい、酒を奢る」<br>心相+30、道徳-1、処世-1、名声-1、南宮家好感-1
		</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>街で気晴らし</td>
		<td>心曠神怡</td>
		<td>0</td>
		<td>30</td>
		<td>体力 1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>街で気晴らし</td>
		<td>上街消遣</td>
		<td>-</td>
		<td>40</td>
		<td>品性+1<br>銀両-200</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>無為に過ごす</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>
			南宮深と湖遊び<br>（南宮深との初回の手合わせで一定ラウンド持ちこたえ、互いに褒め合った後に解禁）：<br>道徳-1、南宮深好感+1、名声+1、学問+1、処世-1、性情+1、心相+50<br>2回目以降：<br>南宮深好感+2
		</td>
		<td>誰にも会わなかった場合：<br>心相+40</td>
		<td>南宮淺：<br>南宮淺好感+</td>
		<td>-</td>
		<td>-</td>
		<td>
			南宮家の人々と交流し、心相を回復する<br>（小遣いをもらうイベントもここで発生。南宮深好感
			1 以上か、戦況が可もなく不可もなく以上か、あるいは純粋に運と思われる）
		</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>出城して斬り込む</td>
		<td>出城衝殺</td>
		<td>-</td>
		<td>-15</td>
		<td>名声+15<br>団結-<br>丐幇向心-<br>銀両+500</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>戦役に入る。戦場で拾う銀両は別計算</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>中庭で練武</td>
		<td>南宮深</td>
		<td>-</td>
		<td>-20</td>
		<td>勝利<br>武学+(4)<br>処世+<br>品性-<br>南宮深+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>中庭で練武</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>引き分け</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>中庭で練武</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>敗北</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>-</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>中庭で練武</td>
		<td>南宮家丁</td>
		<td>-</td>
		<td>-</td>
		<td>武学+2<br>銀両+1000</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>南宮家丁&lt;80<br>賭け：性情+、処世+</td>
	</tr>
<tr>
		<td>江陵<br>囲城</td>
		<td>中庭で練武</td>
		<td>南宮淺</td>
		<td>-</td>
		<td>-20</td>
		<td>勝利<br>武学+4</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>心相＞30</td>
		<td>お前のような腰抜け決闘者の相手は南宮淺に任せる&lt;40<br>武学の伸びは限定的</td>
	</tr>
<tr>
		<td style="text-align: center">家出</td>
		<td style="text-align: center">**釣り**</td>
		<td style="text-align: center">收穫豐富</td>
		<td style="text-align: center">-</td>
		<td style="text-align: center">10</td>
		<td style="text-align: center">銀両+200</td>
		<td style="text-align: center">-</td>
		<td style="text-align: center">-</td>
		<td>-</td>
		<td>-</td>
		<td style="text-align: center">-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>釣り</td>
		<td>沒什麼收穫</td>
		<td>-</td>
		<td>20</td>
		<td>品性+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>釣り</td>
		<td>女式衣裙</td>
		<td>-</td>
		<td>30</td>
		<td>勝利（本当に俺じゃない）：武学+2 道徳+1 品性+1 処世-1 黄酒+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>このイベントで黄酒を稼げる</td>
	</tr>
<tr>
		<td>家出</td>
		<td>釣り</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>勝利（水に投げ込む）：</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>釣り</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>敗北：</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>市場をぶらつく</td>
		<td>假裝自己有家可歸</td>
		<td>-</td>
		<td>20</td>
		<td>銀両-50</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>賭場に入り浸る</td>
		<td>十賭九詐</td>
		<td>-</td>
		<td>-30</td>
		<td>銀両-2000 道徳-1 品性-1 処世+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>賭場に入り浸る</td>
		<td>大賺一把</td>
		<td>-</td>
		<td>30</td>
		<td>銀両+1000 道徳-1 品性-1 名声-1 処世+1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>宿屋で喫茶</td>
		<td>裝模作樣</td>
		<td>-</td>
		<td>30</td>
		<td>銀両-100 学問+1 処世-1</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>
<tr>
		<td>家出</td>
		<td>独りで練功</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
	</tr>

</Table>

## 備考
• 心相65は緑の表情だが、黄色の表情の追加効果が付く。<br>
• 基礎効果 + 追加効果 = 実際の効果。例えば低心相時は (基礎学問+2) + (低心相学問-1) = 実際の学問+1。<br>
• 紙面節約のため、「イベント終了」のような予想しやすい手順は一部省略している。<br>
• 「優先判定」イベントの結果に「通常コマンドの判定に続く」と書いてある場合、優先イベントは行動回数を消費しない。書いていない場合は優先イベント終了時に行動回数を消費し、通常コマンドの判定には続かない。<br>
• 本記事は[活俠傳事件及分歧整理](https://docs.google.com/spreadsheets/d/1YZRvCuf7ar5eqHCEJoVRdD1uxhTtkKBBCuF_0O0OdNg)を参考に作成。<br>
