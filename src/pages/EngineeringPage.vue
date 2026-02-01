<template>
  <div class="engineering-page">
    <h1>⚙️ 工程化</h1>
    <p class="page-description">
      Vue 3 生态系统的工程化实践，提升开发效率和代码质量
    </p>
    
    <div class="content-grid">
      <section class="section-card">
        <h2>构建工具</h2>
        <p>使用现代构建工具提升开发效率和构建性能。</p>
        <ul>
          <li>Vite：快速的开发服务器和构建工具</li>
          <li>Rollup：强大的打包能力</li>
          <li>ESBuild：极速的转译和压缩</li>
          <li>SWC：Rust 编写的高性能工具</li>
        </ul>
      </section>
      
      <section class="section-card">
        <h2>测试策略</h2>
        <p>建立完善的测试体系，确保升级过程中的质量保障。</p>
        <ul>
          <li>单元测试：验证组件和函数逻辑</li>
          <li>集成测试：验证模块间协作</li>
          <li>E2E 测试：端到端用户流程验证</li>
          <li>快照测试：UI 变化追踪</li>
        </ul>
      </section>
      
      <section class="section-card">
        <h2>代码质量</h2>
        <p>维护高质量的代码标准和最佳实践。</p>
        <ul>
          <li>ESLint：代码规范检查</li>
          <li>Prettier：代码格式化</li>
          <li>TypeScript：静态类型检查</li>
          <li>Husky：Git 钩子管理</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Engineering page component
</script>

<style scoped>
.engineering-page {
  padding: 1rem;
}

.page-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  text-align: center;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.section-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
}

.section-card h2 {
  margin-top: 0;
  color: var(--color-text);
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.section-card ul {
  padding-left: 1.5rem;
}

.section-card li {
  margin-bottom: 0.5rem;
}
</style>