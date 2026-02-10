import React from 'react';
import meImage from "../../assets/me2.webp";

const About = () => {
    return (
        <section className="py-24 px-6 border-y-4 border-retro-dark bg-avocado/10" id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-mustard -rotate-3 border-4 border-retro-dark transition-transform group-hover:rotate-0"></div>
                        <div className="relative aspect-square border-4 border-retro-dark bg-retro-dark overflow-hidden">
                            <img alt="Portrait" className="w-full h-full object-cover grayscale group-hover:grayscale-0 contrast-150 group-hover:contrast-100 brightness-110 transition-all duration-700 pixel-mask" src={meImage} />
                        </div>
                    </div>
                </div>
                <div className="md:col-span-7 text-retro-dark">
                    <div className="space-y-6 text-retro-dark">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="font-retro text-2xl md:text-3xl text-burnt-orange leading-none uppercase">The_Designer_Profile</h2>
                            <div className="p-1 bg-mustard/10 border-2 border-retro-dark/20 rounded-sm">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/80px-Indian_Institute_of_Technology_Bombay_Logo.svg.png"
                                    alt="IIT Bombay Logo"
                                    className="w-10 h-10 pixel-mask"
                                />
                            </div>
                        </div>
                        <p className="text-lg md:text-xl font-semibold leading-relaxed font-body">
                            I bridge the gap between <span className="bg-mustard/30 px-2 border-2 border-retro-dark/20 italic">creative design</span> and technical engineering.
                        </p>
                        <p className="text-base opacity-70 leading-relaxed font-body">
                            I build robust software and AI systems that look great and work even better. My goal is to blend modern technology with a focus on high-quality user experiences.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 font-body">
                            <div className="bg-retro-bg p-4 border-2 border-retro-dark retro-border">
                                <h4 className="font-retro text-[10px] mb-3 text-avocado uppercase">Languages</h4>
                                <div className="flex flex-wrap gap-1">
                                    {["C++", "Python", "JS", "TS"].map(item => (
                                        <span key={item} className="px-1.5 py-0.5 bg-mustard/20 border border-retro-dark/30 hover:border-avocado transition-colors duration-300 text-[9px] font-bold uppercase cursor-default">{item}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-retro-bg p-4 border-2 border-retro-dark retro-border">
                                <h4 className="font-retro text-[10px] mb-3 text-burnt-orange uppercase">Web_Backend</h4>
                                <div className="flex flex-wrap gap-1">
                                    {["React", "Next", "Node", "Express", "Mongo", "Firebase", "Supabase"].map(item => (
                                        <span key={item} className="px-1.5 py-0.5 bg-mustard/20 border border-retro-dark/30 hover:border-burnt-orange transition-colors duration-300 text-[9px] font-bold uppercase cursor-default">{item}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-retro-bg p-4 border-2 border-retro-dark retro-border">
                                <h4 className="font-retro text-[10px] mb-3 text-avocado uppercase">AI_ML_Modules</h4>
                                <div className="flex flex-wrap gap-1">
                                    {["LangChain", "LangGraph", "RAG", "LLM", "HuggingFace", "Pinecone", "ChromaDB", "n8n"].map(item => (
                                        <span key={item} className="px-1.5 py-0.5 bg-mustard/20 border border-retro-dark/30 hover:border-avocado transition-colors duration-300 text-[9px] font-bold uppercase cursor-default">{item}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-retro-bg p-4 border-2 border-retro-dark retro-border">
                                <h4 className="font-retro text-[10px] mb-3 text-burnt-orange uppercase">CS_Fundamentals</h4>
                                <div className="flex flex-wrap gap-1">
                                    {["DSA", "OOP", "DBMS", "OS"].map(item => (
                                        <span key={item} className="px-1.5 py-0.5 bg-mustard/20 border border-retro-dark/30 hover:border-burnt-orange transition-colors duration-300 text-[9px] font-bold uppercase cursor-default">{item}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="sm:col-span-2 bg-retro-bg p-4 border-2 border-retro-dark retro-border">
                                <h4 className="font-retro text-[10px] mb-3 text-avocado uppercase">Tools_Platforms</h4>
                                <div className="flex flex-wrap gap-1">
                                    {["Git", "GitHub", "Postman", "Figma", "Cursor", "Antigravity"].map(item => (
                                        <span key={item} className="px-1.5 py-0.5 bg-mustard/20 border border-retro-dark/30 hover:border-avocado transition-colors duration-300 text-[9px] font-bold uppercase cursor-default">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
