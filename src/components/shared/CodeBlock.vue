<template>
  <div class="code-block-container">
    <div class="code-block-header">
      <span class="language">{{ language }}</span>
      <button @click="copyCode" class="copy-btn" :class="{ copied: copied }">
        {{ copied ? '已复制!' : '复制' }}
      </button>
    </div>
    <pre class="code-block"><code v-html="highlightedCode"></code></pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCodeHighlight } from '@/composables/useCodeHighlight';

interface Props {
  code: string;
  language?: string;
}

const props = withDefaults(defineProps<Props>(), {
  language: 'javascript'
});

const { highlightCode } = useCodeHighlight();
const highlightedCode = computed(() => highlightCode(props.code, props.language));

const copied = ref(false);

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('复制代码失败:', err);
  }
};
</script>

<style scoped>
.code-block-container {
  margin: var(--spacing-md) 0;
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: var(--transition);
  box-shadow: var(--box-shadow);
}

.code-block-container:hover {
  box-shadow: var(--box-shadow-hover);
}

.code-block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  transition: var(--transition);
}

.language {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.copy-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-xs);
  cursor: pointer;
  transition: var(--transition-fast);
  font-weight: 500;
}

.copy-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.copy-btn.copied {
  background: var(--success);
}

.code-block {
  background: #2d2d2d;
  color: #d4d4d4;
  padding: var(--spacing-md);
  margin: 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  white-space: pre;
  transition: var(--transition);
  border-radius: var(--border-radius-sm);
}

/* 确保代码高亮在两种主题下都清晰可见 */
:deep(.token.keyword) {
  color: #569cd6;
  font-weight: bold;
}

:deep(.token.string) {
  color: #ce9178;
}

:deep(.token.comment) {
  color: #6a9955;
  font-style: italic;
}

:deep(.token.tag) {
  color: #569cd6;
  font-weight: bold;
}

:deep(.token.attr-name) {
  color: #9cdcfe;
}

:deep(.token.attr-value) {
  color: #ce9178;
}

:deep(.token.boolean) {
  color: #569cd6;
  font-weight: bold;
}

:deep(.token.number) {
  color: #b5cea8;
}

:deep(.token.function) {
  color: #dcdcaa;
  font-weight: bold;
}

:deep(.token.operator) {
  color: #d4d4d4;
}

:deep(.token.property) {
  color: #9cdcfe;
}

:deep(.token.type) {
  color: #4ec9b0;
  font-weight: bold;
}

:deep(.token.interface) {
  color: #4ec9b0;
  font-weight: bold;
}

:deep(.token.directive) {
  color: #c586c0;
  font-weight: bold;
}

/* 暗色主题下的代码高亮调整 */
.dark :deep(.token.keyword) {
  color: #569cd6;
  font-weight: bold;
}

.dark :deep(.token.string) {
  color: #ce9178;
}

.dark :deep(.token.comment) {
  color: #6a9955;
  font-style: italic;
}

.dark :deep(.token.tag) {
  color: #569cd6;
  font-weight: bold;
}

.dark :deep(.token.attr-name) {
  color: #9cdcfe;
}

.dark :deep(.token.attr-value) {
  color: #ce9178;
}

.dark :deep(.token.boolean) {
  color: #569cd6;
  font-weight: bold;
}

.dark :deep(.token.number) {
  color: #b5cea8;
}

.dark :deep(.token.function) {
  color: #dcdcaa;
  font-weight: bold;
}

.dark :deep(.token.operator) {
  color: #d4d4d4;
}

.dark :deep(.token.property) {
  color: #9cdcfe;
}

.dark :deep(.token.type) {
  color: #4ec9b0;
  font-weight: bold;
}

.dark :deep(.token.interface) {
  color: #4ec9b0;
  font-weight: bold;
}

.dark :deep(.token.directive) {
  color: #c586c0;
  font-weight: bold;
}
</style>