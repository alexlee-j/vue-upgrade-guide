<template>
  <div class="hybrid-configuration-page">
    <h1>⚙️ 混合开发工程化配置</h1>
    <p class="page-description">
      为渐进式迁移场景提供可直接复用的工程化配置
    </p>
    
    <HybridDevConfiguration />
  </div>
</template>

<script setup lang="ts">
import HybridDevConfiguration from '@/components/sections/HybridDevConfiguration.vue';
</script>

<style scoped>
.hybrid-configuration-page {
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