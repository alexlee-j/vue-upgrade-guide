<template>
  <div class="code-block-container">
    <div class="code-block-header">
      <span class="language">{{ language }}</span>
      <button @click="copyCode" class="copy-btn" :class="{ copied: copied }">
        <span class="copy-icon">📋</span>
        <span class="copy-text">{{ copied ? '已复制!' : '复制' }}</span>
      </button>
    </div>
    <div class="code-content">
      <div class="line-numbers" v-if="showLineNumbers">
        <span v-for="i in lineCount" :key="i" class="line-number">{{ i }}</span>
      </div>
      <pre class="code-block" :class="{ 'with-line-numbers': showLineNumbers }"><code v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCodeHighlight } from '@/composables/useCodeHighlight';

interface Props {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  language: 'javascript',
  showLineNumbers: true
});

const { highlightCode } = useCodeHighlight();
const highlightedCode = computed(() => highlightCode(props.code, props.language));
const lineCount = computed(() => props.code.split('\n').length);

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
  border-radius: var(--border-radius-sm) var(--border-radius-sm) 0 0;
}

.language {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
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
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.copy-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--box-shadow);
}

.copy-btn.copied {
  background: var(--success);
}

.copy-icon {
  font-size: var(--font-size-sm);
}

.copy-text {
  transition: var(--transition);
}

.code-content {
  display: flex;
  overflow: hidden;
  border-radius: 0 0 var(--border-radius-sm) var(--border-radius-sm);
}

.line-numbers {
  background: #1e1e1e;
  padding: var(--spacing-md) var(--spacing-xs);
  text-align: right;
  user-select: none;
  border-right: 1px solid var(--color-border);
}

.line-number {
  display: block;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-normal);
  color: var(--gray-500);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  transition: var(--transition);
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
  flex: 1;
}

.code-block.with-line-numbers {
  border-radius: 0 0 var(--border-radius-sm) 0;
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