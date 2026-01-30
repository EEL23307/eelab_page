import React from 'react';
import { ExternalLink } from 'lucide-react'; // 아이콘 사용을 위해 import

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* ================= LEFT: Lab Information ================= */}
        <div className="text-center md:text-left">
          {/* Energy Engineering Lab [큰 하얀글씨] */}
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
            Energy Engineering Lab
          </h3>
          
          {/* 상세 정보 [작은 회색 글씨] */}
          <div className="space-y-1.5 text-sm text-gray-400 font-light">
            <p>Sungkyunkwan University (SKKU)</p>
            <p>Department of Mechanical Engineering</p>
            <p>Suwon 16419, South Korea</p>
            <p className="mt-2 text-emerald-500 font-medium">Tel. +82-(0)-31-299-4694</p>
          </div>
        </div>

        {/* ================= RIGHT: External Links ================= */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Related Links
          </p>
          
          {/* 1. 성균관대학교 링크 */}
          <a 
            href="https://www.skku.edu/skku/index.do#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          >
            <span>Sungkyunkwan University</span>
            <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* 2. 기계공학과 링크 */}
          <a 
            href="https://mech.skku.edu/me/index.do" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          >
            <span>SKKU Mechanical Engineering</span>
            <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

      </div>
      
      {/* Copyright (Optional) */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Energy Engineering Lab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;