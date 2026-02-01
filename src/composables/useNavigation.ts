import { ref } from 'vue';

// 定义导航项接口
interface NavItem {
  id: string;
  title: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

// 导航数据
const navigationItems = ref<NavItem[]>([
  {
    id: 'home',
    title: '首页',
    path: '/',
    icon: '🏠'
  },
  {
    id: 'upgrade-path',
    title: '升级路径',
    path: '/upgrade-path',
    icon: '🛣️',
    children: [
      { id: 'introduction', title: '介绍', path: '/introduction' },
      { id: 'preparation', title: '准备工作', path: '/preparation' },
      { id: 'migration', title: '迁移步骤', path: '/migration' },
      { id: 'post-migration', title: '后续工作', path: '/post-migration' }
    ]
  },
  {
    id: 'core-concepts',
    title: '核心概念',
    path: '/core-concepts',
    icon: '💡',
    children: [
      { id: 'composition-api', title: '组合式 API', path: '/composition-api' },
      { id: 'reactivity', title: '响应性系统', path: '/reactivity' },
      { id: 'typescript', title: 'TypeScript 集成', path: '/typescript' },
      { id: 'performance', title: '性能优化', path: '/performance' }
    ]
  },
  {
    id: 'practical-tools',
    title: '实践工具',
    path: '/practical-tools',
    icon: '🛠️',
    children: [
      { id: 'roi-calculator', title: 'ROI 计算器', path: '/roi-calculator' },
      { id: 'decision-tree', title: '决策树', path: '/decision-tree' },
      { id: 'skill-matrix', title: '技能矩阵', path: '/skill-matrix' },
      { id: 'checklist', title: '检查清单', path: '/checklist' }
    ]
  },
  {
    id: 'case-studies',
    title: '案例研究',
    path: '/case-studies',
    icon: '📚'
  }
]);

// 当前激活的导航项
const activeNavId = ref<string>('home');

// 设置激活的导航项
const setActiveNav = (id: string) => {
  activeNavId.value = id;
};

// 根据路径获取导航项
const getNavByPath = (path: string): NavItem | undefined => {
  for (const item of navigationItems.value) {
    if (item.path === path) {
      return item;
    }
    if (item.children) {
      const child = item.children.find(child => child.path === path);
      if (child) {
        return child;
      }
    }
  }
  return undefined;
};

// 获取面包屑
const getBreadcrumb = (path: string): NavItem[] => {
  const breadcrumb: NavItem[] = [];
  
  for (const item of navigationItems.value) {
    if (item.path === path) {
      breadcrumb.push(item);
      return breadcrumb;
    }
    if (item.children) {
      const child = item.children.find(child => child.path === path);
      if (child) {
        breadcrumb.push(item);
        breadcrumb.push(child);
        return breadcrumb;
      }
    }
  }
  
  return breadcrumb;
};

export const useNavigation = () => {
  return {
    navigationItems,
    activeNavId,
    setActiveNav,
    getNavByPath,
    getBreadcrumb
  };
};