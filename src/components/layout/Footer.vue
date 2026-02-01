<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Vue 3 升级指南</h4>
        <p>帮助开发者顺利从 Vue 2 迁移到 Vue 3</p>
      </div>
      
      <div class="footer-section">
        <h4>资源链接</h4>
        <ul>
          <li><a href="https://vuejs.org/" target="_blank">Vue 官方文档</a></li>
          <li><a href="https://v3-migration.vuejs.org/" target="_blank">Vue 3 迁移指南</a></li>
          <li><a href="https://github.com/vuejs/vue-cli" target="_blank">Vue CLI</a></li>
          <li><a href="https://vitejs.dev/" target="_blank">Vite</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>联系方式</h4>
        <p>如有问题，请联系项目维护者</p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Vue 3 升级指南. 保留所有权利.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>

<style scoped>
.footer {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 2rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}

.footer-section h4 {
  margin-top: 0;
  color: var(--color-text);
  font-size: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--color-primary);
  text-decoration: none;
}

.footer-section a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}
</style>