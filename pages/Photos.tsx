import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ArrowUp, Home, MapPin 
} from 'lucide-react';

// 사진 데이터 타입
interface PhotoItem {
  id: number;
  src: string;
  date: string;
  title: string;
  location?: string; // 장소 추가
}

const Photos: React.FC = () => {
  // 데이터
  const photoData: PhotoItem[] = [
    {
      id: 1,
      src: "images/photo_2022_summer.jpg",
      date: "2022.07",
      title: "Summer Workshop",
      location: "Yeosu"
    },
    {
      id: 2,
      src: "images/photo_2022_cafe.jpg",
      date: "2022.07",
      title: "Coffee Break",
      location: "Workshop Cafe"
    },
    {
      id: 3,
      src: "images/photo_2022_spring.jpg",
      date: "2022.05",
      title: "Spring Picnic",
      location: "SKKU Campus"
    },
    {
      id: 4,
      src: "images/photo_2021_visit.jpg",
      date: "2021.07",
      title: "Power Plant Visit",
      location: "Boryeong"
    },
    {
      id: 5,
      src: "images/photo_2021_dinner.jpg",
      date: "2021.11",
      title: "Year-end Dinner",
      location: "Suwon"
    },
    {
      id: 6,
      src: "images/photo_2020_survival.jpg",
      date: "2020.01",
      title: "Winter Activity",
      location: "Survival Game"
    }
  ];

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // 모달 제어
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

  // 키보드 이벤트
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

  // [핵심] 폴라로이드 회전 각도를 랜덤하게 주는 함수
  // 인덱스에 따라 회전 각도를 다르게 설정 (너무 랜덤하면 새로고침할 때마다 정신없으므로 규칙성 부여)
  const getRotationClass = (index: number) => {
    const rotations = [
      'rotate-2',   // 오른쪽 살짝
      '-rotate-1',  // 왼쪽 살짝
      'rotate-3',   // 오른쪽 더
      '-rotate-2',  // 왼쪽 더
      'rotate-1',   // 오른쪽 아주 살짝
      '-rotate-3'   // 왼쪽 많이
    ];
    return rotations[index % rotations.length];
  };

  return (
    // 배경을 약간 따뜻한 톤(stone-50)이나 회색조(gray-50)로 주면 폴라로이드(흰색)가 더 잘 보입니다.
    <div className="bg-stone-50 min-h-screen relative">
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        
        {/* ================= Header ================= */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight font-serif italic">
            Our Memories
          </h1>
          <p className="text-gray-500 font-light">
            Collecting moments, not just data.
          </p>
        </div>

        {/* ================= Polaroid Grid ================= */}
        {/* gap-x-8 gap-y-16: 폴라로이드가 회전하니까 간격을 넉넉히 줍니다 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 px-4">
          {photoData.map((photo, index) => (
            <div 
              key={photo.id}
              onClick={() => openModal(index)}
              // [핵심 스타일]
              // 1. bg-white p-4 pb-16: 흰색 배경 + 아래쪽 패딩을 길게(폴라로이드 턱)
              // 2. shadow-lg: 그림자로 입체감
              // 3. transform transition-all: 부드러운 움직임
              // 4. hover:rotate-0 hover:scale-105: 마우스 올리면 똑바로 서면서 커짐
              // 5. hover:z-10: 호버 시 다른 사진 위로 올라오게 함
              className={`
                group relative bg-white p-4 pb-14 shadow-lg border border-gray-100 cursor-pointer
                transform transition-all duration-300 ease-out
                ${getRotationClass(index)}
                hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:z-10 hover:border-emerald-200
              `}
            >
              {/* 사진 영역 */}
              {/* aspect-[1/1] 또는 aspect-[4/3] 등 사진 비율 고정 */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 border border-gray-100 filter sepia-[0.1] group-hover:sepia-0 transition-all">
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 손글씨 느낌의 캡션 영역 */}
              <div className="absolute bottom-0 left-0 w-full h-14 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-gray-800 font-bold font-serif text-lg leading-none mb-1 group-hover:text-emerald-700 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-gray-400 text-xs font-medium tracking-widest flex items-center gap-1">
                   {photo.date} {photo.location && `• ${photo.location}`}
                </p>
              </div>

              {/* (옵션) 핀 모양 장식 (원하면 주석 해제) */}
              {/* <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-400 shadow-md border border-red-500 opacity-80"></div> */}
            
            </div>
          ))}
        </div>
      </div>

      {/* ================= Modal (Lightbox) ================= */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" onClick={closeModal}>
          
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/50 hover:text-white p-2 transition-colors z-50"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* 모달 이미지는 회전 없이 크게 */}
            <img 
              src={photoData[selectedPhotoIndex].src} 
              alt={photoData[selectedPhotoIndex].title} 
              className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
            />
            
            <div className="mt-6 text-center text-white">
              <h2 className="text-2xl font-bold mb-1 font-serif">{photoData[selectedPhotoIndex].title}</h2>
              <p className="text-emerald-400 text-sm tracking-widest">
                {photoData[selectedPhotoIndex].date}
                {photoData[selectedPhotoIndex].location && `  |  ${photoData[selectedPhotoIndex].location}`}
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

      {/* 플로팅 버튼 */}
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