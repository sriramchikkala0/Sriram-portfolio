import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded"></div>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-6xl mx-auto">

          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-blue-600/30"></div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* ===== CARD TEMPLATE START ===== */}
            {/* B.Tech */}
            <div className="relative flex flex-col items-center text-center">
              <div className="hidden md:block w-5 h-5 bg-blue-600 rounded-full absolute top-20"></div>

              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-6 w-full mt-12 min-h-[340px]">

                {/* Icon */}
                <div className="bg-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                  <i className="fas fa-university text-2xl"></i>
                </div>

                {/* Content */}
                <div>
                  <span className="text-blue-600 font-bold text-sm block mb-2">
                    2022 — 2026
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                    B.Tech – Computer Science & Engineering (AI & DS)
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                    Bonam Venkata Chalamayya Engineering College
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-auto flex flex-col items-center gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 border rounded text-sm font-semibold">
                    CGPA: 7.00
                  </span>
                  <span className="text-sm text-slate-500">
                    Odalarevu, Andhra Pradesh
                  </span>
                </div>

              </div>
            </div>

            {/* Intermediate */}
            <div className="relative flex flex-col items-center text-center">
              <div className="hidden md:block w-5 h-5 bg-blue-600 rounded-full absolute top-20"></div>

              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-6 w-full mt-12 min-h-[340px]">

                <div className="bg-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                  <i className="fas fa-university text-2xl"></i>
                </div>

                <div>
                  <span className="text-blue-600 font-bold text-sm block mb-2">
                    2020 — 2022
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                    Intermediate (MPC)
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                    Sri Chaitanya Junior College
                  </p>
                </div>

                <div className="mt-auto flex flex-col items-center gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 border rounded text-sm font-semibold">
                    Percentage: 61.5%
                  </span>
                  <span className="text-sm text-slate-500">
                    Amalapuram, Andhra Pradesh
                  </span>
                </div>

              </div>
            </div>

            {/* SSC */}
            <div className="relative flex flex-col items-center text-center">
              <div className="hidden md:block w-5 h-5 bg-blue-600 rounded-full absolute top-20"></div>

              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col gap-6 w-full mt-12 min-h-[340px]">

                <div className="bg-blue-600 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                  <i className="fas fa-university text-2xl"></i>
                </div>

                <div>
                  <span className="text-blue-600 font-bold text-sm block mb-2">
                    Completed: 2020
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                    SSC
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                    Sri Nand School
                  </p>
                </div>

                <div className="mt-auto flex flex-col items-center gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 border rounded text-sm font-semibold">
                    Percentage: 98%
                  </span>
                  <span className="text-sm text-slate-500">
                    Amalapuram, Andhra Pradesh
                  </span>
                </div>

              </div>
            </div>
            {/* ===== CARD TEMPLATE END ===== */}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;