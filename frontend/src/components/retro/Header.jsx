import React from 'react';

const Header = ({ onToggle }) => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b-4 border-retro-dark bg-retro-bg">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 px-6">
                <div className="font-retro text-xl tracking-tighter">JAINAM_DOSI_v1.0</div>
                <div className="hidden md:flex items-center gap-8 font-bold uppercase text-sm tracking-widest text-retro-dark">
                    <a className="hover:text-burnt-orange transition-colors" href="#work">Projects</a>
                    <a className="hover:text-burnt-orange transition-colors" href="#about">The User</a>
                    <a className="hover:text-burnt-orange transition-colors" href="#contact">Connect</a>
                </div>
                <div
                    onClick={onToggle}
                    className="bg-mustard px-4 py-2 border-2 border-retro-dark font-retro text-xs hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] cursor-pointer text-retro-dark"
                >
                    SWITCH MODE
                </div>
            </div>
        </nav>
    );
};

export default Header;
