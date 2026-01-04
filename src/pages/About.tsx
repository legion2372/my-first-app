const About = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      {/* 个人头像区域 */}
      <div className="text-center mb-12">
        <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-blue-200 ring-4 ring-white">
          R
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">About Raymond</h1>
        <p className="text-slate-500 text-lg font-medium">正在探索代码奥秘的终身学习者</p>
      </div>

      {/* 简介卡片 */}
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-8 text-slate-600 leading-relaxed relative overflow-hidden">
        {/* 装饰性背景 */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        
        <div className="relative">
          <h2 className="text-xl font-bold text-slate-900 mb-4">👋 你好！</h2>
          <p>
            我是 Raymond。这是我从零开始构建的个人技术博客。我创建这个空间的初衷是记录学习过程中的点点滴滴。
          </p>
          <p className="mt-4">
            这个网站本身就是我学习 <strong>React + Tailwind CSS</strong> 的实验场。从最初的 404 报错到现在的 Markdown 渲染，每一步都是成长的印记。
          </p>
        </div>
        
        <div className="pt-8 border-t border-slate-100">
          <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            技能清单
          </h3>
          <div className="flex flex-wrap gap-3">
            {['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'Markdown'].map(skill => (
              <span key={skill} className="px-4 py-1.5 bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;