<template>
  <div class="skill-matrix">
    <h3>技能矩阵</h3>
    <div class="matrix-controls">
      <button @click="addRow" class="control-btn">添加行</button>
      <button @click="addColumn" class="control-btn">添加列</button>
      <button @click="exportMatrix" class="control-btn primary">导出数据</button>
    </div>
    <div class="matrix-container">
      <table class="skill-table">
        <thead>
          <tr>
            <th class="corner-cell"></th>
            <th 
              v-for="(column, colIndex) in matrix.columns" 
              :key="colIndex"
              class="column-header"
            >
              <div class="header-content">
                <span class="header-label">{{ column.label }}</span>
                <button @click="removeColumn(colIndex)" class="remove-btn">×</button>
              </div>
              <input 
                v-model="column.label" 
                @blur="updateColumnLabel(colIndex)" 
                class="header-input"
                placeholder="列标题"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(row, rowIndex) in matrix.rows" 
            :key="rowIndex"
          >
            <td class="row-header">
              <div class="header-content">
                <span class="header-label">{{ row.label }}</span>
                <button @click="removeRow(rowIndex)" class="remove-btn">×</button>
              </div>
              <input 
                v-model="row.label" 
                @blur="updateRowLabel(rowIndex)" 
                class="header-input"
                placeholder="行标题"
              />
            </td>
            <td 
              v-for="(cell, colIndex) in row.cells" 
              :key="colIndex"
              :class="['matrix-cell', getCellClass(cell.level)]"
              @click="cycleCellLevel(rowIndex, colIndex)"
            >
              <div class="cell-content">{{ getLevelLabel(cell.level) }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="legend">
      <div v-for="(level, key) in levelLabels" :key="key" class="legend-item">
        <div class="legend-color" :class="getCellClass(key as keyof typeof levelLabels)"></div>
        <span>{{ level }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

// 定义技能等级类型
type SkillLevel = 0 | 1 | 2 | 3 | 4;

interface MatrixCell {
  level: SkillLevel;
}

interface MatrixRow {
  label: string;
  cells: MatrixCell[];
}

interface MatrixColumn {
  label: string;
}

interface SkillMatrix {
  rows: MatrixRow[];
  columns: MatrixColumn[];
}

interface Props {
  initialMatrix?: SkillMatrix;
}

const props = withDefaults(defineProps<Props>(), {
  initialMatrix: () => ({
    rows: [
      { label: 'Vue 2 经验', cells: [{ level: 3 }, { level: 3 }, { level: 3 }] },
      { label: 'Composition API', cells: [{ level: 0 }, { level: 2 }, { level: 4 }] },
      { label: 'TypeScript', cells: [{ level: 1 }, { level: 3 }, { level: 4 }] },
      { label: 'Vite', cells: [{ level: 0 }, { level: 1 }, { level: 3 }] }
    ],
    columns: [
      { label: '开发人员 A' },
      { label: '开发人员 B' },
      { label: '开发人员 C' }
    ]
  })
});

// 初始化矩阵数据
const matrix = reactive<SkillMatrix>({
  rows: [...props.initialMatrix.rows.map(row => ({
    label: row.label,
    cells: [...row.cells]
  }))],
  columns: [...props.initialMatrix.columns]
});

// 技能等级定义
const levelLabels = {
  0: '无经验',
  1: '初级',
  2: '中级',
  3: '高级',
  4: '专家'
};

// 获取单元格CSS类
const getCellClass = (level: SkillLevel) => {
  switch (level) {
    case 0: return 'level-0';
    case 1: return 'level-1';
    case 2: return 'level-2';
    case 3: return 'level-3';
    case 4: return 'level-4';
    default: return 'level-0';
  }
};

// 获取等级标签
const getLevelLabel = (level: SkillLevel) => {
  return levelLabels[level];
};

// 循环切换单元格等级
const cycleCellLevel = (rowIndex: number, colIndex: number) => {
  const currentLevel = matrix.rows[rowIndex].cells[colIndex].level;
  const nextLevel = ((currentLevel + 1) % 5) as SkillLevel;
  matrix.rows[rowIndex].cells[colIndex].level = nextLevel;
};

// 更新列标题
const updateColumnLabel = (colIndex: number) => {
  matrix.columns[colIndex].label = matrix.columns[colIndex].label || `列 ${colIndex + 1}`;
};

// 更新行标题
const updateRowLabel = (rowIndex: number) => {
  matrix.rows[rowIndex].label = matrix.rows[rowIndex].label || `行 ${rowIndex + 1}`;
};

// 添加行
const addRow = () => {
  const newRow: MatrixRow = {
    label: `新行 ${matrix.rows.length + 1}`,
    cells: Array(matrix.columns.length).fill(null).map(() => ({ level: 0 }))
  };
  matrix.rows.push(newRow);
};

// 删除行
const removeRow = (index: number) => {
  if (matrix.rows.length > 1) {
    matrix.rows.splice(index, 1);
  }
};

// 添加列
const addColumn = () => {
  matrix.columns.push({ label: `新列 ${matrix.columns.length + 1}` });
  matrix.rows.forEach(row => {
    row.cells.push({ level: 0 });
  });
};

// 删除列
const removeColumn = (index: number) => {
  if (matrix.columns.length > 1) {
    matrix.columns.splice(index, 1);
    matrix.rows.forEach(row => {
      row.cells.splice(index, 1);
    });
  }
};

// 导出矩阵数据
const exportMatrix = () => {
  const dataStr = JSON.stringify(matrix, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  const exportFileDefaultName = 'skill-matrix.json';
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};
</script>

<style scoped>
.skill-matrix {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
}

.matrix-controls {
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

.matrix-container {
  overflow-x: auto;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.skill-table {
  border-collapse: collapse;
  width: 100%;
  min-width: 600px;
}

.skill-table th,
.skill-table td {
  border: 1px solid var(--color-border);
  padding: 0.75rem;
  text-align: center;
  position: relative;
}

.corner-cell {
  background-color: var(--color-surface);
  border-right: 2px solid var(--color-border);
  border-bottom: 2px solid var(--color-border);
}

.column-header,
.row-header {
  background-color: var(--color-surface);
  position: relative;
  min-width: 120px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.header-label {
  font-weight: bold;
  color: var(--color-text);
  flex-grow: 1;
  text-align: center;
}

.remove-btn {
  background: none;
  border: none;
  color: var(--color-error);
  font-size: 1.2rem;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-input {
  width: 100%;
  padding: 0.25rem;
  border: 1px solid var(--color-border);
  border-radius: 2px;
  font-size: 0.9rem;
}

.matrix-cell {
  cursor: pointer;
  transition: background-color 0.2s;
  min-width: 100px;
  height: 80px;
  vertical-align: middle;
}

.matrix-cell:hover {
  opacity: 0.8;
}

.level-0 { background-color: #f8f9fa; color: #6c757d; } /* 无经验 */
.level-1 { background-color: #d4edda; color: #155724; } /* 初级 */
.level-2 { background-color: #fff3cd; color: #856404; } /* 中级 */
.level-3 { background-color: #cce7ff; color: #004085; } /* 高级 */
.level-4 { background-color: #d1ecf1; color: #0c5460; } /* 专家 */

.cell-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.legend {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.legend-color {
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-border);
  border-radius: 2px;
}

.legend-color.level-0 { background-color: #f8f9fa; }
.legend-color.level-1 { background-color: #d4edda; }
.legend-color.level-2 { background-color: #fff3cd; }
.legend-color.level-3 { background-color: #cce7ff; }
.legend-color.level-4 { background-color: #d1ecf1; }
</style>