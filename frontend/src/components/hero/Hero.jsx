import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import TypingSequence from "./TypingSequence";
import bg from "../../assets/bg.webp";

export default function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Disable tilt on touch devices for better UX
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Smooth, low-sensitivity tilt
      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 900,
        ease: "power2.out",
        duration: 0.35,
      });
    };

    const resetTilt = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.7,
      });
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  const codeSnippets = [
    "const developer = {",
    "  name: 'Jainam Dosi',",
    "  role: 'Software Developer',",
    "  location: 'India',",
    "  status: 'Available for opportunities'",
    "};",
    "",
    "developer.skills.forEach(skill => {",
    "  console.log(`Mastered: ${skill}`);",
    "});",
    "",
    "// Let's build something together",
    " ",
    "class Developer {",
    "  constructor() {",
    "    this.passion = '∞';",
    "    this.skills = new Set([",
    "      'Problem Solving',",
    "      'Clean Code',",
    "      'Innovation'",
    "    ]);",
    "  }",
  ];

  return (
    <section
      id="hero"
      className="
        relative w-full min-h-screen overflow-hidden
        flex items-center justify-center
        px-3 sm:px-4 md:px-6 lg:px-12
        py-8 sm:py-12 md:py-16
      "
    >
      {/* Background Image */}
      <img
        src={bg}
        alt="hero background"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* Static Code Overlay - Half Behind Card */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="
          relative
          w-full
          max-w-[92%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
          p-4 sm:p-6 md:p-8 lg:p-10
          translate-x-0 sm:translate-x-[15%] md:translate-x-[35%] lg:translate-x-[45%]
        ">
          <pre className="
            font-mono font-extrabold 
            text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 
            text-blue-300 opacity-5 
            leading-tight sm:leading-relaxed
            whitespace-pre-wrap
          ">
            {codeSnippets.map((line, index) => (
              <div
                key={index}
                className="whitespace-pre"
                style={{ fontFamily: 'ui-monospace, "Courier New", monospace' }}
              >
                {line || " "}
              </div>
            ))}
          </pre>
        </div>
      </div>

      {/* 3D Tilt Glass Card */}
      <div
        ref={cardRef}
        className="
          glass relative z-10
          w-full sm:w-11/12 md:w-5/6 lg:w-2/3 xl:w-[60%]
          max-w-5xl
          p-4 sm:p-6 md:p-8 lg:p-10
          rounded-xl sm:rounded-2xl lg:rounded-3xl
          text-white
          shadow-xl
          will-change-transform
        "
        style={{ transformStyle: "preserve-3d" }}
      >
        <TypingSequence />
      </div>
    </section>
  );
}
