<template>
  <div class="mental-model-compare-page">
    <h1>💡 心智模型对比</h1>
    <p class="page-description">
      深入对比 Vue 2 和 Vue 3 的核心概念和编程范式，帮助您理解底层变化
    </p>
    
    <div class="comparison-container">
      <div 
        v-for="comparison in comparisons" 
        :key="comparison.id" 
        class="comparison-card"
      >
        <h2>{{ comparison.title }}</h2>
        <div class="comparison-content">
          <div class="vue2-section">
            <h3>Vue 2 方法</h3>
            <p>{{ comparison.vue2Approach }}</p>
            <h4>挑战</h4>
            <ul>
              <li v-for="challenge in comparison.challenges" :key="challenge">{{ challenge }}</li>
            </ul>
          </div>
          
          <div class="transition-arrow">🔄</div>
          
          <div class="vue3-section">
            <h3>Vue 3 方法</h3>
            <p>{{ comparison.vue3Approach }}</p>
            <h4>优势</h4>
            <ul>
              <li v-for="benefit in comparison.benefits" :key="benefit">{{ benefit }}</li>
            </ul>
          </div>
        </div>
        
        <div class="migration-tips">
          <h4>迁移建议</h4>
          <ul>
            <li v-for="tip in comparison.migrationTips" :key="tip">{{ tip }}</li>
          </ul>
        </div>
        
        <div v-if="comparison.exampleCode" class="code-comparison">
          <CodeCompare 
            :title="`${comparison.title} 代码示例`"
            :vue2Code="comparison.exampleCode.vue2"
            :vue3Code="comparison.exampleCode.vue3"
            @copied="handleCodeCopied"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mentalModelComparisons } from '@/data/mentalModel';
import CodeCompare from '@/components/shared/CodeCompare.vue';

const comparisons = mentalModelComparisons;

const handleCodeCopied = (message: string) => {
  console.log(message);
  // 这里可以添加通知逻辑
};
</script>

<style scoped>
.mental-model-compare-page {
  padding: 1rem;
}

.page-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: center;
}

.comparison-container {
  max-width: 1200px;
  margin: 0 auto;
}

.comparison-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.comparison-card h2 {
  color: var(--color-text);
  margin-top: 0;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.comparison-content {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
}

.vue2-section, .vue3-section {
  flex: 1;
  padding: 1rem;
  border-radius: 4px;
}

.vue2-section {
  border: 1px solid #dc3545;
  background-color: #fff5f5;
}

.vue3-section {
  border: 1px solid #28a745;
  background-color: #f0fdf4;
}

.transition-arrow {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: var(--color-primary);
}

.vue2-section h3, .vue3-section h3 {
  margin-top: 0;
}

.vue2-section h4, .vue3-section h4 {
  color: var(--color-text);
}

.vue2-section ul, .vue3-section ul {
  padding-left: 1.5rem;
}

.vue2-section li, .vue3-section li {
  margin-bottom: 0.5rem;
}

.migration-tips {
  background-color: var(--color-bg);
  border-left: 4px solid var(--color-warning);
  padding: 1rem;
  border-radius: 0 4px 4px 0;
}

.migration-tips h4 {
  margin-top: 0;
  color: var(--color-warning);
}

.code-comparison {
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .comparison-content {
    flex-direction: column;
  }
  
  .transition-arrow {
    justify-content: center;
  }
}
</style>