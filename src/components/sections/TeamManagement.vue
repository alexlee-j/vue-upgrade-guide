<template>
  <section class="team-management">
    <h2>👥 团队管理视角</h2>
    <p>从团队建设和管理的角度看 Vue 3 升级。</p>
    
    <div class="card">
      <h3>团队技能图谱评估</h3>
      <div class="highlight">
        <h2>团队 Vue 3 准备度评估</h2>
        <p>评估团队成员对 Vue 3 的熟悉程度，制定针对性的培训计划</p>
      </div>
      
      <div class="input-group">
        <div class="form-field">
          <label>团队总人数：</label>
          <input 
            type="number" 
            v-model.number="teamSize" 
            min="1" 
            class="form-input"
          >
        </div>
        <div class="form-field">
          <label>熟悉 Vue 3 的人数：</label>
          <input 
            type="number" 
            v-model.number="vue3Familiar" 
            min="0" 
            :max="teamSize"
            class="form-input"
          >
        </div>
        <div class="form-field">
          <label>平均开发经验（年）：</label>
          <input 
            type="number" 
            v-model.number="devExp" 
            min="0" 
            class="form-input"
          >
        </div>
      </div>
      
      <div class="button-group">
        <button @click="calculateTeamReadiness" class="btn">评估团队准备度</button>
      </div>
      
      <div v-if="readinessResult" class="result-card" :class="readinessColorClass">
        <h4>评估结果</h4>
        <div class="readiness-details">
          <div class="readiness-level">{{ readinessResult.level }}</div>
          <div>熟悉率: {{ readinessResult.familiarityRate.toFixed(1) }}% ({{ vue3Familiar }}/{{ teamSize }})</div>
          <div class="readiness-recommendation">{{ readinessResult.recommendation }}</div>
          <div>平均经验: {{ devExp }}年</div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3>培训计划与学习路径</h3>
      <div class="training-plan">
        <h4>📋 分阶段培训计划</h4>
        <ol>
          <li><strong>基础阶段（1-2周）</strong>：Composition API 核心概念、响应式系统变化</li>
          <li><strong>实践阶段（2-3周）</strong>：Composables 实践、代码迁移技巧</li>
          <li><strong>高级阶段（2-3周）</strong>：性能优化、TypeScript 集成、最佳实践</li>
          <li><strong>巩固阶段（持续）</strong>：Code Review、知识分享、经验总结</li>
        </ol>
      </div>
    </div>
    
    <div class="card">
      <h3>Code Review 标准制定</h3>
      <ul class="checklist">
        <ChecklistItem 
          v-for="(item, index) in reviewStandards" 
          :key="index"
          :id="`review-${index}`"
          v-model:checked="reviewChecked[index]"
        >
          {{ item }}
        </ChecklistItem>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ChecklistItem from '../shared/ChecklistItem.vue';

// 响应式数据
const teamSize = ref(5);
const vue3Familiar = ref(1);
const devExp = ref(3);
const readinessResult = ref<any>(null);
const reviewChecked = ref<boolean[]>(Array(6).fill(false));

// Code Review 标准
const reviewStandards = [
  '是否使用 Composition API 组织逻辑',
  'Composables 是否合理封装和复用',
  '响应式数据是否正确使用 ref/reactive',
  '生命周期钩子是否正确使用',
  'TypeScript 类型定义是否完善',
  '性能优化是否考虑（v-memo、虚拟滚动等）'
];

// 计算团队准备度
const calculateTeamReadiness = () => {
  const familiarityRate = (vue3Familiar.value / teamSize.value) * 100;
  
  let level = '';
  let recommendation = '';
  let color = '';
  
  if (familiarityRate >= 70) {
    level = '高准备度';
    recommendation = '团队已具备较好基础，可直接开始Vue 3项目';
    color = 'success';
  } else if (familiarityRate >= 30) {
    level = '中等准备度';
    recommendation = '需要为期1-2个月的集中培训';
    color = 'warning';
  } else {
    level = '低准备度';
    recommendation = '建议安排2-3个月的系统培训和实践';
    color = 'danger';
  }
  
  readinessResult.value = {
    level,
    recommendation,
    familiarityRate
  };
};

// 根据准备度级别确定颜色类
const readinessColorClass = computed(() => {
  if (!readinessResult.value) return '';
  
  const level = readinessResult.value.level;
  if (level.includes('高')) return 'result-card-success';
  if (level.includes('中')) return 'result-card-warning';
  return 'result-card-danger';
});
</script>

<style scoped>
.input-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-size: 1rem;
}

.button-group {
  margin: 1rem 0;
}

.highlight {
  background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
  padding: 2rem;
  border-radius: var(--border-radius);
  margin: 2rem 0;
  text-align: center;
}

.highlight h2 {
  color: white;
  margin-bottom: 1rem;
}

.highlight p {
  color: white;
  opacity: 0.9;
  font-size: 1.1rem;
}

.training-plan {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border-left: 4px solid var(--primary);
}

.training-plan ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.training-plan li {
  margin: 0.5rem 0;
}

.result-card {
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  text-align: center;
}

.result-card-success {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.result-card-warning {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

.result-card-danger {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.readiness-level {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.readiness-recommendation {
  font-style: italic;
  margin: 0.5rem 0;
}

.checklist {
  padding-left: 0;
}

@media (max-width: 768px) {
  .input-group {
    grid-template-columns: 1fr;
  }
}
</style>