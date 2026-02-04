<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">Vue 3 升级指南</h1>
      <button @click="toggleMobileMenu" class="menu-toggle" v-if="isMobile">
        <span class="menu-icon" :class="{ 'open': mobileMenuOpen }"></span>
      </button>
      <nav class="nav" :class="{ 'mobile': isMobile, 'open': mobileMenuOpen }">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/compare" class="nav-item">心智模型对比</router-link>
        <router-link to="/decision-tree" class="nav-item">决策树</router-link>
        <router-link to="/team-management" class="nav-item">团队管理</router-link>
        <router-link to="/tech-debt" class="nav-item">技术债务</router-link>
        <router-link to="/engineering" class="nav-item">工程化</router-link>
      </nav>
      <button @click="toggleTheme" class="theme-toggle" :class="{ 'dark-theme': theme === 'dark' }">
        <span class="theme-icon sun">☀️</span>
        <span class="theme-icon moon">🌙</span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useTheme } from '@/composables/useTheme';

const { theme, toggleTheme } = useTheme();
const mobileMenuOpen = ref(false);

const isMobile = computed(() => {
  return window.innerWidth < 768;
});

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleResize = () => {
  if (window.innerWidth >= 768) {
    mobileMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.header {
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: var(--z-index-sticky);
  transition: var(--transition);
  backdrop-filter: blur(8px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: var(--transition);
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.02);
}

.nav {
  display: flex;
  gap: var(--spacing-md);
}

.menu-toggle {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius);
  transition: var(--transition);
  margin-right: var(--spacing-sm);
  display: none;
}

.menu-toggle:hover {
  background: var(--color-hover);
  box-shadow: var(--box-shadow);
}

.menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  position: relative;
  transition: var(--transition);
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: var(--transition);
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  top: 8px;
}

.menu-icon.open {
  background: transparent;
}

.menu-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-icon.open::after {
  transform: rotate(-45deg);
  top: 0;
}

.nav-item {
  text-decoration: none;
  color: var(--color-text);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  transition: var(--transition);
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width var(--transition);
}

.nav-item.router-link-active,
.nav-item:hover {
  background-color: var(--primary-transparent);
  color: var(--primary);
  transform: translateY(-1px);
}

.nav-item.router-link-active::before,
.nav-item:hover::before {
  width: 100%;
}

.theme-toggle {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  font-size: var(--font-size-lg);
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: 50%;
  transition: var(--transition);
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.theme-toggle:hover {
  transform: rotate(180deg);
  box-shadow: var(--box-shadow);
}

.theme-icon {
  position: absolute;
  transition: opacity var(--transition), transform var(--transition);
}

.theme-icon.sun {
  opacity: 1;
  transform: scale(1);
}

.theme-icon.moon {
  opacity: 0;
  transform: scale(0.8);
}

.theme-toggle.dark-theme .theme-icon.sun {
  opacity: 0;
  transform: scale(0.8);
}

.theme-toggle.dark-theme .theme-icon.moon {
  opacity: 1;
  transform: scale(1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .header-content {
    padding: var(--spacing-sm) var(--spacing-md);
  }
  
  .menu-toggle {
    display: block;
  }
  
  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    flex-direction: column;
    gap: 0;
    padding: var(--spacing-sm);
    box-shadow: var(--box-shadow);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: var(--z-index-sticky);
  }
  
  .nav.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-item {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-sm);
    border-radius: var(--border-radius-sm);
    margin-bottom: var(--spacing-xs);
  }
  
  .logo {
    font-size: var(--font-size-lg);
  }
}
</style>