
import React from 'react';
import { 
  Home, 
  User, 
  Search, 
  Users, 
  BookOpen, 
  Mail,
  Zap,
  Leaf,
  Wind,
  Droplets
} from 'lucide-react';
import { NewsItem, ResearchArea, Person, Publication } from './types';

export const LAB_NAME = "Energy & Environment Laboratory";
export const UNIVERSITY = "Sungkyunkwan University (SKKU)";

export const NEWS: NewsItem[] = [
  { id: 1, date: "2024.10.15", title: "Dr. Kim's research paper published in Nature Energy", category: "Achievement" },
  { id: 2, date: "2024.09.20", title: "Welcome new members: John Doe (PhD) and Jane Smith (MS)", category: "News" },
  { id: 3, date: "2024.08.05", title: "Annual Lab Workshop successfully held at Jeju Island", category: "Event" },
  { id: 4, date: "2024.07.12", title: "Lab recruitment for 2025 Spring semester is now open", category: "News" },
];

export const RESEARCH_AREAS: ResearchArea[] = [
  { 
    id: 1, 
    title: "Electrochemical Energy Systems", 
    description: "Development of next-generation batteries and fuel cells for sustainable energy storage and conversion.",
    image: "https://picsum.photos/seed/energy1/800/600"
  },
  { 
    id: 2, 
    title: "Environmental Remediation", 
    description: "Advanced catalytic processes for wastewater treatment and air purification to protect our ecosystem.",
    image: "https://picsum.photos/seed/env1/800/600"
  },
  { 
    id: 3, 
    title: "CO2 Capture & Utilization", 
    description: "Innovative materials and systems to capture carbon dioxide and convert it into high-value chemicals.",
    image: "https://picsum.photos/seed/co2/800/600"
  }
];

export const PEOPLE: Person[] = [
  { 
    id: 1, 
    name: "Jin-Hyoung Kim", 
    role: "Professor", 
    email: "eelab@skku.edu", 
    photo: "https://picsum.photos/seed/prof/400/400",
    researchInterest: "Energy Storage, Environmental Catalysis"
  },
  { id: 2, name: "Min-Soo Kang", role: "PhD Student", photo: "https://picsum.photos/seed/phd1/400/400" },
  { id: 3, name: "Sarah Lee", role: "PhD Student", photo: "https://picsum.photos/seed/phd2/400/400" },
  { id: 4, name: "Jun-Ho Park", role: "Master Student", photo: "https://picsum.photos/seed/ms1/400/400" },
  { id: 5, name: "Emily Wang", role: "Master Student", photo: "https://picsum.photos/seed/ms2/400/400" },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    year: 2024,
    authors: "Kim, J. H., Kang, M. S., et al.",
    title: "High-performance catalyst for sustainable hydrogen production",
    journal: "Nature Energy, Vol. 9, pp. 123-135",
    doi: "10.1038/nenergy.2024.01"
  },
  {
    id: 2,
    year: 2023,
    authors: "Lee, S., Park, J. H., et al.",
    title: "Advanced materials for direct air capture of CO2",
    journal: "Journal of Environmental Science, Vol. 45, pp. 567-580"
  },
  {
    id: 3,
    year: 2023,
    authors: "Wang, E., Kim, J. H.",
    title: "Review of electrochemical water treatment systems",
    journal: "ChemSusChem, Vol. 16, pp. 89-102"
  }
];
