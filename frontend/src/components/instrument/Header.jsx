import React from 'react';

const Header = ({ onToggle, onMenuToggle }) => {
    return (
        <header className="border-b border-ui-border bg-charcoal/50 flex items-center justify-between px-4 py-2 sticky top-0 z-[60] backdrop-blur-md">
            <div className="flex items-center gap-2 md:gap-4">
                <button
                    className="md:hidden flex items-center justify-center p-1 text-beige-muted hover:text-white"
                    onClick={onMenuToggle}
                >
                    <span className="material-symbols-outlined text-[20px]">menu</span>
                </button>
                <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-ui-border"></div>
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-ui-border"></div>
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-ui-border"></div>
                </div>
                <div className="h-4 w-px bg-ui-border flex-shrink-0"></div>
                <span className="text-[8px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] opacity-80 uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] md:max-w-none font-mono">JAINAM_OS_v1.0</span>
            </div>
            <div className="flex items-center gap-3 md:gap-6 text-[8px] md:text-[9px] font-medium text-beige-muted">
                <span className="text-accent-orange flex items-center gap-1 ml-1 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse"></span> <span className="hidden xs:inline">SYSTEM.ACTIVE</span><span className="xs:hidden font-bold">ACTV</span>
                </span>
                <button
                    onClick={onToggle}
                    className="cursor-pointer hover:text-white border border-ui-border px-2 py-0.5 bg-instrument-bg/50 transition-colors text-[8px] md:text-[9px] font-mono"
                >
                    [ MODE_TOGGLE ]
                </button>
                <span className="hidden sm:block">CPU_LOAD: 12.4%</span>
                <div className="hidden lg:flex items-center gap-2 bg-instrument-bg px-2 py-1 border border-ui-border text-beige">
                    <span className="material-symbols-outlined text-[12px]">settings_input_component</span>
                    PORT: 8080
                </div>
            </div>
        </header>
    );
};

export default Header;
