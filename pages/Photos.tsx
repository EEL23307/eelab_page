import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ArrowUp, Home 
} from 'lucide-react';

// 데이터 타입 정의: 제목, 위치, 설명 제거 -> 날짜만 남김
interface PhotoItem {
  id: number;
  src: string;
  date: string;
}

const Photos: React.FC = () => {
  // 데이터: 오직 날짜와 사진만 존재
  const photoData: PhotoItem[] = [
    {
      id: 1,
      src: "images/photo_2022_summer.jpg",
      date: "2022.07"
    },
    {
      id: 2,
      src: "images/photo_2022_cafe.jpg",
      date: "2022.07"
    },
    {
      id: 3,
      src: "images/photo_2022_spring.jpg",
      date: "2022.05"
    },
    {
      id: 4,
      src: "images/photo_2021_visit.jpg",
      date: "2021.07"
    },
    {
      id: 5,
      src: "images/photo_2021_dinner.jpg",
      date: "2021.11"
    },
    {
      id: 6,
      src: "images/photo_2020_survival.jpg",
      date: "2020.01"
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

  // 폴라로이드 회전 각도 (규칙적 랜덤)
  const getRotationClass = (index: number) => {
    const rotations = ['rotate-1', '-rotate-2', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-3'];
    return rotations[index % rotations.length];
  };

  return (
    <div className="bg-stone-50 min-h-screen relative">
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight font-serif italic">
            Our Memories
          </h1>
          <p className="text-gray-400 font-light text-sm">
            Snapshots of our journey
          </p>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 px-4">
          {photoData.map((photo, index) => (
            <div 
              key={photo.id}
              onClick={() => openModal(index)}
              className={`
                group relative bg-white p-3 pb-12 shadow-md border border-gray-200 cursor-pointer
                transform transition-all duration-300 ease-out
                ${getRotationClass(index)}
                hover:rotate-0 hover:scale-105 hover:shadow-xl hover:z-10 hover:border-emerald-200
              `}
            >
              {/* 사진 영역 */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 border border-gray-100">
                <img 
                  src={photo.src} 
                  alt={photo.date} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* 캡션 영역 (날짜만) */}
              <div className="absolute bottom-0 left-0 w-full h-12 flex items-center justify-center">
                {/* [수정됨] 
                  - font-serif: 감성적인 느낌 
                  - text-gray-600: 너무 진하지 않은 회색
                  - text-base: 제목처럼 크지 않고 적당한 본문 크기
                */}
                <p className="font-serif text-gray-600 text-lg tracking-widest font-medium group-hover:text-emerald-700 transition-colors">
                  {photo.date}
                </p>
              </div>
            
            </div>
          ))}
        </div>
      </div>

      {/* Modal (Lightbox) */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={closeModal}>
          
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors z-50"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={photoData[selectedPhotoIndex].src} 
              alt={photoData[selectedPhotoIndex].date} 
              className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
            />
            
            <div className="mt-4 text-center">
              <p className="text-white/80 font-serif text-xl tracking-widest">
                {photoData[selectedPhotoIndex].date}
              </p>
            </div>

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