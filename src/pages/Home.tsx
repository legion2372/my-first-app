import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';

const Home = () => {
  // 1. 状态管理：记录当前选中的分类，默认为“全部”
  const [activeCategory, setActiveCategory] = useState('全部');

  // 2. 自动提取分类：从文章数据中自动获取所有不重复的分类名称
  const categories = ['全部', ...new Set(blogPosts.map(post => post.category))];

  // 3. 过滤逻辑：根据选中的分类决定显示哪些文章
  const filteredPosts = activeCategory === '全部' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="space-y-10">
      {/* 头部标题区 */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">精选文章</h1>
        <p className="text-slate-500">探索技术、生活与思考的交汇点</p>
      </header>

      {/* 分类过滤器：点击即可实时筛选 */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
                : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 动态文章列表 */}
      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} className="group">
            <article className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm group-hover:shadow-xl group-hover:border-blue-200 group-hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-slate-400 text-xs font-medium">{post.date}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h2>
              
              <p className="text-slate-600 leading-relaxed line-clamp-2 text-sm">
                {post.excerpt}
              </p>
              
              <div className="mt-6 flex items-center text-blue-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                阅读全文 
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* 极简页脚 */}
      <footer className="pt-20 text-center text-slate-300 text-xs tracking-widest uppercase">
        Stay Hungry · Stay Foolish
      </footer>
    </div>
  );
};

export default Home;