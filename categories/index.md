---
layout: page
title: "所有分类"
description: "按功能分类浏览所有收录项目"
permalink: /categories/
---

# 📂 所有分类

> 根据项目的主要功能和应用场景进行分类整理

## 🏆 活跃分类

<div class="categories-grid">
  <div class="category-card active">
    <div class="category-header">
      <h3><a href="development-tools/">🛠️ 开发工具</a></h3>
      <span class="project-count">2项目</span>
    </div>
    <p class="category-desc">提升开发效率和体验的优质工具</p>
    <div class="category-stats">
      <span class="stat">平均评分: 24.0/25</span>
      <span class="stat">S级项目: 100%</span>
    </div>
    <div class="featured-projects">
      <a href="development-tools/openai-codex.html" class="featured-link">OpenAI Codex CLI</a>
      <a href="development-tools/markitdown.html" class="featured-link">Microsoft MarkItDown</a>
    </div>
  </div>
</div>

## 🔄 计划分类

<div class="planned-categories-grid">
  <div class="planned-category">
    <h4>🤖 AI与机器学习</h4>
    <p>人工智能、机器学习相关的项目和工具</p>
    <div class="planning-note">关注方向：TensorFlow、PyTorch、Hugging Face等</div>
  </div>
  
  <div class="planned-category">
    <h4>📊 数据处理</h4>
    <p>数据分析、处理和可视化工具</p>
    <div class="planning-note">候选项目：Pandas、Apache Spark、Dask等</div>
  </div>
  
  <div class="planned-category">
    <h4>🌐 Web框架</h4>
    <p>前端和后端Web开发框架</p>
    <div class="planning-note">关注方向：React、Vue、Angular、Express等</div>
  </div>
  
  <div class="planned-category">
    <h4>📱 移动开发</h4>
    <p>移动应用开发相关工具和框架</p>
    <div class="planning-note">关注方向：React Native、Flutter、Ionic等</div>
  </div>
  
  <div class="planned-category">
    <h4>🔒 安全工具</h4>
    <p>网络安全、代码安全相关工具</p>
    <div class="planning-note">关注方向：静态分析、漏洞扫描、加密工具等</div>
  </div>
  
  <div class="planned-category">
    <h4>🗄️ 数据库</h4>
    <p>数据库系统和相关工具</p>
    <div class="planning-note">关注方向：PostgreSQL、Redis、MongoDB等</div>
  </div>
</div>

<style>
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.category-card {
  border: 2px solid #e1e4e8;
  border-radius: 16px;
  padding: 2rem;
  background: white;
  transition: all 0.3s ease;
}

.category-card.active {
  border-color: #0366d6;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
}

.category-card:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transform: translateY(-5px);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.category-header h3 {
  margin: 0;
  font-size: 1.3rem;
}

.category-header a {
  color: #0366d6;
  text-decoration: none;
}

.project-count {
  background: #0366d6;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.category-desc {
  color: #586069;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.category-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.stat {
  background: #f1f3f4;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #24292e;
}

.featured-projects {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.featured-link {
  color: #0366d6;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid #e1e4e8;
}

.featured-link:hover {
  text-decoration: underline;
}

.planned-categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.planned-category {
  border: 2px dashed #dee2e6;
  border-radius: 12px;
  padding: 2rem;
  background: #f8f9fa;
  text-align: center;
}

.planned-category h4 {
  margin: 0 0 1rem 0;
  color: #495057;
  font-size: 1.1rem;
}

.planned-category p {
  color: #6c757d;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.planning-note {
  background: #e9ecef;
  padding: 0.8rem;
  border-radius: 8px;
  color: #495057;
  font-size: 0.8rem;
  font-style: italic;
}
</style>