<template>
  <div class="training-plan-page">
    <h1>🎓 团队学习计划</h1>
    <p class="page-description">
      为不同角色提供定制化的 Composition API 学习路径
    </p>
    
    <LearningCurveAssistant />
  </div>
</template>

<script setup lang="ts">
import LearningCurveAssistant from '@/components/interactive/LearningCurveAssistant.vue';
</script>

<style scoped>
.training-plan-page {
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