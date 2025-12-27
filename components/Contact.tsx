
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/sriram-chikkala19/', label: 'LinkedIn' },
    { icon: 'fab fa-github', link: 'https://github.com/sriramchikkala0', label: 'GitHub' },
    { icon: 'fas fa-envelope', link: 'mailto:sriramchikkala004@gmail.com', label: 'Email' }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Connect With Me</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">I am currently looking for full-time Data Analyst opportunities.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-200 dark:border-blue-800">
                <i className="fas fa-envelope text-lg"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Email Me</p>
                <a href="mailto:sriramchikkala004@gmail.com" className="text-slate-900 dark:text-white font-bold hover:text-blue-700 dark:hover:text-blue-400 transition break-all">
                  sriramchikkala004@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-200 dark:border-blue-800">
                <i className="fas fa-location-dot text-lg"></i>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Location</p>
                <p className="text-slate-900 dark:text-white font-bold">Amalapuram, Andhra Pradesh, India</p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Follow My Journey</p>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl flex items-center justify-center hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1">
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-slate-50 dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. John Doe" 
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. john@example.com" 
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project or opportunity..." 
                  className="w-full px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                >
                  Send Inquiry <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;