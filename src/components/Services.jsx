import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] hover:translate-y-[-6px] transition-all duration-500 z-10 ${className} ${
        isActive 
          ? 'bg-blue-950/40 border-blue-500/50 shadow-[0_20px_50px_rgba(20,100,244,0.25)]' 
          : 'bg-neutral-900/60 border-neutral-800/80 shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:border-blue-500/30'
      }`}
    >
      {/* The hole punch detail */}
      <div className="w-5 h-5 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] absolute top-4 border border-neutral-800 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-45"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-500 ${
        isActive ? 'bg-blue-900/10' : 'bg-neutral-950/40'
      }`}>
        <span className={`text-xl font-bold mb-2 font-mono transition-colors duration-500 ${
          isActive ? 'text-blue-400' : 'text-neutral-700'
        }`}>{number}</span>
        
        <h3 className={`text-2xl font-black mb-3 tracking-tight transition-colors duration-500 ${
          isActive ? 'text-white' : 'text-neutral-400'
        }`}>{title}</h3>
        
        <p className={`text-xs leading-relaxed font-light transition-colors duration-500 ${
          isActive ? 'text-blue-100' : 'text-neutral-500'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="services"
      ref={containerRef}
      className="bg-[#030712] text-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-neutral-900 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-blue-500/30 rounded-full px-5 py-1.5 text-xs text-blue-400 font-bold mb-8 shadow-sm bg-blue-500/5">
            How I Approach Engineering
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6 tracking-tight relative">
            Building intelligent systems, <br />
            <span className="text-blue-500">one challenge at a time.</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed font-light">
            I combine AI, backend engineering, and product thinking to transform ambitious ideas into scalable real-world solutions. From hackathons to production-grade platforms, every project reflects continuous learning, experimentation, and innovation.
          </p>
        </div>

        {/* Desktop Smooth Flowing S-Curve guide line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0" 
          viewBox="0 0 1000 1350" 
          preserveAspectRatio="none"
        >
          {/* Guide guide line path */}
          <path 
            d="M 750,150 C 600,280 400,320 250,500 C 400,680 600,720 750,850 C 600,1020 400,1050 250,1200" 
            fill="none" 
            stroke="#1f2937" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
          />

          {/* Mask dynamically revealing progress guide line */}
          <mask id="path-mask">
            <motion.path 
              d="M 750,150 C 600,280 400,320 250,500 C 400,680 600,720 750,850 C 600,1020 400,1050 250,1200" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
            />
          </mask>

          {/* The actual colored guide line that gets revealed on scroll */}
          <path 
            d="M 750,150 C 600,280 400,320 250,500 C 400,680 600,720 750,850 C 600,1020 400,1050 250,1200" 
            fill="none" 
            stroke="#1464F4" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
            mask="url(#path-mask)"
            className="drop-shadow-[0_0_15px_rgba(20,100,244,0.8)]"
          />
        </svg>

        {/* Mobile guide line */}
        <svg 
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="#1f2937" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="#1464F4" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          <TagCard 
            number="01"
            title="Discover"
            text="Understanding the problem deeply before writing a single line of code. Combining speed from hackathons and research methods to find the optimal path for AI and backend systems."
            className="md:absolute md:top-[20px] md:left-[55%] rotate-1 md:rotate-2"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="02"
            title="Design"
            text="Architecting scalable, modular backend systems. Designing FastAPI workflows, database schemas, and multi-agent system layouts to ensure peak operational performance."
            className="md:absolute md:top-[380px] md:left-[10%] rotate-1 md:-rotate-2"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="03"
            title="Build"
            text="Developing custom application layers using AI integrations (Llama 3.1, Gemini 1.5, Roboflow), clean React frontends, and robust deployment pipelines."
            className="md:absolute md:top-[740px] md:left-[55%] -rotate-2 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="04"
            title="Evolve"
            text="Iterating continuously through automated testing, performance profiling, and developer tools (like Windsurf and Cursor) to keep solutions state-of-the-art."
            className="md:absolute md:top-[1100px] md:left-[10%] rotate-2 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end text */}
          <div 
            data-aos="fade-in" 
            data-aos-delay="600"
            className="hidden md:block absolute top-[1300px] left-[20%] font-['Caveat',cursive] text-2xl text-blue-400 rotate-6"
          >
            Deploying solutions with purpose.
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;
