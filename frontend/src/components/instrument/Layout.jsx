import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="instrument-wrapper min-h-screen">
            <div className="window-frame">
                {children}
            </div>


        </div>
    );
};

export default Layout;
