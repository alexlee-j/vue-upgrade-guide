import { ModelComparison } from '../types';

export const mentalModelComparisons: ModelComparison[] = [
  {
    aspect: '组件组织',
    vue2: {
      concept: 'Options API - 按选项类型组织',
      code: `export default {
  name: 'Counter',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  watch: {
    count(newVal) {
      console.log('Count changed:', newVal)
    }
  }
}`,
      thinking: '按照选项类型（data/methods/computed/watch）垂直切分代码，同一业务逻辑被分散到不同区域。'
    },
    vue3: {
      concept: 'Composition API - 按功能逻辑组织',
      code: `import { ref, computed, watch } from 'vue'

export default {
  name: 'Counter',
  setup() {
    // 计数器逻辑
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => count.value++

    // 监听器
    watch(count, (newVal) => {
      console.log('Count changed:', newVal)
    })

    return {
      count,
      doubleCount,
      increment
    }
  },
}`,
      thinking: '按照业务逻辑（功能模块）水平切分代码，相关功能集中在一起，便于理解和维护。'
    },
    leaderInsight: `
**决策点：**
- 小型组件：Options API 依然清晰简洁，无需强制迁移
- 复杂业务：Composition API 显著提升可维护性和代码理解成本
- 团队规范：建议统一风格，避免两种 API 混用造成混乱
- 学习曲线：团队需要时间适应 Composition API 的思维方式
    `
  },
  {
    aspect: '响应式系统',
    vue2: {
      concept: 'Object.defineProperty - 属性劫持',
      code: `// Vue 2 响应式限制
data() {
  return {
    obj: { a: 1 },
    arr: [1, 2, 3]
  }
},
methods: {
  // 无法检测到
  problematic() {
    this.obj.newProp = 'test' // ❌ 无响应
    this.arr[0] = 'new' // ⚠️ 部分响应
    this.arr.length = 0 // ❌ 无响应
  }
}`,
      thinking: '无法检测属性的动态添加/删除，数组索引修改有限支持，初始化性能较差。'
    },
    vue3: {
      concept: 'Proxy - 对象代理',
      code: `import { reactive } from 'vue'

// Vue 3 完全支持
const obj = reactive({ a: 1 })
const arr = reactive([1, 2, 3])

// 完全响应式
obj.newProp = 'test' // ✅ 响应
arr[0] = 'new' // ✅ 响应
arr.length = 0 // ✅ 响应
delete obj.a // ✅ 响应

// 更好的性能
// 惰性代理，按需响应`,
      thinking: '支持动态属性操作，性能更优，支持 Map/Set 等数据结构。'
    },
    leaderInsight: `
**决策点：**
- 性能提升：Proxy 实现的响应式系统性能更优
- 功能增强：支持动态属性添加/删除，处理 Map/Set 等
- 兼容性：大部分现有代码无需改动
- 学习成本：底层变化，但API使用相似
    `
  },
  {
    aspect: '逻辑复用',
    vue2: {
      concept: 'Mixins - 属性混入',
      code: `// Vue 2 Mixin
const counterMixin = {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}

// 使用
export default {
  mixins: [counterMixin],
  // ...
}`,
      thinking: '通过 mixins 实现逻辑复用，但存在命名冲突、作用域不明确等问题。'
    },
    vue3: {
      concept: 'Composables - 函数式复用',
      code: `// Vue 3 Composable
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => count.value++
  const decrement = () => count.value--
  
  return {
    count,
    doubleCount,
    increment,
    decrement
  }
}

// 使用
export default {
  setup() {
    const { count, increment, doubleCount } = useCounter(0)
    return { count, increment, doubleCount }
  }
}`,
      thinking: '通过函数式方式实现逻辑复用，更灵活、更明确的作用域。'
    },
    leaderInsight: `
**决策点：**
- 可维护性：Composables 提供更清晰的逻辑复用方式
- 类型安全：TypeScript 支持更好
- 调试友好：更容易追踪数据流向
- 团队规范：建议逐步将 mixins 迁移为 composables
    `
  }
];