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
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  margin-left: 250px; /* 留出侧边栏空间 */
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: calc(100% - 250px);
}
</style>