import { DecisionTreeNode } from '@/types/components';

export const decisionTree: {
  nodes: DecisionTreeNode[];
  connections: { from: string; to: string }[];
} = {
  nodes: [
    {
      id: 'start',
      question: '开始评估 Vue 3 升级',
      description: '确定是否开始 Vue 3 升级流程',
      options: [
        { label: '是', nextNodeId: 'project-size' },
        { label: '否', action: '暂不升级' }
      ],
      category: 'initial'
    },
    {
      id: 'project-size',
      question: '项目规模如何？',
      description: '评估项目的复杂程度',
      options: [
        { label: '小型 (< 10k 行)', nextNodeId: 'team-experience' },
        { label: '中型 (10k-50k 行)', nextNodeId: 'team-experience' },
        { label: '大型 (> 50k 行)', nextNodeId: 'critical-system' }
      ],
      category: 'assessment'
    },
    {
      id: 'critical-system',
      question: '是否为关键业务系统？',
      description: '评估系统的重要性和风险承受能力',
      options: [
        { label: '是', nextNodeId: 'incremental-approach' },
        { label: '否', nextNodeId: 'full-migration' }
      ],
      category: 'risk'
    },
    {
      id: 'team-experience',
      question: '团队对 Vue 3 的熟悉程度？',
      description: '评估团队的技术准备情况',
      options: [
        { label: '非常熟悉', nextNodeId: 'timeline-assessment' },
        { label: '一般了解', nextNodeId: 'training-plan' },
        { label: '完全陌生', nextNodeId: 'training-plan' }
      ],
      category: 'team-readiness'
    },
    {
      id: 'training-plan',
      question: '制定培训计划',
      description: '为团队提供必要的 Vue 3 培训',
      options: [
        { label: '已准备好', nextNodeId: 'timeline-assessment' }
      ],
      category: 'preparation'
    },
    {
      id: 'timeline-assessment',
      question: '时间线是否宽松？',
      description: '评估项目的时间安排',
      options: [
        { label: '是', nextNodeId: 'full-migration' },
        { label: '否', nextNodeId: 'incremental-approach' }
      ],
      category: 'planning'
    },
    {
      id: 'incremental-approach',
      question: '采用渐进式升级',
      description: '逐步迁移组件，降低风险',
      options: [
        { label: '开始实施', action: '渐进式升级计划' }
      ],
      category: 'implementation'
    },
    {
      id: 'full-migration',
      question: '进行全面迁移',
      description: '一次性完成整个项目的升级',
      options: [
        { label: '开始实施', action: '全面迁移计划' }
      ],
      category: 'implementation'
    }
  ],
  connections: [
    { from: 'start', to: 'project-size' },
    { from: 'project-size', to: 'critical-system' },
    { from: 'project-size', to: 'team-experience' },
    { from: 'critical-system', to: 'incremental-approach' },
    { from: 'critical-system', to: 'full-migration' },
    { from: 'team-experience', to: 'timeline-assessment' },
    { from: 'team-experience', to: 'training-plan' },
    { from: 'training-plan', to: 'timeline-assessment' },
    { from: 'timeline-assessment', to: 'full-migration' },
    { from: 'timeline-assessment', to: 'incremental-approach' },
    { from: 'incremental-approach', to: 'end' },
    { from: 'full-migration', to: 'end' }
  ]
};