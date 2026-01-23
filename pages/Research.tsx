
import React from 'react';
import { RESEARCH_AREAS } from '../constants';
import { ChevronRight } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
          We explore frontiers in chemical engineering and materials science to build a clean energy cycle.
        </p>
      </div>

      <div className="space-y-32">
        {RESEARCH_AREAS.map((area, idx) => (
          <div key={area.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-emerald-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="relative w-full aspect-[4/3] rounded-3xl object-cover shadow-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs">Area 0{area.id}</div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">{area.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {area.description}
              </p>
              <div className="space-y-3 pt-4">
                {['Innovative Catalyst Synthesis', 'Electro-chemical Analysis', 'Environmental System Design'].map((topic, i) => (
                  <div key={i} className="flex items-center text-gray-700 font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></div>
                    {topic}
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center text-emerald-800 font-bold hover:translate-x-2 transition-transform mt-8 border-b-2 border-emerald-100 hover:border-emerald-800 pb-1">
                Explore Projects <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
