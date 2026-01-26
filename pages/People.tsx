import React from 'react';
import { Mail } from 'lucide-react';

// 데이터 타입 정의
interface Member {
  id: number;
  name: string;
  engName: string;
  year: string; // 입학년도 또는 졸업년도
  affiliation?: string; // 소속 (회사 등)
  email?: string;
  image: string;
}

const People: React.FC = () => {
  
  // 카테고리 정의
  const categories = [
    'Post Doc',
    'PhD Student',
    'PhD/MS Joint Students',
    'MS, BS/MS Joint Students',
    'Alumni' // 졸업생 섹션이 필요 없다면 이 줄을 지우세요
  ];

  // 멤버 데이터 (PhD Student 섹션에 요청하신 데이터 입력 완료)
  // 나머지 섹션은 예시로 비워두거나 더미 데이터를 넣었습니다.
  const peopleData: Record<string, Member[]> = {
    'Post Doc': [], // 데이터 추가 필요
    
    'PhD Student': [
      {
        id: 1,
        name: '박상빈',
        engName: 'Park Sangbin',
        year: '2014',
        affiliation: '한국전력공사 전력연구원',
        email: 'tabris12@naver.com',
        image: 'images/PSB.jpg' // 경로 수정 필요
      },
      {
        id: 2,
        name: '박지연',
        engName: 'Park Jiyeon',
        year: '2018',
        affiliation: '한국생산기술연구원 고온에너지시스템그룹',
        email: 'jypark04@kitech.re.kr',
        image: 'images/PJY.jpg' // 경로 수정 필요
      },
      {
        id: 3,
        name: '류주열',
        engName: 'Ryu Juyeol',
        year: '2023',
        affiliation: '현대자동차',
        email: '',
        image: 'images/RJY.jpg' // 경로 수정 필요
      },
      {
        id: 4,
        name: '손근',
        engName: 'Sohn Geun',
        year: '2024',
        affiliation: '두산에너빌리티',
        email: '',
        image: 'images/SG.jpg' // 경로 수정 필요
      },
      {
        id: 5,
        name: '박기범',
        engName: 'Park Gibeom',
        year: '2025',
        affiliation: '',
        email: 'qkrrlaqa98@skku.edu',
        image: 'images/PGB.jpg' // 경로 수정 필요
      },
    ],

    'PhD/MS Joint Students': [], // 데이터 추가 필요
    'MS, BS/MS Joint Students': [], // 데이터 추가 필요
    'Alumni': [] // 데이터 추가 필요
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      
      {/* 상단 제목(Our People 등) 삭제됨 */}

      <div className="space-y-20">
        {categories.map((category) => {
          const members = peopleData[category] || [];
          
          // 멤버가 없는 카테고리는 화면에 표시하지 않음 (데이터 채우면 자동으로 뜸)
          if (members.length === 0) return null;

          return (
            <section key={category}>
              {/* 카테고리 제목 */}
              <h2 className="text-sm font-black text-emerald-700 uppercase tracking-[0.3em] mb-10 flex items-center">
                {category}
                <div className="ml-4 flex-grow h-px bg-emerald-100"></div>
              </h2>
              
              {/* 멤버 그리드 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {members.map((person) => (
                  <div key={person.id} className="group flex flex-col items-center text-center">
                    
                    {/* 사진 영역: 원형 -> 증명사진 비율(3:4) + 모서리 둥글게(Rounded) */}
                    <div className="relative mb-5 w-full max-w-[220px] aspect-[3/4] overflow-hidden rounded-2xl shadow-md border border-gray-100">
                      <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-300"></div>
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* 정보 영역 */}
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                        <span className="text-sm text-gray-500 font-medium">({person.engName})</span>
                      </div>
                      
                      {/* 연도 */}
                      <p className="text-emerald-700 font-bold text-sm">{person.year}</p>
                      
                      {/* 소속 (있을 경우에만 표시) */}
                      {person.affiliation && (
                        <p className="text-gray-600 text-sm leading-snug px-2 break-keep">
                          {person.affiliation}
                        </p>
                      )}

                      {/* 이메일 (있을 경우에만 표시) */}
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