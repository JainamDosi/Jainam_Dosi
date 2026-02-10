import React from 'react';

const projects = [
    {
        id: "PRJ_AGENT_CODE",
        title: "Agent Code",
        description: "AI powered IDE built using LangGraph and gemini APIs",
        link: "https://github.com/JainamDosi/AgentCode",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_QNA_CHAT",
        title: "QnA Chatbot",
        description: "Retrieval Augmented Generation chatbot with memory and context",
        link: "https://github.com/JainamDosi/QnA-Chatbot",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_MEESHO",
        title: "Meesho Hackathon",
        description: "National Finalist among 4k+ candidates. E-commerce optimization.",
        link: "https://github.com/JainamDosi/MeeshoDICE_Finals_Prototype",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_IMMERSIVE",
        title: "Immersive Scroll",
        description: "Mini project with smooth immersive storytelling experience",
        link: "https://github.com/JainamDosi/ImmersiveScroll",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_PORTFOLIO",
        title: "Personal Portfolio",
        description: "Cyberpunk & Retro dual-mode high-performance portfolio",
        link: "https://github.com/JainamDosi/Jainam_Dosi",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_EXPMED",
        title: "ExpMed AI",
        description: "AI tool with OCR/TTS for medical report interpretation",
        link: "https://github.com/JainamDosi/ExpMed",
        image: "https://images.unsplash.com/photo-1576091160550-2173dad9998e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_BUDGET",
        title: "50-30-20 Tool",
        description: "Financial budgeting tool enforcing the 50-30-20 rule",
        link: "https://github.com/JainamDosi/50_30_20tool",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_PLACEVAULT",
        title: "Placevault",
        description: "Placement resource library for sharing and accessing materials",
        link: "https://github.com/JainamDosi/Placevault",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_ITZTHERE",
        title: "Itzthere",
        description: "Internship Project: Professional doc sharing platform with RBAC",
        link: "https://github.com/JainamDosi/ITZTHERE",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
];

const Work = () => {
    return (
        <section className="border-t border-ui-border" id="work">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 md:px-8 py-4 border-b border-ui-border bg-charcoal/30 gap-2">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-orange animate-pulse"></span>
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase">Library_Index / Projects</h2>
                </div>
                <span className="text-[9px] font-data text-beige-muted uppercase tracking-widest">
                    TOTAL_ENTRIES: {projects.length.toString().padStart(3, '0')}
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, idx) => (
                    <div key={project.id} className="group border-b border-ui-border md:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0 flex flex-col bg-panel/20">
                        {/* Card Header */}
                        <div className="px-4 py-2 border-b border-ui-border flex justify-between items-center bg-charcoal/40">
                            <span className="text-[8px] font-mono text-beige-muted">{project.id}</span>
                            <div className="flex gap-1">
                                <span className="w-1 h-1 bg-beige-muted/30"></span>
                                <span className="w-1 h-1 bg-beige-muted/30"></span>
                                <span className="w-1 h-1 bg-accent-orange"></span>
                            </div>
                        </div>

                        {/* Image Section */}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden aspect-video border-b border-ui-border">
                            <img
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                                src={project.image}
                            />
                            <div className="absolute inset-0 bg-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </a>

                        {/* Content Section */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xs font-bold mb-2 uppercase text-white font-mono tracking-tight group-hover:text-accent-orange transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-[10px] text-beige-muted uppercase leading-relaxed font-mono mb-6 line-clamp-2">
                                {project.description}
                            </p>

                            {/* Action Bar */}
                            <div className="mt-auto pt-4 border-t border-ui-border/50 flex justify-between items-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[9px] font-bold text-accent-orange hover:text-white transition-colors uppercase flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-accent-orange"></span>
                                    [ VIEW_GTHB_REKORD ]
                                </a>
                                <span className="material-symbols-outlined text-[16px] text-beige-muted group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    north_east
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
