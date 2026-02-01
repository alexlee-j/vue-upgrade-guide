<template>
  <div class="logic-flow-code-compare">
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
        <button 
          :class="['animation-btn', { active: showAnimation }]" 
          @click="toggleAnimation"
          :disabled="!activeVersion"
        >
          {{ showAnimation ? '停止动画' : '播放动画' }}
        </button>
      </div>
    </div>
    
    <div class="code-container">
      <div v-show="activeVersion === 'vue2'" class="code-block">
        <h4>Vue 2 语法 - Options API</h4>
        <div class="code-wrapper">
          <pre><code class="language-javascript" ref="vue2CodeRef">{{ vue2Code }}</code></pre>
          <svg 
            v-if="showAnimation && activeVersion === 'vue2'" 
            class="animation-overlay" 
            ref="vue2SvgRef"
            :viewBox="svgViewBox"
            preserveAspectRatio="none"
          >
            <!-- Vue2 逻辑流向动画 -->
            <g v-if="currentStep >= 1">
              <circle cx="100" cy="80" r="5" fill="#ff6b6b" class="animated-circle" />
              <text x="110" y="85" fill="#ff6b6b" font-size="12" font-family="monospace">data</text>
            </g>
            <g v-if="currentStep >= 2">
              <circle cx="100" cy="120" r="5" fill="#ff6b6b" class="animated-circle" />
              <text x="110" y="125" fill="#ff6b6b" font-size="12" font-family="monospace">computed</text>
            </g>
            <g v-if="currentStep >= 3">
              <circle cx="100" cy="160" r="5" fill="#ff6b6b" class="animated-circle" />
              <text x="110" y="165" fill="#ff6b6b" font-size="12" font-family="monospace">methods</text>
            </g>
            <g v-if="currentStep >= 4">
              <line x1="100" y1="80" x2="100" y2="160" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="5,5" class="animated-line" />
              <text x="120" y="110" fill="#ff6b6b" font-size="12" font-family="monospace">逻辑碎片化</text>
            </g>
          </svg>
        </div>
      </div>
      
      <div v-show="activeVersion === 'vue3'" class="code-block">
        <h4>Vue 3 语法 - Composition API</h4>
        <div class="code-wrapper">
          <pre><code class="language-javascript" ref="vue3CodeRef">{{ vue3Code }}</code></pre>
          <svg 
            v-if="showAnimation && activeVersion === 'vue3'" 
            class="animation-overlay" 
            ref="vue3SvgRef"
            :viewBox="svgViewBox"
            preserveAspectRatio="none"
          >
            <!-- Vue3 逻辑流向动画 -->
            <g v-if="currentStep >= 1">
              <circle cx="100" cy="100" r="5" fill="#4ecdc4" class="animated-circle" />
              <text x="110" y="105" fill="#4ecdc4" font-size="12" font-family="monospace">ref</text>
            </g>
            <g v-if="currentStep >= 2">
              <circle cx="100" cy="120" r="5" fill="#4ecdc4" class="animated-circle" />
              <text x="110" y="125" fill="#4ecdc4" font-size="12" font-family="monospace">computed</text>
            </g>
            <g v-if="currentStep >= 3">
              <circle cx="100" cy="140" r="5" fill="#4ecdc4" class="animated-circle" />
              <text x="110" y="145" fill="#4ecdc4" font-size="12" font-family="monospace">function</text>
            </g>
            <g v-if="currentStep >= 4">
              <line x1="100" y1="100" x2="100" y2="140" stroke="#4ecdc4" stroke-width="2" class="animated-line" />
              <text x="120" y="130" fill="#4ecdc4" font-size="12" font-family="monospace">逻辑聚合</text>
            </g>
          </svg>
        </div>
      </div>
      
      <div v-if="showBoth" class="side-by-side">
        <div class="vue2-column">
          <h4>Vue 2 - Options API</h4>
          <pre><code class="language-javascript">{{ vue2Code }}</code></pre>
        </div>
        <div class="vue3-column">
          <h4>Vue 3 - Composition API</h4>
          <pre><code class="language-javascript">{{ vue3Code }}</code></pre>
        </div>
      </div>
    </div>
    
    <div class="animation-controls" v-if="showAnimation">
      <div class="step-indicator">
        <span>步骤: {{ currentStep }}/4</span>
        <div class="step-bar">
          <div 
            v-for="n in 4" 
            :key="n" 
            :class="['step-dot', { active: n <= currentStep }]"
            @click="currentStep = n"
          ></div>
        </div>
      </div>
      <div class="animation-explanation">
        <p v-if="activeVersion === 'vue2' && currentStep === 1">
          <strong>Vue 2:</strong> 数据定义在 data 选项中（分散管理）
        </p>
        <p v-if="activeVersion === 'vue2' && currentStep === 2">
          <strong>Vue 2:</strong> 计算属性在 computed 选项中（继续分散）
        </p>
        <p v-if="activeVersion === 'vue2' && currentStep === 3">
          <strong>Vue 2:</strong> 方法在 methods 选项中（进一步分散）
        </p>
        <p v-if="activeVersion === 'vue2' && currentStep >= 4">
          <strong>Vue 2:</strong> 同一业务逻辑被垂直切分到不同选项中，导致逻辑碎片化
        </p>
        
        <p v-if="activeVersion === 'vue3' && currentStep === 1">
          <strong>Vue 3:</strong> 相关逻辑聚集在 setup 函数中（水平聚合）
        </p>
        <p v-if="activeVersion === 'vue3' && currentStep === 2">
          <strong>Vue 3:</strong> 计算属性与相关数据定义在一起
        </p>
        <p v-if="activeVersion === 'vue3' && currentStep === 3">
          <strong>Vue 3:</strong> 方法与相关数据和计算属性定义在一起
        </p>
        <p v-if="activeVersion === 'vue3' && currentStep >= 4">
          <strong>Vue 3:</strong> 相关逻辑水平聚在一起，便于理解和维护
        </p>
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
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useCodeHighlight } from '@/composables/useCodeHighlight';

interface Props {
  title: string;
  vue2Code: string;
  vue3Code: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['copied']);

const { highlightCode } = useCodeHighlight();

const activeVersion = ref<'vue2' | 'vue3' | null>(null);
const showBoth = ref(false);
const showAnimation = ref(false);
const currentStep = ref(0);
const animationInterval = ref<number | null>(null);

const vue2CodeRef = ref<HTMLElement | null>(null);
const vue3CodeRef = ref<HTMLElement | null>(null);
const vue2SvgRef = ref<SVGSVGElement | null>(null);
const vue3SvgRef = ref<SVGSVGElement | null>(null);

const svgViewBox = computed(() => "0 0 300 300");

const toggleSideBySide = () => {
  showBoth.value = !showBoth.value;
};

const toggleAnimation = () => {
  if (!activeVersion.value) {
    activeVersion.value = 'vue3'; // 默认选择 Vue 3
  }
  
  if (!showAnimation.value) {
    showAnimation.value = true;
    currentStep.value = 0;
    
    // 开始动画序列
    animationInterval.value = window.setInterval(() => {
      if (currentStep.value < 4) {
        currentStep.value++;
      } else {
        if (animationInterval.value) {
          clearInterval(animationInterval.value);
          animationInterval.value = null;
        }
      }
    }, 2000);
  } else {
    showAnimation.value = false;
    currentStep.value = 0;
    if (animationInterval.value) {
      clearInterval(animationInterval.value);
      animationInterval.value = null;
    }
  }
};

const copyCode = async () => {
  const codeToCopy = activeVersion.value === 'vue2' ? props.vue2Code : props.vue3Code;
  try {
    await navigator.clipboard.writeText(codeToCopy);
    emit('copied', '代码已复制到剪贴板');
  } catch (err) {
    console.error('复制代码失败:', err);
    emit('copied', '复制失败');
  }
};

onUnmounted(() => {
  if (animationInterval.value) {
    clearInterval(animationInterval.value);
  }
});
</script>

<style scoped>
.logic-flow-code-compare {
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

.toggle-btn, .animation-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.toggle-btn.active, .animation-btn.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.animation-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.code-container {
  position: relative;
  padding: 1rem;
}

.code-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.code-block pre {
  margin: 0;
  padding: 1rem;
  background-color: var(--color-code-bg);
  border-radius: 4px;
  overflow-x: auto;
  position: relative;
  z-index: 1;
}

.animation-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  pointer-events: none;
  z-index: 2;
}

.animated-circle {
  animation: pulse 1.5s infinite;
}

.animated-line {
  animation: drawLine 1s ease-in-out forwards;
}

@keyframes pulse {
  0% { r: 5; opacity: 1; }
  50% { r: 7; opacity: 0.7; }
  100% { r: 5; opacity: 1; }
}

@keyframes drawLine {
  from { stroke-dasharray: 0, 100; }
  to { stroke-dasharray: 100, 0; }
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

.animation-controls {
  padding: 1rem;
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
}

.step-indicator {
  margin-bottom: 1rem;
}

.step-indicator span {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
}

.step-bar {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.step-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--color-border);
  cursor: pointer;
  transition: background-color 0.2s;
}

.step-dot.active {
  background-color: var(--color-primary);
}

.animation-explanation {
  padding: 1rem;
  background-color: var(--color-bg);
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

.animation-explanation p {
  margin: 0.5rem 0;
  line-height: 1.5;
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