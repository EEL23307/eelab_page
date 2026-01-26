import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, User, School, ArrowUp, Home, Train } from 'lucide-react';

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
          <p className="text-lg text-gray-500 font-light">
            If you are interested in research on CFD, energy, and advanced use of fuels, please contact us.
          </p>
        </div>
      </div>

      {/* ================= Main Grid (2 Columns) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
        
        {/* === [Left Column] Lab Info & Location === */}
        <div className="space-y-12">
          
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
                <span>Room 23307 (제1공학관 23307호)</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="font-bold text-gray-800">031-299-4694</span>
              </div>
            </div>
          </div>

          {/* 2. Mailing Address (위치) */}
          <div className="flex gap-5 pl-2">
            <div className="bg-gray-50 p-3 rounded-xl h-fit border border-gray-200 shrink-0">
              <MapPin className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Mailing Address</h3>
              <p className="text-gray-500 leading-relaxed font-light text-sm">
                Engineering Building 1<br />
                Sungkyunkwan University (Natural Science Campus)<br />
                2066 Seobu-ro, Suwon, 16419, Korea
              </p>
            </div>
          </div>

        </div>

        {/* === [Right Column] Professor Info & Transportation === */}
        <div className="space-y-12">

          {/* 3. Professor (교수님) */}
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
                <span>Room 23318 (제1공학관 23318호)</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="font-bold text-gray-800">031-299-4841</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href="mailto:cryu@skku.edu" className="hover:text-emerald-700 underline decoration-emerald-200 underline-offset-4">
                  cryu@skku.edu
                </a>
              </div>
            </div>
          </div>

          {/* 4. Public Transport */}
          <div className="flex gap-5 pl-2">
            <div className="bg-gray-50 p-3 rounded-xl h-fit border border-gray-200 shrink-0">
              <Train className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Public Transport</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                <span className="font-bold text-emerald-700">Subway Line 1</span><br/>
                Sungkyunkwan Univ. Station (Exit 2)<br/>
                <span className="text-xs text-gray-400 mt-1 block">Walk approx. 10-15 min to Engineering Bldg 1</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= [New] Map Section ================= */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <MapPin className="mr-3 text-emerald-600" /> Location Map
        </h2>
        {/* 구글 맵 Iframe */}
        <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="SKKU Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.927646690424!2d126.9749033153063!3d37.29391097985036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b42c638686d1d%3A0x6266a2f3277317!2z7ISx6reg6rSA64yA7ZWZ6rWQIOyequyZZuqwvO2VZlDYqOyKqA!5e0!3m2!1sko!2skr!4v1647834571234!5m2!1sko!2skr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          * 성균관대학교 자연과학캠퍼스 제1공학관으로 오시면 됩니다.
        </p>
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