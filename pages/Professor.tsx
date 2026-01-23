
import React from 'react';
import { Mail, GraduationCap, Award } from 'lucide-react';
import { PEOPLE } from '../constants';

const Professor: React.FC = () => {
  const prof = PEOPLE[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-emerald-100 rounded-3xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500"></div>
              <img 
                src={prof.photo} 
                alt={prof.name} 
                className="relative w-full aspect-square rounded-2xl object-cover shadow-2xl grayscale-[0.3] group-hover:grayscale-0 transition-all"
              />
            </div>
            <div className="mt-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{prof.name}, Ph.D.</h1>
              <p className="text-xl text-emerald-800 font-medium mb-6">Principal Investigator</p>
              
              <div className="space-y-4">
                <a href={`mailto:${prof.email}`} className="flex items-center text-gray-600 hover:text-emerald-700 transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-emerald-600" />
                  {prof.email}
                </a>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="h-5 w-5 mr-3 text-emerald-600" />
                  Research Area: {prof.researchInterest}
                </div>
              </div>

              <div className="mt-12 flex space-x-4">
                <button className="bg-emerald-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-900 transition-colors">CV Download</button>
                <button className="border border-emerald-800 text-emerald-800 px-6 py-2 rounded-lg font-bold hover:bg-emerald-50 transition-colors">Google Scholar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right CV Details */}
        <div className="lg:col-span-2 space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-emerald-700 mr-4 rounded-full"></span>
              Education
            </h2>
            <div className="space-y-6">
              {[
                { year: '2005 - 2009', degree: 'Ph.D. in Chemical Engineering', school: 'Seoul National University' },
                { year: '2003 - 2005', degree: 'M.S. in Chemical Engineering', school: 'Sungkyunkwan University' },
                { year: '1999 - 2003', degree: 'B.S. in Chemical Engineering', school: 'Sungkyunkwan University' },
              ].map((edu, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-32 flex-shrink-0 text-sm font-bold text-emerald-600 mt-1">{edu.year}</div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">{edu.degree}</div>
                    <div className="text-gray-500">{edu.school}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-emerald-700 mr-4 rounded-full"></span>
              Professional Experience
            </h2>
            <div className="space-y-6">
              {[
                { year: '2015 - Present', role: 'Associate Professor', place: 'Sungkyunkwan University' },
                { year: '2010 - 2015', role: 'Assistant Professor', place: 'UNIST' },
                { year: '2009 - 2010', role: 'Post-doctoral Researcher', place: 'MIT' },
              ].map((exp, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="w-32 flex-shrink-0 text-sm font-bold text-emerald-600 mt-1">{exp.year}</div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">{exp.role}</div>
                    <div className="text-gray-500">{exp.place}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-emerald-700 mr-4 rounded-full"></span>
              Awards & Honors
            </h2>
            <div className="space-y-6">
              {[
                { year: '2023', title: 'Top 1% Scientist in Energy Field', org: 'Clarivate Analytics' },
                { year: '2021', title: 'SKKU Distinguished Research Award', org: 'SKKU' },
              ].map((award, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <Award className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-gray-900">{award.title}</div>
                    <div className="text-sm text-gray-500">{award.org}, {award.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Professor;
