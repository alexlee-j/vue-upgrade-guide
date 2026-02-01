import { ref } from 'vue';

// 简化的代码高亮功能
export const useCodeHighlight = () => {
  const highlightedCode = ref<string>('');
  
  const highlightCode = (code: string, language: string = 'javascript'): string => {
    // 这里只是一个模拟的高亮功能，在实际应用中可以集成Prism.js或其他高亮库
    return code; // 返回原始代码，实际项目中会返回带高亮标记的代码
  };
  
  const languages = ['javascript', 'typescript', 'vue', 'html', 'css'];
  
  return {
    highlightedCode,
    highlightCode,
    languages
  };
};