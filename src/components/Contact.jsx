import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [copiedLabel, setCopiedLabel] = useState('');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const contactMethods = [
    {
      label: 'Email',
      value: 'palaramrohit123@gmail.com',
      icon: '📧',
      link: 'mailto:palaramrohit123@gmail.com',
      isCopyable: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/palaram-rohit',
      icon: '💼',
      link: 'https://www.linkedin.com/in/palaram-rohit-1379aa2ba/',
      isCopyable: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/palaramrohit',
      icon: '💻',
      link: 'https://github.com/PalaramRohit',
      isCopyable: true,
    },
    {
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      icon: '📱',
      link: null,
      isCopyable: true,
    }
  ];

  const handleCopy = (e, text, label) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(''), 2000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top opacity-[0.03]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Networking Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#1464F4] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between relative shadow-[0_-20px_50px_rgba(20,100,244,0.3)]"
        >
          <div className="w-full">
            <div className="text-xs font-bold tracking-[0.2em] mb-4 uppercase opacity-85">
              Let's Collaborate
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">
              Let's Connect
            </h2>

            {/* Clickable Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
              {contactMethods.map((method, idx) => (
                <div 
                  key={idx}
                  onClick={() => method.link && window.open(method.link, '_blank')}
                  className={`bg-black/20 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex flex-col justify-between min-h-[140px] relative transition-all duration-300 group ${
                    method.link ? 'cursor-pointer hover:bg-black/30 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]' : 'cursor-default'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-2xl">{method.icon}</span>
                    
                    <div className="flex gap-2">
                      {/* Copy Action */}
                      {method.isCopyable && (
                        <button 
                          onClick={(e) => handleCopy(e, method.value, method.label)}
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/5 hover:border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                          title={`Copy ${method.label}`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        </button>
                      )}

                      {/* Link Action */}
                      {method.link && (
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-white/50 group-hover:text-white group-hover:bg-white/15 transition-all">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200 block mb-1">
                      {method.label}
                    </span>
                    <span className="font-mono text-xs md:text-sm font-semibold tracking-wide block break-all text-white/90 group-hover:text-white transition-colors">
                      {method.value}
                    </span>
                  </div>

                  {/* Copy Alert Indicator */}
                  {copiedLabel === method.label && (
                    <span className="absolute top-4 right-14 bg-white text-blue-600 text-[9px] font-bold px-2 py-1 rounded-md animate-fade-in shadow-md">
                      Copied!
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom disclaimer metadata */}
          <div className="text-white/60 font-mono text-[9px] tracking-wider mt-8 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between w-full">
            <p>Active Engagement &bull; Available for Inquiries</p>
            <p className="mt-2 sm:mt-0">&copy; {new Date().getFullYear()} Rohit Palaram</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
