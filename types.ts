
export type Page = 'Home' | 'Professor' | 'Research' | 'People' | 'Publications' | 'Contact';

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
  id: number;
  year: number;
  authors: string;
  title: string;
  journal: string;
  doi?: string;
}
