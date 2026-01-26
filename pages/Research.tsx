import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Research: React.FC = () => {
  
  // 연구 분야 데이터
  // JSX(<sub> 태그 등)를 사용하기 위해 title과 details의 타입을 string이 아닌 ReactNode로 처리합니다.
  const researchData = [
    {
      id: 1,
      title: "Combustion and power generation from ammonia and hydrogen",
      image: "images/r1.bmp", 
      details: [
        <span>Cofiring of ammonia in coal power plants for low carbon electricity production</span>,
        <span>Development of global reaction mechanism for ammonia-coal cofiring</span>,
        <span>CFD analysis on ideal ammonia cofiring and burner retrofit strategy for commercialization in coal power plants and furnaces</span>,
        <span>Collaboration with KEPCO, major power producers, and utility companies (Doosan Enerbility, BHI, etc.) in Korea</span>
      ]
    },
    {
      id: 2,
      title: "Hydrogen production by reforming and cracking",
      image: "images/r2.bmp",
      details: [
        <span>Reformer design for hydrogen production from natural gas and biogas</span>,
        <span>CH<sub>4</sub> pyrolysis in molten catalysts/salts for hydrogen production</span>,
        <span>NH<sub>3</sub> cracking for hydrogen production</span>
      ]
    },
    {
      id: 3,
      title: "Deep learning-based prediction and control of energy process",
      image: "images/r3.bmp",
      details: [
        <span>Performance prediction of energy process using domain knowledge and AI-based models</span>,
        <span>Suggestion for ideal values of operation variables based on forecast of key performance parameters</span>,
        <span>Optimization of system operation using deep learning algorithms</span>
      ]
    },
    {
      id: 4,
      title: "Energy production and utilization of biomass",
      image: "images/r4.bmp",
      details: [
        <span>Thermochemical conversion (combustion, gasification, and pyrolysis) for biomass</span>,
        <span>Torrefaction of biomass for fuel quality upgrading</span>,
        <span>Analysis of pyrolysis kinetics and lignocellulosic composition</span>,
        <span>Biochar production and utilization for soil/carbon fixation/chemicals</span>
      ]
    },
    {
      id: 5,
      title: <span>Integrated gasification combined cycle (IGCC)</span>,
      image: "images/r5.bmp",
      details: [
        <span>IGCC(석탄가스화 복합발전): Coal to CO and H<sub>2</sub>-rich syngas for combined cycle power generation</span>,
        <span>New energy technology for pre-combustion CO<sub>2</sub> capture and hydrogen production</span>,
        <span>CFD-based flow, reaction, and heat transfer analysis on gasifier and downstream equipment</span>,
        <span>Development of dynamic gasifier simulator integrating the wall slag layer model</span>,
        <span>Support of Taean IGCC plant for operation diagnostics and coal selection</span>
      ]
    },
    {
      id: 6,
      title: "CFD for design and diagnostics of energy process",
      image: "images/r6.bmp",
      details: [
        <span>Detailed analysis on flow, heat transfer, reactions, and other key phenomena in various energy processes</span>,
        <span>Development of user-subroutines for advanced CFD simulations</span>,
        <span>Optimization of new design development and diagnostics of operation issues</span>
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      
      {/* ================= Header Section ================= */}
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
          Key Research Topics
        </h1>
        <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full mb-12"></div>
        
        {/* 요약 리스트 박스 수정: 
            1. max-w-6xl -> w-full (전체 너비 사용)
            2. truncate 제거 (글자 잘림 방지)
        */}
        <div className="w-full bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
            {researchData.map((area) => (
              <li key={area.id} className="flex items-start text-gray-700 font-medium text-lg">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mr-3 flex-shrink-0 mt-1">
                  {area.id}
                </span>
                {/* truncate 클래스를 제거하여 긴 텍스트도 모두 보이게 함 */}
                <span className="w-full leading-snug">{area.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= Detailed Sections ================= */}
      <div className="space-y-32">
        {researchData.map((area, idx) => (
          <div key={area.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
            
            {/* Image Section */}
            <div className="w-full lg:w-3/5"> 
              <div className="relative group">
                <div className="absolute -inset-2 bg-emerald-600/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={area.image} 
                  alt={`Research Topic ${area.id}`} 
                  className="relative w-full h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-2/5 space-y-6">
              <div className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs">
                Topic 0{area.id}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                {area.title}
              </h2>
              
              <div className="space-y-3 pt-2">
                {area.details.map((detail, i) => (
                  <div key={i} className="flex items-start text-gray-600 leading-relaxed text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;