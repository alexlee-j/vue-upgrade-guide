import { DecisionNode } from '../types';

export const decisionTreeNodes: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    question: '项目当前状态？',
    type: 'decision',
    options: [
      { label: '新项目（greenfield）', next: 'new_project' },
      { label: '成熟项目（需迁移）', next: 'migration_assess' },
      { label: '维护项目（低频更新）', next: 'maintain_mode' }
    ]
  },
  new_project: {
    id: 'new_project',
    question: '团队 Vue 3 熟悉度？',
    type: 'decision',
    options: [
      { label: '≥50% 熟悉', next: 'go_vue3', score: 90 },
      { label: '<50% 熟悉', next: 'training_plan', score: 60 }
    ]
  },
  migration_assess: {
    id: 'migration_assess',
    question: '评估迁移成本',
    type: 'decision',
    options: [
      { label: '小型项目（<100 组件）', next: 'migration_small' },
      { label: '中型项目（100-500）', next: 'migration_medium' },
      { label: '大型项目（>500）', next: 'migration_large' }
    ]
  },
  maintain_mode: {
    id: 'maintain_mode',
    question: '维护项目建议',
    type: 'action',
    action: '⚠️ 暂缓升级',
    risks: [
      '升级成本可能超过收益',
      '稳定的功能可能引入新问题',
      '团队精力分散'
    ],
    checklist: [
      '对于低频更新的维护项目，建议保持现状',
      '除非有重大安全漏洞或业务需求',
      '可以在新项目中采用 Vue 3，逐步过渡'
    ]
  },
  go_vue3: {
    id: 'go_vue3',
    type: 'action',
    action: '✅ 直接采用 Vue 3',
    question: '推荐技术栈',
    checklist: [
      'Vue 3.4+ (最新稳定版)',
      'Vite 5+ (构建工具)',
      'TypeScript (强类型)',
      'Pinia (状态管理)',
      'Vue Router 4',
      'Element Plus / Ant Design Vue 4'
    ]
  },
  training_plan: {
    id: 'training_plan',
    type: 'action',
    action: '📚 制定培训计划',
    question: '培训 + Vue 3',
    checklist: [
      'Composition API 核心概念',
      'Composables 实践',
      '响应式系统深入理解',
      'TypeScript 集成'
    ]
  },
  migration_small: {
    id: 'migration_small',
    type: 'action',
    action: '⚡ 快速迁移策略',
    question: '小型项目迁移',
    checklist: [
      '安装@vue/compat',
      '修复兼容性警告',
      '逐步重构为Composition API',
      '移除@vue/compat'
    ]
  },
  migration_medium: {
    id: 'migration_medium',
    type: 'action',
    action: '🔄 渐进式迁移',
    question: '中型项目迁移',
    risks: [
      '混合模式增加复杂度',
      '需要维护两套开发规范',
      '构建配置更复杂'
    ],
    checklist: [
      '使用@vue/compat兼容包',
      '新功能使用Vue 3开发',
      '核心模块优先迁移',
      '逐步替换旧组件'
    ]
  },
  migration_large: {
    id: 'migration_large',
    type: 'action',
    action: '🏗️ 分阶段重构',
    question: '大型项目迁移',
    risks: [
      '投入资源巨大',
      '业务开发可能受影响',
      '团队协作复杂度高'
    ],
    checklist: [
      '组建专门升级团队',
      '制定详细迁移路线图',
      '模块化分批迁移',
      '建立完善的测试体系'
    ]
  }
};