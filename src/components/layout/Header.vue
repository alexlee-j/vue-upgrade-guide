<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">Vue 3 升级指南</h1>
      <nav class="nav">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/compare" class="nav-item">心智模型对比</router-link>
        <router-link to="/decision-tree" class="nav-item">决策树</router-link>
        <router-link to="/team-management" class="nav-item">团队管理</router-link>
        <router-link to="/tech-debt" class="nav-item">技术债务</router-link>
        <router-link to="/engineering" class="nav-item">工程化</router-link>
      </nav>
      <button @click="toggleTheme" class="theme-toggle">
        {{ theme === 'dark' ? '🌙' : '☀️' }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.header {
  background-color: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
  margin: 0;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-item {
  text-decoration: none;
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-item.router-link-active,
.nav-item:hover {
  background-color: var(--color-primary-light);
  color: white;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--color-surface);
}
</style>