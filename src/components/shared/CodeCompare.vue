<template>
  <div class="code-compare">
    <div class="comparison-header">
      <h3>{{ title }}</h3>
      <div class="version-toggle">
        <button 
          :class="['toggle-btn', { active: activeVersion === 'vue2' }]" 
          @click="activeVersion = 'vue2'"
        >
          Vue 2
        </button>
        <button 
          :class="['toggle-btn', { active: activeVersion === 'vue3' }]" 
          @click="activeVersion = 'vue3'"
        >
          Vue 3
        </button>
      </div>
    </div>
    
    <div class="code-container">
      <div v-show="activeVersion === 'vue2'" class="code-block-wrapper">
        <div class="code-block-header">
          <h4>Vue 2 语法</h4>
          <button @click="copyCode('vue2')" class="copy-btn" :class="{ copied: copiedVersion === 'vue2' }">
            <span class="copy-icon">📋</span>
            <span class="copy-text">{{ copiedVersion === 'vue2' ? '已复制!' : '复制' }}</span>
          </button>
        </div>
        <div class="code-content">
          <div class="line-numbers">
            <span v-for="i in vue2LineCount" :key="i" class="line-number">{{ i }}</span>
          </div>
          <pre class="code-block with-line-numbers"><code v-html="highlightedVue2Code"></code></pre>
        </div>
      </div>
      
      <div v-show="activeVersion === 'vue3'" class="code-block-wrapper">
        <div class="code-block-header">
          <h4>Vue 3 语法</h4>
          <button @click="copyCode('vue3')" class="copy-btn" :class="{ copied: copiedVersion === 'vue3' }">
            <span class="copy-icon">📋</span>
            <span class="copy-text">{{ copiedVersion === 'vue3' ? '已复制!' : '复制' }}</span>
          </button>
        </div>
        <div class="code-content">
          <div class="line-numbers">
            <span v-for="i in vue3LineCount" :key="i" class="line-number">{{ i }}</span>
          </div>
          <pre class="code-block with-line-numbers"><code v-html="highlightedVue3Code"></code></pre>
        </div>
      </div>
      
      <div v-if="showBoth" class="side-by-side">
        <div class="vue2-column">
          <div class="code-block-header">
            <h4>Vue 2</h4>
            <button @click="copyCode('vue2')" class="copy-btn" :class="{ copied: copiedVersion === 'vue2' }">
              <span class="copy-icon">📋</span>
              <span class="copy-text">{{ copiedVersion === 'vue2' ? '已复制!' : '复制' }}</span>
            </button>
          </div>
          <div class="code-content">
            <div class="line-numbers">
              <span v-for="i in vue2LineCount" :key="i" class="line-number">{{ i }}</span>
            </div>
            <pre class="code-block with-line-numbers"><code v-html="highlightedVue2Code"></code></pre>
          </div>
        </div>
        <div class="vue3-column">
          <div class="code-block-header">
            <h4>Vue 3</h4>
            <button @click="copyCode('vue3')" class="copy-btn" :class="{ copied: copiedVersion === 'vue3' }">
              <span class="copy-icon">📋</span>
              <span class="copy-text">{{ copiedVersion === 'vue3' ? '已复制!' : '复制' }}</span>
            </button>
          </div>
          <div class="code-content">
            <div class="line-numbers">
              <span v-for="i in vue3LineCount" :key="i" class="line-number">{{ i }}</span>
            </div>
            <pre class="code-block with-line-numbers"><code v-html="highlightedVue3Code"></code></pre>
          </div>
        </div>
      </div>
    </div>
    
    <div class="comparison-actions">
      <button @click="toggleSideBySide" class="action-btn">
        {{ showBoth ? '单个显示' : '并排比较' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCodeHighlight } from '@/composables/useCodeHighlight';

interface Props {
  title: string;
  vue2Code: string;
  vue3Code: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['copied']);

const activeVersion = ref<'vue2' | 'vue3'>('vue3');
const showBoth = ref(false);
const copiedVersion = ref<'vue2' | 'vue3' | null>(null);

const { highlightCode } = useCodeHighlight();

const highlightedVue2Code = computed(() => highlightCode(props.vue2Code, 'javascript'));
const highlightedVue3Code = computed(() => highlightCode(props.vue3Code, 'javascript'));

const vue2LineCount = computed(() => props.vue2Code.split('\n').length);
const vue3LineCount = computed(() => props.vue3Code.split('\n').length);

const toggleSideBySide = () => {
  showBoth.value = !showBoth.value;
};

const copyCode = async (version: 'vue2' | 'vue3') => {
  const codeToCopy = version === 'vue2' ? props.vue2Code : props.vue3Code;
  try {
    await navigator.clipboard.writeText(codeToCopy);
    copiedVersion.value = version;
    emit('copied', `Vue ${version === 'vue2' ? '2' : '3'} 代码已复制到剪贴板`);
    setTimeout(() => {
      copiedVersion.value = null;
    }, 2000);
  } catch (err) {
    console.error('复制代码失败:', err);
    emit('copied', '复制失败');
  }
};
</script>

<style scoped>
.code-compare {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  overflow: hidden;
  margin: var(--spacing-md) 0;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.code-compare:hover {
  box-shadow: var(--box-shadow-hover);
}

.comparison-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  transition: var(--transition);
}

.comparison-header h3 {
  margin: 0;
  color: var(--color-text);
  font-size: var(--font-size-lg);
}

.version-toggle {
  display: flex;
  gap: var(--spacing-sm);
}

.toggle-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: var(--transition);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.toggle-btn:hover {
  background-color: var(--color-hover);
  transform: translateY(-1px);
}

.toggle-btn.active {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}

.code-container {
  position: relative;
  padding: var(--spacing-md);
  background-color: var(--color-bg);
  transition: var(--transition);
}

.code-block-wrapper {
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.code-block-wrapper:hover {
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

.code-block-header h4 {
  margin: 0;
  font-size: var(--font-size-md);
  font-weight: 600;
}

.vue2-column .code-block-header h4 {
  color: #e53e3e; /* Red for Vue 2 */
}

.vue3-column .code-block-header h4 {
  color: #42b883; /* Green for Vue 3 */
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

.side-by-side {
  display: flex;
  gap: var(--spacing-md);
}

.vue2-column, .vue3-column {
  flex: 1;
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.vue2-column:hover, .vue3-column:hover {
  box-shadow: var(--box-shadow-hover);
}

.side-by-side .code-block {
  height: 300px;
  overflow-y: auto;
}

.comparison-actions {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  transition: var(--transition);
}

.action-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.action-btn:hover {
  background-color: var(--color-hover);
  transform: translateY(-1px);
  box-shadow: var(--box-shadow);
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

/* 响应式调整 */
@media (max-width: 768px) {
  .side-by-side {
    flex-direction: column;
  }
  
  .vue2-column, .vue3-column {
    margin-bottom: var(--spacing-md);
  }
  
  .side-by-side .code-block {
    height: 200px;
  }
  
  .comparison-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
  
  .version-toggle {
    width: 100%;
    justify-content: space-between;
  }
  
  .toggle-btn {
    flex: 1;
    text-align: center;
  }
}
</style>