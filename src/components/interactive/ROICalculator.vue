<template>
  <div class="roi-calculator">
    <h3>📊 技术升级 ROI 计算器</h3>
    <p>量化评估 Vue 3 升级的投资回报率。</p>
    
    <div class="input-group">
      <div class="form-field">
        <label>团队规模（人）:</label>
        <input 
          type="number" 
          v-model.number="teamSize" 
          min="1" 
          class="form-input"
        >
      </div>
      <div class="form-field">
        <label>组件数量:</label>
        <input 
          type="number" 
          v-model.number="componentCount" 
          min="1" 
          class="form-input"
        >
      </div>
      <div class="form-field">
        <label>平均组件复杂度:</label>
        <select 
          v-model="complexity" 
          class="form-select"
        >
          <option value="low">低（简单展示）</option>
          <option value="medium">中（业务逻辑）</option>
          <option value="high">高（复杂交互）</option>
        </select>
      </div>
      <div class="form-field">
        <label>开发人员日薪（元）:</label>
        <input 
          type="number" 
          v-model.number="dailySalary" 
          min="0" 
          class="form-input"
        >
      </div>
    </div>
    
    <div class="button-group">
      <button @click="calculateROI" class="btn">计算 ROI</button>
    </div>
    
    <div v-if="roiResults" class="results">
      <div class="result-card">
        <h4>迁移成本</h4>
        <p class="value">{{ roiResults.migrationCost }} 人天</p>
        <p class="money">≈ ¥{{ roiResults.migrationMoney.toLocaleString() }}</p>
      </div>
      <div class="result-card">
        <h4>年度收益</h4>
        <ul class="benefits-list">
          <li>开发效率提升: {{ roiResults.efficiencyGain }}%</li>
          <li>Bug 减少: {{ roiResults.bugReduction }}%</li>
          <li>维护成本降低: {{ roiResults.maintenanceReduction }}%</li>
        </ul>
      </div>
      <div class="result-card" :class="roiResults.roiClass">
        <h4>ROI</h4>
        <p class="value">{{ roiResults.roi }}%</p>
        <p class="recommendation">{{ roiResults.roiRecommendation }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 响应式数据
const teamSize = ref(5);
const componentCount = ref(200);
const complexity = ref<'low' | 'medium' | 'high'>('medium');
const dailySalary = ref(1000);
const roiResults = ref<any>(null);

// 复杂度因子
const complexityFactors = {
  low: 0.5,
  medium: 1,
  high: 2
};

// 计算ROI
const calculateROI = () => {
  const factor = complexityFactors[complexity.value];
  
  // 迁移成本计算
  const baseHours = componentCount.value * 0.5 * factor; // 每个组件0.5天 * 复杂度因子
  const trainingHours = teamSize.value * 20; // 每人20小时培训
  const migrationDays = Math.ceil((baseHours + trainingHours) / 8);
  const migrationCost = migrationDays * dailySalary.value;
  
  // 效益计算
  const efficiencyGain = complexity.value === 'high' ? 30 : complexity.value === 'medium' ? 20 : 15;
  const bugReduction = 25;
  const maintenanceReduction = 20;
  
  // 年度效益计算 (估算)
  const yearlyBenefit = teamSize.value * 250 * dailySalary.value * (efficiencyGain / 100) * 0.3; // 效率提升带来的人力节省
  
  // ROI计算
  const roi = Math.round((yearlyBenefit / migrationCost - 1) * 100);
  
  // 推荐等级
  let recommendation = '';
  let roiClass = '';
  if (roi > 100) {
    recommendation = '✅ 强烈推荐升级';
    roiClass = 'positive';
  } else if (roi > 50) {
    recommendation = '👍 建议升级';
    roiClass = 'positive';
  } else if (roi > 0) {
    recommendation = '⚖️ 谨慎评估';
    roiClass = 'negative';
  } else {
    recommendation = '❌ 暂不建议升级';
    roiClass = 'negative';
  }
  
  roiResults.value = {
    migrationCost,
    migrationMoney: migrationCost,
    efficiencyGain,
    bugReduction,
    maintenanceReduction,
    roi,
    roiRecommendation: recommendation,
    roiClass
  };
};
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

.form-select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-size: 1rem;
  background-color: white;
}

.button-group {
  margin: 1rem 0;
}

.results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.result-card {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--box-shadow);
  border: 1px solid #eee;
}

.result-card.positive {
  border-color: var(--success);
  background: #f8fff8;
}

.result-card.negative {
  border-color: var(--danger);
  background: #fff8f8;
}

.result-card h4 {
  margin: 0 0 1rem 0;
  color: var(--secondary);
}

.result-card .value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark);
  margin: 0.5rem 0;
}

.result-card .money {
  color: var(--secondary);
  font-size: 0.9rem;
}

.result-card .recommendation {
  font-weight: bold;
  margin-top: 0.5rem;
}

.positive .recommendation {
  color: var(--success);
}

.negative .recommendation {
  color: var(--danger);
}

.benefits-list {
  text-align: left;
  margin: 1rem 0;
  padding-left: 1rem;
}

@media (max-width: 768px) {
  .input-group {
    grid-template-columns: 1fr;
  }
  
  .results {
    grid-template-columns: 1fr;
  }
}
</style>