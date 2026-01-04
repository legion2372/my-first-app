import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        {/* 导航栏 */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 sticky top-0 z-50">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <Link to="/" className="font-extrabold text-xl tracking-tighter hover:opacity-80 transition-opacity">
              RAYMOND<span className="text-blue-600">.PLOG</span>
            </Link>
            
            <div className="flex gap-6 items-center">
              <Link to="/" className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">首页</Link>
              <Link to="/about" className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">About</Link>
            </div>
          </div>
        </nav>

        {/* 主体内容：使用 flex-grow 确保内容不满一屏时页脚也在最底部 */}
        <main className="max-w-3xl mx-auto py-12 px-4 flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* 全局页脚 */}
        <footer className="w-full py-12 border-t border-slate-200 bg-white mt-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-slate-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              © 2026 RAYMOND.PLOG
            </p>
            <p className="text-slate-300 text-[10px] leading-relaxed">
              Designed & Coded by Raymond <br />
              Powered by React, Tailwind CSS & Vercel
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;