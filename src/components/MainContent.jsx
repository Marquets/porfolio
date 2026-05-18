import React from 'react';

const MainContent = ({ children }) => {
    return (
        <main className="flex-1 bg-bg relative overflow-hidden m-4 lg:m-4 border border-border min-h-[calc(100vh-6rem)]">
            <div className="relative z-10">
                {children}
            </div>
        </main>
    );
};

export default MainContent;
