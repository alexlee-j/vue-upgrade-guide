<template>
  <div class="team-management-page">
    <h1>👥 团队管理</h1>
    <p class="page-description">
      如何在团队中推进 Vue 3 升级，包括培训计划、风险控制和进度管理
    </p>
    
    <div class="content-grid">
      <section class="section-card">
        <h2>团队培训计划</h2>
        <p>制定系统的 Vue 3 培训计划，确保团队成员具备必要的技能。</p>
        <ul>
          <li>Composition API 培训</li>
          <li>TypeScript 深入学习</li>
          <li>新工具链熟悉</li>
          <li>最佳实践分享</li>
        </ul>
      </section>
      
      <section class="section-card">
        <h2>角色分工</h2>
        <p>明确团队成员在升级过程中的职责和角色。</p>
        <ul>
          <li>技术负责人：制定升级策略</li>
          <li>架构师：设计迁移方案</li>
          <li>开发人员：执行具体迁移任务</li>
          <li>测试人员：确保质量保障</li>
        </ul>
      </section>
      
      <section class="section-card">
        <h2>沟通机制</h2>
        <p>建立有效的沟通渠道，及时同步升级进展和解决问题。</p>
        <ul>
          <li>每日站会</li>
          <li>周度回顾</li>
          <li>问题跟踪系统</li>
          <li>知识库维护</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Team Management page component
</script>

<style scoped>
.team-management-page {
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