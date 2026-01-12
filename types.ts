
export type MBTIDimension = 'EI' | 'SN' | 'TF' | 'JP';

export interface Question {
  id: number;
  text: string;
  dimension: MBTIDimension;
  reversed: boolean; // if true, higher score leads to the second trait (I, N, F, P)
}

export interface UserAnswers {
  [questionId: number]: number; // 1 to 5 (Likert scale)
}

export interface MBTIScores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface MBTIResult {
  type: string;
  scores: MBTIScores;
  percentages: {
    E: number;
    S: number;
    T: number;
    J: number;
  };
}

export interface PersonalityArchetype {
  type: string;
  title: string;
  category: 'Analysts' | 'Diplomats' | 'Sentinels' | 'Explorers';
  description: string;
  color: string;
}
