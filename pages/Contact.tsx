import React, { useState, useEffect } from 'react';
import { MapPin, Phone, User, School, ArrowUp, Home } from 'lucide-react';

const Contact: React.FC = () => {
  // Back to Top & Home 버튼 로직
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      
      {/* ================= Header & Intro ================= */}
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Contact Us</h1>
        
        <div className="space-y-4 leading-relaxed">
          <p className="text-2xl font-bold text-gray-800 break-keep">
            에너지 및 환경 관련 연구에 관심이 있는 분은 언제든지 환영합니다.
          </p>
          <div className="w-16 h-1 bg-emerald-200 mx-auto rounded-full my-6"></div>
          <p className="text-base text-gray-500 font-light tracking-tight">
            If you are interested in research on CFD, energy, and advanced use of fuels, please contact us.
          </p>
        </div>
      </div>

      {/* ================= Info Cards (Lab & Prof) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
        
        {/* 1. Energy Engineering Lab (연구실) */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-50 hover:border-emerald-200 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 p-3 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <School className="h-8 w-8 text-emerald-700 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-2xl leading-tight">Energy Engineering Lab</h3>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600 pl-2">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
              <span>제1공학관 23307호</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="font-bold text-gray-800">031-299-4694</span>
            </div>
          </div>
        </div>

        {/* 2. Professor (교수님) */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-50 hover:border-emerald-200 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 p-3 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <User className="h-8 w-8 text-emerald-700 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-2xl">Prof. Changkook Ryu</h3>
              <p className="text-sm text-gray-500 font-medium">류창국 교수 (지도교수)</p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600 pl-2">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
              <span>제1공학관 23318호</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="font-bold text-gray-800">031-299-4841</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-emerald-500 font-bold text-sm">Email</span>
              <a href="mailto:cryu@skku.edu" className="hover:text-emerald-700 underline decoration-emerald-200 underline-offset-4 text-sm">
                cryu@skku.edu
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= Address Section (박스 제거, 자연스러운 배치) ================= */}
      <div className="mb-12 px-2">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-emerald-600" />
          주소
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
           {/* Left: 한국어 주소 (굵고 진하게) */}
           <div className="text-left">
             <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed break-keep">
               경기도 수원시 장안구 서부로 2066<br />
               성균관대학교 자연과학캠퍼스 제1공학관
             </p>
           </div>

           {/* Right: 영어 주소 (얇고 연하게 + 왼쪽 경계선으로 구분) */}
           <div className="md:border-l-2 md:border-gray-100 md:pl-10">
             <p className="text-lg text-gray-500 font-light leading-relaxed">
               Engineering Building 1<br />
               Sungkyunkwan University (Natural Science Campus)<br />
               2066 Seobu-ro, Suwon, 16419, Korea
             </p>
           </div>
        </div>
      </div>

      {/* ================= Map Section ================= */}
      <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group">
        <iframe
          title="SKKU Location Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=37.293994,126.977116&z=18&output=embed"
        ></iframe>
        
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 text-center border-t border-gray-100">
          <span className="text-xs font-bold text-emerald-800 flex items-center justify-center gap-1">
            <MapPin className="h-3 w-3" /> 제1공학관 (Engineering Bldg 1)
          </span>
        </div>
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

export default Contact;