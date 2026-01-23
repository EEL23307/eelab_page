
import React, { useState } from 'react';
import { PUBLICATIONS } from '../constants';
import { ExternalLink, FileText, Search } from 'lucide-react';

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPubs = PUBLICATIONS.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
          <p className="text-gray-500 text-lg font-light">Contributions to international peer-reviewed journals.</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search publications..." 
            className="pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none w-full md:w-80 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-20">
        {years.map(year => {
          const yearPubs = filteredPubs.filter(p => p.year === year);
          if (yearPubs.length === 0) return null;

          return (
            <div key={year} className="relative">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-bold text-gray-900">{year}</h3>
                <div className="flex-grow h-px bg-gradient-to-r from-emerald-100 to-transparent"></div>
              </div>
              
              <div className="space-y-8">
                {yearPubs.map((pub, idx) => (
                  <div key={pub.id} className="group flex gap-6">
                    <div className="flex-shrink-0 text-emerald-300 font-bold text-lg pt-1">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold text-emerald-700 mb-1 uppercase tracking-wider">{pub.authors}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-emerald-800 transition-colors">
                        {pub.title}
                      </h4>
                      <div className="text-gray-500 italic text-sm mb-4">{pub.journal}</div>
                      <div className="flex space-x-6">
                        <button className="flex items-center text-[10px] font-black text-gray-400 hover:text-emerald-800 uppercase tracking-widest transition-all">
                          <FileText className="h-3.5 w-3.5 mr-1.5" /> PDF
                        </button>
                        {pub.doi && (
                          <a 
                            href={`https://doi.org/${pub.doi}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-[10px] font-black text-gray-400 hover:text-emerald-800 uppercase tracking-widest transition-all"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" /> DOI: {pub.doi}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
