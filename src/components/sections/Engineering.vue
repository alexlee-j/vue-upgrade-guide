<template>
  <section class="engineering">
    <h2>⚙️ 性能与工程化</h2>
    <p>Vue 3 升级带来的工程化改进机会。</p>
    
    <div class="card">
      <div class="highlight">
        <h2>现代前端工程化栈</h2>
        <p>构建更高效、更可靠的前端开发体验</p>
      </div>
      
      <div class="comparison-container">
        <div class="model-card vue2">
          <h3>❌ Vue 2 生态</h3>
          <ul class="ecosystem-list">
            <li>Webpack 4 构建（较慢）</li>
            <li>Vuex 状态管理</li>
            <li>Vue CLI 工具链</li>
            <li>ESLint + Prettier 代码规范</li>
            <li>传统测试方案</li>
          </ul>
        </div>
        
        <div class="transform-arrow">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#42b983" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <div class="model-card vue3">
          <h3>✅ Vue 3 生态</h3>
          <ul class="ecosystem-list">
            <li><strong>Vite 构建</strong>（极快启动/热更新）</li>
            <li><strong>Pinia 状态管理</strong>（更易用）</li>
            <li><strong>Vite + Volar</strong>（更好体验）</li>
            <li><strong>ESLint + Prettier + Biome</strong>（更严格）</li>
            <li><strong>Vitest + Cypress</strong>（更现代）</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3>构建工具升级</h3>
      <div class="upgrade-card">
        <h4>🚀 从 Webpack 到 Vite</h4>
        <div class="performance-grid">
          <div class="perf-item">
            <h5>冷启动时间</h5>
            <p>从 30-60s <strong>减少到</strong> 1-3s</p>
          </div>
          <div class="perf-item">
            <h5>热更新时间</h5>
            <p>从 2-5s <strong>减少到</strong> 50-200ms</p>
          </div>
          <div class="perf-item">
            <h5>内存占用</h5>
            <p>减少 <strong>30-50%</strong></p>
          </div>
        </div>
        <h5>迁移步骤：</h5>
        <ol>
          <li>安装 Vite 和 Vue 插件</li>
          <li>配置别名和环境变量</li>
          <li>迁移构建配置</li>
          <li>测试兼容性</li>
        </ol>
      </div>
    </div>
    
    <div class="card">
      <h3>TypeScript 集成策略</h3>
      <div class="integration-card">
        <h4>🎯 渐进式 TypeScript 采用</h4>
        <ol>
          <li>开启 TypeScript 严格模式</li>
          <li>为 Composables 添加类型定义</li>
          <li>逐步为组件添加 props 类型</li>
          <li>使用 Vue 3 的类型推导优势</li>
          <li>建立团队类型规范</li>
        </ol>
      </div>
    </div>
    
    <div class="card">
      <h3>监控与可观测性</h3>
      <div class="monitoring-grid">
        <div class="monitoring-item">
          <h4>📊 性能监控</h4>
          <ul>
            <li>首屏加载时间</li>
            <li>组件渲染性能</li>
            <li>内存使用情况</li>
            <li>网络请求优化</li>
          </ul>
        </div>
        
        <div class="monitoring-item">
          <h4>🔍 错误追踪</h4>
          <ul>
            <li>运行时错误捕获</li>
            <li>Vue 特定错误处理</li>
            <li>错误堆栈分析</li>
            <li>用户影响评估</li>
          </ul>
        </div>
        
        <div class="monitoring-item">
          <h4>📈 用户行为分析</h4>
          <ul>
            <li>功能使用率统计</li>
            <li>用户路径分析</li>
            <li>转化漏斗分析</li>
            <li>A/B 测试支持</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.comparison-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin: 2rem 0;
  align-items: start;
}

.ecosystem-list {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.ecosystem-list li {
  margin: 0.5rem 0;
}

.transform-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
}

.highlight {
  background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  padding: 2rem;
  border-radius: var(--border-radius);
  margin: 2rem 0;
  text-align: center;
}

.highlight h2 {
  color: white;
  margin-bottom: 1rem;
}

.highlight p {
  color: white;
  opacity: 0.9;
  font-size: 1.1rem;
}

.upgrade-card {
  background: #e3f2fd;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border-left: 4px solid #2196f3;
}

.integration-card {
  background: #f0f9f6;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.perf-item {
  background: white;
  padding: 1rem;
  border-radius: var(--border-radius);
  text-align: center;
}

.perf-item h5 {
  margin-top: 0;
  color: var(--primary);
}

.monitoring-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.monitoring-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: var(--border-radius);
}

.monitoring-item h4 {
  color: var(--primary);
  margin-top: 0;
}

.monitoring-item ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.monitoring-item li {
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .comparison-container {
    grid-template-columns: 1fr;
  }
  
  .transform-arrow {
    display: none;
  }
  
  .performance-grid {
    grid-template-columns: 1fr;
  }
  
  .monitoring-grid {
    grid-template-columns: 1fr;
  }
}
</style>