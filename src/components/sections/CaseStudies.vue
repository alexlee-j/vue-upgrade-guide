<template>
  <section class="case-studies">
    <h2>📚 真实案例研究</h2>
    <p>分析真实的 Vue 2 到 Vue 3 升级案例。</p>
    
    <div v-for="study in caseStudies" :key="study.id" class="case-study">
      <div class="case-study-header">
        <h3>{{ study.title }}</h3>
        <p>{{ study.description }}</p>
      </div>
      <div class="case-study-content">
        <div class="stats-grid">
          <div class="stat-item">
            <h4>团队规模</h4>
            <p>{{ study.teamSize }}人</p>
          </div>
          <div class="stat-item">
            <h4>组件数量</h4>
            <p>{{ study.componentCount }}+</p>
          </div>
          <div class="stat-item">
            <h4>升级周期</h4>
            <p>{{ study.duration }}</p>
          </div>
        </div>
        
        <div class="content-section">
          <h4>面临的挑战</h4>
          <ul>
            <li v-for="(challenge, index) in study.challenges" :key="'challenge-' + index">
              {{ challenge }}
            </li>
          </ul>
        </div>
        
        <div class="content-section">
          <h4>解决方案</h4>
          <ul>
            <li v-for="(solution, index) in study.solutions" :key="'solution-' + index">
              {{ solution }}
            </li>
          </ul>
        </div>
        
        <div class="content-section">
          <h4>取得的成果</h4>
          <ul>
            <li v-for="(result, index) in study.results" :key="'result-' + index">
              {{ result }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { caseStudies } from '../../data/caseStudies';
</script>

<style scoped>
.case-study {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin: 1rem 0;
  overflow: hidden;
}

.case-study-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
}

.case-study-header h3 {
  margin: 0 0 0.5rem 0;
}

.case-study-header p {
  margin: 0;
  opacity: 0.9;
}

.case-study-content {
  padding: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: var(--border-radius);
}

.stat-item {
  text-align: center;
}

.stat-item h4 {
  margin: 0 0 0.5rem 0;
  color: var(--secondary);
  font-size: 0.9rem;
}

.stat-item p {
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--dark);
}

.content-section {
  margin: 1.5rem 0;
}

.content-section h4 {
  color: var(--primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.content-section ul {
  padding-left: 1.5rem;
}

.content-section li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

/* 为第二个案例使用不同的主题色 */
.case-study:nth-child(2) .case-study-header {
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
}

/* 为第三个案例使用不同的主题色 */
.case-study:nth-child(3) .case-study-header {
  background: linear-gradient(135deg, #11998e, #38ef7d);
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>