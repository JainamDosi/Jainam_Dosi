import React from 'react';

const Hero = () => {
    return (
        <section className="grid grid-cols-12 min-h-[420px]">
            <div className="col-span-12 lg:col-span-7 p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-ui-border">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="px-2 py-0.5 bg-accent-orange/10 border border-accent-orange/30 text-accent-orange text-[9px] font-bold">MODE: AI SDE</span>
                        <span className="text-beige-muted text-[9px]">REF_ID: #JD_001_SYS</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-4 leading-none uppercase">
                        Hello!<br /><span className="text-accent-orange font-bold uppercase">I'M JAINAM DOSI</span>
                    </h1>
                    <p className="text-xs text-beige-muted max-w-sm leading-relaxed">
                        Building robust software and AI systems with seamless user experiences.
                    </p>
                </div>
                <div className="relative h-32 w-full border border-ui-border bg-instrument-bg/50 overflow-hidden flex items-center justify-center mt-8">
                    <div className="absolute inset-0 opacity-10">
                        <svg height="100%" width="100%"><defs><pattern height="20" id="grid" patternUnits="userSpaceOnUse" width="20"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"></path></pattern></defs><rect fill="url(#grid)" height="100%" width="100%"></rect></svg>
                    </div>
                    <div className="flex gap-4 items-end relative z-10 h-3/4">
                        <div className="w-6 md:w-8 bg-accent-orange/40 border border-accent-orange animate-data-bar" style={{ animationDelay: '0s' }}></div>
                        <div className="w-6 md:w-8 bg-accent-orange/20 border border-accent-orange/40 animate-data-bar" style={{ animationDelay: '0.4s' }}></div>
                        <div className="w-6 md:w-8 bg-accent-orange/60 border border-accent-orange animate-data-bar" style={{ animationDelay: '0.8s' }}></div>
                        <div className="w-6 md:w-8 bg-accent-orange/10 border border-accent-orange/20 animate-data-bar" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-6 md:w-8 bg-accent-orange border border-white/20 animate-data-bar" style={{ animationDelay: '1.2s' }}></div>
                    </div>
                    <div className="absolute bottom-2 right-2 text-[8px] font-data text-beige-muted">Learning_continously</div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-5 grid grid-rows-1 lg:grid-rows-3">
                <div className="data-cell border-b border-ui-border">
                    <span className="metric-label">Location_Coordinates</span>
                    <span className="metric-value text-base md:text-lg">19.1334° N / 72.9133° E</span>
                    <span className="text-[9px] text-beige-muted mt-2 lg:mt-auto uppercase font-bold"></span>
                </div>
                <div className="data-cell border-b border-ui-border bg-charcoal/10">
                    <span className="metric-label">Operational_Status</span>
                    <div className="flex items-center gap-3">
                        <span className="metric-value text-lg md:text-xl text-white uppercase font-bold">OPEN_FOR_COLLAB</span>
                        <span className="w-2 h-2 rounded-full bg-green-300 shadow-[0_0_8px_#c25d2e]"></span>
                    </div>
                    <span className="text-[9px] text-beige-muted mt-2 lg:mt-auto uppercase font-bold">AVAILABILITY: YES</span>
                </div>
                <div className="data-cell grid grid-cols-2 gap-px bg-ui-border">
                    <div className="bg-panel p-3 flex flex-col justify-between">
                        <span className="metric-label">Exp_Level</span>
                        <span className="metric-value font-mono">Fresher</span>
                    </div>
                    <div className="bg-panel p-3 flex flex-col justify-between">
                        <span className="metric-label">Uptime</span>
                        <span className="metric-value font-mono">99.98%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
