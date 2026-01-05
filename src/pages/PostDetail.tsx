import { useParams, Link } from 'react-router-dom';
import { blogPosts, Post } from '../data/posts';

const PostDetail = () => {
  const { id } = useParams();
  
  // 查找文章，注意这里我们将 id 转为数字进行匹配
  const post = blogPosts.find(p => p.id === Number(id)) as Post | undefined;

  if (!post) {
    return (
      <div className="text-center py-20 bg-slate-50 rounded-[2rem]">
        <p className="text-slate-400">文章去外星了...</p>
        <Link to="/" className="text-blue-600 mt-4 inline-block">返回首页</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2 transition-colors">
        ← 返回首页
      </Link>
      
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
            {post.category}
          </span>
          <time className="text-slate-400 text-sm">{post.date}</time>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          {post.title}
        </h1>
      </header>

      {/* 只有当 post 里面有 image 字段时才显示图片 */}
      {post.image && (
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img 
            src={post.image} 
            alt={post.title}
            className="relative w-full h-[400px] object-cover rounded-[2rem] shadow-2xl border border-white/20"
          />
        </div>
      )}

      <div className="prose prose-slate prose-lg max-w-none leading-relaxed text-slate-700">
        {post.content.split('\n').map((paragraph, index) => (
          paragraph.trim() && <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default PostDetail;