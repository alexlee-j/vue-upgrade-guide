<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <h3>负责人快速导航</h3>
      <ul class="nav-list">
        <li><router-link to="/decision-simulator" class="nav-link">决策模拟器</router-link></li>
        <li><router-link to="/risk-assessment" class="nav-link">风险清单</router-link></li>
        <li><router-link to="/training-plan" class="nav-link">培训计划</router-link></li>
        <li><router-link to="/hybrid-config" class="nav-link">混合配置</router-link></li>
      </ul>
    </div>
    
    <div class="sidebar-section">
      <h3>升级路径</h3>
      <ul class="nav-list">
        <li><router-link to="/introduction" class="nav-link">介绍</router-link></li>
        <li><router-link to="/preparation" class="nav-link">准备工作</router-link></li>
        <li><router-link to="/migration" class="nav-link">迁移步骤</router-link></li>
        <li><router-link to="/post-migration" class="nav-link">后续工作</router-link></li>
      </ul>
    </div>
    
    <div class="sidebar-section">
      <h3>核心概念</h3>
      <ul class="nav-list">
        <li><router-link to="/composition-api" class="nav-link">组合式 API</router-link></li>
        <li><router-link to="/reactivity" class="nav-link">响应性系统</router-link></li>
        <li><router-link to="/typescript" class="nav-link">TypeScript 集成</router-link></li>
        <li><router-link to="/performance" class="nav-link">性能优化</router-link></li>
        <li><router-link to="/compare" class="nav-link">心智模型对比</router-link></li>
        <li><router-link to="/api-mixing-risks" class="nav-link">API混用风险</router-link></li>
      </ul>
    </div>
    
    <div class="sidebar-section">
      <h3>实践工具</h3>
      <ul class="nav-list">
        <li><router-link to="/roi-calculator" class="nav-link">ROI 计算器</router-link></li>
        <li><router-link to="/decision-tree" class="nav-link">决策树</router-link></li>
        <li><router-link to="/skill-matrix" class="nav-link">技能矩阵</router-link></li>
        <li><router-link to="/checklist" class="nav-link">检查清单</router-link></li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
// Sidebar component for navigation
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--color-surface);
  border-right: 1px solid var(--color-border);
  height: calc(100vh - 60px);
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 60px;
  padding: 1rem;
}

.sidebar-section {
  margin-bottom: 1.5rem;
}

.sidebar-section h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: var(--color-text);
  font-size: 1rem;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: block;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: var(--color-text-secondary);
  border-radius: 4px;
  transition: background-color 0.2s;
  font-size: 0.9rem;
}

.nav-link.router-link-active,
.nav-link:hover {
  background-color: var(--color-primary-light);
  color: var(--color-text);
}
</style>