<template>
  <div class="home-page">
    <section class="hero">
      <h1>Vue 3 升级指南</h1>
      <p>帮助您从 Vue 2 顺利迁移到 Vue 3，包含全面的心智模型对比、决策树、团队管理和工程化实践。</p>
      <div class="cta-buttons">
        <router-link to="/compare" class="btn btn-primary">开始探索</router-link>
        <router-link to="/decision-tree" class="btn btn-secondary">决策树</router-link>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <h3>💡 心智模型对比</h3>
        <p>深入对比 Vue 2 和 Vue 3 的核心概念和编程范式，帮助您理解底层变化。</p>
        <router-link to="/compare">了解更多 →</router-link>
      </div>
      
      <div class="feature-card">
        <h3>🌳 决策树</h3>
        <p>基于实际场景的决策流程，指导您在不同情况下做出合适的技术选型。</p>
        <router-link to="/decision-tree">了解更多 →</router-link>
      </div>
      
      <div class="feature-card">
        <h3>👥 团队管理</h3>
        <p>如何在团队中推进 Vue 3 升级，包括培训计划、风险控制和进度管理。</p>
        <router-link to="/team-management">了解更多 →</router-link>
      </div>
      
      <div class="feature-card">
        <h3>🔧 技术债务</h3>
        <p>识别和处理升级过程中可能出现的技术债务，确保平稳过渡。</p>
        <router-link to="/tech-debt">了解更多 →</router-link>
      </div>
    </section>

    <section class="benefits">
      <h2>Vue 3 的核心优势</h2>
      <ul>
        <li>🚀 更快的性能：更快的虚拟 DOM 算法和编译器优化</li>
        <li>💪 更强的 TypeScript 支持：更好的类型推导和类型安全</li>
        <li>🎯 更好的 API 设计：Composition API 提供更好的逻辑组织</li>
        <li>🧩 更小的包体积：更好的摇树优化支持</li>
        <li>🛠️ 更佳的开发体验：更好的调试工具和错误提示</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
// Home page component
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 1.5rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background-color: white;
  color: #667eea;
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  margin-top: 0;
  color: var(--color-text);
}

.feature-card a {
  display: block;
  margin-top: 1rem;
  color: var(--color-primary);
  text-decoration: none;
}

.benefits {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2rem;
}

.benefits h2 {
  text-align: center;
  margin-top: 0;
  color: var(--color-text);
}

.benefits ul {
  list-style: none;
  padding: 0;
}

.benefits li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: flex-start;
}

.benefits li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}
</style>