# Vue 3 升级指南

这是一个全面的 Vue 2 到 Vue 3 升级指南项目，专为技术负责人和团队领导设计，帮助他们从战略高度理解 Vue 3 升级的价值和实施路径。

## 项目特点

- **心智模型对比**：深入对比 Vue 2 和 Vue 3 的核心概念和编程范式
- **决策树**：基于实际场景的决策流程，指导技术选型
- **团队管理**：如何在团队中推进 Vue 3 升级，包括培训计划和风险管理
- **技术债务**：识别和处理升级过程中的技术债务
- **工程化实践**：Vue 3 生态系统的工程化最佳实践
- **ROI 计算器**：量化 Vue 3 升级的投资回报率
- **案例研究**：真实的企业升级案例分析

## 技术栈

- Vue 3
- TypeScript
- Vite
- Vue Router 4
- Composition API

## 目录结构

```
vue-upgrade-guide/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── styles/
│   │       ├── variables.css # CSS 变量
│   │       ├── theme.css # 主题样式
│   │       └── animations.css # 动画效果
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.vue
│   │   │   ├── Sidebar.vue
│   │   │   └── Footer.vue
│   │   ├── sections/
│   │   │   ├── MentalModelCompare.vue # 心智模型对比
│   │   │   ├── DecisionTree.vue # 决策树
│   │   │   ├── TeamManagement.vue # 团队管理
│   │   │   ├── TechDebt.vue # 技术债务
│   │   │   └── Engineering.vue # 工程化
│   │   ├── shared/
│   │   │   ├── CodeCompare.vue # 代码对比组件
│   │   │   ├── MermaidChart.vue # Mermaid 图表
│   │   │   ├── DecisionCard.vue # 决策卡片
│   │   │   └── ChecklistItem.vue # 检查清单
│   │   └── interactive/
│   │       ├── FlowChart.vue # 交互式流程图
│   │       ├── SkillMatrix.vue # 技能矩阵
│   │       └── ROICalculator.vue # ROI 计算器
│   ├── composables/
│   │   ├── useTheme.ts # 主题切换
│   │   ├── useNavigation.ts # 导航逻辑
│   │   └── useCodeHighlight.ts # 代码高亮
│   ├── types/
│   │   ├── index.ts
│   │   └── components.ts
│   ├── data/
│   │   ├── mentalModel.ts # 心智模型数据
│   │   ├── decisionTree.ts # 决策树数据
│   │   └── caseStudies.ts # 案例数据
│   ├── pages/
│   │   ├── HomePage.vue
│   │   ├── MentalModelComparePage.vue
│   │   ├── DecisionTreePage.vue
│   │   ├── TeamManagementPage.vue
│   │   ├── TechDebtPage.vue
│   │   ├── EngineeringPage.vue
│   │   ├── ROICalculatorPage.vue
│   │   ├── CaseStudiesPage.vue
│   │   ├── IntroductionPage.vue
│   │   ├── PreparationPage.vue
│   │   ├── MigrationPage.vue
│   │   ├── PostMigrationPage.vue
│   │   ├── CompositionAPIPage.vue
│   │   ├── ReactivityPage.vue
│   │   ├── TypescriptPage.vue
│   │   ├── PerformancePage.vue
│   │   ├── ChecklistPage.vue
│   │   └── SkillMatrixPage.vue
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 安装与运行

```bash
# 克隆项目
git clone https://github.com/alexlee-j/vue-upgrade-guide.git

# 进入项目目录
cd vue-upgrade-guide

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 功能模块

### 心智模型对比
详细对比 Vue 2 和 Vue 3 在响应性系统、组件组合逻辑、TypeScript 集成等方面的核心差异。

### 决策树
交互式决策树帮助您根据项目特征选择最适合的升级策略。

### ROI 计算器
量化计算 Vue 3 升级的投资回报率，帮助决策者理解升级的商业价值。

### 技能矩阵
可视化团队技能矩阵，帮助规划培训和人力资源分配。

## 许可证

MIT