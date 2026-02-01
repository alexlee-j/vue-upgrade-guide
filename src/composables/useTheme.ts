import { ref, watch } from 'vue';

const theme = ref<'light' | 'dark'>('light');

// 初始化主题
const initTheme = () => {
  const savedTheme = localStorage.getItem('vue-upgrade-guide-theme') as 'light' | 'dark' | null;
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    theme.value = savedTheme;
  } else {
    theme.value = systemPrefersDark ? 'dark' : 'light';
  }
  
  applyTheme(theme.value);
};

// 应用主题到DOM
const applyTheme = (themeValue: 'light' | 'dark') => {
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(themeValue);
  document.documentElement.setAttribute('data-theme', themeValue);
};

// 切换主题
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('vue-upgrade-guide-theme', theme.value);
  applyTheme(theme.value);
};

// 设置特定主题
const setTheme = (newTheme: 'light' | 'dark') => {
  theme.value = newTheme;
  localStorage.setItem('vue-upgrade-guide-theme', theme.value);
  applyTheme(newTheme);
};

// 在应用启动时初始化主题
initTheme();

// 监听主题变化
watch(theme, (newTheme) => {
  applyTheme(newTheme);
});

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('vue-upgrade-guide-theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    theme.value = newTheme;
    applyTheme(newTheme);
  }
});

export const useTheme = () => {
  return {
    theme,
    toggleTheme,
    setTheme
  };
};