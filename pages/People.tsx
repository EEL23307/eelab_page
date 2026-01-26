import React from 'react';
import { Mail } from 'lucide-react';

// 데이터 타입 정의 (id 삭제함)
interface Member {
  name: string;
  engName: string;
  year: string; 
  affiliation?: string; 
  email?: string;
  image: string;
}

const People: React.FC = () => {
  
  const categories = [
    'Post Doc',
    'PhD Student',
    'PhD/MS Joint Students',
    'MS, BS/MS Joint Students',
    'Alumni' 
  ];

  // id 숫자 다 뺐습니다! 이제 순서 상관없이 추가/삭제 하세요.
  const peopleData: Record<string, Member[]> = {
    'Post Doc': [], 
    
    'PhD Student': [
      {
        name: '박상빈',
        engName: 'Park Sangbin',
        year: '2014',
        affiliation: '한국전력공사 전력연구원',
        email: 'tabris12@naver.com',
        image: 'images/PSB.jpg' 
      },
      {
        name: '박지연',
        engName: 'Park Jiyeon',
        year: '2018',
        affiliation: '한국생산기술연구원 고온에너지시스템그룹',
        email: 'jypark04@kitech.re.kr',
        image: 'images/PJY.jpg' 
      },
      {
        name: '류주열',
        engName: 'Ryu Juyeol',
        year: '2023',
        affiliation: '현대자동차',
        email: '', // 이메일 없어도 괜찮습니다 (이름으로 구분함)
        image: 'images/RJY.jpg' 
      },
      {
        name: '손근',
        engName: 'Sohn Geun',
        year: '2024',
        affiliation: '두산에너빌리티',
        email: '',
        image: 'images/SG.jpg' 
      },
      {
        name: '박기범',
        engName: 'Park Gibeom',
        year: '2025',
        affiliation: '',
        email: 'qkrrlaqa98@skku.edu',
        image: 'images/PGB.jpg' 
      },
    ],

    'PhD/MS Joint Students': [], 
    'MS, BS/MS Joint Students': [], 
    'Alumni': [] 
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      
      <div className="space-y-20">
        {categories.map((category) => {
          const members = peopleData[category] || [];
          
          if (members.length === 0) return null;

          return (
            <section key={category}>
              <h2 className="text-sm font-black text-emerald-700 uppercase tracking-[0.3em] mb-10 flex items-center">
                {category}
                <div className="ml-4 flex-grow h-px bg-emerald-100"></div>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {members.map((person, index) => (
                  // 수정 포인트: key를 id 대신 '이메일' 또는 '영문이름'으로 사용합니다.
                  // 이메일이 있으면 이메일을 쓰고, 없으면 영문이름을 씁니다.
                  <div key={person.email || person.engName} className="group flex flex-col items-center text-center">
                    
                    <div className="relative mb-5 w-full max-w-[220px] aspect-[3/4] overflow-hidden rounded-2xl shadow-md border border-gray-100">
                      <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-300"></div>
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                        <span className="text-sm text-gray-500 font-medium">({person.engName})</span>
                      </div>
                      
                      <p className="text-emerald-700 font-bold text-sm">{person.year}</p>
                      
                      {person.affiliation && (
                        <p className="text-gray-600 text-sm leading-snug px-2 break-keep">
                          {person.affiliation}
                        </p>
                      )}

                      {person.email && (
                        <div className="pt-2">
                          <a href={`mailto:${person.email}`} className="inline-flex items-center text-gray-400 hover:text-emerald-600 transition-colors text-sm">
                            <Mail className="h-3.5 w-3.5 mr-1.5" />
                            {person.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default People;