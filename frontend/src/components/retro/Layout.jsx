import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="retro-wrapper relative overflow-x-hidden min-h-screen">
            {children}
            <div className="fixed top-1/4 -left-10 w-24 h-24 bg-mustard/20 border-2 border-retro-dark/10 rounded-full blur-xl pointer-events-none -z-10"></div>
            <div className="fixed bottom-1/4 -right-10 w-40 h-40 bg-burnt-orange/10 border-2 border-retro-dark/10 rotate-45 pointer-events-none -z-10"></div>
        </div>
    );
};

export default Layout;
