import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';
import ReactMarkdown from 'react-markdown';
// 引入高亮组件和主题
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// 尝试这种更通用的路径写法
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus';

const PostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">文章不存在</h2>
        <Link to="/" className="text-blue-600 mt-4 inline-block">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link to="/" className="text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm font-medium">
          ← 返回文章列表
        </Link>
      </nav>
      
      <article className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <header className="p-8 pb-0">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="p-8 pt-6">
          <div className="prose prose-slate lg:prose-lg max-w-none">
            <ReactMarkdown
              components={{
                // 核心逻辑：拦截 Markdown 中的 code 标签并应用高亮
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus} // 使用类似 VS Code 的深色主题
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;