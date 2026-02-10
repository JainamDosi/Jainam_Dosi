import React from 'react';

const Contact = () => {
    return (
        <footer className="bg-charcoal/40 p-10" id="contact">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-12 h-px bg-accent-orange"></div>
                <p className="text-[10px] text-beige-muted uppercase tracking-widest font-mono">Awaiting_Instructions</p>
                <a className="text-4xl font-bold text-white hover:text-accent-orange transition-colors tracking-tighter uppercase underline decoration-accent-orange decoration-2 underline-offset-8 font-mono" href="mailto:dosijainamiitb@gmail.com">
                    INITIATE_HANDSHAKE
                </a>
                <div className="flex gap-4 pt-8">
                    <a className="px-4 py-2 border border-ui-border text-[9px] hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all font-mono uppercase" href="https://github.com/JainamDosi" target="_blank" rel="noopener noreferrer">GITHUB_</a>
                    <a className="px-4 py-2 border border-ui-border text-[9px] hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all font-mono uppercase" href="https://www.linkedin.com/in/jainam-dosi" target="_blank" rel="noopener noreferrer">LINKEDIN_</a>
                    <a className="px-4 py-2 border border-ui-border text-[9px] hover:bg-accent-orange hover:text-white hover:border-accent-orange transition-all font-mono uppercase" href="https://x.com/CodeJ31969" target="_blank" rel="noopener noreferrer">X_TWITTER</a>
                </div>
                <div className="w-full flex justify-between items-end pt-12">
                    <div className="text-[8px] text-beige-muted text-left font-mono">
                        © 2026 / JAINAM DOSI AI SDE<br />
                        CORE_VERSION: 1.0.42_STABLE
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-bold text-accent-orange font-mono uppercase">JAINAM_DOSI.SYSTEMS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
