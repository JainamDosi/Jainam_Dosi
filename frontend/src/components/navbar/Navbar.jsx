import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close mobile menu after navigation
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        glass
        border-b border-white/20
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-10
          py-3 sm:py-4
          flex items-center justify-between
        "
      >
        {/* Logo / Name */}
        <button
          onClick={() => handleScrollTo("hero")}
          className="
            text-white
            text-base sm:text-lg
            font-semibold tracking-wide
            hover:text-white/80
            transition
            select-none
          "
        >
          Jainam Dosi
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-white/80 text-sm items-center">
          <button
            onClick={() => handleScrollTo("projects")}
            className="hover:text-white transition cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollTo("about")}
            className="hover:text-white transition cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleScrollTo("skills")}
            className="hover:text-white transition cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="hover:text-white transition cursor-pointer"
          >
            Contact
          </button>
          <a
            href="https://github.com/JainamDosi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition cursor-pointer flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hover:text-white transition-colors"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="
            md:hidden
            inline-flex items-center justify-center
            p-2 rounded-lg
            text-white/80 hover:text-white
            hover:bg-white/10
            transition
          "
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {/* Hamburger / Close icon */}
          <span className="relative w-5 h-5 flex flex-col justify-between">
            <span
              className={`h-[2px] w-full bg-white transition-transform duration-200 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white transition-transform duration-200 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="
            md:hidden
            glass border-t border-white/15
          "
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1 text-white/80 text-sm">
            <button
              onClick={() => handleScrollTo("projects")}
              className="py-2 text-left hover:text-white transition"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo("about")}
              className="py-2 text-left hover:text-white transition"
            >
              About
            </button>
            <button
              onClick={() => handleScrollTo("skills")}
              className="py-2 text-left hover:text-white transition"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="py-2 text-left hover:text-white transition"
            >
              Contact
            </button>
            <a
              href="https://github.com/JainamDosi"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-left hover:text-white transition flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hover:text-white transition-colors"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
