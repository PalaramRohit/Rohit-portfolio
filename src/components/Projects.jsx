import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projectList = [
    {
      id: '01',
      title: 'ARMOUR — Women Safety Ecosystem',
      desc: 'AI-driven women\'s safety platform featuring a Flutter SOS mobile app, React.js dashboard, Python ML risk server, and IoT smart poles. Proposed ML safety-zone scoring model targeting 95% + SOS detection accuracy with real-time threat classification. Pitched at CBIT IdeaThon and selected by MVSR R&D for funded development.',
      badges: ['Flutter', 'React.js', 'Python ML', 'IoT', 'REST APIs', 'FastAPI'],
      isFeatured: true,
      winBadge: 'R&D Dept. Selected - MVSR',
    },
    {
      id: '02',
      title: 'MultiModAI — Triple-Model AI Platform',
      desc: 'Architected a triple-model AI cascade (Roboflow -> Llama 3.1 -> Gemini 2.5 Flash) serving 5 domains. Reduced average response latency by ~40% via async API chaining.',
      badges: ['React/Vite', 'Flask', 'MongoDB', 'Roboflow', 'Cerebras', 'Gemini'],
      isFeatured: false,
    },
    {
      id: '03',
      title: 'EduMentor — AI Academic Assistant',
      desc: 'Adaptive NLP learning engine adjusting study paths via AI feedback loops. Full prototype delivered in 24 hours - React frontend, FastAPI backend, AI integration.',
      badges: ['Python', 'FastAPI', 'React.js', 'NLP'],
      isFeatured: false,
      winBadge: '1st Place - National Hackathon',
    },
    {
      id: '04',
      title: 'Career Orchestrator',
      desc: 'Multi-agent workflow for adaptive career guidance with 3 specialized AI agents - skill assessment, role matching, roadmap generation — using OOP design patterns.',
      badges: ['Python', 'Multi-Agent AI', 'FastAPI', 'OOP'],
      isFeatured: false,
      winBadge: 'Microsoft 1st Runner-Up',
    },
    {
      id: '05',
      title: 'Emergency Vehicle Priority System',
      desc: 'Real-time traffic signal override using computer vision to detect emergency vehicles. Edge-processing pipeline targeting sub-2-second detection-to-signal response.',
      badges: ['Computer Vision', 'IoT', 'FastAPI', 'Python'],
      isFeatured: false,
    },
    {
      id: '06',
      title: 'Library Management System',
      desc: 'Browser-based library app with full CRUD operations and MongoDB persistent storage supporting 1,000+ book records with real-time availability status.',
      badges: ['HTML/CSS/JS', 'MongoDB'],
      isFeatured: false,
    },
  ];

  return (
    <section 
      id="projects" 
      className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 w-full relative overflow-hidden border-t border-gray-900 bg-[linear-gradient(rgba(20,100,244,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,100,244,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Background glowing orb */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none z-0"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-16">
          <div className="inline-block border border-blue-500/30 rounded-full px-5 py-1.5 text-xs text-blue-400 font-bold mb-6 bg-blue-500/5 shadow-sm">
            My Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Real systems. Real impact. Built under pressure and shipped with purpose.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 50}
              className={`group relative flex flex-col justify-between p-8 rounded-[2rem] border transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_20px_50px_rgba(20,100,244,0.15)] ${
                project.isFeatured 
                  ? 'md:col-span-2 bg-gradient-to-br from-blue-950/40 to-black/80 border-blue-500/40 hover:border-blue-500/80 shadow-[0_15px_40px_rgba(20,100,244,0.06)]' 
                  : 'bg-neutral-950/80 border-neutral-900 hover:border-blue-500/40'
              }`}
            >
              {/* Highlight Top Bar for Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs text-gray-600">PROJECT {project.id}</span>
                  {project.winBadge && (
                    <span className="px-3.5 py-1 text-[9px] font-extrabold rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      🏆 {project.winBadge}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                  {project.desc}
                </p>
              </div>

              {/* Badges Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.badges.map((badge, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 rounded-lg font-mono text-[9px] bg-blue-950/20 border border-blue-500/20 text-blue-300 font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
