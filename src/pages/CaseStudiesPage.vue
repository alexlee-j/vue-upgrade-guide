<template>
  <div class="case-studies-page">
    <h1>📚 案例研究</h1>
    <p class="page-description">
      真实的 Vue 2 到 Vue 3 升级案例，总结经验和教训
    </p>
    
    <div class="content-grid">
      <section class="section-card">
        <h2>大型企业应用升级</h2>
        <p>某大型企业 ERP 系统的 Vue 3 升级实践。</p>
        <ul>
          <li><strong>规模：</strong>50万+行代码，100+组件</li>
          <li><strong>团队：</strong>15人开发团队，跨3个部门</li>
          <li><strong>周期：</strong>6个月分阶段升级</li>
          <li><strong>成果：</strong>性能提升40%，bundle大小减少25%</li>
        </ul>
      </section>
      
      <section class="section-card">
        <h2>电商平台升级</h2>
        <p>电商平台前端架构的 Vue 3 升级历程。</p>
        <ul>
          <li><strong>挑战：</strong>零停机升级，保证业务连续性</li>
          <li><strong>方案：</strong>渐进式升级，混合模式运行</li>
          <li><strong>收益：</strong>首屏加载速度提升50%</li>
          <li><strong>经验：</strong>分模块灰度发布策略</li>
        </ul>
      </section>
      
      <section class="section-card">
        <h2>SaaS 产品升级</h2>
        <p>SaaS 产品的 Vue 3 升级最佳实践。</p>
        <ul>
          <li><strong>策略：</strong>新功能使用 Vue 3，旧功能逐步迁移</li>
          <li><strong>工具：</strong>自动化迁移脚本辅助</li>
          <li><strong>培训：</strong>内部技术分享和培训计划</li>
          <li><strong>效果：</strong>开发效率提升30%</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Case Studies page component
</script>

<style scoped>
.case-studies-page {
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