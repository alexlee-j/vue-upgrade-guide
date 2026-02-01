<template>
  <div class="flow-chart">
    <h3>{{ title }}</h3>
    <div class="chart-controls">
      <button @click="zoomIn" class="control-btn">+</button>
      <button @click="zoomOut" class="control-btn">-</button>
      <button @click="resetZoom" class="control-btn">重置</button>
      <button @click="exportAsImage" class="control-btn primary">导出图片</button>
    </div>
    <div class="chart-container" ref="containerRef" :style="{ transform: `scale(${zoomLevel})` }">
      <svg width="100%" height="400" viewBox="0 0 800 400" class="chart-svg">
        <!-- 节点定义 -->
        <g v-for="(node, index) in nodes" :key="node.id">
          <rect 
            :x="node.x" 
            :y="node.y" 
            :width="node.width" 
            :height="node.height"
            :fill="getNodeColor(node.type)"
            stroke="#333"
            stroke-width="2"
            rx="8"
            @click="selectNode(node)"
            class="chart-node"
          />
          <text 
            :x="node.x + node.width / 2" 
            :y="node.y + node.height / 2" 
            text-anchor="middle" 
            dominant-baseline="middle"
            fill="white"
            font-family="Arial, sans-serif"
            font-size="14"
          >
            {{ node.label }}
          </text>
        </g>
        
        <!-- 连接线 -->
        <g v-for="connection in connections" :key="`${connection.from}-${connection.to}`">
          <line
            :x1="getNodeCenter(connection.from).x"
            :y1="getNodeCenter(connection.from).y"
            :x2="getNodeCenter(connection.to).x"
            :y2="getNodeCenter(connection.to).y"
            stroke="#666"
            stroke-width="2"
            marker-end="url(#arrowhead)"
          />
        </g>
        
        <!-- 箭头标记 -->
        <defs>
          <marker 
            id="arrowhead" 
            markerWidth="10" 
            markerHeight="7" 
            refX="9" 
            refY="3.5" 
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
          </marker>
        </defs>
      </svg>
    </div>
    <div class="node-details" v-if="selectedNode">
      <h4>节点详情: {{ selectedNode.label }}</h4>
      <p>{{ selectedNode.description }}</p>
      <button @click="selectedNode = null" class="close-btn">关闭</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'start' | 'process' | 'decision' | 'end';
  description: string;
}

interface Connection {
  from: string;
  to: string;
}

interface Props {
  title: string;
  nodes: Node[];
  connections: Connection[];
}

const props = withDefaults(defineProps<Props>(), {
  title: '流程图',
  nodes: () => [],
  connections: () => []
});

const zoomLevel = ref(1);
const containerRef = ref<HTMLDivElement>();
const selectedNode = ref<Node | null>(null);

// 默认节点数据
const defaultNodes: Node[] = [
  {
    id: 'start',
    label: '开始',
    x: 50,
    y: 150,
    width: 100,
    height: 40,
    type: 'start',
    description: '流程开始节点'
  },
  {
    id: 'decision',
    label: '评估迁移必要性',
    x: 200,
    y: 150,
    width: 140,
    height: 40,
    type: 'decision',
    description: '判断是否需要进行 Vue 3 迁移'
  },
  {
    id: 'process1',
    label: '准备阶段',
    x: 400,
    y: 100,
    width: 120,
    height: 40,
    type: 'process',
    description: '准备工作，包括环境搭建和依赖更新'
  },
  {
    id: 'process2',
    label: '迁移实施',
    x: 400,
    y: 200,
    width: 120,
    height: 40,
    type: 'process',
    description: '执行实际的迁移操作'
  },
  {
    id: 'end',
    label: '结束',
    x: 600,
    y: 150,
    width: 100,
    height: 40,
    type: 'end',
    description: '迁移完成节点'
  }
];

const defaultConnections: Connection[] = [
  { from: 'start', to: 'decision' },
  { from: 'decision', to: 'process1' },
  { from: 'decision', to: 'process2' },
  { from: 'process1', to: 'end' },
  { from: 'process2', to: 'end' }
];

// 使用默认值如果 props 未提供
const nodes = reactive(props.nodes.length > 0 ? props.nodes : defaultNodes);
const connections = reactive(props.connections.length > 0 ? props.connections : defaultConnections);

const zoomIn = () => {
  if (zoomLevel.value < 2) {
    zoomLevel.value += 0.1;
  }
};

const zoomOut = () => {
  if (zoomLevel.value > 0.5) {
    zoomLevel.value -= 0.1;
  }
};

const resetZoom = () => {
  zoomLevel.value = 1;
};

const getNodeColor = (type: Node['type']) => {
  switch (type) {
    case 'start':
      return '#4CAF50';
    case 'end':
      return '#F44336';
    case 'decision':
      return '#2196F3';
    case 'process':
      return '#FF9800';
    default:
      return '#9E9E9E';
  }
};

const getNodeCenter = (nodeId: string) => {
  const node = nodes.find(n => n.id === nodeId);
  if (node) {
    return {
      x: node.x + node.width / 2,
      y: node.y + node.height / 2
    };
  }
  return { x: 0, y: 0 };
};

const selectNode = (node: Node) => {
  selectedNode.value = node;
};

const exportAsImage = () => {
  alert('流程图导出功能将在完整版本中实现');
};
</script>

<style scoped>
.flow-chart {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}

.chart-controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.control-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.control-btn.primary {
  background-color: var(--color-primary);
  color: white;
}

.control-btn:hover {
  background-color: var(--color-hover);
}

.chart-container {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: auto;
  min-height: 400px;
  transition: transform 0.2s;
}

.chart-svg {
  min-width: 800px;
  min-height: 400px;
}

.chart-node {
  cursor: pointer;
  transition: opacity 0.2s;
}

.chart-node:hover {
  opacity: 0.8;
}

.node-details {
  margin-top: 1rem;
  padding: 1rem;
  background-color: var(--color-surface);
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

.node-details h4 {
  margin-top: 0;
  color: var(--color-text);
}

.close-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>