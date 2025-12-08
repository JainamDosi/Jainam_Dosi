import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgSkills from "../../assets/bgskills.png";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

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

      // Animate skill bars per card
      const skillCards = gsap.utils.toArray(".skill-card");

      skillCards.forEach((card) => {
        const bars = card.querySelectorAll(".skill-bar");

        gsap.fromTo(
          bars,
          { width: "0%" },
          {
            width: (i, el) => el.getAttribute("data-level") + "%",
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.15,
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
      { name: "Python", level: 95 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "MongoDB", level: 85 },
    ],
    "ML / AI": [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 90 },
      { name: "GenAI", level: 75 },
    ],
    "Tools": [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Linux", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
    ],
  };

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

        {/* Skills Grid */}
        <div
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="skill-card rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 transition-all"
            >
              <h3 className="text-xl font-semibold mb-6 text-white/80 border-b border-white/10 pb-3">
                {category}
              </h3>

              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-300 text-sm mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="skill-bar h-full rounded-full bg-gradient-to-r from-white/20 to-white/60"
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
