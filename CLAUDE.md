# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コメント・メッセージの書き方

コードコメント・commit message・PRコメント・ユーザー向け報告など、冒頭に5W1H
(誰が/いつ/どこで/何を/なぜ/どのように) のない中身のないコメントやメッセージを
書くな。書いたら殺す。

## What this is

A VitePress-based wiki for the game 活俠傳 (Legend of Mortal). This is a **fork** of
`Mr-Smilin/LoM-wiki` (origin = `NEXTAltair`, upstream = `Mr-Smilin`). `docs/` is the
application itself, not incidental documentation — treat edits under `docs/` with the
same care as source code, not as free-form doc fixes.

## Commands

```sh
npm install
npm run dev          # docs:dev — rebuilds wiki-link index, then vitepress dev docs
npm run build        # docs:build — runs all build-time generators, then vitepress build docs
npm run docs:preview # serve the built dist on :4173
```

`docs:build` runs several generator scripts in sequence before the VitePress build
(`tools/buildNewsList.js`, `buildBadendList.js`, `buildLocalePageManifest.js`,
`buildContributors.js`, `buildWikiLinkIndex.js`, `buildConvertToWebp.js`). Their outputs
are git-ignored (`docs/other/news.md`, `docs/public/json/contributors.json`,
`docs/public/json/badend_list.json`, `docs/.vitepress/theme/script/wikiLinkIndex.js`) —
never hand-edit these files, only their generators in `tools/`.

No test suite, linter, or formatter is configured. `.editorconfig` sets 4-space indent
for `.md`/`.vue` files.

## Git workflow — read before touching `docs/`

**This repo's own rule set overrides generic "docs can be edited on main" instincts.**
Full policy: `.claude/rules/git-workflow.md`, operational detail in the
`lom-contribution-flow` skill (load it before editing anything under `docs/ja`).

- Before editing, always confirm the actual branch with `git branch --show-current` —
  the session's initial git snapshot can be stale.
- Never edit `docs/` (any locale) on the shared `main` checkout. Day-to-day translation
  fixes and page work happen in the standing worktree `.agents/worktree/ja-fixes`
  (branch `ja-fixes`), committed and pushed directly there — no PR needed for that step.
- `main` only receives: (a) squash-merged aggregation PRs from `ja-fixes`, and (b)
  upstream-tracking merges (merge commit required — squash/rebase forbidden for those).
- `.claude/` and `.agents/` are git-ignored — they hold local agent config/worktrees,
  not project content; changes there are not commits.

## i18n structure

Three locales share one VitePress site: `docs/` (root, zh-TW, no prefix), `docs/en/`,
`docs/ja/`. Each locale has its own `nav` array in `docs/.vitepress/config.mjs`
(`locales.en.themeConfig`, `locales.ja.themeConfig`) — adding a page usually means
adding it under the right locale directory *and* wiring a nav entry per locale if it
should appear in navigation.

VitePress does not auto-prefix locale links inside page content — only the base URL is
handled automatically. Locale-prefixed links, `<a>` hrefs, and icon links must be
constructed manually (see `useLocalePrefix.js` and
`lom-vitepress-i18n-link-gotcha` in memory for the exact failure modes: raw `href`
builds but 404s in dev, icon `href` must be a computed property, etc.). Verify link
changes against the built `dist/`, not just dev server behavior.

New event/character pages should start from a `clean-*-template.md` in
`docs/ja/develop/` (or `docs/develop/` for the zh-TW original) rather than freehand —
these encode the layout and markdown conventions the theme components expect
(e.g. footnotes render as `※` markers, not `[^n]`, inside custom `<td>`-based
components — see `docs/.vitepress/theme/components/tdStyles`).

## Directory map

- `docs/{people,system,event,other,develop}/` — zh-TW (root) content, mirrored under
  `docs/en/` and `docs/ja/` with the same subpaths.
- `docs/.vitepress/config.mjs` — site config, nav (per-locale), search, head tags.
- `docs/.vitepress/theme/` — custom Vue theme: `components/` (character cards, tabs,
  info boxes, background/icon widgets), `script/` (link index, locale prefixing, theme
  transition), `styles/`.
- `tools/` — Node build-time generators (see Commands) plus ja-translation tracking
  scripts (`checkJaTranslation.js`, `ja-translation-ledger.tsv`,
  `ja-residue-allowlist.txt`).
- `backup/` — page templates and per-version backups referenced when starting new pages.
- `altairs-agent-dev-kit/` — the shared rules/skills kit vendored into `.claude/`.

## Content conventions

- Do not put game-internal IDs, flag names, or script/variable names into published
  pages — these must be stripped before a page is considered done
  (`.claude/rules/git-workflow.md` point 4).
- JA translations follow "MOD 訳最優先": when an official/community MOD translation of
  a term exists, follow it even if it reads as a mistranslation of the source — don't
  independently retranslate.
- Numeric event effects and event identification should be derived from save-diff
  analysis (`savediff.py` on `.ss.json` saves), not from the old F3 diff-tracking
  approach (deprecated). See the `lom-data-mining` skill.

## Event page names are editor-assigned summaries, not official names

The game never displays event names on screen. The Chinese string in an event page's
filename is a summary an editor wrote to identify the event; the filename is Chinese
only so the three locales share one path (see `docs/ja/develop/clean-event-template.md`,
the editor-facing SSoT for page format).

So a `日本語訳 (中文)` parenthetical in a title or heading is only justified when that
Chinese string has a source outside this wiki's own filenames — text that appears in
game, or a name already used by the zh-TW wiki's pages or its timeline table. Do not
put a Chinese name you coined into parentheses: readers read the parenthetical as the
in-game original. A name that appears only in community research notes is not a source
for the name either; those notes are evidence for timing and numeric effects, not naming.

For the same reason, never add an entry to `tools/ja-oldterm-allowlist.txt` to get such
a parenthetical past the OLD_TERM gate. That allowlist is for lines where the old-form
character legitimately belongs. If the parenthetical has no source, drop the
parenthetical instead of silencing the gate.

## Research the sources before you write "unverified"

Two source trees answer most questions about an event's trigger, prerequisite, branch,
or numeric effect: this repo's `tmp/` (investigation notes and the community timeline
table) and `~/.cache/lom-wiki-refs/` (extracted game data and real playthrough data).
Read them before writing an event page and before writing any TODO that calls something
unverified — the `lom-data-mining` skill covers what is in each and how to read it.

A "TODO: ... は未確認" that either source already answers is a defect, not a record of
research. Speculation ("〜と推定", "正体は〜の可能性が高い") never goes on a published
page — verify it, or leave it out. Unresolved items are tracked in the memo
(`tools/ja-fix-notes-template.md`), not as guesses in the published text.

## Where a rule belongs

Three destinations, and they are not interchangeable:

- **`CLAUDE.md` (this file)** — principles that must hold on every task, stated once and
  pointing elsewhere for detail. Agent-facing.
- **skills (`.agents/skills/`)** — procedures that apply when a specific job starts: the
  contribution pipeline, the data-mining tooling. Agent-facing.
- **`docs/ja/develop/*-template.md`** — the format guide **human editors** follow when
  writing a page. Published content. Never put agent instructions here.

Do not copy a rule into a second destination; point at the one that owns it.
