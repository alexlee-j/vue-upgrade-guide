<template>
  <section class="tech-debt">
    <h2>🔧 技术债务管理</h2>
    <p>识别和管理 Vue 2 到 Vue 3 升级过程中的技术债务。</p>
    
    <div class="card">
      <div class="highlight">
        <h2>技术债务识别清单</h2>
        <p>系统性地识别项目中的技术债务，为升级做好准备</p>
      </div>
      
      <div class="card warning-card">
        <h3>🔍 历史包袱识别</h3>
        <ul>
          <li><strong>Mixins 滥用：</strong>查找过度使用的 Mixins，考虑重构为 Composables</li>
          <li><strong>深层嵌套组件：</strong>Vuex 状态管理是否过于复杂，考虑使用 Pinia</li>
          <li><strong>事件总线：</strong>$emit/$on 滥用，考虑使用 provide/inject 或外部状态管理</li>
          <li><strong>响应式限制：</strong>Object.defineProperty 的局限性导致的代码妥协</li>
          <li><strong>构建工具：</strong>Webpack 4 或更早版本，考虑升级到 Vite</li>
        </ul>
      </div>
      
      <h3>偿还优先级</h3>
      <div class="input-group">
        <div class="form-field">
          <label>高优先级债务数量：</label>
          <input 
            type="number" 
            v-model.number="highDebt" 
            min="0" 
            class="form-input"
          >
        </div>
        <div class="form-field">
          <label>中优先级债务数量：</label>
          <input 
            type="number" 
            v-model.number="mediumDebt" 
            min="0" 
            class="form-input"
          >
        </div>
        <div class="form-field">
          <label>低优先级债务数量：</label>
          <input 
            type="number" 
            v-model.number="lowDebt" 
            min="0" 
            class="form-input"
          >
        </div>
      </div>
      
      <div class="button-group">
        <button @click="calculateDebtPriority" class="btn">计算偿还优先级</button>
      </div>
      
      <div v-if="debtResult" class="result-card" :class="debtColorClass">
        <h4>债务偿还建议</h4>
        <div class="debt-details">
          <div class="priority-level">{{ debtResult.level }}</div>
          <div>债务总量: {{ debtResult.totalDebt }}项</div>
          <div>加权得分: {{ debtResult.priorityScore.toFixed(2) }}</div>
          <div class="strategy">{{ debtResult.strategy }}</div>
          <div>高优: {{ highDebt }}, 中优: {{ mediumDebt }}, 低优: {{ lowDebt }}</div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3>债务偿还策略</h3>
      <div class="strategy-grid">
        <div class="strategy-item high-priority">
          <h4>🔴 高优先级</h4>
          <p>直接影响系统稳定性和性能的债务，需要立即处理</p>
          <ul>
            <li>响应式系统限制相关问题</li>
            <li>安全性相关的代码问题</li>
            <li>严重影响性能的代码</li>
          </ul>
        </div>
        
        <div class="strategy-item medium-priority">
          <h4>🟡 中优先级</h4>
          <p>影响开发效率和可维护性的债务，应在下次大版本更新时处理</p>
          <ul>
            <li>Mixins 重构为 Composables</li>
            <li>组件结构优化</li>
            <li>状态管理优化</li>
          </ul>
        </div>
        
        <div class="strategy-item low-priority">
          <h4>🟢 低优先级</h4>
          <p>不影响核心功能但可以提升代码质量的债务，可随功能迭代逐步处理</p>
          <ul>
            <li>代码风格统一</li>
            <li>注释完善</li>
            <li>文档更新</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 响应式数据
const highDebt = ref(5);
const mediumDebt = ref(12);
const lowDebt = ref(8);
const debtResult = ref<any>(null);

// 计算债务优先级
const calculateDebtPriority = () => {
  const totalDebt = highDebt.value + mediumDebt.value + lowDebt.value;
  // 高优先级权重3，中优先级权重2，低优先级权重1
  const priorityScore = (highDebt.value * 3 + mediumDebt.value * 2 + lowDebt.value * 1) / (totalDebt || 1);
  
  let level = '';
  let strategy = '';
  
  if (priorityScore >= 2.5) {
    level = '紧急处理';
    strategy = '立即组织专项治理，分配充足资源';
  } else if (priorityScore >= 1.8) {
    level = '优先处理';
    strategy = '纳入下个季度规划，逐步解决';
  } else {
    level = '常规处理';
    strategy = '随功能迭代逐步清理';
  }
  
  debtResult.value = {
    level,
    strategy,
    priorityScore,
    totalDebt
  };
};

// 根据优先级级别确定颜色类
const debtColorClass = computed(() => {
  if (!debtResult.value) return '';
  
  const level = debtResult.value.level;
  if (level.includes('紧急')) return 'result-card-danger';
  if (level.includes('优先')) return 'result-card-warning';
  return 'result-card-success';
});
</script>

<style scoped>
.warning-card {
  background: #fff3cd;
  border-left: 4px solid var(--warning);
}

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

.priority-level {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.strategy {
  font-style: italic;
  margin: 0.5rem 0;
}

.strategy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.strategy-item {
  padding: 1.5rem;
  border-radius: var(--border-radius);
  border-left: 4px solid;
}

.strategy-item.high-priority {
  border-left-color: #dc3545;
  background-color: #f8d7da;
}

.strategy-item.medium-priority {
  border-left-color: #ffc107;
  background-color: #fff3cd;
}

.strategy-item.low-priority {
  border-left-color: #28a745;
  background-color: #d4edda;
}

.strategy-item h4 {
  margin-top: 0;
}

.strategy-item ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

@media (max-width: 768px) {
  .input-group {
    grid-template-columns: 1fr;
  }
  
  .strategy-grid {
    grid-template-columns: 1fr;
  }
}
</style>