
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-2xl font-bold text-white mb-4">
          SRK<span className="text-blue-500">SN</span>
        </div>
        <p className="mb-6 max-w-md mx-auto">
          Dedicated to transforming data into actionable insights and fostering a data-driven culture.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://www.linkedin.com/in/sriram-chikkala19/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><i className="fab fa-linkedin text-xl"></i></a>
          <a href="https://github.com/sriramchikkala0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fab fa-github text-xl"></i></a>
          <a href="mailto:sriramchikkala004@gmail.com" className="hover:text-red-400 transition"><i className="fas fa-envelope text-xl"></i></a>
        </div>
        <div className="border-t border-slate-800 pt-8 text-sm">
          &copy; {new Date().getFullYear()} Chikkala Sri Ram Krishna Sai Narasimha. All rights reserved.
          <br />
          <span className="text-slate-600 mt-2 block">Amalapuram, Andhra Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;