import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-end items-center">
        <div className="text-center md:text-right">
          {/* Energy Engineering Lab [큰 하얀글씨] */}
          <h3 className="text-2xl font-bold text-white mb-4">
            Energy Engineering Lab
          </h3>
          
          {/* 상세 정보 [작은 회색 글씨] */}
          <div className="space-y-1.5 text-sm text-gray-400">
            <p>Sungkyunkwan University (SKKU)</p>
            <p>Department of Mechanical Engineering</p>
            <p>Suwon 16419, South Korea</p>
            <p>Tel. +82-(0)-31-299-4694</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;