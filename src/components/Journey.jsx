import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Magazine3D.css';

// Import local image assets (exact assets from portfolio)
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

// Fallback safe image
const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return (
      <div className={`bg-gradient-to-br from-[#0a1226] via-[#030712] to-[#041c2a] flex items-center justify-center relative overflow-hidden ${className}`}>
        <div className="text-center p-3 relative z-10">
          <div className="text-blue-500 text-2xl mb-1">⚡</div>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">{alt}</span>
        </div>
      </div>
    );
  }
  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy"
      onError={() => setError(true)}
      className={`${className} object-cover`}
    />
  );
};

const Journey = () => {
  // Real portfolio experience data
  const chapters = [
    {
      id: 1,
      chapterNum: "01",
      date: "MARCH 8, 2025",
      eventName: "ALTHON TECHNICAL EVENT",
      role: "Event Coordinator & Participant",
      badge: "Leadership",
      location: "MVSR Engineering College",
      image: imgAlthon,
      description: "Managed logistics for 200+ participants across technical tracks while simultaneously competing in the hackathon.",
      quote: "Balancing event management responsibilities and competitor tasks under a single strict schedule.",
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
      chapterNum: "02",
      date: "MARCH 24, 2025",
      eventName: "BITS HACKATHON",
      role: "Hackathon Participant",
      badge: "Hackathon",
      location: "BITS Pilani",
      image: imgBits,
      description: "Competed in a 24-hour hackathon, developing and pitching an AI-powered solution in a cross-functional team setting.",
      quote: "First exposure to 24-hour coding events, laying the groundwork for subsequent hackathon victories.",
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
      chapterNum: "03",
      date: "MARCH 29, 2025",
      eventName: "MICROSOFT CAMPUS VISIT",
      role: "Student Delegate",
      badge: "Industry",
      location: "Microsoft India",
      image: imgMicrosoftCampus,
      description: "Selected for Microsoft's student engagement program, attending technical sessions on AI product development and cloud-scale backend systems.",
      quote: "Bridged academic theories with industrial standards, motivating the development of Career Orchestrator and Aura Health.",
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
      chapterNum: "04",
      date: "FEBRUARY 5, 2026",
      eventName: "FORGE ALUMNUS AI CODEATHON",
      role: "1st Place Winner",
      badge: "1st Place Winner",
      location: "MVSR Engineering College",
      image: imgForgeWinner,
      description: "Won 1st Place by building EduMentor — an AI-powered academic assistant focused on personalized learning, adaptive guidance, and educational intelligence.",
      quote: "An adaptive NLP learning engine that adjusts study paths via AI feedback loops, reducing estimated revision time by 30%.",
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
      chapterNum: "05",
      date: "FEBRUARY 7, 2026",
      eventName: "MICROSOFT AI CODE-ATHON",
      role: "National 1st Runner-Up",
      badge: "National 1st Runner-Up",
      location: "Microsoft India",
      image: imgMicrosoftRunnerup,
      description: "Secured National First Runner-Up by designing Career Orchestrator — a multi-agent AI system capable of skill assessment, role matching, and roadmap generation.",
      quote: "Engineered multi-agent systems comprising 3 specialized agents using OOP design patterns and structured JSON outputs.",
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
      chapterNum: "06",
      date: "MARCH 2026",
      eventName: "INSPIRA HACKATHON",
      role: "Hackathon Organizer",
      badge: "Organizer",
      location: "MVSR Engineering College",
      image: imgInspira,
      description: "Co-organized the INSPIRA inter-college hackathon, coordinating 10+ colleges and managing end-to-end event logistics.",
      quote: "Managed logistics and communications for 200+ participants across 10+ engineering colleges.",
      story: {
        overview: "Served as an organizer for the INSPIRA inter-college hackathon, coordinating participation across 10+ engineering colleges.",
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
      chapterNum: "07",
      date: "APRIL 17–18, 2026",
      eventName: "Samavarthan Hackathon",
      role: "3rd Place Winner",
      badge: "Healthcare AI",
      location: "MVSR Engineering College",
      image: imgAuraHealth,
      description: "Secured 3rd Place by building Aura Health — an AI-powered Digital Twin Healthcare platform capable of predictive health analysis and biological trend monitoring.",
      quote: "AI-powered Digital Twin Healthcare platform capable of predictive health analysis and biological trend monitoring.",
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
      chapterNum: "08",
      date: "MAY 10, 2026",
      eventName: "BOWER AI HACKATHON",
      role: "AlterScore Creator",
      badge: "FinTech AI",
      location: "Bower AI Arena",
      image: imgBowerAI,
      description: "Designed AlterScore — an AI-powered financial inclusion platform leveraging explainable AI and ethical underwriting systems.",
      quote: "Engineered alternative credit scoring algorithms using explainable AI (XAI) models.",
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
      chapterNum: "09",
      date: "MAY 29, 2026",
      eventName: "BUILD WITH GEMMA 4",
      role: "Google Developer Participant",
      badge: "Google AI",
      location: "Google for Developers",
      image: imgGoogleGemma,
      description: "Participated in Google's Gemma 4 developer event, exploring modern AI deployment workflows and open-source LLM engineering.",
      quote: "Prototyped prompt routing pipelines and local inference optimization with Google's Gemma 4.",
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
      chapterNum: "10",
      date: "MAY 20, 2026",
      eventName: "JACHACKS GLOBAL HYDERABAD",
      role: "Startup Innovator",
      badge: "Startup Ecosystem",
      location: "Draper Startup House",
      image: imgJacHacks,
      description: "Connected with founders, innovators, and developers while gaining exposure to startup building and product strategy.",
      quote: "Transitioned technical system architectures into lean launch product strategies and market viability models.",
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
      chapterNum: "11",
      date: "2026 – PRESENT",
      eventName: "TECHNICAL LEAD",
      role: "AIMERS Student Body Lead",
      badge: "Leadership",
      location: "AIMERS Student Body",
      image: imgProfile,
      description: "Leading technical direction, conducting reviews, coordinating cross-team AI projects, and onboarding junior members to backend and AI toolchains.",
      quote: "Mentoring student developers across production-grade backend, multi-agent AI, and cloud toolchains.",
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

  // 4 Spreads matching the reference template's 4-trigger state
  // Spread 1 (Page 1 static base + Page 2 Front Cover):
  // Spread 2 (Pages 3 & 4): Hackathon victories & quote layout
  // Spread 3 (Pages 5 & 6): AI & Healthcare Systems with center image reveal
  // Spread 4 (Pages 7 & 8): Leadership & 3-column content sections
  const spreads = [
    {
      id: 1,
      pageNumbers: "01 02",
      left: {
        type: 'intro',
        title: 'ROHIT PALARAM',
        subtitle: 'ENGINEERING CHRONICLE',
        volume: 'VOL. 2025–2026',
        desc: 'A physical-feel 3D interactive magazine exploring hackathons, national recognitions, technical leadership, and production software milestones.',
      },
      right: chapters[0]
    },
    {
      id: 2,
      pageNumbers: "03 04",
      left: chapters[3], // EduMentor Forge 1st Place
      right: chapters[4] // Microsoft National 1st Runner-Up
    },
    {
      id: 3,
      pageNumbers: "05 06",
      left: chapters[6], // Aura Health 3rd Place
      right: chapters[7] // Bower AI AlterScore
    },
    {
      id: 4,
      pageNumbers: "07 08",
      left: chapters[10], // AIMERS Technical Lead
      right: {
        type: 'epilogue',
        title: 'THE JOURNEY CONTINUES',
        sections: [
          {
            title: "Autonomous AI",
            desc: "Focusing on agentic workflows, multi-LLM orchestration, and resilient backend microservices."
          },
          {
            title: "Scalable Systems",
            desc: "Architecting high-throughput REST APIs and database-backed applications with PostgreSQL and MongoDB."
          },
          {
            title: "Leadership",
            desc: "Mentoring junior engineers and driving technical initiatives across the college ecosystem."
          }
        ]
      }
    }
  ];

  const [activeTrigger, setActiveTrigger] = useState(1);
  const [selectedChapter, setSelectedChapter] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedChapter) return;
      if (e.key === 'ArrowRight' && activeTrigger < 4) {
        setActiveTrigger(prev => prev + 1);
      }
      if (e.key === 'ArrowLeft' && activeTrigger > 1) {
        setActiveTrigger(prev => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTrigger, selectedChapter]);

  return (
    <section 
      id="journey" 
      className="bg-[#030712] text-white py-20 md:py-28 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-neutral-900 select-none"
    >
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-block border border-blue-500/30 rounded-full px-4 py-1 text-xs text-blue-400 font-bold mb-3 bg-blue-500/5 shadow-sm">
              3D Page-Flip Magazine
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-2">
              Journey Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400">Innovation</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
              Turn pages forward or backward with the circular controls or keyboard arrow keys to explore verified milestones.
            </p>
          </div>

          {/* Quick Page Indicator / Controls */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mr-2">
              SPREAD <span className="text-blue-400 font-bold">{activeTrigger}</span> / 4
            </span>
            <button
              onClick={() => setActiveTrigger(prev => Math.max(1, prev - 1))}
              disabled={activeTrigger === 1}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                activeTrigger === 1
                  ? 'border-neutral-800 text-neutral-600 cursor-not-allowed opacity-40'
                  : 'border-blue-500/40 text-white bg-blue-950/40 hover:bg-blue-600 hover:border-blue-400 shadow-[0_0_15px_rgba(20,100,244,0.3)]'
              }`}
              aria-label="Previous Page"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveTrigger(prev => Math.min(4, prev + 1))}
              disabled={activeTrigger === 4}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                activeTrigger === 4
                  ? 'border-neutral-800 text-neutral-600 cursor-not-allowed opacity-40'
                  : 'border-blue-500/40 text-white bg-blue-950/40 hover:bg-blue-600 hover:border-blue-400 shadow-[0_0_15px_rgba(20,100,244,0.3)]'
              }`}
              aria-label="Next Page"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3D Magazine Stage from Reference */}
        <div className="mag-stage">
          <div className="mag-book">
            
            {/* Center Spine Glow Line */}
            <div className="hidden md:block mag-spine" />

            {/* SPREAD 1: Cover & Intro */}
            {/* Leaf 1: Static Base Surface (Left) */}
            <div className="mag-leaf mag-leaf-base">
              <div className="mag-inner mag-inner-left p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="mag-logo">ROHIT.DEV</span>
                    <span className="text-[10px] font-mono text-cyan-400 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                      VOL. 2025–2026
                    </span>
                  </div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-2 font-semibold">
                    ENGINEERING CHRONICLE
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.05] mb-5">
                    ROHIT PALARAM
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    A physical-feel 3D interactive magazine exploring hackathons, national recognitions, technical leadership, and production software milestones.
                  </p>
                </div>

                <div>
                  <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20 mb-6 backdrop-blur-sm">
                    <div className="text-[11px] font-mono text-blue-300 uppercase tracking-wider font-semibold mb-1">
                      ✦ Turn pages with Next &rarr;
                    </div>
                    <p className="text-[11px] text-gray-400">
                      Click the circular control on the right to flip the 3D cover open.
                    </p>
                  </div>
                  <div className="mag-pagenumber">
                    01 02
                  </div>
                </div>
              </div>
            </div>

            {/* Leaf 2: Front Cover Leaf (Right, flips at Trigger >= 2) */}
            <div 
              className={`mag-leaf ${activeTrigger >= 2 ? 'flipped' : 'active-right'}`}
              style={{ zIndex: activeTrigger >= 2 ? 1 : 8 }}
            >
              <div className="mag-inner p-8 flex flex-col justify-between">
                {/* Reference Hamburger Decor */}
                <div className="mag-hamburger">
                  <div className="mag-hamburger-line w-5" />
                  <div className="mag-hamburger-line w-4" />
                  <div className="mag-hamburger-line w-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-500/25 px-2.5 py-0.5 rounded-full">
                      CHAPTER 01
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase mr-10">
                      {chapters[0].date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
                    {chapters[0].eventName}
                  </h3>
                  <p className="text-xs font-semibold text-blue-300 mb-3">
                    {chapters[0].role}
                  </p>

                  <div className="w-full h-36 rounded-xl overflow-hidden mb-3 border border-white/10 relative mag-clip-image">
                    <SafeImage
                      src={chapters[0].image}
                      alt={chapters[0].eventName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300">
                      {chapters[0].badge}
                    </span>
                  </div>

                  <p className="text-gray-300/90 text-xs leading-relaxed line-clamp-3 font-light">
                    {chapters[0].description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 mt-auto">
                  <span className="text-[10px] font-mono text-gray-500">
                    📍 {chapters[0].location}
                  </span>
                  <button
                    onClick={() => setSelectedChapter(chapters[0])}
                    className="text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Story</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Circular Next Button from Reference */}
                <div 
                  className="mag-control next"
                  onClick={() => setActiveTrigger(2)}
                  title="Turn to Chapter 2"
                >
                  <svg className="w-3.5 h-3.5 text-cyan-400 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* SPREAD 2: Leaf 3 & 4 (Forge Winner + Microsoft National Runner-Up) */}
            {/* Leaf 3 (Back of Leaf 2, visible on the left when flipped) */}
            <div 
              className={`mag-leaf mag-leaf-backface ${activeTrigger >= 2 ? 'flipped' : ''}`}
              style={{ zIndex: activeTrigger >= 2 ? 7 : 2 }}
            >
              <div className="mag-inner mag-inner-left p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 bg-blue-950/50 border border-blue-500/25 px-2.5 py-0.5 rounded-full">
                      CHAPTER 04
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">
                      {chapters[3].date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
                    {chapters[3].eventName}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-300 mb-3">
                    {chapters[3].role}
                  </p>

                  <div className="w-full h-36 rounded-xl overflow-hidden mb-3 border border-white/10 relative mag-clip-image">
                    <SafeImage
                      src={chapters[3].image}
                      alt={chapters[3].eventName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      🏆 {chapters[3].badge}
                    </span>
                  </div>

                  <p className="text-gray-300/90 text-xs leading-relaxed line-clamp-3 font-light">
                    {chapters[3].description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 mt-auto">
                  <span className="text-[10px] font-mono text-gray-500">
                    📍 {chapters[3].location}
                  </span>
                  <button
                    onClick={() => setSelectedChapter(chapters[3])}
                    className="text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Story</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Circular Prev Button */}
                <div 
                  className="mag-control"
                  onClick={() => setActiveTrigger(1)}
                  title="Turn back"
                >
                  <svg className="w-3.5 h-3.5 text-cyan-400 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>

                <div className="mag-pagenumber">
                  03 04
                </div>
              </div>
            </div>

            {/* Leaf 4 (Right of Spread 2, flips at Trigger >= 3) */}
            <div 
              className={`mag-leaf ${activeTrigger >= 3 ? 'flipped' : 'active-right'}`}
              style={{ zIndex: activeTrigger >= 3 ? 2 : 6 }}
            >
              <div className="mag-inner p-8 flex flex-col justify-between">
                <div className="mag-hamburger">
                  <div className="mag-hamburger-line w-5" />
                  <div className="mag-hamburger-line w-4" />
                  <div className="mag-hamburger-line w-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-500/25 px-2.5 py-0.5 rounded-full">
                      CHAPTER 05
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase mr-10">
                      {chapters[4].date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight leading-snug mb-1">
                    {chapters[4].eventName}
                  </h3>
                  <p className="text-xs font-semibold text-blue-300 mb-3">
                    {chapters[4].role}
                  </p>

                  <div className="w-full h-36 rounded-xl overflow-hidden mb-3 border border-amber-500/30 relative mag-clip-image">
                    <SafeImage
                      src={chapters[4].image}
                      alt={chapters[4].eventName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      🥈 {chapters[4].badge}
                    </span>
                  </div>

                  <p className="text-gray-300/90 text-xs leading-relaxed line-clamp-3 font-light">
                    {chapters[4].description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 mt-auto">
                  <span className="text-[10px] font-mono text-gray-500">
                    📍 {chapters[4].location}
                  </span>
                  <button
                    onClick={() => setSelectedChapter(chapters[4])}
                    className="text-xs font-semibold text-amber-400 hover:text-yellow-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Story</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div 
                  className="mag-control next"
                  onClick={() => setActiveTrigger(3)}
                  title="Turn to Chapter 6"
                >
                  <svg className="w-3.5 h-3.5 text-cyan-400 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* SPREAD 3: Leaf 5 & 6 (Aura Health + Bower AI) */}
            {/* Leaf 5 (Back of Leaf 4, visible on left when flipped) */}
            <div 
              className={`mag-leaf mag-leaf-backface ${activeTrigger >= 3 ? 'flipped' : ''}`}
              style={{ zIndex: activeTrigger >= 3 ? 6 : 3 }}
            >
              <div className="mag-inner mag-inner-left p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 bg-blue-950/50 border border-blue-500/25 px-2.5 py-0.5 rounded-full">
                      CHAPTER 07
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">
                      {chapters[6].date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
                    {chapters[6].eventName}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-300 mb-3">
                    {chapters[6].role}
                  </p>

                  <div className="w-full h-36 rounded-xl overflow-hidden mb-3 border border-white/10 relative mag-clip-image">
                    <SafeImage
                      src={chapters[6].image}
                      alt={chapters[6].eventName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                      🥉 {chapters[6].badge}
                    </span>
                  </div>

                  <p className="text-gray-300/90 text-xs leading-relaxed line-clamp-3 font-light">
                    {chapters[6].description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 mt-auto">
                  <span className="text-[10px] font-mono text-gray-500">
                    📍 {chapters[6].location}
                  </span>
                  <button
                    onClick={() => setSelectedChapter(chapters[6])}
                    className="text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Story</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div 
                  className="mag-control"
                  onClick={() => setActiveTrigger(2)}
                  title="Turn back"
                >
                  <svg className="w-3.5 h-3.5 text-cyan-400 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>

                <div className="mag-pagenumber">
                  05 06
                </div>
              </div>
            </div>

            {/* Leaf 6 (Right of Spread 3, flips at Trigger >= 4) */}
            <div 
              className={`mag-leaf ${activeTrigger >= 4 ? 'flipped' : 'active-right'}`}
              style={{ zIndex: activeTrigger >= 4 ? 3 : 5 }}
            >
              <div className="mag-inner p-8 flex flex-col justify-between">
                <div className="mag-hamburger">
                  <div className="mag-hamburger-line w-5" />
                  <div className="mag-hamburger-line w-4" />
                  <div className="mag-hamburger-line w-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/50 border border-cyan-500/25 px-2.5 py-0.5 rounded-full">
                      CHAPTER 08
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase mr-10">
                      {chapters[7].date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
                    {chapters[7].eventName}
                  </h3>
                  <p className="text-xs font-semibold text-blue-300 mb-3">
                    {chapters[7].role}
                  </p>

                  <div className="w-full h-36 rounded-xl overflow-hidden mb-3 border border-white/10 relative mag-clip-image">
                    <SafeImage
                      src={chapters[7].image}
                      alt={chapters[7].eventName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
                      {chapters[7].badge}
                    </span>
                  </div>

                  <p className="text-gray-300/90 text-xs leading-relaxed line-clamp-3 font-light">
                    {chapters[7].description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 mt-auto">
                  <span className="text-[10px] font-mono text-gray-500">
                    📍 {chapters[7].location}
                  </span>
                  <button
                    onClick={() => setSelectedChapter(chapters[7])}
                    className="text-xs font-semibold text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Story</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div 
                  className="mag-control next"
                  onClick={() => setActiveTrigger(4)}
                  title="Turn to Chapter 11"
                >
                  <svg className="w-3.5 h-3.5 text-cyan-400 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* SPREAD 4: Leaf 7 & 8 (AIMERS Leadership + 3-Section Epilogue) */}
            {/* Leaf 7 (Back of Leaf 6, visible on left when flipped) */}
            <div 
              className={`mag-leaf mag-leaf-backface ${activeTrigger >= 4 ? 'flipped' : ''}`}
              style={{ zIndex: activeTrigger >= 4 ? 5 : 4 }}
            >
              <div className="mag-inner mag-inner-left p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 bg-emerald-950/50 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                      CHAPTER 11
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">
                      {chapters[10].date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
                    {chapters[10].eventName}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-300 mb-3">
                    {chapters[10].role}
                  </p>

                  <div className="w-full h-36 rounded-xl overflow-hidden mb-3 border border-white/10 relative mag-clip-image">
                    <SafeImage
                      src={chapters[10].image}
                      alt={chapters[10].eventName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                      🚀 {chapters[10].badge}
                    </span>
                  </div>

                  <p className="text-gray-300/90 text-xs leading-relaxed line-clamp-3 font-light">
                    {chapters[10].description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-800/80 mt-auto">
                  <span className="text-[10px] font-mono text-gray-500">
                    📍 {chapters[10].location}
                  </span>
                  <button
                    onClick={() => setSelectedChapter(chapters[10])}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Story</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div 
                  className="mag-control"
                  onClick={() => setActiveTrigger(3)}
                  title="Turn back"
                >
                  <svg className="w-3.5 h-3.5 text-cyan-400 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>

                <div className="mag-pagenumber">
                  07 08
                </div>
              </div>
            </div>

            {/* Leaf 8 (Right of Spread 4 / Final Editorial Epilogue) */}
            <div 
              className="mag-leaf active-right"
              style={{ zIndex: 4 }}
            >
              <div className="mag-inner p-8 flex flex-col justify-between">
                <div>
                  <span className="mag-logo block mb-4">EPILOGUE</span>
                  <h3 className="text-2xl font-black text-white tracking-tight mb-5">
                    THE HORIZON
                  </h3>

                  {/* 3 Staggered Editorial Sections from Reference */}
                  <div className="space-y-4">
                    <div className="mag-content-section p-3 rounded-xl bg-blue-950/20 border border-blue-500/15">
                      <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
                        01 &bull; Autonomous Systems
                      </h4>
                      <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                        Engineering multi-agent frameworks, prompt routing topologies, and real-time LLM orchestration.
                      </p>
                    </div>

                    <div className="mag-content-section p-3 rounded-xl bg-blue-950/20 border border-blue-500/15">
                      <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
                        02 &bull; Scalable Architectures
                      </h4>
                      <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                        Deploying production-grade REST APIs, FastAPI & Next.js full-stack pipelines with PostgreSQL & Supabase.
                      </p>
                    </div>

                    <div className="mag-content-section p-3 rounded-xl bg-blue-950/20 border border-blue-500/15">
                      <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
                        03 &bull; Technical Impact
                      </h4>
                      <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                        Directing AIMERS student body initiatives and delivering solutions across healthcare, finance, and logistics.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>ROHIT PALARAM &bull; 2026</span>
                  <button
                    onClick={() => setActiveTrigger(1)}
                    className="text-xs font-bold text-blue-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    &larr; Back to Cover
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Accessible Full Story Modal (retaining all rich details from chapters) */}
      <AnimatePresence>
        {selectedChapter && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center overflow-y-auto p-4 sm:p-6"
            onClick={() => setSelectedChapter(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-neutral-950 border border-neutral-800 rounded-3xl w-full max-w-4xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedChapter(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 border border-white/10 hover:border-white/30 text-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer backdrop-blur-md"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Column: Image & Highlights */}
              <div className="w-full md:w-[42%] relative bg-neutral-900 flex flex-col justify-between overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-neutral-800">
                <div className="absolute inset-0 z-0">
                  <SafeImage 
                    src={selectedChapter.image} 
                    alt={selectedChapter.eventName} 
                    className="w-full h-full object-cover filter brightness-[0.65]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                </div>

                <div className="relative z-10 p-6 pt-6">
                  <span className="text-[10px] font-mono tracking-widest text-blue-400 font-bold bg-blue-950/80 border border-blue-500/30 rounded-full px-3 py-1">
                    CHAPTER {selectedChapter.chapterNum}
                  </span>
                </div>

                <div className="relative z-10 p-6">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                    {selectedChapter.date}
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight mb-3">
                    {selectedChapter.eventName}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-blue-500/10 border border-blue-500/25 text-blue-300">
                      📍 {selectedChapter.location}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-gray-300">
                      🎖️ {selectedChapter.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Story Details */}
              <div className="w-full md:w-[58%] p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
                <div className="mb-6 border-b border-neutral-900 pb-4">
                  <span className="text-[10px] font-mono text-blue-500 font-bold uppercase tracking-widest block mb-1">
                    Designation / Role
                  </span>
                  <p className="text-lg font-bold text-white">{selectedChapter.role}</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-1.5">Overview</h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-normal">{selectedChapter.story.overview}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-1.5">Specific Contribution</h4>
                    <p className="text-xs text-gray-300 leading-relaxed font-normal">{selectedChapter.story.role}</p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black mb-1.5">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {selectedChapter.story.tech.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#0c1020] border border-blue-900/40 text-blue-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-900">
                    <div>
                      <h4 className="text-[10px] font-mono text-red-400/90 uppercase tracking-widest font-black mb-1">Challenge</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{selectedChapter.story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-emerald-400/90 uppercase tracking-widest font-black mb-1">Solution</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{selectedChapter.story.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-900 space-y-3">
                    <div>
                      <h4 className="text-[10px] font-mono text-amber-400/90 uppercase tracking-widest font-black mb-1">Key Takeaway</h4>
                      <p className="text-xs text-gray-300 italic leading-relaxed font-serif">
                        "{selectedChapter.story.learning}"
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-mono text-indigo-400/90 uppercase tracking-widest font-black mb-1">Impact</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{selectedChapter.story.impact}</p>
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
