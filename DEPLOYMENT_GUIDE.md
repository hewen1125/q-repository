# GitHub Pages 部署指南

## 🚀 快速部署

### 1. 准备工作
1. 确保你有 GitHub 账户
2. Fork 或下载本项目到你的 GitHub 仓库

### 2. 启用 GitHub Pages
1. 进入你的 GitHub 仓库
2. 点击 **Settings** 选项卡
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **GitHub Actions**

### 3. 配置项目
编辑 `_config.yml` 文件，修改以下配置：

```yaml
# 修改为你的 GitHub 用户名和仓库名
url: "https://hewen1125.github.io/q-repository"
title: "你的项目标题"
description: "你的项目描述"
author: "你的名字"

# 修改社交链接
social:
  github: hewen1125
  email: hewen1125@hotmail.com
```

### 4. 推送代码
```bash
git add .
git commit -m "Configure GitHub Pages"
git push origin main
```

### 5. 等待部署
- GitHub Actions 会自动开始构建
- 在 **Actions** 选项卡中可以查看构建进度
- 通常需要 2-5 分钟完成首次部署
- 部署成功后会显示绿色的 ✅

### 6. 访问网站
部署完成后，你可以通过以下 URL 访问你的网站：
```
https://hewen1125.github.io/q-repository
```

## 🛠️ 自定义配置

### 修改主题样式
编辑 `assets/css/style.scss` 文件来自定义样式：

```scss
// 修改主色调
:root {
  --primary-color: #your-color;
  --secondary-color: #your-secondary-color;
}
```

### 添加新项目
1. 在对应的分类目录下创建 `.md` 文件
2. 使用项目模板格式
3. 更新索引文件

### 修改导航菜单
在 `_config.yml` 中修改 `header_pages`：

```yaml
header_pages:
  - index.md
  - categories.md
  - by-language.md
  - by-stars.md
  - featured.md
  - your-new-page.md
```

## 🔧 本地开发

### 安装 Ruby 和 Jekyll
```bash
# macOS 使用 Homebrew
brew install ruby
gem install jekyll bundler

# Ubuntu/Debian
sudo apt-get install ruby-full build-essential zlib1g-dev
gem install jekyll bundler
```

### 本地运行
```bash
# 安装依赖
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问 http://localhost:4000
```

### 实时预览
Jekyll 支持热重载，修改文件后会自动重新构建页面。

## 📋 故障排除

### 常见问题

**1. 构建失败**
- 检查 `_config.yml` 语法是否正确
- 确保所有 Markdown 文件的 Front Matter 格式正确
- 查看 Actions 标签页的错误日志

**2. CSS/JS 文件 404 错误**
- 确保 `assets/main.scss` 文件存在且有正确的 Front Matter (以 `---` 开头)
- 检查 `_config.yml` 中的 `baseurl` 配置是否与仓库名一致
- 确保 JavaScript 文件在 `assets/js/main.js` 位置
- 检查是否正确使用 `{{ '/assets/main.css' | relative_url }}` 语法

**3. 页面显示异常**
- 检查 CSS 文件是否有语法错误
- 确保图片链接路径正确
- 验证 JavaScript 代码是否有错误

**3. 链接失效**
- 检查相对路径是否正确
- 确保 `baseurl` 配置正确
- 验证文件名和路径大小写

**4. 搜索功能不工作**
- 检查 `assets/js/main.js` 是否正确加载
- 确保项目数据数组格式正确
- 验证 HTML 元素 ID 是否匹配

### 调试技巧

**本地调试**
```bash
# 启用详细日志
bundle exec jekyll serve --verbose

# 启用增量构建
bundle exec jekyll serve --incremental

# 启用实时重载
bundle exec jekyll serve --livereload
```

**检查构建**
```bash
# 只构建不启动服务器
bundle exec jekyll build

# 检查站点健康状况
bundle exec jekyll doctor
```

## 🌟 高级功能

### 添加评论系统
可以集成 Disqus、Gitalk 等评论系统。

### 添加搜索功能
可以使用 Jekyll Search 插件或自定义搜索功能。

### 添加统计分析
可以集成 Google Analytics 或其他分析工具。

### SEO 优化
- 使用 `jekyll-seo-tag` 插件
- 添加 sitemap.xml
- 优化页面标题和描述

## 📞 获取帮助

- **GitHub Issues**: 在项目仓库中提交问题
- **Jekyll 文档**: https://jekyllrb.com/docs/
- **GitHub Pages 文档**: https://docs.github.com/en/pages

## 🎉 部署成功！

恭喜！你的 GitHub 优秀项目精选网站已经成功部署到 GitHub Pages。

现在你可以：
- ✅ 分享你的网站链接
- ✅ 添加新的项目
- ✅ 自定义样式和功能
- ✅ 持续更新和维护