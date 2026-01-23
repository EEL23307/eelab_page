
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LAB_NAME, UNIVERSITY } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Minimalist Hero Section with Green Overlay */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000" 
          alt="Sustainable Energy Background" 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-emerald-900/50 flex items-center justify-center text-center">
          <div className="px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 drop-shadow-lg uppercase">
              {LAB_NAME}
            </h1>
            <div className="h-1 w-24 bg-emerald-400 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg md:text-xl text-emerald-50 font-medium tracking-widest uppercase opacity-90">
              {UNIVERSITY}
            </p>
          </div>
        </div>
      </section>

      {/* Simplified, Centered Content Area */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.4em] mb-8">
          Welcome to Energy Engineering Lab
        </h2>
        <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed mx-auto">
          <p className="text-2xl font-light text-gray-800 leading-snug">
            We are actively carrying out research on power generation and energy processes using various fuels with high efficiencies and low environmental impacts.
          </p>

          <div className="mt-8 text-left bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="font-bold text-gray-900 mb-4">The main research topics include:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Hydrogen and ammonia combustion
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Ammonia cofiring with coal for low-carbon power generation
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> AI-based performance forecast and control of energy processes
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Hydrogen production by reforming, pyrolysis, and cracking of natural gas, biogas, and ammonia
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Low NOx combustion and control technologies for industrial boilers and furnaces
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Design and diagnostics of energy system using computational fluid dynamics (CFD)
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Integrated gasification combined cycle (IGCC)
              </li>
            </ul>
          </div>

          <p className="text-gray-400 text-sm italic pt-4">
            We are continuously looking for passionate researchers to join our mission for global sustainability.
          </p>
        </div>
        
        <div className="mt-16 flex justify-center gap-6">
          <button className="px-8 py-3 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/10 flex items-center">
            Our Research Areas <ChevronRight className="ml-2 h-4 w-4" />
          </button>
          <button className="px-8 py-3 border-2 border-emerald-800 text-emerald-800 rounded-full font-bold hover:bg-emerald-50 transition-all">
            Contact Us
          </button>
        </div>
      </section>

      {/* Minimal Footer Accent */}
      <section className="py-12 border-t border-gray-50 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
          <span>Sungkyunkwan University</span>
          <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
          <span>Chemical Engineering</span>
          <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
          <span>Sustainable Materials Center</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
