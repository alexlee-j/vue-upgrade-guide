<template>
  <div class="introduction-page">
    <h1>📖 介绍</h1>
    <p class="page-description">
      了解 Vue 3 升级的背景、目标和整体规划，为您的升级之旅做好准备
    </p>
    
    <section class="section-card">
      <h2>升级背景</h2>
      <p>Vue 3 于 2020 年 9 月正式发布，带来了多项重大改进和新特性。随着时间的推移，Vue 2 的维护周期逐渐接近尾声，升级到 Vue 3 成为必然选择。</p>
      <ul>
        <li>Vue 2 将于 2023 年 12 月 31 日结束官方支持</li>
        <li>Vue 3 提供了更好的性能、更小的包体积和更现代的 API</li>
        <li>生态系统已逐渐迁移到 Vue 3，获得更好的社区支持</li>
        <li>TypeScript 支持更加完善，提升代码质量和可维护性</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>升级目标</h2>
      <p>通过本指南，我们希望帮助您：</p>
      <ul>
        <li>理解 Vue 2 和 Vue 3 的核心差异</li>
        <li>制定适合您项目的升级策略</li>
        <li>掌握 Vue 3 的新特性和最佳实践</li>
        <li>顺利完成从 Vue 2 到 Vue 3 的迁移</li>
        <li>最大化升级带来的性能和开发效率提升</li>
      </ul>
    </section>
    
    <section class="section-card">
      <h2>Vue 3 主要特性</h2>
      <div class="features-grid">
        <div class="feature-item">
          <h3>📦 更小的包体积</h3>
          <p>通过 Tree-shaking 优化，Vue 3 的核心包体积减少了约 41%</p>
        </div>
        <div class="feature-item">
          <h3>⚡ 更好的性能</h3>
          <p>虚拟 DOM 重写，编译优化，响应性系统改进，性能提升明显</p>
        </div>
        <div class="feature-item">
          <h3>🧩 组合式 API</h3>
          <p>提供更好的逻辑复用和代码组织方式，解决 mixins 的问题</p>
        </div>
        <div class="feature-item">
          <h3>🔄 新的响应性系统</h3>
          <p>基于 Proxy 的响应性系统，支持更多类型的响应式数据</p>
        </div>
        <div class="feature-item">
          <h3>🟦 更好的 TypeScript 支持</h3>
          <p>原生支持 TypeScript，提供更准确的类型推导</p>
        </div>
        <div class="feature-item">
          <h3>🌐 更好的服务端渲染</h3>
          <p>改进的服务端渲染性能和开发体验</p>
        </div>
      </div>
    </section>
    
    <section class="section-card">
      <h2>升级路径</h2>
      <p>本指南提供了完整的升级路径，包括：</p>
      <ol>
        <li><strong>准备阶段</strong>：评估项目、制定计划、准备环境</li>
        <li><strong>迁移阶段</strong>：逐步迁移代码、处理兼容性问题</li>
        <li><strong>优化阶段</strong>：利用 Vue 3 新特性进行代码优化</li>
        <li><strong>验证阶段</strong>：测试、性能评估、文档更新</li>
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">
// Introduction page component
</script>

<style scoped>
.introduction-page {
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

.section-card ul,
.section-card ol {
  padding-left: 1.5rem;
}

.section-card li {
  margin-bottom: 0.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.feature-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
}

.feature-item h3 {
  margin-top: 0;
  color: var(--color-text);
}
</style>