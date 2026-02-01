<template>
  <div class="risk-assessment-checklist">
    <h2>🚨 升级风险评估清单</h2>
    <p class="checklist-description">
      基于项目实际情况评估升级风险，生成应对方案
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
          <label class="checkbox-container">
            <input 
              type="checkbox" 
              v-model="selectedRisks" 
              :value="risk.id"
              class="risk-checkbox"
            />
            <span class="checkmark"></span>
            <div class="risk-content">
              <h4>{{ risk.title }}</h4>
              <p>{{ risk.description }}</p>
            </div>
          </label>
          
          <div v-if="isSelected(risk.id)" class="risk-solution">
            <h5>负责人应对策略</h5>
            <p>{{ risk.strategy }}</p>
            <div class="solution-steps">
              <h6>实施步骤</h6>
              <ul>
                <li v-for="(step, idx) in risk.steps" :key="idx">{{ step }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="checklist-actions">
      <button @click="selectAll" class="action-btn">全选</button>
      <button @click="clearAll" class="action-btn secondary">清空</button>
      <button @click="generateReport" class="action-btn primary">生成风险报告</button>
    </div>
    
    <div v-if="reportGenerated" class="risk-report">
      <h3>风险评估报告</h3>
      <div class="report-summary">
        <p>共识别 <strong>{{ selectedRisks.length }}</strong> 项风险</p>
        <p>高风险: <strong>{{ highRiskCount }}</strong> 项</p>
        <p>中风险: <strong>{{ mediumRiskCount }}</strong> 项</p>
        <p>低风险: <strong>{{ lowRiskCount }}</strong> 项</p>
      </div>
      
      <div class="detailed-strategies">
        <h4>综合应对策略</h4>
        <ul>
          <li v-for="riskId in selectedRisks" :key="riskId">
            {{ getRiskById(riskId)?.strategy }}
          </li>
        </ul>
      </div>
      
      <div class="download-section">
        <button @click="downloadReport" class="download-btn">
          📥 下载风险评估报告
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Risk {
  id: string;
  title: string;
  description: string;
  strategy: string;
  steps: string[];
  severity: 'high' | 'medium' | 'low';
}

interface RiskCategory {
  id: string;
  title: string;
  risks: Risk[];
}

const selectedRisks = ref<string[]>([]);
const reportGenerated = ref(false);

const riskCategories: RiskCategory[] = [
  {
    id: 'technical',
    title: '技术风险',
    risks: [
      {
        id: 'dependency-compatibility',
        title: '第三方依赖不支持 Vue3',
        description: '项目使用的某些第三方库可能尚未支持 Vue3 或存在兼容性问题',
        strategy: '提前调研依赖兼容性，制定替代方案或降级策略',
        steps: [
          '列出所有项目依赖',
          '检查每个依赖的 Vue3 兼容性',
          '寻找替代库或等待官方更新',
          '编写兼容性测试用例'
        ],
        severity: 'high'
      },
      {
        id: 'browser-support',
        title: '浏览器兼容性问题',
        description: 'Vue3 不再支持 IE11，可能影响部分用户的使用',
        strategy: '确认目标用户群体的浏览器使用情况，制定兼容策略',
        steps: [
          '分析用户浏览器分布数据',
          '评估继续支持旧浏览器的成本',
          '考虑使用 polyfill 或提供降级版本',
          '通知用户升级浏览器'
        ],
        severity: 'medium'
      }
    ]
  },
  {
    id: 'team',
    title: '团队风险',
    risks: [
      {
        id: 'api-resistance',
        title: '部分成员抵触 Composition API',
        description: '团队成员可能对新的 Composition API 概念存在抵触情绪',
        strategy: '安排渐进式培训，提供实践机会，建立激励机制',
        steps: [
          '开展 Composition API 基础培训',
          '安排老带新结对编程',
          '从小型功能模块开始实践',
          '分享成功案例和收益'
        ],
        severity: 'medium'
      },
      {
        id: 'skill-gap',
        title: '团队技能差距',
        description: '团队成员对 Vue3 和相关生态的技能掌握不均衡',
        strategy: '制定个性化培训计划，建立内部知识分享机制',
        steps: [
          '评估团队成员技能水平',
          '制定差异化培训内容',
          '建立内部技术分享制度',
          '设立技能认证机制'
        ],
        severity: 'high'
      }
    ]
  },
  {
    id: 'project',
    title: '项目风险',
    risks: [
      {
        id: 'iteration-impact',
        title: '升级期间影响迭代进度',
        description: '升级过程可能占用开发资源，影响正常的功能迭代',
        strategy: '选择迭代间隙小版本升级，分模块迁移，不影响核心功能',
        steps: [
          '评估当前项目迭代周期',
          '选择合适的升级窗口期',
          '制定分阶段迁移计划',
          '确保核心功能不受影响'
        ],
        severity: 'high'
      },
      {
        id: 'bug-introduction',
        title: '引入新的 bug 或性能问题',
        description: '升级过程中可能引入新的问题，影响系统稳定性',
        strategy: '加强测试覆盖，建立完善的回滚机制，逐步验证',
        steps: [
          '完善单元测试和 E2E 测试',
          '建立灰度发布机制',
          '制定详细的回滚预案',
          '加强上线后的监控'
        ],
        severity: 'high'
      }
    ]
  }
];

const isSelected = (id: string) => selectedRisks.value.includes(id);
const getRiskById = (id: string) => {
  for (const category of riskCategories) {
    const risk = category.risks.find(r => r.id === id);
    if (risk) return risk;
  }
  return null;
};

const selectAll = () => {
  selectedRisks.value = [];
  for (const category of riskCategories) {
    for (const risk of category.risks) {
      selectedRisks.value.push(risk.id);
    }
  }
};

const clearAll = () => {
  selectedRisks.value = [];
};

const generateReport = () => {
  reportGenerated.value = true;
};

const highRiskCount = computed(() => {
  return selectedRisks.value.reduce((count, riskId) => {
    const risk = getRiskById(riskId);
    return risk && risk.severity === 'high' ? count + 1 : count;
  }, 0);
});

const mediumRiskCount = computed(() => {
  return selectedRisks.value.reduce((count, riskId) => {
    const risk = getRiskById(riskId);
    return risk && risk.severity === 'medium' ? count + 1 : count;
  }, 0);
});

const lowRiskCount = computed(() => {
  return selectedRisks.value.reduce((count, riskId) => {
    const risk = getRiskById(riskId);
    return risk && risk.severity === 'low' ? count + 1 : count;
  }, 0);
});

const downloadReport = () => {
  const reportContent = `# Vue 3 升级风险评估报告

## 风险概览
- 总计识别风险: ${selectedRisks.length} 项
- 高风险: ${highRiskCount.value} 项
- 中风险: ${mediumRiskCount.value} 项
- 低风险: ${lowRiskCount.value} 项

## 详细风险及应对策略

${selectedRisks.value.map(riskId => {
  const risk = getRiskById(riskId);
  if (!risk) return '';
  return `### ${risk.title}
**描述**: ${risk.description}

**应对策略**: ${risk.strategy}

**实施步骤**:
${risk.steps.map(step => `- ${step}`).join('\n')}
`;
}).join('\n')}

## 总结建议
根据评估结果，建议优先处理高风险项，制定详细的实施计划和应急预案。
`;

  const blob = new Blob([reportContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Vue3-升级风险评估报告.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
</script>

<style scoped>
.risk-assessment-checklist {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.checklist-description {
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
  padding: 0;
}

.risk-item:last-child {
  border-bottom: none;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.checkbox-container:hover {
  background-color: var(--color-hover);
}

.risk-checkbox {
  margin-top: 0.25rem;
}

.checkmark {
  margin: 0 1rem;
  width: 18px;
  height: 18px;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}

.risk-checkbox:checked + .checkmark {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.risk-checkbox:checked + .checkmark::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.risk-content {
  flex: 1;
}

.risk-content h4 {
  margin: 0 0 0.5rem 0;
  color: var(--color-text);
}

.risk-content p {
  margin: 0;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.risk-solution {
  padding: 0 1rem 1rem 3rem;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);
  margin-top: 0.5rem;
}

.risk-solution h5 {
  margin: 1rem 0 0.5rem 0;
  color: var(--color-text);
}

.risk-solution p {
  margin: 0 0 1rem 0;
  color: var(--color-text);
}

.solution-steps h6 {
  margin: 0.5rem 0 0.25rem 0;
  color: var(--color-text);
  font-weight: 500;
}

.solution-steps ul {
  padding-left: 1.5rem;
  margin: 0;
}

.solution-steps li {
  margin-bottom: 0.25rem;
  color: var(--color-text-secondary);
}

.checklist-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn.primary {
  background-color: var(--color-primary);
  color: white;
}

.action-btn.secondary {
  background-color: var(--color-surface);
}

.action-btn:hover {
  background-color: var(--color-hover);
}

.risk-report {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1.5rem;
  margin-top: 1.5rem;
}

.risk-report h3 {
  margin-top: 0;
  color: var(--color-text);
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.report-summary {
  background-color: var(--color-surface);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.report-summary p {
  margin: 0.5rem 0;
}

.detailed-strategies {
  margin-bottom: 1.5rem;
}

.detailed-strategies h4 {
  color: var(--color-text);
  margin-bottom: 1rem;
}

.detailed-strategies ul {
  padding-left: 1.5rem;
}

.detailed-strategies li {
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
}

.download-section {
  text-align: center;
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.download-btn:hover {
  background-color: var(--color-primary-dark);
}
</style>