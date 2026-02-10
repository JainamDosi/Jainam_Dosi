import React from 'react';

const projects = [
    {
        id: "PRJ_001",
        title: "Agent Code",
        description: "AI powered IDE built using LangGraph and gemini APIs",
        tag: "AI_IDE",
        link: "https://github.com/JainamDosi/AgentCode",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_002",
        title: "QnA Chatbot",
        description: "Retrieval Augmented Generation chatbot with memory and context",
        tag: "NLP_RAG",
        link: "https://github.com/JainamDosi/QnA-Chatbot",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_003",
        title: "Meesho Hackathon",
        description: "National Finalist among 4k+ candidates. E-commerce optimization.",
        tag: "FINALS",
        link: "https://github.com/JainamDosi/MeeshoDICE_Finals_Prototype",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_004",
        title: "Immersive Scroll",
        description: "Mini project with smooth immersive storytelling experience",
        tag: "UI_UX",
        link: "https://github.com/JainamDosi/ImmersiveScroll",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_005",
        title: "Personal Portfolio",
        description: "Cyberpunk & Retro dual-mode high-performance portfolio",
        tag: "DESIGN",
        link: "https://github.com/JainamDosi/Jainam_Dosi",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_006",
        title: "ExpMed - AI Medical",
        description: "Medical report analyzer with OCR and TTS capabilities",
        tag: "HEALTH_AI",
        link: "#",
        image: "https://images.unsplash.com/photo-1576091160550-2173dad9998e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_007",
        title: "50-30-20 Budgeting",
        description: "Financial tool based on the 50-30-20 budgeting rule",
        tag: "FINANCE",
        link: "#",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_008",
        title: "Placevault",
        description: "A centralized repository for placement preparation resources",
        tag: "ACADEMIC",
        link: "#",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_009",
        title: "Itzthere",
        description: "Doc sharing with RBAC for enterprise internship project",
        tag: "WORK",
        link: "#",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
];

const Work = () => {
    return (
        <section className="py-24 bg-clay/30 border-y-4 border-retro-dark" id="work">
            <div className="px-6 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-burnt-orange border-2 border-retro-dark rotate-45"></div>
                        <h2 className="font-retro text-3xl md:text-4xl uppercase text-retro-dark leading-none">The_Archive</h2>
                    </div>
                    <p className="font-bold text-avocado uppercase tracking-[0.2em] font-body text-[10px] pl-7">Horizontal_Access_Protocol_v2.0</p>
                </div>
                <div className="hidden md:flex flex-col items-end gap-1 opacity-60">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-3 bg-retro-dark"></div>)}
                    </div>
                    <span className="font-retro text-[9px] text-retro-dark whitespace-nowrap">SCROLL_TO_EXPLORE →</span>
                </div>
            </div>

            <div className="flex overflow-x-auto no-scrollbar gap-10 px-6 pb-16 cursor-grab active:cursor-grabbing">
                {projects.map((project, idx) => (
                    <div key={project.id} className="min-w-[340px] md:min-w-[480px] group flex flex-col">
                        <div className="relative">
                            {/* Card Index */}
                            <div className="absolute -top-6 left-0 font-retro text-[10px] text-retro-dark/40">
                                CHRONICLE_IDX_{(idx + 1).toString().padStart(3, '0')}
                            </div>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                                <div className="relative aspect-[16/10] bg-retro-dark border-4 border-retro-dark overflow-hidden retro-border group-hover:-translate-y-2 transition-transform duration-500">
                                    <img
                                        alt={project.title}
                                        className="w-full h-full object-cover pixel-mask grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 font-body"
                                        src={project.image}
                                    />
                                    {/* Tag Badge */}
                                    <div className={`absolute top-4 right-4 ${idx % 2 === 0 ? 'bg-mustard' : 'bg-burnt-orange'} px-3 py-1 text-[9px] font-retro border-2 border-retro-dark text-retro-dark shadow-[4px_4px_0px_#2d2d2d]`}>
                                        {project.tag}
                                    </div>
                                    <div className="absolute inset-0 bg-retro-bg/10 mix-blend-overlay pointer-events-none"></div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-10 flex flex-col flex-grow text-retro-dark px-2">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/title inline-block w-fit">
                                <h3 className="font-retro text-2xl md:text-3xl group-hover/title:text-burnt-orange transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <div className="h-1 w-0 group-hover/title:w-full bg-burnt-orange transition-all duration-300"></div>
                            </a>
                            <p className="mt-4 text-[13px] md:text-sm font-bold uppercase opacity-70 font-body leading-relaxed max-w-md">
                                {project.description}
                            </p>

                            <div className="mt-8 pt-6 border-t-2 border-retro-dark/10">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-retro-dark text-retro-bg px-6 py-3 border-2 border-retro-dark font-retro text-xs hover:bg-burnt-orange hover:text-retro-bg transition-all active:scale-95 shadow-[4px_4px_0px_#2d2d2d] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                                >
                                    ACCESS_REKORD
                                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
