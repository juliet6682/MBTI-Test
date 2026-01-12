
import { GoogleGenAI } from "@google/genai";
import { MBTIResult } from "../types";

export const getGeminiAnalysis = async (result: MBTIResult): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    請為一位測試結果為 ${result.type} 的用戶提供深度的人格特質分析。
    具體得分百分比（100% 代表完全偏向左側特質）：
    - 外向 (E) vs 內向 (I): ${result.percentages.E}%
    - 實感 (S) vs 直覺 (N): ${result.percentages.S}%
    - 思考 (T) vs 情感 (F): ${result.percentages.T}%
    - 判斷 (J) vs 感知 (P): ${result.percentages.J}%

    請以專業、溫暖且富有洞察力的語氣撰寫，包含以下部分：
    1. 人格概述（獨特的標籤與特質）
    2. 核心優勢（如何發揮最大潛力）
    3. 潛在挑戰與盲點
    4. 職業建議（適合的領域與工作環境）
    5. 社交與關係建議

    請使用繁體中文，格式化為漂亮的 Markdown。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    
    return response.text || "無法獲取分析結果。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，分析時發生錯誤。請稍後再試。";
  }
};
