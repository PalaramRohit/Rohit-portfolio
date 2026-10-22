import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroBg from '../assets/hero_portrait.jpeg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen md:h-screen overflow-hidden bg-black flex items-center">
      {/* 16:9 Studio Portrait (Rohit positioned on the right against deep black backdrop) */}
      <img
        src={heroBg}
        alt="Rohit Palaram"
        className="absolute top-0 left-0 w-full h-full object-cover object-[80%_center] md:object-right select-none opacity-95"
      />

      {/* Radial soft blue accent glow in background */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#1464F4]/15 blur-[140px] pointer-events-none z-10" 
      />

      {/* Seamless Dark Vignette & Navy Gradient Overlay on left side */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent md:w-[60%] lg:w-[55%]" 
      />
      {/* Bottom gradient seamlessly joining the dark theme */}
      <div 
        className="absolute inset-x-0 bottom-0 h-36 z-10 pointer-events-none bg-gradient-to-t from-black via-black/50 to-transparent" 
      />

      {/* Content Container: two-zone layout with content on left and portrait clear on right */}
      <div className="relative z-20 px-6 pt-28 pb-16 md:pt-24 md:pb-12 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center text-left w-full h-full">
        
        {/* Left Side: Scaled content column (approx 620-680px on desktop) */}
        <div className="flex flex-col items-start text-left w-full max-w-full md:max-w-[620px] lg:max-w-[660px] xl:max-w-[680px]">
          {/* Main Heading (64–76px on large screens, scaled down gracefully for mobile/tablets) */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[74px] font-extrabold mb-5 tracking-tight leading-[1.08]"
          >
            Hi, I’m <br /> <span className="text-[#1464F4] font-extrabold">Rohit Palaram</span>
          </h1>

          {/* Enlarged Professional Summary Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-full max-w-[640px] mb-7 p-6 sm:p-7 rounded-2xl bg-[#0b1329]/75 border border-[#1464F4]/30 backdrop-blur-md shadow-[0_12px_40px_rgba(3,7,18,0.6)]"
          >
            <p className="text-[13px] md:text-[14px] font-bold uppercase tracking-wider text-blue-400 mb-2.5">
              Professional Summary
            </p>
            <p className="text-[#D1D5DB] text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] font-normal">
              Information Technology undergraduate at MVSR Engineering College with hands-on experience developing full-stack applications and AI-powered prototypes. As Technical Lead at AIMERS, I contribute to architecture planning, phased implementation, integration, and testing. Experienced in REST APIs, database-backed applications, AI-assisted development workflows, and multi-LLM orchestration.
            </p>
          </div>

          {/* Enlarged Stats row */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-8 sm:gap-12 md:gap-14 mb-8 text-white mt-1"
          >
            <div>
              <div className="text-3xl sm:text-4xl md:text-[34px] font-extrabold text-[#1464F4] leading-tight">
                2<span className="text-white text-xl md:text-2xl ml-0.5">×</span>
              </div>
              <div className="text-[11px] md:text-[12px] uppercase tracking-wider text-gray-400 font-medium mt-1">
                Hackathon Wins
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-[34px] font-extrabold text-[#1464F4] leading-tight">
                5<span className="text-white text-xl md:text-2xl ml-0.5">+</span>
              </div>
              <div className="text-[11px] md:text-[12px] uppercase tracking-wider text-gray-400 font-medium mt-1">
                AI Projects
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-[34px] font-extrabold text-[#1464F4] leading-tight">
                1<span className="text-white text-xl md:text-2xl ml-0.5">st</span>
              </div>
              <div className="text-[11px] md:text-[12px] uppercase tracking-wider text-gray-400 font-medium mt-1">
                R&D Selection
              </div>
            </div>
          </div>

          {/* Improved Buttons (height 48-50px, text 15-16px, comfortable padding) */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-[48px] md:h-[50px] px-7 md:px-8 text-[15px] md:text-[16px] rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer flex items-center justify-center"
            >
              View Projects
            </button>
            
            {/* Secondary Button - Outlined Glassmorphism style */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-[48px] md:h-[50px] px-7 md:px-8 text-[15px] md:text-[16px] rounded-full bg-black/40 border border-white/80 text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center justify-center"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right side remains completely open to showcase Rohit's portrait clearly */}
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
