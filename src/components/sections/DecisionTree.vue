<template>
  <section class="decision-tree">
    <h2>🌳 技术决策树</h2>
    <p>根据项目实际情况，选择最适合的 Vue 3 升级策略。</p>
    
    <div class="decision-tree-container">
      <!-- Mermaid 图表 -->
      <div class="tree-diagram">
        <h3>决策流程图</h3>
        <pre class="mermaid">
graph TD
    Start[开始评估] --> Q1{项目类型?}
    Q1 -->|新项目| Q2{团队熟悉度?}
    Q1 -->|迁移项目| Q3{项目规模?}
    Q2 -->|≥50%熟悉| A1[直接 Vue 3]
    Q2 -->|&lt;50%熟悉| A2[培训 + Vue 3]
    Q3 -->|小型&lt;100组件| A3[快速迁移]
    Q3 -->|中型100-500| A4[渐进式迁移]
    Q3 -->|大型>500| A5[分阶段迁移]
    
    A1 --> C1[推荐技术栈]
    A2 --> C2[培训计划]
    A3 --> C3[兼容模式]
    A4 --> C4[混合模式]
    A5 --> C5[重构策略]
    
    C1 -.-> R1[风险:学习成本]
    C2 -.-> R2[风险:时间成本]
    C3 -.-> R3[风险:兼容性]
    C4 -.-> R4[风险:复杂度]
    C5 -.-> R5[风险:资源投入]
        </pre>
      </div>
      
      <!-- 交互式决策 -->
      <div class="interactive-decision">
        <div :class="['node', currentNode.type]">
          <h3>{{ currentNode.question }}</h3>
          
          <div v-if="currentNode.type === 'decision'" class="options">
            <button 
              v-for="option in currentNode.options" 
              :key="option.next"
              @click="navigate(option.next)"
              class="option-btn"
            >
              {{ option.label }}
              <span v-if="option.score" class="score">
                推荐度: {{ option.score }}%
              </span>
            </button>
          </div>
          
          <div v-else-if="currentNode.type === 'action'" class="action-result">
            <div class="action-title">{{ currentNode.action }}</div>
            <ul class="checklist">
              <ChecklistItem 
                v-for="(item, index) in currentNode.checklist || []" 
                :key="index"
                :id="`check-${index}`"
                v-model:checked="checkedItems[index]"
              >
                {{ item }}
              </ChecklistItem>
            </ul>
          </div>
          
          <div v-if="currentNode.risks && currentNode.risks.length" class="risks">
            <h4>⚠️ 风险提示</h4>
            <ul>
              <li v-for="(risk, index) in currentNode.risks" :key="index">{{ risk }}</li>
            </ul>
          </div>
        </div>
        
        <button v-if="canGoBack" @click="goBack" class="btn back-btn">
          ← 返回上一步
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDecisionTree } from '../../composables/useDecisionTree';
import ChecklistItem from '../shared/ChecklistItem.vue';

const { currentNode, navigate, goBack, canGoBack } = useDecisionTree();

// 用于跟踪复选框状态
const checkedItems = ref<boolean[]>([]);

import { ref } from 'vue';
</script>

<style scoped>
.decision-tree-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.tree-diagram {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.mermaid {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: var(--border-radius);
  overflow-x: auto;
  font-size: 0.8rem;
}

.interactive-decision {
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.node {
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
}

.node.decision {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
}

.node.action {
  background: #e8f5e8;
  border-left: 4px solid var(--success);
}

.options {
  margin: 1rem 0;
}

.option-btn {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  cursor: pointer;
  text-align: left;
  transition: var(--transition);
}

.option-btn:hover {
  background: #f8f9fa;
  border-color: var(--primary);
  transform: translateX(5px);
}

.score {
  float: right;
  background: var(--primary);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
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

.checklist {
  margin: 1rem 0;
  padding-left: 0;
}

.back-btn {
  background: #6c757d;
}

.back-btn:hover {
  background: #5a6268;
}

@media (max-width: 768px) {
  .decision-tree-container {
    grid-template-columns: 1fr;
  }
}
</style>