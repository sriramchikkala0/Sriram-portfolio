
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "COVID-19 Data Analytics Dashboard",
      tools: ["Python", "SQL", "Power BI"],
      description: "Cleaned and transformed global COVID-19 datasets to analyze recovery and death trends. Built an interactive Power BI dashboard for visual storytelling of pandemic impacts.",
      icon: "fa-virus-covid",
      accent: "bg-red-500",
      github: "https://github.com/sriramchikkala0/COVID19-Data-Analytics-Dashboard",
      caseStudy: "https://github.com/sriramchikkala0/COVID19-Data-Analytics-Dashboard#readme"
    },
    {
      title: "Sales Performance Analysis",
      tools: ["SQL", "Excel"],
      description: "Utilized SQL JOINS and GROUP BY to identify top-performing regions. Created Excel dashboards with Pivot Tables to reveal revenue growth opportunities.",
      icon: "fa-chart-line",
      accent: "bg-green-500",
      github: "https://github.com/sriramchikkala0/Sales-Performance-Analysis",
      caseStudy: "https://github.com/sriramchikkala0/sales-performance-analysis#readme"
    },
    {
      title: "Customer Churn Analysis",
      tools: ["Python", "Pandas", "Matplotlib"],
      description: "Conducted EDA on behavioral data to identify churn patterns. Developed visualizations that pinpointed key segments with high attrition risks.",
      icon: "fa-user-minus",
      accent: "bg-blue-500",
      github: "https://github.com/sriramchikkala0/Customer-Churn-Analysis",
      caseStudy: "https://github.com/sriramchikkala0/Customer-Churn-Analysis#readme"
    },
    {
      title: "HR Analytics Dashboard",
      tools: ["Excel", "Power BI"],
      description: "Analyzed employee attrition trends and performance metrics. Created KPIs like attrition rate and average tenure to support data-driven HR decisions.",
      icon: "fa-users-gear",
      accent: "bg-purple-500",
      github: "https://github.com/sriramchikkala0/HR-Analytics-Dashboard",
      caseStudy: "https://github.com/sriramchikkala0/HR-Analytics-Dashboard#readme"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Data Projects</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Real-world applications of data analysis methodologies.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row hover:shadow-xl dark:hover:border-blue-700/50 transition-all duration-300 group">
              <div className={`md:w-1/3 flex items-center justify-center p-8 ${proj.accent} text-white`}>
                <i className={`fas ${proj.icon} text-6xl group-hover:scale-110 transition duration-300`}></i>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{proj.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 rounded border border-blue-100 dark:border-blue-800">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-slate-900 dark:text-slate-300 text-sm font-bold flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition">
                    <i className="fab fa-github"></i> Repository
                  </a>
                  <a href={proj.caseStudy} className="text-blue-700 dark:text-blue-400 text-sm font-bold flex items-center gap-2 hover:underline transition">
                    <i className="fas fa-external-link-alt"></i> Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
