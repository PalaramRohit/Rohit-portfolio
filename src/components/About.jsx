import React from 'react';
import stackImage from '../assets/about/rohit_profile.png';

const About = () => {
  const experiences = [
    {
      role: 'Technical Lead — AIMERS',
      org: 'MVSR Engineering College',
      period: '2026 - Present',
      desc: 'Leading technical direction & project mentorship for the college\'s AI/ML student body. Conducting technical reviews and onboarding junior members.'
    },
    {
      role: 'AI Intern',
      org: 'VISWAM Initiative, IIIT Hyderabad',
      period: 'Jun – Aug 2024',
      desc: 'Curated 2,000+ annotated data entries for open-source AI datasets. Improved annotation consistency by ~30% through systematic QA workflows.'
    },
    {
      role: 'Hackathon Organizer — INSPIIRA 2026',
      org: 'MVSR Engineering College',
      period: '2026',
      desc: 'Co-organized inter-college hackathon coordinating 10+ colleges and managing 200+ participants across technical tracks.'
    },
    {
      role: 'Microsoft Student Engagement Program',
      org: 'Microsoft India',
      period: 'March 2025',
      desc: 'Selected for Microsoft campus visit; attended sessions on AI product development and cloud-scale backend systems.'
    }
  ];

  const techStack = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'Dart', 'C', 'PHP']
    },
    {
      category: 'Frameworks',
      skills: ['Flask', 'FastAPI', 'React.js', 'Vite', 'Flutter', 'Laravel']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      category: 'AI & ML',
      skills: ['Roboflow', 'Llama 3.1', 'Gemini 1.5 Flash', 'Cerebras', 'OpenRouter', 'NLP']
    },
    {
      category: 'Dev Tools',
      skills: ['Git', 'GitHub', 'Linux', 'REST APIs', 'WebSockets', 'IoT Protocols']
    },
    {
      category: 'AI Dev Tools',
      skills: ['Cursor', 'Antigravity', 'Windsurf', 'Lovable', 'Replit Agent']
    }
  ];

  return (
    <section id="about" className="bg-[#1464F4] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start z-10 relative">
        
        {/* Left Side: ID Badge and Credentials */}
        <div className="flex flex-col items-center w-full lg:w-[320px] shrink-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full mb-12">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[260px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border border-neutral-800">
                <img 
                  src={stackImage} 
                  alt="Rohit Palaram Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Credentials Info Panel */}
          <div data-aos="fade-up" className="w-full bg-black/20 backdrop-blur-md rounded-3xl p-6 border border-white/10 text-white text-xs space-y-4">
            <div>
              <div className="uppercase tracking-widest text-[9px] text-blue-200 font-bold mb-1">Degree</div>
              <div className="font-bold">B.Tech Information Technology, 2023–2027</div>
            </div>
            <div>
              <div className="uppercase tracking-widest text-[9px] text-blue-200 font-bold mb-1">College</div>
              <div className="font-bold">MVSR Engineering College, Hyderabad</div>
            </div>
            <div>
              <div className="uppercase tracking-widest text-[9px] text-blue-200 font-bold mb-1">Email</div>
              <a href="mailto:palaramrohit123@gmail.com" className="font-bold hover:underline">palaramrohit123@gmail.com</a>
            </div>
            <div>
              <div className="uppercase tracking-widest text-[9px] text-blue-200 font-bold mb-1">GitHub</div>
              <a href="https://github.com/PalaramRohit" target="_blank" rel="noreferrer" className="font-bold hover:underline">github.com/PalaramRohit</a>
            </div>
            <div>
              <div className="uppercase tracking-widest text-[9px] text-blue-200 font-bold mb-1">LinkedIn</div>
              <a href="https://www.linkedin.com/in/palaram-rohit-1379aa2ba/" target="_blank" rel="noreferrer" className="font-bold hover:underline">linkedin.com/in/palaram-rohit-1379aa2ba</a>
            </div>
          </div>

        </div>

        {/* Right Side: Biography & Experiences & Tech Stack */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20 w-full">
          
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
            Engineering the Future of AI
          </h2>
          
          <div className="space-y-4 text-sm md:text-base font-medium leading-relaxed text-blue-50 mb-12 max-w-3xl">
            <p>
              I'm a <strong className="text-black font-extrabold">B.Tech IT student at MVSR Engineering College, Hyderabad</strong>, deeply passionate about building AI systems that matter — from multimodal AI platforms to women safety ecosystems.
            </p>
            <p>
              My work spans full-stack development, machine learning pipelines, and IoT — all tied together by a love for clean architecture and real-world impact. I've shipped production-grade AI systems, led teams under 24-hour hackathon pressure, and pitched funded startups.
            </p>
            <p>
              Currently serving as <strong className="text-black font-extrabold">Technical Lead at AIMERS</strong>, mentoring fellow engineers and driving AI/ML projects across the college community.
            </p>
          </div>

          {/* Experiences Grid */}
          <div className="mb-14">
            <h3 className="text-lg font-black text-black mb-6 uppercase tracking-widest border-b border-black/10 pb-2">
              Work & Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-black/20 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-black/30 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h4 className="font-black text-white text-base leading-tight mb-1">{exp.role}</h4>
                    <div className="flex justify-between text-[11px] text-blue-200 font-bold mb-3">
                      <span>{exp.org}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-200 text-xs font-light leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Tech Stack Grid */}
          <div>
            <h3 className="text-lg font-black text-black mb-6 uppercase tracking-widest border-b border-black/10 pb-2">
              My Tech Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((category, idx) => (
                <div key={idx} className="bg-black/10 backdrop-blur-sm p-6 rounded-3xl border border-white/5">
                  <h4 className="font-bold text-black text-xs uppercase tracking-wider mb-4 border-l-2 border-black pl-2">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-3 py-1.5 rounded-xl text-[10px] font-mono font-semibold bg-white text-neutral-900 border border-neutral-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
