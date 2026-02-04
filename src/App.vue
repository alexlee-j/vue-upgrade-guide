<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <Sidebar />
      <main class="main-content">
        <RouterView />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/layout/Header.vue';
import Sidebar from './components/layout/Sidebar.vue';
import Footer from './components/layout/Footer.vue';
</script>

<style>
@import './assets/styles/theme.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.main-container {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  margin-left: 250px; /* 留出侧边栏空间 */
  padding: 2rem;
  width: calc(100% - 250px);
  transition: all 0.3s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    width: 100%;
    padding: 1rem;
  }
}
</style>