
import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      category: "Languages & Tools",
      items: [
        { name: "Python", level: 90, icon: "fab fa-python" },
        { name: "SQL", level: 85, icon: "fas fa-database" },
        { name: "Excel", level: 95, icon: "fas fa-file-excel" },
        { name: "Power BI", level: 80, icon: "fas fa-chart-pie" }
      ]
    },
    {
      category: "Data Science Library",
      items: [
        { name: "Pandas", level: 88, icon: "fas fa-table" },
        { name: "NumPy", level: 82, icon: "fas fa-calculator" },
        { name: "Matplotlib", level: 85, icon: "fas fa-chart-area" },
        { name: "Seaborn", level: 80, icon: "fas fa-palette" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Core Competencies</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">My technical toolkit is focused on efficient data processing, insightful visualization, and scalable analytics solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <span className="w-8 h-px bg-blue-700 dark:bg-blue-400"></span>
                {group.category}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                          <i className={`${skill.icon} text-lg`}></i>
                        </div>
                        <span className="font-bold text-slate-700 dark:text-slate-300">{skill.name}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-slate-900 dark:bg-blue-600 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
