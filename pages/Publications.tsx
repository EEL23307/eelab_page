import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

// 논문 데이터 타입 정의
interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi?: string; // 나중에 DOI 링크를 넣을 수 있도록 옵션으로 남겨둠
}

const Publications: React.FC = () => {
  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState('International Journals');
  const [searchTerm, setSearchTerm] = useState('');

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
        journal: '대한기계학회 논문집, 제18권 제 8호, pp.2184-21
],
  // =========================================================================================
  // 데이터 입력 영역
  // =========================================================================================

    'International Conferences': [
],

  // =========================================================================================
  // 데이터 입력 영역
  // =========================================================================================

    'Korean Conferences': [
]
  };

  // 현재 탭의 데이터 가져오기
  const currentPubs = publicationsData[activeTab] || [];

  // 검색 필터링
  const filteredPubs = currentPubs.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 연도별 그룹화 (내림차순 정렬)
  const years = Array.from(new Set(filteredPubs.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      
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
              setSearchTerm(''); // 탭 변경 시 검색어 초기화
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
                {/* 연도 헤더 */}
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">{year}</h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-emerald-100 to-transparent"></div>
                </div>
                
                {/* 해당 연도 논문들 */}
                <div className="space-y-8">
                  {yearPubs.map((pub, idx) => (
                    <div key={pub.id} className="group flex gap-6 items-start">
                      {/* 번호 */}
                      <div className="flex-shrink-0 text-emerald-300 font-bold text-lg pt-1 w-8">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      
                      {/* 내용 */}
                      <div className="flex-grow">
                        <div className="text-xs font-bold text-emerald-700 mb-1 uppercase tracking-wider leading-relaxed">
                          {pub.authors}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-emerald-800 transition-colors">
                          {pub.title}
                        </h4>
                        <div className="text-gray-500 italic text-sm mb-2">
                          {pub.journal}
                        </div>
                        
                        {/* DOI 링크 (데이터가 있을 경우 표시, 현재는 텍스트에 포함되어 있어 숨김 처리 가능) */}
                        {/* pub.doi && (
                            <a 
                              href={`https://doi.org/${pub.doi}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[10px] font-black text-gray-400 hover:text-emerald-800 uppercase tracking-widest transition-all mt-2"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" /> View Article
                            </a>
                          )
                        */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Publications;