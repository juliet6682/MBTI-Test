
import React, { useState } from 'react';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { MBTIResult } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'hero' | 'quiz' | 'result'>('hero');
  const [result, setResult] = useState<MBTIResult | null>(null);

  const startQuiz = () => setView('quiz');
  const cancelQuiz = () => setView('hero');
  const completeQuiz = (mbtiResult: MBTIResult) => {
    setResult(mbtiResult);
    setView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const restart = () => {
    setResult(null);
    setView('hero');
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-6 px-8 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={restart}>
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
            <i className="fas fa-moon"></i>
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">MindMirror</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-indigo-600 transition-colors">性格理論</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">AI 解讀</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">關於我們</a>
        </div>
        <button 
          onClick={startQuiz}
          className="px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          立即測試
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        {view === 'hero' && <Hero onStart={startQuiz} />}
        {view === 'quiz' && <Quiz onComplete={completeQuiz} onCancel={cancelQuiz} />}
        {view === 'result' && result && <Result result={result} onRestart={restart} />}
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-moon"></i>
              </div>
              <span className="text-xl font-bold">MindMirror</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              探索人類性格的無窮奧秘。結合傳統心理學與現代 AI 技術，為每個人提供清晰的自我認知之路。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">產品</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">MBTI 測試</a></li>
              <li><a href="#" className="hover:text-white transition-colors">企業版性格評估</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API 串接服務</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">社群</h4>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-12 border-t border-slate-800 text-center text-xs">
          <p>© 2024 MindMirror. All rights reserved. 僅供個人參考與學術研究使用。</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
