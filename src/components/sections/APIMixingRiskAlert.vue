<template>
  <div class="api-mixing-risk-alert">
    <h2>⚠️ API 混用风险警示模块</h2>
    <p class="alert-description">
      了解 Vue 2 Options API 与 Vue 3 Composition API 混用的具体风险点及解决方案
    </p>
    
    <div class="risk-categories">
      <div 
        v-for="category in riskCategories" 
        :key="category.id" 
        class="risk-category"
      >
        <h3>{{ category.title }}</h3>
        <div 
          v-for="risk in category.risks" 
          :key="risk.id" 
          class="risk-item"
        >
          <div class="risk-header" @click="toggleRisk(risk.id)">
            <h4>{{ risk.title }}</h4>
            <span class="toggle-icon">{{ expandedRisks.includes(risk.id) ? '▼' : '▶' }}</span>
          </div>
          
          <div 
            v-if="expandedRisks.includes(risk.id)" 
            class="risk-details"
          >
            <div class="risk-detail">
              <h5>风险描述</h5>
              <p>{{ risk.description }}</p>
            </div>
            
            <div class="risk-detail">
              <h5>反例代码</h5>
              <pre><code class="language-javascript">{{ risk.badExample }}</code></pre>
            </div>
            
            <div class="risk-detail">
              <h5>解决方案</h5>
              <p>{{ risk.solution }}</p>
              <ul>
                <li v-for="step in risk.solutionSteps" :key="step">{{ step }}</li>
              </ul>
            </div>
            
            <div class="risk-detail">
              <h5>负责人行动建议</h5>
              <p>{{ risk.managerAdvice }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="risk-prevention">
      <h3>预防措施</h3>
      <ul>
        <li>制定团队编码规范文档，明确 API 使用规则</li>
        <li>在代码评审时重点检查 API 混用问题</li>
        <li>使用 ESLint 规则防止混用（如 vue/no-mixed-apis）</li>
        <li>定期进行团队培训，强化 API 使用规范</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Risk {
  id: string;
  title: string;
  description: string;
  badExample: string;
  solution: string;
  solutionSteps: string[];
  managerAdvice: string;
}

interface RiskCategory {
  id: string;
  title: string;
  risks: Risk[];
}

const expandedRisks = ref<string[]>([]);

const toggleRisk = (id: string) => {
  if (expandedRisks.value.includes(id)) {
    expandedRisks.value = expandedRisks.value.filter(riskId => riskId !== id);
  } else {
    expandedRisks.value.push(id);
  }
};

const riskCategories: RiskCategory[] = [
  {
    id: 'response',
    title: '响应式系统冲突',
    risks: [
      {
        id: 'response-conflict',
        title: 'data 与 ref 响应式逻辑混乱',
        description: '在同一组件中同时使用 Vue 2 的 data 选项和 Vue 3 的 ref，会导致响应式系统混乱，难以追踪数据流向。',
        badExample: `// 错误示例：混用 Vue 2 data 和 Vue 3 ref
export default {
  data() {
    return {
      message: 'Hello from data'
    }
  },
  setup() {
    const count = ref(0);
    const messageFromSetup = ref('Hello from setup');
    
    return {
      count,
      messageFromSetup
    }
  }
};`,
        solution: '选择一种 API 风格并在整个项目中保持一致性。如果必须混用，则需要特别小心管理数据流。',
        solutionSteps: [
          '评估项目情况，决定主要使用哪种 API',
          '在项目中建立明确的 API 使用规则',
          '对团队进行相关培训，确保每个人都理解规则',
          '在代码审查中重点关注 API 使用的一致性'
        ],
        managerAdvice: '制定团队编码规范文档，明确规定何时使用哪种 API，并在代码评审时重点检查 API 混用问题。'
      }
    ]
  },
  {
    id: 'lifecycle',
    title: '生命周期钩子冲突',
    risks: [
      {
        id: 'lifecycle-conflict',
        title: '生命周期钩子与 setup 函数冲突',
        description: '在使用 Composition API 的 setup 函数时，同时使用 Vue 2 的生命周期选项可能导致执行顺序混乱。',
        badExample: `// 错误示例：混用生命周期钩子
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    console.log('Created hook called');
  },
  mounted() {
    console.log('Mounted hook called');
  },
  setup() {
    onMounted(() => {
      console.log('Composed mounted hook called');
    });
    
    return {};
  }
};`,
        solution: '统一使用一种生命周期管理方式，要么全部使用 Options API 的生命周期钩子，要么全部使用 Composition API 的生命周期函数。',
        solutionSteps: [
          '选择统一的生命周期管理方式',
          '如果是新功能，优先使用 Composition API 的生命周期函数',
          '如果是旧代码改造，逐步统一到一种方式',
          '使用 ESLint 规则检测混用情况'
        ],
        managerAdvice: '在团队中建立生命周期管理的统一规范，并通过代码审查确保执行。'
      }
    ]
  },
  {
    id: 'props',
    title: 'Props 处理不一致',
    risks: [
      {
        id: 'props-conflict',
        title: 'Options API 与 Composition API 的 props 处理差异',
        description: '两种 API 对 props 的处理方式不同，混用时容易出现访问方式混乱的问题。',
        badExample: `// 错误示例：props 处理不一致
export default {
  props: ['user', 'config'],
  data() {
    return {
      localUser: this.user // Options API 风格
    }
  },
  setup(props) {
    // 直接访问 props - Composition API 风格
    const processedConfig = computed(() => processConfig(props.config));
    
    return {
      processedConfig
    }
  }
};`,
        solution: '在使用 Composition API 时，始终通过 setup 函数参数接收 props，并遵循 Composition API 的访问方式。',
        solutionSteps: [
          '确保在 setup 函数中正确接收和使用 props',
          '避免在 data 中直接访问 props',
          '使用 toRefs 等工具正确处理响应式 props',
          '对团队进行 Composition API props 处理的专项培训'
        ],
        managerAdvice: '安排专门的培训课程，讲解 Composition API 中 props 的正确处理方式，确保团队成员理解差异。'
      }
    ]
  }
];
</script>

<style scoped>
.api-mixing-risk-alert {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.alert-description {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.risk-categories {
  margin-bottom: 1.5rem;
}

.risk-category {
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: hidden;
}

.risk-category h3 {
  margin: 0;
  padding: 1rem;
  background-color: var(--color-warning-light);
  color: var(--color-warning-dark);
  font-size: 1.1rem;
}

.risk-item {
  border-bottom: 1px solid var(--color-border);
}

.risk-item:last-child {
  border-bottom: none;
}

.risk-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-bg);
  cursor: pointer;
  transition: background-color 0.2s;
}

.risk-header:hover {
  background-color: var(--color-hover);
}

.risk-header h4 {
  margin: 0;
  color: var(--color-text);
}

.toggle-icon {
  font-size: 0.8rem;
}

.risk-details {
  padding: 1rem;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);
}

.risk-detail {
  margin-bottom: 1.5rem;
}

.risk-detail h5 {
  margin-top: 0;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.25rem;
}

.risk-detail pre {
  background-color: var(--color-code-bg);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0.5rem 0;
}

.risk-prevention {
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.risk-prevention h3 {
  margin-top: 0;
  color: var(--color-text);
}

.risk-prevention ul {
  padding-left: 1.5rem;
}

.risk-prevention li {
  margin-bottom: 0.5rem;
}
</style>