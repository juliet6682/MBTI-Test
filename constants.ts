
import { Question, PersonalityArchetype } from './types';

export const QUESTIONS: Question[] = [
  { id: 1, text: "在社交聚會中，你通常會主動與陌生人交談。", dimension: 'EI', reversed: false },
  { id: 2, text: "你傾向於注重細節，而非大局觀。", dimension: 'SN', reversed: false },
  { id: 3, text: "在做決定時，你通常更看重邏輯而非情感。", dimension: 'TF', reversed: false },
  { id: 4, text: "你喜歡事先做好周全的計劃，而不是隨性而為。", dimension: 'JP', reversed: false },
  { id: 5, text: "長時間與人相處後，你會感到精疲力竭，需要獨處。", dimension: 'EI', reversed: true },
  { id: 6, text: "你經常沉浸在對未來可能性的幻想中。", dimension: 'SN', reversed: true },
  { id: 7, text: "你很容易同情他人的處境和感受。", dimension: 'TF', reversed: true },
  { id: 8, text: "你更喜歡保持選擇的靈活性，而不是死守日程表。", dimension: 'JP', reversed: true },
  { id: 9, text: "在團隊工作中，你更喜歡擔任領導或顯眼的角色。", dimension: 'EI', reversed: false },
  { id: 10, text: "你更喜歡處理具體的事實和數據，而不是抽象的概念。", dimension: 'SN', reversed: false },
  { id: 11, text: "你認為在爭論中尋求真相比不傷害感情更重要。", dimension: 'TF', reversed: false },
  { id: 12, text: "你的工作空間通常是整潔且有條理的。", dimension: 'JP', reversed: false },
  { id: 13, text: "你通常是聚會中最後離開的人之一。", dimension: 'EI', reversed: false },
  { id: 14, text: "你經常對事情的「運作原理」感興趣，而不僅僅是它能做什麼。", dimension: 'SN', reversed: true },
  { id: 15, text: "如果你的決定會傷害某人的感情，你會猶豫不決。", dimension: 'TF', reversed: true },
  { id: 16, text: "期限對你來說更像是建議，而不是嚴格的規則。", dimension: 'JP', reversed: true },
  { id: 17, text: "在一個充滿人的房間裡，你依然能感到能量充沛。", dimension: 'EI', reversed: false },
  { id: 18, text: "你更依賴你的經驗，而不是你的直覺。", dimension: 'SN', reversed: false },
  { id: 19, text: "你覺得在情感上支持他人是一件很自然的事情。", dimension: 'TF', reversed: true },
  { id: 20, text: "你喜歡在最後一刻完成任務帶來的壓力感。", dimension: 'JP', reversed: true },
];

export const ARCHETYPES: Record<string, PersonalityArchetype> = {
  'INTJ': { type: 'INTJ', title: '建築師', category: 'Analysts', color: 'indigo', description: '富有想像力和戰略性的思想家，一切皆在計劃之中。' },
  'INTP': { type: 'INTP', title: '邏輯學家', category: 'Analysts', color: 'indigo', description: '具有創造力的發明家，對知識有著止不住的渴望。' },
  'ENTJ': { type: 'ENTJ', title: '指揮官', category: 'Analysts', color: 'indigo', description: '大膽、富有想像力且意志強大的領導者。' },
  'ENTP': { type: 'ENTP', title: '辯論家', category: 'Analysts', color: 'indigo', description: '聰明且好奇的思想家，無法抗拒智力上的挑戰。' },
  'INFJ': { type: 'INFJ', title: '提倡者', category: 'Diplomats', color: 'green', description: '安靜而神秘，但非常有啟發性且不知疲倦的理想主義者。' },
  'INFP': { type: 'INFP', title: '調解者', category: 'Diplomats', color: 'green', description: '詩意、善良且利他主義的人，總是渴望幫助他人。' },
  'ENFJ': { type: 'ENFJ', title: '主人公', category: 'Diplomats', color: 'green', description: '富有魅力且鼓舞人心的領導者，能讓聽眾聽得入迷。' },
  'ENFP': { type: 'ENFP', title: '競選者', category: 'Diplomats', color: 'green', description: '熱情、有創造力且自由自在的靈魂，總能找到理由微笑。' },
  'ISTJ': { type: 'ISTJ', title: '物流師', category: 'Sentinels', color: 'blue', description: '務實且注重事實的人，可靠性不容置疑。' },
  'ISFJ': { type: 'ISFJ', title: '守護者', category: 'Sentinels', color: 'blue', description: '非常專注且溫暖的保護者，隨時準備保護他們愛的人。' },
  'ESTJ': { type: 'ESTJ', title: '總經理', category: 'Sentinels', color: 'blue', description: '優秀的管理者，在管理事物或人方面無人能及。' },
  'ESFJ': { type: 'ESFJ', title: '執政官', category: 'Sentinels', color: 'blue', description: '極度關心他人、社交性強且受歡迎的人。' },
  'ISTP': { type: 'ISTP', title: '鑑賞家', category: 'Explorers', color: 'yellow', description: '大膽且務實的實驗者，精通各類工具。' },
  'ISFP': { type: 'ISFP', title: '探險家', category: 'Explorers', color: 'yellow', description: '靈活且富有魅力的藝術家，隨時準備探索新事物。' },
  'ESTP': { type: 'ESTP', title: '企業家', category: 'Explorers', color: 'yellow', description: '聰明、精力充沛且非常有洞察力的人，享受生活。' },
  'ESFP': { type: 'ESFP', title: '表演者', category: 'Explorers', color: 'yellow', description: '自發的、精力充沛且熱情的表演者，生活在他們身邊永不乏味。' },
};
