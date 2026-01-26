import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Research: React.FC = () => {
  
  // 연구 분야 데이터
  // 주의: public/images 폴더에 r1.jpg, r2.jpg... 파일이 있어야 합니다.
  // (만약 파일이 .bmp라면 아래 .jpg를 .bmp로 고쳐주세요)
  const researchData = [
    {
      id: 1,
      title: "Combustion and power generation from ammonia and hydrogen",
      image: "images/r1.bmp", 
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
        "Optimization of system operation using deep learning algorithms"
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
        
        {/* 요약 리스트 박스: 너비를 max-w-6xl로 넓혀서 한 줄에 나오도록 함 */}
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left">
            {researchData.map((area) => (
              <li key={area.id} className="flex items-start text-gray-700 font-medium">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                  {area.id}
                </span>
                <span className="truncate w-full">{area.title}</span>
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
            <div className="w-full lg:w-3/5"> {/* 이미지 영역을 좀 더 넓게 (60%) 할당 */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-emerald-600/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* 수정됨: aspect-ratio 제거 및 h-auto 적용으로 원본 비율 유지 */}
                <img 
                  src={area.image} 
                  alt={area.title} 
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
              
              {/* 버튼이 제거되었습니다 */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;