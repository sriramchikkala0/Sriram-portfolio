
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-2xl shadow-inner border border-transparent dark:border-slate-800">
               <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400" 
                alt="Data Analysis Workspace" 
                className="rounded-xl shadow-md border border-white dark:border-slate-700"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Professional Summary</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a final-year <strong>B.Tech student in Computer Science and Engineering (AI & DS)</strong> with a deep passion for unlocking business value through data.
              </p>
              <p>
                Currently serving as a <strong>Data Analytics Intern at RINL</strong>, I handle real-time industrial datasets, performing everything from data wrangling to dashboard delivery. 
              </p>
              <p>
                I specialize in <strong>Python, SQL, MS Excel, and Power BI</strong>. I pride myself on being a strong analytical thinker who thrives on continuous learning and data-driven decision-making.
              </p>
              <div className="pt-6">
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition shadow-lg shadow-blue-500/20 active:scale-95"
                >
                  <i className="fas fa-download"></i> Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
