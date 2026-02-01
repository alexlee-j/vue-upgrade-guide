<template>
  <div class="decision-tree-page">
    <h1>🌳 决策树</h1>
    <p class="page-description">
      基于实际场景的决策流程，指导您在不同情况下做出合适的技术选型
    </p>
    
    <div class="tree-container">
      <FlowChart 
        :title="'Vue 3 升级决策流程'"
        :nodes="decisionTreeNodes"
        :connections="decisionTreeConnections"
      />
    </div>
    
    <div class="decision-guidance">
      <h2>决策指导原则</h2>
      <div class="guidance-cards">
        <div class="guidance-card">
          <h3>时机选择</h3>
          <p>选择合适的升级时机至关重要，考虑业务周期、团队资源和技术准备情况。</p>
          <ul>
            <li>避开业务高峰期</li>
            <li>确保有足够的人力资源</li>
            <li>预留充分的测试时间</li>
          </ul>
        </div>
        
        <div class="guidance-card">
          <h3>范围界定</h3>
          <p>明确升级的范围和优先级，避免一次性改造过大导致风险失控。</p>
          <ul>
            <li>优先升级非核心模块</li>
            <li>逐步扩展到核心功能</li>
            <li>保持向后兼容性</li>
          </ul>
        </div>
        
        <div class="guidance-card">
          <h3>风险控制</h3>
          <p>制定完善的风险应对策略，确保升级过程中的系统稳定性。</p>
          <ul>
            <li>建立回滚机制</li>
            <li>实施渐进式部署</li>
            <li>加强监控和测试</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlowChart from '@/components/interactive/FlowChart.vue';
import { decisionTree } from '@/data/decisionTree';

// 使用决策树数据
const decisionTreeNodes = decisionTree.nodes;
const decisionTreeConnections = decisionTree.connections;
</script>

<style scoped>
.decision-tree-page {
  padding: 1rem;
}

.page-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: center;
}

.tree-container {
  margin-bottom: 2rem;
}

.decision-guidance {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
}

.decision-guidance h2 {
  text-align: center;
  color: var(--color-text);
  margin-top: 0;
}

.guidance-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.guidance-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1rem;
}

.guidance-card h3 {
  margin-top: 0;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.guidance-card ul {
  padding-left: 1.5rem;
}

.guidance-card li {
  margin-bottom: 0.5rem;
}
</style>