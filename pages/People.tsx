
import React from 'react';
import { PEOPLE } from '../constants';
import { Mail, Linkedin } from 'lucide-react';

const People: React.FC = () => {
  const roles = ['Professor', 'PhD Student', 'Master Student', 'Undergraduate', 'Alumni'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-20 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our People</h1>
        <p className="text-gray-500 text-lg font-light">A diverse group of passionate researchers working together for global sustainability.</p>
      </div>

      <div className="space-y-24">
        {roles.map((role) => {
          const members = PEOPLE.filter(p => p.role === role);
          if (members.length === 0 && role !== 'Alumni') return null;

          return (
            <section key={role}>
              <h2 className="text-sm font-black text-emerald-700 uppercase tracking-[0.3em] mb-12 flex items-center">
                {role}
                <div className="ml-4 flex-grow h-px bg-emerald-100"></div>
              </h2>
              
              {role === 'Alumni' ? (
                <div className="bg-emerald-50/50 rounded-3xl p-10 border border-emerald-100 text-center">
                  <p className="text-emerald-800 font-medium">Our graduates lead innovation at Samsung, LG Chem, SK Innovation, and prestigious academic institutions worldwide.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {members.map((person) => (
                    <div key={person.id} className="group text-center">
                      <div className="relative mb-6 overflow-hidden rounded-full aspect-square max-w-[200px] mx-auto">
                        <img 
                          src={person.photo} 
                          alt={person.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h3>
                      <p className="text-emerald-600 font-semibold text-xs uppercase tracking-widest mb-4">{person.role}</p>
                      
                      <div className="flex justify-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-emerald-700 transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-emerald-700 transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default People;
