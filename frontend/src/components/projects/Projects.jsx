import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const projectsGridRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Agent Code",
      description: "AI powered IDE built using LangGraph and gemini APIs",
      size: "large", // 2x2
      github: "https://github.com/JainamDosi/AgentCode?tab=readme-ov-file",
      live: "https://drive.google.com/drive/folders/1bqPaS2Cie13lI22dzSma5gW-o7jmXS8H",
      status: "Completed",
    },
    {
      id: 2,
      title: "QnA Chatbot",
      description:
        "Retrieval Augmented Generation chatbot with memory and context",
      size: "medium", // 1x2
      github: "https://github.com/JainamDosi/QnA-Chatbot",
      status: "Completed",
    },
    {
      id: 3,
      title: "Meesho Hackathon Finals",
      description: "National Finalist among 4k+ candidates",
      size: "medium", // 1x2
      github: "https://github.com/JainamDosi/MeeshoDICE_Finals_Prototype",
      status: "Completed",
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "This website",
      size: "small", // 1x1
      github: "https://github.com/JainamDosi/Jainam_Dosi",
      live: "https://jainam-dosi.vercel.app/",
      status: "Completed",
    },
    {
      id: 5,
      title: "Internship Project",
      description: "Professional work",
      size: "small", // 1x1
      github: "https://github.com/JainamDosi/ITZTHERE",
      live: "https://www.itzthere.com/windo",
      status: "Completed",
    },
    {
      id: 6,
      title: "Chemeca Website",
      description:
        "Represents IIT Bombay at International Sustainability competitions",
      size: "wide", // 2x1
      github: "https://github.com/JainamDosi/CHEMECA_IITB",
      live: "https://chemecaiitb.github.io/ChemEca/",
      status: "Completed",
    },
    {
      id: 7,
      title: "Place Vault",
      description: "A repository to share placement resource",
      size: "small", // 1x1
      github: "https://github.com/JainamDosi/PlaceVault",
      status: "Building",
    },
  ];

  const pastelColors = [
    "rgba(186, 215, 233, 0.12)", // Soft Blue
    "rgba(255, 204, 213, 0.12)", // Soft Pink
    "rgba(225, 204, 255, 0.12)", // Soft Purple
    "rgba(204, 255, 204, 0.12)", // Soft Green
    "rgba(255, 229, 204, 0.12)", // Soft Orange
    "rgba(210, 240, 255, 0.12)", // Light Cyan
    "rgba(255, 255, 204, 0.12)", // Light Yellow
  ];

  useLayoutEffect(() => {
    const container = containerRef.current;
    const projectsGrid = projectsGridRef.current;

    if (!container || !projectsGrid) return;

    const ctx = gsap.context(() => {
      // Initially hide projects grid
      gsap.set(projectsGrid, { opacity: 0, y: 50 });

      // Animate grid and cards on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Reveal projects grid
      tl.to(projectsGrid, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate individual project cards
      const projectCards = projectsGrid.querySelectorAll(".project-card");
      tl.fromTo(
        projectCards,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.8"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full min-h-screen text-white py-20 px-6 md:px-10 overflow-hidden bg-black"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title - Static */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white/90 mb-3">
            Projects
          </h2>
          <p className="text-lg text-gray-400">
            A collection of my recent work
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={projectsGridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
        >
          {projects.map((project, index) => {
            const sizeClasses = {
              large: "md:col-span-2 md:row-span-2",
              medium: "md:col-span-1 md:row-span-2",
              small: "md:col-span-1 md:row-span-1",
              wide: "md:col-span-2 md:row-span-1",
            };

            const pastelColor = pastelColors[index % pastelColors.length];

            return (
              <div
                key={index}
                className={`
                  project-card
                  group relative
                  ${sizeClasses[project.size]}
                  rounded-2xl
                  backdrop-blur-xl
                  border border-white/10
                  p-8
                  transition-all duration-500
                  hover:border-white/30
                  hover:shadow-2xl
                  hover:shadow-white/10
                  hover:-translate-y-2
                  cursor-pointer
                  overflow-hidden
                `}
                style={{
                  backgroundColor: pastelColor,
                }}
              >
                {/* Mirror Sweep Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-[-150%] bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                </div>

                {/* Glassy reflection top-light */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    {/* Status Badge */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                        <span
                          className={`
                            inline-block w-2 h-2 rounded-full mr-2 
                            ${project.status === 'Building'
                              ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse'
                              : 'bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]'}
                          `}
                        ></span>
                        {project.status}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* GitHub + Live Links */}
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-white transition-all">
                    {/* GitHub Button */}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center gap-2 
                          px-4 py-2 rounded-xl
                          bg-white/10 border border-white/20 
                          backdrop-blur-md
                          hover:bg-white/20 hover:border-white/40 
                          transition-all duration-300
                          hover:scale-110
                          shadow-lg
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.23c-3.34.72-4.04-1.42-4.04-1.42-.54-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.95-.27 1.98-.4 3-.4s2.05.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                        </svg>
                        <span className="text-sm font-semibold tracking-wide">GitHub</span>
                      </a>
                    )}

                    {/* Live Demo Button */}
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center gap-2 
                          px-4 py-2 rounded-xl
                          bg-white/10 border border-white/20 
                          backdrop-blur-md
                          hover:bg-white/20 hover:border-white/40 
                          transition-all duration-300
                          hover:scale-110
                          shadow-lg
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                        >
                          <path d="M14 3h7v7" />
                          <path d="M10 14 21 3" />
                          <path d="M5 5h4" />
                          <path d="M5 9h4" />
                          <path d="M5 13h4" />
                        </svg>
                        <span className="text-sm font-semibold tracking-wide">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
