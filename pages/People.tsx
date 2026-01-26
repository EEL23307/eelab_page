import React, { useState } from 'react';
import { Mail } from 'lucide-react';

// 데이터 타입 정의
interface Member {
  name: string;
  engName: string;
  year: string; 
  affiliation?: string; 
  email?: string;
  image: string;
}

const People: React.FC = () => {
  // [수정 포인트 1] 탭 상태 관리 (기본값: 'Current')
  const [activeTab, setActiveTab] = useState<'Current' | 'Alumni'>('Current');
  
  // 카테고리 정의
  const currentCategories = [
    'Post Doc',
    'PhD Student',
    'PhD/MS Joint Students',
    'MS, BS/MS Joint Students'
  ];

  const alumniCategories = [
    'Alumni'
  ];

  // 데이터 리스트
  const peopleData: Record<string, Member[]> = {
    'Post Doc': [
      {
        name: '남준영',
        engName: 'Nam Joonyeong',
        year: '2026',
        affiliation: '',
        email: 'ppppidori@naver.com',
        image: 'images/NJY.jpg' 
      }
    ], 
    
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
        email: '', 
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
      {
        name: '임호태',
        engName: 'Im Hotae',
        year: '2026',
        affiliation: '한국에너지기술연구원',
        email: '9803ht@kier.re.kr',
        image: 'images/IHT.jpg' 
      },
    ],

    'PhD/MS Joint Students': [
      {
        name: '강우석',
        engName: 'Kang Woosuk',
        year: '2019',
        affiliation: '',
        email: 'gigebun2@naver.com',
        image: 'images/KWS.jpg' 
      },
      {
        name: '구윤하',
        engName: 'Koo Yunha',
        year: '2021',
        affiliation: '',
        email: 'yhaa1016@skku.edu',
        image: 'images/KYH.jpg' 
      },
      {
        name: '박성민',
        engName: 'Park Seongmin',
        year: '2021',
        affiliation: '',
        email: 'padoris94@gmail.com',
        image: 'images/PSM.jpg' 
      },
      {
        name: '하선교',
        engName: 'Ha Seonkyo',
        year: '2022',
        affiliation: '',
        email: 'oioup90@skku.edu',
        image: 'images/HSK2.jpg' 
      },
      {
        name: '최현록',
        engName: 'Choi Hyeon Rok',
        year: '2022',
        affiliation: '한국생산기술연구원',
        email: 'gusfhr12022@kitech.re.kr',
        image: 'images/CHR.jpg' 
      },
      {
        name: '이정호',
        engName: 'Lee Jeong Ho',
        year: '2023',
        affiliation: '',
        email: 'horse52@g.skku.edu',
        image: 'images/LJH.jpg' 
      },
      {
        name: '이성재',
        engName: 'Lee Sungjae',
        year: '2024',
        affiliation: '',
        email: 'seromiya23@g.skku.edu',
        image: 'images/LSJ.jpg' 
      },
      {
        name: '장윤창',
        engName: 'Jang Yunchang',
        year: '2025',
        affiliation: '',
        email: 'rmagh346@skku.edu',
        image: 'images/JYC.jpg' 
      },
      {
        name: '안종환',
        engName: 'An Jonghwan',
        year: '2025',
        affiliation: '한국생산기술연구원',
        email: 'ajh0420@kitech.re.kr',
        image: 'images/AJH.jpg' 
      },
      {
        name: '김형석',
        engName: 'Kim Hyungseok',
        year: '2025',
        affiliation: '한국생산기술연구원',
        email: 'k3k153@kitech.re.kr',
        image: 'images/KHS.jpg' 
      },
      {
        name: '이승연',
        engName: 'Lee Seongyeon',
        year: '2025',
        affiliation: '한국생산기술연구원',
        email: 'seungyeonlee@kitech.re.kr',
        image: 'images/LSY.jpg' 
      },
    ], 
    
    'MS, BS/MS Joint Students': [
      {
        name: '심우현',
        engName: 'Sim Woohyn',
        year: '2024',
        affiliation: '한국생산기술연구원',
        email: 'simwoohyun@kitech.re.kr',
        image: 'images/SWH.jpg' 
      },
    ], 
    
    'Alumni': [] 
  };

  // 현재 탭에 따라 보여줄 카테고리 결정
  const displayCategories = activeTab === 'Current' ? currentCategories : alumniCategories;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      
      {/* [수정 포인트 2] 탭 버튼 추가 */}
      <div className="flex justify-center mb-20">
        <div className="inline-flex bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('Current')}
            className={`px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
              activeTab === 'Current'
                ? 'bg-white text-emerald-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Current Members
          </button>
          <button
            onClick={() => setActiveTab('Alumni')}
            className={`px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
              activeTab === 'Alumni'
                ? 'bg-white text-emerald-800 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Alumni
          </button>
        </div>
      </div>
      
      {/* 내용 영역 */}
      <div className="space-y-16 animate-in fade-in duration-500">
        {displayCategories.map((category) => {
          const members = peopleData[category] || [];
          
          if (members.length === 0) return (
             // 멤버가 없을 때 (Alumni 등) 메시지 표시
             activeTab === 'Alumni' && category === 'Alumni' ? (
                <div key={category} className="text-center py-20 text-gray-500">
                   <p>Coming Soon...</p>
                </div>
             ) : null
          );

          return (
            <section key={category}>
              {/* 카테고리 제목 */}
              <h2 className="text-sm font-black text-emerald-700 uppercase tracking-[0.3em] mb-8 flex items-center">
                {category}
                <div className="ml-4 flex-grow h-px bg-emerald-100"></div>
              </h2>
              
              {/* 그리드: 6열 배치 (작은 사진용) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
                {members.map((person) => (
                  <div key={person.email || person.engName} className="group flex flex-col items-center text-center">
                    
                    {/* 사진 크기: w-32 (약 1/4 크기) */}
                    <div className="relative mb-3 w-32 aspect-[3/4] overflow-hidden rounded-lg shadow-sm border border-gray-100">
                      <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-300"></div>
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* 텍스트 정보 */}
                    <div className="space-y-0.5">
                      <div className="flex flex-col items-center">
                        <h3 className="text-base font-bold text-gray-900">{person.name}</h3>
                        <span className="text-xs text-gray-500 font-medium -mt-0.5 mb-1">({person.engName})</span>
                      </div>
                      
                      <p className="text-emerald-700 font-bold text-xs">{person.year}</p>
                      
                      {person.affiliation && (
                        <p className="text-gray-600 text-xs leading-snug px-1 break-keep pt-1">
                          {person.affiliation}
                        </p>
                      )}

                      {person.email && (
                        <div className="pt-1.5">
                          <a href={`mailto:${person.email}`} className="inline-flex items-center text-gray-400 hover:text-emerald-600 transition-colors text-xs">
                            <Mail className="h-3 w-3 mr-1" />
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