<template>
  <div class="skill-matrix-page">
    <h1>👨‍💻 技能矩阵</h1>
    <SkillMatrix />
  </div>
</template>

<script setup lang="ts">
import SkillMatrix from '@/components/interactive/SkillMatrix.vue';
</script>

<style scoped>
.skill-matrix-page {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
