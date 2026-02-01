<template>
  <div id="app">
    <header>
      <div class="container">
        <h1>负责人视角的 Vue 技术升级</h1>
        <p>从 Vue 2 到 Vue 3 的心智模型升级指南 - 以负责人视角掌握技术选型与团队管理</p>
      </div>
    </header>

    <nav>
      <div class="container">
        <div class="nav-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['tab', { active: activeTab === tab.id }]"
            @click="changeTab(tab.id)"
          >
            {{ tab.icon }} {{ tab.title }}
          </button>
        </div>
      </div>
    </nav>

    <main class="container">
      <MentalModelCompare v-if="activeTab === 'mental-model'" />
      <DecisionTree v-if="activeTab === 'decision-tree'" />
      <TeamManagement v-if="activeTab === 'team-management'" />
      <TechDebt v-if="activeTab === 'tech-debt'" />
      <Engineering v-if="activeTab === 'engineering'" />
      <div v-if="activeTab === 'roi-calculator'" class="card">
        <ROICalculator />
      </div>
      <CaseStudies v-if="activeTab === 'case-studies'" />
    </main>

    <footer>
      <div class="container">
        <p>负责人视角的 Vue 技术升级指南 • 从战略高度理解技术选型价值</p>
        <p class="subtitle">赋能技术决策，驱动业务增长</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MentalModelCompare from './components/sections/MentalModelCompare.vue';
import DecisionTree from './components/sections/DecisionTree.vue';
import TeamManagement from './components/sections/TeamManagement.vue';
import TechDebt from './components/sections/TechDebt.vue';
import Engineering from './components/sections/Engineering.vue';
import ROICalculator from './components/interactive/ROICalculator.vue';
import CaseStudies from './components/sections/CaseStudies.vue';

// 定义标签页
const tabs = [
  { id: 'mental-model', title: '心智模型对比', icon: '💡' },
  { id: 'decision-tree', title: '决策树', icon: '🌳' },
  { id: 'team-management', title: '团队管理', icon: '👥' },
  { id: 'tech-debt', title: '技术债务', icon: '🔧' },
  { id: 'engineering', title: '工程化', icon: '⚙️' },
  { id: 'roi-calculator', title: 'ROI 计算器', icon: '📊' },
  { id: 'case-studies', title: '案例研究', icon: '📚' }
];

// 当前活动标签
const activeTab = ref('mental-model');

// 切换标签
const changeTab = (tabId: string) => {
  activeTab.value = tabId;
};
</script>

<style>
@import './assets/styles/theme.css';
@import './assets/styles/animations.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0;
  text-align: center;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

header p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}

nav {
  background: white;
  box-shadow: var(--box-shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-tabs {
  display: flex;
  overflow-x: auto;
  padding: 0 20px;
}

.tab {
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: 500;
  white-space: nowrap;
  border-bottom: 3px solid transparent;
  transition: var(--transition);
  background: none;
  border: none;
  font-size: inherit;
  color: #666;
}

.tab.active {
  border-bottom: 3px solid var(--primary);
  color: var(--primary);
}

.tab:hover:not(.active) {
  background-color: #f8f9fa;
  color: var(--dark);
}

main {
  flex: 1;
  padding: 2rem 0;
}

.section {
  display: none;
}

.section.active {
  display: block;
}

footer {
  background: var(--dark);
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
}

footer .subtitle {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }
  
  .nav-tabs {
    flex-direction: column;
  }
  
  .tab {
    border-bottom: 1px solid #eee;
    border-left: 3px solid transparent;
  }
  
  .tab.active {
    border-bottom: 1px solid #eee;
    border-left: 3px solid var(--primary);
    border-radius: 0;
  }
}
</style>