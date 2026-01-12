
import React, { useEffect, useState } from 'react';
import { MBTIResult } from '../types';
import { ARCHETYPES } from '../constants';
import { getGeminiAnalysis } from '../services/geminiService';

interface ResultProps {
  result: MBTIResult;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const archetype = ARCHETYPES[result.type];

  useEffect(() => {
    const fetchAnalysis = async () => {
      setLoading(true);
      const data = await getGeminiAnalysis(result);
      setAnalysis(data);
      setLoading(false);
    };
    fetchAnalysis();
  }, [result]);

  const renderBar = (label1: string, label2: string, percentage: number, color1: string, color2: string) => (
    <div className="mb-6">
      <div className="flex justify-between text-sm font-bold mb-2">
        <span className={percentage >= 50 ? 'text-indigo-600' : 'text-slate-400'}>{label1} ({percentage}%)</span>
        <span className={percentage < 50 ? 'text-indigo-600' : 'text-slate-400'}>({100 - percentage}%) {label2}</span>
      </div>
      <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden flex">
        <div 
          className={`${color1} h-full transition-all duration-1000`}
          style={{ width: `${percentage}%` }}
        ></div>
        <div 
          className={`${color2} h-full transition-all duration-1000`}
          style={{ width: `${100 - percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <p className="text-indigo-600 font-bold uppercase tracking-widest mb-2">你的測試結果是</p>
        <h1 className="text-6xl font-black text-slate-900 mb-4">{result.type}</h1>
        <h2 className="text-3xl font-bold text-slate-700">{archetype?.title}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Archetype Card */}
        <div className={`col-span-1 p-8 rounded-3xl mbti-card-shadow text-white ${
          archetype.category === 'Analysts' ? 'bg-indigo-600' : 
          archetype.category === 'Diplomats' ? 'bg-emerald-600' :
          archetype.category === 'Sentinels' ? 'bg-blue-600' : 'bg-amber-500'
        }`}>
          <div className="text-4xl mb-6">
            <i className={`fas ${
              archetype.category === 'Analysts' ? 'fa-microscope' : 
              archetype.category === 'Diplomats' ? 'fa-leaf' :
              archetype.category === 'Sentinels' ? 'fa-shield-halved' : 'fa-compass'
            }`}></i>
          </div>
          <h3 className="text-xl font-bold mb-4">{archetype.category}</h3>
          <p className="text-white/90 leading-relaxed mb-6">
            {archetype.description}
          </p>
          <div className="pt-6 border-t border-white/20">
            <p className="text-xs font-bold uppercase tracking-tighter opacity-70">人格群組</p>
            <p className="font-semibold">{archetype.category}</p>
          </div>
        </div>

        {/* Scores Breakdown */}
        <div className="col-span-1 lg:col-span-2 bg-white p-8 rounded-3xl mbti-card-shadow border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-8">特質百分比</h3>
          {renderBar('外向 (E)', '內向 (I)', result.percentages.E, 'bg-indigo-500', 'bg-slate-300')}
          {renderBar('實感 (S)', '直覺 (N)', result.percentages.S, 'bg-emerald-500', 'bg-slate-300')}
          {renderBar('思考 (T)', '情感 (F)', result.percentages.T, 'bg-amber-500', 'bg-slate-300')}
          {renderBar('判斷 (J)', '感知 (P)', result.percentages.J, 'bg-rose-500', 'bg-slate-300')}
        </div>
      </div>

      {/* AI Analysis */}
      <div className="bg-white p-8 md:p-12 rounded-3xl mbti-card-shadow border border-slate-100 mb-12">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mr-4">
            <i className="fas fa-magic"></i>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">Gemini AI 深度解讀</h3>
        </div>
        
        {loading ? (
          <div className="py-20 text-center">
            <div className="inline-block w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-medium animate-pulse">正在透過 AI 分析您的靈魂特質...</p>
          </div>
        ) : (
          <div className="prose prose-slate max-w-none prose-headings:text-indigo-900 prose-p:leading-relaxed whitespace-pre-wrap text-slate-700">
            {analysis}
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-slate-800 text-white font-bold rounded-xl shadow-lg hover:bg-slate-900 transition-all transform hover:-translate-y-1"
        >
          重新測試
        </button>
        <button
          onClick={() => window.print()}
          className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 font-bold rounded-xl shadow-sm hover:border-indigo-600 hover:text-indigo-600 transition-all"
        >
          下載報告 (PDF)
        </button>
      </div>
    </div>
  );
};

export default Result;
