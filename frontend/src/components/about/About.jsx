import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meImage from "../../assets/me.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHorizontal() {
  const containerRef = useRef(null);
  const sweepRef = useRef(null);
  const imageRef = useRef(null);
  const codeBgRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const sweep = sweepRef.current;
      const image = imageRef.current;
      const codeBg = codeBgRef.current;

      // Background color layers that change as you scroll
      const colors = ["#000000", "#1a1a2e"];
      const colorStops = [0, 0.25];

      // Animate background color changes
      colors.forEach((color, index) => {
        if (index === 0) return; // Skip first color (initial)

        gsap.to(container, {
          backgroundColor: color,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom+=300 top",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              // Change color at specific progress points
              if (
                progress >= colorStops[index - 1] &&
                progress < colorStops[index]
              ) {
                container.style.backgroundColor = color;
              } else if (progress >= colorStops[index]) {
                container.style.backgroundColor = color;
              }
            },
          },
        });
      });

      // SWEEP ANIMATION - Rectangle sweeps from right to left
      gsap.fromTo(
        sweep,
        {
          xPercent: 100, // Start from right edge
          width: "100%",
        },
        {
          xPercent: -100, // Move completely off left edge
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom+=300 top",
            scrub: 1,
            pin: true,
          },
        }
      );

      // Reveal missing words
      const missingWords = container.querySelectorAll(".missing-word");
      gsap.to(missingWords, {
        color: "#ffffff",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom+=300 top",
          scrub: 1,
        },
      });

      // Image animation - fade in and scale up as you scroll
      if (image) {
        gsap.fromTo(
          image,
          {
            opacity: 0,
            scale: 0.8,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom+=300 top",
              scrub: 1,
            },
          }
        );
      }

      // Buttons animation
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          {
            opacity: 0,
            y: 20,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom+=300 top",
              scrub: 1,
            },
          }
        );
      }

      // Animated code background - subtle parallax effect
      if (codeBg) {
        gsap.to(codeBg, {
          y: "-=100",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom+=300 top",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Code snippets for background
  const codeSnippets = [
    "const developer = {",
    "  skills: ['React', 'Node.js', 'TypeScript'],",
    "  passion: 'building amazing products',",
    "  experience: '5+ years'",
    "};",
    "",
    "function solveProblem(problem) {",
    "  return innovativeSolution(problem);",
    "}",
    "",
    "class SoftwareEngineer {",
    "  constructor() {",
    "    this.dedicated = true;",
    "    this.creative = true;",
    "  }",
    "}",
    "",
    "const projects = [];",
    "projects.push('scalable systems');",
    "projects.push('user experiences');",
    "",
    "async function build() {",
    "  const result = await create();",
    "  return result;",
    "}",
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="
        relative w-full min-h-screen
        overflow-hidden bg-black text-white
        flex items-center justify-center
        px-4 sm:px-8 lg:px-16
        py-16 md:py-0
      "
    >
      {/* Animated code background */}
      <div
        ref={codeBgRef}
        className="
          absolute inset-0 opacity-30 pointer-events-none z-0
          font-mono text-[10px] sm:text-sm md:text-base
        "
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
        }}
      >
        <div className="absolute top-0 left-0 w-full p-4 sm:p-6 md:p-8 space-y-1 sm:space-y-2">
          {codeSnippets.map((line, index) => (
            <div
              key={index}
              className="text-green-400 whitespace-pre"
              style={{
                textShadow: "0 0 10px rgba(74, 222, 128, 0.3)",
                opacity: 0.6 + (index % 3) * 0.1,
              }}
            >
              {line}
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 w-full p-4 sm:p-6 md:p-8 space-y-1 sm:space-y-2">
          {codeSnippets.map((line, index) => (
            <div
              key={`second-${index}`}
              className="text-blue-400 whitespace-pre"
              style={{
                textShadow: "0 0 10px rgba(96, 165, 250, 0.3)",
                opacity: 0.5 + (index % 2) * 0.1,
                transform: "translateX(20%)",
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Sweep Rectangle */}
      <div
        ref={sweepRef}
        className="absolute inset-0 bg-white backdrop-blur-xl z-20"
        style={{ transform: "translateX(-100%)" }}
      />

      {/* Content */}
      <div
        className="
          relative z-30 max-w-6xl w-full
          flex flex-col md:flex-row
          items-center md:items-start
          justify-center
          gap-10 md:gap-16
        "
      >
        {/* Image */}
        <div className="shrink-0 flex justify-center w-full md:w-auto">
          <img
            ref={imageRef}
            src={meImage}
            alt="About me"
            className="w-40 sm:w-56 md:w-64 lg:w-72 h-auto"
            loading="lazy"
            decoding="async"
            style={{ opacity: 0 }}
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-10">
            ABOUT ME
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">
            I am Jainam Dosi from IIT Bombay, a driven{" "}
            <span className="missing-word" style={{ color: "#000" }}>
              developer
            </span>{" "}
            passionate about building clean, scalable systems. My work spans{" "}
            <span className="missing-word" style={{ color: "#000" }}>ML</span>{" "}
            and{" "}
            <span className="missing-word" style={{ color: "#000" }}>AI</span>{" "}
            with a growing focus on GenAI, where I enjoy turning complex ideas
            into reliable, real-world solutions.
          </p>

          {/* Social Buttons */}
          <div
            ref={buttonsRef}
            className="
              flex flex-col sm:flex-row
              gap-4 justify-center md:justify-start
            "
          >
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/jainam-dosi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-6 py-3 bg-white/10 hover:bg-white/20
                backdrop-blur-md border border-white/20
                rounded-lg transition-all duration-300
                hover:scale-105 hover:border-white/40
                group w-full sm:w-auto justify-center
              "
              style={{ opacity: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white group-hover:text-blue-400 transition-colors"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-lg font-medium">LinkedIn</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:dosijainamiitb@gmail.com"
              className="
                flex items-center gap-3
                px-6 py-3 bg-white/10 hover:bg-white/20
                backdrop-blur-md border border-white/20
                rounded-lg transition-all duration-300
                hover:scale-105 hover:border-white/40
                group w-full sm:w-auto justify-center
              "
              style={{ opacity: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:text-blue-400 transition-colors"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-lg font-medium">Email</span>
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/JainamDosi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-3
                px-6 py-3 bg-white/10 hover:bg-white/20
                backdrop-blur-md border border-white/20
                rounded-lg transition-all duration-300
                hover:scale-105 hover:border-white/40
                group w-full sm:w-auto justify-center
              "
              style={{ opacity: 0 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white group-hover:text-blue-400 transition-colors"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-lg font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
