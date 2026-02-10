import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row min-h-screen pt-1 border-b-4 border-retro-dark">
            <div className="w-full md:w-1/2 bg-burnt-orange border-r-0 md:border-r-4 border-retro-dark relative overflow-hidden flex items-center justify-center p-12 group">
                {/* CRT Scanline Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)' }}></div>

                {/* Interactive Shape Composition */}
                <div className="relative w-full aspect-square max-w-sm flex items-center justify-center">
                    {/* Rotating sun background */}
                    <div className="absolute w-72 h-72 border-4 border-dashed border-retro-dark/30 rounded-full animate-retro-spin"></div>

                    {/* Circle - Playful Bounce */}
                    <div className="relative w-56 h-56 bg-mustard rounded-full border-8 border-retro-dark shadow-[8px_8px_0px_#2d2d2d] group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-500 ease-out z-10 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-1/2 bg-retro-dark/10 absolute top-0"></div>
                    </div>

                    {/* Square - Float & Interact */}
                    <div className="absolute w-40 h-40 bg-avocado border-8 border-retro-dark shadow-[10px_10px_0px_#2d2d2d] -rotate-12 translate-x-16 translate-y-16 group-hover:translate-x-24 group-hover:translate-y-24 group-hover:rotate-12 transition-all duration-700 ease-in-out z-20 animate-retro-float"></div>

                    {/* Triangle - Sharp Accent */}
                    <div className="absolute w-0 h-0 border-l-40 border-l-transparent border-r-40 border-r-transparent border-b-[70px] border-b-retro-bg -translate-x-20 -translate-y-20 rotate-[35deg] group-hover:-rotate-[15deg] group-hover:-translate-x-28 transition-all duration-500 ease-out z-30 drop-shadow-[5px_5px_0px_rgba(45,45,45,1)]"></div>

                    {/* Minimalist Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-retro-dark"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-retro-dark"></div>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-24 bg-retro-bg text-retro-dark">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-12 h-1 bg-avocado"></span>
                    <span className="font-retro text-avocado text-sm uppercase tracking-[0.3em]">System_Online</span>
                </div>

                <h1 className="font-retro text-5xl md:text-7xl leading-[0.85] tracking-tighter uppercase mb-8">
                    JAINAM<br />
                    <span className="text-burnt-orange">DOSI</span>
                </h1>

                <div className="flex flex-col gap-6 font-body">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://drive.google.com/drive/folders/14PiBokSAVfBHBAZyrcUJjDqGozHBlIvs?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-mustard border-2 border-retro-dark font-retro text-xs shadow-[3px_3px_0px_#2d2d2d] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                        >
                            GET_RESUME
                        </a>
                        <p className="font-bold text-lg uppercase tracking-tight">Software • AI • Architect</p>
                    </div>

                    <p className="text-base max-w-md leading-relaxed opacity-70">
                        Building robust software and AI systems with seamless user experiences.
                    </p>

                    <div className="mt-8">
                        <a className="inline-block bg-avocado text-retro-bg px-10 py-5 border-4 border-retro-dark font-retro text-xl hover:bg-mustard hover:text-retro-dark transition-all shadow-[6px_6px_0px_0px_rgba(45,45,45,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:scale-95" href="#work">
                            EXPLORE_PROJECTS
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
