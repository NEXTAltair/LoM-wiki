<!-- 連續事件導覽列：事件頁上方顯示「← 前一個事件 ｜ 系列名 ｜ 下一個事件 →」。
     資料在 theme/data/eventSeries.js，連結文字取各語系頁面的 frontmatter title。 -->
<template>
    <nav v-if="rows.length" class="event-series-nav">
        <div v-for="row in rows" :key="row.name" class="event-series-nav__row">
            <span class="event-series-nav__prev">
                <template v-if="row.prev.length">
                    <span class="event-series-nav__arrow">←</span>
                    <template v-for="(link, i) in row.prev" :key="link.href">
                        <span v-if="i > 0" class="event-series-nav__sep">／</span>
                        <a :href="link.href">{{ link.text }}</a>
                    </template>
                </template>
            </span>
            <span class="event-series-nav__name">{{ row.name }}</span>
            <span class="event-series-nav__next">
                <template v-if="row.next.length">
                    <template v-for="(link, i) in row.next" :key="link.href">
                        <span v-if="i > 0" class="event-series-nav__sep">／</span>
                        <a :href="link.href">{{ link.text }}</a>
                    </template>
                    <span class="event-series-nav__arrow">→</span>
                </template>
            </span>
        </div>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useData, withBase } from "vitepress";
import wikiLinkIndex from "../../script/wikiLinkIndex";
import eventSeries from "../../data/eventSeries.js";

// 語系 → 該語系頁面的路徑前綴 (root 為繁體中文，沒有前綴)
const LOCALE_PREFIX = { root: "", "zh-hans": "zh-hans/", en: "en/", ja: "ja/" };

// wikiLinkIndex 是「標題 → 各語系路徑」，反過來建「路徑 (不含 .html) → 標題」供連結文字使用
const titleByPath = {};
for (const [title, entry] of Object.entries(wikiLinkIndex)) {
    for (const p of Object.values(entry)) titleByPath[p.replace(/\.html$/, "")] = title;
}

const pagePath = (name) => (name.includes("/") ? name : `event/simple/${name}`);

// 每個系列展開成「頁面 → 前一格 / 下一格的頁面」，同一頁出現在多條 flow 時取聯集
const graphs = eventSeries.map((series) => {
    const prev = new Map();
    const next = new Map();
    const add = (map, key, value) => {
        if (!map.get(key).includes(value)) map.get(key).push(value);
    };
    for (const flow of series.flows) {
        const steps = flow.map((step) => (Array.isArray(step) ? step : [step]).map(pagePath));
        steps.forEach((step, i) => {
            for (const p of step) {
                if (!prev.has(p)) prev.set(p, []);
                if (!next.has(p)) next.set(p, []);
                for (const q of steps[i - 1] ?? []) add(prev, p, q);
                for (const q of steps[i + 1] ?? []) add(next, p, q);
            }
        });
    }
    return { name: series.name, prev, next };
});

// 日文頁標題末尾的原文併記「(中文)」不放進連結文字 (與 tools/checkJaTranslation.js 的 LABEL 規則相同)
const labelOf = (title, locale) => {
    if (locale !== "ja") return title;
    const m = title.match(/^(.+?)\s*[(（]([^)）]+)[)）]$/);
    return m ? m[1].trim() : title;
};

const { page, localeIndex } = useData();

const rows = computed(() => {
    const locale = localeIndex.value;
    const prefix = LOCALE_PREFIX[locale];
    const rel = page.value.relativePath.replace(/\.md$/, "");
    if (prefix === undefined || !rel.startsWith(prefix)) return [];
    const key = rel.slice(prefix.length);

    const link = (p) => {
        // 該語系沒有這一頁時退回繁體中文頁 (與 WikiLink 相同)
        const path = titleByPath[prefix + p] !== undefined ? prefix + p : p;
        const title = titleByPath[path] ?? p.split("/").pop();
        return { href: withBase(`/${path}.html`), text: labelOf(title, locale) };
    };

    return graphs
        .filter((g) => g.name[locale] && g.prev.has(key))
        .map((g) => ({
            name: g.name[locale],
            prev: g.prev.get(key).map(link),
            next: g.next.get(key).map(link),
        }));
});
</script>

<style scoped>
.event-series-nav {
    margin: 4px 0 16px;
    border-top: 1px solid var(--vp-c-divider);
    border-bottom: 1px solid var(--vp-c-divider);
    font-size: 14px;
    line-height: 1.6;
}

.event-series-nav__row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 12px;
    padding: 6px 0;
}

.event-series-nav__row + .event-series-nav__row {
    border-top: 1px dashed var(--vp-c-divider);
}

.event-series-nav__prev {
    text-align: left;
}

.event-series-nav__next {
    text-align: right;
}

.event-series-nav__name {
    padding: 0 10px;
    border-radius: 4px;
    background-color: var(--vp-c-default-soft);
    color: var(--vp-c-text-2);
    font-weight: 600;
    white-space: nowrap;
}

.event-series-nav a {
    color: var(--vp-c-brand-1);
    text-decoration: none;
}

.event-series-nav a:hover {
    text-decoration: underline;
}

.event-series-nav__arrow,
.event-series-nav__sep {
    color: var(--vp-c-text-3);
    margin: 0 4px;
}

@media (max-width: 640px) {
    .event-series-nav__row {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "name name"
            "prev next";
        gap: 4px 12px;
    }

    .event-series-nav__name {
        grid-area: name;
        justify-self: center;
    }

    .event-series-nav__prev {
        grid-area: prev;
    }

    .event-series-nav__next {
        grid-area: next;
    }
}
</style>
