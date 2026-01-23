import React from 'react';
import { ChevronRight } from 'lucide-react';
import { LAB_NAME, UNIVERSITY } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Minimalist Hero Section with Green Overlay */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000" 
          alt="Sustainable Energy Background" 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-emerald-900/50 flex items-center justify-center text-center">
          <div className="px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 drop-shadow-lg uppercase">
              {LAB_NAME}
            </h1>
            <div className="h-1 w-24 bg-emerald-400 mx-auto mb-4 rounded-full"></div>
            <p className="text-lg md:text-xl text-emerald-50 font-medium tracking-widest uppercase opacity-90">
              {UNIVERSITY}
            </p>
          </div>
        </div>
      </section>

      {/* Simplified, Centered Content Area */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        
        {/* ================= English Section ================= */}
        <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.4em] mb-8">
          Welcome to Energy Engineering Lab
        </h2>
        <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed mx-auto">
          <p className="text-2xl font-light text-gray-800 leading-snug">
            We are actively carrying out research on power generation and energy processes using various fuels with high efficiencies and low environmental impacts.
          </p>

          <div className="mt-8 text-left bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="font-bold text-gray-900 mb-4">The main research topics include:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Hydrogen and ammonia combustion
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Ammonia cofiring with coal for low-carbon power generation
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> AI-based performance forecast and control of energy processes
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Hydrogen production by reforming, pyrolysis, and cracking of natural gas, biogas, and ammonia
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Low NOx combustion and control technologies for industrial boilers and furnaces
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Design and diagnostics of energy system using computational fluid dynamics (CFD)
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">▶</span> Integrated gasification combined cycle (IGCC)
              </li>
            </ul>
          </div>

          <p className="text-gray-500 italic pt-4">
            We are continuously looking for passionate researchers to join our mission for global sustainability. <br />
            If you are interested in research on CFD, energy, and advanced use of fuels, please contact us.
          </p>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gray-200 w-full mx-auto"></div>

        {/* ================= Korean Section ================= */}
        <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.4em] mb-8">
          에너지공학연구실 소개
        </h2>
        <div className="prose prose-lg text-gray-600 space-y-8 leading-relaxed mx-auto">
          <p className="text-2xl font-light text-gray-800 leading-snug break-keep">
            에너지공학 연구실은 수소와 암모니아 등 저탄소 에너지기술, 바이오매스 및 바이오에너지, 에너지 플랜트 공정 설계, 전산유체역학, 화석 연료의 새로운 이용기술 관련 연구를 수행하고 있습니다.
          </p>

          <div className="mt-8 text-left bg-gray-50 p-6 rounded-xl border border-gray-100">
            <p className="font-bold text-gray-900 mb-4">최근 수행중인 주요 연구과제는 다음과 같습니다.</p>
            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">▶</span> 
                <span>탄소중립 발전을 위한 암모니아-석탄 혼소 기술: <span className="text-gray-500 text-sm block sm:inline sm:ml-1">한국전력 및 발전사, BHI, 두산에너빌리티 등</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">▶</span> 
                <span>산업용 수소 보일러 개발: <span className="text-gray-500 text-sm block sm:inline sm:ml-1">부스타, 한국생산기술연구원</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">▶</span> 
                <span>AI 활용 중소형 소각로 연소 제어 기술 개발: <span className="text-gray-500 text-sm block sm:inline sm:ml-1">SK에코플랜트, 한국생산기술연구원 등</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">▶</span> 
                <span>수소 생산을 위한 탄화가스 개질 및 열분해 기술: <span className="text-gray-500 text-sm block sm:inline sm:ml-1">한국가스공사, 현대자동차, 두산에너빌리티</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">▶</span> 
                <span>석탄가스화 복합발전(IGCC) 시뮬레이터 및 AI 활용 기술: <span className="text-gray-500 text-sm block sm:inline sm:ml-1">한국서부발전, 한국에너지기술연구원</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">▶</span> 
                <span>제철공정 고로 온실가스 저감, 래들 저급연료 활용 기술: <span className="text-gray-500 text-sm block sm:inline sm:ml-1">포스코, RIST</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">▶</span> 
                <span>전산유동해석(CFD) 및 시뮬레이터 개발을 통한 에너지 공정의 설계 및 운전 진단 및 최적화</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2 mt-1">▶</span> 
                <span>보일러 및 HRSG의 CFD 기반 탈질설비(SCR 및 SNCR) 설계와 성능 최적화</span>
              </li>
            </ul>
          </div>

          <div className="text-gray-500 italic pt-4 space-y-2">
            <p className="font-bold text-emerald-700 not-italic">
              • 우리 연구실은 BK21과제에 참여하고 있습니다.
            </p>
            <p>
              에너지 및 환경 관련 연구에 관심이 있는 분은 언제든지 환영합니다.
            </p>
          </div>
        </div>
        
{/* Buttons */}
        <div className="mt-16 flex justify-center gap-6">
          <a href="research" className="px-8 py-3 bg-emerald-800 text-white rounded-full font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/10 flex items-center">
            Our Research Areas <ChevronRight className="ml-2 h-4 w-4" />
          </a>
          <a href="contact" className="px-8 py-3 border-2 border-emerald-800 text-emerald-800 rounded-full font-bold hover:bg-emerald-50 transition-all">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;