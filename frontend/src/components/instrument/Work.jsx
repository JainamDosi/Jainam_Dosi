import React from 'react';

const projects = [
    {
        id: "PRJ_AGENT_CODE",
        title: "Agent Code",
        description: "AI powered IDE built using LangGraph and gemini APIs",
        link: "https://github.com/JainamDosi/AgentCode",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXNXYE_MWTBofSoy2LE8y4DglnOZj8CX0G7mnTZnEOmBVeo5vHV2V6wLFEjSxSMdMKGS9pvW-YrvwQ3zkXVzs1IMlceC9LapIUTkT3uG2WlIJh4pTOoVvWfqH_aJCwfTdtCNstLHTe4b17GCWNJ74wFDOy00GpFVTyKARcRwEOMRBDoIaEYrYk3Ch7pLW3L1bVG-7TBrSQNL9oOgXDOOwOpn9eFpNiu-TXASNkBFDri7Xn76RNhRPUkBAHaKza91ZRVT7OBJS72Ia6"
    },
    {
        id: "PRJ_QNA_CHAT",
        title: "QnA Chatbot",
        description: "Retrieval Augmented Generation chatbot with memory and context",
        link: "https://github.com/JainamDosi/QnA-Chatbot",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCASQpXSGoou9oG7Ep1nvJmKEjPHndpkwIKgcooKGfwlKvuvBNV80ClBPtfR8gJfolmYJi74GVg_mJO5IFMqjePHHce3Z_fhXLLy0ElSuN7un3ygpTpblZUEkzHTJGEghn2F7dLgnBn-jhoAtccrhL1h-WH_y-hfK_DlkXTkWe3x46CNVALLbF5LEdRKmW9QDPvL8aVdO3Tt3QQ-kUSCVQUsCTEBX5oWpNKMTYVn9rO54Sd9SZBazNZNRpaDB2EBE5aSbgOVLLMdUw6"
    },
    {
        id: "PRJ_MEESHO",
        title: "Meesho Hackathon",
        description: "National Finalist among 4k+ candidates. E-commerce optimization.",
        link: "https://github.com/JainamDosi/MeeshoDICE_Finals_Prototype",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClC9STr4xvAq5R-MyiFMI13pAcNpfoVnvRTk4OWcn3-bXZGJhN0mhWaxjhVZPolz-8N-0HR7OccwnkXOmYoogruFHVt6yvvbfU_2dREolXXOKS8ueLb0nGB8qEM3ktKlSvIR43J3jfPYoxn9Nc-uW6CUISYgL4pAYNjmauAWfjs_j3q8nCNomSJn7-ALLUhhuhfcD1_kPaLGVpnZLXLo9V538VIusmCg7VXAG5cNTTEepvWU9djv3QAywq-tWAGK0_iWhU6C1daTwl"
    },
    {
        id: "PRJ_IMMERSIVE",
        title: "Immersive Scroll",
        description: "Mini project with smooth immersive storytelling experience",
        link: "https://github.com/JainamDosi/ImmersiveScroll",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6mzL0dvAsF-YXOhtOMo-3TVe1gGjRwUzGGUzZ3tZA9ZVqzJIFrmyQL_KjJ2MziVRrEMmcbEe_K8WVNOr_SxT8spclRUGJW9cS9eFgANMRTlt-EWTeIjH7QA8UiB0Ff_KwmvwmuySa_UEiGs6bTA_roTXjvA4VejbwruDVO-dIBThuaxSfI06EMeY53faFQdEiEbb4Ay0N8VnU7rkkqwFerblEZ38Mr18BmWeIivRfVots-y-QzGP5q2wTpchekShX1QGZcfoQt3gt"
    },
    {
        id: "PRJ_PORTFOLIO",
        title: "Personal Portfolio",
        description: "Cyberpunk & Retro dual-mode high-performance portfolio",
        link: "#",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_EXPMED",
        title: "ExpMed AI",
        description: "AI tool with OCR/TTS for medical report interpretation",
        link: "#",
        image: "https://images.unsplash.com/photo-1576091160550-2173dad9998e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_BUDGET",
        title: "50-30-20 Tool",
        description: "Financial budgeting tool enforcing the 50-30-20 rule",
        link: "#",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_PLACEVAULT",
        title: "Placevault",
        description: "Placement resource library for sharing and accessing materials",
        link: "#",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "PRJ_ITZTHERE",
        title: "Itzthere",
        description: "Professional doc sharing platform with RBAC (Internship)",
        link: "#",
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
