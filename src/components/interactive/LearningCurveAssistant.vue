<template>
  <div class="learning-curve-assistant">
    <h2>🎓 学习曲线辅助工具</h2>
    <p class="assistant-description">
      为不同角色提供定制化的 Composition API 学习路径
    </p>
    
    <div class="role-selector">
      <button 
        v-for="role in roles" 
        :key="role.id"
        :class="['role-btn', { active: selectedRole === role.id }]"
        @click="selectedRole = role.id"
      >
        {{ role.name }}
      </button>
    </div>
    
    <div class="learning-path" v-if="selectedRole">
      <h3>{{ getSelectedRole().name }} 学习路径</h3>
      <div class="path-stages">
        <div 
          v-for="(stage, index) in getSelectedRole().stages" 
          :key="index" 
          class="path-stage"
        >
          <div class="stage-header">
            <div class="stage-number">{{ index + 1 }}</div>
            <h4>{{ stage.title }}</h4>
          </div>
          <div class="stage-content">
            <p>{{ stage.description }}</p>
            <ul>
              <li v-for="(item, idx) in stage.items" :key="idx">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="download-section">
        <h4>下载学习计划表</h4>
        <p>获取包含时间节点和考核标准的团队学习计划表模板</p>
        <button @click="downloadTemplate" class="download-btn">
          📥 下载 {{ getSelectedRole().name }} 学习计划表
        </button>
      </div>
    </div>
    
    <div class="progress-tracker">
      <h3>团队学习进度跟踪</h3>
      <div class="progress-overview">
        <div class="progress-item">
          <div class="progress-label">初级工程师</div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: juniorProgress + '%' }"></div>
          </div>
          <div class="progress-value">{{ juniorProgress }}%</div>
        </div>
        <div class="progress-item">
          <div class="progress-label">中级工程师</div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: intermediateProgress + '%' }"></div>
          </div>
          <div class="progress-value">{{ intermediateProgress }}%</div>
        </div>
        <div class="progress-item">
          <div class="progress-label">高级工程师</div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: seniorProgress + '%' }"></div>
          </div>
          <div class="progress-value">{{ seniorProgress }}%</div>
        </div>
      </div>
      
      <div class="progress-controls">
        <div class="control-group">
          <label>初级工程师进度:</label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            v-model="juniorProgress"
            class="progress-slider"
          />
        </div>
        <div class="control-group">
          <label>中级工程师进度:</label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            v-model="intermediateProgress"
            class="progress-slider"
          />
        </div>
        <div class="control-group">
          <label>高级工程师进度:</label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            v-model="seniorProgress"
            class="progress-slider"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Role {
  id: string;
  name: string;
  stages: {
    title: string;
    description: string;
    items: string[];
  }[];
}

const selectedRole = ref<string>('junior');
const juniorProgress = ref(30);
const intermediateProgress = ref(60);
const seniorProgress = ref(80);

const roles: Role[] = [
  {
    id: 'junior',
    name: '初级工程师',
    stages: [
      {
        title: '基础掌握',
        description: '先掌握 Composition API 的基本概念和核心函数',
        items: [
          '理解 ref 和 reactive 的区别',
          '学会使用 computed 和 watch',
          '掌握生命周期函数的使用'
        ]
      },
      {
        title: '实践应用',
        description: '通过仿写简单组件加深理解',
        items: [
          '仿写计数器、待办事项等简单组件',
          '参与小型模块的重构工作',
          '在导师指导下编写 Composition API 代码'
        ]
      },
      {
        title: '能力提升',
        description: '逐步独立承担 Composition API 组件开发',
        items: [
          '独立开发中等复杂度的业务组件',
          '参与代码评审，学习最佳实践',
          '开始封装简单的可复用逻辑'
        ]
      }
    ]
  },
  {
    id: 'intermediate',
    name: '中级工程师',
    stages: [
      {
        title: '深入理解',
        description: '深入理解 Composition API 的设计原理',
        items: [
          '掌握 Proxy 响应式原理',
          '理解 provide/inject 在 Composition API 中的应用',
          '学习高级响应式 API 如 readonly、shallowRef 等'
        ]
      },
      {
        title: '逻辑封装',
        description: '能够封装可复用的 Composition 函数',
        items: [
          '封装常用的业务逻辑（如表单验证、数据请求）',
          '创建通用的工具函数',
          '指导初级工程师使用 Composition API'
        ]
      },
      {
        title: '架构设计',
        description: '参与 Composition API 的架构设计',
        items: [
          '设计团队的 Composition API 使用规范',
          '创建项目级的可复用组合式函数',
          '优化现有代码的 Composition API 使用方式'
        ]
      }
    ]
  },
  {
    id: 'senior',
    name: '负责人/技术专家',
    stages: [
      {
        title: '战略规划',
        description: '制定团队的 Composition API 推广策略',
        items: [
          '制定培训计划和时间表',
          '评估项目迁移的优先级和风险',
          '建立团队学习激励机制'
        ]
      },
      {
        title: '工程化配置',
        description: '搭建支持 Composition API 的工程化环境',
        items: [
          '配置 TypeScript 类型检查规则',
          '集成 ESLint 和 Prettier',
          '建立代码审查机制'
        ]
      },
      {
        title: '监控与优化',
        description: '监控团队学习进度并优化推广策略',
        items: [
          '定期评估团队整体技能水平',
          '调整培训内容和方式',
          '收集反馈并持续改进'
        ]
      }
    ]
  }
];

const getSelectedRole = () => {
  return roles.find(role => role.id === selectedRole.value) || roles[0];
};

const downloadTemplate = () => {
  // 创建模拟的学习计划表内容
  const templateContent = `# ${getSelectedRole().name} Composition API 学习计划表

## 学习目标
${getSelectedRole().stages.map(stage => `- ${stage.title}: ${stage.description}`).join('\n')}

## 学习资源
- Vue 3 官方文档
- Composition API 最佳实践
- 团队内部技术分享资料

## 时间安排
- 第1-2周: 基础概念学习
- 第3-4周: 简单项目实践
- 第5-6周: 复杂项目应用
- 第7-8周: 代码评审与优化

## 考核标准
- 理论知识测试: 80分以上
- 实践项目评估: 代码质量和规范性
- 团队协作评价: 知识分享和协作能力

## 学习反馈
- 每周学习心得
- 遇到的问题和解决方案
- 对培训内容的建议
`;

  // 创建并下载文件
  const blob = new Blob([templateContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${getSelectedRole().name}-学习计划表.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
</script>

<style scoped>
.learning-curve-assistant {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.assistant-description {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.role-selector {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.role-btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  min-width: 120px;
}

.role-btn.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.learning-path {
  margin-bottom: 2rem;
}

.path-stages {
  margin-top: 1rem;
}

.path-stage {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.stage-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.stage-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-weight: bold;
}

.stage-header h4 {
  margin: 0;
  color: var(--color-text);
}

.stage-content {
  padding: 1rem;
}

.stage-content p {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.stage-content ul {
  padding-left: 1.5rem;
}

.stage-content li {
  margin-bottom: 0.5rem;
}

.download-section {
  padding: 1rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  margin-top: 1rem;
}

.download-section h4 {
  margin-top: 0;
  color: var(--color-text);
}

.download-btn {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.download-btn:hover {
  background-color: var(--color-primary-dark);
}

.progress-tracker {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.progress-tracker h3 {
  margin-top: 0;
  color: var(--color-text);
}

.progress-overview {
  margin-bottom: 1.5rem;
}

.progress-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.progress-label {
  width: 120px;
  font-weight: 500;
  color: var(--color-text);
}

.progress-bar {
  flex: 1;
  height: 20px;
  background-color: var(--color-border);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 10px;
  transition: width 0.3s ease;
}

.progress-value {
  width: 40px;
  text-align: center;
  font-weight: 500;
  color: var(--color-text);
  margin-left: 1rem;
}

.progress-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.control-group label {
  width: 120px;
  font-weight: 500;
  color: var(--color-text);
}

.progress-slider {
  flex: 1;
}
</style>