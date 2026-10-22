import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bitsRoadBg from '../assets/journey/bits-road.jpg';

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
      title: 'Rank Prediction Platform',
      desc: 'An interactive rank prediction and college exploration platform that helps students explore college options based on their rank and available counselling data.',
      badges: [],
      isFeatured: true,
      winBadge: 'Live Deployment',
      liveLink: 'https://rankprediction-taupe.vercel.app/',
    },
    {
      id: '02',
      title: 'AIMERS — Official Website',
      desc: 'Official digital portal for AIMERS (Artificial Intelligence & Machine Learning Club) at MVSR Engineering College. Built to showcase club initiatives, technical workshops, flagship hackathons, student executive teams, and institutional AI projects.',
      badges: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Responsive Design'],
      isFeatured: true,
      winBadge: 'Official Club Portal',
      liveLink: 'https://aimers.mvsrec.edu.in/',
    },
    {
      id: '03',
      title: 'AIMERS Event Management Platform',
      desc: 'Deployed full-stack event platform tested with real event data involving 200+ participants. Features role-based Admin, Coordinator, and Participant workflows, camera-based Data Matrix scanning for instant attendance and meal tracking, and dynamic team management workflows.',
      badges: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Data Matrix'],
      isFeatured: true,
      winBadge: 'Live in Production — 200+ Users',
      liveLink: 'https://aimerseventmanagement.vercel.app',
      repoLink: 'https://github.com/PalaramRohit/aimerseventmanagement'
    },
    {
      id: '04',
      title: 'AI Mock Interview Platform',
      desc: 'Comprehensive interview preparation prototype covering screening, technical assessment, and scenario-based problem solving. Integrated voice & chat interaction, resume-aware context, phase tracking, and multi-LLM orchestration for candidate evaluation and reporting.',
      badges: ['FastAPI', 'React', 'TypeScript', 'MongoDB', 'Supabase', 'LLM APIs'],
      isFeatured: true,
      winBadge: '2nd Place — Microsoft Codethon',
    },
    {
      id: '05',
      title: 'EduMentor AI — Student Guidance',
      desc: 'AI-assisted platform for academic and career mentorship. Implements automated resume analysis, skill evaluation, targeted learning-resource recommendations, real-time chatbot interaction, and custom career roadmap generation.',
      badges: ['Python', 'FastAPI', 'React.js', 'REST APIs', 'LLM Integration', 'NLP'],
      isFeatured: false,
      winBadge: '1st Prize — Forge Alumnus Code-athon',
    },
    {
      id: '06',
      title: 'Aura — Digital Twin Healthcare AI',
      desc: 'Healthcare-oriented prototype for patient data, medical report uploads, OCR-based biomarker extraction, data normalization, and formula-based clinical assessments. Exploring organ-specific physiological insights and 3D anatomical visualization.',
      badges: ['React', 'TypeScript', 'Python', 'FastAPI', 'Flask', 'MongoDB', 'OCR'],
      isFeatured: false,
      winBadge: '3rd Place — Samavarthan 24h Hackathon',
      repoLink: 'https://github.com/PalaramRohit/digital-twin_health'
    },
    {
      id: '07',
      title: 'Library Management System',
      desc: 'Browser-based library management application with full CRUD operations and MongoDB persistent storage supporting 1,000+ book records with real-time availability status.',
      badges: ['HTML/CSS/JS', 'Node.js', 'MongoDB', 'REST APIs'],
      isFeatured: false,
    },
    {
      id: '08',
      title: 'Bharat Benefits Navigator',
      desc: 'An AI-powered platform that helps citizens discover relevant central and state government welfare schemes through personalized recommendations based on income, occupation, location, and eligibility criteria. Features intelligent scheme search, eligibility-based filtering, and simplified access to public welfare information.',
      badges: ['Python', 'FastAPI', 'Flask', 'React', 'MongoDB', 'AI Recommendations'],
      isFeatured: false,
    },
    {
      id: '09',
      title: 'Multi-Model AI Platform — Operations Center & Command Hub',
      desc: 'A multi-domain AI platform integrating Medical AI, Agriculture AI (Agri-Vision), Student AI (EduMentor), and Finance AI into a centralized AI command center. Features include AI-powered medical scan analysis, crop disease detection, personalized learning and career guidance, financial insights, interactive data visualizations, model performance dashboards, and an administrative operations center.',
      badges: ['React', 'Vite', 'Tailwind CSS', 'Python', 'Flask', 'MongoDB', 'Google Gemini', 'Roboflow', 'Cerebras', 'Recharts', 'React Leaflet', 'Framer Motion'],
      isFeatured: true,
      winBadge: 'Centralized AI Hub',
      liveLink: 'https://multi-model-ai-system.vercel.app/',
    },
  ];

  return (
    <section 
      id="projects" 
      className="bg-black text-white py-24 px-6 md:px-12 w-full relative overflow-hidden border-t border-gray-900"
    >
      {/* Dark Atmospheric Background Image (Clearly visible yet dark) */}
      <img
        src={bitsRoadBg}
        alt="Featured Projects Background"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none opacity-50 filter brightness-50 contrast-110 z-0"
      />

      {/* Dark tint overlay keeping it deep and readable */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

      {/* Seamless Top & Bottom Vignettes to blend cleanly into adjacent sections */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-0" />

      {/* Radial spotlight from center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-0" />

      {/* Background glowing orb */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none z-0"></div>
      
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

        {/* Projects Grid: 2-column balanced grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 50}
              className={`group relative flex flex-col justify-between p-8 rounded-[2rem] border transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_20px_50px_rgba(20,100,244,0.15)] ${
                project.isFeatured 
                  ? 'bg-gradient-to-br from-blue-950/40 via-neutral-950/90 to-black border-blue-500/40 hover:border-blue-500/80 shadow-[0_15px_40px_rgba(20,100,244,0.06)]' 
                  : 'bg-neutral-950/80 border-neutral-900 hover:border-blue-500/40'
              }`}
            >
              {/* Highlight Top Bar for Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Meta details */}
                <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
                  <span className="font-mono text-xs text-gray-500">PROJECT {project.id}</span>
                  {project.winBadge && (
                    <span className="px-3 py-1 text-[10px] font-extrabold rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center gap-1.5">
                      <span>🏆</span> {project.winBadge}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-black mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300/90 text-sm leading-relaxed mb-6 font-normal">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Badges Stack */}
                {project.badges && project.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 mb-6">
                    {project.badges.map((badge, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-lg font-mono text-[10px] bg-blue-950/30 border border-blue-500/20 text-blue-300 font-semibold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Action Links (if available) */}
                {(project.liveLink || project.repoLink) && (
                  <div className="flex items-center gap-3 pt-3 border-t border-neutral-900">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition-colors duration-200"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-4 py-2 rounded-full transition-colors duration-200"
                      >
                        <span>Source Code</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
