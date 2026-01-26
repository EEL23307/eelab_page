import React from 'react';
import { Mail, Phone, MapPin, Award, GraduationCap, Briefcase, BookOpen, Printer } from 'lucide-react';

const Professor: React.FC = () => {
  // 학력 데이터
  const education = [
    { year: '1995.3 - 2001.2', degree: 'Ph.D. in Mechanical Engineering', school: 'KAIST' },
    { year: '1993.3 - 1995.2', degree: 'M.S. in Mechanical Engineering', school: 'KAIST' },
    { year: '1989.3 - 1993.2', degree: 'B.S. in Mechanical Engineering', school: 'KAIST' },
  ];

  // 경력 데이터
  const experience = [
    { year: '2018.4 - Present', role: 'Professor', place: 'School of Mechanical Engineering, Sungkyunkwan University' },
    { year: '2012.3 - 2018.3', role: 'Associate Professor', place: 'School of Mechanical Engineering, Sungkyunkwan University' },
    { year: '2008.3 - 2012.2', role: 'Assistant Professor', place: 'School of Mechanical Engineering, Sungkyunkwan University' },
    { year: '2002.9 - 2008.2', role: 'Research Associate', place: 'Dept. of Chemical & Process Engineering, University of Sheffield, UK' },
    { year: '2001.3 - 2002.8', role: 'Postdoc. Researcher', place: 'Dept. of Mechanical Engineering, KAIST' },
  ];

  // 학회 활동 데이터
  const activities = [
    { year: '2020.9~현재', content: '성균관대 스마트발전공학과(에너지공기업 석사과정 계약학과) 학과장' },
    { year: '2020.3~현재', content: 'Energies: Editorial board' },
    { year: '2020.3~현재', content: '한국폐기물학회 편집위원' },
    { year: '2019.1~현재', content: '한국열환경공학회 이사, 부회장' },
    { year: '2014.1~현재', content: '한국연소학회 이사, 부회장' },
    { year: '2016.1~2019', content: '한국화학공학회 에너지환경부문위원' },
    { year: '2011.1~2013', content: '한국폐기물에너지화기술협의회 기술이사' },
    { year: '2011.1~2013', content: '한국수소및신에너지학회 편집위원' },
    { year: '2010.3~2011.12', content: '국립 환경과학원 겸임 연구관' },
  ];

  // 수상 경력 데이터
  const awards = [
    '2025 한국환경에너지공학회 우수논문상 (박기범 등)',
    '2024 CEAM Symposium, Best Paper Award Second Prize (박성민 등)',
    '2024 12th International Freiberg Conference, Award for Outstanding Presentation (남준영 등)',
    '2022 한국환경에너지공학회 우수논문상 (하선교 등)',
    '2022 한국에너지기후변화학회 우수논문발표상 (박성민 등)',
    '2022 한국에너지기후변화학회 우수논문발표상 (박지연 등)',
    '2021 한국열환경공학회 우수논문상 (구윤하 등)',
    '2021 한국연소학회 최우수논문상(구두발표) (강우석 등)',
    '2020 한국연소학회 최우수연구상',
    '2019 한국열환경공학회 학술상',
    '2019 한국연소학회 최우수논문상 (박정극 등)',
    '2019 한국열환경공학회 우수논문발표상 (김무경 등)',
    '2019 한국열환경공학회 우수논문발표상 (이지석 등)',
    '2016 산업통상자원부 장관 표창 (전력기술 R&D)',
    '2016 한국연소학회 우수논문발표상 (김범종 등)',
    '2015 AFORE2015, Excellent Paper Award (박종근 등)',
    '2015 K-CIPEC, 우수 발표 논문상 (강기섭 등)',
    '2015 한국에너지기후변화학회 춘계학술대회, 우수 발표 논문상 (강기섭 등)',
    '2014 한국폐기물자원순환학회 추계학술대회, 우수 발표 논문상 (박진제 등)',
    '2014 한국에너지기후변화학회 춘계학술대회, 우수 발표 포스터상 (김민수 등)',
    '2013 한국에너지공학학회 추계학술발표회, 우수논문상 (김정수 등)',
    '2012 한국에너지기후변화학회 추계학술대회, 우수논문상 (박상현 등)',
    '2012 한국수소및신에너지학회 추계학술대회, 우수논문상 (박상현 등)',
    '2012 한국폐기물자원순환학회 춘계학술연구발표회, 우수 논문상 (음푸른별 등)',
    '2012 7th ICIPEC, Best poster award (예인수 등)',
    '2011 폐기물자원순환학회 추계공동학술대회, 우수논문상 (홍성표 등)',
    '2011 한국연소학회 춘계학술대회, 우수논문상 (박상현 등)',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* ================= Left Profile Sidebar ================= */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            
            {/* === 수정된 부분: w-64 클래스 추가로 너비 제한 (약 1/4 크기) === */}
            <div className="relative group w-64">
              <div className="absolute -inset-2 bg-emerald-100 rounded-3xl opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500"></div>
              {/* 이미지 경로 */}
              <img 
                src="images/1_prof.jpg" 
                alt="Professor Changkook Ryu" 
                /* w-full은 부모(w-64)에 맞춰짐 */
                className="relative w-full rounded-2xl object-cover shadow-xl grayscale-[0.1] group-hover:grayscale-0 transition-all"
              />
            </div>
            
            <div className="mt-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Changkook Ryu</h1>
              <h2 className="text-xl text-gray-500 font-medium mb-4">(류창국)</h2>
              <p className="text-lg text-emerald-800 font-bold mb-6">Professor</p>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 mr-3 text-emerald-600 flex-shrink-0" />
                  <span>School of Mechanical Engineering,<br/>Sungkyunkwan University</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-emerald-600 flex-shrink-0" />
                  <span>Suwon 16419, Korea</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-emerald-600 flex-shrink-0" />
                  <span>Tel: +82-(0)31-299 4841</span>
                </div>
                <div className="flex items-center">
                  <Printer className="h-5 w-5 mr-3 text-emerald-600 flex-shrink-0" />
                  <span>Fax: +82-(0)31-290 5889</span>
                </div>
                <a href="mailto:cryu@skku.edu" className="flex items-center hover:text-emerald-700 transition-colors">
                  <Mail className="h-5 w-5 mr-3 text-emerald-600 flex-shrink-0" />
                  <span>cryu@skku.edu</span>
                </a>
              </div>

              <div className="mt-10">
                <a 
                  href="https://scholar.google.com/citations?user=7IWeWVQAAAAJ&hl=ko&oi=sra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center border-2 border-emerald-800 text-emerald-800 px-4 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
                >
                  Google Scholar
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Right Details ================= */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-emerald-700 mr-4 rounded-full"></span>
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <GraduationCap className="h-6 w-6 text-gray-300 group-hover:text-emerald-600 transition-colors flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-bold text-gray-800">{edu.degree}</div>
                    <div className="text-gray-600">{edu.school}</div>
                    <div className="text-sm font-bold text-emerald-600 mt-1">{edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Employment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-emerald-700 mr-4 rounded-full"></span>
              Employment
            </h2>
            <div className="border-l-2 border-gray-100 pl-8 space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-emerald-200"></div>
                  <div className="text-lg font-bold text-gray-800">{exp.role}</div>
                  <div className="text-gray-600">{exp.place}</div>
                  <div className="text-sm font-bold text-emerald-600 mt-1">{exp.year}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Academic Activities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-emerald-700 mr-4 rounded-full"></span>
              Academic Activities
            </h2>
            <div className="grid gap-4">
              {activities.map((act, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                   <BookOpen className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                   <div>
                      <span className="font-bold text-gray-800 mr-2">{act.content}</span>
                      <span className="block text-xs text-gray-500 mt-0.5">{act.year}</span>
                   </div>
                </div>
              ))}
            </div>
          </section>

          {/* Honors and Awards (수정됨: 박스 제거 및 리스트 형태 적용) */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-emerald-700 mr-4 rounded-full"></span>
              Honors and Awards
            </h2>
            <div className="space-y-4">
              {awards.map((award, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Award className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed font-medium">{award}</span>
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