<template>
  <div class="risk-assessment-page">
    <h1>🚨 升级风险评估清单</h1>
    <p class="page-description">
      基于项目实际情况评估升级风险，生成应对方案
    </p>
    
    <RiskAssessmentChecklist />
  </div>
</template>

<script setup lang="ts">
import RiskAssessmentChecklist from '@/components/interactive/RiskAssessmentChecklist.vue';
</script>

<style scoped>
.risk-assessment-page {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: center;
}
</style>