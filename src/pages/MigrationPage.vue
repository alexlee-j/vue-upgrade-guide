<template>
  <div class="migration-page">
    <h1>🚧 迁移步骤</h1>
    <p class="page-description">
      从 Vue 2 到 Vue 3 的详细迁移步骤，确保平稳过渡
    </p>
    
    <section class="section-card">
      <h2>步骤 1：依赖升级</h2>
      <p>更新项目依赖，确保使用兼容 Vue 3 的版本。</p>
      <ul>
        <li><strong>Vue 核心：</strong>从 2.x 升级到 3.x</li>
        <li><strong>Vue Router：</strong>从 3.x 升级到 4.x</li>
        <li><strong>Vuex：</strong>从 3.x 升级到 4.x（或考虑 Pinia）</li>
        <li><strong>构建工具：</strong>升级到 Vite 或更新 Webpack 配置</li>
        <li><strong>其他依赖：</strong>确保所有第三方库支持 Vue 3</li>
      </ul>
      <div class="code-example">
        <h4>依赖更新示例（package.json）：</h4>
        <pre><code>{"dependencies": {
  "vue": "^3.4.0",
  "vue-router": "^4.2.0",
  "pinia": "^2.1.0"
}}</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>步骤 2：代码迁移</h2>
      <p>逐步迁移代码，从基础部分开始。</p>
      <div class="migration-steps">
        <div class="step-item">
          <h3>2.1 入口文件更新</h3>
          <p>更新 main.js/main.ts 文件，使用 Vue 3 的 API。</p>
          <div class="code-example">
            <pre><code>// Vue 2
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Vue 3
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')</code></pre>
          </div>
        </div>
        
        <div class="step-item">
          <h3>2.2 组件迁移</h3>
          <p>逐步迁移组件，优先处理基础组件。</p>
          <ul>
            <li>更新组件选项 API 用法</li>
            <li>处理废弃的生命周期钩子</li>
            <li>更新指令和过滤器</li>
            <li>考虑使用 Composition API 重构复杂组件</li>
          </ul>
        </div>
        
        <div class="step-item">
          <h3>2.3 响应性系统迁移</h3>
          <p>更新响应性数据的使用方式。</p>
          <ul>
            <li>了解 ref 和 reactive 的区别</li>
            <li>注意模板中的 .value 使用</li>
            <li>更新计算属性和监听器</li>
          </ul>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>步骤 3：路由迁移</h2>
      <p>更新 Vue Router 配置，使用 Vue Router 4 的 API。</p>
      <div class="code-example">
        <pre><code>// Vue 2 + Vue Router 3
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

// Vue 3 + Vue Router 4
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>步骤 4：状态管理迁移</h2>
      <p>更新状态管理配置，考虑使用 Pinia 作为替代方案。</p>
      <div class="code-example">
        <pre><code>// Vuex 4 示例
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})

// Pinia 示例
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    incrementAsync() {
      setTimeout(() => {
        this.count++
      }, 1000)
    }
  }
})</code></pre>
      </div>
    </section>
    
    <section class="section-card">
      <h2>步骤 5：测试和验证</h2>
      <p>确保迁移后的代码能够正常运行。</p>
      <ul>
        <li><strong>单元测试：</strong>运行所有单元测试，确保通过</li>
        <li><strong>集成测试：</strong>验证模块间的协作</li>
        <li><strong>E2E 测试：</strong>确保用户流程正常</li>
        <li><strong>手动测试：</strong>重点测试核心功能</li>
        <li><strong>性能测试：</strong>对比升级前后的性能</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>常见问题和解决方案</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>❓ 生命周期钩子变更</h3>
          <p><strong>问题：</strong>Vue 3 中的生命周期钩子名称变更</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>beforeCreate → setup()</li>
            <li>created → setup()</li>
            <li>beforeMount → onBeforeMount</li>
            <li>mounted → onMounted</li>
            <li>beforeUpdate → onBeforeUpdate</li>
            <li>updated → onUpdated</li>
            <li>beforeDestroy → onBeforeUnmount</li>
            <li>destroyed → onUnmounted</li>
          </ul>
        </div>
        <div class="faq-item">
          <h3>❓ 过滤器移除</h3>
          <p><strong>问题：</strong>Vue 3 移除了过滤器功能</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>使用计算属性替代</li>
            <li>使用方法调用替代</li>
            <li>创建全局工具函数</li>
          </ul>
        </div>
        <div class="faq-item">
          <h3>❓ this 上下文变更</h3>
          <p><strong>问题：</strong>Composition API 中没有 this</p>
          <p><strong>解决方案：</strong></p>
          <ul>
            <li>使用 setup() 返回的响应式数据</li>
            <li>使用 provide/inject 传递依赖</li>
            <li>使用 getCurrentInstance() 获取实例（谨慎使用）</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Migration page component
</script>

<style scoped>
.migration-page {
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

.migration-steps {
  margin-top: 1.5rem;
}

.step-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.step-item h3 {
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
</style>
