<template>
  <div class="hybrid-dev-configuration">
    <h2>⚙️ 混合开发工程化配置指南</h2>
    <p class="config-description">
      为渐进式迁移场景提供可直接复用的工程化配置
    </p>
    
    <div class="config-tabs">
      <button 
        v-for="tab in configTabs" 
        :key="tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.title }}
      </button>
    </div>
    
    <div class="config-content" v-if="activeTab">
      <div v-if="activeTab === 'vite-config'" class="config-section">
        <h3>Vite 配置</h3>
        <p>支持 Vue2+Vue3 共存的 Vite 配置代码</p>
        
        <div class="config-example">
          <h4>@vue/composition-api 插件配置</h4>
          <pre><code class="language-javascript">{{ viteConfigExample }}</code></pre>
        </div>
        
        <div class="config-example">
          <h4>vue-demi 适配方案</h4>
          <pre><code class="language-javascript">{{ vueDemiExample }}</code></pre>
        </div>
      </div>
      
      <div v-if="activeTab === 'cli-config'" class="config-section">
        <h3>Vue CLI 配置</h3>
        <p>Vue CLI 环境下的混合开发配置</p>
        
        <div class="config-example">
          <h4>vue-cli-plugin-composition-api</h4>
          <pre><code class="language-javascript">{{ cliPluginExample }}</code></pre>
        </div>
      </div>
      
      <div v-if="activeTab === 'component-lib'" class="config-section">
        <h3>第三方组件库兼容</h3>
        <p>Element UI 适配 Vue3 的 Element Plus 迁移步骤</p>
        
        <div class="compatibility-info">
          <h4>Element UI → Element Plus 迁移</h4>
          <ol>
            <li>安装 Element Plus: <code>npm install element-plus</code></li>
            <li>移除 Element UI: <code>npm uninstall element-ui</code></li>
            <li>更新导入语句和组件名称</li>
            <li>调整样式变量和主题配置</li>
          </ol>
        </div>
        
        <div class="compatibility-info">
          <h4>其他组件库兼容补丁</h4>
          <ul>
            <li>使用 @vue/compat 进行兼容性测试</li>
            <li>创建适配层包装旧组件库</li>
            <li>逐步替换为 Vue3 原生组件</li>
          </ul>
        </div>
      </div>
      
      <div v-if="activeTab === 'build-optimization'" class="config-section">
        <h3>构建打包优化</h3>
        <p>避免混合开发导致的包体积增大、编译报错</p>
        
        <div class="optimization-tips">
          <h4>避免包体积增大的策略</h4>
          <ul>
            <li>使用 Tree Shaking 移除未使用的代码</li>
            <li>配置 externals 避免重复打包公共库</li>
            <li>分离 Vue2 和 Vue3 的依赖包</li>
          </ul>
          
          <h4>编译报错解决方案</h4>
          <ul>
            <li>统一 TypeScript 版本和配置</li>
            <li>配置适当的模块解析规则</li>
            <li>使用适当的 polyfill 兼容旧浏览器</li>
          </ul>
        </div>
        
        <div class="config-example">
          <h4>Webpack 优化配置示例</h4>
          <pre><code class="language-javascript">{{ webpackOptimizationExample }}</code></pre>
        </div>
      </div>
    </div>
    
    <div class="download-templates">
      <h3>配置文件模板下载</h3>
      <div class="template-options">
        <button @click="downloadTemplate('vite')" class="template-btn">
          📁 下载 Vite 配置模板
        </button>
        <button @click="downloadTemplate('cli')" class="template-btn">
          📁 下载 Vue CLI 配置模板
        </button>
        <button @click="downloadTemplate('webpack')" class="template-btn">
          📁 下载 Webpack 配置模板
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ConfigTab {
  id: string;
  title: string;
}

const activeTab = ref<string>('vite-config');
const configTabs: ConfigTab[] = [
  { id: 'vite-config', title: 'Vite 配置' },
  { id: 'cli-config', title: 'CLI 配置' },
  { id: 'component-lib', title: '组件库兼容' },
  { id: 'build-optimization', title: '构建优化' }
];

const viteConfigExample = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vue({
      template: {
        // 支持 Vue 2 的一些特性
        compilerOptions: {
          compatConfig: {
            MODE: 2 // Vue 2 模式
          }
        }
      }
    }),
    vueJsx(),
    // 如果需要 Vue 2 的 Composition API
    // require('@vue/composition-api/plugin')()
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false
  }
})`;

const vueDemiExample = `// 使用 vue-demi 创建兼容 Vue 2/3 的组合式函数
import { ref, computed } from 'vue-demi'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    count.value--
  }
  
  const double = computed(() => count.value * 2)
  
  return {
    count,
    increment,
    decrement,
    double
  }
}`;

const cliPluginExample = `// vue.config.js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  chainWebpack: config => {
    // 配置 Vue 2 Composition API 插件
    if (process.env.NODE_ENV === 'development') {
      config.plugin('vue-composition-api').use(require('@vue/composition-api/plugin'))
    }
    
    // 优化打包
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        vue: {
          test: /[\\\\/]node_modules[\\\\/](vue|@vue[\\\\/])/,
          name: 'vue',
          priority: 10,
          enforce: true
        }
      }
    })
  },
  
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  }
})`;

const webpackOptimizationExample = `module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 分离 Vue2 和 Vue3 相关依赖
        vue2: {
          test: /[\\\\/]node_modules[\\\\/](vue@2)/,
          name: 'vue2',
          priority: 20,
          enforce: true
        },
        vue3: {
          test: /[\\\\/]node_modules[\\\\/](vue@3)/,
          name: 'vue3',
          priority: 20,
          enforce: true
        },
        // 其他公共依赖
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          priority: 10,
          chunks: 'all'
        }
      }
    }
  },
  resolve: {
    alias: {
      // 根据环境切换 Vue 版本
      'vue': process.env.VUE_VERSION === '3' 
        ? 'vue/dist/vue.esm-bundler.js' 
        : 'vue/dist/vue.esm.js'
    }
  }
}`;

const downloadTemplate = (type: string) => {
  let content = '';
  let filename = '';
  
  switch(type) {
    case 'vite':
      content = viteConfigExample;
      filename = 'vite.config.js';
      break;
    case 'cli':
      content = cliPluginExample;
      filename = 'vue.config.js';
      break;
    case 'webpack':
      content = webpackOptimizationExample;
      filename = 'webpack.config.js';
      break;
    default:
      content = '// 配置模板';
      filename = 'config.js';
  }
  
  const blob = new Blob([content], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
</script>

<style scoped>
.hybrid-dev-configuration {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.config-description {
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.config-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-bg);
  color: var(--color-text);
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  border-bottom: 1px solid var(--color-surface);
  position: relative;
  top: 1px;
}

.config-content {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 0 4px 4px 4px;
  padding: 1.5rem;
  min-height: 300px;
}

.config-section h3 {
  margin-top: 0;
  color: var(--color-text);
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.config-example {
  margin: 1.5rem 0;
}

.config-example h4 {
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.config-example pre {
  background-color: var(--color-code-bg);
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

.compatibility-info {
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: var(--color-surface);
  border-radius: 4px;
  border-left: 4px solid var(--color-primary);
}

.compatibility-info h4 {
  margin-top: 0;
  color: var(--color-text);
}

.compatibility-info ol, .compatibility-info ul {
  padding-left: 1.5rem;
}

.compatibility-info li {
  margin-bottom: 0.5rem;
}

.compatibility-info code {
  background-color: var(--color-code-bg);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.9em;
}

.optimization-tips {
  margin: 1.5rem 0;
}

.optimization-tips h4 {
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.optimization-tips ul {
  padding-left: 1.5rem;
}

.optimization-tips li {
  margin-bottom: 0.5rem;
}

.download-templates {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.download-templates h3 {
  color: var(--color-text);
  margin-bottom: 1rem;
}

.template-options {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.template-btn {
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.template-btn:hover {
  background-color: var(--color-primary-dark);
}
</style>