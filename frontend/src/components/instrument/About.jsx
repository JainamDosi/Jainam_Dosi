import React from 'react';
import meImage from "../../assets/me2.webp";

const About = () => {
    return (
        <section className="grid grid-cols-12" id="about">
            <div className="col-span-12 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-ui-border">
                <img
                    alt="Portrait"
                    className="w-full h-full min-h-[300px] lg:min-h-full object-cover grayscale contrast-125 brightness-50 mix-blend-screen"
                    src={meImage}
                />
            </div>
            <div className="col-span-12 lg:col-span-8 p-6 md:p-10 flex flex-col justify-center">
                <span className="text-accent-orange text-[9px] font-bold tracking-[0.4em] mb-4 uppercase">// ARCHITECT_MANIFESTO</span>
                <h2 className="text-2xl md:text-3xl text-white font-light tracking-tight mb-6 leading-tight uppercase">
                    EFFICIENCY IS<br /><span className="font-bold">THE ULTIMATE SOPHISTICATION</span>
                </h2>
                <p className="text-xs text-beige-muted max-w-lg mb-10 leading-relaxed uppercase">
                    A final-year IIT Bombay student passionate about software development and AI. Specialized in translating abstract logic into scalable technical architectures and refined user interfaces.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                        <h4 className="text-[10px] font-bold border-b border-ui-border pb-2 mb-4 uppercase text-beige font-mono">Expertise_Stack</h4>
                        <ul className="space-y-2 text-[10px] font-medium text-beige-muted uppercase font-mono">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent-orange"></span> SYSTEM_ARCHITECTURE</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent-orange"></span> UI_LOGIC_PROTOCOLS</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-accent-orange"></span> AI_INTEGRATION</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold border-b border-ui-border pb-2 mb-4 uppercase text-beige font-mono">Module_Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-charcoal border border-ui-border text-[9px] font-mono uppercase">REACT.JS</span>
                            <span className="px-2 py-1 bg-charcoal border border-ui-border text-[9px] font-mono uppercase">TYPESCRIPT</span>
                            <span className="px-2 py-1 bg-charcoal border border-ui-border text-[9px] font-mono uppercase">NODE.OS</span>
                            <span className="px-2 py-1 bg-charcoal border border-ui-border text-[9px] font-mono uppercase">PYTHON.ML</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
