<template>
  <pre class="code-block"><code>{{ code }}</code></pre>
</template>

<script setup lang="ts">
interface Props {
  code: string;
  language?: string;
}

withDefaults(defineProps<Props>(), {
  language: 'javascript'
});
</script>

<style scoped>
.code-block {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  white-space: pre;
}
</style>