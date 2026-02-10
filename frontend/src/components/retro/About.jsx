import React from 'react';
import meImage from "../../assets/me2.webp";

const About = () => {
    return (
        <section className="py-24 px-6 border-y-4 border-retro-dark bg-avocado/10" id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-mustard -rotate-3 border-4 border-retro-dark"></div>
                        <div className="relative aspect-square border-4 border-retro-dark bg-retro-dark overflow-hidden">
                            <img alt="Portrait" className="w-full h-full object-cover grayscale contrast-150 brightness-110 pixel-mask" src={meImage} />
                        </div>
                    </div>
                </div>
                <div className="md:col-span-7 text-retro-dark">
                    <div className="space-y-6 text-retro-dark">
                        <h2 className="font-retro text-2xl md:text-3xl text-burnt-orange leading-none uppercase">The_Designer_Profile</h2>
                        <p className="text-lg md:text-xl font-semibold leading-relaxed font-body">
                            I build digital worlds where <span className="bg-mustard/30 px-2 border-2 border-retro-dark/20 italic">nostalgia</span> meets high-performance engineering.
                        </p>
                        <p className="text-base opacity-70 leading-relaxed font-body">
                            Based in a retro-fitted laboratory, I spend my days bridging the gap between tactile 80s aesthetics and modern interaction patterns. Every pixel is intentional, every hover is a handshake.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-6 font-body">
                            <div className="bg-retro-bg p-4 border-2 border-retro-dark retro-border">
                                <h4 className="font-retro text-xs mb-3 text-avocado uppercase">Capabilities</h4>
                                <ul className="text-xs font-bold space-y-1 uppercase tracking-tighter">
                                    <li>- UI/UX Architecture</li>
                                    <li>- Interaction Modules</li>
                                    <li>- AI System Design</li>
                                    <li>- Frontend Core</li>
                                </ul>
                            </div>
                            <div className="bg-retro-bg p-4 border-2 border-retro-dark retro-border">
                                <h4 className="font-retro text-xs mb-3 text-burnt-orange uppercase">Tech_Stack</h4>
                                <ul className="text-xs font-bold space-y-1 uppercase tracking-tighter">
                                    <li>- REACT.JS</li>
                                    <li>- NODE.RUN</li>
                                    <li>- PYTHON.ML</li>
                                    <li>- TAILWIND.CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
