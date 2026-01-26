import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, ArrowUp, Home } from 'lucide-react';

// [중요] 분리한 데이터 파일들 불러오기
import { Publication } from '../data/types';
import { internationalJournals } from '../data/internationalJournals';
import { koreanJournals } from '../data/koreanJournals';
import { internationalConferences } from '../data/internationalConferences';
import { koreanConferences } from '../data/koreanConferences';

const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('International Journals');
  const [searchTerm, setSearchTerm] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 맨 위로 이동
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    'International Journals',
    'Korean Journals',
    'International Conferences',
    'Korean Conferences'
  ];

  // 불러온 데이터들을 탭 이름과 매칭
  const publicationsData: Record<string, Publication[]> = {
    'International Journals': internationalJournals,
    'Korean Journals': koreanJournals,
    'International Conferences': internationalConferences,
    'Korean Conferences': koreanConferences
  };

  // 현재 탭의 데이터 가져오기
  const currentPubs = publicationsData[activeTab] || [];
  
  // 검색 필터링
  const filteredPubs = currentPubs.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 연도별 정렬
  const years = Array.from(new Set(filteredPubs.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      
      {/* 헤더 및 검색 영역 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
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

      {/* 탭 버튼 영역 */}
      <div className="flex flex-wrap gap-2 mb-16 border-b border-gray-200 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSearchTerm('');
            }}
            className={`px-6 py-3 font-bold text-sm uppercase tracking-wide transition-all relative ${
              activeTab === tab
                ? 'text-emerald-800'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>
            )}
          </button>
        ))}
      </div>

      {/* 논문 리스트 영역 */}
      <div className="space-y-20 animate-in fade-in duration-500">
        {currentPubs.length === 0 ? (
          <div className="text-center py-20 text-gray-400 italic">
            List update in progress...
          </div>
        ) : (
          years.map(year => {
            const yearPubs = filteredPubs.filter(p => p.year === year);
            if (yearPubs.length === 0) return null;

            return (
              <div key={year} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">{year}</h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-emerald-100 to-transparent"></div>
                </div>
                
                <div className="space-y-8">
                  {yearPubs.map((pub) => (
                    <div key={pub.id} className="group">
                      <div className="w-full">
                        <div className="text-xs font-bold text-emerald-700 mb-1 uppercase tracking-wider leading-relaxed">
                          {pub.authors}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-emerald-800 transition-colors">
                          {pub.title}
                        </h4>
                        <div className="text-gray-500 italic text-sm mb-2">
                          {pub.journal}
                        </div>
                        
                        {/* [수정됨] DOI 버튼 스타일 적용 (추천 2번) */}
                        {pub.doi && (
                            <a 
                              href={`https://doi.org/${pub.doi}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 mt-3 text-[11px] font-bold text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors uppercase tracking-wide"
                            >
                              <ExternalLink className="h-3 w-3 mr-1.5" /> View Article
                            </a>
                          )
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 플로팅 버튼 (Home + Top) */}
      <div className={`fixed bottom-8 right-8 z-50 flex items-end gap-3 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}>
        
        {/* Home 버튼 */}
        <a
          href={import.meta.env.BASE_URL}
          className="p-3 bg-white text-emerald-600 border border-emerald-100 rounded-full shadow-lg hover:bg-emerald-50 transition-all duration-300 mb-1 flex items-center justify-center"
          aria-label="Go to Home"
        >
          <Home className="h-6 w-6" />
        </a>

        {/* Top 버튼 */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-2xl shadow-lg hover:bg-emerald-700 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 mb-0.5" />
          <span className="text-[10px] font-bold leading-none">TOP</span>
        </button>
      </div>

    </div>
  );
};

export default Publications;