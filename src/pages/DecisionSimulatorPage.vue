<template>
  <div class="decision-simulator-page">
    <h1>🧠 心智模型决策模拟器</h1>
    <p class="page-description">
      通过交互式决策场景，为您匹配最适合的 API 方案和执行建议
    </p>
    
    <MindsetDecisionSimulator />
  </div>
</template>

<script setup lang="ts">
import MindsetDecisionSimulator from '@/components/interactive/MindsetDecisionSimulator.vue';
</script>

<style scoped>
.decision-simulator-page {
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