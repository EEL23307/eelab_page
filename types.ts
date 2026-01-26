
export type Page = 'Home' | 'Professor' | 'Research' | 'Publications' | 'People' | 'Photos' | 'Contact';

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: 'News' | 'Achievement' | 'Event';
}

export interface ResearchArea {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Person {
  id: number;
  name: string;
  role: 'Professor' | 'PhD Student' | 'Master Student' | 'Undergraduate' | 'Alumni';
  email?: string;
  photo: string;
  researchInterest?: string;
}

export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi?: string;
}