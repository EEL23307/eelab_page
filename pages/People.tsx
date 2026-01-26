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
  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState<'Current' | 'Alumni'>('Current');
  
  // 카테고리 정의 (Current)
  const currentCategories = [
    'Post Doc',
    'PhD Student',
    'PhD/MS Joint Students',
    'MS, BS/MS Joint Students'
  ];

  // Alumni 카테고리
  const alumniCategories = [
    'PhD Graduates',
    'M.S. Graduates'
  ];

  // 데이터 리스트
  const peopleData: Record<string, Member[]> = {
    // ================= Current Members 데이터 =================
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
    // =====================================================================================
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
    // =====================================================================================
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
      // =====================================================================================  
    'MS, BS/MS Joint Students': [
      {
        name: '심우현',
        engName: 'Sim Woohyun',
        year: '2024',
        affiliation: '한국생산기술연구원',
        email: 'simwoohyun@kitech.re.kr',
        image: 'images/SWH.jpg' 
      },
      {
        name: '조희성',
        engName: 'Jo Huisung',
        year: '2026',
        affiliation: '',
        email: 'wcho1968@skku.edu',
        image: 'images/CHS2.jpg' 
      },
    ], 
    
    // ================= Alumni 데이터 (분리됨) =================
    'PhD Graduates': [
      {
        name: '이용운',
        engName: 'Lee Yongwoon',
        year: '2016',
        affiliation: '한국생산기술연구원',
        email: '',
        image: 'images/LYY.jpg' 
      },
      {
        name: '채태영',
        engName: 'Chae Taeyeong',
        year: '2017',
        affiliation: '한국생산기술연구원',
        email: '',
        // [수정] 안 뜬다고 하셔서 .jpg -> .JPG 로 변경해 봅니다.
        // 만약 파일이 cty.jpg(소문자)라면 파일명을 직접 확인해주세요.
        image: 'images/CTY.JPG' 
      },
      {
        name: '예인수',
        engName: 'Ye Insoo',
        year: '2018',
        affiliation: '포항산업과학연구원(RIST)',
        email: '',
        image: 'images/YIS.jpg' 
      },
      {
        name: '김민수',
        engName: 'Kim Minsoo',
        year: '2019',
        affiliation: 'SK에코플랜트',
        email: '',
        image: 'images/KMS.jpg' 
      },
      {
        name: '박진제',
        engName: 'Park Jinje',
        year: '2020',
        affiliation: '삼성전자',
        email: '',
        image: 'images/PJJ.jpg' 
      },
      {
        name: '김무경',
        engName: 'Kim Mukyeong',
        year: '2021',
        affiliation: '삼성전자',
        email: '',
        image: 'images/KMK.jpg' 
      },
      {
        name: '유승한',
        engName: 'Yu Seunghan',
        year: '2022',
        affiliation: 'SK이노베이션',
        email: '',
        image: 'images/YSH.jpg' 
      },
      {
        name: '박종근',
        engName: 'Park Jongkeun',
        year: '2023',
        affiliation: '비에이치아이',
        email: '',
        image: 'images/PJK.jpg' 
      },
      {
        name: '조현빈',
        engName: 'Jo Hyunbin',
        year: '2024',
        affiliation: '한국에너지기술연구원',
        email: '',
        image: 'images/JHB.jpg' 
      },
      {
        name: '김희윤',
        engName: 'Kim Heeyoon',
        year: '2025',
        affiliation: '한국생산기술연구원',
        email: '',
        image: 'images/KHY.jpg' 
      },
    ],
    // =====================================================================================
    'M.S. Graduates': [
      {
        name: '이명일',
        engName: 'Ming Ri Li',
        year: '2011',
        affiliation: '',
        email: '',
        image: 'images/LMR.jpg'
      },
      {
        name: '나익환',
        engName: 'Na Ikhwan',
        year: '2012',
        affiliation: '',
        email: '',
        // [수정] 안 뜬다고 하셔서 .JPG로 변경
        image: 'images/NIH.JPG'
      },
      {
        name: '홍성표',
        engName: 'Hong Sungpyo',
        year: '2012',
        affiliation: '',
        email: '',
        // [수정] 안 뜬다고 하셔서 .JPG로 변경
        image: 'images/HSP.JPG'
      },
      {
        name: '박상현',
        engName: 'Park Sanghyun',
        year: '2013',
        affiliation: '',
        email: '',
        image: 'images/PSH.jpg'
      },
      {
        name: '강기섭',
        engName: 'Kang Kieseop',
        year: '2013',
        affiliation: '',
        email: '',
        image: 'images/KKS.jpg'
      },
      {
        name: '김정은',
        engName: 'Kim Jung Eun',
        year: '2014',
        affiliation: '',
        email: '',
        image: 'images/Anonymous_female.jpg'
      },
      {
        name: '오준호',
        engName: 'Oh Junho',
        year: '2015',
        affiliation: '',
        email: '',
        image: 'images/OJH.jpg'
      },
      {
        name: '양주향',
        engName: 'Yang Joohyang',
        year: '2016',
        affiliation: '',
        email: '',
        image: 'images/YJH.jpg'
      },
      {
        name: '도윤영',
        engName: 'Doh Yunyoung',
        year: '2017',
        affiliation: '',
        email: '',
        image: 'images/DYY.jpg'
      },
      {
        name: '김범종',
        engName: 'Kim Bumjong',
        year: '2018',
        affiliation: '',
        email: '',
        image: 'images/KBJ.jpg'
      },
      {
        name: '강별',
        engName: 'Kang Byeol',
        year: '2018',
        affiliation: '',
        email: '',
        image: 'images/KB.jpg'
      },
      {
        name: '김성민',
        engName: 'Kim Sung Min',
        year: '2018',
        affiliation: '',
        email: '',
        image: 'images/KSM.jpg'
      },
      {
        name: '안성민',
        engName: 'An Seongmin',
        year: '2019',
        affiliation: '',
        email: '',
        image: 'images/ASM.jpg'
      },
      {
        name: '이지석',
        engName: 'Lee Jiseok',
        year: '2020',
        affiliation: '',
        email: '',
        // [수정] 이지석 님은 예전에 anonymous-male.jpg 였거나 파일명이 다를 수 있습니다.
        // 만약 LJS.jpg가 없다면 파일명을 확인해주세요. 일단 .JPG로 시도합니다.
        image: 'images/LJS.jpg'
      },
      {
        name: '박혜민',
        engName: 'Park Hyemin',
        year: '2020',
        affiliation: '',
        email: '',
        image: 'images/PHM.jpg'
      },
      {
        name: '최솔비',
        engName: 'Choi Solbi',
        year: '2020',
        affiliation: '',
        email: '',
        image: 'images/CSB.jpg'
      },
      {
        name: 'Hamed Jafari',
        engName: 'Hamed Jafari',
        year: '2019',
        affiliation: '',
        email: '',
        image: 'images/JH.jpg'
      },
      {
        name: '박종민',
        engName: 'Park Jongmin',
        year: '2023',
        affiliation: '',
        email: '',
        image: 'images/PJM.jpg'
      },
      {
        name: '강서영',
        engName: 'Kang Seoyoung',
        year: '2024',
        affiliation: '',
        email: '',
        image: 'images/KSY.jpg'
      },
      {
        name: '김경중',
        engName: 'Kim Kyungjoong',
        year: '2025',
        affiliation: '',
        email: '',
        image: 'images/KKJ.jpg'
      },
    ]
  };

  const displayCategories = activeTab === 'Current' ? currentCategories : alumniCategories;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      
      {/* 탭 버튼 */}
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
          
          if (members.length === 0) return null;

          return (
            <section key={category}>
              {/* 카테고리 제목 */}
              <h2 className="text-sm font-black text-emerald-700 uppercase tracking-[0.3em] mb-8 flex items-center">
                {category}
                <div className="ml-4 flex-grow h-px bg-emerald-100"></div>
              </h2>
              
              {/* 그리드 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
                {members.map((person) => (
                  <div key={person.email || person.engName} className="group flex flex-col items-center text-center">
                    
                    {/* 사진 */}
                    <div className="relative mb-3 w-32 aspect-[3/4] overflow-hidden rounded-lg shadow-sm border border-gray-100">
                      <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors duration-300"></div>
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* 정보 */}
                    <div className="space-y-0.5">
                      <div className="flex flex-col items-center">
                        <h3 className="text-base font-bold text-gray-900">{person.name}</h3>
                        {/* 괄호 제거 */}
                        <span className="text-xs text-gray-500 font-medium -mt-0.5 mb-1">{person.engName}</span>
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