<template>
  <div class="composition-api-page">
    <h1>🧩 组合式 API</h1>
    <p class="page-description">
      深入了解 Vue 3 的组合式 API，掌握其核心概念和使用方法
    </p>
    
    <section class="section-card">
      <h2>什么是组合式 API</h2>
      <p>组合式 API（Composition API）是 Vue 3 引入的一种新的代码组织方式，允许开发者按功能组织代码，而不是按选项类型。</p>
      <ul>
        <li><strong>设计动机：</strong>解决大型组件的代码组织问题，提高逻辑复用能力</li>
        <li><strong>核心思想：</strong>基于函数的 API，将相关逻辑组织在一起</li>
        <li><strong>主要优势：</strong>更好的类型推断、更灵活的逻辑复用、更清晰的代码组织</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>核心 API</h2>
      <div class="api-grid">
        <div class="api-item">
          <h3>setup()</h3>
          <p>组件的入口点，在创建组件实例时执行</p>
          <div class="code-example">
            <pre><code>export default {
  setup() {
    // 组件逻辑
    return {
      // 暴露给模板的变量和方法
    }
  }
}</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>ref()</h3>
          <p>创建响应式的 ref 对象，用于基本类型数据</p>
          <div class="code-example">
            <pre><code>import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>reactive()</h3>
          <p>创建响应式的对象，用于复杂类型数据</p>
          <div class="code-example">
            <pre><code>import { reactive } from 'vue'

const state = reactive({
  name: 'Vue 3',
  version: '3.4.0'
})
console.log(state.name) // Vue 3</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>computed()</h3>
          <p>创建计算属性，具有缓存机制</p>
          <div class="code-example">
            <pre><code>import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>watch()</h3>
          <p>监听响应式数据的变化</p>
          <div class="code-example">
            <pre><code>import { ref, watch } from 'vue'

const count = ref(0)
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>生命周期钩子</h3>
          <p>组合式 API 风格的生命周期钩子</p>
          <div class="code-example">
            <pre><code>import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUnmounted(() => {
  console.log('Component unmounted')
})</code></pre>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>与选项 API 的对比</h2>
      <div class="comparison-grid">
        <div class="comparison-item">
          <h3>选项 API</h3>
          <ul>
            <li>按选项类型组织代码（data、methods、computed 等）</li>
            <li>使用 mixins 进行逻辑复用，可能导致命名冲突</li>
            <li>TypeScript 支持有限</li>
            <li>大型组件的逻辑分散，难以维护</li>
          </ul>
        </div>
        <div class="comparison-item">
          <h3>组合式 API</h3>
          <ul>
            <li>按功能组织代码，相关逻辑集中在一起</li>
            <li>使用 Composables 进行逻辑复用，避免命名冲突</li>
            <li>更好的 TypeScript 支持</li>
            <li>大型组件的逻辑清晰，易于维护</li>
            <li>更灵活的代码组织方式</li>
          </ul>
        </div>
      </div>
      <div class="code-example">
        <h4>代码组织对比：</h4>
        <pre><code>// 选项 API
export default {
  data() {
    return {
      count: 0,
      message: 'Hello'
    }
  },
  methods: {
    increment() {
      this.count++
    },
    updateMessage() {
      this.message = 'Updated'
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  }
}

// 组合式 API
import { ref, computed } from 'vue'

export default {
  setup() {
    // 计数逻辑
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => count.value++
    
    // 消息逻辑
    const message = ref('Hello')
    const updateMessage = () => message.value = 'Updated'
    
    return {
      count,
      doubleCount,
      increment,
      message,
      updateMessage
    }
  }
}</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>逻辑复用 - Composables</h2>
      <p>组合式 API 的一个重要优势是能够创建可复用的逻辑模块，称为 Composables。</p>
      <div class="code-example">
        <h4>创建和使用 Composable：</h4>
        <pre><code>// composables/useCounter.ts
import { ref, computed, watch } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  watch(count, (newValue) => {
    console.log('Count changed:', newValue)
  })
  
  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset
  }
}

// 在组件中使用
import { useCounter } from '@/composables/useCounter'

export default {
  setup() {
    const { count, doubleCount, increment } = useCounter(0)
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>最佳实践</h2>
      <ul>
        <li><strong>按功能组织代码：</strong>将相关逻辑集中在一起，提高可读性</li>
        <li><strong>合理使用 Composables：</strong>将可复用逻辑提取为 Composables</li>
        <li><strong>使用 TypeScript：</strong>充分利用组合式 API 的类型推断优势</li>
        <li><strong>注意响应性：</strong>理解 ref 和 reactive 的区别，正确使用</li>
        <li><strong>避免过度嵌套：</strong>保持 setup 函数的简洁性</li>
        <li><strong>使用 provide/inject：</strong>在组件树中共享状态</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>常见问题和解决方案</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>❓ 忘记使用 .value</h3>
          <p><strong>问题：</strong>在 setup 函数中直接使用 ref 值，忘记添加 .value</p>
          <p><strong>解决方案：</strong>记住在 setup 函数中操作 ref 时需要使用 .value，在模板中则不需要</p>
        </div>
        <div class="faq-item">
          <h3>❓ this 上下文</h3>
          <p><strong>问题：</strong>在组合式 API 中找不到 this</p>
          <p><strong>解决方案：</strong>组合式 API 中没有 this，使用 setup 函数返回的变量和方法</p>
        </div>
        <div class="faq-item">
          <h3>❓ 响应性丢失</h3>
          <p><strong>问题：</strong>解构 reactive 对象后丢失响应性</p>
          <p><strong>解决方案：</strong>使用 toRefs 或 toRef 保持响应性，或直接使用 ref</p>
        </div>
        <div class="faq-item">
          <h3>❓ 生命周期钩子</h3>
          <p><strong>问题：</strong>不知道如何在组合式 API 中使用生命周期钩子</p>
          <p><strong>解决方案：</strong>从 vue 导入对应的 onXXX 钩子函数并在 setup 中使用</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Composition API page component
</script>

<style scoped>
.composition-api-page {
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.page-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: center;
}

.section-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.section-card h2 {
  margin-top: 0;
  color: var(--color-text);
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.section-card ul {
  padding-left: 1.5rem;
}

.section-card li {
  margin-bottom: 0.5rem;
}

.api-grid,
.comparison-grid,
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.api-item,
.comparison-item,
.faq-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
}

.api-item h3,
.comparison-item h3,
.faq-item h3 {
  margin-top: 0;
  color: var(--color-text);
}

.code-example {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;
  overflow-x: auto;
}

.code-example h4 {
  margin-top: 0;
  color: var(--color-text);
}

.code-example pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
}
</style>
