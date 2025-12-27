
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! 👋 I'm Sri Ram's Portfolio AI. I can tell you about his data analysis skills, RINL internship, or project portfolio. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are the ultimate AI ambassador for Sri Ram Krishna Sai, a top-tier Data Analyst. 
          Your tone: Professional, analytical, confident, yet friendly.
          Bio: B.Tech (AI & DS) student at BVCEC, Odalarevu. Data Analyst Intern at RINL. 
          Location: Odalarevu, Andhra Pradesh.
          Key Strength: Bridging the gap between raw data and business decisions.
          Always mention: He is actively looking for full-time Data Analyst roles starting 2026.
          Contact: sriramchikkala004@gmail.com.
          Keep answers under 3 sentences unless asked for deep project details.`,
        }
      });

      const botResponse = response.text || "I'm having a brief data hiccup. Could you try asking that again?";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm offline for maintenance, but Sri Ram is available! Send him an email at sriramchikkala004@gmail.com." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[380px] h-[500px] sm:h-[550px] bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl flex flex-col border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
          {/* Header */}
          <div className="p-6 bg-slate-900 dark:bg-black text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white/20">
                <i className="fas fa-brain text-sm"></i>
              </div>
              <div>
                <p className="font-black text-sm tracking-tight uppercase">Analyst AI</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-[10px] text-slate-400 font-bold">READY TO ANALYZE</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
            >
              <i className="fas fa-times text-xs"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-slate-950/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-100 dark:shadow-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my SQL projects..."
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl pl-5 pr-14 py-4 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/20 outline-none transition"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-2 w-10 h-10 bg-slate-900 dark:bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition disabled:opacity-50"
              >
                <i className="fas fa-arrow-up text-sm"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 active:scale-90 ${
          isOpen ? 'bg-slate-900 dark:bg-blue-600' : 'bg-blue-700'
        }`}
      >
        <div className={`absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 ${isOpen ? 'hidden' : ''}`}></div>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-alt'} text-xl transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}></i>
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-20 whitespace-nowrap bg-slate-900 dark:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700/50">
            Chat with my AI Assistant
          </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
