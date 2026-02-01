<template>
  <div class="reactivity-page">
    <h1>🔄 响应性系统</h1>
    <p class="page-description">
      深入了解 Vue 3 的响应性系统，掌握其工作原理和使用方法
    </p>
    
    <section class="section-card">
      <h2>Vue 3 响应性系统概述</h2>
      <p>Vue 3 引入了基于 Proxy 的全新响应性系统，相比 Vue 2 的 Object.defineProperty 实现，提供了更好的性能和更完整的响应式能力。</p>
      <ul>
        <li><strong>基于 Proxy：</strong>使用 ES6 Proxy 实现，能够拦截更多的对象操作</li>
        <li><strong>自动追踪：</strong>智能追踪响应式数据的依赖关系</li>
        <li><strong>精确更新：</strong>只更新受影响的组件，提高性能</li>
        <li><strong>支持更多类型：</strong>可以监听 Map、Set、WeakMap、WeakSet 等集合类型</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>与 Vue 2 响应性系统的对比</h2>
      <div class="comparison-grid">
        <div class="comparison-item">
          <h3>Vue 2 响应性系统</h3>
          <ul>
            <li>基于 Object.defineProperty 实现</li>
            <li>只能监听对象的属性访问和修改</li>
            <li>无法检测对象属性的添加和删除</li>
            <li>无法检测数组索引和长度的变化</li>
            <li>需要使用 Vue.set 或 this.$set 手动触发响应</li>
            <li>对嵌套对象的响应式处理需要递归遍历</li>
          </ul>
        </div>
        <div class="comparison-item">
          <h3>Vue 3 响应性系统</h3>
          <ul>
            <li>基于 ES6 Proxy 实现</li>
            <li>可以拦截更多的对象操作（get、set、deleteProperty 等）</li>
            <li>能够检测对象属性的添加和删除</li>
            <li>能够检测数组索引和长度的变化</li>
            <li>不需要手动触发响应，自动处理</li>
            <li>对嵌套对象的响应式处理是惰性的，提高性能</li>
            <li>支持更多的集合类型</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>核心响应性 API</h2>
      <div class="api-grid">
        <div class="api-item">
          <h3>ref()</h3>
          <p>创建一个响应式的 ref 对象，用于基本类型数据</p>
          <div class="code-example">
            <pre><code>import { ref } from 'vue'

// 创建 ref
const count = ref(0)

// 访问值
console.log(count.value) // 0

// 修改值
count.value++
console.log(count.value) // 1

// 在模板中使用（不需要 .value）
// {{ count }}</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>reactive()</h3>
          <p>创建一个响应式的代理对象，用于复杂类型数据</p>
          <div class="code-example">
            <pre><code>import { reactive } from 'vue'

// 创建响应式对象
const state = reactive({
  name: 'Vue 3',
  version: '3.4.0',
  features: ['Composition API', 'Proxy-based reactivity']
})

// 直接访问和修改属性
console.log(state.name) // Vue 3
state.version = '3.4.1'

// 添加新属性（Vue 3 支持）
state.author = 'Evan You'

// 删除属性（Vue 3 支持）
delete state.features</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>computed()</h3>
          <p>创建一个响应式的计算属性，具有缓存机制</p>
          <div class="code-example">
            <pre><code>import { ref, computed } from 'vue'

const count = ref(0)

// 创建计算属性
const doubleCount = computed(() => {
  console.log('Computing doubleCount')
  return count.value * 2
})

// 首次访问会计算
console.log(doubleCount.value) // 0

// 修改依赖
count.value++

// 再次访问会使用缓存
console.log(doubleCount.value) // 2

// 依赖变化时会重新计算
count.value++
console.log(doubleCount.value) // 4</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>watch()</h3>
          <p>监听响应式数据的变化，执行副作用</p>
          <div class="code-example">
            <pre><code>import { ref, watch } from 'vue'

const count = ref(0)

// 监听单个 ref
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})

// 监听多个源
const message = ref('Hello')
watch([count, message], ([newCount, newMessage], [oldCount, oldMessage]) => {
  console.log('Count or message changed')
})

// 监听对象属性
const state = reactive({ name: 'Vue' })
watch(() => state.name, (newName, oldName) => {
  console.log(`Name changed from ${oldName} to ${newName}`)
})</code></pre>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>高级响应性 API</h2>
      <div class="api-grid">
        <div class="api-item">
          <h3>shallowRef() / shallowReactive()</h3>
          <p>创建浅层响应式对象，只响应顶层属性的变化</p>
          <div class="code-example">
            <pre><code>import { shallowRef, shallowReactive } from 'vue'

// 浅层 ref
const shallowCount = shallowRef({ value: 0 })
// 修改嵌套属性不会触发更新
shallowCount.value.value++

// 浅层 reactive
const shallowState = shallowReactive({ 
  user: { name: 'John' } 
})
// 修改嵌套属性不会触发更新
shallowState.user.name = 'Jane'</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>triggerRef() / effectScope()</h3>
          <p>手动触发响应和管理副作用作用域</p>
          <div class="code-example">
            <pre><code>import { shallowRef, triggerRef, effectScope } from 'vue'

// 手动触发响应
const shallowCount = shallowRef({ value: 0 })
shallowCount.value.value++
triggerRef(shallowCount) // 手动触发更新

// 管理副作用作用域
const scope = effectScope()
scope.run(() => {
  // 响应式副作用
  watch(count, () => {
    console.log('Count changed')
  })
})

// 销毁作用域内的所有副作用
scope.stop()</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>toRef() / toRefs()</h3>
          <p>将响应式对象的属性转换为 ref，保持响应性</p>
          <div class="code-example">
            <pre><code>import { reactive, toRef, toRefs } from 'vue'

const state = reactive({ 
  name: 'Vue', 
  version: '3.4.0' 
})

// 单个属性转换为 ref
const nameRef = toRef(state, 'name')

// 所有属性转换为 ref
const stateRefs = toRefs(state)
console.log(stateRefs.name.value) // Vue
console.log(stateRefs.version.value) // 3.4.0</code></pre>
          </div>
        </div>
        <div class="api-item">
          <h3>customRef()</h3>
          <p>创建自定义的 ref，控制依赖追踪和触发更新的时机</p>
          <div class="code-example">
            <pre><code>import { customRef } from 'vue'

// 创建带防抖的 ref
function useDebouncedRef(value, delay = 300) {
  let timeout
  return customRef((track, trigger) => ({
    get() {
      track() // 追踪依赖
      return value
    },
    set(newValue) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        value = newValue
        trigger() // 触发更新
      }, delay)
    }
  }))
}

// 使用
const searchQuery = useDebouncedRef('')</code></pre>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>最佳实践</h2>
      <ul>
        <li><strong>选择合适的响应式 API：</strong>根据数据类型和使用场景选择 ref 或 reactive</li>
        <li><strong>避免深度嵌套：</strong>深度嵌套的响应式对象会影响性能，考虑扁平化数据结构</li>
        <li><strong>合理使用计算属性：</strong>对于复杂的派生状态，使用计算属性缓存结果</li>
        <li><strong>谨慎使用 watch：</strong>过多的 watch 可能导致性能问题，优先考虑计算属性</li>
        <li><strong>使用 shallow API 优化性能：</strong>对于大型对象，考虑使用 shallowRef 或 shallowReactive</li>
        <li><strong>避免在模板中进行复杂计算：</strong>将复杂计算移到计算属性中</li>
        <li><strong>正确处理响应式数据的传递：</strong>使用 toRef 或 toRefs 保持响应性</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>常见问题和解决方案</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>❓ 响应性丢失</h3>
          <p><strong>问题：</strong>解构 reactive 对象后丢失响应性</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>使用 toRefs 将对象属性转换为 ref</li>
            <li>直接使用 reactive 对象，不进行解构</li>
            <li>使用 ref 替代 reactive</li>
          </ul>
        </div>
        <div class="faq-item">
          <h3>❓ 异步操作中的响应性</h3>
          <p><strong>问题：</strong>在异步操作中修改响应式数据不触发更新</p>
          <p><strong>解决方案：</strong>Vue 3 的响应性系统能够自动处理异步操作，确保在正确的时机触发更新</p>
        </div>
        <div class="faq-item">
          <h3>❓ 性能优化</h3>
          <p><strong>问题：</strong>大型应用中响应性系统导致性能问题</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>使用 shallowRef 和 shallowReactive</li>
            <li>合理使用 computed 缓存计算结果</li>
            <li>避免不必要的响应式数据</li>
            <li>使用 effectScope 管理副作用</li>
          </ul>
        </div>
        <div class="faq-item">
          <h3>❓ 调试响应性问题</h3>
          <p><strong>问题：</strong>无法确定响应式数据何时更新</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>使用 Vue DevTools 观察响应式数据</li>
            <li>添加 watch 临时监控数据变化</li>
            <li>检查依赖关系是否正确建立</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Reactivity page component
</script>

<style scoped>
.reactivity-page {
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

.comparison-grid,
.api-grid,
.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.comparison-item,
.api-item,
.faq-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
}

.comparison-item h3,
.api-item h3,
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

.code-example pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
}
</style>
