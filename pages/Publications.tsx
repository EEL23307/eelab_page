import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // [추가] 홈 이동을 위한 Hook
import { Search, ExternalLink, ArrowUp, Home } from 'lucide-react'; // [추가] Home 아이콘

// 논문 데이터 타입 정의
interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi?: string;
}

const Publications: React.FC = () => {
  const navigate = useNavigate(); // [추가] 네비게이션 훅
  const [activeTab, setActiveTab] = useState('International Journals');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Back to Top 버튼 상태
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 맨 위로 이동
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 홈으로 이동
  const goToHome = () => {
    navigate('/');
    window.scrollTo(0, 0); // 홈으로 가면서 스크롤도 위로
  };
  // 탭 목록
  const tabs = [
    'International Journals',
    'Korean Journals',
    'International Conferences',
    'Korean Conferences'
  ];

  // =========================================================================================
  // 데이터 입력 영역
  // =========================================================================================
  const publicationsData: Record<string, Publication[]> = {
    'International Journals': [
      // 2026
      {
        id: 'ij-2026-1',
        year: 2026,
        title: 'Emission characteristics of CO, NO and N2O from ammonia combustion in a fluidized bed',
        authors: 'Im H-T, Pak S-J, Kim S-J, Li D, Lee H, Ra H-W, Yoon S-M, Jo H, Yoon S-J, Ryu C*, Mun T-Y*',
        journal: 'Fuel 405, 136445, 2026.02'
      },
      // 2025
      {
        id: 'ij-2025-1',
        year: 2025,
        title: 'Performance evaluation of the natural gas combined cycle with various hydrogen co-firing rates',
        authors: 'Choi H, Lee Y, Yang W, Ryu C, Kim S*',
        journal: 'Energy Conversion and Management 341, 120051, 2025.10'
      },
      {
        id: 'ij-2025-2',
        year: 2025,
        title: 'Data-driven prediction and optimization of entrained-flow gasifier performance using reduced-order model and artificial neural network',
        authors: 'Nam J, Park S, Jang Y, Park J, Ryu C*',
        journal: 'Energy, submitted, 2025.09'
      },
      {
        id: 'ij-2025-3',
        year: 2025,
        title: 'Scenario-based forecasting and optimization of spray water flow in a coal-fired boiler attemperator using gated recurrent unit networks',
        authors: 'Koo Y, Jo H, Jang A, Ryu C*',
        journal: 'Fuel, under review, 2025.09'
      },
      // 2024
      {
        id: 'ij-2024-1',
        year: 2024,
        title: 'Derivation of kinetic parameters and lignocellulosic composition from thermogram of biomass pyrolysis using convolutional neural network',
        authors: 'Kim H, Jo H, Ryu C*',
        journal: 'International Journal of Energy Research, Vol.2024, 6184508, 2024.12'
      },
      {
        id: 'ij-2024-2',
        year: 2024,
        title: 'Characteristics of SO2 removal and heat recovery of flue gas based on a hybrid flue gas condenser',
        authors: 'Choi H, Yang W, Lee Y*, Ryu C',
        journal: 'Energies, Vol. 17(24), 4799, 2024.09'
      },
      {
        id: 'ij-2024-3',
        year: 2024,
        title: 'Dynamic responses of key performance parameters to O2/coal ratio fluctuations in a commercial Shell coal gasifier: Insights from a pseudo-2D reduced order model',
        authors: 'Park S, Nam J, Kim M, Park J, Lee S, Ryu C*',
        journal: 'Fuel, Vol.372, 132013, 2024.06'
      },
      {
        id: 'ij-2024-4',
        year: 2024,
        title: 'Design optimization of a cylindrical UV-C LED reactor for effective water disinfection with numerical simulations and test reactor fabrication',
        authors: 'Kang S, Bae J, Park S, Kim K, Lee J, Yoon C, Ryu C*',
        journal: 'Journal of Environmental Chemical Engineering, Vol.12(2), 112366, 2024.04'
      },
      // 2023
      {
        id: 'ij-2023-1',
        year: 2023,
        title: 'Numerical evaluation of heat transfer and conversion efficiency by tube design and flow configuration for a compact steam-methane reformer',
        authors: 'Koo Y, Kang S, Ra H, Yoon S, Ryu C*',
        journal: 'Energies, Vol. 16(22), 7475, 2023.11'
      },
      {
        id: 'ij-2023-2',
        year: 2023,
        title: 'Prediction of pyrolysis kinetics for torrefied biomass based on raw biomass properties and torrefaction severity',
        authors: 'Kim H, Yu S, Ra H, Yoon S, Ryu C*',
        journal: 'Energy, Vol. 278, 127759, 2023.09'
      },
      {
        id: 'ij-2023-3',
        year: 2023,
        title: 'Co-combustion of refuse plastic fuel from marine plastics with wood pellets in a fixed-bed: Identification of minimum cofiring ratio and ideal air flow rate',
        authors: 'Park JK, Yu S, Kim H, Jo H, Min K, Lee J, Heo J, Ryu C*',
        journal: 'Fuel, Vol.344, 128092, 2023.07'
      },
      {
        id: 'ij-2023-4',
        year: 2023,
        title: 'Numerical modeling of methane pyrolysis in a bubble column of molten catalysts for clean hydrogen production',
        authors: 'Park S, Kim M, Koo Y, Kang D, Kim Y, Park J, Ryu C*',
        journal: 'International Journal of Hydrogen Energy, Vol.48, pp.7385-7399, 2023.03'
      },
      {
        id: 'ij-2023-5',
        year: 2023,
        title: 'Numerical investigations on overfire air design for improved boiler operation and lower NOx emission in commercial wall-firing coal power plants',
        authors: 'Kang W, Jo H, Lee J, Jang K, Ryu C*',
        journal: 'Applied Thermal Engineering, Vol.219, Part B, 119604, 2023.01'
      },
      // 2022
      {
        id: 'ij-2022-1',
        year: 2022,
        title: 'Progressive deconvolution of biomass thermogram to derive lignocellulosic composition and pyrolytic kinetics for parallel reaction model',
        authors: 'Kim H, Yu S, Kim M, Ryu C*',
        journal: 'Energy, Vol. 254, 124446, 2022.09'
      },
      {
        id: 'ij-2022-2',
        year: 2022,
        title: 'Relationship between torrefaction severity, product properties, and pyrolysis characteristics of various biomass',
        authors: 'Yu S, Kim H (co-first author), Park J, Lee Y, Park Y-K, Ryu C*',
        journal: 'International Journal of Energy Research, Vol.46(6), pp.8145-8157, 2022.05'
      },
      {
        id: 'ij-2022-3',
        year: 2022,
        title: 'A novel liquid air energy storage system using a combination of sensible and latent heat storage',
        authors: 'Ryu JY, Alford A, Lewis G, Ding Y, Li Y, Ahmad A, Kim H-J, Park S-H, Park J-P, Branch S, Yu S, Ryu C',
        journal: 'Applied Thermal Engineering, Vol.203, 117890, 2022.02'
      },
      // 2021
      {
        id: 'ij-2021-1',
        year: 2021,
        title: 'Influence of uneven secondary air supply and burner tilt on flow pattern, heat transfer, and NOx emissions in a 500 MWe tangential-firing coal boiler',
        authors: 'Jo H, Park JK, Kang W, Hong JS, Yoon SM, Ra HW, Ryu C*',
        journal: 'Energies, Vol. 14(24), 8352, 2021.12'
      },
      {
        id: 'ij-2021-2',
        year: 2021,
        title: 'Methane pyrolysis in molten potassium chloride: An experimental and economic analysis',
        authors: 'Boo J, Ko EH, Park N-K, Ryu C, Kim Y-H, Park J, Kang D*',
        journal: 'Energies, 14(23), 8182, 2021.12'
      },
      {
        id: 'ij-2021-3',
        year: 2021,
        title: 'Mechanistic insights into the (im)mobilization of arsenic, cadmium, lead, and zinc in a multi-contaminated soil treated with different biochars',
        authors: 'El-Naggar A, Chang SX, Cai Y, Lee YH, Wang J, Wang S-L, Ryu C, Rinklebe J*, Ok YS*',
        journal: 'Environment International, Vol.156, 106638, 2021.11'
      },
      {
        id: 'ij-2021-4',
        year: 2021,
        title: 'Evaluation of abnormal burner operation in an entrained flow coal gasifier using numerical modeling',
        authors: 'Nam J, Kim M, Sohn G, Ryu C*, Kim B, Lee J',
        journal: 'Applied Thermal Engineering, Vol.191, 116859, 2021.06'
      },
      // 2020
      {
        id: 'ij-2020-1',
        year: 2020,
        title: 'Reduction of unburned carbon and NOx emissions from a pulverized-wood-pellet boiler retrofitted for fuel switching from coal',
        authors: 'Lee J, Yu S (co-first author), Park J, Jo H, Park JK, Ryu C*, Jeong Y',
        journal: 'Energies, Vol.13, 5077, 2020.09'
      },
      {
        id: 'ij-2020-2',
        year: 2020,
        title: 'Synergistic effects of CO2 on ex situ catalytic pyrolysis of lignocellulosic biomass over a Ni/SiO2 catalyst',
        authors: 'Cho S, Jung S, Park Y, Tsang Y, Ryu C*, Kwon E',
        journal: 'Journal of CO2 Utilization, Vol.39, 101182, 2020.07'
      },
      {
        id: 'ij-2020-3',
        year: 2020,
        title: 'New reduced-order model optimized for online dynamic simulation of a Shell coal gasifier',
        authors: 'Kim M, Ye I, Jo H, Ryu C*, Kim B, Lee J',
        journal: 'Applied Energy, Vol.263, 114634, 2020.04'
      },
      {
        id: 'ij-2020-4',
        year: 2020,
        title: 'Evaluation of a distributed combustion concept using 1-D modeling for pressurized oxy-combustion system with low flue gas recirculation',
        authors: 'Jafari H, Yang W*, Ryu C',
        journal: 'Fuel, Vol.263, p.116723, 2020.03'
      },
      {
        id: 'ij-2020-5',
        year: 2020,
        title: 'Particle temperature and flue gas emission of a burning single pellet in air and oxy-fuel combustion',
        authors: 'Mock C, Park H, Ryu C, Manovic V, Choi SC*',
        journal: 'Combustion and Flame, Vol.213, pp.156-171, 2020.03'
      },
      {
        id: 'ij-2020-6',
        year: 2020,
        title: 'Detailed assessment of mesh sensitivity for CFD simulation of coal combustion in a tangential-firing boiler',
        authors: 'Jo H, Kang K, Park JK, Ryu C*, Ahn H, Go Y',
        journal: 'Journal of Mechanical Science and Technology, Vol.34(2), pp.917-930, 2020.02'
      },
      {
        id: 'ij-2020-7',
        year: 2020,
        title: 'Biochar-induced metal immobilization and soil biogeochemical process: An integrated mechanistic approach',
        authors: 'El-Naggar A, Lee M-H, Hur J, Lee YH, Igalavithana AD, Shaheen SM, Ryu C, Rinklebe J, Tsang DCW*, Ok YS*',
        journal: 'Science of The Total Environment, Vol.698(1), 134112, 2020.01'
      },
      // 2019
      {
        id: 'ij-2019-1',
        year: 2019,
        title: 'Numerical analysis on the performance of a 300 MW IGCC coal gasifier under various operating conditions',
        authors: 'Kim M, Sohn G (co-first author), Ye I, Ryu C*, Kim B, Lee J',
        journal: 'Fuel, Vol. 257 (1), 116063, 2019.12'
      },
      {
        id: 'ij-2019-2',
        year: 2019,
        title: 'Optimization of air distribution to reduce NOx emission and unburned carbon for the retrofit of a 500 MWe tangential-firing coal boiler',
        authors: 'Jo H, Kang K, Park JK. Ryu C*, Ahn H, Go Y',
        journal: 'Energies, Vol.12 (17), 3281, 2019.09'
      },
      {
        id: 'ij-2019-3',
        year: 2019,
        title: 'Improving energy density and grindability of wood pellets by dry torrefaction',
        authors: 'Yu S, Park J, Kim M, Kim H, Ryu C*, Lee Y, Yang W, and Jeong Y',
        journal: 'Energy & Fuels, Vol.33, pp.8632-8639, 2019.08'
      },
      {
        id: 'ij-2019-4',
        year: 2019,
        title: 'Extended flat voltage profile of hard carbon synthesized using a two-step carbonization approach as an anode in sodium ion batteries',
        authors: 'Alvin S, Yoon D, Chandra C, Susanti RF, Chang W, Ryu C, Kim J*',
        journal: 'Journal of Power Sources, Vol.430, pp.157-168, 2019.08'
      },
      {
        id: 'ij-2019-5',
        year: 2019,
        title: 'Characterization of biochar and byproducts from slow pyrolysis of hinoki cypress',
        authors: 'Yu S, Park J (co-first authors), Kim M, Ryu C*',
        journal: 'Bioresource Technology Reports, Vol. 6, pp.217-222, 2019.06'
      },
      {
        id: 'ij-2019-6',
        year: 2019,
        title: 'Design evaluation of diesel-oxygen diffusion flame burner for start-up of high-pressure coal gasifier',
        authors: 'Park JK, Ryu C*, Lee SH, Jung W',
        journal: 'Korean Journal of Chemical Engineering, Vol.36, pp.404-410, 2019.03.'
      },
      {
        id: 'ij-2019-7',
        year: 2019,
        title: 'Determination of effective reaction conditions for char gasification in an entrained flow reactor',
        authors: 'Sohn G, Ye I, Ryu C*, Ra HW, Yoon SM',
        journal: 'Energy & Fuels, Vol.33, pp.148-158, 2019.01'
      },
      {
        id: 'ij-2019-8',
        year: 2019,
        title: 'Clean and energy-efficient mass production of biochar by process integration: Evaluation of process concept',
        authors: 'Kim M, Park J, Yu S, Ryu C*, Park J',
        journal: 'Chemical Engineering Journal, Vol.355, pp.840-849, 2019.01'
      },
      {
        id: 'ij-2019-9',
        year: 2019,
        title: 'Thermal resistance by slagging and its relationship with ash properties for six coal blends in a commercial coal-fired boiler',
        authors: 'Park H, Lee J, Kim H, Park S, Baek S, Ye I, Ryu C*',
        journal: 'Fuel, Vol.235, pp.1377-1386, 2019.01'
      },
      // 2018
      {
        id: 'ij-2018-1',
        year: 2018,
        title: 'Influence of soil properties and feedstocks on biochar potential for carbon mineralization and improvement of infertile soils',
        authors: 'El-Naggar A, Lee SS, Awad YM, Yang X, Ryu C, Rizwan M, Rinklebe J, Tsang DCW, Ok YS*',
        journal: 'Geoderma, Vol.332, pp.100-108, 2018.12'
      },
      {
        id: 'ij-2018-2',
        year: 2018,
        title: 'Investigation of flame characteristics for various design parameters in a pulverized coal burner for oxy-fuel retrofitting',
        authors: 'Chae T, Yang W*, Ryu C, Park H',
        journal: 'International Journal of Energy Research, vol.42, pp.3206-3217, 2018.08'
      },
      {
        id: 'ij-2018-3',
        year: 2018,
        title: 'Effects of solvent participation and controlled product separation on biomass liquefaction: A case study of sewage sludge',
        authors: 'Prajitno H, Park JK, Ryu C, Park HY, Lim HS, Kim J*',
        journal: 'Applied Energy, Vol.218, pp.402-416, 2018.05'
      },
      {
        id: 'ij-2018-4',
        year: 2018,
        title: 'Review of the use of activated biochar for energy and environmental applications',
        authors: 'Lee HW, Kim Y-M, Kim S, Ryu C, Park SH, Park Y-K*',
        journal: 'Carbon Letters, Vol.26, pp.1-10, 2018.04'
      },
      {
        id: 'ij-2018-5',
        year: 2018,
        title: 'Comparative characterization of a torrefied wood pellet under steam and nitrogen atmospheres',
        authors: 'Lee Y, Won Y*, Chae TY, Kang B, Park J, Ryu C*',
        journal: 'Energy & Fuels, Vol.32, pp.5109-5114, 2018.04'
      },
      {
        id: 'ij-2018-6',
        year: 2018,
        title: 'Effect of slag viscosity model on transient simulations of wall slag flow in an entrained coal gasifier',
        authors: 'Kim M, Ye I, Ryu C*',
        journal: 'Korean Journal of Chemical Engineering, Vol.35 (5), pp. 1065-1072, 2018.01'
      },
      // 2017
      {
        id: 'ij-2017-1',
        year: 2017,
        title: 'High-yield bio-oil production from macroalgae (Saccharina japonica) in supercritical ethanol and its combustion behavior',
        authors: 'Zeb H, Park JK, Riaz A, Ryu C, Kim J*',
        journal: 'Chemical Engineering Journal, Vol.327, pp.79-90, 2017.11'
      },
      {
        id: 'ij-2017-2',
        year: 2017,
        title: 'CFD analysis on bioliquid co-firing with heavy fuel oil in a 400 MWe power plant with a wall-firing boiler',
        authors: 'Park JK, Park S, Ryu C*, Baek SH, Kim YJ, Park HY',
        journal: 'Applied Thermal Engineering, Vol. 124, pp.1247-1256, 2017.09'
      },
      {
        id: 'ij-2017-3',
        year: 2017,
        title: 'Slow pyrolyzed biochar from crop residues for soil metal(loid) immobilization and microbial community abundance in contaminated agricultural soils',
        authors: 'Igalavithana AD, Park J, Ryu C, Lee YH, Hashimoto Y, Huang L, Kwon EE, Ok YS*, Lee SS*',
        journal: 'Chemosphere, Vol.177, pp.157-166, 2017.06'
      },
      {
        id: 'ij-2017-4',
        year: 2017,
        title: 'Numerical analysis on transient behaviors of slag layer in an entrained-flow coal gasifier',
        authors: 'Kim M, Ye I, Ryu C*',
        journal: 'Fuel, Vol.196, pp.532-542, 2017.05'
      },
      {
        id: 'ij-2017-5',
        year: 2017,
        title: 'Efficient renewable fuel production from sewage sludge using a supercritical fluid route',
        authors: 'Prajitno H, Zeb H, Park J, Ryu C, Kim J*',
        journal: 'Fuel, Vol.200, pp.146-152, 2017.03'
      },
      // 2016
      {
        id: 'ij-2016-1',
        year: 2016,
        title: 'Analysis of performance for centrifugal steam compressor',
        authors: 'Kang S-H, Ryu C, Ko HS*',
        journal: 'Journal of Mechanical Science and Technology, Vol.30 (12), pp.5521-5527, 2016.12'
      },
      {
        id: 'ij-2016-2',
        year: 2016,
        title: 'Characteristics of syngas reburning in a natural gas firing furnace - Effects of combustible gas species in the syngas',
        authors: 'Chae T, Lee J, Yang W*, Ryu C',
        journal: 'Journal of Mechanical Science and Technology, Vol.30 (8), pp.3861-3868, 2016.08'
      },
      {
        id: 'ij-2016-3',
        year: 2016,
        title: 'Production and utilization of biochar: A review',
        authors: 'Cha JS, Park SH, Jung S-C, Ryu C, Jeon J-K, Shin M-C, Park Y-K*',
        journal: 'Journal of Industrial and Engineering Chemistry, Vol. 40, pp.1-15, 2016.08'
      },
      {
        id: 'ij-2016-4',
        year: 2016,
        title: 'Experimental study of fry-drying and melting system for industrial wastewater sludge',
        authors: 'Chae J-S, Choi S-A, Kim Y-H, Oh S-C, Ryu C, Ohm T-I*',
        journal: 'Journal of Hazardous Materials, Vol.313, pp.78-84, 2016.08'
      },
      {
        id: 'ij-2016-5',
        year: 2016,
        title: 'Reduction of primary tar vapor from biomass by hot char particles in fixed bed gasification',
        authors: 'J Park, Y Lee, C Ryu*',
        journal: 'Biomass and Bioenergy, Vol.90, pp.114-121, 2016.06'
      },
      {
        id: 'ij-2016-6',
        year: 2016,
        title: 'Non-catalytic upgrading of fast pyrolysis bio-oil in supercritical ethanol and combustion behavior of the upgraded oil',
        authors: 'Prajitno H, Insyani R, Park JK, Ryu C, Kim J*',
        journal: 'Applied Energy, Vol.172, pp.12-22, 2016.06'
      },
      {
        id: 'ij-2016-7',
        year: 2016,
        title: 'Removal of copper(II) in aqueous solution using pyrolytic biochars derived from red macroalga Porphyra tenera',
        authors: 'Park SH, Cho HJ, Ryu C, Park Y-K*',
        journal: 'Journal of Industrial and Engineering Chemistry, Vol. 36, pp.314-319, 2016.04'
      },
      {
        id: 'ij-2016-8',
        year: 2016,
        title: 'Partial oxidation of sewage sludge briquettes in a updraft fixed bed',
        authors: 'Kim M, Lee Y, Park J, Ryu C*, Ohm TI',
        journal: 'Waste Management, Vol.49, pp.204-211, 2016.03'
      },
      // 2015
      {
        id: 'ij-2015-1',
        year: 2015,
        title: 'Effect of steam activation of biochar produced from a giant Miscanthus on copper sorption and toxicity',
        authors: 'Shim T, Yoo J, Ryu C, Park Y, Jung J*',
        journal: 'Bioresource Technology, Vol. 197, pp.85-90, 2015.12'
      },
      {
        id: 'ij-2015-2',
        year: 2015,
        title: 'CFD analysis of combustion characteristics for fuel switching to bioliquid in oil-fired power plant',
        authors: 'Park JK, Park S, Kim M, Ryu C*, Baek SH, Kim YJ, Kim HH, Park HY',
        journal: 'Fuel, Vol. 159, pp.324-333, 2015.11'
      },
      {
        id: 'ij-2015-3',
        year: 2015,
        title: 'Influence of critical viscosity and its temperature on the slag behavior on the wall of an entrained coal gasifier',
        authors: 'Ye I, Ryu C*, Koo JH',
        journal: 'Applied Thermal Engineering, Vol. 87, pp.175-184, 2015.08'
      },
      {
        id: 'ij-2015-4',
        year: 2015,
        title: 'Low-temperature reactivity of coals for evaluation of spontaneous combustion propensity',
        authors: 'Kim J, Lee Y, Ryu C*, Park HY, Lim H',
        journal: 'Korean Journal of Chemical Engineering, Vol. 32 (7), pp.1297-1304, 2015.07'
      },
      {
        id: 'ij-2015-5',
        year: 2015,
        title: 'Numerical modeling of slag flow and heat transfer on the wall of an entrained coal gasifier',
        authors: 'Ye I, Ryu C*',
        journal: 'Fuel, Vol. 150, pp.64-74, 2015.06'
      },
      {
        id: 'ij-2015-6',
        year: 2015,
        title: 'Effects of design/operating parameters and physical properties on slag thickness and heat transfer during coal gasification',
        authors: 'Ye I, Oh J, Ryu C*',
        journal: 'Energies, Vol.8, pp.3370-3385, 2015.04'
      },
      {
        id: 'ij-2015-7',
        year: 2015,
        title: 'Catalytic fast pyrolysis of Geodae-Uksae 1 over zeolites',
        authors: 'Jin SH, Lee HW, Ryu C, Jeon JK, Park Y-K*',
        journal: 'Energy, Vol. 81 (1), pp.41-46, 2015.03'
      },
      {
        id: 'ij-2015-8',
        year: 2015,
        title: 'Effects of detailed operating parameters on combustion in two 500 MWe coal-fired boilers of an identical design',
        authors: 'Yang J, Kim JA, Hong J, Kim M, Ryu C*, Kim YJ, Park HY, Baek SH',
        journal: 'Fuel, Vol.144, pp.145-156, 2015. 03.'
      },
      {
        id: 'ij-2015-9',
        year: 2015,
        title: 'Hydrodeoxygenation of guaiacol over Pt/Al-SBA-15 catalysts',
        authors: 'Yu MJ, Park SH, Jeon JK, Ryu C, Sohn JM, Kim SC, Park Y-K*',
        journal: 'Journal of Nanoscience and Nanotechnology, Vol.15(1), pp.527-531, 2015.01'
      },
      // 2014
      {
        id: 'ij-2014-1',
        year: 2014,
        title: 'Modeling and analysis of a syngas cooler with concentric evaporator channels in a coal gasification process',
        authors: 'Oh J, Ye I, Park S, Ryu C*, Park SK',
        journal: 'Korean Journal of Chemical Engineering, Volume 31, pp 2136-2144, 2014.12'
      },
      {
        id: 'ij-2014-2',
        year: 2014,
        title: 'Graphene oxide membrane for liquid phase organic molecular separation',
        authors: 'Liu R, Arabale G, Kim J, Sun K, Lee Y, Ryu C, Lee C*',
        journal: 'Carbon, Vol. 77, pp.933-938, 2014.10'
      },
      {
        id: 'ij-2014-3',
        year: 2014,
        title: 'Gas and particle flow characteristics in the gas reversing chamber of a syngas cooler for a 300MWe IGCC process',
        authors: 'Park S, Ye IS, Oh J, Ryu C*, Koo JH',
        journal: 'Applied Thermal Engineering, Vol. 70 (1), pp. 388-396, 2014.09'
      },
      {
        id: 'ij-2014-4',
        year: 2014,
        title: 'Metal-mesh based transparent electrode on a 3-dimensional curved surface by electrohydrodynamic jet printing',
        authors: 'Seong B, Yoo H, Nguyen VD, Jang Y, Ryu C, Byun D*',
        journal: 'Journal of Micromechanics and Microengineering, Vol.24(9), 097002, 2014.08'
      },
      {
        id: 'ij-2014-5',
        year: 2014,
        title: 'Catalytic upgrading of Geodae-Uksae 1 over mesoporous MCM-48 catalysts',
        authors: 'Jeon KJ, Jin SH, Park SH, Jeon JK, Jung SC, Ryu C, Park Y-K*',
        journal: 'Bulletin of the Korean Chemical Society, Vol. 35 (7), pp.1951-1955, 2014.07'
      },
      {
        id: 'ij-2014-6',
        year: 2014,
        title: 'Influence of reaction conditions on bio-oil production from pyrolysis of construction waste wood',
        authors: 'Kim JW, Lee HW, Lee IG, Jeon JK, Ryu C, Park SH, Jeong SC, Park Y-K*',
        journal: 'Renewable Energy, Vol.65, pp.41-48, 2014.05'
      },
      {
        id: 'ij-2014-7',
        year: 2014,
        title: 'Copyrolysis of block polypropylene with particle board and medium density fiber',
        authors: 'Park HJ, Choi SJ, Heo HS, Yoo KS, Ryu C, Yim JH, Jeon JK, Park Y-K*',
        journal: 'Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, Vol.36 (9), pp.958-965, 2014.05'
      },
      {
        id: 'ij-2014-8',
        year: 2014,
        title: 'Influence of reaction parameters on pyrolysis of waste wood polymer composite',
        authors: 'Jeong CS, Park SH, Lee IG, Ryu C, Jung SC, Ko CH, Park Y-K*',
        journal: 'Journal of Biobased Materials and Bioenergy, Vol. 8 (2), pp.143-148, 2014.04'
      },
      {
        id: 'ij-2014-9',
        year: 2014,
        title: 'Slow pyrolysis of rice straw: analysis of products properties, carbon and energy yields',
        authors: 'Park J, Lee Y, Ryu C*, Park Y-K',
        journal: 'Bioresource Technology, Vol. 155, pp.63-70, 2014.03'
      },
      {
        id: 'ij-2014-10',
        year: 2014,
        title: 'Highly stretchable piezoelectric-pyroelectric hybrid nanogenerator',
        authors: 'Lee JH, Lee KY, Gupta MK, Kim TY, Lee DY, Oh J, Ryu C, Yoo WJ, Kang CY, Yoon SJ, Yoo JB, Kim SW*',
        journal: 'Advanced Materials, Vol.26 (5), pp.765-769, 2014.02'
      },
      // 2013
      {
        id: 'ij-2013-1',
        year: 2013,
        title: 'Catalytic gasification of mandarin waste residue using Ni/CeO2-ZrO2',
        authors: 'Kim SS, Kim JW, Park SH, Jung SC, Jeon JK, Ryu C, Park Y-K*',
        journal: 'Bulletin of Korean Chemical Society, Vol. 34(11), 3387-3390, 2013.11'
      },
      {
        id: 'ij-2013-2',
        year: 2013,
        title: 'Comparison of biochar properties from biomass residues produced by slow pyrolysis at 500 oC',
        authors: 'Lee Y, Park J, Ryu C*, Gang KS, Yang W, Park Y-K, Jung J, Hyun S',
        journal: 'Bioresource Technology, Vol.148, pp.196-201, 2013.11'
      },
      {
        id: 'ij-2013-3',
        year: 2013,
        title: 'Assessment of combustion and heat transfer in Youngdong 100 MWe retrofit boiler for demonstration of oxy-coal combustion',
        authors: 'Kim JA, Ryu C*, Yang W, Kim Y, Park H, Kim HP',
        journal: 'International Journal of Greenhouse Gas Control, Vol.17: 250-258, 2013.09'
      },
      {
        id: 'ij-2013-4',
        year: 2013,
        title: 'Flow and heat transfer characteristics in the syngas quench system of a 300 MWe IGCC process',
        authors: 'Ye IS, Park S, Ryu C*, Park SK',
        journal: 'Applied Thermal Engineering, Vol.58: 11-21, 2013.09'
      },
      {
        id: 'ij-2013-5',
        year: 2013,
        title: 'Biodiesel production via the transesterification of soybean oil using waste starfish (Asterina pectinifera)',
        authors: 'Jo YB, Park SH, Jeon JK, Ko CH, Ryu C, Park Y-K*',
        journal: 'Applied Biochemistry and Biotechnology, Vo.170(6):1426-1436, 2013.07'
      },
      {
        id: 'ij-2013-6',
        year: 2013,
        title: 'Characterization of cadmium removal from aqueous solution by biochar produced from a giant Miscanthus at different pyrolytic temperatures',
        authors: 'Kim WK, Kim YS, Hyun S, Ryu C, Park Y-K, Jung J*',
        journal: 'Bioresource Technology, Vol.138:266-270, 2013.06'
      },
      {
        id: 'ij-2013-7',
        year: 2013,
        title: 'Catalytic conversion of particle board over microporous catalysts',
        authors: 'Choi SJ, Park SH, Jeon JK, Lee IG, Ryu C, Suh DJ, Park Y-K*',
        journal: 'Renewable Energy, Vol. 54:105-110. 2013.06'
      },
      {
        id: 'ij-2013-8',
        year: 2013,
        title: 'Combustion and heat transfer characteristics of oxy-coal combustion in a 100MWe front-wall-fired furnace',
        authors: 'Park S, Kim JA, Ryu C*, Chae T, Yang W, Kim YJ, Park HY, Lim HC',
        journal: 'Fuel, Vol. 106: 718-729. 2013.04'
      },
      {
        id: 'ij-2013-9',
        year: 2013,
        title: 'Process consideration of fry-drying combined with steam compression for efficient fuel production from sewage sludge',
        authors: 'Hong S, Ryu C*, Ko HS, Ohm TI, Chae JS',
        journal: 'Applied Energy, Vol. 103: 468-476. 2013.03'
      },
      {
        id: 'ij-2013-10',
        year: 2013,
        title: 'Numerical investigation of the spreading and heat transfer characteristics of ex-vessel core melt',
        authors: 'Ye IS, Kim JE, Ryu C*, Ha KS, Kim HY, Song JH',
        journal: 'Nuclear Engineering and Technology, Vol. 45(1): 21-28, 2013.02'
      },
      {
        id: 'ij-2013-11',
        year: 2013,
        title: 'Characteristics of biochar from slow pyrolysis of Geodae-Uksae 1',
        authors: 'Lee Y, Eum PRB, Ryu C*, Park Y-K, Jung J-H, Hyun S',
        journal: 'Bioresource Technology, Vol. 130: 345-350, 2013.02'
      },
      {
        id: 'ij-2013-12',
        year: 2013,
        title: 'Combined heat and power from municipal solid waste: current practice and issues in South Korea',
        authors: 'Ryu C*, Shin D',
        journal: 'Energies, Vol. 6(1): 45-57. 2013.01'
      },
      // 2012
      {
        id: 'ij-2012-1',
        year: 2012,
        title: 'Effects of gas and particle emissions on wall radiative heat flux in oxy-fuel combustion',
        authors: 'Park S, Ryu C*, Yang W, Kim Y, Lee S, Seo, S',
        journal: 'Journal of Mechanical Science and Technology, Vol. 26(5): 1633-1641, 2012'
      },
      // 2011
      {
        id: 'ij-2011-1',
        year: 2011,
        title: 'The application of Py-GC/MS for the catalytic upgrading of oil separated from summer food waste leachate',
        authors: 'Park Y-K, Lee HW, Jeon J-K, Kim S-S, Ryu C, Kim JM, Chae H-J, Jeong K-E',
        journal: 'Research on Chemical Intermediates, Vol. 37: 1283-1291, 2011.11'
      },
      {
        id: 'ij-2011-2',
        year: 2011,
        title: 'Assessment of wood pellet combustion in a domestic stove',
        authors: 'Lee Y-W, Ryu C*, Lee W-J, Park Y-K',
        journal: 'Journal of Material Cycles and Waste Management, Vol. 13: 165-172, 2011.10'
      },
      {
        id: 'ij-2011-3',
        year: 2011,
        title: 'Surfacial thermochemical reaction control utilizing planar anisotropic thermal conduit',
        authors: 'Hong S, Hong S, Lee T-R, Kim Y-J, Ryu C*, Baik S*',
        journal: 'Energy & Environmental Science, Vol. 4(6): 2045-2049, 2011.06'
      },
      {
        id: 'ij-2011-4',
        year: 2011,
        title: 'Copyrolysis of block polypropylene with waste wood chip',
        authors: 'Jeon M-J, Choi SJ, Yoo K-S, Ryu C, Park SH, Lee JM, Park Y-K*, Jeon J-K, Kim S',
        journal: 'Korean Journal of Chemical Engineering, Vol. 28(2), 497-501, 2011.02'
      },
      {
        id: 'ij-2011-5',
        year: 2011,
        title: 'Ash deposit characterization in a large-scale waste-to-energy incineration plant',
        authors: 'Phongphiphat A, Ryu C, Finney K*, Sharifi V N, Swithenbank J',
        journal: 'Journal of Hazardous Materials, Vol. 186: 218-226, 2011.2'
      },
      {
        id: 'ij-2011-6',
        year: 2011,
        title: 'The characteristics of bio-oil produced from the pyrolysis of three marine macroalgae',
        authors: 'Bae YJ, Ryu C, Jeon J-K, Park J, Suh DJ, Suh Y-W, Park Y-K*',
        journal: 'Bioresource Technology, Vol. 102(3): 3512-3520, 2011.02'
      },
      // 2010
      {
        id: 'ij-2010-1',
        year: 2010,
        title: 'Investigation into high-temperature corrosion in a large-scale municipal waste-to-energy plant',
        authors: 'Phongphiphat A, Ryu C, Yang YB, Finney K, Leyland A, Sharifi V, Swithenbank J',
        journal: 'Corrosion Science 52(12): 3861-3874, 2010.12'
      },
      {
        id: 'ij-2010-2',
        year: 2010,
        title: 'Influence of operation variables on fast pyrolysis of Miscanthus sinensis var. purpurascens',
        authors: 'Heo HS, Park HJ, Yim J, Sohn JM, Park J, Ryu C, SS Kim, Ryu C, Jeon J, Park Y-K*',
        journal: 'Bioresource Technology, Vol.101(10): 3672-3677, 2010.05'
      },
      {
        id: 'ij-2010-3',
        year: 2010,
        title: 'Potential of municipal solid waste for renewable energy production and reduction of greenhouse gas emissions in South Korea',
        authors: 'Ryu C',
        journal: 'Journal of Air and Waste Management Association, Vol.60(2): 176-183, 2010.02'
      },
      {
        id: 'ij-2010-4',
        year: 2010,
        title: 'Clean bio-oil production from fast pyrolysis of sewage sludge: Effects of reaction conditions and metal oxide catalysts',
        authors: 'Park HJ, Heo HS, Park Y-K*, Yim J-H, Jeon J-K, Park J. Ryu C, Kim SS',
        journal: 'Bioresource Technology, Vol.101(1S): S83-S85, 2010.01'
      },
      {
        id: 'ij-2010-5',
        year: 2010,
        title: 'Bio-oil production from fast pyrolysis of waste furniture sawdust in a fluidized bed',
        authors: 'Heo HS, Park HJ, Park Y-K*, Ryu C*, Suh DJ, Suh Y, Yim J, Kim S',
        journal: 'Bioresource Technology, Vol.101(1S): S91-S96, 2010.01'
      },
      // 2009
      {
        id: 'ij-2009-1',
        year: 2009,
        title: 'Tar reduction in pyrolysis vapours from biomass over a hot char bed',
        authors: 'Gilbert P, Ryu C*, Sharifi VN, Swithenbank J',
        journal: 'Bioresource Technology, Vol. 100 (23): 6045-6051, 2009.12'
      },
      {
        id: 'ij-2009-2',
        year: 2009,
        title: 'Effect of process parameters on pelletisation of herbaceous crops',
        authors: 'Gilbert P, Ryu C*, Sharifi VN, Siwthenbank J',
        journal: 'Fuel, Vol.88, 1491-1497, 2009.08'
      },
      {
        id: 'ij-2009-3',
        year: 2009,
        title: 'From incineration to advanced fluid-bed gasification of waste',
        authors: 'Yassin L, Lettieri P, Simons S.J.R, Castillo-Castillo A , Leach M, Ryu C, Swithenbank J, Sharifi V',
        journal: 'Proceedings of Institution of Civil Engineers: Waste and Resource Management, Vol. 162(3), pp169-177, 2009.08'
      },
      {
        id: 'ij-2009-4',
        year: 2009,
        title: 'Thermal technology scales in future waste management strategies',
        authors: 'Castillo-Castillo A , Leach M, Yassin L, Lettieri P, Simons S.J.R, Ryu C, Swithenbank J, Sharifi V',
        journal: 'Proceedings of Institution of Civil Engineers: Waste and Resource Management, Vol. 162(3), pp151-168, 2009.08'
      },
      {
        id: 'ij-2009-5',
        year: 2009,
        title: 'Waste segregation presents thermal treatment opportunities',
        authors: 'Ryu C, Yang YB, Gilbert P, Chung W, Phan AN, Le AK, Khor A, Chen Q, Sharifi VN, Swithenbank J',
        journal: 'Proceedings of Institution of Civil Engineers: Waste and Resource Management , Vol. 162(1): 45-59, 2009.02'
      },
      {
        id: 'ij-2009-6',
        year: 2009,
        title: 'The reuse of spent mushroom compost and coal tailings for energy recovery: Comparison of thermal treatment technologies',
        authors: 'Karen N. Finney, Changkook Ryu, Vida N. Sharifi, Jim Swithenbank',
        journal: 'Bioresource Technology, Vol. 100(1): 310-315, 2009.01'
      },
      // 2008
      {
        id: 'ij-2008-1',
        year: 2008,
        title: 'Pelletised Fuel Production from Coal Tailings and Spent Mushroom Compost - Part I. Identification of Pelletisation Parameters',
        authors: 'Ryu C*, Finney K, Sharifi V N and Swithenbank J',
        journal: 'Fuel Processing Technology, Vol.89(3): 269-275, 2008.3'
      },
      {
        id: 'ij-2008-2',
        year: 2008,
        title: 'Pelletised Fuel Production from Coal Tailings and Spent Mushroom Compost - Part II. Economic Feasibility Based on Cost Analysis',
        authors: 'Ryu C*, Khor A, Sharifi V N and Swithenbank J',
        journal: 'Fuel Processing Technology, Vol.89(3): 276-283, 2008.3'
      },
      {
        id: 'ij-2008-3',
        year: 2008,
        title: 'Characterisation of Slow Pyrolysis Products from Segregated Wastes for Energy Production',
        authors: 'Phan NA, Ryu C*, Sharifi V N and Swithenbank J',
        journal: 'Journal of Analytical and Applied Pyrolysis, Vol.81(1): 65-71, 2008.1'
      },
      // 2007
      {
        id: 'ij-2007-1',
        year: 2007,
        title: 'A liquid tin irrigated packed bed for hot fuel gas desulfurization',
        authors: 'Ryu C, Ismail M H S, Sharifi V N and Swithenbank J',
        journal: 'Industrial and Engineering Chemistry Research, Vo.46(26): 9015-9021, 2007.12.'
      },
      {
        id: 'ij-2007-2',
        year: 2007,
        title: 'Co-combustion of textile residues with waste wood and cardboard in a packed bed',
        authors: 'Ryu C, Phan NA, Sharifi V N and Swithenbank J',
        journal: 'Experimental Thermal and Fluid Science, Vol. 32 (2): 450-458, 2007.11'
      },
      {
        id: 'ij-2007-3',
        year: 2007,
        title: 'Thermal waste treatment innovations for sustainable energy',
        authors: 'Ryu C, Sharifi V N and Swithenbank J',
        journal: 'Proceedings of ICE: Engineering Sustainability, Vol. 160 (3): 133-140, 2007.9'
      },
      {
        id: 'ij-2007-4',
        year: 2007,
        title: 'Combustion of textile residues in a packed bed',
        authors: 'Ryu C, Phan NA, Sharifi V N and Swithenbank J',
        journal: 'Experimental Thermal and Fluid Science, Vol. 31 (8): 887-895. 2007.'
      },
      {
        id: 'ij-2007-5',
        year: 2007,
        title: 'Ignition and burning rates of segregated waste combustion in packed beds',
        authors: 'Ryu C, Phan NA, Yang YB, Sharifi V N and Swithenbank J',
        journal: 'Waste Management, Vol.27 (6): 802-810, 2007.06'
      },
      {
        id: 'ij-2007-6',
        year: 2007,
        title: 'Combustion of refuse-derived fuel in a fluidised bed',
        authors: 'Hernandez-Atonal D, Ryu C*, Sharifi V N and Swithenbank J',
        journal: 'Chemical Engineering Science, Vol.62: 627-635, 2007.01'
      },
      {
        id: 'ij-2007-7',
        year: 2007,
        title: 'Waste pyrolysis and generation of storable char',
        authors: 'Ryu C, Sharifi VN, Swithenbank J',
        journal: 'International Journal of Energy Research, Vol. 31: 177-191, 2007.02'
      },
      {
        id: 'ij-2007-8',
        year: 2007,
        title: 'Straw combustion in a fixed bed combustor',
        authors: 'Khor A, Ryu C*, Yang YB, Sharifi VN, Swithenbank J',
        journal: 'Fuel, Vol. 86, 152–160, 2007.01.'
      },
      {
        id: 'ij-2007-9',
        year: 2007,
        title: 'Mathematical modelling of slow pyrolysis of segregated solid wastes in a packed-bed pyrolyser',
        authors: 'Yang YB, Phan NA, Ryu C, Sharifi VN, Swithenbank J',
        journal: 'Fuel, Vol. 86, 169–180, 2007.01.'
      },
      // 2006
      {
        id: 'ij-2006-1',
        year: 2006,
        title: 'Effect of model and operating parameters on air gasification of char',
        authors: 'Yang YB, Ryu C, Sharifi VN, Swithenbank J',
        journal: 'Energy and Fuels, Vol.20(4), pp1698-1708, 2006.07'
      },
      {
        id: 'ij-2006-2',
        year: 2006,
        title: 'Effect of fuel properties on biomass combustion: Part I. Experiments—fuel type, equivalence ratio and particle size',
        authors: 'Ryu C, Yang YB, Khor A, Yates N E, Sharifi V N and Swithenbank J',
        journal: 'Fuel, Vol 85 (7-8), pp1039-1046, 2006.05'
      },
      // 2005
      {
        id: 'ij-2005-1',
        year: 2005,
        title: 'Effect of fuel properties on biomass combustion: Part II modelling approach - identification of the controlling factors',
        authors: 'Yang YB, Ryu C, Khor A, Yates N E, Sharifi V N and Swithenbank J',
        journal: 'Fuel, Vol.84 (16), pp 2116-2130, 2005.12'
      },
      {
        id: 'ij-2005-2',
        year: 2005,
        title: 'Fuel size effect on pinewood combustion in a packed bed',
        authors: 'Yang YB, Ryu C, Khor A, Sharifi VN and Swithenbank J',
        journal: 'Fuel, Vol 84(16), pp 2026-2038, 2005.11'
      },
      // 2004
      {
        id: 'ij-2004-1',
        year: 2004,
        title: 'Unsteady one-dimensional model for a bed combustion of solid fuels',
        authors: 'Yang W, Ryu C, Choi S',
        journal: 'Proceedings of IMechE Part A: J. Power and Energy, Vol.218, pp589-598, 2004.12'
      },
      {
        id: 'ij-2004-2',
        year: 2004,
        title: 'Thermal reaction modeling of a large municipal solid waste incinerator',
        authors: 'Ryu C, Yang YB, Sharifi VN and Swithenbank J',
        journal: 'Combustion Science and Technology, Vol.176, pp1891-1907, 2004.11'
      },
      {
        id: 'ij-2004-3',
        year: 2004,
        title: 'Gasification of wood char by ultra-superheated steam in an entrained flow reactor',
        authors: 'Ryu C, Nasserzadeh V. and Swithenbank J',
        journal: 'Journal of the Energy Institute, Vol.77, pp46-52, 2004.09'
      },
      {
        id: 'ij-2004-4',
        year: 2004,
        title: 'Modelling waste combustion in grate furnaces',
        authors: 'Yang YB, Ryu C, Anderson S, Sharifi VN and Swithenbank J',
        journal: 'Trans IChemE, Vol.82(B3): 208-222, 2004.05.'
      },
      {
        id: 'ij-2004-5',
        year: 2004,
        title: 'Modeling of combustion and heat transfer in an iron ore sintering bed with considerations of multiple solid phases',
        authors: 'Yang W, Ryu C, Choi S, Choi E, Lee D, Huh W',
        journal: 'ISIJ International, Vol.44, n 3: 492-499, 2004.03'
      },
      {
        id: 'ij-2004-6',
        year: 2004,
        title: 'Mathematical model and case studies of thermal process in an iron ore sintering bed',
        authors: 'Yang W, Ryu C, Choi S, Choi E, Lee D, Huh W',
        journal: 'Metals and Materials International, Vol.10, No. 5: 493-500, 2004.'
      },
      // 2003
      {
        id: 'ij-2003-1',
        year: 2003,
        title: 'Continuous Measurement of Metals in Flue Gas Using ICP-OES',
        authors: 'Clarkson PJ, Poole DJ, Ryu C, Sharifi VN, Swithenbank J, Waarlo H-J, Ardelt D, Falk H',
        journal: 'Analytical and Bioanalytical Chemistry, Vol.377(1) pp.39-47, 2003.9'
      },
      // ~ 2002 (과거 논문들)
      {
        id: 'ij-2002-1',
        year: 2002,
        title: 'Combined bed combustion and gas flow simulation for a grate type incinerator',
        authors: 'Ryu C, Shin D and Choi S',
        journal: 'Journal of the Air and Waste Management Association, Vol.52, no.2: 189-197, 2002.'
      },
      {
        id: 'ij-2001-1',
        year: 2001,
        title: 'Effect of fuel layer mixing in a grate-type incinerator',
        authors: 'Ryu C, Shin D and Choi S',
        journal: 'Advances in Environmental Research, Vol.5(3): 259-267, 2001'
      },
      {
        id: 'ij-2001-2',
        year: 2001,
        title: 'Bed combustion and gas flow model for MSW Incinerator',
        authors: 'Ryu C, Shin D and Choi S',
        journal: 'Progress in Computational Fluid Dynamics, Vol.1: 141-148, 2001'
      },
      {
        id: 'ij-1998-1',
        year: 1998,
        title: 'Computational fluid dynamics evaluation of good combustion performance in waste incinerators',
        authors: 'Shin D, Ryu C, and Choi S',
        journal: 'Journal of the Air and Waste Management Association, Vol. 48, no. 4pp.345-351, 1998.4'
      },
      {
        id: 'ij-1997-1',
        year: 1997,
        title: 'Design consideration for the cross jet air mixing in the MSW incinerators',
        authors: 'Ryu C and Choi S',
        journal: 'Int. Journal of Energy Research, Vol.21: 695-706, 1997'
      },
      {
        id: 'ij-1996-1',
        year: 1996,
        title: '3-Dimensional simulation on air mixing in the municipal solid waste incinerators',
        authors: 'Ryu C and Choi S',
        journal: 'Combustion Science and Technology, Vol.119: 155-170, 1996. 10'
      },
    ],

  // =========================================================================================
  // 데이터 입력 영역
  // =========================================================================================

    'Korean Journals': [
      // 2024
      {
        id: 'kj-2024-1',
        year: 2024,
        title: '80 kWth급 미분탄 연소 시스템에서 음식 폐기물 기반 고형 연료 혼소시 연소 특성 연구',
        authors: '심우현, 이재욱, 양원*, 채태영*, 류창국, 김이태, 정윤아',
        journal: '한국연소학회지 Vol.29, No.4, pp.12~20, 2024.12'
      },
      {
        id: 'kj-2024-2',
        year: 2024,
        title: '암모니아 전소 버너 설계를 위한 난류 비예혼합 연소 해석 모델의 평가',
        authors: '박기범, 양원, 채태영, 류창국*',
        journal: '한국연소학회지 Vol.29, No.4, pp.108~118, 2024.12'
      },
      // 2022
      {
        id: 'kj-2022-1',
        year: 2022,
        title: '해양 폐플라스틱 SRF의 고정층 연소 시 우드펠릿 혼소에 따른 화염전파 특성 분석',
        authors: '박종근, 유승한, 김희윤, 류창국*, 김종현, 이재하, 허준',
        journal: '한국폐기물자원순환학회 Vol.39, No.2, pp.117~126, 2022.04'
      },
      // 2021
      {
        id: 'kj-2021-1',
        year: 2021,
        title: '제강공정 래들 버너의 COG 대체를 위한 천연가스의 적정 연소 조건및 NOx 배출 영향에 대한 전산해석 연구',
        authors: '박종민, 강우석, 김량균, 임호, 류창국*',
        journal: '한국연소학회 Vol.26, No.3, pp.10~19, 2021.09'
      },
      // 2020
      {
        id: 'kj-2020-1',
        year: 2020,
        title: '반탄화공정 연계 배가스의 재순환시 우드펠릿 보일러 열성능 변화에 대한 전산해석 연구',
        authors: '유승한, 이지석, 류창국*',
        journal: '한국열환경공학회 Vol.15,No2,pp24-33, 2020.12'
      },
      {
        id: 'kj-2020-2',
        year: 2020,
        title: '가스의 광 흡수 특성 분석을 통한 대형 연소시스템 내 실시간 온도 및 농도 계측에 관한 실증 연구',
        authors: '박지연, 소성현, 박대근, 류창국, 이창엽*, 유미연*',
        journal: '한국가스학회지 Vol.24(5), pp.29~38, 2020.10'
      },
      // 2019
      {
        id: 'kj-2019-1',
        year: 2019,
        title: '전산유동해석을 이용한 가압 순산소 연소용 100 kWth급 석탄 버너의 설계 개념 개발',
        authors: '박종근, 양원, 채태영, 류창국*',
        journal: '한국열환경공학회지 Vol.14, No.2, pp.17~25, 2019.12'
      },
      {
        id: 'kj-2019-2',
        year: 2019,
        title: '직접 및 간접열교환에 따른 연속식 반응기 내 바이오매스 저속열분해 특성에 대한 실험적 연구',
        authors: '박정극, 김상호, 박진제, 유승한, 류창국*',
        journal: '한국연소학회 Vol.24, No.3, pp.33-40, 2019.09 (최우수 논문 상)'
      },
      {
        id: 'kj-2019-3',
        year: 2019,
        title: '직접접촉식 응축기를 통한 가압순산소 연소 배가스 내 SOx, NOx 동시저감 연구',
        authors: '최솔비, 목진성, 류창국, 최석천*',
        journal: '청정기술 Vol.25, No.3, pp.245~255, 2019.9'
      },
      {
        id: 'kj-2019-4',
        year: 2019,
        title: '단입자 바이오매스 펠릿의 연소특성에 관한 연구',
        authors: '박혜민, 목진성, 류창국, 최석천*',
        journal: '한국동력기계공학회지 Vol.23, No.2, pp.91~104, 2019.4'
      },
      // 2018
      {
        id: 'kj-2018-1',
        year: 2018,
        title: '염화알칼리에 의한 과열기 소재의 고온부식 영향',
        authors: '김범종, 정수화, 김혜수, 류창국, 이은도*',
        journal: '청정기술, Vol.24, No.4, pp.339-347, 2018.12'
      },
      // 2017
      {
        id: 'kj-2017-1',
        year: 2017,
        title: '가압 DTF를 이용한 석탄 촤-CO2 가스화 반응상수 도출',
        authors: '손근, 예인수, 류창국*, 라호원, 윤성민',
        journal: '한국연소학회지 Vol.22, No4 pp.19~26, 2017'
      },
      {
        id: 'kj-2017-2',
        year: 2017,
        title: '첨가제를 이용한 보일러 열교환기의 고온부식 방지기술 현황',
        authors: '김범종, 류창국, 이은도*, 김영두, 이정우, 송재헌',
        journal: '청정기술 23(3), pp.223-236, 2017.9'
      },
      {
        id: 'kj-2017-3',
        year: 2017,
        title: '접선연소식 보일러에서 미분탄 연소 시 공기 배분의 영향에 대한 전산해석 연구',
        authors: '강기섭, 류창국*',
        journal: '한국화학공학회지, 55권 4호, pp.548-555, 2017.08'
      },
      {
        id: 'kj-2017-4',
        year: 2017,
        title: '다양한 바이오매스의 분쇄도 실험을 통한 미분탄 화력발전 적용가능성 연구',
        authors: '강별, 이용운, 류창국, 양원*',
        journal: '청정기술, 23권 1호, pp.73-79, 2017.03'
      },
      // 2016
      {
        id: 'kj-2016-1',
        year: 2016,
        title: '전산유동해석을 이용한 폐타이어 열분해 반응기 내 열전달 특성 최적화 연구',
        authors: '이용운, 박진제, 류창국*, 채태영, 양원, 박현주',
        journal: '한국폐기물자원순환학회지, Vol.33, No.2, pp. 171-178, 2016.06'
      },
      {
        id: 'kj-2016-2',
        year: 2016,
        title: 'Experimental Evaluation of Cohesion Properties for Various Coals',
        authors: 'Kim M, Lee Y, Ryu C*, Park HY, Lee HS',
        journal: 'KEPCO Journal on Electric Power and Energy, Vol.2 (2), pp.279-284, 2016.04'
      },
      // 2015
      {
        id: 'kj-2015-1',
        year: 2015,
        title: '미분탄 보일러 연소 해석에서 석탄 반응 모델 및 난류 혼합 속도의 영향 평가',
        authors: '양주향, 김정은, 류창국*',
        journal: '한국연소학회지, Vol.20, No.3, pp. 35-42, 2015.09'
      },
      // 2014
      {
        id: 'kj-2014-1',
        year: 2014,
        title: '경량골재 로타리킬른의 운전최적화를 위한 석탄연소 및 입자 승온특성 해석',
        authors: '박종근, 류창국*, 김영주',
        journal: '한국연소학회지, Vol.19, No.3, pp. 18-25, 2014.09'
      },
      {
        id: 'kj-2014-2',
        year: 2014,
        title: 'IGCC 합성가스 급속 냉각시스템의 운전 압력에 따른 열유동 및 입자 거동 특성 연구',
        authors: '박상빈, 양주향, 오준호, 예인수, 류창국*, 박성구',
        journal: '한국수소 및 신에너지학회 논문집, Vol.25, No.1, pp. 97-104, 2014.02'
      },
      {
        id: 'kj-2014-3',
        year: 2014,
        title: '바이오매스 부산물의 저속 열분해 특성에 대한 실험적 연구',
        authors: '이용운, 박진제, 강기섭, 류창국*, 양원',
        journal: '한국폐기물자원순환학회지, Vol.31, No.1, pp. 39-46, 2014.01'
      },
      // 2013
      {
        id: 'kj-2013-1',
        year: 2013,
        title: 'IGCC 합성가스 냉각기 GRC의 열유동 및 입자거동 특성에 대한 전산해석 연구',
        authors: '박상빈, 예인수, 류창국*, 김봉근',
        journal: '한국연소학회지, Vol.18, No.1, pp. 21-26, 2013.03'
      },
      {
        id: 'kj-2013-2',
        year: 2013,
        title: 'Giant Miscanthus 유래 biochar와 폐기물 유래 char의 무기원소 함량과 용출특성 평가',
        authors: '김용성, 현승훈*, 김웅기, 정진호, 류창국',
        journal: '한국폐기물자원순환학회지, Vol.30, No.2, pp. 101-111, 2013.03'
      },
      // 2011
      {
        id: 'kj-2011-1',
        year: 2011,
        title: '탈휘발 과정과 촤가스화 과정에서 목질계 바이오매스의 타르발생 특성',
        authors: '문지홍, 이은도, 류창국, 이영만*, 배우근',
        journal: '한국연소학회지, Vol.16, No.1, pp. 8-14, 2011.03'
      },
      {
        id: 'kj-2011-2',
        year: 2011,
        title: '전산유동해석을 이용한 100MWe급 석탄 순산소 연소 실증 보일러의 설계 및 운전조건 평가',
        authors: '채태영, 박상현, 홍재현, 양원, 류창국*',
        journal: '한국연소학회지, Vo.16, No.2, pp.1-8, 2011.06'
      },
      {
        id: 'kj-2011-3',
        year: 2011,
        title: '전산해석을 이용한 원자로 노심 용융물의 거동 및 열전달 특성 분석',
        authors: '예인수, 류창국*, 하광순, 송진호',
        journal: '대한기계학회논문집 B권, 35(4), pp.425-429, 2011.04'
      },
      // 2008
      {
        id: 'kj-2008-1',
        year: 2008,
        title: '영국의 신재생에너지 정책-바이오매스를 중심으로',
        authors: '류창국*',
        journal: '한국수소 및 신에너지학회논문집, Vol.19, No.3, pp.260-265, 2008'
      },
      // 2005
      {
        id: 'kj-2005-1',
        year: 2005,
        title: '선택적 비촉매환원법(SNCR)을 이용한 도시폐기물 소각로의 NOx 저감을 위한 수치해석적 연구',
        authors: '엄태인*, 채종성, 성지선, 윤오섭, 김철규, C.K. RYU, 장동순, 전영남, 문승현',
        journal: '한국폐기물학회지, 22(1), pp.40-47, 2005'
      },
      // 2004
      {
        id: 'kj-2004-1',
        year: 2004,
        title: '제선 설비의 열공정 해석 모델링 접근 방법',
        authors: '양원, 류창국, 최상민*, 최응수, 이덕원, 허완욱',
        journal: '대한 기계학회 논문집 B, Vol. 28, No. 7, pp.747-754, 2004'
      },
      // 2003
      {
        id: 'kj-2003-1',
        year: 2003,
        title: '유동해석과 연소실험을 이용한 이동 화격자식 RDF 연소로 설계',
        authors: '엄태인*, 류창국, 노남선, 김성수',
        journal: '대한환경공학회지 , 25권 , 4호 , pp.480-485, 2003.1'
      },
      {
        id: 'kj-2003-2',
        year: 2003,
        title: '소각로 연소실내의 폐기물 층 연소현상에 대한 수치모델링 연구',
        authors: '전영남*, 김승호, 류창국',
        journal: '대한환경공학회지, 25(7), pp.925-931, 2003'
      },
      // 2002
      {
        id: 'kj-2002-1',
        year: 2002,
        title: '제철 소결기 베드 내 연소 및 열전달 모델링',
        authors: '양원, 류창국, 최상민',
        journal: '한국연소학회지지, Vol.7, No.3, pp.23-31, 2002'
      },
      {
        id: 'kj-2002-2',
        year: 2002,
        title: '화격자식 소각로의 열유동 해석과 결과 분석에 대한 고찰',
        authors: '류창국, 최상민',
        journal: '한국전산유체공학회지 제7권 제3호, pp. 17-26, 2002'
      },
      {
        id: 'kj-2002-3',
        year: 2002,
        title: '고체 연료층의 연소와 연소로 내 가스 유동의 해석 모델',
        authors: '류창국, 고영건, 최상민',
        journal: '대한환경공학회지 제 24권 7호, pp.1197-1207, 2002'
      },
      {
        id: 'kj-2002-4',
        year: 2002,
        title: 'Bed Combustion in a Furnace',
        authors: 'C. Ryu, D. Shin and S. Choi',
        journal: '한국연소학회지지 제 7권, 제 1호, pp.58~64, 2002'
      },
      // ~ 2001
      {
        id: 'kj-2001-1',
        year: 2001,
        title: '소각로 내 연료 연소와 열유동장의 병합 해석 모델',
        authors: '류창국, 신동훈, 최상민',
        journal: '한국폐기물학회 논문집 제 18권 제2호 pp.180-188, 2001'
      },
      {
        id: 'kj-2000-1',
        year: 2000,
        title: '도시 폐기물 소각로의 운전조건 개선 실시 사례',
        authors: '최진환, 류창국, 신동훈, 최상민*',
        journal: '한국폐기물학회 논문집 제17권 제1호, pp.9-18, 2000'
      },
      {
        id: 'kj-1999-1',
        year: 1999,
        title: '모형실험 및 전산해석을 통한 선택적 촉매 반응기 내부유동 최적화 연구',
        authors: '류창국, 심광보, 최상민*',
        journal: '대한기계학회 논문집 B, Vol.23, No.4, pp.548-555, 1999'
      },
      {
        id: 'kj-1994-1',
        year: 1994,
        title: '소각로 형상설계를 위한 냉간유동 실험',
        authors: '류창국, 김숭기, 최상민',
        journal: '대한기계학회 논문집, 제18권 제 8호, pp.2184-2193' // 따옴표(') 추가 및 페이지 번호 확인
      },
],

  // =========================================================================================
  // 데이터 입력 영역
  // =========================================================================================

     'International Conferences': [
      // 2025
      {
        id: 'ic-2025-1',
        year: 2025,
        title: 'Numerical study on Replacing COG with Low-Calorific LDG via Pure Oxygen Combustion in a Ladle for the Steelmaking Process',
        authors: 'Jeongho Lee, Yunchang Jang, Changkook Ryu, Taeyoung Kim',
        journal: 'The 2025 International Symposium on Clean Energy and Advanced Materials, 28 Nov-2 Dec 2025, Melbourne, Australia (poster)'
      },
      {
        id: 'ic-2025-2',
        year: 2025,
        title: 'Forecasting and scenario-based analysis of attemperating spray water flows in a coal-fired boiler using deep learning models',
        authors: 'Yunha Koo, Yunchang Jang, Hyunbin Jo, Arong Jang, Changkook Ryu',
        journal: 'The 2025 International Symposium on Clean Energy and Advanced Materials, 28 Nov-2 Dec 2025, Melbourne, Australia (poster)'
      },
      {
        id: 'ic-2025-3',
        year: 2025,
        title: 'AI-Enhanced Predictive Modeling for Operational Efficiency in Waste Incineration',
        authors: 'Seongmin Park, Heeyoon Kim, Hyunbin Jo, Dongmin Shin, Jaeho Lee, Jihoon Son , Yongkeun Yun , Changkook Ryu',
        journal: '33rd European Biomass Conference & Exhibition, 9-12 June 2025, Valencia, Spain (poster)'
      },
      {
        id: 'ic-2025-4',
        year: 2025,
        title: 'Analysis of pyrolysis kinetics and lignocellulosic composition from biomass thermogram using convolutional neural network',
        authors: 'Heeyoon Kim, Sungmin Park, Changkook Ryu',
        journal: '33rd European Biomass Conference & Exhibition, 9-12 June 2025, Valencia, Spain (poster)'
      },
      {
        id: 'ic-2025-5',
        year: 2025,
        title: 'Numerical Investigation of Ammonia Co-firing Strategy in a 1000 MWe Opposed Wall-firing Coal Boiler',
        authors: 'Seonkyo Ha, Woosuk Kang, Yunha Koo, Changkook Ryu, Donggyu Kim, Kyoungil Park, Sehyun Baek',
        journal: '15th Asia-Pacific Conference on Combustion, 18-22 May 2025, Singapore, Singapore'
      },
      // 2024
      {
        id: 'ic-2024-1',
        year: 2024,
        title: 'Forecasting operational performance of a waste incinerator using AI-based models',
        authors: 'Seongmin Park, Heeyoon Kim, Hyunbin Jo, Dongmin Shin, Jaeho Lee, Jihoon son, Yongkeun Yun, Changkook Ryu',
        journal: '10th International Symposium on Energy from Biomass and Waste, 25-27 November 2024, Venice, Italy'
      },
      {
        id: 'ic-2024-2',
        year: 2024,
        title: 'Effect of combustion temperature and oxygen concentrations of flue gas during NH3/CO/Air/Ar combustion using a lab-scale bubbling fluidized bed reactor',
        authors: 'Hotae Im, Sungjin Park, Sungho Jo, Taeyoung Mun',
        journal: 'The 2024 International Symposium on Clean Energy and Advanced Materials, 20-23 November, Busan, Koreas (poster)'
      },
      {
        id: 'ic-2024-3',
        year: 2024,
        title: 'An Experimental study on optimization of ammonia co-firing in an 1 MWth pulverized coal combustion system',
        authors: 'Woo-hyun Sim, Seong-hwan Hwang, Jae-wook Lee, Chang-hee Byun, Tae-young Chae, Won Yang, Chang-guk Ryu',
        journal: 'The 2024 International Symposium on Clean Energy and Advanced Materials, 20-23 November, Busan, Koreas'
      },
      {
        id: 'ic-2024-4',
        year: 2024,
        title: 'CNN-based analysis for pyrolysis kinetics and lignocellulosic composition of biomass for thermogram data',
        authors: 'Heeyoon Kim, Hyunbin Jo, Changkook Ryu',
        journal: 'The 2024 International Symposium on Clean Energy and Advanced Materials, 20-23 November, Busan, Korea'
      },
      {
        id: 'ic-2024-5',
        year: 2024,
        title: 'Utilizing AI-driven models for forecasting and optimizing the operational performance of a solid waste incinerator',
        authors: 'Seongmin Park, Heeyoon Kim, Hyunbin Jo, Dongmin Shin, Jaeho Lee, Jihoon son, Yongkeun Yun, Changkook Ryu',
        journal: 'The 2024 International Symposium on Clean Energy and Advanced Materials, 20-23 November, Busan, Korea (Best Paper Award Second Prize)'
      },
      {
        id: 'ic-2024-6',
        year: 2024,
        title: 'Optimization of IGCC gasifier operation combining reduced-order model and artificial neural network',
        authors: 'Joonyeong Nam, Seongmin Park, Changkook Ryu',
        journal: 'The 2024 International Symposium on Clean Energy and Advanced Materials, 20-23 November, Busan, Korea (poster)'
      },
      {
        id: 'ic-2024-7',
        year: 2024,
        title: 'Numerical Analysis on NH3-Coal Cofiring Strategy in a 1000 MWe Opposed Wall-firing Boiler',
        authors: 'Seonkyo Ha, Woosuk Kang, Yunha Koo, Changkook Ryu, Donggyu Kim, Kyoungil Park, Sehyun baek',
        journal: 'The 2024 International Symposium on Clean Energy and Advanced Materials, 20-23 November, Busan, Korea'
      },
      {
        id: 'ic-2024-8',
        year: 2024,
        title: 'Evaluation of numerical reaction model for ammonia in turbulent non-premixed swirl burner of an industrial-scale furnace',
        authors: 'Gibeom Park, Won yang, Taeyoung Chae, Changkook Ryu',
        journal: 'The 2024 International Symposium on Clean Energy and Advanced Materials, 20-23 November, Busan, Korea (poster)'
      },
      {
        id: 'ic-2024-9',
        year: 2024,
        title: 'Dynamic characteristics analysis of gas temperature, heat duty, and slag behavior in an IGCC coal gasifier in response to changes in the oxidant/coal ratio',
        authors: 'Joonyeong Nam, Seongmin Park, Mukyeong Kim, Changkook Ryu, Jieun Park, Sangwon Lee',
        journal: '12th International Freiberg Conference on Circular Carbon Technologies, 23-27 September 2024, Shanghai, China (Award for Outstanding Presentation)'
      },
      {
        id: 'ic-2024-10',
        year: 2024,
        title: 'Optimization of coal/NH3 co-firing method in a 500 MWe tangential-firing pulverized coal boiler',
        authors: 'Yunha Koo, Woosuk Kang, Seonkyo Ha, Hyunbin Jo, Sehyun Baek, Kyoungil Park, Changkook Ryu',
        journal: '3rd Symposium on Ammonia Energy, 23-26 September 2024, Shanghai, China'
      },
      {
        id: 'ic-2024-11',
        year: 2024,
        title: 'CFD Evaluation of Ammonia Co-firing Strategy in a 1000 MWe Wall-firing Coal Boiler',
        authors: 'Seonkyo Ha, Woosuk Kang, Yunha Koo, Changkook Ryu, Donggyu Kim, Kyoungil Park, Sehyun Baek',
        journal: '3rd Symposium on Ammonia Energy, 23-26 September 2024, Shanghai, China'
      },
      {
        id: 'ic-2024-12',
        year: 2024,
        title: 'Numerical modeling of water disinfection in a cylindrical UV-C LED reactor for design optimization',
        authors: 'Seoyoung Kang, Jinseung Bae, Sungsu Park, Kyoungjun Kim, Junghun Lee, Chulsoo Yoon, Changkook Ryu',
        journal: '3rd International Symposium on Carbon & Functional Materials for Energy & Environment, 21-24 February 2024, Danang, Vietnam (poster)'
      },
      {
        id: 'ic-2024-13',
        year: 2024,
        title: 'Dynamic behaviors of gas temperature, heat duty, and slag layer in an IGCC coal gasifier in response to changes in oxidant/solid ratio',
        authors: 'Joonyeong Nam, Seongmin Park, Mukyeong Kim, Changkook Ryu, Jieun Park, Sangwon Lee',
        journal: '3rd International Symposium on Carbon & Functional Materials for Energy & Environment, 21-24 February 2024, Danang, Vietnam (poster)'
      },
      // 2023
      {
        id: 'ic-2023-1',
        year: 2023,
        title: 'Deep learning-based model for real-time prediction and control optimization of NOx and NH3 concentrations at SCR outlet',
        authors: 'Hyunbin Jo, Donghyup Kang, Changkook Ryu',
        journal: '40th International Pittsburgh Coal Conference, 4-6 October 2023, Istanbul, Turkiye'
      },
      {
        id: 'ic-2023-2',
        year: 2023,
        title: 'Development of global combustion mechanism of NH3 for numerical analysis on cofiring with pulverized coal',
        authors: 'Woosuk Kang, Jongmin Park, Changkook Ryu',
        journal: '18th Conference on Sustainable Development of Energy, Water, and Environment Systems, 24-29 September 2023, Dubrovnik, Croatia'
      },
      {
        id: 'ic-2023-3',
        year: 2023,
        title: 'Optimization of NH3 cofiring method with pulverized coal in a tangential firing boiler using numerical simulation',
        authors: 'Yunha Koo, Hyunbin Jo, Seonkyo Ha, Woosuk Kang, Sangbin Park, Jongmin Lee, Sehyun Baek, Changkook Ryu',
        journal: '18th Conference on Sustainable Development of Energy, Water, and Environment Systems, 24-29 September 2023, Dubrovnik, Croatia'
      },
      {
        id: 'ic-2023-4',
        year: 2023,
        title: 'Prediction model for pyrolysis kinetics of torrefied biomass based on raw biomass properties and torrefaction severity',
        authors: 'Heeyoon Kim, Seunghan Yu, Howon Ra, Sungmin Yoon, Changkook Ryu',
        journal: '31st European Biomass Conference & Exhibition, 5-8 June 2023, Bologna, Italy'
      },
      {
        id: 'ic-2023-5',
        year: 2023,
        title: 'CFD Evaluation of NH3 Cofiring with Pulverized Coal in a Commercial Tangential-firing Boiler',
        authors: 'Yunha Koo, Hyunbin Jo, Seonkyo Ha, Woosuk Kang, Jongmin Park, Sangbin Park, Jongmin Lee, Sehyun Baek, Changkook Ryu',
        journal: '14th Asia-Pacific Conference on Combustion, 14-18 May 2023, Kaohsiung, Taiwan'
      },
      {
        id: 'ic-2023-6',
        year: 2023,
        title: 'Development of Global Combustion Mechanism of NH3 for Computational Fluid Dynamics on Cofiring with Pulverized Coal',
        authors: 'Woosuk Kang, Jongmin Park, Changkook Ryu',
        journal: '14th Asia-Pacific Conference on Combustion, 14-18 May 2023, Kaohsiung, Taiwan'
      },
      // 2022
      {
        id: 'ic-2022-1',
        year: 2022,
        title: 'Prediction model for pyrolysis kinetics of torrefied biomass based on torrefaction severity and properties of raw biomass',
        authors: 'Heeyoon Kim, Seunghan Yu, Changkook Ryu',
        journal: '6th Asia Pacific Biochar Conference 2022, 24-26 October 2022, Seoul, Korea (poster)'
      },
      {
        id: 'ic-2022-2',
        year: 2022,
        title: 'Optimization of overfire air for improved performance and NOx reduction in a commercial wall-firing coal boiler',
        authors: 'Woosuk Kang, Hyunbin Jo, Jongwook Lee, Kyehwan Jang, Tae Young Chae, Jae Wook Lee Changkook ryu',
        journal: '13th European Conference on Industrial Furnaces and Boilers, 19-22 April 2022, Algrave, Portugal (poster)'
      },
      {
        id: 'ic-2022-3',
        year: 2022,
        title: 'Numerical studies on boiler performance and influence of burner tilt during uneven secondary air supply in a tangential-firing coal boiler',
        authors: 'Hyunbin Jo, Jongkeun Park, Woosuk Kang, Jun Seok Hong, Sung Min Yoon, Ho Won Ra, Changkook Ryu',
        journal: '13th European Conference on Industrial Furnaces and Boilers, 19-22 April 2022, Algrave, Portugal'
      },
      // 2021
      {
        id: 'ic-2021-1',
        year: 2021,
        title: 'Analysis of fuel property correlations and pyrolysis behaviors for torrefied biomass of woody and herbaceous samples',
        authors: 'Seunghan Yu, Heeyoon Kim, Jinje Park, Yongwoon Lee, Changkook Ryu',
        journal: '13th Asia-Pacific Conference on Combustion 2021, 4 - 9 December 2021, ADNEC, Abu Dhabi - UAE'
      },
      {
        id: 'ic-2021-2',
        year: 2021,
        title: 'Effect of burner tilt on flow, heat transfer and NOx emission during operation with uneven air supply in a 500MWe tangential-firing boiler',
        authors: 'Hyunbin Jo, Jongkeun Park, Woosuk Kang, Jun Seok Hong, Changkook Ryu',
        journal: '13th Asia-Pacific Conference on Combustion 2021, 4 - 9 December 2021, ADNEC, Abu Dhabi - UAE'
      },
      // 2020
      {
        id: 'ic-2020-1',
        year: 2020,
        title: 'Process Development for Large-scale Biochar Production by integration of Pyrolysis and Large Combustion Plant',
        authors: 'Seunghan Yu, Heeyun Kim, Changkook Ryu, Minsu Kim',
        journal: '4th International Converence on Bioresources, Energy, Environment, and Materials Technology (BEEM 2020), 6-9 September 2020, Incheon, South Korea(Best student oral presentation)'
      },
      // 2019
      {
        id: 'ic-2019-1',
        year: 2019,
        title: 'Development of a new dynamic reduced order model optimized for a Shell coal gasifier integrating the slag flow model',
        authors: 'Mukyeong Kim, Changkook Ryu, Insoo Ye',
        journal: '14th Conference on Sustainable Development of Energy, Water and Environment Systems (SDEWES), 1-6 October 2019, Dubrovnik, Croatia'
      },
      {
        id: 'ic-2019-2',
        year: 2019,
        title: 'Taean 300 MWe IGCC coal gasifier: Operation improvement supported by dynamic reduced order model and CFD (Plenary Lecture)',
        authors: 'Mukyeong Kim, Changkook Ryu, Bongkeun Kim',
        journal: '2019 International Symposium on Clean Energy and Advanced Materials(CEAM 2019), 25-28, September, 2019, Busan, South Korea'
      },
      {
        id: 'ic-2019-3',
        year: 2019,
        title: 'Evaluation of slagging model for ash deposition in entrained flow reactor (EFR)',
        authors: 'Kieseop Kang, Hyunbin Jo, Jongkeun Park, Ho Lim, Chunghwan Jeon, Changkook Ryu',
        journal: '2019 International Symposium on Clean Energy and Advanced Materials(CEAM 2019), 25-28, September, 2019, Busan, South Korea (poster)'
      },
      {
        id: 'ic-2019-4',
        year: 2019,
        title: 'Optimization of separated overfire air to reduce NOx emission for the retrofit of a commercial coal boiler using CFD modeling',
        authors: 'Hyunbin Jo, Kiseop Kang, Jongkeun Park, Changkook Ryu, Hyunsoo Ahn, Younggun Go',
        journal: '2019 International Symposium on Clean Energy and Advanced Materials(CEAM 2019), 25-28, September, 2019, Busan, South Korea'
      },
      {
        id: 'ic-2019-5',
        year: 2019,
        title: 'Upgrading the fuel quality of wood pellet by torrefaction',
        authors: 'Seunghan Yu, Jinje Park, Changkook Ryu',
        journal: '2019 International Symposium on Clean Energy and Advanced Materials(CEAM 2019), 25-28, September, 2019, Busan, South Korea'
      },
      {
        id: 'ic-2019-6',
        year: 2019,
        title: 'Derivation of lignocellulosic composition from thermogravimetric analysis based on modified pyrolysis kinetics',
        authors: 'Heeyoon Kim, Minsu Kim, Changkook Ryu',
        journal: '2019 International Symposium on Clean Energy and Advanced Materials(CEAM 2019), 25-28, September, 2019, Busan, South Korea'
      },
      {
        id: 'ic-2019-7',
        year: 2019,
        title: 'Effect of distributing combustion in the boiler on controlling flue gas temperature in pressurized oxy-fired systems with low flue gas recirculation',
        authors: 'Hamed Jafari, Won Yang*, Changkook Ryu',
        journal: 'The 12th Asia-Pacific Conference on Combustion, 1-5, July, 2019, Fukuoka, Japan'
      },
      {
        id: 'ic-2019-8',
        year: 2019,
        title: 'Prediction of three biomass components and improved modeling of pyrolysis kinetics using thermogravimetric analysis',
        authors: 'Heeyoon Kim, Minsu Kim, Changkook Ryu',
        journal: 'The 3rd International Conference on Bioresource, Energy, Environment, and Materials Technology (BEEM), 12-15, June, 2019, Hongkong, China'
      },
      {
        id: 'ic-2019-9',
        year: 2019,
        title: 'Improvement of energy density and grindability for wood pellets by torrefaction',
        authors: 'Seunghan Yu, Jinje Park, Changkook Ryu',
        journal: 'The 3rd International Conference on Bioresource, Energy, Environment, and Materials Technology (BEEM), 12-15, June, 2019, Hongkong, China'
      },
      // 2018
      {
        id: 'ic-2018-1',
        year: 2018,
        title: '1-D analysis of a 560 MWe power plant boiler performing under different coal specifications',
        authors: 'Hamed Jafari, Won Yang*, Changkook Ryu',
        journal: '2018 International Pittsburgh Coal Conference, 15-18, October, 2018, Xuzhou, China'
      },
      {
        id: 'ic-2018-2',
        year: 2018,
        title: 'Development of a dynamic reduced order model for Taean coal gasifier integrating the slag flow model',
        authors: 'Mukyeong Kim, Insoo Ye, Changkook Ryu, Bonggeun Kim',
        journal: '2018 International Pittsburgh Coal Conference, 15-18, October, 2018, Xuzhou, China'
      },
      {
        id: 'ic-2018-3',
        year: 2018,
        title: 'Fuel properties and grindability of torrefied wood pellets',
        authors: 'Seunghan Yu, Jinje Park, Minsu Kim, Changkook Ryu, Yongwoon Lee, Won Yang',
        journal: '2nd International Conference on Bioresource Technology for Bioenergy, Bioproducts & Environmental Sustainability, 16-19, September, 2018, Sitges, Spain (poster)'
      },
      {
        id: 'ic-2018-4',
        year: 2018,
        title: 'Characterization of biochar and byproducts from slow pyrolysis of Hinoki cypress',
        authors: 'Seunghan Yu, Jinje Park, Minsu Kim, Changkook Ryu, Jungkeuk Park',
        journal: '2nd International Conference on Bioresource Technology for Bioenergy, Bioproducts & Environmental Sustainability, 16-19, September, 2018, Sitges, Spain (poster)'
      },
      {
        id: 'ic-2018-5',
        year: 2018,
        title: 'Characterization of biochar from various biomass produced by slow pyrolysis at 500℃',
        authors: 'Jinje Park, Seunghan Yu, Minsu Kim, Changkook Ryu, Jungkeuk Park',
        journal: '2nd International Conference on Bioresource Technology for Bioenergy, Bioproducts & Environmental Sustainability, 16-19, September, 2018, Sitges, Spain (poster)'
      },
      {
        id: 'ic-2018-6',
        year: 2018,
        title: 'Efficient large-scale biochar production by process integration of pyrolysis with a host boiler',
        authors: 'Minsu Kim, Jinje Park, Seunghan Yu, Changkook Ryu*, Jungkeuk Park',
        journal: '2nd Int. Conf. on Bioresources, Energy, Environment, and Materials Technology (BEEM), 10-13, June, 2018. Hongcheon, Korea'
      },
      {
        id: 'ic-2018-7',
        year: 2018,
        title: 'Comparison of dynamic behaviors between crystallized and glassy slags on the wall of an entrained coal gasifier',
        authors: 'Mukyeong Kim, Insoo Ye, Changkook Ryu',
        journal: '9th International Freiberg Conference on IGCC & XtL Technologies, 3-8, June, 2018, Berlin, Germany'
      },
      // 2017
      {
        id: 'ic-2017-1',
        year: 2017,
        title: 'Derivation of accurate rate constants for char CO2, H2O gasification using a pressurized drop tube furnace',
        authors: 'Geun Sohn, Insoo Ye, Changkook Ryu, Howon Ra, Sungmin Yoon',
        journal: '11th Asia-Pacific Conference on Combustion, 10-14, December, 2017, Sydney, Australia'
      },
      {
        id: 'ic-2017-2',
        year: 2017,
        title: 'Slow pyrolysis characteristics of woody and agricultural biomass for biochar production',
        authors: 'Jinje Park, Minsu Kim, Seunghan Yu, Changkook Ryu, Jungkeuk Park',
        journal: '2017 International Conference of Alternative Fuel & Energy, 23-25, October, 2017, Daegu, Korea (poster)'
      },
      {
        id: 'ic-2017-3',
        year: 2017,
        title: 'CFD evaluation of ash slagging tendency depending on burner levels in large-scale coal-fired boilers',
        authors: 'Kieseop Kang, Jongkeun Park, Changkook Ryu, Younggap Jeong',
        journal: 'The Ninth JSME-KSME Thermal and Fluids Engineering Conference October 28-30, 2017, Okinawa, Japan'
      },
      {
        id: 'ic-2017-4',
        year: 2017,
        title: 'Numerical simulation on the effects of air staging for pulverized coal combustion in a tangential-firing boiler',
        authors: 'Kieseop Kang, Changkook Ryu',
        journal: '15th International Congress on Combustion By-Products and Their Health Effects 2017, 25-28, June, 2017, Seoul, Korea (poster)'
      },
      {
        id: 'ic-2017-5',
        year: 2017,
        title: 'CFD evaluation of ash slagging tendency depending on burner levels in large-scale coal-fired boilers',
        authors: 'Kiseop Kang, Jongkeun Park, Younggap Jeong, Changkook Ryu',
        journal: 'EUBC 2017 - 25th European Biomass Conference and Exhibition, 12-15, June, 2017, Stockholm, Sweden (poster)'
      },
      {
        id: 'ic-2017-6',
        year: 2017,
        title: 'Characterization of biochar produced from various biomass by slow pyrolysis',
        authors: 'Changkook Ryu, Jinje Park, Jungkeuk Park, Yongwoon Lee, Won Yang',
        journal: 'EUBC 2017 - 25th European Biomass Conference and Exhibition, 12-15, June, 2017, Stockholm, Sweden (poster)'
      },
      {
        id: 'ic-2017-7',
        year: 2017,
        title: 'Charaterization of biochar and by-products produced from slow pyrolysis of biomass by direct contact with hot flue gas',
        authors: 'Jinje Park, Minsu Kim, Seunghan Yu, Changkook Ryu, Jungkeuk Park',
        journal: 'The 2nd international conference on biological waste as resource 2017, 25-28, May, 2017, Hongkong, China (poster)'
      },
      {
        id: 'ic-2017-8',
        year: 2017,
        title: 'Numerical modelling for pyrolysis and biochar production in a fixed bed reactor',
        authors: 'Minsu Kim, Jinje Park, Seunghan Yu, Changkook Ryu',
        journal: 'The 2nd international conference on biological waste as resource 2017, 25-28, May, 2017, Hongkong, China (poster)'
      },
      {
        id: 'ic-2017-9',
        year: 2017,
        title: 'A study on ash deposition characteristics during biomass co-firing using 80kW pulverized coal combustion system',
        authors: 'B. Kang, T.Y. Chae, J.W. Lee, Y.W. Lee, C.K. Ryu',
        journal: '2nd International Bioenergy (Shanghai) Conference and Exhibition, 20-21, April, 2017, Shanghai, China'
      },
      {
        id: 'ic-2017-10',
        year: 2017,
        title: 'Enhanced tar conversion from biomass over hot char particles',
        authors: 'Jinje Park, Yongwoon Lee, Changkook Ryu',
        journal: 'Asian conference on thermal sciences, 26-30, March, 2017, Jeju, Korea'
      },
      // 2016
      {
        id: 'ic-2016-1',
        year: 2016,
        title: 'Dynamic modeling of slag flow on the wall of an entrained coal gasifier',
        authors: 'Mukyeong Kim, Insoo Ye, Changkook Ryu',
        journal: 'International symposium on gasification and its applications, 29-2, November-December, 2016, Busan, Korea'
      },
      {
        id: 'ic-2016-2',
        year: 2016,
        title: 'CFD evaluation of different char conversion models in a 10 ton/day coal slurry gasifier',
        authors: 'Yunyoung Doh, Insoo Ye, Geun Son, Changkook Ryu, HoWon Ra',
        journal: 'International symposium on gasification and its applications, 29-2, November-December, 2016, Busan, Korea'
      },
      {
        id: 'ic-2016-3',
        year: 2016,
        title: 'Investigation of slag flow onto the entrained-flow gasifier wall using numerical method',
        authors: 'Insoo Ye, Changkook Ryu',
        journal: 'International symposium on gasification and its applications, 29-2, November-December, 2016, Busan, Korea (Poster)'
      },
      {
        id: 'ic-2016-4',
        year: 2016,
        title: 'Conversion of alkali-chlorides with sulfate-based additives for reduction of high temperature corrosion',
        authors: 'BJ Kim, YD Kim, JW Leem JH Song, CK Ruy, UD Lee',
        journal: '11th China-Korea Clean Energy Workshop, 20-23, Sept., 2016, Nanjing, China'
      },
      {
        id: 'ic-2016-5',
        year: 2016,
        title: 'Numerical analysis of flow and reaction characteristics in a coal-slurry gasifier for different operational loads',
        authors: 'Yunyoung Doh, Insoo Ye, Changkook Ryu, Ho Won Ra',
        journal: 'The 9th International Conference on Combustion, Incineration-Pyrosis, Emission and Climate Change, 20-23, Sept., 2016, Kyoto, Japan'
      },
      {
        id: 'ic-2016-6',
        year: 2016,
        title: 'Transient-state modeling for slag flow and heat transfer on the wall of an entrained coal gasifier',
        authors: 'Mukyeong Kim, Insoo Ye, Changkook Ryu, Bongkeun Kim',
        journal: 'The 9th International Conference on Combustion, Incineration-Pyrosis, Emission and Climate Change, 20-23, Sept., 2016, Kyoto, Japan'
      },
      {
        id: 'ic-2016-7',
        year: 2016,
        title: 'Numerical Analysis of Bioliquid Combustion in a 400 MWe Oil-Fired Boiler',
        authors: 'Jongkeun Park, Sangbin Park, Changkook Ryu, Se Hyun Baek, Young Ju Kim, Ho Young Park',
        journal: 'The 9th International Conference on Combustion, Incineration-Pyrosis, Emission and Climate Change, 20-23, Sept., 2016, Kyoto, Japan'
      },
      {
        id: 'ic-2016-8',
        year: 2016,
        title: 'Influence of slag properties and operating conditions on slag flow in a coal gasifier',
        authors: 'Insoo Ye, Changkook Ryu, Bongkeun Kim',
        journal: '8th International Freiberg Conference, 12-16, June, 2016, Cologne, Germany'
      },
      {
        id: 'ic-2016-9',
        year: 2016,
        title: 'Biomass co-firing with fuel/air staging for NOx emission reduction in a 560 MWe-scale tangential-firing boiler',
        authors: 'Kieseop KANG, J. Oh, J. Yang, C.Ryu',
        journal: 'EUBCE 2016 - 24th European Biomass Conference & Exhibition, 6-9, June, 2016, Amsterdam, Netherlands (Poster)'
      },
      {
        id: 'ic-2016-10',
        year: 2016,
        title: 'Bioliquid co-firing in 400 MWe oil-fired power plant with wall-firing configuration',
        authors: 'Changkook RYU, J.-K. Park, S. Park',
        journal: 'EUBCE 2016 - 24th European Biomass Conference & Exhibition, 6-9, June, 2016, Amsterdam, Netherlands (Poster)'
      },
      // 2015
      {
        id: 'ic-2015-1',
        year: 2015,
        title: 'Numerical analysis on biomass co-firing with fuel staging for NOx emission reduction in a commercial coal-fired boiler',
        authors: 'Kie Seop Kang, Jun Ho Oh, Joo Hyang Yang, Chang Kook Ryu, and Won Yang',
        journal: 'AFORE 2015 - 5th Asia-Pacific Forum on Renewable Energy, 4-7, November, 2015, Jeju, Korea (Poster)'
      },
      {
        id: 'ic-2015-2',
        year: 2015,
        title: 'Numerical study for slag flow characteristics on the wall of the entrained-bed coal gasifier',
        authors: 'Insoo Ye, Changkook Ryu',
        journal: 'AFORE 2015 - 5th Asia-Pacific Forum on Renewable Energy, 4-7, November, 2015, Jeju, Korea (Poster)'
      },
      {
        id: 'ic-2015-3',
        year: 2015,
        title: 'Fuel switching to bioliquid in commercial oil-fired power plants: field demonstration and cfd analysis',
        authors: 'Jongkeun Park, Mukyeong Kim, Changkook Ryu, Sehyun Baek, Youngju Kim, Hoyoung Park, Sangbin Park',
        journal: 'AFORE 2015 - 5th Asia-Pacific Forum on Renewable Energy, 4-7, November, 2015, Jeju, Korea (Poster with Excellent Paper Award)'
      },
      {
        id: 'ic-2015-4',
        year: 2015,
        title: 'CFD simulations on combustion, heat transfer and NOx emissions in 100 MWe oxy-coal furnace',
        authors: 'Changkook Ryu, Jeung-Eun A. KIM, Won YANG, Yong Ju KIM',
        journal: 'AFORE 2015 - 5th Asia-Pacific Forum on Renewable Energy, 4-7, November, 2015, Jeju, Korea'
      },
      {
        id: 'ic-2015-5',
        year: 2015,
        title: 'Biomass co-firing with fuel staging for NOx emission reduction in a commercial coal-fired boiler',
        authors: 'Kieseop Kang, Junho Oh, Joohyang Yang, Changkook Ryu, Won Yang',
        journal: 'The 2015 World Congress on Advances in Aeronautics, Nano, Bio, Robotics, and Energy, 25-28, August, 2015'
      },
      {
        id: 'ic-2015-6',
        year: 2015,
        title: 'Numerical modeling of slag flow and sensitivity analysis in an entrained-bed coal gasifier',
        authors: 'Insoo Ye, Sangbin Park, Changkook Ryu',
        journal: 'The 2015 World Congress on Advances in Aeronautics, Nano, Bio, Robotics, and Energy, 25-28, August, 2015'
      },
      {
        id: 'ic-2015-7',
        year: 2015,
        title: 'Field Demonstration and Numerical Simulations for Combustion of Bioliquids in Two Commercial Oil-Fired Power Plants',
        authors: 'C. Ryu, J-K. Park, S. Park, M-K. Kim, S-H. Beak, Y-J. Kim, H-Y. Park',
        journal: 'EUBCE 2015 - 23rd European Biomass Conference & Exhibition, 1-4 Jun., 2015, Vienna, Austria'
      },
      {
        id: 'ic-2015-8',
        year: 2015,
        title: 'Combustion Characteristics of Sewage Sludge Pellets in a Fixed Bed Reactor',
        authors: 'M. Kim, C. Ryu, T. Ohm',
        journal: 'International Conference on Solid waste 2015, 19-23 May, 2015, Hongkong, China'
      },
      // 2014
      {
        id: 'ic-2014-1',
        year: 2014,
        title: 'Numerical analysis on the effect of NOx reduction by biomass cofiring in a commercial coal-fired boiler',
        authors: 'Junho Oh, Kieseop Kang, Juhang Yang, Changkook Ryu, Won Yang',
        journal: 'The 8th International Conference on Combustion, Incineration-Pyrosis, Emission and Climate Change, 15-18 Oct., 2014, Hangzhou, China'
      },
      {
        id: 'ic-2014-2',
        year: 2014,
        title: 'Investigation for numerical slag flow model onto the entained-flow coal gasifier wall',
        authors: 'Insoo Ye, Changkook Ryu, Bongkeun Kim',
        journal: 'The 8th International Conference on Combustion, Incineration-Pyrosis, Emission and Climate Change, 15-18 Oct., 2014, Hangzhou, China (Poster)'
      },
      // 2013
      {
        id: 'ic-2013-1',
        year: 2013,
        title: 'Computational fluid dynamics of oxy-coal combustion for demonstration in a 100 MWe-scale boiler',
        authors: 'Ryu C, Kim JA',
        journal: '51th Combustion Symposium. Japanese Combustion Society, 4-6 Dec., 2013, Tokyo, Japan'
      },
      {
        id: 'ic-2013-2',
        year: 2013,
        title: 'Numerical Approaches to Retrofit of a Conventional Pulverized Coal Burner to an Oxy-Firing Burner',
        authors: 'Chae T, Yang W, Ryu C',
        journal: '30th Annual International Pittsburgh Coal Conference, 15-18 Sept., 2013, Beijing, China (Poster)'
      },
      {
        id: 'ic-2013-3',
        year: 2013,
        title: 'An Experimental Study on Slagging/Fouling Characteristics for Various Coals Using a 50kWth Pulverized Coal Combustion System',
        authors: 'Lee J,Kang K, Chae T, Na I, Yang W, Ryu C',
        journal: '30th Annual International Pittsburgh Coal Conference, 15-18 Sept., 2013, Beijing, China (Poster)'
      },
      {
        id: 'ic-2013-4',
        year: 2013,
        title: 'Numerical Simulations of Oxy-Coal Combustion in Youngdong 100 MWe Retrofit Boiler',
        authors: 'Kim JA, Park S, Ryu C, Yang W, Kim Y, Park H, Kim H',
        journal: '3rd Oxyfuel Combustion Conference, 9-13 Sept., 2013, Ponferrada, Spain'
      },
      {
        id: 'ic-2013-5',
        year: 2013,
        title: 'Production and characterization of biochar from various biomass materials by slow pyrolysis',
        authors: 'Lee Y, Park J, Gang K, Ryu C, Yang W, Jung J, Hyun S',
        journal: 'International Conference on Solid Waste 2013, 05-08 May, 2013, Hong Kong'
      },
      {
        id: 'ic-2013-6',
        year: 2013,
        title: 'Numerical simulations of a 100MWe retrofitted boiler for demonstration of oxy-coal combustion',
        authors: 'Kim J, Park S, Ryu C, Kim Y, Kim H',
        journal: 'Asia-Pacific Conference on Combustion 2013, 20 May, 2013, Gyeongju, Korea'
      },
      // 2012
      {
        id: 'ic-2012-1',
        year: 2012,
        title: 'Characteristics of biochar derived from biomass by slow pyrolyis',
        authors: 'Lee Y, Eum P, Ryu C, Jung J, Hyun S',
        journal: 'International Solid Waste Association 2012, 17-19 Sept., 2012, Florence, Italy (Poster)'
      },
      {
        id: 'ic-2012-2',
        year: 2012,
        title: 'Process consideration of fry-drying combined with steam compression for efficient fuel production from sewage sludge',
        authors: 'Hong S, Ryu C, Ko H, Chae J, Ohm T',
        journal: 'International Solid Waste Association 2012, 17-19 Sept., 2012, Florence, Italy (Poster)'
      },
      {
        id: 'ic-2012-3',
        year: 2012,
        title: 'Experimental study for behavior of tar during biomass gasification',
        authors: 'Eum P, Lee Y, Ryu C, Park Y',
        journal: 'International Solid Waste Association 2012, 17-19 Sept., 2012, Florence, Italy (Poster)'
      },
      {
        id: 'ic-2012-4',
        year: 2012,
        title: 'Characteristics of reaction, heat transfer and particle behavior in an entrained-flow coal gasifier',
        authors: 'Ye I, Park S, Ryu C, Kim B, Park H',
        journal: 'International Conference on Combustion, Incineration/Pyrolysis, Emission and Climate Change 2012, 4-7 Sept., 2012, Ilsan, Korea (Poster with Best Poster Award)'
      },
      {
        id: 'ic-2012-5',
        year: 2012,
        title: 'Behavior of sorbent particles in ceramic candle filters for multi-purpose syngas cleaning of waste gasification',
        authors: 'Oh J, Ryu C, Kim J, Kim H',
        journal: 'International Conference on Combustion, Incineration/Pyrolysis, Emission and Climate Change 2012, 4-7 Sept., 2012, Ilsan, Korea (Poster)'
      },
      {
        id: 'ic-2012-6',
        year: 2012,
        title: 'Energy-efficient drying process of sewage sludge combining immersion frying and steam compression',
        authors: 'Hong S, Ryu C, Ohm T, Chae J',
        journal: 'International Conference on Combustion, Incineration/Pyrolysis, Emission and Climate Change 2012, 4-7 Sept., 2012, Ilsan, Korea (Poster)'
      },
      {
        id: 'ic-2012-7',
        year: 2012,
        title: 'Experimental study for behavior of tar during biomass gasification',
        authors: 'Eum P, Lee Y, Ryu C, Park Y',
        journal: 'International Conference on Combustion, Incineration/Pyrolysis, Emission and Climate Change 2012, 4-7 Sept., 2012, Ilsan, Korea'
      },
      {
        id: 'ic-2012-8',
        year: 2012,
        title: 'Numerical simulations of a 100MWe boiler retrofitted for demonstration of oxy-coal combustion',
        authors: 'Kim J, Park S, Kim Y, Kim H, Ryu C',
        journal: 'International Conference on Combustion, Incineration/Pyrolysis, Emission and Climate Change 2012, 4-7 Sept., 2012, Ilsan, Korea'
      },
      {
        id: 'ic-2012-9',
        year: 2012,
        title: 'Characteristics of biochar derived from biomass by slow pyrolysis',
        authors: 'Lee Y, Eum P, Ryu C',
        journal: 'International Conference on Combustion, Incineration/Pyrolysis, Emission and Climate Change 2012, 4-7 Sept., 2012, Ilsan, Korea'
      },
      // 2011
      {
        id: 'ic-2011-1',
        year: 2011,
        title: 'Characteristics of biochar from slow pyrolysis of Geodae-Uksae',
        authors: 'Lee Y, Eum P-R-B, Ryu C, Jung J-H, Hyun, S',
        journal: '2011 Int. Symp. on Biochar, 8-9 Dec., 2011, Wonju, Korea'
      },
      {
        id: 'ic-2011-2',
        year: 2011,
        title: 'Characterization of pyrolysis products for production of biochar from giant Miscanthus by slow pyrolysis',
        authors: 'Lee Y-W, Eum P-R-B, Ryu C, Jung J, Hyun S',
        journal: '2011 Asia-Pacific Biochar Conference (APBC Kyoto 2011), 15-18 September, 2011, Kyoto, Japan'
      },
      {
        id: 'ic-2011-3',
        year: 2011,
        title: 'Effect of gas and particle emission on wall radiative heat flux in oxy-coal combustion',
        authors: 'Park S, Ryu C, Yang W, Kim Y, Lee S, Seo S',
        journal: '7th Int. Symp. on Coal Combustion, 17-20 July, 2011, Harbin, China'
      },
      {
        id: 'ic-2011-4',
        year: 2011,
        title: 'Numerical Simulations of a large scale oxy-coal burner',
        authors: 'Chae T, Park S, Ryu C, Yang W',
        journal: '7th Int. Symp. on Coal Combustion, 17-20 July, 2011, Harbin, China'
      },
      {
        id: 'ic-2011-5',
        year: 2011,
        title: 'Evaluation of gas and particle emission in oxy-coal combustion',
        authors: 'Park S, Ryu C, Yang W, Kim Y, Seo S',
        journal: '1st Int. Conf. on Clean Energy Sciences, 10-13 April, 2011, Dalian, China (Poster)'
      },
      {
        id: 'ic-2011-6',
        year: 2011,
        title: 'Numerical assessment on furnace design of 100MWe oxy-coal power plant for CCS demonstration',
        authors: 'Park S, Ryu C, Chae T, Yang W',
        journal: '1st Int. Conf. on Clean Energy Sciences, 10-13 April, 2011, Dalian, China (Poster)'
      },
      // 2010
      {
        id: 'ic-2010-1',
        year: 2010,
        title: 'CFD simulation and parametric study on a real-scale oxy-pulverized coal burner',
        authors: 'Chae T, Ryu C, Yang W',
        journal: '8th Asia-Pacific. Conf. on Combustion(ASPACC2010), 10-13, December, 2010, Hyderabad, India'
      },
      {
        id: 'ic-2010-2',
        year: 2010,
        title: 'Approaches to a conceptual design of a combustion system for a 100 MW boiler',
        authors: 'Yang W, Chae T, Choi CG, Na IH, Ryu SK, Yu, T, Ryu C, Han GR, Huh KY',
        journal: '35th Int. Conference on Clean Coal & Fuel Systems, June 6-10, 2010, Clearwater, Florida, USA'
      },
      {
        id: 'ic-2010-3',
        year: 2010,
        title: 'Assessment of wood pellet combustion in a domestic boiler',
        authors: 'Lee Y-W, Ryu C, Oh J-G, Lee W-J',
        journal: '6th Int. Conf. on Combustion, Incineration/Pyrolysis and Emission Control International Solid Waste Association 2010, 26-29 July 2010, Kuala Lumpur, Malaysia'
      },
      // 2008
      {
        id: 'ic-2008-1',
        year: 2008,
        title: 'Homogeneous and Heterogeneous Reactions of Pyrolysis Vapour from Biomass Gasification over a Bed of Hot Char',
        authors: 'Gilbert P, Ryu C, Sharifi VN, Swithenbank J',
        journal: 'Second International Symposium on Energy from Biomass and Waste, 17-20, November 2008, Venice, Italy.'
      },
      // 2007
      {
        id: 'ic-2007-1',
        year: 2007,
        title: 'Waste segregation presents thermal treatment opportunities',
        authors: 'Swithenbank J, Ryu C, Yang YB, Gilbert P, Chung W, Phan N, Le AK, Khor A, Sharifi VN',
        journal: '2007 International conference on Thermal Treatment Technologies, May 14-18, 2007, Phoenix, AZ.'
      },
      // 2006
      {
        id: 'ic-2006-1',
        year: 2006,
        title: 'Clean hydrogen production via novel air-steam gasification of biomass',
        authors: 'A Khor, C Ryu, YB Yang, V N Sharifi and J Swithenbank',
        journal: 'World Hydrogen Energy Conference (WHEC) 2006, GVIII-716.'
      },
      // 2005
      {
        id: 'ic-2005-1',
        year: 2005,
        title: 'Fundamental Study of Biomass Thermal Technologies',
        authors: 'C Ryu, YB Yang, A Khor, V N Sharifi and J Swithenbank',
        journal: '14th European Biomass Conference and Exhibition, Palais des Congress, Paris, France, 17-21 October 2005.'
      },
      {
        id: 'ic-2005-2',
        year: 2005,
        title: 'Modelling and diagnostics of waste thermal treatment system, (Keynote paper)',
        authors: 'YB Yang, C Ryu, A Khor, V Nasserzadeh Sharifi and J Swithenbank',
        journal: '1st international conference on Thermal Treatment and Resource Utilization of Waste, pp.123-139, Beijing, China, 21-23 November, 2005.'
      },
      {
        id: 'ic-2005-3',
        year: 2005,
        title: 'Tracking micropollutants from cradle to grave (Invited plenary lecture)',
        authors: 'J Swithenbank, YB Yang, C Ryu, VN Sharifi',
        journal: '9th International Congress on Combustion By-Products, 12-15 June 2005, Tuscan, Arizona, USA'
      },
      // 2004
      {
        id: 'ic-2004-1',
        year: 2004,
        title: 'Waste Pyrolysis, Generation and Exploitation of Storable Fuel Profit from Waste VII',
        authors: 'C Ryu, V N Sharifi and J Swithenbank',
        journal: 'IMechE, 27-28, October, 2004, London, UK'
      },
      {
        id: 'ic-2004-2',
        year: 2004,
        title: 'SUWIC Innovations in thermal waste to energy technologies',
        authors: 'J Swithenbank, YB Yang, C Ryu, VN Sharifi',
        journal: 'NAWTEC12 Plenary lecture, May 2004, Savannah Georgia, USA.'
      },
      // ~ 2003
      {
        id: 'ic-2003-1',
        year: 2003,
        title: 'Biomass Combustion (Plenary Lecture)',
        authors: 'J Swithenbank, YB Yang, C Ryu, J Goodfellow, S Shabangu, N V Russell, F M Lewis, V N Sharifi',
        journal: 'European Combustion Meeting (ECM2003), Orléans, France October 25-28, 2003.'
      },
      {
        id: 'ic-2001-1',
        year: 2001,
        title: 'Combined Bed Combustion and Gas Flow Simulation for a Grate Type Incinerator',
        authors: 'C. Ryu, D. Shin & S. Choi',
        journal: 'The 3rd Int. Symp. on Incineration & Flue Gas Treatment Technologies, Bruselles, Belgium, 2001.7. 2-4'
      },
      {
        id: 'ic-2001-2',
        year: 2001,
        title: 'Bed Combustion in a Furnace Enclosure - A Model for the MSW Incinerator',
        authors: 'C. Ryu, D. Shin & S. Choi',
        journal: 'The 3rd Asian-Pacific Conference on Combustion, Seoul, Korea, 2001. 6.24-27'
      },
      {
        id: 'ic-2000-1',
        year: 2000,
        title: 'Combined Bed Combustion and Gas Flow Simulation for a Grate Type Incinerator',
        authors: 'C. Ryu, D. Shin & S. Choi',
        journal: '4th JSME-KSME Thermal Engineering Conference, Kobe, Japan, 2000'
      },
      {
        id: 'ic-1999-1',
        year: 1999,
        title: 'Simulation of Waste Bed Combustion in the Municipal Solid Waste Incinerator',
        authors: 'C. Ryu, D. Shin and S. Choi',
        journal: 'The 2nd Int. Symp. on Incineration & Flue Gas Treatment Technologies, Sheffield Univ., UK, 1999.'
      },
      {
        id: 'ic-1999-2',
        year: 1999,
        title: 'Influence of Operation Parameters of MSW Incinerator on Dioxin/Furan Emission and Optimisation of Operaing Condition',
        authors: 'J. H. Choi, C. Ryu, W. Yang and S. Choi',
        journal: 'The 2nd Int. Symp. on Incineration & Flue Gas Treatment Technologies, Sheffield Univ., UK, 1999.'
      },
      {
        id: 'ic-1997-1',
        year: 1997,
        title: 'Reduced scale model studies for the design development of MSW incinerator combustion chamber',
        authors: 'Choi, S., Ryu, C. K. and Shin, D.',
        journal: 'The 1st Int. Symp. on Incineration and Flue Gas Treatment Technologies, Sheffield Univ., UK, 1997.'
      },
      {
        id: 'ic-1996-1',
        year: 1996,
        title: 'Numerical validation for good combustion performance in waste incinerators',
        authors: 'Shin, D., Ryu, C. K. and Choi, S.',
        journal: 'The 26th Symp. (Int.) on Combustion, works in progress part, The Combustion Institute, Naples, Italy, 1996.'
      },
      {
        id: 'ic-1996-2',
        year: 1996,
        title: 'Numerical Simulation on the Mixing Characteristics of the Cross Jets Interaction as Applied to the MSW Incinerators',
        authors: 'C. Ryu and S. Choi',
        journal: '1st KSME-JSME Thermal Engineering Conference, Kyung-ju, Korea, 1996.'
      },
      {
        id: 'ic-1995-1',
        year: 1995,
        title: 'Design Consideration for the Cross Jet Air Mixing in the MSW Incinerators',
        authors: 'C. Ryu and S. Choi',
        journal: 'ASME IMECE Symp.; Fire and Combustion Systems, pp.205-212, 1995.'
      }
    ],

  // =========================================================================================
  // 데이터 입력 영역
  // =========================================================================================

    'Korean Conferences': [
{
  id: 'kc-2025-1',
  year: 2025,
  title: '전산해석을 통한 1000 MWe급 대향류 보일러의 당량비 및 크래킹에 따른 암모니아 전소 성능 평가',
  authors: '박기범, 강우석, 하선교, 이정호, 이성재, 류창국',
  journal: '2025 한국환경에너지공학회 추계학술대회,2025.12.10-12, 제주'
},
{
  id: 'kc-2025-2',
  year: 2025,
  title: '암모니아-미분탄 혼소 버너의 화염 구조 최적화를 위한 전산해석 연구',
  authors: '장윤창, 강우석, 하선교, 정시율, 김동선, 정재헌, 류창국',
  journal: '2025 한국환경에너지공학회 추계학술대회, 2025.12.10-12, 제주'
},
{
  id: 'kc-2025-3',
  year: 2025,
  title: '암모니아 전소 보일러에의 철 연소 적용을 위한 1-D 해석 모델 연구',
  authors: '배영, 김성일, 양원, 박기범, 류창국, 임성균',
  journal: '2025 한국연소학회 추계학술대회, 2025.11.19-22, 경주'
},
{
  id: 'kc-2025-4',
  year: 2025,
  title: '중형 폐기물 소각로의 SNCR 제어 효율 향상을 위한 AI기반 적응형 요소수 분사 기술 개발',
  authors: '박성민, 김희윤, 신동민, 이재호, 손지훈, 류창국',
  journal: '2025 한국연소학회 추계학술대회, 2025.11.19-22, 경주'
},
{
  id: 'kc-2025-5',
  year: 2025,
  title: '전산해석 기반 암모니아-미분탄 혼소 버너의 화염 형태 최적화',
  authors: '장윤창, 강우석, 하선교, 정시율, 김동선, 정재헌, 류창국',
  journal: '2025 한국연소학회 추계학술대회, 2025.11.19-22, 경주'
},
{
  id: 'kc-2025-6',
  year: 2025,
  title: '1000 MWe급 대향류 보일러의 당량비 및 크래킹에 따른 암모니아 전소 성능 평가',
  authors: '박기범, 강우석, 하선교, 이정호, 이성재, 류창국',
  journal: '2025 한국연소학회 추계학술대회, 2025.11.19-22, 경주'
},
{
  id: 'kc-2025-7',
  year: 2025,
  title: '석탄화력 보일러 증기온도 제어를 위한 딥러닝 기반 과열 저감기 냉각수 유량 시나리오 예측 모델 개발',
  authors: '구윤하, 조현빈, 장아롱, 류창국',
  journal: '2025 한국환경에너지공학회 춘계학술대회, 2025.6.11-13, 부산'
},
{
  id: 'kc-2025-8',
  year: 2025,
  title: '전산해석을 통한 1000 MWe급 대향류 석탄화력 보일러에서 암모니아 전소 시 화염 및 열전달 특성 분석',
  authors: '박기범, 강우석, 하선교, 이정호, 이성재, 류창국',
  journal: '2025 한국환경에너지공학회 춘계학술대회(우수논문발표상(구두발표)), 2025.6.11-13, 부산'
},
{
  id: 'kc-2025-9',
  year: 2025,
  title: '전산해석을 통한 제강공정 래들 내 저발열량 연료의 순산소 연소에 따른 열효율 특성 분석',
  authors: '이정호, 장윤창, 류창국',
  journal: '2025 한국환경에너지공학회 춘계학술대회, 2025.6.11-13, 부산'
},
{
  id: 'kc-2025-10',
  year: 2025,
  title: '딥러닝을 이용한 석탄화력 보일러 과열저감기의 냉각수 유량에 대한 시나리오 예측 모델 개발',
  authors: '구윤하, 조현빈, 장아롱, 류창국',
  journal: '2025 한국연소학회 춘계학술대회, 2025.5.14-16, 삼척'
},
{
  id: 'kc-2025-11',
  year: 2025,
  title: '1000 MWe급 대향류 석탄화력 보일러에서 암모니아 전소 시 화염 및 열전달 특성에 대한 전산해석 연구',
  authors: '박기범, 강우석, 하선교, 이정호, 이성재, 류창국',
  journal: '2025 한국연소학회 춘계학술대회, 2025.5.14-16, 삼척'
},
{
  id: 'kc-2025-12',
  year: 2025,
  title: 'NOx-O2 상관성 분석 및 AI 기반 예측',
  authors: '박성민, 김희윤, 류창국',
  journal: '2025 한국연소학회 춘계학술대회, 2025.5.14-16, 삼척'
},
{
  id: 'kc-2025-13',
  year: 2025,
  title: '제강공정 래들 내 저발열량 연료의 순산소 연소에 따른 열효율 특성에 대한 전산해석 연구',
  authors: '이정호, 장윤창, 류창국',
  journal: '2025 한국연소학회 춘계학술대회, 2025.5.14-16, 삼척'
},
{
  id: 'kc-2025-14',
  year: 2025,
  title: 'AI 기반 NOx 예측 및 O2와의 상관성에 따른 폐기물 소각로 SNCR 제어',
  authors: '박성민, 김희윤, 신동민, 이재호, 손지훈, 윤용근, 류창국',
  journal: '2025 한국폐기물자원순환학회 춘계학술대회, 2025.05.12-13, 제주'
},
{
  id: 'kc-2024-1',
  year: 2024,
  title: 'Reduced order model과 인공신경망을 이용한 석탄 가스화기 최적 운전조건 도출',
  authors: '남준영, 박성민, 박지은, 장요한, 류창국',
  journal: '2024 한국연소학회 추계학술대회, 2024.11.6-8, 제주'
},
{
  id: 'kc-2024-2',
  year: 2024,
  title: '1 MWth급 미분탄 연소 시스템에서 암모니아 혼소율 변화 (0-20%)에 따른 연소 특성 연구',
  authors: '심우현, 황성환, 이재욱, 변창희, 양원, 채태영, 류창국',
  journal: '2024 한국연소학회 추계학술대회, 2024.11.6-8, 제주'
},
{
  id: 'kc-2024-3',
  year: 2024,
  title: '폐기물 소각로 최적 운전 제어를 위한 AI 기반 주요 성능 지표 예측 모델 개발',
  authors: '박성민, 김희윤, 조현빈, 신동민, 이재호, 손지훈, 윤용근, 류창국',
  journal: '2024 한국연소학회 추계학술대회, 2024.11.6-8, 제주'
},
{
  id: 'kc-2024-4',
  year: 2024,
  title: '암모니아 전소 버너 설계를 위한 난류 비예혼합 연소 해석 모델의 평가',
  authors: '박기범, 양원, 채태영, 류창국',
  journal: '2024 한국연소학회 추계학술대회, 2024.11.6-8, 제주'
},
{
  id: 'kc-2024-5',
  year: 2024,
  title: '80kWth 급 미분탄 연소 시스템 활용 암모니아 혼소율 변화 (0-40%)에 따른 연소 특성 연구',
  authors: '심우현, 양원, 채태영, 류창국',
  journal: '2024 한국연소학회 춘계학술대회, 2024.05.23-25, 여수'
},
{
  id: 'kc-2024-6',
  year: 2024,
  title: '순환유동층 바이오매스-암모니아 혼소 시 암모니아 공급 방법 및 Primary Air 비율 변화에 따른 영향 연구',
  authors: '임호태, 박성진, 김성주, 조성호, 이후경, 윤상준, 문지홍, 라호원, 윤성민, 조현빈, 류창국, 문태영',
  journal: '2024 한국연소학회 춘계학술대회, 2024.5.23-25 여수'
},
{
  id: 'kc-2024-7',
  year: 2024,
  title: '가스터빈 복합화력 발전 플랜트의 수소 혼소율에 따른 성능 평가',
  authors: '최현록,양원, 이영재, 김성일',
  journal: '2024 한국연소학회 춘계학술대회, 2024.05.23-25, 여수'
},
{
  id: 'kc-2024-8',
  year: 2024,
  title: '전산해석을 통한 산업용 보일러의 천연가스-수소 혼소 특성 및 적정 운전 조건 연구',
  authors: '김경중, 류창국',
  journal: '2024 한국연소학회 춘계학술대회, 2024.5.23-25 여수'
},
{
  id: 'kc-2024-9',
  year: 2024,
  title: '딥러닝을 활용한 열중량 분석 기반 바이오매스 삼성분 및 열분해 반응 상수 도출',
  authors: '김희윤, 조현빈, 류창국',
  journal: '2024 한국연소학회 춘계학술대회, 2024.5.23-24, 여수'
},
{
  id: 'kc-2024-10',
  year: 2024,
  title: '산업용보일러의 천연가스-수소 혼소에 따른 연소 특성 및 적정 운전 조건에 대한 전산해석 연구',
  authors: '김경중, 류창국',
  journal: '2024 한국에너지기후변화학회 춘계학술대회, 2024.5.22-24 제주도'
},
{
  id: 'kc-2023-1',
  year: 2023,
  title: '미분탄-암모니아 혼소 전산해석을 위한 암모니아의 글로벌 반응 메커니즘 개발',
  authors: '강우석, 류창국, 백세현, 김동규, 박경일',
  journal: '2023 한국연소학회 추계학술대회, 2023.11.9-11, 제주도 (우수논문발표상(구두발표))'
},
{
  id: 'kc-2023-2',
  year: 2023,
  title: '1000 MWe 대향류 석탄화력 보일러에서 최적 암모니아 혼소 방안에 대한 전산해석 연구',
  authors: '하선교, 강우석, 구윤하, 조현빈, 류창국, 백세현, 김동규, 박경일',
  journal: '2023 한국연소학회 추계학술대회, 2023.11.9-11, 제주도'
},
{
  id: 'kc-2023-3',
  year: 2023,
  title: '고정층 연소 시 공기 유량 및 산소 농도에 따른 SRF의 화염 전파 및 연소 특성에 대한 실험적 연구',
  authors: '김희윤, 조현빈, 박성민, 류창국, 김민수',
  journal: '2023 한국연소학회 추계학술대회, 2023.11.9-11, 제주도'
},
{
  id: 'kc-2023-4',
  year: 2023,
  title: '500 MWe급 접선연소식 석탄화력 보일러의 암모니아 혼소 최적화를 위한 전산해석 연구',
  authors: '구윤하, 하선교, 강우석, 조현빈, 백세현, 박경일, 류창국',
  journal: '2023 한국연소학회 추계학술대회, 2023.11.9-11, 제주도'
},
{
  id: 'kc-2023-5',
  year: 2023,
  title: '광석 원료처리용 로터리 킬른 내 미분탄 버너의 암모니아 혼소 적용 방안에 대한 전산해석 연구',
  authors: '강서영, 강우석, 류창국, 안형준, 서해원',
  journal: '2023 한국연소학회 추계학술대회, 2023.11.9-11, 제주도'
},
{
  id: 'kc-2023-6',
  year: 2023,
  title: 'Numerical analysis of a cylindrical UV-C LED reactor for efficient water disinfection',
  authors: '강서영, 배진승, 박성수, 김경준, 이정현, 윤철수, 류창국',
  journal: '2023 한국바이오칩학회 춘계학술대회, 2023.5.31-6.2, 여수'
},
{
  id: 'kc-2023-7',
  year: 2023,
  title: '전산해석을 통한 접선연소식 석탄화력 보일러의 암모니아 혼소 최적화 방안 연구',
  authors: '구윤하, 강우석, 하선교, 조현빈, 박상빈, 백세현, 류창국',
  journal: '2023 한국연소학회 춘계학술대회, 2023.05.11-12, 강릉'
},
{
  id: 'kc-2023-8',
  year: 2023,
  title: 'IGCC 석탄 가스화기의 산화제/미분탄 비율 변화에 따른 가스온도, 전열량, 슬래그 거동의 동적 특성 분석',
  authors: '박성민, 남준영, 류창국, 박지은, 이상원',
  journal: '2023 한국연소학회 춘계학술대회, 2023.05.11-12, 강릉'
},
{
  id: 'kc-2023-9',
  year: 2023,
  title: '탈질설비 제어 최적화를 위한 딥러닝 기반 SCR 출구 NOx, NH3 농도 선행 예측 모델',
  authors: '조현빈, 강동협, 박성민, 이종욱, 류창국',
  journal: '2023 한국연소학회 춘계학술대회, 2023.05.11-12, 강릉 (우수논문발표상(구두발표))'
},
{
  id: 'kc-2022-1',
  year: 2022,
  title: '미분탄-암모니아 혼소를 위한 전산해석모델 개발 및 최적 혼소 방안 연구',
  authors: '하선교, 강우석, 구윤하, 박종민, 조현빈, 류창국, 박상빈, 이종민, 백세현',
  journal: '2022 한국열환경공학회 추계학술대회, 2022.12.08-09, 제주 (우수논문발표상(구두발표))'
},
{
  id: 'kc-2022-2',
  year: 2022,
  title: '화력발전 보일러 출구 NOx 농도 선행 예측을 위한 딥러닝 모델',
  authors: '조현빈, 강동협, 박성민, 이종욱, 류창국',
  journal: '2022 한국열환경공학회 추계학술대회, 2022.12.08-09, 제주'
},
{
  id: 'kc-2022-3',
  year: 2022,
  title: '스월 버너에서 미분탄-암모니아 혼소시 혼소율에 따른 화염 및 NOx 배출 특성 해석',
  authors: '하선교, 박종민, 강우석, 조현빈, 류창국, 박상빈, 백세현, 이종민',
  journal: '2022 한국연소학회 추계학술대회, 2022.11.10-11, 부산'
},
{
  id: 'kc-2022-4',
  year: 2022,
  title: '미분탄-암모니아 혼소 전산해석을 위한 암모니아의 글로벌 연소 반응모델 개발',
  authors: '강우석, 박종민, 류창국',
  journal: '2022 한국연소학회 추계학술대회, 2022.11.10-11, 부산'
},
{
  id: 'kc-2022-5',
  year: 2022,
  title: '접선연소식 석탄화력 보일러에서 최적 암모니아 혼소 방안에 대한 전산해석 연구',
  authors: '구윤하, 박종민, 강우석, 조현빈, 박상빈, 백세현, 이종민, 류창국',
  journal: '2022 한국연소학회 추계학술대회, 2022.11.10-11, 부산'
},
{
  id: 'kc-2022-6',
  year: 2022,
  title: '딥러닝 기반 화력발전 보일러 출구 NOx 농도 선행 예측 모델',
  authors: '조현빈, 박성민, 이종욱, 류창국, 강동협',
  journal: '2022 한국연소학회 추계학술대회, 2022.11.10-11, 부산'
},
{
  id: 'kc-2022-7',
  year: 2022,
  title: '태안 IGCC 가스화기의 주요 운전인자별 가스화 성능 영향에 대한 수치해석 연구',
  authors: '남준영, 박성민, 류창국, 박정하, 이상원',
  journal: '2022 한국연소학회 추계학술대회, 2022.11.10-11, 부산'
},
{
  id: 'kc-2022-8',
  year: 2022,
  title: '반탄화 수율 기반 바이오매스 열분해 거동 예측 모델 개발',
  authors: '김희윤, 유승한, 류창국',
  journal: '2022 한국열환경공학회 춘계학술대회, 2022.6.16, 서울'
},
{
  id: 'kc-2022-9',
  year: 2022,
  title: '바이오매스 열분해 반응기 모델링을 통한 보일러 연계 바이오차 생산공정 설계인자 분석',
  authors: '유승한, 김희윤, 김민수, 박정극, 류창국',
  journal: '2022 한국열환경공학회 춘계학술대회, 2022.6.16, 서울'
},
{
  id: 'kc-2022-10',
  year: 2022,
  title: '석탄화력 보일러의 미분탄-암모니아 혼소 전산유체해석을 위한 암모니아의 글로벌 연소 메커니즘 개발',
  authors: '강우석, 박종민, 류창국',
  journal: '2022 한국열환경공학회 춘계학술대회, 2022.06.16, 서울 대한상공회의소'
},
{
  id: 'kc-2022-11',
  year: 2022,
  title: '파장가변형 레이저 흡수 분광법을 이용한 실시간 수소 농도 측정에 관한 연구',
  authors: '박지연, 정낙원, 주근희, 류창국, 이창엽, 김대해',
  journal: '2022 한국에너지기후변화학회 춘계학술대회, 2022.5.25-27, 부산 (우수논문발표상(구두발표))'
},
{
  id: 'kc-2022-12',
  year: 2022,
  title: '수증기-메탄 개질기 설계를 위한 촉매 튜브 형상별 열전달 및 반응 효율 영향 평가',
  authors: '구윤하, 강서영, 류창국',
  journal: '2022 한국에너지기후변화학회 춘계학술대회, 2022.5.25-27, 부산'
},
{
  id: 'kc-2022-13',
  year: 2022,
  title: '수소 생산을 위한 용융 촉매 기포 반응기 내 천연가스 열분해 및 기포 거동에 대한 수치해석 연구',
  authors: '박성민, 김무경, 구윤하, 강도형, 류창국',
  journal: '2022 한국에너지기후변화학회 춘계학술대회, 2022.5.25-27, 부산 (우수논문발표상(구두발표))'
},
{
  id: 'kc-2022-14',
  year: 2022,
  title: '바이오매스 열분해 기반 바이오차 생산공정의 설계 인자 분석',
  authors: '유승한, 김희윤, 김민수, 박정극, 류창국',
  journal: '2022 한국연소학회 춘계학술대회, 2022.5.19-21, 경주 (우수논문발표상(구두발표))'
},
{
  id: 'kc-2022-15',
  year: 2022,
  title: '미분탄-암모니아 혼소 전산해석을 위한 암모니아의 글로벌 연소 메커니즘 개발',
  authors: '강우석, 박종민, 류창국',
  journal: '2022 한국연소학회 춘계학술대회, 2022.5.19-21, 경주'
},
{
  id: 'kc-2022-16',
  year: 2022,
  title: '반탄화 수율에 따른 바이오매스 열분해 거동 예측 모델 개발',
  authors: '김희윤, 유승한, 류창국',
  journal: '2022 한국연소학회 춘계학술대회, 2022.5.19-21, 경주'
},
{
  id: 'kc-2022-17',
  year: 2022,
  title: '청정 수소 생산을 위한 용융촉매 기반 천연가스 열분해 기포 반응기의 전산해석',
  authors: '박성민, 김무경, 구윤하, 강도형, 류창국',
  journal: '2022 한국연소학회 춘계학술대회, 2022.5.19-21, 경주'
},
{
  id: 'kc-2021-1',
  year: 2021,
  title: '수소 생산을 위한 용융 촉매/염 기반 CH4 열분해 기포 반응기의 시뮬레이터 개발',
  authors: '박성민, 김무경, 구윤하, 류창국, 강도형',
  journal: '2021 한국열환경공학회 추계학술대회, 2021.12.16-17, 제주'
},
{
  id: 'kc-2021-2',
  year: 2021,
  title: '고정층 반응기 내 플라스틱 SRF 연소 시 우드펠릿 혼소에 따른 화염전파 특성 분석',
  authors: '박종근, 유승한, 김희윤, 류창국, 김종현, 이재하, 허준',
  journal: '2021 한국열환경공학회 추계학술대회, 2021.12.16-17, 제주'
},
{
  id: 'kc-2021-3',
  year: 2021,
  title: '컴팩트 천연가스-수증기 개질기 설계를 위한 촉매 튜브 형상별 열전달 및 반응 효율 영향 평가',
  authors: '구윤하, 김무경, 강서영 ,류창국',
  journal: '2021 한국열환경공학회 추계학술대회, 2021.12.16-17, 제주(우수논문상(구두발표))'
},
{
  id: 'kc-2021-4',
  year: 2021,
  title: '제강공정 래들 버너의 COG 대체를 위한 천연가스의 적정 연소 조건및 NOx 배출 영향에 대한 전산해석 연구',
  authors: '박종민, 강우석,김량균,임호,류창국',
  journal: '2021 한국연소학회 추계학술대회, 2021.11.11-13, 제주'
},
{
  id: 'kc-2021-5',
  year: 2021,
  title: '석탄화력 내 암모니아 혼소율에 따른 연소 및 NOx 발생 특성에 대한 전산해석 연구',
  authors: '강우석, 조현빈, 류창국',
  journal: '2021 한국연소학회 추계학술대회, 2021.11.11-13, 제주(최우수 논문상(구두발표))'
},
{
  id: 'kc-2021-6',
  year: 2021,
  title: '폐플라스틱 펠릿의 고정층 연소 시 우드펠릿 혼소율에 따른 화염전파 특성 연구',
  authors: '박종근,유승한, 김희윤, 류창국, 김종현, 이재하, 허준',
  journal: '2021 한국연소학회 추계학술대회, 2021.11.11-13, 제주'
},
{
  id: 'kc-2021-7',
  year: 2021,
  title: 'CFD 상용코드를 이용한 제철공정 소결층 3차원 해석 수행을 위한 모델링 방법론 개발',
  authors: '김무경, 김희윤, 류창국, 김량균, 임호, 이세원, 김세현',
  journal: '2021 한국연소학회 추계학술대회, 2021.11.11-13, 제주'
},
{
  id: 'kc-2021-8',
  year: 2021,
  title: '산업폐기물 소각로의 FGR에 따른 NOx 배출특성에 대한 전산해석 연구',
  authors: '박종근, 류창국, 이용운, 박진제, 이영재',
  journal: '2021 한국열환경공학회 춘계학술대회, 2021.06.10, 서울'
},
{
  id: 'kc-2021-9',
  year: 2021,
  title: 'CFD code를 이용한 제철공정 소결층 3차원 해석 기법 개발',
  authors: '김무경, 박종근, 김희윤, 류창국',
  journal: '2021 한국열환경공학회 춘계학술대회, 2021.06.10, 서울'
},
{
  id: 'kc-2021-10',
  year: 2021,
  title: '용융 촉매 기반 천연가스 열분해 기포 반응기의 수치해석 모델 개발',
  authors: '박성민, 김무경, 구윤하, 류창국, 강도형',
  journal: '2021 한국열환경공학회 춘계학술대회, 2021.06.10, 서울'
},
{
  id: 'kc-2021-11',
  year: 2021,
  title: '용융 촉매 기반 천연가스 열분해 반응기의 설계 및 성능 해석을 위한 수치해석 모델 개발',
  authors: '박성민, 김무경, 구윤하, 류창국, 강도형',
  journal: '2021 한국 수소 및 신에너지학회 춘계 학술대회, 2021.05.27-28, 대전'
},
{
  id: 'kc-2021-12',
  year: 2021,
  title: '제철공정 소결층의 3차원 CFD 해석을 위한 모델링 방법론 개발',
  authors: '김무경, 류창국',
  journal: '2021 한국연소학회 춘계학술대회, 2021.05.13-14, 온라인'
},
{
  id: 'kc-2021-13',
  year: 2021,
  title: '대향류 석탄화력 보일러의 NOx 저감을 위한 다단 OFA 및 CH4 lancing 성능 평가',
  authors: '강우석, 조현빈, 류창국, 이종욱',
  journal: '2021 한국연소학회 춘계학술대회, 2021.05.13-14, 온라인'
},
{
  id: 'kc-2020-1',
  year: 2020,
  title: '다양한 바이오매스의 반탄화 수율 변화에 따른 연료특성 분석',
  authors: '유승한, 김희윤, 류창국, 박진제',
  journal: '2020 한국열환경공학회 추계학술대회, 2020.12.10-11, 제주(우수 논문상 (구두발표))'
},
{
  id: 'kc-2020-2',
  year: 2020,
  title: 'CO 포함 습식 방산 배가스의 완전연소 조건파악을 위한 수치해석 연구',
  authors: '강우석, 조현빈, 류창국, 김태영, 조한창',
  journal: '2020 한국열환경공학회 추계학술대회, 2020.12.10-11, 제주'
},
{
  id: 'kc-2020-3',
  year: 2020,
  title: '제강공정 래들 내 COG 및 천연가스 연소에 따른 열전달 및 NOx 특성 전산 해석',
  authors: '박종민, 강우석, 류창국, 김량균, 임호',
  journal: '2020 한국열환경공학회 추계학술대회, 2020.12.10-11, 제주'
},
{
  id: 'kc-2020-4',
  year: 2020,
  title: '열중량 분석(TGA)를 통한 바이오매스 주요 성분비 및 열분해 반응 상수 예측 방법론',
  authors: '김희윤, 김민수, 류창국',
  journal: '2020 한국열환경공학회 추계학술대회, 2020.12.10-11, 제주'
},
{
  id: 'kc-2020-5',
  year: 2020,
  title: '500MWe 접선연소식 보일러의 좌우 유량 불균형에 따른 열유동 및 NOx 배출 특성 CFD 해석',
  authors: '조현빈, 박종근, 류창국, 홍준석',
  journal: '2020 한국열환경공학회 추계학술대회, 2020.12.10-11, 제주 (우수 논문상 (구두발표))'
},
{
  id: 'kc-2020-6',
  year: 2020,
  title: '다양한 바이오매스의 반탄화시 수율-연료품질 상관관계 분석',
  authors: '유승한, 박진제, 김희윤, 류창국',
  journal: '2020 한국연소학회 춘추계통합학술대회, 2020.9.24-26, 온라인'
},
{
  id: 'kc-2020-7',
  year: 2020,
  title: '열중량 분석을 통한 바이오매스 조성비 및 최적 열분해 반응상수 도출',
  authors: '김희윤, 김민수, 류창국',
  journal: '2020 한국연소학회 춘추계통합학술대회, 2020.9.24-26, 온라인'
},
{
  id: 'kc-2020-8',
  year: 2020,
  title: '전산유동해석을 이용한 500MWe 표준화력 보일러의 유량 불균형에 따른 연소 및 열전달 특성 분석',
  authors: '조현빈, 박종근, 홍준석, 류창국',
  journal: '2020 한국연소학회 춘추계통합학술대회, 2020.9.24-26, 온라인'
},
{
  id: 'kc-2020-9',
  year: 2020,
  title: 'CO 포함 방산 배가스의 연소효율 향상을 위한 수치해석 연구',
  authors: '강우석, 조현빈, 김태영, 조한창, 류창국',
  journal: '2020 한국연소학회 춘추계통합학술대회, 2020.9.24-26, 온라인'
},
{
  id: 'kc-2020-10',
  year: 2020,
  title: 'TDLAS 기법을 이용한 NO2 실시간 농도 측정',
  authors: '박지연, 유미연, 박대근, 류창국, 이창엽, 김대해',
  journal: '2020 한국연소학회 춘추계통합학술대회, 2020.9.24-26, 온라인'
},
{
  id: 'kc-2020-11',
  year: 2020,
  title: '목질계 바이오매스의 열화학적 변환 고체 생성물 특성에 대한 실증적 상관관계 규명',
  authors: '박진제, 유승한, 김동희, 이영제, 류창국',
  journal: '2020 한국연소학회 춘추계통합학술대회, 2020.9.24-26, 온라인'
},
{
  id: 'kc-2019-1',
  year: 2019,
  title: '바이오매스 건조 및 열분해에 대한 단입자 수치해석 모델 개발',
  authors: '김희윤, 김민수, 류창국',
  journal: '2019 한국열환경공학회 추계학술대회, 2019.11.28-29, 제주'
},
{
  id: 'kc-2019-2',
  year: 2019,
  title: '상용급 대향류 석탄화력 보일러의 NOx 배출 저감을 위한 연소특성 CFD 해석 연구',
  authors: '이지석, 조현빈, 류창국, 장계환',
  journal: '2019 한국열환경공학회 추계학술대회, 2019.11.28-29, 제주'
},
{
  id: 'kc-2019-3',
  year: 2019,
  title: '편백나무의 반응 조건별 저속 열분해 생성물 특성 분석 연구 (포스터)',
  authors: '유승한, 박진제, 김민수, 류창국, 박정극',
  journal: '2019 한국열환경공학회 추계학술대회, 2019.11.28-29, 제주'
},
{
  id: 'kc-2019-4',
  year: 2019,
  title: '태안 300MW IGCC 석탄 가스화기의 운전 부하별 유동 및 반응 특성에 대한 전산해석 연구 (포스터)',
  authors: '김무경, 남준영, 손근, 김봉근, 류창국',
  journal: '2019 한국열환경공학회 추계학술대회, 2019.11.28-29, 제주'
},
{
  id: 'kc-2019-5',
  year: 2019,
  title: 'CFD를 이용한 100 kW급 석탄 가압순산소 버너의 설계 개념 개발',
  authors: '박종근, 류창국, 이영재, 양원',
  journal: '2019 한국열환경공학회 추계학술대회, 2019.11.28-29, 제주'
},
{
  id: 'kc-2019-6',
  year: 2019,
  title: '바이오매스 10종의 500℃ 저속 열분해 바이오차 특성 비교에 대한 실험적 연구 (포스터)',
  authors: '박진제, 유승한, 김민수, 류창국, 박정극 2019 한국열환경공학회 추계학술대회',
  journal: '2019.11.28-29, 제주'
},
{
  id: 'kc-2019-7',
  year: 2019,
  title: '595MWe급 대향류 석탄화력 보일러의 공기다단공급에 따른 연소 및 NOx 발생 특성 해석',
  authors: '이지석, 조현빈, 류창국, 장계환',
  journal: '2019 한국연소학회 추계학술대회, 2019.11.14-16, 제주'
},
{
  id: 'kc-2019-8',
  year: 2019,
  title: '석탄가스화기 내 버너 이상거동에 따른 유동 및 반응특성에 대한 전산해석 연구',
  authors: '남준영, 김무경, 손근, 류창국, 김봉근',
  journal: '2019 한국연소학회 추계학술대회, 2019.11.14-16, 제주'
},
{
  id: 'kc-2019-9',
  year: 2019,
  title: '단입자 바이오매스 열분해 수치해석 모델 및 열분해 영향 인자 평가',
  authors: '김희윤, 김민수, 류창국',
  journal: '2019 한국연소학회 추계학술대회, 2019.11.14-16, 제주'
},
{
  id: 'kc-2019-10',
  year: 2019,
  title: '125MWe 대향류식 우드펠릿 보일러의 미연탄소 저감을 위한 CFD 해석 연구',
  authors: '이지석, 유승한, 류창국',
  journal: '2019 한국열환경공학회 춘계학술대회, 2019.6.20-21, 천안 (우수 논문 발표상)'
},
{
  id: 'kc-2019-11',
  year: 2019,
  title: '300MW IGCC 석탄 가스화기 내 합성가스 및 슬래그 층의 동적해석 모델 개발',
  authors: '김무경, 김봉근, 예인수, 류창국',
  journal: '2019 한국열환경공학회 춘계학술대회, 2019.6.20, 천안 (우수 논문 발표상)'
},
{
  id: 'kc-2019-12',
  year: 2019,
  title: '고정층 반응기를 이용한 우드펠릿 반탄화 특성에 관한 연구',
  authors: '유승한, 박진제, 김민수, 류창국',
  journal: '2019 한국열환경공학회 춘계학술대회, 2019.6.20, 천안'
},
{
  id: 'kc-2019-13',
  year: 2019,
  title: 'A study on the geometrical design of a PC boiler based on Distributed Pressurized Oxy-Combustion concept',
  authors: 'Hamed Jafari, Won Yang*, Changkook Ryu',
  journal: '2019 한국연소학회 춘계학술대회, 2019.5.16-18, 삼척'
},
{
  id: 'kc-2019-14',
  year: 2019,
  title: 'QC-TDLAS 기법을 이용한 연소 배기가스 유래 SO3 농도 측정에 관한 연구',
  authors: '박지연, 소성현, 유미연, 정낙원, 송아란, 박대근, 류창국, 이창엽',
  journal: '2019 한국연소학회 춘계학술대회, 2019.5.16-18, 삼척'
},
{
  id: 'kc-2019-15',
  year: 2019,
  title: '열중량 분석(TGA)을 통한 바이오매스 주 성분 조성비 예측 알고리즘 연구',
  authors: '김희윤, 김민수, 류창국',
  journal: '2019 한국연소학회 춘계학술대회, 2019.5.16-18, 삼척'
},
{
  id: 'kc-2019-16',
  year: 2019,
  title: '120MWe 우드펠릿 보일러의 공기배분에 따른 NOx 및 미연탄소 저감 특성의 CFD 해석 연구',
  authors: '이지석, 유승한, 류창국',
  journal: '2019 한국연소학회 춘계학술대회, 2019.5.16-18, 삼척'
},
{
  id: 'kc-2019-17',
  year: 2019,
  title: '500MWe 접선연소식 석탄 보일러의 NOx 저감을 위한 SOFA 최적화 연구',
  authors: '조현빈, 강기섭, 박종근, 류창국, 안현수, 고영건',
  journal: '2019 한국연소학회 춘계학술대회, 2019.5.16-18, 삼척'
},
{
  id: 'kc-2019-18',
  year: 2019,
  title: '슬래깅 조건 태안 석탄 가스화기 동적모델 개발',
  authors: '김무경, 예인수, 류창국, 김봉근',
  journal: '2019 한국청정기술학회 춘계학술대회, 2019.4.27-29, 경주'
},
{
  id: 'kc-2019-19',
  year: 2019,
  title: 'Drop tube furnace (DTF) 내 회분 부착실험 대상 슬래깅 모델 평가',
  authors: '강기섭, 조현빈, 박종근, 류창국',
  journal: '2019 한국청정기술학회 춘계학술대회, 2019.3.27-29, 경주'
},
{
  id: 'kc-2018-1',
  year: 2018,
  title: '가압 가스화기 기동용 디젤-O2 버너의 확산화염 연소 특성 분석',
  authors: '박종근, 류창국, 이성호, 정우현',
  journal: '2018 한국연소학회 추계학술대회, 2018.11.22-24, 제주'
},
{
  id: 'kc-2018-2',
  year: 2018,
  title: '슬래그 층 해석을 고려한 태안 석탄 가스화기 동적 모델 개발',
  authors: '김무경, 예인수, 류창국, 김봉근',
  journal: '2018 한국연소학회 추계학술대회, 2018.11.22-24, 제주'
},
{
  id: 'kc-2018-3',
  year: 2018,
  title: '가압연소로 내부 대류열전달 특성 연구',
  authors: '안성민, 임호, 채태영, 양원, 류창국',
  journal: '2018 한국연소학회 추계학술대회, 2018.11.22-24, 제주'
},
{
  id: 'kc-2018-4',
  year: 2018,
  title: '500MWe 표준석탄화력 보일러 CFD 해석의 격자 민감도 상세 분석',
  authors: '조현빈, 강기섭, 류창국, 안현수, 고영건',
  journal: '2018 한국연소학회 추계학술대회, 2018.11.22-24, 제주'
},
{
  id: 'kc-2018-5',
  year: 2018,
  title: '열중량 분석을 통한 바이오매스 주 성분 조성 예측 및 열분해 모델링',
  authors: '김희윤, 김민수, 류창국',
  journal: '2018 한국연소학회 추계학술대회, 2018.11.22-24, 제주'
},
{
  id: 'kc-2018-6',
  year: 2018,
  title: '120 MWe 우드펠릿 전소 보일러의 미분도에 따른 미연탄소 및 NOx 배출 특성 CFD 해석',
  authors: '유승한, 박진제, 김민수, 이지석, 류창국',
  journal: '2018 한국연소학회 추계학술대회, 2018.11.22-24, 제주'
},
{
  id: 'kc-2018-7',
  year: 2018,
  title: '가압 순산소 연소 공정의 간접접촉식 응축기를 통한 배가스 내 NOx 저감 연구',
  authors: '최솔비, 목진성, 양원, 류창국, 최석천',
  journal: '2018 한국연소학회 추계학술대회, 2018.11.22-24, 제주'
},
{
  id: 'kc-2018-8',
  year: 2018,
  title: '단입자 바이오매스 펠릿의 연소과정 상세 분석',
  authors: '박혜민, 김혜수, 목진성, 류창국, 최석천',
  journal: '2018 한국연소학회 추계학술대회, 2018.11.22-24, 제주'
},
{
  id: 'kc-2018-9',
  year: 2018,
  title: '황산암모늄을 이용한 슈퍼히터의 고온부식 방지에 관한 연구',
  authors: '김범종, 이정우, 류창국, 이은도',
  journal: '2018 한국연소학회 춘계학술대회, 2018.5.10-12, 전주'
},
{
  id: 'kc-2018-10',
  year: 2018,
  title: '반응조건에 따른 우드펠릿 반탄화 특성 변화 연구',
  authors: '유승한, 박진제, 류창국',
  journal: '2018 한국연소학회 춘계학술대회, 2018.5.10-12, 전주'
},
{
  id: 'kc-2018-11',
  year: 2018,
  title: '동적 분류층 석탄 가스화기 공정모델 연구',
  authors: '김무경, 예인수, 류창국',
  journal: '2018 한국연소학회 춘계학술대회, 2018.5.10-12, 전주'
},
{
  id: 'kc-2018-12',
  year: 2018,
  title: '가압 순산소 연소시스템의 보일러설계를 위한 대류열전달 특성 연구',
  authors: '안성민, 임호, 채태영, 양원, 류창국',
  journal: '2018 한국연소학회 춘계학술대회, 2018.5.10-12, 전주'
},
{
  id: 'kc-2018-13',
  year: 2018,
  title: '슬래그 거동을 고려한 석탄 분류층 가스화기 수치해석 모델링',
  authors: '김무경, 예인수, 류창국',
  journal: '2018 한국화학공학회 춘계학술대회, 2018.4.25-27, 창원'
},
{
  id: 'kc-2018-14',
  year: 2018,
  title: '슬래그 거동을 포함한 Shell 석탄 가스화기의 동적 공정모델 개발',
  authors: '김무경, 예인수, 류창국',
  journal: '2018 한국신재생에너지학회 춘계학술대회, 2018.4.19-20, 서울'
},
{
  id: 'kc-2017-1',
  year: 2017,
  title: 'CPT(Cross point temperature) 분석을 통한 건조 석탄의 자연발화 특성 연구',
  authors: '안성민, 채태영, 이용운, 이재욱, 양원, 류창국, 나익환, 김낙균',
  journal: '2017 한국연소학회 추계학술대회, 2017.11.9-11, 여수'
},
{
  id: 'kc-2017-2',
  year: 2017,
  title: 'PDTF를 활용한 석탄 촤 반응상수의 도출 방법 연구',
  authors: '손근, 예인수, 류창국, 라호원,윤성민',
  journal: '2017 한국연소학회 추계학술대회, 2017.11.9-11, 여수'
},
{
  id: 'kc-2017-3',
  year: 2017,
  title: '가열방식에 따른 바이오매스 저속 열분해 특성 변화 연구',
  authors: '유승한, 박진제, 류창국, 박정극',
  journal: '2017 한국연소학회 추계학술대회, 2017.11.9-11, 여수'
},
{
  id: 'kc-2017-4',
  year: 2017,
  title: '바이오차 생산을 위한 바이오매스 저속열분해 특성 분석',
  authors: '박진제, 김민수, 유승한, 류창국, 박정극',
  journal: '2017 K-CIPEC, 2017.9.22, 서울'
},
{
  id: 'kc-2017-5',
  year: 2017,
  title: 'CFD Evaluation of Ash Slagging Tendency in tangential-firing coal boilers(포스터)',
  authors: '강기섭, 박종근, 정영갑, 류창국',
  journal: '2017 K-CIPEC, 2017.9.22, 서울'
},
{
  id: 'kc-2017-6',
  year: 2017,
  title: '50T/D 폐기물 소각장의 부식 방지 : Ammonium sulfate 첨가제에 따른 영향',
  authors: '김범종, 이정우, 송재헌, 류창국, 이은도',
  journal: '2017 한국청정기술학회 추계학술대회, 2017.9.20-22, 여수'
},
{
  id: 'kc-2017-7',
  year: 2017,
  title: '염화알칼리에 의한 보일러튜브 재질의 고온부식도 분석(포스터)',
  authors: '김범종, 김혜수, 류창국, 이은도',
  journal: '2017 한국청정기술학회 추계학술대회, 2017.9.20-22, 여수'
},
{
  id: 'kc-2017-8',
  year: 2017,
  title: 'PDTF를 활용한 석탄 촤 가스화 반응 속도 상수 연구',
  authors: '손근, 예인수, 라호원, 윤성민, 류창국',
  journal: '2017 한국신재생에너지학회 추계학술대회, 2017.9.6-7, 대전 (우수 논문 발표상)'
},
{
  id: 'kc-2017-9',
  year: 2017,
  title: '배가스에 의한 바이오매스 열분해 시 생성물 특성 분석',
  authors: '박진제, 김민수, 유승한, 류창국, 박정극',
  journal: '2017 한국연소학회 춘계학술대회, 2017.5.18-20, 강릉'
},
{
  id: 'kc-2017-10',
  year: 2017,
  title: '접선연소식 석탄화력 보일러의 연료 투입위치별 슬래깅 경향성 CFD 해석',
  authors: '강기섭, 박종근, 정영갑, 류창국',
  journal: '2017 한국연소학회 춘계학술대회, 2017.5.18-20, 강릉'
},
{
  id: 'kc-2017-11',
  year: 2017,
  title: '80kW 미분탄 연소시스템을 이용한 ash deposition 특성 연구',
  authors: '강별, 채태영, 이재욱, 이용운, 류창국, 양원',
  journal: '2017 한국연소학회 춘계학술대회, 2017.5.18-20, 강릉'
},
{
  id: 'kc-2017-12',
  year: 2017,
  title: '가압 DTF에서 석탄 촤의 CO2, H2O에 의한 반응 특성 분석',
  authors: '손근, 예인수, 라호원, 윤성민, 류창국',
  journal: '2017 한국신재생에너지학회 춘계학술대회, 2017.5.15-27, 제주'
},
{
  id: 'kc-2017-13',
  year: 2017,
  title: '고온부식 방지를 위한 Ammonium sulfate의 성능 평가',
  authors: '김범종, 김혜수, 류창국, 이은도',
  journal: '2017 한국청정기술학회 춘계학술대회, 2017.3.29-31, 부산'
},
{
  id: 'kc-2016-1',
  year: 2016,
  title: '고압 가스화 조건에서 CO2, H2O에 의한 석탄 촤의 반응 상수 도출 연구',
  authors: '손근, 예인수, 류창국, 라호원, 윤성민',
  journal: '2016 한국연소학회 추계학술대회, 2016.11.24-26, 제주'
},
{
  id: 'kc-2016-2',
  year: 2016,
  title: '10 ton/day 석탄 슬러리 가스화기에서 촤 전환 모델 CFD 평가',
  authors: '도윤영, 예인수, 류창국, 라호원',
  journal: '2016 한국연소학회 추계학술대회, 2016.11.24-26, 제주'
},
{
  id: 'kc-2016-3',
  year: 2016,
  title: '접선연소식 보일러에서 미분탄 연소 시 공기 배분의 영향에 대한 전산해석연구',
  authors: '강기섭, 류창국',
  journal: '2016 한국연소학회 추계학술대회, 2016.11.24-26, 제주'
},
{
  id: 'kc-2016-4',
  year: 2016,
  title: '고온부식 방지를 위한 sulfate계 첨가제의 기초특성 연구',
  authors: '김범종, 김용준, 이정우, 송재헌, 류창국, 이은도',
  journal: '2016 한국신재생에너지학회 추계학술대회, 2016.11.2-4, 광주'
},
{
  id: 'kc-2016-5',
  year: 2016,
  title: '염화알칼리에 대한 sulfate계 첨가제의 반응특성',
  authors: '김범종, 김용준, 이정우, 송재헌, 류창국, 이은도',
  journal: '2016 한국화학공학회 추계학술대회, 2016.11.25-26, 제주'
},
{
  id: 'kc-2016-6',
  year: 2016,
  title: '바이오매스 분쇄실험을 통한 비교 분석 연구',
  authors: '강별, 양원, 채태영, 이용운, 이재욱, 박우용, 류창국',
  journal: '2016 한국화학공학회 추계학술대회, 2016.11.25-26, 제주'
},
{
  id: 'kc-2016-7',
  year: 2016,
  title: '분류층 석탄 가스화기 내부 슬래그거동 비정상 해석 모델링',
  authors: '김무경, 예인수, 류창국, 제9회 한국유체공학학술대회',
  journal: '2016.08.10-12, 대구'
},
{
  id: 'kc-2016-8',
  year: 2016,
  title: '보일러 superheater의 고온부식 방지를 위한 sulfate계 첨가제 특성에 관한 연구(포스터)',
  authors: '김범종, 류창국, 이정우, 송재헌, 이은도',
  journal: '2016 한국연소학회 춘계학술대회, 2016.05.12-14, 부여 (우수포스터상)'
},
{
  id: 'kc-2016-9',
  year: 2016,
  title: '10 ton/day 석탄슬러리 가스화기 유동 및 반응 특성 연구',
  authors: '도윤영, 예인수, 류창국, 라호원',
  journal: '2016 한국연소학회 춘계학술대회, 2016.05.12-14, 부여'
},
{
  id: 'kc-2016-10',
  year: 2016,
  title: '분류층 석탄 가스화기 내부 슬래그거동 비정상 해석 모델링',
  authors: '김무경, 예인수, 류창국',
  journal: '2016 한국연소학회 춘계학술대회, 2016.05.12-14, 부여'
},
{
  id: 'kc-2016-11',
  year: 2016,
  title: '바이오매스 분쇄실험을 통한 비교 분석 연구',
  authors: '강별, 채태영, 양원, 이용운, 류창국',
  journal: '2016 한국연소학회 춘계학술대회, 2016.05.12-14, 부여'
},
{
  id: 'kc-2016-12',
  year: 2016,
  title: '실험실규모 미분기를 활용한 바이오매스의 분쇄특성 연구',
  authors: '강별, 이용운, 류창국, 양원',
  journal: '2016 한국청정기술학회 춘계학술대회, 2016.03.23-25, 제주'
},
{
  id: 'kc-2015-1',
  year: 2015,
  title: '500MWe급 접선 연소 보일러 해석시 난류 혼합 속도 및 석탄 연소 모델의 영향 평가',
  authors: '양주향, 강기섭, 류창국',
  journal: '2015 한국연소학회 추계학술대회, 2015.12.10-12, 제주'
},
{
  id: 'kc-2015-2',
  year: 2015,
  title: '분류층 가스화기 벽면의 슬래그거동에 대한 비정상해석 모델 개발',
  authors: '김무경, 예인수, 류창국',
  journal: '2015 한국연소학회 추계학술대회, 2015.12.10-12, 제주'
},
{
  id: 'kc-2015-3',
  year: 2015,
  title: '200 t/d급 MHI 석탄 가스화기의 석탄 및 공기 배분에 따른 가스화 특성 평가',
  authors: '도윤영, 예인수, 김봉근, 류창국',
  journal: '2015 한국연소학회 추계학술대회, 2015.12.10-12, 제주'
},
{
  id: 'kc-2015-4',
  year: 2015,
  title: '폐타이어 열분해 생성물을 이용한 고온부식 저감에 대한 연구(포스터)',
  authors: '김범종, 양창원, 류창국, 이은도',
  journal: '2015 한국화학공학회 가을 학술대회, 2015.10.21-23, 일산'
},
{
  id: 'kc-2015-5',
  year: 2015,
  title: '상용 보일러에서 미분탄 바이오매스 혼소 시 연료 단계 연소를 통한 NOx 저감 특성 연구',
  authors: '강기섭, 오준호, 양주향, 양원, 류창국',
  journal: '2015 K-CIPEC, 2015.09.04, 서울 강남, (우수 발표 논문상)'
},
{
  id: 'kc-2015-6',
  year: 2015,
  title: '공기희박조건에서 건조하수슬러지의 고정층 연소특성',
  authors: '김민수, 이용운, 박진제, 엄태인, 류창국',
  journal: '2015 K-CIPEC, 2015.09.04, 서울 강남'
},
{
  id: 'kc-2015-7',
  year: 2015,
  title: '폐타이어 열분해 플랜트의 열전달 효율 향상을 위한 연구',
  authors: '이용운, 박상빈, 박현주, 류창국',
  journal: '2015 K-CIPEC, 2015.09.04, 서울 강남'
},
{
  id: 'kc-2015-8',
  year: 2015,
  title: '상용 미분탄 보일러에서 바이오매스 혼소 시 연료 단계 연소를 통한 NOx 저감 특성 연구',
  authors: '강기섭, 오준호, 양주향, 양원, 류창국',
  journal: '2015 한국에너지기후변화학회 춘계학술대회, 2015.06.03, 서울 강남, (우수 발표 논문상)'
},
{
  id: 'kc-2015-9',
  year: 2015,
  title: '상용 보일러 내 중유 및 바이오중유 연소 및 열전달 특성 비교 연구',
  authors: '박종근, 박상빈, 김무경, 류창국, 백세현, 김영주, 박호영',
  journal: '2015 한국에너지기후변화학회 춘계학술대회, 2015.06.03, 서울 강남'
},
{
  id: 'kc-2015-10',
  year: 2015,
  title: '미분탄 바이오매스 혼소 시 연료 단계 연소를 통한 NOx 저감 특성 연구',
  authors: '강기섭, 오준호, 양주향, 양원, 류창국',
  journal: '2015 한국연소학회 춘계학술대회, 2015.05.21-23, 순천'
},
{
  id: 'kc-2015-11',
  year: 2015,
  title: '100 MWe급 중유보일러의 바이오중유 전소시 연소 및 열전달 특성',
  authors: '박종근, 박상빈, 김무경, 류창국, 백세현, 김영주, 박호영',
  journal: '2015 한국연소학회 춘계학술대회, 2015.05.21-23, 순천'
},
{
  id: 'kc-2015-12',
  year: 2015,
  title: '분류층 석탄 가스화기 내 임계점도온도의 변화에 따른 슬래그 층의 영향 연구',
  authors: '예인수, 류창국',
  journal: '2015 한국연소학회 춘계학술대회, 2015.05.21-23, 순천'
},
{
  id: 'kc-2014-1',
  year: 2014,
  title: '석탄 가스화기 회분의 임계점온도 및 플럭스 비율 변화에 따른 벽면 슬래그 거동 분석 특성',
  authors: '예인수, 류창국, 김봉근',
  journal: '2014 한국연소학회 추계학술대회, 2014.11.27-29, 제주'
},
{
  id: 'kc-2014-2',
  year: 2014,
  title: '바이오매스 가스화시 촤 입자의 종류 및 반응시간에 따른 일차타르의 분해 특성',
  authors: '박진제, 이용운, 류창국',
  journal: '2014 한국연소학회 추계학술대회, 2014.11.27-29, 제주'
},
{
  id: 'kc-2014-3',
  year: 2014,
  title: '상용 미분탄 보일러 연소해석에서 석탄 탈휘발 모델 및 난류반응 속도의 영향 평가',
  authors: '양주향, 김정은, 류창국',
  journal: '2014 한국연소학회 추계학술대회, 2014.11.27-29, 제주'
},
{
  id: 'kc-2014-4',
  year: 2014,
  title: '건조 하수 슬러지의 열분해 및 고정층 연소 특성 연구',
  authors: '김민수, 이용운, 박진제, 류창국',
  journal: '2014 한국연소학회 추계학술대회, 2014.11.27-29, 제주'
},
{
  id: 'kc-2014-5',
  year: 2014,
  title: '바이오매스의 가스화시 촤 입자 종류 및 반응시간에 따른 타르의 분해 특성 연구',
  authors: '박진제, 이용운, 류창국',
  journal: '2014 한국폐기물자원순환학회 추계학술연구발표회, 2014.11.13-15, 인천 (우수 발표 논문상)'
},
{
  id: 'kc-2014-6',
  year: 2014,
  title: '건조/고형화 하수슬러지의 열분해 및 연소특성 연구',
  authors: '김민수, 이용운, 박진제, 류창국',
  journal: '2014 한국폐기물자원순환학회 추계학술연구발표회, 2014.11.13-15, 인천'
},
{
  id: 'kc-2014-7',
  year: 2014,
  title: '석탄 가스화기 내 슬래그 거동에 대한 인자별 영향 평가',
  authors: '예인수, 류창국, 김봉근',
  journal: '2014 한국에너지기후변화학회 춘계학술대회, 2014.6.3, 서울 강남'
},
{
  id: 'kc-2014-8',
  year: 2014,
  title: '고정층 반응기 내 바이오매스의 연소 해석에 대한 반응 및 복사 모델 연구(포스터)',
  authors: '김민수, 류창국',
  journal: '2014 한국에너지기후변화학회 춘계학술대회, 2014.6.3, 서울 강남 (우수 발표 포스터상)'
},
{
  id: 'kc-2014-9',
  year: 2014,
  title: '500 MWe급 석탄화력 보일러 내 바이오매스 혼소 특성에 대한 수치적 연구',
  authors: '오준호, 양주향, 강기섭, 류창국',
  journal: '2014 한국연소학회 춘계학술대회, 2014.5.22-24, 횡성'
},
{
  id: 'kc-2014-10',
  year: 2014,
  title: '분류층 석탄 가스화기 내벽의 슬래그 거동 예측 모델에 대한 고찰',
  authors: '예인수, 류창국, 김봉근',
  journal: '2014 한국연소학회 춘계학술대회, 2014.5.22-24, 횡성'
},
{
  id: 'kc-2014-11',
  year: 2014,
  title: '바이오매스 가스화시 촤 입자에 의한 타르 분해반응에 대한 실험적 연구',
  authors: '박진제, 이용운, 류창국',
  journal: '2014 한국연소학회 춘계학술대회, 2014.5.22-24, 횡성'
},
{
  id: 'kc-2014-12',
  year: 2014,
  title: '바이오매스의 고정층 연소 해석 시 반응속도 및 복사열 전달 모델의 영향 평가',
  authors: '김민수, 류창국',
  journal: '2014 한국연소학회 춘계학술대회, 2014.5.22-24, 횡성'
},
{
  id: 'kc-2014-13',
  year: 2014,
  title: '경량골재 로타리킬른의 운전최적화를 위한 석탄연소 및 원료입자 승온특성 해석',
  authors: '박종근, 류창국, 김영주',
  journal: '2014 한국연소학회 춘계학술대회, 2014.5.22-24, 횡성'
},
{
  id: 'kc-2014-14',
  year: 2014,
  title: '바이오매스 가스화시 생성된 일차타르의 고온 분해와 촤 촉매 효과 규명',
  authors: '이용운, 박진제, 류창국',
  journal: '2014 한국폐기물자원순환학회 춘계학술연구발표회, 2014.5.15-17, 동의대학교'
},
{
  id: 'kc-2013-1',
  year: 2013,
  title: '나선 코일형 IGCC 합성가스 냉각 시스템에 대한 수치해석적 연구',
  authors: '오준호, 예인수, 박상빈, 류창국, 박성구, 김봉근',
  journal: '2013 한국연소학회 추계학술대회, 2013.12.16-17, 부산'
},
{
  id: 'kc-2013-2',
  year: 2013,
  title: '60kW 연소 시스템에서 합성가스 재연소 특성연구',
  authors: '채태영, 이재욱, 조가람, 류창국, 강기섭, 양원',
  journal: '2013 한국연소학회 추계학술대회, 2013.12.16-17, 부산'
},
{
  id: 'kc-2013-3',
  year: 2013,
  title: '석탄 가스화기 내벽의 슬래그 유동 해석 및 열전달 모델링',
  authors: '예인수, 류창국, 김봉근',
  journal: '2013 한국연소학회 추계학술대회, 2013.12.16-17, 부산'
},
{
  id: 'kc-2013-4',
  year: 2013,
  title: '다양한 석탄 입자의 응집특성에 대한 실험적 분석',
  authors: '김민수, 이용운, 송규선, 류창국, 박호영, 임현수',
  journal: '2013 한국에너지공학학회 추계학술발표회, 2013.11.21-22, 제주'
},
{
  id: 'kc-2013-5',
  year: 2013,
  title: '다양한 석탄의 자체발열 특성에 대한 실험적 분석',
  authors: '김정수, 이용운, 류창국, 박호영, 임현수',
  journal: '2013 한국에너지공학학회 추계학술발표회, 2013.11.21-22, 제주 (우수논문상)'
},
{
  id: 'kc-2013-6',
  year: 2013,
  title: '인도네시아 볏짚의 저속 열분해 특성 분석',
  authors: '이용운, 박진제, 류창국, 강기섭, 양원, 정진호, 현승훈',
  journal: '2013 한국폐기물자원순환학회 30주년 기념 학술대회, 2013.11.11-14, 제주'
},
{
  id: 'kc-2013-7',
  year: 2013,
  title: 'IGCC 합성가스 급속 냉각시스템의 운전 압력에 따른 열유동 및 입자 거동 특성 연구',
  authors: '박상빈, 양주향, 오준호, 예인수, 류창국, 박성구',
  journal: '2013 한국수소 및 신에너지학회 추계학술대회, 2013.11.7-8, 구미'
},
{
  id: 'kc-2013-8',
  year: 2013,
  title: '석탄 가스화기 내 벽면 슬래그 거동 모델 개발 (포스터)',
  authors: '예인수, 류창국, 김봉근',
  journal: '2013 한국수소 및 신에너지학회 추계학술대회, 2013.11.7-8, 구미'
},
{
  id: 'kc-2013-9',
  year: 2013,
  title: 'IGCC 합성가스 냉각 시스템의 열전달 특성 연구',
  authors: '오준호, 예인수, 박상빈, 류창국, 박성구',
  journal: '2013 한국연소학회 춘계학술대회, 2013.06.21-22, 인천'
},
{
  id: 'kc-2013-10',
  year: 2013,
  title: '다양한 탄종별 자체발열 특성과 물성의 비교 분석',
  authors: '김정수, 이용운, 임현수, 박호영, 류창국,',
  journal: '2013 한국연소학회 춘계학술대회, 2013.06.21-22, 인천'
},
{
  id: 'kc-2013-11',
  year: 2013,
  title: '저속열분해를 통한 바이오매스 부산물의 바이오촤 특성 비교 분석',
  authors: '박진제, 이용운, 강기섭, 류창국, 양원, 정진호,현승훈',
  journal: '2013 한국연소학회 춘계학술대회, 2013.06.21-22, 인천'
},
{
  id: 'kc-2013-12',
  year: 2013,
  title: '인도네시아 바이오매스 부산물의 저속 열분해 특성 분석',
  authors: '강기섭, 이용운, 박진제, 류창국, 채태영, 양원',
  journal: '2013 한국신재생 에너지학회 춘계학술대회, 2013.05.30, 여수'
},
{
  id: 'kc-2013-13',
  year: 2013,
  title: 'IGCC 합성가스 급속 냉각 시스템의 열유동 및 열전달 특성 연구',
  authors: '예인수, 박상빈, 오준호, 류창국, 박성구',
  journal: '2013 한국 수소 및 신에너지학회 춘계학술대회, 2013.05.10, 전주'
},
{
  id: 'kc-2013-14',
  year: 2013,
  title: '바이오매스 부산물의 열분해 바이오촤 특성 비교 분석',
  authors: '이용운, 박진제, 강기섭, 류창국, 양원, 정진호,현승훈 2013 한국 폐자원 순환학회 춘계학술대회',
  journal: '2013.05.10, 단양'
},
{
  id: 'kc-2013-15',
  year: 2013,
  title: '인도네시아 바이오매스 부산물의 저속 열분해 특성 분석',
  authors: '강기섭, 이용운,박진제, 류창국, 양원, 정진호,현승훈 2013 한국 폐자원 순환학회 춘계학술대회',
  journal: '2013.05.10, 단양'
},
{
  id: 'kc-2013-16',
  year: 2013,
  title: 'Numerical Simulations on Oxy-fuel Combustion in a 100MWe Retrofit Boiler',
  authors: '김정은, 박상현, 류창국 김영주 김혁필, Korea CCS',
  journal: '2013.03.14, 제주'
},
{
  id: 'kc-2012-1',
  year: 2012,
  title: '50KW 미분탄 연소 시스템에서 탄종별 슬래깅 및 파울링 특성 연구',
  authors: '강기섭,이재욱,채태영,류창국,양원',
  journal: '2012 한국연소학회 추계학술대회, 2012.11.30-12.01, 포항'
},
{
  id: 'kc-2012-2',
  year: 2012,
  title: 'IGCC 합성가스 냉각기 상부의 열유동 및 입자거동 특성에 대한 전산해석연구',
  authors: '박상빈,예인수,류창국,김봉근',
  journal: '2012 한국연소학회 추계학술대회, 2012.11.30-12.01, 포항'
},
{
  id: 'kc-2012-3',
  year: 2012,
  title: '100MWe급 석탄 순산소 연소 보일러의 탄종별연소 특성에 대한 전산해석연구',
  authors: '김정은,박상현,김영주,김혁필,류창국',
  journal: '2012 한국연소학회 추계학술대회, 2012.11.30-12.01, 포항'
},
{
  id: 'kc-2012-4',
  year: 2012,
  title: '100MWe급 석탄 순산소 연소 보일러에서의 연소 및  열전달 특성에 대한 전산해석 연구',
  authors: '류창국,김정은,박상현,양원,채태영,김영주,박호영,임희천 2012 한국에너지기후변화학회 추계학술대회',
  journal: '2012.11.22 부산대학교  (우수논문상)'
},
{
  id: 'kc-2012-5',
  year: 2012,
  title: '100MWe급 석탄 순산소 연소 보일러에서의 연소 및  열전달 특성에 대한 전산해석 연구 (포스터)',
  authors: '박상현,김정은,류창국,채태영,양원,김영주,박호영,임희천',
  journal: '2012 한국수소 및 신에너지학회 추계학술대회, 2012.11.15 구미  (우수논문상)'
},
{
  id: 'kc-2012-6',
  year: 2012,
  title: '분류층 석탄 가스화기 내 반응 및 열전달에 대한 전산해석 연구 (포스터)',
  authors: '예인수,박상빈,류창국,김봉근',
  journal: '2012 한국수소 및 신에너지학회 추계학술대회, 2012.11.15, 구미'
},
{
  id: 'kc-2012-7',
  year: 2012,
  title: '바이오매스 가스화시 타르 분해 반응에 대한 실험적 연구 (포스터)',
  authors: '음푸른별,이용운,류창국,박영권',
  journal: '2012 한국수소 및 신에너지학회 추계학술대회, 2012.11.15, 구미'
},
{
  id: 'kc-2012-8',
  year: 2012,
  title: '바이오촤의 토양 내 활용을 위한 거대억새의 열분해 특성 분석',
  authors: '이용운,음푸른별,류창국,정진호,현승훈,박영권 2012 한국폐기물자원순환학회 춘계학술연구발표회',
  journal: '2012.05.11, 원주'
},
{
  id: 'kc-2012-9',
  year: 2012,
  title: '바이오매스 가스화시 생성된 타르의 고온 분해 및 촤에 의한 분해에 대한 실험적 연구',
  authors: '음푸른별,이용운,류창국 2012 한국폐기물자원순환학회 춘계학술연구발표회',
  journal: '2012.05.11, 원주 (우수 논문상)'
},
{
  id: 'kc-2012-10',
  year: 2012,
  title: '고압 석탄 분류층 가스화기 전산유동에서 탈휘발 모델의 영향 평가',
  authors: '예인수,박상빈,류창국,박호영,김봉근,2012 한국연소학회 춘계학술대회',
  journal: '2012.04.13-14, 여수'
},
{
  id: 'kc-2012-11',
  year: 2012,
  title: '전산유동 해석을 이용한 Oxy-PC 버너 형상 변화에 따른 화염 특성연구',
  authors: '채태영,류창국,양원,2012 한국연소학회 춘계학술대회',
  journal: '2012.04.13-14, 여수'
},
{
  id: 'kc-2012-12',
  year: 2012,
  title: '거대억새의 저속 열분해 생성물 특성 분석',
  authors: '이용운,음푸른별,정진호,현승훈,박영권,류창국,2012 한국연소학회 춘계학술대회',
  journal: '2012.04.13-14, 여수'
},
{
  id: 'kc-2012-13',
  year: 2012,
  title: '100MWe급 석탄 순산소 연소 실증 보일러의 연소 특성에 대한 전산유동해석 연구',
  authors: '김정은,박상현,김영주,김혁필,류창국2012 한국연소학회 춘계학술대회',
  journal: '2012.04.13-14, 여수'
},
{
  id: 'kc-2011-1',
  year: 2011,
  title: '전산유동 해석을 이용한 300MWth Oxy-PC 버너 설계 및 운전조건 평가',
  authors: '채태영,류창국,양원,2011 한국연소학회 추계학술대회',
  journal: '2011.12.01-02, 경주'
},
{
  id: 'kc-2011-2',
  year: 2011,
  title: '바이오매스 가스화시 타르의 열적 분해 및 촤의 영향에 대한 실험적 연구',
  authors: '음푸른별,이용운,류창국,박영권,2011 한국연소학회 추계학술대회',
  journal: '2011.12.01-02, 경주'
},
{
  id: 'kc-2011-3',
  year: 2011,
  title: '미분탄  순산소 연소시 배가스 재순환률 및 산화제 제습의 영향에 관한 연구',
  authors: '최종균, 류창국,양원,채태영,2011 한국연소학회 추계학술대회',
  journal: '2011.12.01-02, 경주'
},
{
  id: 'kc-2011-4',
  year: 2011,
  title: '석탄  분류층 가스화기 내 유동 및 입자 거동의 특성에 대한 전산유동해석 연구',
  authors: '예인수,박상빈,류창국,백민수,김유석',
  journal: '2011 한국연소학회 추계학술대회, 2011.12.01-02, 경주'
},
{
  id: 'kc-2011-5',
  year: 2011,
  title: '석탄  보일러 전산유동해석 시 유동 및 반응모델의 영향에 대한 연구',
  authors: '김정은,홍재현,박상현,류창국',
  journal: '2011 한국연소학회 추계학술대회, 2011.12.01-02, 경주'
},
{
  id: 'kc-2011-6',
  year: 2011,
  title: '상용 미분탄 보일러의 운전조건에 따른 연소특성 분석을 위한 전산유동해석 연구',
  authors: '홍재현,류창국,김영주',
  journal: '2011 한국에너지공학회 추계학술대회, 2011.10.21, 서울'
},
{
  id: 'kc-2011-7',
  year: 2011,
  title: '하수 슬러지의 효율적인 연료화를 위한 증기압축-유중증발 결합 공정의 특성 해석',
  authors: '홍성표,류창국,고한서,채종성,엄태인',
  journal: '2011 폐기물 관련학회 추계 공동학술대회, 2011.10.18, 대구 (우수 논문상)'
},
{
  id: 'kc-2011-8',
  year: 2011,
  title: '석탄 순산소 연소 조건에서의 가스 및 입자의 복사열전달 영향 평가',
  authors: '박상현,류창국,채태영,양원,김영주,이성호,서상일',
  journal: '2011 연소학회 춘계학술대회, 2011.05.18-19, 제주 (우수 논문상)'
},
{
  id: 'kc-2011-9',
  year: 2011,
  title: '수증기 압축을 이용한 슬러지 건조 공정의 공정 특성 해석 ',
  authors: '홍성표,류창국,고한서,채종성,엄태인',
  journal: '2011 한국폐기물자원순환학회 춘계학술대회, 2011.05.13, 춘천'
},
{
  id: 'kc-2010-1',
  year: 2010,
  title: '전산유동해석을 이용한 100MWe 규모 석탄 순산소 연소 실증플랜트의 설계 및 운전조건 평가',
  authors: '채태영,박상현,홍재현,양원,류창국',
  journal: '2010 연소학회 추계학술대회, 2010.11.12-13, 용인'
},
{
  id: 'kc-2010-2',
  year: 2010,
  title: '전산해석을 통한 원자로 노심 용융물의 채널 내 퍼짐 및 열전달 특성 분석',
  authors: '류창국,예인수,하광순,송진호',
  journal: '2010 기계학회 추계학술대회, 2010.11.03, 제주도'
},
{
  id: 'kc-2010-3',
  year: 2010,
  title: 'LNG 부분 산화기의 수치해석 연구',
  authors: '채태영,나익환,류창국,양원',
  journal: '2010 연소학회 춘계학술대회, 2010.06.04-05,목포'
},
{
  id: 'kc-2010-4',
  year: 2010,
  title: '소형 우드펠릿 보일러의 연소효율 향상을 위한 연구',
  authors: '이용운,예인수,이명일,홍재현,오정근,이웅진,류창국,  2010 연소학회 춘계학술대회',
  journal: '2010.06.04-05, 목포'
},
{
  id: 'kc-2010-5',
  year: 2010,
  title: '석탄 순산소 연소 해석을 위한 전산 해석 모델 평가',
  authors: '채태영,박상현,홍재현,예인수,양원,류창국,  2010 연소학회 춘계학술대회',
  journal: '2010.06.04-05, 목포'
},
{
  id: 'kc-2010-6',
  year: 2010,
  title: '액체금속을 이용한 고온 연료가스내의 황화수소 제거 평가',
  authors: '이명일,류창국',
  journal: '2010 연소학회 춘계학술대회, 2010.06.04-05, 목포'
},
{
  id: 'kc-2010-7',
  year: 2010,
  title: '바이오매스의 입자 크키에 따른 열분해 특성 기초 연구',
  authors: '음푸른별,예인수,류창국,문지홍 ,방병열,이은도',
  journal: '2010 연소학회 춘계학술대회, 2010.06.04-05, 목포'
},
{
  id: 'kc-2010-8',
  year: 2010,
  title: '우드펠릿 보일러의 연소 최적화',
  authors: '이용운,예인수 ,홍재현,김회훤,이웅진,류창국',
  journal: '2010 한국 폐기물자원순환학회 춘계학술대회, 2010.05.14, 대전'
},
{
  id: 'kc-2010-9',
  year: 2010,
  title: 'Char 재순환을 위한 분류층 석탄 가스화기의 전산해석',
  authors: '정우현,윤용승,이승종,류창국,이명일',
  journal: '2010 화학공학회 춘계학술대회, 2010.04.22,대구'
}



]
  };

// 현재 탭 데이터 가져오기 및 검색 필터링
  const currentPubs = publicationsData[activeTab] || [];
  
  const filteredPubs = currentPubs.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const years = Array.from(new Set(filteredPubs.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      
      {/* 헤더 및 검색 영역 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
          <p className="text-gray-500 text-lg font-light">Contributions to international peer-reviewed journals.</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search publications..." 
            className="pl-12 pr-6 py-3 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none w-full md:w-80 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* 탭 버튼 영역 */}
      <div className="flex flex-wrap gap-2 mb-16 border-b border-gray-200 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSearchTerm('');
            }}
            className={`px-6 py-3 font-bold text-sm uppercase tracking-wide transition-all relative ${
              activeTab === tab
                ? 'text-emerald-800'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></div>
            )}
          </button>
        ))}
      </div>

      {/* 논문 리스트 영역 */}
      <div className="space-y-20 animate-in fade-in duration-500">
        {currentPubs.length === 0 ? (
          <div className="text-center py-20 text-gray-400 italic">
            List update in progress...
          </div>
        ) : (
          years.map(year => {
            const yearPubs = filteredPubs.filter(p => p.year === year);
            if (yearPubs.length === 0) return null;

            return (
              <div key={year} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">{year}</h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-emerald-100 to-transparent"></div>
                </div>
                
                <div className="space-y-8">
                  {yearPubs.map((pub) => (
                    <div key={pub.id} className="group">
                      <div className="w-full">
                        <div className="text-xs font-bold text-emerald-700 mb-1 uppercase tracking-wider leading-relaxed">
                          {pub.authors}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-emerald-800 transition-colors">
                          {pub.title}
                        </h4>
                        <div className="text-gray-500 italic text-sm mb-2">
                          {pub.journal}
                        </div>
                        
                        {pub.doi && (
                            <a 
                              href={`https://doi.org/${pub.doi}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[10px] font-black text-gray-400 hover:text-emerald-800 uppercase tracking-widest transition-all mt-2"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" /> View Article
                            </a>
                          )
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* [수정됨] Floating Action Buttons (Home + Top) */}
      <div className={`fixed bottom-8 right-8 z-50 flex items-end gap-3 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}>
        
        {/* 1. 홈 버튼 (왼쪽) */}
        <button
          onClick={goToHome}
          className="p-3 bg-white text-emerald-600 border border-emerald-100 rounded-full shadow-lg hover:bg-emerald-50 transition-all duration-300 mb-1"
          aria-label="Go to Home"
        >
          <Home className="h-6 w-6" />
        </button>

        {/* 2. Top 버튼 (오른쪽) */}
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

export default Publications;