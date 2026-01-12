
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="mb-8 p-4 bg-indigo-100 rounded-full">
        <i className="fas fa-brain text-5xl text-indigo-600"></i>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
        探索你的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">內心鏡像</span>
      </h1>
      <p className="max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed">
        透過科學的人格特質建模與 AI 深度洞察，揭開你真實性格的神秘面紗。只需 5 分鐘，即可獲得一份專屬於你的個人成長報告。
      </p>
      <button
        onClick={onStart}
        className="group relative px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-200 transition-all duration-300 transform hover:-translate-y-1"
      >
        <span className="relative z-10 flex items-center">
          立即開始測試
          <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
        </span>
        <div className="absolute inset-0 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
      </button>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="p-6 bg-white rounded-2xl mbti-card-shadow border border-slate-100">
          <i className="fas fa-microscope text-2xl text-indigo-500 mb-4"></i>
          <h3 className="font-semibold mb-2">科學建模</h3>
          <p className="text-sm text-slate-500">基於 Myers-Briggs 理論框架的 20 題精簡測試。</p>
        </div>
        <div className="p-6 bg-white rounded-2xl mbti-card-shadow border border-slate-100">
          <i className="fas fa-robot text-2xl text-violet-500 mb-4"></i>
          <h3 className="font-semibold mb-2">AI 深度分析</h3>
          <p className="text-sm text-slate-500">採用 Gemini 模型為您生成獨一無二的性格解讀。</p>
        </div>
        <div className="p-6 bg-white rounded-2xl mbti-card-shadow border border-slate-100">
          <i className="fas fa-shield-alt text-2xl text-emerald-500 mb-4"></i>
          <h3 className="font-semibold mb-2">隱私保護</h3>
          <p className="text-sm text-slate-500">測試數據不存盤，您的結果僅供您個人查看。</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
