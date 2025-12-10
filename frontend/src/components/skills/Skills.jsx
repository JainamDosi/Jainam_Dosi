import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgSkills from "../../assets/bgskills.webp";

gsap.registerPlugin(ScrollTrigger);

// Helper function to get logo URL from multiple sources
function getLogoUrl(name) {
  // Direct GitHub raw URLs for logos not available in Simple Icons (official sources)
  const directLogoMap = {
    "LangChain": "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain-logo.png",
    "LangGraph": "https://raw.githubusercontent.com/langchain-ai/langgraph/main/docs/static/img/langgraph-logo.png",
    "ChromaDB": "https://raw.githubusercontent.com/chroma-core/chroma/main/assets/Chroma_Logo_Symbol_White.png",
    "Pinecone": "https://raw.githubusercontent.com/pinecone-io/pinecone-python-client/main/docs/source/_static/pinecone-logo.svg",
    "Cursor": "https://cursor.sh/favicon-32x32.png",
    "n8n": "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/design-system/src/assets/images/n8n-logo.svg",
  };

  // Simple Icons CDN mapping (most reliable and consistent source)
  // Using official Simple Icons names from https://simpleicons.org/
  const simpleIconsMap = {
    "React": "react",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "HTML/CSS": "html5",
    "Tailwind CSS": "tailwindcss",
    "Next.js": "nextdotjs",
    "Node.js": "nodedotjs",
    "Python": "python",
    "Express.js": "express",
    "FastAPI": "fastapi",
    "Flask": "flask",
    "MongoDB": "mongodb",
    "PyTorch": "pytorch",
    "Scikit-learn": "scikitlearn",
    "Pandas": "pandas",
    "NumPy": "numpy",
    "Git": "git",
    "Figma": "figma",
    "VS Code": "visualstudiocode",
    "Postman": "postman",
    "SQL": "mysql",
    "REST APIs": "rest",
  };

  // Try direct logo map first (for logos not in Simple Icons)
  if (directLogoMap[name]) {
    return directLogoMap[name];
  }

  // Use Simple Icons CDN (most consistent and reliable)
  const iconName = simpleIconsMap[name];
  if (iconName) {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconName}.svg`;
  }

  // Final fallback: try to construct Simple Icons name
  const fallbackName = name.toLowerCase().replace(/\s+/g, "").replace(/\./g, "dot");
  return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${fallbackName}.svg`;
}

// Skill Item Component with logo and fallback
function SkillItem({ skill, size = "normal" }) {
  const [imgError, setImgError] = useState(false);
  const [logoUrl, setLogoUrl] = useState(getLogoUrl(skill.name));
  const [attemptCount, setAttemptCount] = useState(0);
  
  // List of technologies that should not use invert filter (colored logos)
  const coloredLogos = ["LangChain", "LangGraph", "ChromaDB", "Pinecone", "Cursor", "n8n", "Figma"];
  const shouldInvert = !coloredLogos.includes(skill.name);
  
  // Alternative sources for logos (fallbacks - using official GitHub repos)
  const alternativeSources = {
    "LangChain": [
      "https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain-logo.png",
      "https://github.com/langchain-ai/langchain/raw/main/docs/static/img/langchain-logo.png",
    ],
    "LangGraph": [
      "https://raw.githubusercontent.com/langchain-ai/langgraph/main/docs/static/img/langgraph-logo.png",
      "https://github.com/langchain-ai/langgraph/raw/main/docs/static/img/langgraph-logo.png",
    ],
    "ChromaDB": [
      "https://raw.githubusercontent.com/chroma-core/chroma/main/assets/Chroma_Logo_Symbol_White.png",
      "https://avatars.githubusercontent.com/u/93154907?s=200&v=4",
    ],
    "Pinecone": [
      "https://raw.githubusercontent.com/pinecone-io/pinecone-python-client/main/docs/source/_static/pinecone-logo.svg",
      "https://avatars.githubusercontent.com/u/73993803?s=200&v=4",
    ],
    "Cursor": [
      "https://cursor.sh/favicon-32x32.png",
      "https://cursor.sh/favicon.ico",
    ],
    "n8n": [
      "https://raw.githubusercontent.com/n8n-io/n8n/master/packages/design-system/src/assets/images/n8n-logo.svg",
      "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
    ],
    "Figma": [
      "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
      "https://www.figma.com/favicon.ico",
    ],
  };
  
  // Try alternative sources if first fails
  const handleImageError = () => {
    if (alternativeSources[skill.name] && attemptCount < alternativeSources[skill.name].length) {
      setLogoUrl(alternativeSources[skill.name][attemptCount]);
      setAttemptCount(prev => prev + 1);
    } else {
      setImgError(true);
    }
  };
  
  // Size-based styling
  const sizeClasses = {
    normal: {
      container: "p-3",
      logo: "w-10 h-10 mb-2",
      text: "text-xs",
      fallback: "text-2xl"
    },
    large: {
      container: "p-4",
      logo: "w-14 h-14 mb-3",
      text: "text-sm",
      fallback: "text-3xl"
    }
  };
  
  const classes = sizeClasses[size] || sizeClasses.normal;
  
  return (
    <div className={`skill-item flex flex-col items-center justify-center ${classes.container} rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105`}>
      {/* Official logo from CDN */}
      <div className={`${classes.logo} flex items-center justify-center`}>
        {imgError ? (
          <span className={`text-white/60 ${classes.fallback}`}>
            {skill.name.charAt(0)}
          </span>
        ) : (
          <img 
            src={logoUrl} 
            alt={skill.name}
            className={`w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity ${shouldInvert ? 'filter brightness-0 invert' : ''}`}
            loading="lazy"
            onError={handleImageError}
          />
        )}
      </div>
      <span className={`text-gray-300 ${classes.text} text-center font-medium`}>{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  const skillsData = {
    "Frontend": [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 80 },
    ],
    "Backend": [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 80 },
    ],
    "ML / AI": [
      { name: "Python", level: 95 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "LangGraph", level: 80 },
    ],
    "DBs": [
      { name: "Pinecone", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "SQL", level: 90 },
      { name: "ChromaDB", level: 80 },
    ],
    "Tools": [
      { name: "Git", level: 95 },
      { name: "Figma", level: 90 },
      { name: "Cursor", level: 90 },
      { name: "n8n", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
    ],
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const title = titleRef.current;

      // Title fade-in
      gsap.fromTo(
        title,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
          },
        }
      );

      // Animate skill items per card
      const skillCards = gsap.utils.toArray(".skill-card");

      skillCards.forEach((card) => {
        const items = card.querySelectorAll(".skill-item");

        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full min-h-screen text-white py-20 px-10 overflow-hidden  "
    >
      {/* Background Image */}
      <img
        src={bgSkills}
        alt="skills background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        loading="lazy"
        fetchPriority="low"
        decoding="async"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

      {/* Subtle BG Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white/90">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-400 mt-3">
            Technologies I use to build reliable and modern systems
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr"
        >
          {/* Frontend - Large Card */}
          <div
            className="skill-card md:col-span-2 rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-3">
              Frontend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsData["Frontend"].map((skill, index) => (
                <SkillItem key={`Frontend-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend - Medium Card */}
          <div
            className="skill-card rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-3">
              Backend
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skillsData["Backend"].map((skill, index) => (
                <SkillItem key={`Backend-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* DBs - Small Card */}
          <div
            className="skill-card rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-3">
              DBs
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skillsData["DBs"].map((skill, index) => (
                <SkillItem key={`DBs-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* ML / AI - Large Card */}
          <div
            className="skill-card md:col-span-2 rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-3">
              ML / AI
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsData["ML / AI"].map((skill, index) => (
                <SkillItem key={`ML / AI-${index}`} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools - Medium Card */}
          <div
            className="skill-card md:col-span-2 rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <h3 className="text-xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-3">
              Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skillsData["Tools"].map((skill, index) => (
                <SkillItem key={`Tools-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm font-mono">
            &lt;const skills = ["problem-solving", "clean-code", "innovation"] /&gt;
          </p>
        </div>

      </div>
    </section>
  );
}
