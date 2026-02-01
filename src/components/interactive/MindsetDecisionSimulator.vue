<template>
  <div class="mindset-decision-simulator">
    <h2>🧠 心智模型决策模拟器</h2>
    <p class="simulator-description">
      通过交互式决策场景，为您匹配最适合的 API 方案和执行建议
    </p>
    
    <div class="simulation-form">
      <div class="form-group">
        <label>项目类型</label>
        <div class="radio-group">
          <label class="radio-option">
            <input 
              type="radio" 
              v-model="formData.projectType" 
              value="small-tool"
            />
            <span class="radio-label">小型工具类组件</span>
          </label>
          <label class="radio-option">
            <input 
              type="radio" 
              v-model="formData.projectType" 
              value="large-business"
            />
            <span class="radio-label">大型中后台业务</span>
          </label>
        </div>
      </div>
      
      <div class="form-group">
        <label>团队 Vue2 熟练度</label>
        <div class="radio-group">
          <label class="radio-option">
            <input 
              type="radio" 
              v-model="formData.teamProficiency" 
              value="beginner"
            />
            <span class="radio-label">初级（刚接触Vue2）</span>
          </label>
          <label class="radio-option">
            <input 
              type="radio" 
              v-model="formData.teamProficiency" 
              value="intermediate"
            />
            <span class="radio-label">中级（熟练使用Vue2）</span>
          </label>
          <label class="radio-option">
            <input 
              type="radio" 
              v-model="formData.teamProficiency" 
              value="advanced"
            />
            <span class="radio-label">高级（深度理解Vue2）</span>
          </label>
        </div>
      </div>
      
      <div class="form-group">
        <label>项目迭代周期</label>
        <div class="radio-group">
          <label class="radio-option">
            <input 
              type="radio" 
              v-model="formData.iterationCycle" 
              value="tight"
            />
            <span class="radio-label">紧张（短期快速迭代）</span>
          </label>
          <label class="radio-option">
            <input 
              type="radio" 
              v-model="formData.iterationCycle" 
              value="flexible"
            />
            <span class="radio-label">灵活（长期稳定迭代）</span>
          </label>
        </div>
      </div>
      
      <button @click="calculateRecommendation" class="calculate-btn">
        获取推荐方案
      </button>
    </div>
    
    <div v-if="recommendation" class="recommendation-result">
      <h3>为您推荐的方案</h3>
      <div class="result-card">
        <h4>API 方案</h4>
        <p>{{ recommendation.apiScheme }}</p>
        
        <h4>负责人执行建议</h4>
        <p>{{ recommendation.executionAdvice }}</p>
        
        <h4>预期收益</h4>
        <p>{{ recommendation.expectedBenefits }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

interface FormData {
  projectType: 'small-tool' | 'large-business' | '';
  teamProficiency: 'beginner' | 'intermediate' | 'advanced' | '';
  iterationCycle: 'tight' | 'flexible' | '';
}

interface Recommendation {
  apiScheme: string;
  executionAdvice: string;
  expectedBenefits: string;
}

const formData = reactive<FormData>({
  projectType: '',
  teamProficiency: '',
  iterationCycle: ''
});

const recommendation = ref<Recommendation | null>(null);

const calculateRecommendation = () => {
  if (!formData.projectType || !formData.teamProficiency || !formData.iterationCycle) {
    alert('请完成所有选项的选择');
    return;
  }

  // 根据选择生成推荐
  let apiScheme = '';
  let executionAdvice = '';
  let expectedBenefits = '';

  if (formData.projectType === 'large-business' && formData.iterationCycle === 'flexible') {
    apiScheme = '全量迁移 Composition API';
    executionAdvice = '分阶段培训，先在新功能中使用 Composition API，逐步重构旧组件';
    expectedBenefits = '提升复杂业务可维护性，降低长期维护成本';
  } else if (formData.projectType === 'small-tool' && formData.iterationCycle === 'tight') {
    apiScheme = '保留 Options API 或谨慎混用';
    executionAdvice = '对于小型工具组件无需强制迁移，禁止在现有组件中混用两种API';
    expectedBenefits = '避免短期迭代风险，保持开发节奏稳定';
  } else if (formData.teamProficiency === 'beginner') {
    apiScheme = '渐进式迁移，从简单组件开始';
    executionAdvice = '安排专门的 Composition API 培训，从简单的功能性组件开始尝试';
    expectedBenefits = '逐步提升团队技能，降低学习曲线陡峭度';
  } else {
    apiScheme = '按功能模块分批迁移';
    executionAdvice = '根据功能模块的重要性分批迁移，先迁移非核心功能';
    expectedBenefits = '平衡开发效率与技术升级，降低整体风险';
  }

  recommendation.value = {
    apiScheme,
    executionAdvice,
    expectedBenefits
  };
};
</script>

<style scoped>
.mindset-decision-simulator {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.simulator-description {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.simulation-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text);
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.radio-option {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-option input[type="radio"] {
  margin-right: 0.5rem;
}

.calculate-btn {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.calculate-btn:hover {
  background-color: var(--color-primary-dark);
}

.recommendation-result {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.result-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
}

.result-card h4 {
  margin-top: 0;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.25rem;
}
</style>