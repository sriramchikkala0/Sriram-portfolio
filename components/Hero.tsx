
import React from 'react'


const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[50%] h-[50%] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[140px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700 dark:bg-blue-400"></span>
              </span>
              Open to New Opportunities
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-black text-slate-900 dark:text-white mb-6 leading-[0.95] tracking-tighter">
              Sri Ram<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-600">
                Krishna Sai
              </span>
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-slate-300 dark:bg-slate-700"></div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400">
                Professional Data Analyst
              </h2>
            </div>
            
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
              Transforming raw datasets into strategic business assets. Specializing in Python-driven automation, SQL modeling, and interactive Power BI storytelling.
            </p>
            
            <div className="flex flex-wrap gap-5 mb-16">
              <a href="#projects" className="group px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-2xl shadow-slate-300 dark:shadow-none hover:shadow-blue-200 hover:-translate-y-1 flex items-center gap-2">
                View My Projects
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
              <div className="flex items-center gap-3">
                <a href="https://github.com/sriramchikkala0" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:text-white transition-all hover:-translate-y-1">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/sriram-chikkala19/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:text-white transition-all hover:-translate-y-1">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="mailto:sriramchikkala004@gmail.com" className="w-14 h-14 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:text-white transition-all hover:-translate-y-1">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-100 dark:border-slate-800">
              <div>
                <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">4+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Certs Obtained</p>
              </div>
              <div>
                <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <i className="fab fa-python text-blue-600 dark:text-blue-400"></i>
                  Python
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Primary Stack</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 w-full max-w-[550px] mx-auto group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 rounded-[3.5rem] blur-3xl group-hover:opacity-100 transition duration-1000"></div>
              
              {/* Image Container */}
              <div className="relative bg-white dark:bg-slate-900 p-4 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-slate-100 dark:border-slate-800 overflow-hidden">
                <img 
                  src="/profile.png" 
                  alt="Sri Ram Krishna Sai Narasimha Chikkala" 
                  className="rounded-[2.5rem] w-full h-auto object-cover aspect-[4/5] transform transition duration-1000 group-hover:scale-110"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]"></div>
                
                {/* Subtle Scanline Animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-20 w-full -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>
              </div>

              {/* Floating Statistic Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50 dark:border-slate-800 transition-all duration-500 hover:scale-105 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-blue-900/40">
                    <i className="fas fa-chart-bar text-xl"></i>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Analytics Insights</p>
                    <p className="text-2xl font-black text-slate-900 dark:text-white">Active</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-slate-900 dark:bg-blue-700 text-white py-3 px-5 rounded-2xl shadow-2xl hidden md:block border border-slate-800 dark:border-blue-600">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    <div className="w-9 h-9 rounded-full border-2 border-slate-900 dark:border-blue-700 bg-blue-500 flex items-center justify-center text-[9px] font-black shadow-lg">SQL</div>
                    <div className="w-9 h-9 rounded-full border-2 border-slate-900 dark:border-blue-700 bg-indigo-500 flex items-center justify-center text-[9px] font-black shadow-lg">PBI</div>
                    <div className="w-9 h-9 rounded-full border-2 border-slate-900 dark:border-blue-700 bg-yellow-500 flex items-center justify-center text-[9px] font-black shadow-lg">EXL</div>
                  </div>
                  <div className="w-px h-6 bg-slate-700 dark:bg-blue-500/50 mx-1"></div>
                  <p className="text-xs font-black text-slate-300 tracking-widest">LIVE DATA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
