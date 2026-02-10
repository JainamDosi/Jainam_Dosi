import React from 'react';

const SidebarItem = ({ icon, label, href, active, external }) => (
    <div className="relative group flex items-center justify-center">
        <a
            className={`btn-interact ${active ? 'text-accent-orange' : 'text-beige-muted hover:text-beige'}`}
            href={href}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : ""}
        >
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
        </a>

        {/* Tooltip */}
        <div className="absolute left-full ml-4 px-2 py-1 bg-charcoal border border-ui-border text-[9px] text-beige uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            {label}
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 bg-charcoal border-l border-b border-ui-border rotate-45"></div>
        </div>
    </div>
);

const Sidebar = () => {
    return (
        <nav className="w-20 col-span-1 md:border-r border-ui-border flex flex-col items-center py-6 gap-8 bg-charcoal/20 min-h-[600px] h-full">
            <SidebarItem icon="grid_view" label="Dashboard" href="#" active />
            <div className="w-4 h-px bg-ui-border opacity-50"></div>

            <SidebarItem icon="layers" label="Deployed_Work" href="#work" />
            <SidebarItem icon="account_tree" label="Architect_Manifesto" href="#about" />
            <SidebarItem icon="terminal" label="Initiate_Handshake" href="#contact" />

            <div className="w-4 h-px bg-ui-border opacity-50"></div>

            <SidebarItem icon="article" label="View_Resume" href="#" external />
            <SidebarItem icon="code" label="Github_Source" href="https://github.com/JainamDosi" external />
            <SidebarItem icon="groups" label="LinkedIn_Profile" href="https://www.linkedin.com/in/jainam-dosi" external />

            <div className="mt-auto pb-4">
                <div className="w-1 h-20 bg-ui-border relative">
                    <div className="absolute top-1/3 left-0 w-full h-4 bg-accent-orange"></div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
