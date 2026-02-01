export interface ModelComparison {
  aspect: string;
  vue2: {
    concept: string;
    code: string;
    thinking: string;
  };
  vue3: {
    concept: string;
    code: string;
    thinking: string;
  };
  leaderInsight: string;
}

export interface DecisionNode {
  id: string;
  question: string;
  type: 'decision' | 'action' | 'warning';
  options?: {
    label: string;
    next: string;
    score?: number;
  }[];
  action?: string;
  risks?: string[];
  checklist?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  teamSize: number;
  componentCount: number;
  duration: string;
}