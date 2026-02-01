<template>
  <div class="api-mixing-risks-page">
    <h1>⚠️ API 混用风险警示</h1>
    <p class="page-description">
      在渐进式迁移过程中，同时使用 Options API 和 Composition API 可能带来的潜在风险
    </p>
    
    <APIMixingRiskAlert />
  </div>
</template>

<script setup lang="ts">
import APIMixingRiskAlert from '@/components/sections/APIMixingRiskAlert.vue';
</script>

<style scoped>
.api-mixing-risks-page {
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