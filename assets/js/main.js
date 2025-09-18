// 项目搜索和筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const filterTags = document.querySelectorAll('.filter-tag');
    const searchResults = document.getElementById('search-results');
    
    // 项目数据 (可以从外部JSON文件加载)
    const projects = [
        {
            name: "OpenAI Codex CLI",
            description: "OpenAI官方开发的本地AI编程助手，在终端中直接运行，支持代码读写和运行",
            language: "JavaScript/TypeScript",
            stars: "42.3k+",
            rating: "25/25",  
            tags: ["ai", "development", "official", "hot"],
            url: "categories/development-tools/openai-codex.html"
        },
        {
            name: "Microsoft MarkItDown",
            description: "Microsoft开源的多格式文档转换工具，支持Office、PDF、图片等转为Markdown",
            language: "Python",
            stars: "25k+",
            rating: "23/25",
            tags: ["development", "utility", "official", "trending"],
            url: "categories/development-tools/markitdown.html"
        }
    ];
    
    let currentFilter = 'all';
    
    // 搜索功能
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            if (query.length > 0) {
                performSearch(query);
            } else {
                searchResults.innerHTML = '';
            }
        });
    }
    
    // 筛选功能
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除所有active类
            filterTags.forEach(t => t.classList.remove('active'));
            // 添加active类到当前标签
            this.classList.add('active');
            
            currentFilter = this.dataset.filter;
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
            
            if (query.length > 0) {
                performSearch(query);
            } else {
                searchResults.innerHTML = '';
            }
        });
    });
    
    // 执行搜索
    function performSearch(query) {
        let filteredProjects = projects.filter(project => {
            const matchesQuery = 
                project.name.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.language.toLowerCase().includes(query) ||
                project.tags.some(tag => tag.toLowerCase().includes(query));
            
            const matchesFilter = currentFilter === 'all' || 
                project.tags.includes(currentFilter) ||
                project.language.toLowerCase().includes(currentFilter);
            
            return matchesQuery && matchesFilter;
        });
        
        displaySearchResults(filteredProjects);
    }
    
    // 显示搜索结果
    function displaySearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<p class="no-results">没有找到匹配的项目</p>';
            return;
        }
        
        const resultsHTML = results.map(project => `
            <div class="search-result-item">
                <div class="result-header">
                    <h4><a href="${project.url}">${project.name}</a></h4>
                    <span class="result-rating">${project.rating}</span>
                </div>
                <div class="result-meta">
                    <span class="result-language">${project.language}</span>
                    <span class="result-stars">⭐ ${project.stars}</span>
                </div>
                <p class="result-desc">${project.description}</p>
                <div class="result-tags">
                    ${project.tags.map(tag => `<span class="result-tag ${tag}">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
        
        searchResults.innerHTML = `
            <div class="search-results-container">
                <h3>搜索结果 (${results.length})</h3>
                ${resultsHTML}
            </div>
        `;
    }
    
    // 统计数据动画
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (!isNaN(target)) {
            animateNumber(stat, target);
        }
    });
    
    // 数字动画函数
    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 30; // 30帧动画
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 50);
    }
    
    // 卡片hover效果增强
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// 主题切换功能 (可选)
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// 加载保存的主题
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});