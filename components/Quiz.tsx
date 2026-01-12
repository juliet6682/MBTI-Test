
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';
import { UserAnswers, MBTIResult } from '../types';

interface QuizProps {
  onComplete: (result: MBTIResult) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = Math.round(((currentIndex) / QUESTIONS.length) * 100);

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: UserAnswers) => {
    const totals = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    const counts = { EI: 0, SN: 0, TF: 0, JP: 0 };

    QUESTIONS.forEach(q => {
      const val = finalAnswers[q.id];
      // Normalize score: 1-5 where 3 is neutral.
      // Reversed means high value leads to I, N, F, P
      const normalizedScore = q.reversed ? 6 - val : val;
      
      const [trait1, trait2] = q.dimension.split('') as [any, any];
      
      // score of 1-5
      // If score is > 3, more towards trait1
      // If score is < 3, more towards trait2
      // Let's simplify: 4-5 is trait1, 1-2 is trait2. 3 is neutral (split)
      if (normalizedScore > 3) {
        totals[trait1 as keyof typeof totals] += normalizedScore - 3;
      } else if (normalizedScore < 3) {
        totals[trait2 as keyof typeof totals] += 3 - normalizedScore;
      } else {
        totals[trait1 as keyof typeof totals] += 0.5;
        totals[trait2 as keyof typeof totals] += 0.5;
      }
      counts[q.dimension] += 1;
    });

    const getTrait = (t1: string, t2: string) => {
      const s1 = totals[t1 as keyof typeof totals];
      const s2 = totals[t2 as keyof typeof totals];
      return s1 >= s2 ? t1 : t2;
    };

    const type = 
      getTrait('E', 'I') + 
      getTrait('S', 'N') + 
      getTrait('T', 'F') + 
      getTrait('J', 'P');

    const percentages = {
      E: Math.round((totals['E'] / (totals['E'] + totals['I'] || 1)) * 100),
      S: Math.round((totals['S'] / (totals['S'] + totals['N'] || 1)) * 100),
      T: Math.round((totals['T'] / (totals['T'] + totals['F'] || 1)) * 100),
      J: Math.round((totals['J'] / (totals['J'] + totals['P'] || 1)) * 100),
    };

    onComplete({ type, scores: totals as any, percentages });
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-8 flex justify-between items-center">
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 transition-colors">
          <i className="fas fa-times mr-2"></i> 取消測試
        </button>
        <div className="text-right">
          <span className="text-indigo-600 font-bold">{currentIndex + 1}</span>
          <span className="text-slate-400"> / {QUESTIONS.length}</span>
        </div>
      </div>

      <div className="w-full bg-slate-200 h-2 rounded-full mb-12 overflow-hidden">
        <div 
          className="bg-indigo-600 h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 mbti-card-shadow border border-slate-100 min-h-[400px] flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 leading-tight">
          {currentQuestion.text}
        </h2>

        <div className="mt-auto space-y-4">
          <p className="text-center text-sm text-slate-400 mb-4 uppercase tracking-widest font-semibold">
            請選擇最符合你的程度
          </p>
          <div className="flex flex-col gap-4">
            {[
              { val: 5, label: "非常同意", color: "bg-indigo-600 hover:bg-indigo-700" },
              { val: 4, label: "同意", color: "bg-indigo-400 hover:bg-indigo-500" },
              { val: 3, label: "中立 / 不確定", color: "bg-slate-300 hover:bg-slate-400" },
              { val: 2, label: "不同意", color: "bg-rose-400 hover:bg-rose-500" },
              { val: 1, label: "非常不同意", color: "bg-rose-600 hover:bg-rose-700" },
            ].map((btn) => (
              <button
                key={btn.val}
                onClick={() => handleAnswer(btn.val)}
                className={`w-full py-4 rounded-xl text-white font-medium transition-all transform hover:scale-[1.02] active:scale-95 ${btn.color}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        {currentIndex > 0 && (
          <button 
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="text-slate-400 hover:text-indigo-600 font-medium transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i> 上一題
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
