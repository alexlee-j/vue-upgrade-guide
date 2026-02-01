<template>
  <div class="roi-calculator-page">
    <h1>📊 ROI 计算器</h1>
    <p class="page-description">
      计算 Vue 2 到 Vue 3 升级的投资回报率，帮助您量化升级的价值
    </p>
    
    <div class="calculator-container">
      <ROICalculator />
    </div>
    
    <div class="roi-insights">
      <h2>ROI 分析洞察</h2>
      <div class="insight-cards">
        <div class="insight-card">
          <h3>成本构成</h3>
          <ul>
            <li>开发人员培训成本</li>
            <li>迁移开发时间成本</li>
            <li>测试和验证成本</li>
            <li>工具和基础设施升级成本</li>
          </ul>
        </div>
        
        <div class="insight-card">
          <h3>收益来源</h3>
          <ul>
            <li>开发效率提升</li>
            <li>维护成本降低</li>
            <li>性能优化带来的业务价值</li>
            <li>长期技术债减少</li>
          </ul>
        </div>
        
        <div class="insight-card">
          <h3>风险因素</h3>
          <ul>
            <li>短期生产力下降</li>
            <li>学习曲线影响</li>
            <li>兼容性问题</li>
            <li>潜在的未知问题</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ROICalculator from '@/components/interactive/ROICalculator.vue';
</script>

<style scoped>
.roi-calculator-page {
  padding: 1rem;
}

.page-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: center;
}

.calculator-container {
  max-width: 800px;
  margin: 0 auto 2rem;
}

.roi-insights {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
}

.roi-insights h2 {
  text-align: center;
  color: var(--color-text);
  margin-top: 0;
}

.insight-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.insight-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
}

.insight-card h3 {
  margin-top: 0;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.insight-card ul {
  padding-left: 1.5rem;
}

.insight-card li {
  margin-bottom: 0.5rem;
}
</style>