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

    <section class="manager-benefits">
      <h2>负责人核心收益</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <h3>📈 提升复杂业务可维护性</h3>
          <p>通过 Composition API 的逻辑聚合，使复杂业务组件更易于理解和维护</p>
        </div>
        <div class="benefit-card">
          <h3>🤝 降低团队协作成本</h3>
          <p>统一的 API 风格和更好的类型支持，减少团队成员间的沟通成本</p>
        </div>
        <div class="benefit-card">
          <h3>🏗️ 为后续框架升级铺路</h3>
          <p>采用最新的 Vue 3 生态，为未来的技术升级做好准备</p>
        </div>
      </div>
    </section>

    <section class="quick-navigation">
      <h2>负责人快速导航</h2>
      <div class="navigation-grid">
        <router-link to="/decision-simulator" class="nav-card">
          <h3>🧠 决策模拟器</h3>
          <p>获取适合项目的 API 方案推荐</p>
        </router-link>
        <router-link to="/risk-assessment" class="nav-card">
          <h3>🚨 风险清单</h3>
          <p>评估和管理升级风险</p>
        </router-link>
        <router-link to="/training-plan" class="nav-card">
          <h3>🎓 培训计划</h3>
          <p>制定团队学习路径</p>
        </router-link>
      </div>
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

.manager-benefits {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
}

.manager-benefits h2 {
  text-align: center;
  margin-top: 0;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.benefit-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1.5rem;
  text-align: center;
}

.benefit-card h3 {
  color: var(--color-text);
  margin-top: 0;
}

.quick-navigation {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2rem;
}

.quick-navigation h2 {
  text-align: center;
  margin-top: 0;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.navigation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.nav-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1.5rem;
  text-decoration: none;
  color: var(--color-text);
  transition: transform 0.2s, box-shadow 0.2s;
}

.nav-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: var(--color-text);
}

.nav-card h3 {
  margin-top: 0;
  color: var(--color-primary);
}

.nav-card p {
  color: var(--color-text-secondary);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .features, .benefits-grid, .navigation-grid {
    grid-template-columns: 1fr;
  }
}
</style>