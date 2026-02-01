import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-platform',
    title: '中型电商平台',
    description: '50人团队，500+组件，2年升级历程',
    challenges: [
      '组件间逻辑耦合严重，难以维护',
      '大型组件（购物车、订单）超过500行代码',
      '团队对Composition API接受度不一',
      '担心升级影响业务稳定性'
    ],
    solutions: [
      '成立专项升级小组，制定18个月升级计划',
      '采用渐进式升级，新功能使用Vue 3',
      '开发内部Composables库，统一最佳实践',
      '建立自动化测试保障升级质量'
    ],
    results: [
      '开发效率提升35%',
      '代码可维护性显著改善',
      '新人上手时间缩短40%',
      '年节省人力成本约200万'
    ],
    teamSize: 50,
    componentCount: 500,
    duration: '2年'
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS 管理后台',
    description: '15人团队，200+组件，3个月快速迁移',
    challenges: [
      '遗留部分技术债务',
      '团队需要快速掌握Vue 3',
      '保证业务连续性'
    ],
    solutions: [
      '全员培训Composition API',
      '使用@vue/compat兼容包平滑过渡',
      '边学边做，快速迭代',
      '及时总结最佳实践'
    ],
    results: [
      '3个月内完成迁移',
      '性能提升25%',
      '代码量减少15%',
      '团队技术能力全面提升'
    ],
    teamSize: 15,
    componentCount: 200,
    duration: '3个月'
  },
  {
    id: 'startup-product',
    title: '初创公司产品',
    description: '8人团队，80+组件，全新项目采用Vue 3',
    challenges: [
      '团队经验参差不齐',
      '需要快速迭代产品',
      '技术选型需考虑长远'
    ],
    solutions: [
      '从项目开始就采用Vue 3',
      '使用Composition API组织代码',
      '结合TypeScript提升代码质量',
      '选用Vite提升开发体验'
    ],
    results: [
      '避免了迁移成本',
      '享受Vue 3全部优势',
      '开发效率提升40%',
      '团队技能现代化'
    ],
    teamSize: 8,
    componentCount: 80,
    duration: '6个月'
  }
];