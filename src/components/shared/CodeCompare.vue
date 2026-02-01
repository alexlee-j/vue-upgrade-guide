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
      <div v-show="activeVersion === 'vue2'" class="code-block">
        <h4>Vue 2 语法</h4>
        <pre><code class="language-javascript">{{ vue2Code }}</code></pre>
      </div>
      
      <div v-show="activeVersion === 'vue3'" class="code-block">
        <h4>Vue 3 语法</h4>
        <pre><code class="language-javascript">{{ vue3Code }}</code></pre>
      </div>
      
      <div v-if="showBoth" class="side-by-side">
        <div class="vue2-column">
          <h4>Vue 2</h4>
          <pre><code class="language-javascript">{{ vue2Code }}</code></pre>
        </div>
        <div class="vue3-column">
          <h4>Vue 3</h4>
          <pre><code class="language-javascript">{{ vue3Code }}</code></pre>
        </div>
      </div>
    </div>
    
    <div class="comparison-actions">
      <button @click="toggleSideBySide" class="action-btn">
        {{ showBoth ? '单个显示' : '并排比较' }}
      </button>
      <button @click="copyCode" class="action-btn">
        复制代码
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

const { highlightCode } = useCodeHighlight();

const toggleSideBySide = () => {
  showBoth.value = !showBoth.value;
};

const copyCode = async () => {
  const codeToCopy = activeVersion.value === 'vue2' ? props.vue2tCode : props.vue3Code;
  try {
    await navigator.clipboard.writeText(codeToCopy);
    emit('copied', '代码已复制到剪贴板');
  } catch (err) {
    console.error('复制代码失败:', err);
    emit('copied', '复制失败');
  }
};
</script>

<style scoped>
.code-compare {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
}

.comparison-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.comparison-header h3 {
  margin: 0;
  color: var(--color-text);
}

.version-toggle {
  display: flex;
  gap: 0.5rem;
}

.toggle-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.toggle-btn.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.code-container {
  position: relative;
  padding: 1rem;
}

.code-block pre {
  margin: 0;
  padding: 1rem;
  background-color: var(--color-code-bg);
  border-radius: 4px;
  overflow-x: auto;
}

.side-by-side {
  display: flex;
  gap: 1rem;
}

.vue2-column, .vue3-column {
  flex: 1;
}

.vue2-column h4 {
  color: #e53e3e; /* Red for Vue 2 */
}

.vue3-column h4 {
  color: #42b883; /* Green for Vue 3 */
}

.side-by-side pre {
  margin: 0.5rem 0 0 0;
  height: 300px;
  overflow-y: auto;
}

.comparison-actions {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.action-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: var(--color-hover);
}
</style>