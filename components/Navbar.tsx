import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // [수정 1] Leaf 제거
import { Page } from '../types';
// import { LAB_NAME } from '../constants'; // 사용하지 않는다면 제거 가능

interface NavbarProps {
  activeTab: Page;
  setActiveTab: (tab: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'Home' },
    { label: 'Professor', value: 'Professor' },
    { label: 'Research', value: 'Research' },
    { label: 'Publications', value: 'Publications' },
    { label: 'People', value: 'People' },
    { label: 'Photos', value: 'Photos' },
    { label: 'Contact', value: 'Contact' },
  ];

  const handleNavClick = (value: Page) => {
    setActiveTab(value);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* [수정 2] 로고 이미지로 교체된 부분 */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('Home')}>
            <img 
              src="images/logo_green.png" 
              alt="Energy Engineering Lab Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                  activeTab === item.value
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-gray-500 hover:text-emerald-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-emerald-800 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-1 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold ${
                activeTab === item.value
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-gray-500 hover:text-emerald-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;