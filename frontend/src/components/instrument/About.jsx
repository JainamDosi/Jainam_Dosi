import React from 'react';
import meImage from "../../assets/me2.webp";

const About = () => {
    return (
        <section className="grid grid-cols-12" id="about">
            <div className="col-span-12 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-ui-border group overflow-hidden">
                <img
                    alt="Portrait"
                    className="w-full h-full min-h-[300px] lg:min-h-full object-cover grayscale group-hover:grayscale-0 contrast-125 group-hover:contrast-100 brightness-50 group-hover:brightness-100 mix-blend-screen group-hover:mix-blend-normal transition-all duration-700 hover:scale-105"
                    src={meImage}
                />
            </div>
            <div className="col-span-12 lg:col-span-8 p-6 md:p-10 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-accent-orange text-[9px] font-bold tracking-[0.4em] uppercase">// ARCHITECT_MANIFESTO</span>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/100px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
                        alt="IIT Bombay Logo"
                        className="w-8 h-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                </div>
                <h2 className="text-2xl md:text-3xl text-white font-light tracking-tight mb-6 leading-tight uppercase">
                    EFFICIENCY IS<br /><span className="font-bold">THE ULTIMATE SOPHISTICATION</span>
                </h2>
                <p className="text-xs text-beige-muted max-w-lg mb-10 leading-relaxed uppercase">
                    A final-year IIT Bombay student bridging the gap between technical engineering and creative design. I build robust software and AI systems that look great and work even better.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                    <div>
                        <h4 className="text-[10px] font-bold border-b border-ui-border pb-2 mb-4 uppercase text-beige font-mono">_LANGUAGES</h4>
                        <div className="flex flex-wrap gap-2">
                            {["C++", "Python", "JavaScript", "TypeScript"].map(item => (
                                <span key={item} className="px-2 py-0.5 bg-charcoal/50 border border-ui-border hover:border-accent-orange transition-colors duration-300 text-[8px] font-mono uppercase text-beige-muted cursor-default">{item}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold border-b border-ui-border pb-2 mb-4 uppercase text-beige font-mono">_WEB_BACKEND</h4>
                        <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Supabase"].map(item => (
                                <span key={item} className="px-2 py-0.5 bg-charcoal/50 border border-ui-border hover:border-accent-orange transition-colors duration-300 text-[8px] font-mono uppercase text-beige-muted cursor-default">{item}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold border-b border-ui-border pb-2 mb-4 uppercase text-beige font-mono">_AI_ML_SYSTEMS</h4>
                        <div className="flex flex-wrap gap-2">
                            {["LangChain", "LangGraph", "RAG", "LLM Orchestration", "HuggingFace", "Pinecone", "ChromaDB", "n8n"].map(item => (
                                <span key={item} className="px-2 py-0.5 bg-charcoal/50 border border-ui-border hover:border-accent-orange transition-colors duration-300 text-[8px] font-mono uppercase text-beige-muted cursor-default">{item}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold border-b border-ui-border pb-2 mb-4 uppercase text-beige font-mono">_CS_CORE</h4>
                        <div className="flex flex-wrap gap-2">
                            {["DSA", "OOP", "DBMS", "Operating Systems"].map(item => (
                                <span key={item} className="px-2 py-0.5 bg-charcoal/50 border border-ui-border hover:border-accent-orange transition-colors duration-300 text-[8px] font-mono uppercase text-beige-muted cursor-default">{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <h4 className="text-[10px] font-bold border-b border-ui-border pb-2 mb-4 uppercase text-beige font-mono">_TOOLS_PLATFORMS</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Git", "GitHub", "Postman", "Figma", "Cursor", "Antigravity"].map(item => (
                                <span key={item} className="px-2 py-0.5 bg-charcoal/50 border border-ui-border hover:border-accent-orange transition-colors duration-300 text-[8px] font-mono uppercase text-beige-muted cursor-default">{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
