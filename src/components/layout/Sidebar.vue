<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <h3 class="section-title">负责人快速导航</h3>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/decision-simulator" class="nav-link">
            <span class="nav-text">决策模拟器</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/risk-assessment" class="nav-link">
            <span class="nav-text">风险清单</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/training-plan" class="nav-link">
            <span class="nav-text">培训计划</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/hybrid-config" class="nav-link">
            <span class="nav-text">混合配置</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
      </ul>
    </div>
    
    <div class="sidebar-section">
      <h3 class="section-title">升级路径</h3>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/introduction" class="nav-link">
            <span class="nav-text">介绍</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/preparation" class="nav-link">
            <span class="nav-text">准备工作</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/migration" class="nav-link">
            <span class="nav-text">迁移步骤</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/post-migration" class="nav-link">
            <span class="nav-text">后续工作</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
      </ul>
    </div>
    
    <div class="sidebar-section">
      <h3 class="section-title">核心概念</h3>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/composition-api" class="nav-link">
            <span class="nav-text">组合式 API</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/reactivity" class="nav-link">
            <span class="nav-text">响应性系统</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/typescript" class="nav-link">
            <span class="nav-text">TypeScript 集成</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/performance" class="nav-link">
            <span class="nav-text">性能优化</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/compare" class="nav-link">
            <span class="nav-text">心智模型对比</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/api-mixing-risks" class="nav-link">
            <span class="nav-text">API混用风险</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
      </ul>
    </div>
    
    <div class="sidebar-section">
      <h3 class="section-title">实践工具</h3>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/roi-calculator" class="nav-link">
            <span class="nav-text">ROI 计算器</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/decision-tree" class="nav-link">
            <span class="nav-text">决策树</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/skill-matrix" class="nav-link">
            <span class="nav-text">技能矩阵</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/checklist" class="nav-link">
            <span class="nav-text">检查清单</span>
            <span class="nav-indicator"></span>
          </router-link>
        </li>
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
  height: calc(100vh - 72px);
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 72px;
  padding: var(--spacing-lg);
  transition: var(--transition);
  backdrop-filter: blur(8px);
}

.sidebar-section {
  margin-bottom: var(--spacing-xl);
  animation: fadeInUp 0.5s ease-out;
}

.sidebar-section:nth-child(1) {
  animation-delay: 0.1s;
}

.sidebar-section:nth-child(2) {
  animation-delay: 0.2s;
}

.sidebar-section:nth-child(3) {
  animation-delay: 0.3s;
}

.sidebar-section:nth-child(4) {
  animation-delay: 0.4s;
}

.section-title {
  margin-top: 0;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-bottom: var(--spacing-xs);
  border-bottom: 1px solid var(--color-border);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: var(--spacing-xs);
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-sm) var(--spacing-md);
  text-decoration: none;
  color: var(--color-text-secondary);
  border-radius: var(--border-radius);
  transition: var(--transition);
  font-size: var(--font-size-sm);
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 0;
  background: var(--primary);
  transition: height var(--transition);
}

.nav-link:hover {
  background-color: var(--primary-transparent);
  color: var(--primary);
  transform: translateX(4px);
}

.nav-link:hover::before {
  height: 100%;
}

.nav-link.router-link-active {
  background-color: var(--primary-transparent);
  color: var(--primary);
  transform: translateX(4px);
}

.nav-link.router-link-active::before {
  height: 100%;
}

.nav-text {
  transition: var(--transition);
}

.nav-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  opacity: 0;
  transform: scale(0);
  transition: var(--transition);
}

.nav-link:hover .nav-indicator,
.nav-link.router-link-active .nav-indicator {
  opacity: 1;
  transform: scale(1);
}

/* 滚动条样式 */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: var(--border-radius-sm);
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--gray-400);
}

/* 动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>