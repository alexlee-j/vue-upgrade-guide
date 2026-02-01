<template>
  <section class="mental-model-section">
    <h2>💡 心智模型升级</h2>
    <p>从 Vue 2 到 Vue 3 的核心变革不仅在于 API 的变化，更在于编程思维的根本转变。</p>
    
    <div class="comparison-container">
      <!-- Vue 2 -->
      <div class="model-card vue2">
        <h3>❌ {{ currentComparison.vue2.concept }}</h3>
        <CodeBlock :code="currentComparison.vue2.code" />
        <div class="thinking">
          <strong>思考方式：</strong>{{ currentComparison.vue2.thinking }}
        </div>
      </div>
      
      <!-- 转换箭头 -->
      <div class="transform-arrow">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#42b983" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Vue 3 -->
      <div class="model-card vue3">
        <h3>✅ {{ currentComparison.vue3.concept }}</h3>
        <CodeBlock :code="currentComparison.vue3.code" />
        <div class="thinking">
          <strong>思考方式：</strong>{{ currentComparison.vue3.thinking }}
        </div>
      </div>
    </div>
    
    <!-- 负责人视角 -->
    <div class="leader-insight">
      <h4>🎯 负责人决策视角</h4>
      <div class="leader-insight-content" v-html="renderMarkdown(currentComparison.leaderInsight)"></div>
    </div>
    
    <!-- 导航 -->
    <div class="navigation">
      <button @click="prev" class="btn" :disabled="currentIndex === 0">← 上一个</button>
      <span>{{ currentIndex + 1 }} / {{ comparisons.length }}</span>
      <button @click="next" class="btn" :disabled="currentIndex === comparisons.length - 1">下一个 →</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMentalModelCompare } from '../../composables/useMentalModelCompare';
import CodeBlock from '../shared/CodeBlock.vue';

const { currentComparison, currentIndex, comparisons, next, prev } = useMentalModelCompare();

// 简单的markdown渲染函数
const renderMarkdown = (text: string) => {
  let html = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold
    .replace(/\*(.*?)\*/g, '<em>$1</em>')             // Italic
    .replace(/^- (.*$)/gm, '<li>$1</li>')             // List items
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');      // Wrap lists
  
  return html;
};
</script>

<style scoped>
.comparison-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin: 2rem 0;
  align-items: start;
}

.transform-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.leader-insight {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin: 2rem 0;
  border-left: 4px solid var(--warning);
}

.leader-insight h4 {
  margin-top: 0;
  color: #7c2d12;
}

.leader-insight-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.leader-insight-content li {
  margin: 0.5rem 0;
}
</style>