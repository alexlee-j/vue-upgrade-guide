<template>
  <div :class="['card', typeClass]">
    <h3 v-if="title">{{ title }}</h3>
    <slot></slot>
    <div v-if="risks && risks.length" class="risks">
      <h4>⚠️ 风险提示</h4>
      <ul>
        <li v-for="(risk, index) in risks" :key="index">{{ risk }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  type?: 'default' | 'success' | 'warning' | 'danger';
  risks?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  risks: () => []
});

const typeClass = computed(() => {
  return `decision-card-${props.type}`;
});

import { computed } from 'vue';
</script>

<style scoped>
.decision-card-default {
  border-left: 4px solid #ddd;
}

.decision-card-success {
  border-left: 4px solid var(--success);
}

.decision-card-warning {
  border-left: 4px solid var(--warning);
  background-color: #fff3cd;
}

.decision-card-danger {
  border-left: 4px solid var(--danger);
}

.risks {
  background: #fff3cd;
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-top: 1rem;
  border-left: 4px solid var(--warning);
}

.risks h4 {
  color: #856404;
  margin-top: 0;
}

.risks ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}
</style>