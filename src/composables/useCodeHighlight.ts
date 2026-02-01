import { ref } from 'vue';

// 代码高亮功能，使用 Prism.js 风格的标记
export const useCodeHighlight = () => {
  const highlightedCode = ref<string>('');
  
  const highlightCode = (code: string, language: string = 'javascript'): string => {
    // 简单的语法高亮实现
    let highlighted = escapeHtml(code);
    
    // JavaScript/TypeScript 关键字
    if (language === 'javascript' || language === 'typescript') {
      const jsKeywords = [
        'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while',
        'import', 'export', 'from', 'default', 'async', 'await', 'try', 'catch',
        'ref', 'reactive', 'computed', 'watch', 'setup', 'defineComponent'
      ];
      
      jsKeywords.forEach(keyword => {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
        highlighted = highlighted.replace(regex, '<span class="token keyword">$1</span>');
      });
      
      // 字符串高亮
      highlighted = highlighted.replace(/("[^"]*")|('[^']*')/g, '<span class="token string">$&</span>');
      
      // 注释高亮
      highlighted = highlighted.replace(/(\/\/.*)|(\/\*[\s\S]*?\*\/)/g, '<span class="token comment">$&</span>');
    }
    // HTML 高亮
    else if (language === 'html' || language === 'vue') {
      // 标签高亮
      highlighted = highlighted.replace(/(&lt;[^\&]*&gt;)/g, '<span class="token tag">$&</span>');
      highlighted = highlighted.replace(/(<[^>]*>)/g, '<span class="token tag">$&</span>');
      
      // 属性高亮
      highlighted = highlighted.replace(/(\w+)=/g, '<span class="token attr-name">$1</span>=');
      highlighted = highlighted.replace(/(="[^"]*")|('([^']*)')/g, '<span class="token attr-value">$&</span>');
    }
    // CSS 高亮
    else if (language === 'css') {
      // 选择器高亮
      highlighted = highlighted.replace(/^([.#][\w-]+|[\w-]+)/gm, '<span class="token selector">$&</span>');
      
      // 属性高亮
      highlighted = highlighted.replace(/([\w-]+):/g, '<span class="token property">$1</span>:');
      
      // 值高亮
      highlighted = highlighted.replace(/(:\s*)([^;}]*)/g, '$1<span class="token value">$2</span>');
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