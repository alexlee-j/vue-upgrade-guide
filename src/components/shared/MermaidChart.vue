<template>
  <div class="mermaid-chart" ref="chartRef">
    <div v-if="loading" class="loading">图表生成中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

interface Props {
  type?: 'flowchart' | 'sequenceDiagram' | 'classDiagram' | 'stateDiagram' | 'gantt' | 'pie';
  code: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'flowchart'
});

const chartRef = ref<HTMLDivElement>();
const loading = ref(true);
const error = ref<string | null>(null);

// 简化版 Mermaid 图表渲染
const renderMermaid = () => {
  if (!chartRef.value) return;

  loading.value = true;
  error.value = null;

  try {
    // 创建 SVG 元素作为占位符
    const svgPlaceholder = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgPlaceholder.setAttribute("width", "100%");
    svgPlaceholder.setAttribute("height", "300");
    svgPlaceholder.setAttribute("viewBox", "0 0 600 300");
    
    // 添加一些基本图形作为占位符
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", "50");
    rect.setAttribute("y", "50");
    rect.setAttribute("width", "500");
    rect.setAttribute("height", "200");
    rect.setAttribute("fill", "var(--color-surface)");
    rect.setAttribute("stroke", "var(--color-border)");
    rect.setAttribute("stroke-width", "2");
    svgPlaceholder.appendChild(rect);
    
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "300");
    text.setAttribute("y", "150");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "var(--color-text)");
    text.textContent = "Mermaid 图表预览";
    svgPlaceholder.appendChild(text);
    
    // 清空容器并添加 SVG
    chartRef.value.innerHTML = '';
    chartRef.value.appendChild(svgPlaceholder);
    
    loading.value = false;
  } catch (err) {
    error.value = '图表渲染失败: ' + (err as Error).message;
    loading.value = false;
  }
};

onMounted(() => {
  renderMermaid();
});

watch(() => props.code, () => {
  renderMermaid();
});
</script>

<style scoped>
.mermaid-chart {
  margin: 1rem 0;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  min-height: 200px;
  position: relative;
}

.loading {
  padding: 2rem;
  text-align: center;
  color: var(--color-text-secondary);
}

.error {
  padding: 1rem;
  color: var(--color-error);
  background-color: var(--color-error-bg);
  border: 1px solid var(--color-error);
}
</style>