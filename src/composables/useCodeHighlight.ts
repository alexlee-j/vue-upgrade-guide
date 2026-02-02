import { ref } from 'vue';

// 代码高亮功能，使用 Prism.js 风格的标记
export const useCodeHighlight = () => {
  const highlightedCode = ref<string>('');
  
  const highlightCode = (code: string, language: string = 'javascript'): string => {
    // 简单的语法高亮实现
    let highlighted = escapeHtml(code);
    
    // 通用高亮：数字、布尔值、操作符
    highlighted = highlighted.replace(/\b(true|false)\b/g, '<span class="token boolean">$1</span>');
    highlighted = highlighted.replace(/\b\d+(\.\d+)?\b/g, '<span class="token number">$&</span>');
    highlighted = highlighted.replace(/(\+|-|\*|\/|%|=|==|===|!=|!==|>|<|>=|<=|&&|\|\||!|\+\+|--)/g, '<span class="token operator">$&</span>');
    
    // JavaScript/TypeScript 关键字
    if (language === 'javascript' || language === 'typescript') {
      const jsKeywords = [
        'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default',
        'import', 'export', 'from', 'default', 'async', 'await', 'try', 'catch', 'finally', 'throw',
        'ref', 'reactive', 'computed', 'watch', 'watchEffect', 'setup', 'defineComponent', 'onMounted', 'onUnmounted',
        'onUpdated', 'onBeforeMount', 'onBeforeUpdate', 'onBeforeUnmount', 'provide', 'inject', 'toRefs', 'isRef',
        'shallowRef', 'shallowReactive', 'readonly', 'isReactive', 'isReadonly', 'nextTick', 'useRouter', 'useRoute'
      ];
      
      jsKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
        highlighted = highlighted.replace(regex, '<span class="token keyword">$1</span>');
      });
      
      // 字符串高亮
      highlighted = highlighted.replace(/("[^"]*")|('([^']*)')|(`[^`]*`)/g, '<span class="token string">$&</span>');
      
      // 注释高亮
      highlighted = highlighted.replace(/(\/\/.*$)|(\/\*[\s\S]*?\*\/)/gm, '<span class="token comment">$&</span>');
      
      // 函数名高亮
      highlighted = highlighted.replace(/function\s+([a-zA-Z_$][\w$]*)/g, 'function <span class="token function">$1</span>');
      highlighted = highlighted.replace(/([a-zA-Z_$][\w$]*)\s*\(/g, '<span class="token function">$1</span>(');
      
      // 类型高亮 (TypeScript)
      if (language === 'typescript') {
        highlighted = highlighted.replace(/:\s*([a-zA-Z_$][\w$]*)/g, ': <span class="token type">$1</span>');
        highlighted = highlighted.replace(/interface\s+([a-zA-Z_$][\w$]*)/g, 'interface <span class="token interface">$1</span>');
        highlighted = highlighted.replace(/type\s+([a-zA-Z_$][\w$]*)/g, 'type <span class="token type">$1</span>');
      }
    }
    // HTML 高亮
    else if (language === 'html' || language === 'vue') {
      // 标签高亮
      highlighted = highlighted.replace(/(&lt;[a-zA-Z][^\&]*&gt;)/g, '<span class="token tag">$&</span>');
      highlighted = highlighted.replace(/(<[a-zA-Z][^>]*>)/g, '<span class="token tag">$&</span>');
      
      // 闭合标签高亮
      highlighted = highlighted.replace(/(&lt;\/[a-zA-Z][^\&]*&gt;)/g, '<span class="token tag">$&</span>');
      highlighted = highlighted.replace(/(<\/[a-zA-Z][^>]*>)/g, '<span class="token tag">$&</span>');
      
      // 属性高亮
      highlighted = highlighted.replace(/(\w+)=/g, '<span class="token attr-name">$1</span>=');
      highlighted = highlighted.replace(/(="[^"]*")|('([^']*)')/g, '<span class="token attr-value">$&</span>');
      
      // Vue 指令高亮
      highlighted = highlighted.replace(/(v-[a-zA-Z][^=]*)/g, '<span class="token directive">$1</span>');
    }
    // CSS 高亮
    else if (language === 'css') {
      // 选择器高亮
      highlighted = highlighted.replace(/^([.#][\w-]+|[\w-]+|\*)/gm, '<span class="token selector">$&</span>');
      
      // 属性高亮
      highlighted = highlighted.replace(/([\w-]+):/g, '<span class="token property">$1</span>:');
      
      // 值高亮
      highlighted = highlighted.replace(/(:\s*)([^;}]*)/g, '$1<span class="token value">$2</span>');
      
      // 单位高亮
      highlighted = highlighted.replace(/(\d+)(px|em|rem|%|vh|vw|vmin|vmax|pt|pc|in|cm|mm)/g, '$1<span class="token unit">$2</span>');
      
      // 颜色高亮
      highlighted = highlighted.replace(/#([0-9a-fA-F]{3,6})/g, '<span class="token color">$&</span>');
    }
    
    return highlighted;
  };
  
  // 辅助函数：转义HTML字符以防止XSS
  const escapeHtml = (str: string): string => {
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
  };
  
  const languages = ['javascript', 'typescript', 'vue', 'html', 'css'];
  
  return {
    highlightedCode,
    highlightCode,
    languages
  };
};