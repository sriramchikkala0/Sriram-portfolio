
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-start">
          <div className="bg-blue-600 dark:bg-blue-700 text-white w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
            <i className="fas fa-university text-2xl"></i>
          </div>
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-2 block">2022 — 2026</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">B.Tech – Computer Science & Engineering (AI & DS)</h3>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">Bonam Venkata Chalamayya Engineering College (JNTUK)</p>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-sm font-semibold text-slate-600 dark:text-slate-400">
                CGPA: 6.84
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
                <i className="fas fa-location-dot"></i> Odalarevu, Andhra Pradesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
