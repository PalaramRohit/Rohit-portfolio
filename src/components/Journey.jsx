import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from 'framer-motion';

// Import local image assets
import imgAlthon from '../assets/journey/01-althon-coordinator.jpeg';
import imgBits from '../assets/journey/02-bits-hackathon.jpeg';
import imgMicrosoftCampus from '../assets/journey/03-microsoft-campus.jpeg';
import imgForgeWinner from '../assets/journey/04-forge-codeathon-winner.jpeg';
import imgMicrosoftRunnerup from '../assets/journey/05-microsoft-runnerup.jpeg';
import imgInspira from '../assets/journey/06-inspira-coordinator.jpeg';
import imgAuraHealth from '../assets/journey/07-aura-health-3rdplace.jpeg';
import imgBowerAI from '../assets/journey/08-bower-ai.jpeg';
import imgGoogleGemma from '../assets/journey/09-google-gemma.jpeg';
import imgJacHacks from '../assets/journey/10-jachacks-global.jpeg';
import imgProfile from '../assets/about/rohit_profile.png';
import imgHeroBg from '../assets/journey/bits-road.jpg';

// Helper component for counting up numbers dynamically in the viewport
const StatCounter = ({ target, label, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // 1.5s
      const steps = 50;
      const stepTime = duration / steps;
      const increment = target / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div 
      ref={ref} 
      className="group relative flex flex-col items-center p-6 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl backdrop-blur-md hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(20,100,244,0.15)] transition-all duration-500"
    >
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-2xl bg-neutral-950 px-2 py-0.5 rounded-full border border-neutral-800">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-blue-400 mt-2 transition-colors duration-300">
        {count}
        <span className="text-blue-500 font-black">+</span>
      </div>
      <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mt-2 text-center">
        {label}
      </div>
    </div>
  );
};

// Custom Image with Fallback gradient styling
const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-[#0c1e3d] via-[#020617] to-[#042f2e] flex items-center justify-center relative overflow-hidden ${className}`}>
        {/* Animated ambient background element */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e3a8a0f_25%,transparent_25%),linear-gradient(-45deg,#0d94880f_25%,transparent_25%)] bg-[size:20px_20px] animate-pulse"></div>
        <div className="text-center p-6 relative z-10">
          <div className="text-blue-500 text-4xl mb-2">⚡</div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Cinematic Record</span>
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider block mt-1">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setError(true)}
      className={`${className} object-cover`}
    />
  );
};

// Card Hover spotlight effect hook
const useSpotlight = () => {
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };
  return handleMouseMove;
};

const Journey = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const timelineRef = useRef(null);
  const spotlightHandler = useSpotlight();

  // Scroll logic for glowing progress beam
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Full Chapters structured data
  const chapters = [
    {
      id: 1,
      chapterNum: "CHAPTER 01",
      date: "MARCH 8, 2025",
      eventName: "ALTHON TECHNICAL EVENT",
      role: "Event Coordinator & Participant",
      badge: "Leadership",
      location: "MVSR Engineering College",
      image: imgAlthon,
      description: "Managed logistics for 200+ participants across technical tracks while simultaneously competing in the hackathon.",
      story: {
        overview: "Rohit served as an Event Coordinator & Participant at Althon, held at MVSR Engineering College. He managed operations and logistics for hundreds of students.",
        role: "Managed logistics for 200+ participants across various technical tracks while simultaneously competing as a hackathon participant.",
        tech: ["Logistics Coordination", "Resource Scheduling", "Microsoft Excel"],
        challenge: "Balancing event management responsibilities and competitor tasks under a single strict schedule.",
        solution: "Formulated team-coordination workflows and managed registration pipelines for over 200 attendees.",
        learning: "Understood event-scale logistics, crisis resolution, and the importance of multitask coordination under pressure.",
        impact: "First key experience coordinating technical events at MVSR, which set the foundation for future leadership roles."
      }
    },
    {
      id: 2,
      chapterNum: "CHAPTER 02",
      date: "MARCH 24, 2025",
      eventName: "BITS HACKATHON",
      role: "Hackathon Participant",
      badge: "Competitive Innovation",
      location: "BITS Pilani",
      image: imgBits,
      description: "Competed in a 24-hour hackathon, developing and pitching an AI-powered solution in a cross-functional team setting.",
      story: {
        overview: "Joined BITS Hackathon at BITS Pilani, collaborating with cross-functional peers to build a working prototype in a 24-hour window.",
        role: "Core developer and pitch contributor, structuring the backend flow and system architecture.",
        tech: ["Python", "Machine Learning", "Product Pitching", "System Prototyping"],
        challenge: "Designing a viable AI-powered product and preparing a technical pitch within 24 hours.",
        solution: "An AI product prototype and a structured pitch outlining system capabilities.",
        learning: "Gained core rapid prototyping skills and learned how to pitch technical architectures to judges.",
        impact: "First exposure to 24-hour coding events, laying the groundwork for subsequent hackathon victories."
      }
    },
    {
      id: 3,
      chapterNum: "CHAPTER 03",
      date: "MARCH 29, 2025",
      eventName: "MICROSOFT CAMPUS VISIT",
      role: "Student Delegate",
      badge: "Industry Exposure",
      location: "Microsoft India",
      image: imgMicrosoftCampus,
      description: "Selected for Microsoft's student engagement program, attending technical sessions on AI product development and cloud-scale backend systems.",
      story: {
        overview: "Selected to visit Microsoft India's campus as part of their student engagement program.",
        role: "Student Delegate attending technical presentations and engagement panels.",
        tech: ["AI Product Design", "Cloud-Scale Systems", "Azure Ecosystem"],
        challenge: "Connecting academic knowledge with production-level cloud architectures and industry-standard workflows.",
        solution: "Focused on learning production architectures and AI application paradigms.",
        learning: "Learned the values of engineering quality, scalable database schemas, and AI workflow integrations.",
        impact: "Bridged academic theories with industrial standards, motivating the development of Career Orchestrator and Aura Health."
      }
    },
    {
      id: 4,
      chapterNum: "CHAPTER 04",
      date: "FEBRUARY 5, 2026",
      eventName: "FORGE ALUMNI AI CODEATHON",
      role: "1st Place Winner",
      badge: "Winner",
      location: "MVSR Engineering College",
      image: imgForgeWinner,
      description: "Won 1st Place by building EduMentor — an AI-powered academic assistant focused on personalized learning, adaptive guidance, and educational intelligence.",
      story: {
        overview: "Won 1st Place at the Forge Alumni Code-athon at MVSR Engineering College, building 'EduMentor.'",
        role: "Full-stack prototype builder, implementing backend logic and AI system integration.",
        tech: ["Python", "FastAPI", "React.js", "NLP", "REST APIs"],
        challenge: "Delivering a fully functional adaptive learning prototype within a single 24-hour hackathon window.",
        solution: "EduMentor — an adaptive NLP learning engine that adjusts study paths via AI feedback loops, reducing estimated revision time by 30%.",
        learning: "Learned to coordinate FastAPI endpoints with real-time NLP outputs under hackathon constraints.",
        impact: "1st Place victory at Forge Alumni Code-athon, qualifying/shortlisting Rohit for the Microsoft AI Codeathon."
      }
    },
    {
      id: 5,
      chapterNum: "CHAPTER 05",
      date: "FEBRUARY 7, 2026",
      eventName: "MICROSOFT AI CODEATHON",
      role: "National First Runner-Up",
      badge: "National Runner-Up",
      location: "Microsoft India",
      image: imgMicrosoftRunnerup,
      description: "Secured National First Runner-Up by designing Career Orchestrator — a multi-agent AI system capable of skill assessment, role matching, and roadmap generation.",
      story: {
        overview: "Represented MVSR in the Microsoft AI Code-athon and secured the National First Runner-Up position.",
        role: "AI System Architect, designing the agent communication topology and prompt routing pathways.",
        tech: ["Python", "Multi-Agent AI", "FastAPI", "OOP Design Patterns"],
        challenge: "Designing a system where multiple agents exchange structured data reliably without infinite loop failures.",
        solution: "Career Orchestrator — a multi-agent system comprising 3 specialized agents: skill assessment, role matching, and roadmap generation using OOP design patterns and structured JSON outputs.",
        learning: "Mastered multi-agent system topologies, prompt routing, and output validation loops.",
        impact: "National First Runner-Up achievement, demonstrating ability to engineer multi-agent architectures on a national level."
      }
    },
    {
      id: 6,
      chapterNum: "CHAPTER 06",
      date: "MARCH 2026",
      eventName: "INSPIIRA HACKATHON",
      role: "Hackathon Organizer",
      badge: "Organizer",
      location: "MVSR Engineering College",
      image: imgInspira,
      description: "Co-organized the INSPIIRA inter-college hackathon, coordinating 10+ colleges and managing end-to-end event logistics.",
      story: {
        overview: "Served as an organizer for the INSPIIRA inter-college hackathon, coordinating participation across 10+ engineering colleges.",
        role: "Hackathon Organizer managing end-to-end logistics, registration checks, and track coordination.",
        tech: ["Logistics Coordination", "Event Management", "Operations Tracking"],
        challenge: "Managing communication pipelines and schedules for hundreds of participants from various colleges simultaneously.",
        solution: "Check-in protocols, team tracking logs, and organizer schedules.",
        learning: "Learned large-scale inter-collegiate coordination, logistics management, and volunteer orchestration.",
        impact: "Established leadership and organizing capabilities within MVSR's student community."
      }
    },
    {
      id: 7,
      chapterNum: "CHAPTER 07",
      date: "APRIL 17–18, 2026",
      eventName: "AURA HEALTH",
      role: "3rd Place Winner",
      badge: "Healthcare AI",
      location: "Samavarthan Hackathon",
      image: imgAuraHealth,
      description: "Secured 3rd Place by building Aura Health — an AI-powered Digital Twin Healthcare platform capable of predictive health analysis and biological trend monitoring.",
      story: {
        overview: "Competed in the Aethronix Hackathon (Samavarthan) and won 3rd Place with Aura Health, an AI-powered Digital Twin platform.",
        role: "Backend developer and data model builder.",
        tech: ["Python", "Predictive Modeling", "FastAPI", "React"],
        challenge: "Designing predictive health algorithms that process biological trends accurately under hackathon constraints.",
        solution: "Aura Health — an AI-powered Digital Twin Healthcare platform capable of predictive health analysis and biological trend monitoring.",
        learning: "Learned healthcare predictive algorithms, patient metrics dashboarding, and HIPAA security guidelines.",
        impact: "Expanded AI toolkit into health-tech and secured 3rd Place in a major hackathon."
      }
    },
    {
      id: 8,
      chapterNum: "CHAPTER 08",
      date: "MAY 10, 2026",
      eventName: "BOWER AI HACKATHON",
      role: "AlterScore Creator",
      badge: "FinTech AI",
      location: "Bower AI Arena",
      image: imgBowerAI,
      description: "Designed AlterScore — an AI-powered financial inclusion platform leveraging explainable AI and ethical underwriting systems.",
      story: {
        overview: "Participated in the Bower AI Hackathon, architecting 'AlterScore' to evaluate creditworthiness for underserved populations.",
        role: "Model architect designing alternative credit scoring algorithms.",
        tech: ["Explainable AI", "Ethical Underwriting", "Python", "System Design"],
        challenge: "Scoring creditworthiness fairly and transparently without relying on traditional credit histories.",
        solution: "AlterScore — an AI-powered financial inclusion platform leveraging explainable AI and ethical underwriting systems.",
        learning: "Explored explainable AI patterns (XAI), credit risk forecasting, and alternative data ingestion.",
        impact: "Demonstrated capability of linking advanced machine learning with fintech underwriting compliance."
      }
    },
    {
      id: 9,
      chapterNum: "CHAPTER 09",
      date: "MAY 29, 2026",
      eventName: "BUILD WITH GEMMA 4",
      role: "Google Developer Participant",
      badge: "Google AI",
      location: "Google for Developers",
      image: imgGoogleGemma,
      description: "Participated in Google's Gemma 4 developer event, exploring modern AI deployment workflows and open-source LLM engineering.",
      story: {
        overview: "Invited to participate in Google's Gemma 4 developer event, working with open-weights LLMs.",
        role: "Developer participant exploring LLM optimization and engineering toolchains.",
        tech: ["Gemma 4", "LLM Engineering", "Google Developer Ecosystem"],
        challenge: "Understanding local performance bottlenecks and prompt engineering paradigms for Google's open weights models.",
        solution: "Prototyped prompt routing pipelines and local inference wrappers using Gemma 4.",
        learning: "Learned open-source model parameters, quantization processes, and Gemma 4 optimizations.",
        impact: "Broadened expertise in LLM infrastructure and Google Developer ecosystem frameworks."
      }
    },
    {
      id: 10,
      chapterNum: "CHAPTER 10",
      date: "MAY 20, 2026",
      eventName: "JACHACKS GLOBAL HYDERABAD",
      role: "Startup Innovator",
      badge: "Startup Ecosystem",
      location: "Draper Startup House",
      image: imgJacHacks,
      description: "Connected with founders, innovators, and developers while gaining exposure to startup building and product strategy.",
      story: {
        overview: "Participated in JacHacks Global Hyderabad, held at Draper Startup House, engaging with tech founders.",
        role: "Startup participant connecting with builders and early-stage startup mentors.",
        tech: ["Startup Strategy", "Product Design", "Entrepreneurship"],
        challenge: "Transitioning from purely technical system architectures to product strategy and market viability planning.",
        solution: "Mock product canvases and investor-pitch architectures.",
        learning: "Gained core knowledge of product-market fit, startup acceleration, and lean launch strategies.",
        impact: "Focused engineering roadmap on product-driven solutions and entrepreneurship foundations."
      }
    },
    {
      id: 11,
      chapterNum: "CHAPTER 11",
      date: "2026 – PRESENT",
      eventName: "TECHNICAL LEAD",
      role: "AIMERS Student Body Lead",
      badge: "Technical Leadership",
      location: "AIMERS Student Body",
      image: imgProfile,
      description: "Leading technical direction, conducting reviews, coordinating cross-team AI projects, and onboarding junior members to backend and AI toolchains.",
      story: {
        overview: "Assumed leadership of the AIMERS Student Body, the college's AI/ML community at MVSR Engineering College.",
        role: "Leading technical direction and project mentorship; conducting reviews and coordinating cross-team AI projects.",
        tech: ["Technical Mentorship", "System Architecture", "Backend Toolchains", "AI Frameworks"],
        challenge: "Onboarding student developers of varying skill levels into production-grade backend and AI toolchains.",
        solution: "Guided repository templates, curriculum workflows, and automated check-ins for the community.",
        learning: "Developed leadership, communication, architectural validation, and student mentoring capabilities.",
        impact: "Mentored dozens of student builders and coordinated MVSR's AI/ML ecosystem."
      }
    }
  ];

  const achievementBadges = [
    { text: "🏆 1st Place — Forge Alumni AI Codeathon", glow: "shadow-[0_0_15px_rgba(245,158,11,0.3)] border-amber-500/30 text-amber-300" },
    { text: "🥈 National First Runner-Up — Microsoft AI Codeathon", glow: "shadow-[0_0_15px_rgba(20,100,244,0.3)] border-blue-500/30 text-blue-300" },
    { text: "🥉 3rd Place — Aura Health Hackathon", glow: "shadow-[0_0_15px_rgba(209,113,90,0.3)] border-orange-500/30 text-orange-300" },
    { text: "🚀 Technical Lead — AIMERS", glow: "shadow-[0_0_15px_rgba(34,197,94,0.3)] border-green-500/30 text-green-300" },
    { text: "🤖 Google Build With Gemma 4", glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)] border-purple-500/30 text-purple-300" },
    { text: "🏢 Microsoft Campus Visit", glow: "shadow-[0_0_15px_rgba(6,182,212,0.3)] border-cyan-500/30 text-cyan-300" }
  ];

  const chips = [
    "Autonomous AI Systems",
    "Multi-Agent Intelligence",
    "Predictive Intelligence",
    "Healthcare AI",
    "Backend Architecture",
    "AI Infrastructure",
    "Startup Building"
  ];

  return (
    <section 
      id="journey" 
      className="bg-[#030712] text-white w-full relative overflow-hidden font-sans border-t border-neutral-900"
    >
      {/* 1. Cinematic Hero Section */}
      <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Parallax Zoom Background */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <SafeImage 
            src={imgHeroBg} 
            alt="BITS Hackathon Road Background" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
          {/* 75% Dark Overlay */}
          <div className="absolute inset-0 bg-black/75 z-10"></div>
          {/* Ambient blue/aqua bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#030712] to-transparent z-20"></div>
        </motion.div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none z-10"></div>

        {/* Floating Particles (Framer Motion) */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.8, 0.1]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-blue-500/30 rounded-full px-5 py-1.5 text-xs text-blue-400 font-bold mb-6 bg-blue-500/5 shadow-md">
              Cinematic Achievement Album
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              Journey Through <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">
                Innovation
              </span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              From student hackathons to AI systems, national competitions, industry experiences, and technical leadership. This is the story behind the engineer.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Animated Stats Counters */}
      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-20 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          <StatCounter target={10} label="Hackathons" icon="🏆" />
          <StatCounter target={5} label="Awards & Wins" icon="🥇" />
          <StatCounter target={8} label="AI Systems Built" icon="🤖" />
          <StatCounter target={12} label="Projects Done" icon="🚀" />
          <StatCounter target={3} label="Industry Exp" icon="🏢" />
          <StatCounter target={4} label="Leadership Roles" icon="⚡" />
        </div>
      </div>

      {/* 3. Glowing Timeline Container */}
      <div ref={timelineRef} className="relative max-w-6xl mx-auto px-6 py-12 md:py-24">
        
        {/* Timeline glowing energy beam */}
        {/* Base Timeline Line (dark) */}
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-800 transform -translate-x-1/2 z-0"></div>
        {/* Scrolling Progress beam */}
        <motion.div 
          className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-600 transform -translate-x-1/2 z-0 origin-top"
          style={{ scaleY }}
        />

        {/* Render Chapters */}
        {chapters.map((chapter, index) => {
          const isEven = index % 2 === 0;
          const isSpecial = chapter.id === 5; // Microsoft AI Codeathon Centerpiece
          const isContain = chapter.id === 5 || chapter.id === 10;
          
          return (
            <React.Fragment key={chapter.id}>
              {/* Timeline Row */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-16 md:mb-32">
                
                {/* Chapter Card container */}
                <motion.div 
                  className={`w-full md:w-[44%] ${isEven ? 'md:order-3' : 'md:order-1'} pl-8 md:pl-0 z-10`}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  {/* Card */}
                  <div
                    onMouseMove={spotlightHandler}
                    onClick={() => setSelectedChapter(chapter)}
                    className={`cursor-pointer group relative bg-neutral-900/30 backdrop-blur-md rounded-[2rem] p-6 border transition-all duration-500 overflow-hidden ${
                      isSpecial 
                        ? 'border-amber-500/50 shadow-[0_0_35px_rgba(245,158,11,0.25)] hover:shadow-[0_0_50px_rgba(245,158,11,0.4)] scale-[1.02] md:scale-[1.03]' 
                        : 'border-neutral-800/80 hover:border-blue-500/40 hover:shadow-[0_15px_40px_rgba(20,100,244,0.15)] hover:scale-[1.01]'
                    }`}
                  >
                    {/* Custom mouse spotlight gradient */}
                    <div 
                      className={`pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 rounded-[2rem]`}
                      style={{
                        background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${
                          isSpecial ? 'rgba(245, 158, 11, 0.12)' : 'rgba(20, 100, 244, 0.12)'
                        }, transparent 50%)`
                      }}
                    />

                    {/* Glowing highlight strip */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-b-[2rem] ${
                      isSpecial ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600' : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                    }`} />

                    {/* Special floating gold particles for Chapter 5 */}
                    {isSpecial && (
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-amber-400/60"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              bottom: `0%`
                            }}
                            animate={{
                              y: [0, -180],
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              duration: 3 + Math.random() * 3,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.5
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Image Block */}
                    <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden mb-6 border border-white/5 bg-neutral-950">
                      <SafeImage 
                        src={chapter.image} 
                        alt={chapter.eventName} 
                        className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                          isContain ? 'object-contain bg-neutral-950' : 'object-cover object-center'
                        }`}
                      />
                      {/* Dark gradient mask on bottom of photo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      {/* Chapter badge Overlay */}
                      <div className={`absolute top-4 left-4 text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full border ${
                        isSpecial 
                          ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                          : 'bg-blue-500/20 border-blue-500/40 text-blue-300'
                      }`}>
                        {chapter.chapterNum}
                      </div>

                      {/* Achievement Ribbon overlay for Chapter 5 */}
                      {isSpecial && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-[9px] font-extrabold px-3 py-1 rounded-full shadow-[0_4px_12px_rgba(245,158,11,0.4)] flex items-center gap-1 animate-pulse">
                          <span>🏆</span> NATIONAL RUNNER-UP
                        </div>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-mono text-[10px] text-gray-500 tracking-wider uppercase">{chapter.date}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-bold border uppercase tracking-wider ${
                        isSpecial 
                          ? 'bg-amber-950/40 border-amber-500/30 text-amber-400' 
                          : 'bg-neutral-800/80 border-neutral-700 text-cyan-400'
                      }`}>
                        {chapter.badge}
                      </span>
                    </div>

                    <h3 className={`text-xl font-extrabold mb-1 tracking-tight leading-snug group-hover:text-blue-400 transition-colors ${
                      isSpecial ? 'text-amber-400 font-black' : 'text-white'
                    }`}>
                      {chapter.eventName}
                    </h3>
                    
                    <p className={`text-xs font-semibold mb-4 ${isSpecial ? 'text-amber-300/80' : 'text-blue-300'}`}>
                      {chapter.role}
                    </p>

                    <p className="text-gray-400 text-xs leading-relaxed font-light mb-6">
                      {chapter.description}
                    </p>

                    {/* View Story Button */}
                    <button className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 border ${
                      isSpecial 
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black border-transparent hover:brightness-110 shadow-lg shadow-amber-500/10'
                        : 'bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-blue-500/30'
                    }`}>
                      <span>View Story</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>

                  </div>
                </motion.div>

                {/* Timeline node in middle */}
                <div className="absolute left-3 md:left-1/2 top-8 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-20 md:order-2">
                  <div className={`w-8 h-8 rounded-full bg-[#030712] border-4 flex items-center justify-center transition-all duration-500 ${
                    isSpecial ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]' : 'border-blue-500 shadow-[0_0_15px_rgba(20,100,244,0.4)]'
                  }`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${isSpecial ? 'bg-amber-400 animate-ping' : 'bg-cyan-400 animate-ping'}`}></div>
                  </div>
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block w-[44%] md:order-2"></div>

              </div>

              {/* SPECIAL INSERT: Achievement Wall immediately after Chapter 5 */}
              {chapter.id === 5 && (
                <div className="relative w-full z-10 mb-20 md:mb-32 pl-8 md:pl-0">
                  <motion.div
                    className="w-full bg-neutral-900/20 border border-neutral-800/80 rounded-[2.5rem] p-6 md:p-10 backdrop-blur-md relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Glow and grid overlay */}
                    <div className="absolute inset-0 bg-grid-[#ffffff02] pointer-events-none"></div>
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

                    <div className="text-center mb-8 relative z-10">
                      <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest block mb-2">Portfolio Milestones</span>
                      <h4 className="text-2xl md:text-3xl font-black tracking-tight">Achievement Wall</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
                      {achievementBadges.map((badge, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className={`flex items-center gap-3 p-4 bg-neutral-950/80 border rounded-2xl backdrop-blur-sm ${badge.glow} hover:scale-[1.02] transition-all duration-300`}
                        >
                          <span className="text-xs md:text-sm font-semibold tracking-wide leading-snug">{badge.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </React.Fragment>
          );
        })}

      </div>

      {/* 4. Ending Section */}
      <div className="relative w-full py-24 md:py-32 px-6 bg-gradient-to-b from-transparent to-black relative z-10 text-center">
        
        {/* Glow behind end */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              The Journey Continues...
            </h2>
            
            {/* Animated glowing chips */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-2xl mx-auto">
              {chips.map((chip, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05, borderColor: "rgba(20,100,244,0.6)" }}
                  className="px-4 py-2 text-xs md:text-sm font-bold bg-neutral-900 border border-neutral-800 text-gray-300 rounded-full cursor-default transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,100,244,0.25)] hover:text-white"
                >
                  ⚡ {chip}
                </motion.span>
              ))}
            </div>

            {/* Final Quote */}
            <div className="relative max-w-2xl mx-auto pt-8 border-t border-neutral-900">
              <div className="text-4xl text-blue-500/30 font-serif absolute -top-2 left-0 pointer-events-none">“</div>
              <blockquote className="text-base md:text-xl font-light italic leading-relaxed text-gray-300 mb-6 font-serif px-6">
                Every hackathon sharpened my thinking. Every project expanded my vision. Every milestone brought me one step closer to building impactful AI systems.
              </blockquote>
              <cite className="text-xs md:text-sm font-bold tracking-widest uppercase text-blue-400 not-italic">
                — Rohit Palaram
              </cite>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 5. Immersive Fullscreen View Story Modal */}
      <AnimatePresence>
        {selectedChapter && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center overflow-y-auto p-4 md:p-8"
            onClick={() => setSelectedChapter(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative bg-neutral-950/95 border border-neutral-800 rounded-[2.5rem] w-full max-w-5xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row min-h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close button */}
              <button 
                onClick={() => setSelectedChapter(null)}
                className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-black/40 border border-white/10 hover:border-white/30 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Column: Image Media Panel */}
              <div className="w-full md:w-1/2 relative bg-neutral-900 border-b md:border-b-0 md:border-r border-neutral-800 flex flex-col justify-between overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <SafeImage 
                    src={selectedChapter.image} 
                    alt={selectedChapter.eventName} 
                    className={`w-full h-full filter brightness-[0.7] group-hover:scale-105 ${
                      selectedChapter.id === 5 || selectedChapter.id === 10 ? 'object-contain bg-neutral-950' : 'object-cover object-center'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-black/20"></div>
                </div>

                {/* Overlaid Title context info (Top) */}
                <div className="relative z-10 p-8 pt-12">
                  <span className="text-[10px] font-mono tracking-widest text-blue-400 font-bold bg-blue-950/50 border border-blue-500/20 rounded-full px-3 py-1">
                    {selectedChapter.chapterNum}
                  </span>
                </div>

                {/* Overlaid Details context info (Bottom) */}
                <div className="relative z-10 p-8 bg-gradient-to-t from-neutral-950 to-transparent">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">{selectedChapter.date}</span>
                  <h2 className="text-3xl font-black text-white leading-tight mb-2 tracking-tight">
                    {selectedChapter.eventName}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 rounded-full text-[9px] font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      📍 {selectedChapter.location}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[9px] font-mono bg-neutral-900 border border-neutral-800 text-gray-300">
                      🎖️ {selectedChapter.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Immersive story details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[85vh] md:max-h-[750px]">
                
                {/* Role and summary */}
                <div className="mb-8 border-b border-neutral-900 pb-6">
                  <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest block mb-2">My Position</span>
                  <p className="text-xl font-bold text-white leading-snug">{selectedChapter.role}</p>
                </div>

                {/* Story blocks */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-2">Overview</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{selectedChapter.story.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-2">My Specific Role</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{selectedChapter.story.role}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedChapter.story.tech.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#0c1020] border border-blue-900/30 text-blue-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-900">
                    <div>
                      <h4 className="text-[10px] font-mono text-red-400/80 uppercase tracking-widest font-black mb-2">The Challenge</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">{selectedChapter.story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-green-400/80 uppercase tracking-widest font-black mb-2">What I Built</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">{selectedChapter.story.solution}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-900 space-y-4">
                    <div>
                      <h4 className="text-[10px] font-mono text-yellow-400/80 uppercase tracking-widest font-black mb-2">Key Learning</h4>
                      <p className="text-xs text-gray-300 italic leading-relaxed font-serif">
                        "{selectedChapter.story.learning}"
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-indigo-400/80 uppercase tracking-widest font-black mb-2">Impact on My Journey</h4>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">{selectedChapter.story.impact}</p>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Journey;
