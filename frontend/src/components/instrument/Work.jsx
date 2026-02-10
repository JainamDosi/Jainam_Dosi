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
    }
];

const Work = () => {
    return (
        <section className="" id="work">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 md:px-8 py-4 border-b border-ui-border bg-charcoal/30 gap-2">
                <h2 className="text-xs font-bold tracking-[0.3em] uppercase">Library_Index / Projects</h2>
                <span className="text-[9px] font-data text-beige-muted uppercase">TOTAL_ENTRIES: 004</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {projects.map((project, idx) => (
                    <div key={project.id} className={`group border-ui-border ${idx !== projects.length - 1 ? 'border-b sm:border-b-0 sm:border-r' : ''} ${idx % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0 lg:border-r'}`}>
                        <div className="aspect-square relative overflow-hidden bg-instrument-bg border-b border-ui-border">
                            <img alt={project.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300" src={project.image} />
                            <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-instrument-bg/80 text-[8px] font-bold border border-ui-border uppercase">{project.id}</div>
                        </div>
                        <div className="p-4 bg-charcoal/10 h-full flex flex-col">
                            <h3 className="text-[11px] font-bold mb-1 uppercase text-white font-mono">{project.title}</h3>
                            <p className="text-[9px] text-beige-muted uppercase leading-tight font-mono mb-4">{project.description}</p>
                            <div className="mt-auto flex justify-between items-center pt-2">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[8px] font-bold text-accent-orange cursor-pointer hover:underline uppercase">[ VIEW_GTHB ]</a>
                                <span className="material-symbols-outlined text-[14px] text-beige-muted">arrow_outward</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
