import React from 'react';

const Certifications: React.FC = () => {
  const certs = [
    { 
      title: "AWS Cloud Computing", 
      issuer: "Amazon Web Services", 
      icon: "fa-cloud",
      file: "/certificates/aws.pdf" 
    },
    { 
      title: "Deloitte Data Analytics Job Simulation", 
      issuer: "Forage", 
      icon: "fa-briefcase",
      file: "/certificates/deloitte.pdf"
    },
    { 
      title: "TCS iON Career Edge", 
      issuer: "Young Professional", 
      icon: "fa-award",
      file: "/certificates/tcs.pdf"
    },
    { 
      title: "GenAI Powered Data Analytics", 
      issuer: "Forage", 
      icon: "fa-robot",
      file: "/certificates/genai.pdf" 
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => (
            <a
              key={idx}
              href={cert.file}
              download
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 hover:shadow-md dark:hover:border-blue-700 transition-all"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                <i className={`fas ${cert.icon}`}></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {cert.issuer}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
