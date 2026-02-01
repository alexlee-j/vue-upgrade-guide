<template>
  <div class="typescript-page">
    <h1>🟦 TypeScript 集成</h1>
    <p class="page-description">
      深入了解 Vue 3 与 TypeScript 的集成方法和最佳实践
    </p>
    
    <section class="section-card">
      <h2>TypeScript 与 Vue 3 集成概述</h2>
      <p>Vue 3 提供了原生的 TypeScript 支持，相比 Vue 2，TypeScript 集成更加完善和流畅。</p>
      <ul>
        <li><strong>原生支持：</strong>Vue 3 源码使用 TypeScript 编写，提供了完善的类型定义</li>
        <li><strong>更好的类型推断：</strong>组合式 API 提供了更好的 TypeScript 类型推断</li>
        <li><strong>类型安全：</strong>通过 TypeScript 可以在编译时捕获更多错误</li>
        <li><strong>开发体验：</strong>更好的 IDE 支持和代码提示</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>项目配置</h2>
      <p>配置 TypeScript 项目，确保正确的类型检查和编译选项。</p>
      <div class="code-example">
        <h4>tsconfig.json 配置示例：</h4>
        <pre><code>{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}</code></pre>
      </div>
      <div class="code-example">
        <h4>tsconfig.node.json 配置示例：</h4>
        <pre><code>{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}</code></pre>
      </div>
      <div class="code-example">
        <h4>vite.config.ts 配置示例：</h4>
        <pre><code>import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>组件的类型定义</h2>
      <p>使用 TypeScript 为 Vue 组件添加类型定义，提高代码的类型安全性。</p>
      <div class="code-example">
        <h4>使用 defineComponent 定义组件：</h4>
        <pre><code>import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    
    const increment = () => {
      count.value++
    }
    
    return {
      count,
      doubleCount,
      increment
    }
  }
})</code></pre>
      </div>
      <div class="code-example">
        <h4>使用 &lt;script setup&gt; 语法：</h4>
        <pre><code>&lt;script setup lang="ts"&gt;
import { ref, computed } from 'vue'

interface Props {
  msg: string
  count?: number
}

const props = defineProps&lt;Props&gt;()

const emit = defineEmits&lt;{
  (e: 'update:count', value: number): void
  (e: 'reset'): void
}&gt;()

const localCount = ref(props.count || 0)
const doubleCount = computed(() => localCount.value * 2)

const increment = () => {
  localCount.value++
  emit('update:count', localCount.value)
}

const reset = () => {
  localCount.value = 0
  emit('reset')
}
&lt;/script&gt;</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>响应式数据的类型定义</h2>
      <p>为响应式数据添加类型定义，确保类型安全。</p>
      <div class="code-example">
        <h4>ref 的类型定义：</h4>
        <pre><code>import { ref } from 'vue'

// 基本类型
const count = ref&lt;number&gt;(0)
const message = ref&lt;string&gt;('Hello')
const isLoading = ref&lt;boolean&gt;(false)

// 复杂类型
interface User {
  id: number
  name: string
  email: string
}

const user = ref&lt;User | null&gt;(null)
const users = ref&lt;User[]&gt;([])

// 泛型
const genericRef = ref&lt;T&gt;(initialValue)</code></pre>
      </div>
      <div class="code-example">
        <h4>reactive 的类型定义：</h4>
        <pre><code>import { reactive } from 'vue'

interface State {
  user: {
    id: number
    name: string
  }
  settings: {
    theme: 'light' | 'dark'
    notifications: boolean
  }
}

const state = reactive&lt;State&gt;({
  user: {
    id: 1,
    name: 'John'
  },
  settings: {
    theme: 'light',
    notifications: true
  }
})

// 或者使用类型断言
const state = reactive({
  user: {
    id: 1,
    name: 'John'
  },
  settings: {
    theme: 'light',
    notifications: true
  }
}) as State</code></pre>
      </div>
      <div class="code-example">
        <h4>computed 的类型定义：</h4>
        <pre><code>import { ref, computed } from 'vue'

const count = ref(0)

// 自动类型推断
const doubleCount = computed(() => count.value * 2)
// doubleCount 类型为 ComputedRef&lt;number&gt;

// 显式类型定义
const formattedCount = computed&lt;string&gt;(() => {
  return `Count: ${count.value}`
})
// formattedCount 类型为 ComputedRef&lt;string&gt;</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>Props 和 Emits 的类型定义</h2>
      <p>为组件的 Props 和 Emits 添加类型定义，确保组件接口的类型安全。</p>
      <div class="code-example">
        <h4>使用 &lt;script setup&gt; 定义 Props 和 Emits：</h4>
        <pre><code>&lt;script setup lang="ts"&gt;
// 方式 1：使用接口定义 Props
interface Props {
  name: string
  age?: number
  disabled: boolean
}

const props = defineProps&lt;Props&gt;()

// 方式 2：使用类型字面量定义 Props
const props = defineProps&lt;{
  name: string
  age?: number
  disabled: boolean
  tags: string[]
  options: Record&lt;string, string&gt;
}&gt;()

// 定义 Emits
const emit = defineEmits&lt;{
  (e: 'click', event: MouseEvent): void
  (e: 'update:value', value: string): void
  (e: 'submit', formData: {
    name: string
    email: string
  }): void
}&gt;()

// 使用 Emits
const handleClick = (event: MouseEvent) => {
  emit('click', event)
}

const handleSubmit = () => {
  emit('submit', {
    name: 'John',
    email: 'john@example.com'
  })
}
&lt;/script&gt;</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>组合式 API 的类型定义</h2>
      <p>为组合式 API 函数和 Composables 添加类型定义，提高代码的可维护性。</p>
      <div class="code-example">
        <h4>Composable 的类型定义：</h4>
        <pre><code>// composables/useCounter.ts
import { ref, computed, Ref } from 'vue'

export interface UseCounterReturn {
  count: Ref&lt;number&gt;
  doubleCount: Ref&lt;number&gt;
  increment: () => void
  decrement: () => void
  reset: () => void
}

export function useCounter(initialValue: number = 0): UseCounterReturn {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)
  
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    count.value--
  }
  
  const reset = () => {
    count.value = initialValue
  }
  
  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset
  }
}

// 使用
import { useCounter } from '@/composables/useCounter'

const { count, doubleCount, increment } = useCounter(0)</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>工具类型和辅助函数</h2>
      <p>Vue 3 提供了一些工具类型和辅助函数，帮助开发者更好地使用 TypeScript。</p>
      <div class="code-example">
        <h4>常用的工具类型：</h4>
        <pre><code>import type { Ref, ComputedRef, reactive, RefUnwrapBailTypes } from 'vue'

// Ref 类型
type CountRef = Ref&lt;number&gt;

// ComputedRef 类型
type DoubleCountRef = ComputedRef&lt;number&gt;

// 从 Ref 中提取类型
type CountType = Parameters&lt;typeof ref&lt;number&gt;&gt;[0]

// 解包 Ref 类型
type UnwrappedCount = CountRef extends Ref&lt;infer T&gt; ? T : never

// 响应式对象的类型
type ReactiveState = ReturnType&lt;typeof reactive&lt;State&gt;&gt;</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>最佳实践</h2>
      <ul>
        <li><strong>始终使用 defineComponent：</strong>为组件添加类型定义，获得更好的类型推断</li>
        <li><strong>使用 &lt;script setup&gt;：</strong>提供更简洁的 TypeScript 集成</li>
        <li><strong>为所有响应式数据添加类型：</strong>确保响应式数据的类型安全</li>
        <li><strong>使用接口定义复杂类型：</strong>提高代码的可读性和可维护性</li>
        <li><strong>合理使用泛型：</strong>为可复用的代码添加泛型支持</li>
        <li><strong>避免 any 类型：</strong>尽量减少使用 any 类型，提高类型安全性</li>
        <li><strong>使用类型断言时要谨慎：</strong>确保类型断言的正确性</li>
        <li><strong>保持类型定义的一致性：</strong>在整个项目中保持类型定义的一致性</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>常见问题和解决方案</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>❓ 类型推断问题</h3>
          <p><strong>问题：</strong>TypeScript 无法正确推断某些类型</p>
          <p><strong>解决方案：</strong>显式添加类型注解，使用 as 类型断言，或使用泛型</p>
        </div>
        <div class="faq-item">
          <h3>❓ 循环依赖类型</h3>
          <p><strong>问题：</strong>类型定义中存在循环依赖</p>
          <p><strong>解决方案：</strong>使用接口定义，拆分类型定义文件，或使用前向声明</p>
        </div>
        <div class="faq-item">
          <h3>❓ 第三方库类型</h3>
          <p><strong>问题：</strong>第三方库缺少类型定义或类型定义不正确</p>
          <p><strong>解决方案：</strong>安装 @types/xxx 包，创建声明文件，或使用类型断言</p>
        </div>
        <div class="faq-item">
          <h3>❓ 性能问题</h3>
          <p><strong>问题：</strong>TypeScript 类型检查影响编译性能</p>
          <p><strong>解决方案：</strong>优化类型定义，使用 incremental 编译，或调整 tsconfig 选项</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// TypeScript page component
</script>

<style scoped>
.typescript-page {
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

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.faq-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
}

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
