import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

// 导入页面组件
import HomePage from './pages/HomePage.vue';
import MentalModelComparePage from './pages/MentalModelComparePage.vue';
import DecisionTreePage from './pages/DecisionTreePage.vue';
import TeamManagementPage from './pages/TeamManagementPage.vue';
import TechDebtPage from './pages/TechDebtPage.vue';
import EngineeringPage from './pages/EngineeringPage.vue';
import ROICalculatorPage from './pages/ROICalculatorPage.vue';
import CaseStudiesPage from './pages/CaseStudiesPage.vue';
import IntroductionPage from './pages/IntroductionPage.vue';
import PreparationPage from './pages/PreparationPage.vue';
import MigrationPage from './pages/MigrationPage.vue';
import PostMigrationPage from './pages/PostMigrationPage.vue';
import CompositionAPIPage from './pages/CompositionAPIPage.vue';
import ReactivityPage from './pages/ReactivityPage.vue';
import TypescriptPage from './pages/TypescriptPage.vue';
import PerformancePage from './pages/PerformancePage.vue';
import ChecklistPage from './pages/ChecklistPage.vue';
import SkillMatrixPage from './pages/SkillMatrixPage.vue';

// 创建路由
const routes = [
  { path: '/', component: HomePage, meta: { title: 'Vue 3 升级指南 - 首页' } },
  { path: '/home', component: HomePage, meta: { title: 'Vue 3 升级指南 - 首页' } },
  { path: '/compare', component: MentalModelComparePage, meta: { title: '心智模型对比 - Vue 3 升级指南' } },
  { path: '/decision-tree', component: DecisionTreePage, meta: { title: '决策树 - Vue 3 升级指南' } },
  { path: '/team-management', component: TeamManagementPage, meta: { title: '团队管理 - Vue 3 升级指南' } },
  { path: '/tech-debt', component: TechDebtPage, meta: { title: '技术债务 - Vue 3 升级指南' } },
  { path: '/engineering', component: EngineeringPage, meta: { title: '工程化 - Vue 3 升级指南' } },
  { path: '/roi-calculator', component: ROICalculatorPage, meta: { title: 'ROI 计算器 - Vue 3 升级指南' } },
  { path: '/case-studies', component: CaseStudiesPage, meta: { title: '案例研究 - Vue 3 升级指南' } },
  { path: '/introduction', component: IntroductionPage, meta: { title: '介绍 - Vue 3 升级指南' } },
  { path: '/preparation', component: PreparationPage, meta: { title: '准备工作 - Vue 3 升级指南' } },
  { path: '/migration', component: MigrationPage, meta: { title: '迁移步骤 - Vue 3 升级指南' } },
  { path: '/post-migration', component: PostMigrationPage, meta: { title: '后续工作 - Vue 3 升级指南' } },
  { path: '/composition-api', component: CompositionAPIPage, meta: { title: '组合式 API - Vue 3 升级指南' } },
  { path: '/reactivity', component: ReactivityPage, meta: { title: '响应性系统 - Vue 3 升级指南' } },
  { path: '/typescript', component: TypescriptPage, meta: { title: 'TypeScript 集成 - Vue 3 升级指南' } },
  { path: '/performance', component: PerformancePage, meta: { title: '性能优化 - Vue 3 升级指南' } },
  { path: '/checklist', component: ChecklistPage, meta: { title: '检查清单 - Vue 3 升级指南' } },
  { path: '/skill-matrix', component: SkillMatrixPage, meta: { title: '技能矩阵 - Vue 3 升级指南' } }
];

// 创建路由器实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

// 创建应用实例
const app = createApp(App);

// 全局后置钩子：更新页面标题
router.afterEach((to) => {
  const title = to.meta.title as string;
  if (title) {
    document.title = title;
  }
});

// 使用路由器
app.use(router);

// 挂载应用
app.mount('#app');