import React, { useState, useEffect, useCallback } from 'react';
import { 
  Calendar, MapPin, X, ChevronLeft, ChevronRight, 
  Maximize2, ArrowUp, Home, Camera 
} from 'lucide-react';

// 사진 데이터 타입 정의
interface PhotoItem {
  id: number;
  src: string;
  date: string;
  title: string;
  location?: string;
  description?: string;
}

const Photos: React.FC = () => {
  // ================= 데이터 영역 (보내주신 사진 기반) =================
  const photoData: PhotoItem[] = [
    {
      id: 1,
      src: "images/photo_2022_summer.jpg", // 파일명은 실제 파일명으로 수정 필요
      date: "2022.07",
      title: "Summer Workshop",
      location: "Yeosu",
      description: "2022 Summer Workshop & Seminar at the seaside."
    },
    {
      id: 2,
      src: "images/photo_2022_cafe.jpg", 
      date: "2022.07",
      title: "Coffee Break",
      location: "Workshop Cafe",
      description: "Relaxing time during the summer workshop."
    },
    {
      id: 3,
      src: "images/photo_2022_spring.jpg", 
      date: "2022.05",
      title: "Spring Picnic",
      location: "SKKU Campus",
      description: "Group photo in front of the engineering building."
    },
    {
      id: 4,
      src: "images/photo_2021_visit.jpg", 
      date: "2021.07",
      title: "Field Trip to Boryeong Power Plant",
      location: "Boryeong",
      description: "Technical tour to KOMIPO Boryeong Power Generation Site."
    },
    {
      id: 5,
      src: "images/photo_2021_dinner.jpg", 
      date: "2021.11",
      title: "Year-end Dinner",
      location: "Suwon",
      description: "Lab dinner and birthday celebration."
    },
    {
      id: 6,
      src: "images/photo_2020_survival.jpg", 
      date: "2020.01",
      title: "Winter Activity",
      location: "Survival Game Park",
      description: "Paintball survival game and team building."
    }
  ];

  // ================= 상태 관리 =================
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // 모달 제어 함수
  const openModal = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'unset';
  };

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => 
        prev === null || prev === photoData.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedPhotoIndex]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => 
        prev === null || prev === 0 ? photoData.length - 1 : prev - 1
      );
    }
  }, [selectedPhotoIndex]);

  // 키보드 이벤트 (화살표로 사진 넘기기)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, showNext, showPrev]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative min-h-screen">
      
      {/* ================= Header ================= */}
      <div className="mb-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          Lab Activities
        </h1>
        <div className="w-16 h-1 bg-emerald-200 mx-auto rounded-full my-6"></div>
        <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
          We share our memorable moments, from academic conferences to workshops and casual gatherings.
        </p>
      </div>

      {/* ================= Photo Grid (게시판 형태) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoData.map((photo, index) => (
          <div 
            key={photo.id}
            onClick={() => openModal(index)}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col h-full"
          >
            {/* 이미지 영역 */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* 호버 시 오버레이 */}
              <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 p-3 rounded-full shadow-lg">
                  <Maximize2 className="h-6 w-6 text-emerald-800" />
                </div>
              </div>
              {/* 날짜 뱃지 */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm flex items-center">
                <Calendar className="h-3 w-3 mr-1.5" />
                {photo.date}
              </div>
            </div>

            {/* 텍스트 내용 영역 (게시판 느낌) */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {photo.title}
              </h3>
              
              {photo.location && (
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <MapPin className="h-3 w-3 mr-1" />
                  {photo.location}
                </div>
              )}
              
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {photo.description}
              </p>
              
              {/* 하단 장식 선 */}
              <div className="mt-auto pt-4 flex justify-end">
                 <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                   View Photo →
                 </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Modal (Lightbox) ================= */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" onClick={closeModal}>
          
          {/* 닫기 버튼 */}
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors z-50"
          >
            <X className="h-8 w-8" />
          </button>

          {/* 메인 컨텐츠 래퍼 */}
          <div className="relative w-full max-w-6xl flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            
            {/* 큰 이미지 */}
            <div className="relative w-full max-h-[80vh] flex items-center justify-center">
              <img 
                src={photoData[selectedPhotoIndex].src} 
                alt={photoData[selectedPhotoIndex].title} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* 하단 정보 (손그림의 아래쪽 박스 역할) */}
            <div className="mt-6 text-center text-white w-full max-w-2xl">
              <h2 className="text-2xl font-bold mb-2">{photoData[selectedPhotoIndex].title}</h2>
              <div className="flex items-center justify-center gap-4 text-white/60 text-sm mb-4">
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {photoData[selectedPhotoIndex].date}</span>
                {photoData[selectedPhotoIndex].location && (
                  <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {photoData[selectedPhotoIndex].location}</span>
                )}
              </div>
              <p className="text-white/80 leading-relaxed font-light">
                {photoData[selectedPhotoIndex].description}
              </p>
            </div>

            {/* 네비게이션 버튼 (좌우) */}
            <button 
              onClick={showPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button 
              onClick={showNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

          </div>
        </div>
      )}

      {/* ================= Floating Buttons ================= */}
      <div className={`fixed bottom-8 right-8 z-50 flex items-end gap-3 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}>
        <a
          href={import.meta.env.BASE_URL}
          className="p-3 bg-white text-emerald-600 border border-emerald-100 rounded-full shadow-lg hover:bg-emerald-50 transition-all duration-300 mb-1 flex items-center justify-center"
          aria-label="Go to Home"
        >
          <Home className="h-6 w-6" />
        </a>
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

export default Photos;