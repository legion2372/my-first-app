import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState(''); // 新增：搜索词状态

  const categories = ['全部', ...new Set(blogPosts.map(post => post.category))];

  // 核心逻辑：双重过滤（分类 + 搜索词）
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === '全部' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">精选文章</h1>
          <p className="text-slate-500 mt-1">在这里搜索你感兴趣的内容</p>
        </div>

        {/* 搜索框组件 */}
        <div className="relative group">
          <input
            type="text"
            placeholder="搜索文章标题或摘要..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none pl-12"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
            🔍
          </span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500"
            >
              ✕
            </button>
          )}
        </div>
      </header>

      {/* 分类过滤器 */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' 
                : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 文章列表渲染 */}
      <div className="grid gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`} className="group">
              <article className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:border-blue-200 group-hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed line-clamp-2 text-sm">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
            <p className="text-slate-400">没有找到匹配内容，换个词试试？</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;