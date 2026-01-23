
import React from 'react';
import { LAB_NAME, UNIVERSITY } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-800 pb-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{LAB_NAME}</h3>
            <p className="text-gray-400 max-w-md">
              Leading the way in energy storage and environmental sustainability through advanced materials and innovative systems research.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4">{UNIVERSITY}</h4>
            <p className="text-gray-400">
              Department of Chemical Engineering<br />
              Natural Science Campus, Suwon, Republic of Korea
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {LAB_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
