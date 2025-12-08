import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Add your messages here - easy to extend!
const messages = [
  "Hey there,How are you ?",
  "Jainam this side.",
  "Welcome to my portfolio.",
  "Hope you like it.",
];

export default function TypingSequence() {
  const [currentStep, setCurrentStep] = useState("dots-0");
  const [visibleMessages, setVisibleMessages] = useState([]);

  const dotsRefs = useRef([]);
  const msgRefs = useRef([]);
  const animatedMessages = useRef(new Set());

  // Animate dots + messages
  useEffect(() => {
    const [type, index] = currentStep.split("-");
    const idx = parseInt(index);

    if (type === "dots" && dotsRefs.current[idx]) {
      const tl = gsap.timeline();

      tl.fromTo(
        dotsRefs.current[idx],
        { opacity: 0.2 },
        {
          opacity: 1,
          repeat: 3,
          yoyo: true,
          duration: 0.25,
        }
      );

      tl.to(
        dotsRefs.current[idx],
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            setCurrentStep(`msg-${idx}`);
          },
        },
        "-=0.2"
      );
    } else if (type === "msg") {
      setTimeout(() => {
        setVisibleMessages((prev) =>
          prev.includes(idx) ? prev : [...prev, idx]
        );
      }, 0);
    }
  }, [currentStep]);

  // Animate visible messages (only once)
  useEffect(() => {
    visibleMessages.forEach((idx) => {
      if (msgRefs.current[idx] && !animatedMessages.current.has(idx)) {
        animatedMessages.current.add(idx);

        gsap.fromTo(
          msgRefs.current[idx],
          { opacity: 0, y: 10, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
              if (
                idx === visibleMessages[visibleMessages.length - 1] &&
                idx < messages.length - 1
              ) {
                setTimeout(() => {
                  setCurrentStep(`dots-${idx + 1}`);
                }, 500);
              }
            },
          }
        );
      }
    });
  }, [visibleMessages]);

  return (
    <div
      className="
        flex flex-col
        space-y-3 sm:space-y-4 lg:space-y-5
      "
    >
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          {/* Typing dots */}
          {currentStep === `dots-${index}` && (
            <div
              ref={(el) => (dotsRefs.current[index] = el)}
              className="
                text-white/80
                text-base sm:text-lg
                tracking-widest
                px-3 py-1 sm:px-4 sm:py-2
                max-w-full
                break-words
              "
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              ...
            </div>
          )}

          {/* Message bubble */}
          {visibleMessages.includes(index) && (
            <div
              ref={(el) => (msgRefs.current[index] = el)}
              className="
                text-base sm:text-lg lg:text-xl
                px-4 py-2 sm:px-5 sm:py-3
                font-medium
                rounded-2xl
                bg-white/10
                border border-white/20
                backdrop-blur-sm
                w-fit max-w-[90%] sm:max-w-[80%]
                leading-relaxed
                break-words
              "
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              {message}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
