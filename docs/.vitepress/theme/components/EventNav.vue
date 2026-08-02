<template>
    <nav v-if="entry" class="event-nav" :aria-label="labels.aria">
        <a v-if="entry.prev" class="event-nav-item event-nav-prev" :href="hrefOf(entry.prev.link)">
            <span class="event-nav-label">{{ labels.prev }}</span>
            <span class="event-nav-title">{{ entry.prev.text }}</span>
        </a>
        <span v-else class="event-nav-item event-nav-empty"></span>
        <a v-if="entry.next" class="event-nav-item event-nav-next" :href="hrefOf(entry.next.link)">
            <span class="event-nav-label">{{ labels.next }}</span>
            <span class="event-nav-title">{{ entry.next.text }}</span>
        </a>
        <span v-else class="event-nav-item event-nav-empty"></span>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useData, withBase } from "vitepress";
import eventTimeline from "../data/event_timeline.json";

// 見出しは「次のイベント」ではなく「時系列で次」。順序の出所であるシナリオ簡易表の並びは
// 編集者が付けた配置であって、話が地続きであることを意味しない (tools/buildEventTimelineIndex.js 参照)。
const LABELS = {
    root: { prev: "時間軸上的前一個", next: "時間軸上的後一個", aria: "時間軸導覽" },
    ja: { prev: "時系列で前", next: "時系列で次", aria: "時系列ナビゲーション" },
    en: { prev: "Earlier in timeline", next: "Later in timeline", aria: "Timeline navigation" },
};

const { page, localeIndex } = useData();

const labels = computed(() => LABELS[localeIndex.value] ?? LABELS.root);

// 簡易表に載っているイベントページでだけ描画する。それ以外のページでは entry が undefined になり
// v-if で丸ごと消える。
const entry = computed(() => eventTimeline[page.value.relativePath]);

// cleanUrls を使っていないため、生の <a href> は .html まで書かないと dev で 404 になる
// (Markdown リンクと違い VitePress の書き換えが効かない)。base は withBase が付ける。
const hrefOf = (link) => withBase(`${link}.html`);
</script>

<style scoped>
.event-nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin: 32px 0 0;
    padding-top: 24px;
    border-top: 1px solid var(--vp-c-divider);
}

.event-nav-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 16px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    text-decoration: none;
    transition: border-color 0.25s;
}

a.event-nav-item:hover {
    border-color: var(--vp-c-brand-1);
}

.event-nav-empty {
    border-color: transparent;
}

.event-nav-next {
    text-align: right;
}

.event-nav-label {
    font-size: 12px;
    line-height: 20px;
    color: var(--vp-c-text-2);
}

.event-nav-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: var(--vp-c-brand-1);
}

@media (max-width: 640px) {
    .event-nav {
        grid-template-columns: 1fr;
    }

    .event-nav-empty {
        display: none;
    }

    .event-nav-next {
        text-align: left;
    }
}
</style>
