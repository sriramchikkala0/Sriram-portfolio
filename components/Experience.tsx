
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
                <i className="fas fa-briefcase text-8xl text-blue-600 dark:text-blue-400"></i>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
               <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Data Analytics Intern</h3>
                  <p className="text-blue-700 dark:text-blue-400 font-bold">Rashtriya Ispat Nigam Limited (RINL), Visakhapatnam</p>
               </div>
               <div className="text-right">
                  <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold rounded-full border border-blue-200 dark:border-blue-800 uppercase tracking-wider">
                    Ongoing
                  </span>
               </div>
            </div>

            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <i className="fas fa-check-circle text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0"></i>
                <span>Analyzed real-time industrial datasets to identify process bottlenecks and efficiency gaps.</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-check-circle text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0"></i>
                <span>Performed end-to-end data cleaning and transformation using <strong>Python and SQL</strong>.</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-check-circle text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0"></i>
                <span>Conducted trend and <strong>KPI analysis</strong> to measure department-level performance metrics.</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-check-circle text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0"></i>
                <span>Built automated reports using SQL and Excel to reduce manual reporting time by 30%.</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-check-circle text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0"></i>
                <span>Assisted in developing <strong>Power BI dashboards</strong> for visual performance tracking.</span>
              </li>
              <li className="flex gap-3">
                <i className="fas fa-check-circle text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0"></i>
                <span>Presented data-driven insights to senior stakeholders and plant guides.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
