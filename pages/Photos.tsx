import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ArrowUp, Home, Calendar
} from 'lucide-react';

// 사진 데이터 타입
interface PhotoItem {
  id: number;
  src: string;
  date: string; // "2022.07" 형식
  title: string; // 간단한 제목 (예: Summer Workshop)
}

const Photos: React.FC = () => {
  // 데이터 (설명 description 제거함)
  const photoData: PhotoItem[] = [
    {
      id: 1,
      src: "images/photo_2022_summer.jpg",
      date: "2022.07",
      title: "Summer Workshop"
    },
    {
      id: 2,
      src: "images/photo_2022_cafe.jpg",
      date: "2022.07",
      title: "Coffee Break"
    },
    {
      id: 3,
      src: "images/photo_2022_spring.jpg",
      date: "2022.05",
      title: "Spring Picnic"
    },
    {
      id: 4,
      src: "images/photo_2021_visit.jpg",
      date: "2021.07",
      title: "Power Plant Visit"
    },
    {
      id: 5,
      src: "images/photo_2021_dinner.jpg",
      date: "2021.11",
      title: "Year-end Dinner"
    },
    {
      id: 6,
      src: "images/photo_2020_survival.jpg",
      date: "2020.01",
      title: "Winter Activity"
    }
  ];

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openModal = (index: number) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
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
  }, [selectedPhotoIndex, photoData.length]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => 
        prev === null || prev === 0 ? photoData.length - 1 : prev - 1
      );
    }
  }, [selectedPhotoIndex, photoData.length]);

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
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          Lab Moments
        </h1>
        <div className="w-16 h-1 bg-emerald-200 mx-auto rounded-full mb-6"></div>
      </div>

      {/* ================= Photo Grid (Clean Style) ================= */}
      {/* gap-1로 설정하여 사진 사이 간격을 좁혀 모던한 느낌을 줌 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photoData.map((photo, index) => (
          <div 
            key={photo.id}
            onClick={() => openModal(index)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* 이미지 */}
            <img 
              src={photo.src} 
              alt={photo.title} 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* 오버레이 (Hover 시에만 등장) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-emerald-300 text-sm font-bold mb-1 flex items-center">
                  <Calendar className="w-3 h-3 mr-1.5" /> {photo.date}
                </p>
                <h3 className="text-white text-lg font-bold leading-tight">
                  {photo.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Modal (Lightbox - Simple) ================= */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4" onClick={closeModal}>
          
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors z-50"
          >
            <X className="h-8 w-8" />
          </button>

          {/* 이미지 컨테이너 */}
          <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            
            {/* 큰 이미지 */}
            <img 
              src={photoData[selectedPhotoIndex].src} 
              alt={photoData[selectedPhotoIndex].title} 
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
            />

            {/* 하단 캡션 (아주 심플하게) */}
            <div className="mt-4 text-center">
              <h2 className="text-white text-xl font-bold tracking-wide">
                {photoData[selectedPhotoIndex].title}
              </h2>
              <p className="text-emerald-400 text-sm mt-1 font-medium">
                {photoData[selectedPhotoIndex].date}
              </p>
            </div>

            {/* 좌우 버튼 */}
            <button 
              onClick={showPrev}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button 
              onClick={showNext}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

          </div>
        </div>
      )}

      {/* Floating Buttons */}
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