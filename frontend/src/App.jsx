import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import InstrumentHeader from "./components/instrument/Header";
import InstrumentSidebar from "./components/instrument/Sidebar";
import InstrumentHero from "./components/instrument/Hero";
import InstrumentWork from "./components/instrument/Work";
import InstrumentAbout from "./components/instrument/About";
import InstrumentContact from "./components/instrument/Contact";
import InstrumentLayout from "./components/instrument/Layout";

import RetroHeader from "./components/retro/Header";
import RetroHero from "./components/retro/Hero";
import RetroWork from "./components/retro/Work";
import RetroAbout from "./components/retro/About";
import RetroContact from "./components/retro/Contact";
import RetroLayout from "./components/retro/Layout";

// Cinematic "Magic" Transition Variants
const pageVariants = {
  initial: {
    opacity: 0,
    filter: "blur(20px) brightness(1.5)",
    scale: 0.9,
    y: 20
  },
  animate: {
    opacity: 1,
    filter: "blur(0px) brightness(1)",
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Cinematic smooth ease-out
    }
  },
  exit: {
    opacity: 0,
    filter: "blur(20px) brightness(0.5)",
    scale: 1.1,
    y: -20,
    transition: {
      duration: 0.8,
      ease: [0.7, 0, 0.84, 0], // Fast ease-in for magic feel
    }
  }
};

const InstrumentMode = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.className = "instrument";
    window.scrollTo(0, 0);
  }, []);

  const toggleMode = () => navigate("/retro");
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen"
    >
      <InstrumentLayout>
        <InstrumentHeader onToggle={toggleMode} onMenuToggle={toggleSidebar} />
        <div className="flex flex-col md:grid md:grid-cols-12 min-h-screen relative">
          <div className={`fixed inset-0 bg-black/60 z-40 transition-opacity md:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>

          <div className={`fixed md:relative left-0 top-0 h-full z-50 md:z-auto transition-transform md:translate-x-0 md:col-span-1 border-r border-ui-border bg-panel md:bg-transparent ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <InstrumentSidebar />
          </div>

          <main className="col-span-12 md:col-span-11 flex flex-col gap-8 p-4 md:py-8 md:px-8 pb-20 overflow-x-hidden">
            <div className="border border-ui-border bg-instrument-bg/50 overflow-hidden mx-auto w-full">
              <InstrumentHero />
            </div>
            <div className="border border-ui-border bg-instrument-bg/50 overflow-hidden mx-auto w-full">
              <InstrumentWork />
            </div>
            <div className="border border-ui-border bg-instrument-bg/50 overflow-hidden mx-auto w-full">
              <InstrumentAbout />
            </div>
            <div className="border border-ui-border bg-instrument-bg/50 overflow-hidden mx-auto w-full">
              <InstrumentContact />
            </div>
          </main>
        </div>
      </InstrumentLayout>
    </motion.div>
  );
};

const RetroMode = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "retro";
    window.scrollTo(0, 0);
  }, []);

  const toggleMode = () => navigate("/instrument");

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen"
    >
      <RetroLayout>
        <RetroHeader onToggle={toggleMode} />
        <main className="pt-16">
          <RetroHero />
          <RetroWork />
          <RetroAbout />
          <RetroContact />
        </main>
      </RetroLayout>
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/instrument" element={<InstrumentMode />} />
        <Route path="/retro" element={<RetroMode />} />
        <Route path="/" element={<Navigate to="/instrument" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
