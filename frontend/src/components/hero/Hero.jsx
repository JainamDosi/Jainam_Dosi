import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import TypingSequence from "./TypingSequence";
import bg from "../../assets/bg.jpg";

export default function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

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

  return (
    <section
      id="hero"
      className="
        relative w-full min-h-screen overflow-hidden
        flex items-center justify-center
        px-4 sm:px-6 lg:px-12
      "
    >
      {/* Background Image */}
      <img
        src={bg}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      {/* 3D Tilt Glass Card */}
      <div
        ref={cardRef}
        className="
          glass relative z-10
          w-lg
          max-w-md sm:max-w-xl lg:max-w-3xl
          p-5 sm:p-8 lg:p-10
          rounded-2xl sm:rounded-3xl
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
