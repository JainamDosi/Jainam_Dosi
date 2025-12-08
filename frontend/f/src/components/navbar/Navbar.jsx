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
        <div className="hidden md:flex gap-6 lg:gap-8 text-white/80 text-sm">
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
          </div>
        </div>
      )}
    </nav>
  );
}
