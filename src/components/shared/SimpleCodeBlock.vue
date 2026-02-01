<template>
  <pre class="simple-code-block"><code :class="'language-' + language" v-html="highlightedCode"></code></pre>
</template>

<script setup lang="ts">
import { computed, onMounted, nextTick } from 'vue';
import { useCodeHighlight } from '@/composables/useCodeHighlight';

interface Props {
  code: string;
  language?: string;
}

const props = withDefaults(defineProps<Props>(), {
  language: 'javascript'
});

const { highlightCode } = useCodeHighlight();

const highlightedCode = computed(() => {
  return highlightCode(props.code, props.language);
});

// 确保DOM更新后代码高亮正确应用
onMounted(async () => {
  await nextTick();
});
</script>

<style scoped>
.simple-code-block {
  background: var(--color-code-bg);
  color: #e2e8f0;
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>