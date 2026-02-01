import { MentalModelComparison } from '@/types/components';

export const mentalModelComparisons: MentalModelComparison[] = [
  {
    id: 'reactivity',
    title: '响应性系统',
    vue2Approach: '基于 Object.defineProperty 的 getter/setter 实现响应性，只能检测对象属性的变化，对新增或删除属性支持有限。',
    vue3Approach: '基于 Proxy 的全新响应性系统，可以拦截更多对象操作，支持动态添加/删除属性，性能更好。',
    benefits: [
      '更好的性能表现',
      '更完整的拦截能力',
      '更好的 TypeScript 支持',
      '支持响应性转换'
    ],
    challenges: [
      'Proxy 不支持 IE11',
      '某些特定场景下需要调整思维模式',
      '深层嵌套对象的处理方式略有不同'
    ],
    migrationTips: [
      '了解 ref 和 reactive 的区别及适用场景',
      '熟悉新的响应性 API 如 toRefs、shallowRef 等',
      '注意在模板中的使用差异（可能需要 .value）'
    ],
    exampleCode: {
      vue2: `
// Vue 2
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}`,
      vue3: `
// Vue 3
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    
    const increment = () => {
      count.value++
    }
    
    return {
      count,
      increment
    }
  }
}`
    }
  },
  {
    id: 'component-composition',
    title: '组件组合逻辑',
    vue2Approach: '通过 mixins、extends 等方式进行逻辑复用，存在命名冲突和隐式依赖问题。',
    vue3Approach: '引入 Composition API，允许开发者按功能而非选项组织代码，解决命名冲突问题。',
    benefits: [
      '更好的逻辑组织',
      '更清晰的代码结构',
      '消除命名冲突',
      '更好的类型推导'
    ],
    challenges: [
      '学习新的编程范式',
      '需要重构现有的 mixin 代码',
      '可能增加初期的学习曲线'
    ],
    migrationTips: [
      '逐步将 mixins 转换为 Composables',
      '利用 Composition API 重构复杂组件',
      '建立新的代码组织规范'
    ],
    exampleCode: {
      vue2: `
// Vue 2 Mixin
const myMixin = {
  data() {
    return {
      message: 'Hello'
    }
  },
  methods: {
    greet() {
      console.log(this.message)
    }
  }
}

export default {
  mixins: [myMixin],
  mounted() {
    this.greet()
  }
}`,
      vue3: `
// Vue 3 Composable
import { ref } from 'vue'

export function useMessaging() {
  const message = ref('Hello')
  
  const greet = () => {
    console.log(message.value)
  }
  
  return {
    message,
    greet
  }
}

// 在组件中使用
export default {
  setup() {
    const { message, greet } = useMessaging()
    
    return {
      message,
      greet
    }
  }
}`
    }
  },
  {
    id: 'typescript-integration',
    title: 'TypeScript 集成',
    vue2Approach: 'TypeScript 支持有限，需要使用 vue-class-component 或装饰器，类型推导不够完善。',
    vue3Approach: '原生支持 TypeScript，提供了更好的类型推导和类型安全，与 Composition API 完美结合。',
    benefits: [
      '更好的类型安全',
      '更准确的类型推导',
      '更好的 IDE 支持',
      '更少的运行时错误'
    ],
    challenges: [
      '需要额外的类型定义知识',
      '初期设置可能较复杂',
      '某些动态特性需要特殊处理'
    ],
    migrationTips: [
      '逐步添加类型定义',
      '使用 Vue 3 的类型定义工具',
      '确保类型系统的正确配置'
    ],
    exampleCode: {
      vue2: `
// Vue 2 with TypeScript (class-style)
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyComponent extends Vue {
  message: string = 'Hello'
  
  get reversedMessage(): string {
    return this.message.split('').reverse().join('')
  }
  
  greet(): void {
    console.log(this.reversedMessage)
  }
}`,
      vue3: `
// Vue 3 with TypeScript (Composition API)
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup() {
    const message = ref<string>('Hello')
    
    const reversedMessage = computed<string>(() => {
      return message.value.split('').reverse().join('')
    })
    
    const greet = (): void => {
      console.log(reversedMessage.value)
    }
    
    return {
      message,
      reversedMessage,
      greet
    }
  }
})`
    }
  }
];