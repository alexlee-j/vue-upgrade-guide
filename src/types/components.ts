// 组件相关的类型定义

// 心智模型对比数据类型
export interface MentalModelComparison {
  id: string;
  title: string;
  vue2Approach: string;
  vue3Approach: string;
  benefits: string[];
  challenges: string[];
  migrationTips: string[];
  exampleCode?: {
    vue2: string;
    vue3: string;
  };
}

// 决策树节点类型
export interface DecisionTreeNode {
  id: string;
  question: string;
  description: string;
  options: DecisionTreeOption[];
  category?: string;
  tags?: string[];
}

export interface DecisionTreeOption {
  label: string;
  nextNodeId?: string;
  action?: string;
  conditions?: string[];
  priority?: number;
}

// 案例研究类型
export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  teamSize: number;
  timeline: string;
  challenges: string[];
  solutions: string[];
  outcomes: {
    performance: string;
    developerExperience: string;
    businessImpact: string;
  };
  keyLearnings: string[];
  migrationStrategy: string;
  techStack: string[];
}

// ROI计算器输入类型
export interface ROICalculatorInput {
  teamSize: number;
  hourlyRate: number;
  currentProductivity: number; // Vue 2下的生产效率（相对值）
  expectedProductivityGain: number; // 预期提升百分比
  maintenanceReduction: number; // 维护成本降低百分比
  projectTimeline: number; // 项目周期（月）
  trainingCost: number; // 培训成本
  toolingCost: number; // 工具成本
}

// ROI计算器结果类型
export interface ROICalculatorResult {
  totalInvestment: number;
  productivityGains: number;
  maintenanceSavings: number;
  netBenefit: number;
  roiPercentage: number;
  paybackPeriod: number; // 回收期（月）
  yearlyBenefits: number;
}

// 技能矩阵类型
export interface SkillMatrixData {
  rows: SkillMatrixRow[];
  columns: SkillMatrixColumn[];
}

export interface SkillMatrixRow {
  label: string;
  cells: SkillMatrixCell[];
}

export interface SkillMatrixColumn {
  label: string;
}

export interface SkillMatrixCell {
  level: 0 | 1 | 2 | 3 | 4; // 0=无经验, 1=初级, 2=中级, 3=高级, 4=专家
}

// 检查清单项类型
export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  dependencies?: string[];
  estimatedTime: string; // 如 '30分钟', '2小时'
  resources?: string[]; // 相关资源链接
  completed: boolean;
}

// 代码块类型
export interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  highlightedLines?: number[];
}

// 决策卡片类型
export interface DecisionCard {
  id: string;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
  recommended: boolean;
  whenToUse: string;
  whenToAvoid: string;
  examples?: string[];
}