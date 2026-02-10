import React from 'react';

const projects = [
    {
        id: "PRJ_001",
        title: "Agent Code",
        description: "AI powered IDE built using LangGraph and gemini APIs",
        tag: "AI_IDE",
        link: "https://github.com/JainamDosi/AgentCode",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXNXYE_MWTBofSoy2LE8y4DglnOZj8CX0G7mnTZnEOmBVeo5vHV2V6wLFEjSxSMdMKGS9pvW-YrvwQ3zkXVzs1IMlceC9LapIUTkT3uG2WlIJh4pTOoVvWfqH_aJCwfTdtCNstLHTe4b17GCWNJ74wFDOy00GpFVTyKARcRwEOMRBDoIaEYrYk3Ch7pLW3L1bVG-7TBrSQNL9oOgXDOOwOpn9eFpNiu-TXASNkBFDri7Xn76RNhRPUkBAHaKza91ZRVT7OBJS72Ia6"
    },
    {
        id: "PRJ_002",
        title: "QnA Chatbot",
        description: "Retrieval Augmented Generation chatbot with memory and context",
        tag: "NLP_RAG",
        link: "https://github.com/JainamDosi/QnA-Chatbot",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCASQpXSGoou9oG7Ep1nvJmKEjPHndpkwIKgcooKGfwlKvuvBNV80ClBPtfR8gJfolmYJi74GVg_mJO5IFMqjePHHce3Z_fhXLLy0ElSuN7un3ygpTpblZUEkzHTJGEghn2F7dLgnBn-jhoAtccrhL1h-WH_y-hfK_DlkXTkWe3x46CNVALLbF5LEdRKmW9QDPvL8aVdO3Tt3QQ-kUSCVQUsCTEBX5oWpNKMTYVn9rO54Sd9SZBazNZNRpaDB2EBE5aSbgOVLLMdUw6"
    },
    {
        id: "PRJ_003",
        title: "Meesho Hackathon",
        description: "National Finalist among 4k+ candidates. E-commerce optimization.",
        tag: "FINALS",
        link: "https://github.com/JainamDosi/MeeshoDICE_Finals_Prototype",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClC9STr4xvAq5R-MyiFMI13pAcNpfoVnvRTk4OWcn3-bXZGJhN0mhWaxjhVZPolz-8N-0HR7OcwnkXOmYoogruFHVt6yvvbfU_2dREolXXOKS8ueLb0nGB8qEM3ktKlSvIR43J3jfPYoxn9Nc-uW6CUISYgL4pAYNjmauAWfjs_j3q8nCNomSJn7-ALLUhhuhfcD1_kPaLGVpnZLXLo9V538VIusmCg7VXAG5cNzTTEepvWU9djv3QAywq-tWAGK0_iWhU6C1daTwl"
    },
    {
        id: "PRJ_004",
        title: "Immersive Scroll",
        description: "Mini project with smooth immersive storytelling experience",
        tag: "UI_UX",
        link: "https://github.com/JainamDosi/ImmersiveScroll",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6mzL0dvAsF-YXOhtOMo-3TVe1gGjRwUzGGUzZ3tZA9ZVqzJIFrmyQL_KjJ2MziVRrEMmcbEe_K8WVNOr_SxT8spclRUGJW9cS9eFgANMRTlt-EWTeIjH7QA8UiB0Ff_KwmvwmuySa_UEiGs6bTA_roTXjvA4VejbwruDVO-dIBThuaxSfI06EMeY53faFQdEiEbb4Ay0N8VnU7rkkqwFerblEZ38Mr18BmWeIivRfVots-y-QzGP5q2wTpchekShX1QGZcfoQt3gt"
    }
];

const Work = () => {
    return (
        <section className="py-24 bg-clay/30" id="work">
            <div className="px-6 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="font-retro text-2xl md:text-3xl uppercase text-retro-dark">The Archive</h2>
                    <p className="font-semibold text-avocado uppercase tracking-widest mt-2 font-body text-xs">Horizontal Scan Protocol Activated</p>
                </div>
                <div className="hidden md:block font-semibold text-[10px] text-retro-dark font-body uppercase opacity-60 tracking-widest">SCROLL HORIZONTALLY →</div>
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-8 px-6 pb-12 cursor-grab active:cursor-grabbing">
                {projects.map((project, idx) => (
                    <div key={project.id} className="min-w-[320px] md:min-w-[450px] group">
                        <div className="relative aspect-[4/3] bg-retro-dark border-4 border-retro-dark overflow-hidden retro-border group-hover:-translate-y-2 transition-transform">
                            <img alt={project.title} className="w-full h-full object-cover pixel-mask opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all font-body" src={project.image} />
                            <div className={`absolute bottom-4 left-4 ${idx % 2 === 0 ? 'bg-mustard' : 'bg-burnt-orange'} px-2 py-1 text-[10px] font-retro border-2 border-retro-dark text-retro-dark`}>
                                {project.tag}
                            </div>
                        </div>
                        <div className="mt-8 text-retro-dark">
                            <h3 className="font-retro text-2xl">{project.title}</h3>
                            <p className="text-sm font-bold uppercase opacity-60 font-body">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 font-bold text-burnt-orange hover:underline font-body">ACCESS_GTHB_REKORD →</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
