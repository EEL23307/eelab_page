import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Research: React.FC = () => {
  
  // 연구 분야 데이터 (텍스트 및 이미지 경로 설정)
  // 이미지 파일은 public/images 폴더 안에 r1.jpg, r2.jpg ... 형식으로 있어야 합니다.
  const researchData = [
    {
      id: 1,
      title: "Combustion and power generation from ammonia and hydrogen",
      image: "images/r1.bmp", // 파일 확장자가 png라면 .png로 변경하세요
      details: [
        "Cofiring of ammonia in coal power plants for low carbon electricity production",
        "Development of global reaction mechanism for ammonia-coal cofiring",
        "CFD analysis on ideal ammonia cofiring and burner retrofit strategy for commercialization in coal power plants and furnaces",
        "Collaboration with KEPCO, major power producers, and utility companies (Doosan Enerbility, BHI, etc.) in Korea"
      ]
    },
    {
      id: 2,
      title: "Hydrogen production by reforming and cracking",
      image: "images/r2.bmp",
      details: [
        "Reformer design for hydrogen production from natural gas and biogas",
        "CH4 pyrolysis in molten catalysts/salts for hydrogen production",
        "NH3 cracking for hydrogen production"
      ]
    },
    {
      id: 3,
      title: "Deep learning-based prediction and control of energy process",
      image: "images/r3.bmp",
      details: [
        "Performance prediction of energy process using domain knowledge and AI-based models",
        "Suggestion for ideal values of operation variables based on forecast of key performance parameters",
        "Optimization of system operation using deep learning algorithms" // 3번 마지막 줄 중복(NH3 cracking) 제거 후 문맥에 맞게 수정함 (혹시 원문 그대로 원하시면 수정해주세요)
      ]
    },
    {
      id: 4,
      title: "Energy production and utilization of biomass",
      image: "images/r4.bmp",
      details: [
        "Thermochemical conversion (combustion, gasification, and pyrolysis) for biomass",
        "Torrefaction of biomass for fuel quality upgrading",
        "Analysis of pyrolysis kinetics and lignocellulosic composition",
        "Biochar production and utilization for soil/carbon fixation/chemicals"
      ]
    },
    {
      id: 5,
      title: "Integrated gasification combined cycle (IGCC)",
      image: "images/r5.bmp",
      details: [
        "IGCC(석탄가스화 복합발전): Coal to CO and H2-rich syngas for combined cycle power generation",
        "New energy technology for pre-combustion CO2 capture and hydrogen production",
        "CFD-based flow, reaction, and heat transfer analysis on gasifier and downstream equipment",
        "Development of dynamic gasifier simulator integrating the wall slag layer model",
        "Support of Taean IGCC plant for operation diagnostics and coal selection"
      ]
    },
    {
      id: 6,
      title: "CFD for design and diagnostics of energy process",
      image: "images/r6.bmp",
      details: [
        "Detailed analysis on flow, heat transfer, reactions, and other key phenomena in various energy processes",
        "Development of user-subroutines for advanced CFD simulations",
        "Optimization of new design development and diagnostics of operation issues"
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
        
        {/* 요약 리스트 박스 */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
            {researchData.map((area) => (
              <li key={area.id} className="flex items-start text-gray-700 font-medium">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                  {area.id}
                </span>
                {area.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= Detailed Sections ================= */}
      <div className="space-y-32">
        {researchData.map((area, idx) => (
          <div key={area.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
            
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-emerald-600/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* 이미지 파일 확장자가 jpg가 아니라면 아래 src 경로를 수정해주세요 (예: .png) */}
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="relative w-full aspect-[4/3] rounded-3xl object-cover shadow-xl grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs">
                Topic 0{area.id}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                {area.title}
              </h2>
              
              <div className="space-y-3 pt-2">
                {area.details.map((detail, i) => (
                  <div key={i} className="flex items-start text-gray-600 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="inline-flex items-center text-emerald-800 font-bold hover:translate-x-2 transition-transform border-b-2 border-emerald-100 hover:border-emerald-800 pb-1">
                  Explore Projects <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;