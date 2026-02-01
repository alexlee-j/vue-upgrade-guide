<template>
  <div class="performance-page">
    <h1>⚡ 性能优化</h1>
    <p class="page-description">
      掌握 Vue 3 的性能优化技巧，提升应用的运行速度和用户体验
    </p>
    
    <section class="section-card">
      <h2>Vue 3 的性能提升</h2>
      <p>Vue 3 相比 Vue 2 在性能方面有显著提升，主要体现在以下几个方面：</p>
      <div class="performance-grid">
        <div class="performance-item">
          <h3>🚀 虚拟 DOM 重写</h3>
          <ul>
            <li>使用更高效的 diff 算法</li>
            <li>减少了虚拟 DOM 的创建开销</li>
            <li>提升了大型列表的渲染性能</li>
          </ul>
        </div>
        <div class="performance-item">
          <h3>📦 编译优化</h3>
          <ul>
            <li>静态提升：缓存静态节点</li>
            <li>预字符串化：将静态内容编译为字符串</li>
            <li>按需更新：只编译和更新动态内容</li>
          </ul>
        </div>
        <div class="performance-item">
          <h3>🔄 响应性系统改进</h3>
          <ul>
            <li>基于 Proxy 的响应性系统</li>
            <li>更精确的依赖追踪</li>
            <li>减少了不必要的重新渲染</li>
          </ul>
        </div>
        <div class="performance-item">
          <h3>📱 体积优化</h3>
          <ul>
            <li>Tree-shaking 支持</li>
            <li>核心包体积减少约 41%</li>
            <li>按需引入功能模块</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>渲染性能优化</h2>
      <p>优化组件的渲染性能，减少不必要的渲染和计算。</p>
      <div class="optimization-grid">
        <div class="optimization-item">
          <h3>v-memo 指令</h3>
          <p>缓存渲染结果，避免不必要的重新渲染</p>
          <div class="code-example">
            <pre><code>&lt;template&gt;
  &lt;div v-for="item in items" :key="item.id" v-memo="[item.id, item.value]"&gt;
    {{ item.value }}
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>
        </div>
        <div class="optimization-item">
          <h3>合理使用 v-if 和 v-show</h3>
          <p>根据使用场景选择合适的指令</p>
          <ul>
            <li><code>v-if</code>：适合不频繁切换的场景</li>
            <li><code>v-show</code>：适合频繁切换的场景</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>组件拆分</h3>
          <p>将大型组件拆分为更小的、可复用的组件</p>
          <ul>
            <li>减少单个组件的复杂度</li>
            <li>提高渲染性能和可维护性</li>
            <li>便于单独测试和优化</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>避免在模板中进行复杂计算</h3>
          <p>将复杂计算移到计算属性中</p>
          <div class="code-example">
            <pre><code>&lt;!-- 不好的做法 --&gt;
&lt;div&gt;{{ items.filter(item => item.active).length }}&lt;/div&gt;

&lt;!-- 好的做法 --&gt;
&lt;div&gt;{{ activeItemsCount }}&lt;/div&gt;

&lt;script setup&gt;
import { computed } from 'vue'

const activeItemsCount = computed(() => {
  return items.value.filter(item => item.active).length
})
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>响应性系统优化</h2>
      <p>优化响应式数据的使用，提高响应性系统的性能。</p>
      <div class="optimization-grid">
        <div class="optimization-item">
          <h3>选择合适的响应式 API</h3>
          <ul>
            <li><code>ref</code>：适合基本类型和需要传递的响应式数据</li>
            <li><code>reactive</code>：适合复杂对象和不需要传递的响应式数据</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>使用浅层响应式 API</h3>
          <p>对于大型对象，使用浅层响应式 API 提高性能</p>
          <div class="code-example">
            <pre><code>import { shallowRef, shallowReactive } from 'vue'

// 浅层 ref
const largeObject = shallowRef({ /* 大型对象 */ })

// 浅层 reactive
const state = shallowReactive({ /* 大型状态 */ })</code></pre>
          </div>
        </div>
        <div class="optimization-item">
          <h3>合理使用计算属性</h3>
          <p>利用计算属性的缓存机制</p>
          <ul>
            <li>对于复杂的派生状态使用计算属性</li>
            <li>避免在计算属性中执行副作用操作</li>
            <li>合理设置计算属性的依赖关系</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>谨慎使用 watch</h3>
          <p>过多的 watch 会影响性能</p>
          <ul>
            <li>优先使用计算属性替代 watch</li>
            <li>合理设置 watch 的深度和即时性</li>
            <li>及时清理不再需要的 watch</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>构建优化</h2>
      <p>优化项目的构建配置，减少打包体积和提高构建速度。</p>
      <div class="optimization-grid">
        <div class="optimization-item">
          <h3>使用 Vite</h3>
          <p>Vite 提供了更快的开发服务器和构建速度</p>
          <ul>
            <li>基于 ES 模块的开发服务器</li>
            <li>使用 Rollup 进行生产构建</li>
            <li>内置的代码分割和懒加载支持</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>代码分割</h3>
          <p>将代码分割为多个小块，按需加载</p>
          <div class="code-example">
            <pre><code>// 路由懒加载
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/about',
      component: () => import('./views/About.vue')
    }
  ]
})</code></pre>
          </div>
        </div>
        <div class="optimization-item">
          <h3>依赖优化</h3>
          <p>优化项目依赖，减少打包体积</p>
          <ul>
            <li>只安装必要的依赖</li>
            <li>使用更小的替代库</li>
            <li>按需导入库的功能模块</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>压缩和混淆</h3>
          <p>压缩和混淆生产构建的代码</p>
          <ul>
            <li>使用 Vite 的内置压缩</li>
            <li>配置合理的混淆选项</li>
            <li>避免过度混淆导致的问题</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>运行时性能优化</h2>
      <p>优化应用的运行时性能，提升用户体验。</p>
      <div class="optimization-grid">
        <div class="optimization-item">
          <h3>图片优化</h3>
          <p>优化图片的加载和显示</p>
          <ul>
            <li>使用适当的图片格式（WebP、AVIF）</li>
            <li>压缩图片大小</li>
            <li>实现图片懒加载</li>
            <li>使用响应式图片</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>网络优化</h3>
          <p>优化网络请求和资源加载</p>
          <ul>
            <li>使用 HTTP/2 或 HTTP/3</li>
            <li>实现资源缓存策略</li>
            <li>减少 HTTP 请求数量</li>
            <li>使用 CDN 加速静态资源</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>内存优化</h3>
          <p>减少内存使用，避免内存泄漏</p>
          <ul>
            <li>及时清理不再使用的事件监听器</li>
            <li>合理管理定时器</li>
            <li>避免循环引用</li>
            <li>使用 WeakMap 和 WeakSet 存储临时数据</li>
          </ul>
        </div>
        <div class="optimization-item">
          <h3>首屏加载优化</h3>
          <p>加快首屏内容的显示速度</p>
          <ul>
            <li>减少首屏所需的资源</li>
            <li>实现骨架屏</li>
            <li>使用服务端渲染（SSR）</li>
            <li>预加载关键资源</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>性能监控和分析</h2>
      <p>监控和分析应用的性能，找出性能瓶颈并进行优化。</p>
      <div class="monitoring-grid">
        <div class="monitoring-item">
          <h3>浏览器开发工具</h3>
          <ul>
            <li>Chrome DevTools：Performance 面板</li>
            <li>Firefox DevTools：Performance 面板</li>
            <li>Safari DevTools：Timelines 面板</li>
          </ul>
        </div>
        <div class="monitoring-item">
          <h3>性能分析工具</h3>
          <ul>
            <li>Lighthouse：综合性能分析</li>
            <li>WebPageTest：详细的性能测试</li>
            <li>Vue DevTools：Vue 特定的性能分析</li>
          </ul>
        </div>
        <div class="monitoring-item">
          <h3>性能指标</h3>
          <ul>
            <li>FCP (First Contentful Paint)：首次内容绘制</li>
            <li>LCP (Largest Contentful Paint)：最大内容绘制</li>
            <li>FID (First Input Delay)：首次输入延迟</li>
            <li>CLS (Cumulative Layout Shift)：累积布局偏移</li>
          </ul>
        </div>
        <div class="monitoring-item">
          <h3>监控工具</h3>
          <ul>
            <li>New Relic：应用性能监控</li>
            <li>Sentry：错误和性能监控</li>
            <li>Datadog：综合监控平台</li>
            <li>自定义监控脚本</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>最佳实践</h2>
      <ul>
        <li><strong>保持组件简洁：</strong>将大型组件拆分为更小的组件</li>
        <li><strong>合理使用响应式 API：</strong>根据场景选择合适的响应式 API</li>
        <li><strong>优化渲染性能：</strong>使用 v-memo、合理的 key 等</li>
        <li><strong>构建优化：</strong>使用 Vite、代码分割、依赖优化等</li>
        <li><strong>网络优化：</strong>压缩资源、使用 CDN、缓存策略等</li>
        <li><strong>监控性能：</strong>定期分析和监控应用性能</li>
        <li><strong>按需加载：</strong>只加载当前需要的资源和组件</li>
        <li><strong>避免过度优化：</strong>在性能和开发效率之间取得平衡</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
// Performance page component
</script>

<style scoped>
.performance-page {
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

.performance-grid,
.optimization-grid,
.monitoring-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.performance-item,
.optimization-item,
.monitoring-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
}

.performance-item h3,
.optimization-item h3,
.monitoring-item h3 {
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

code {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 3px;
  padding: 0.2rem 0.4rem;
  font-size: 0.9em;
}
</style>
