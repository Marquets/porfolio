import React from 'react';

const TopBanner = () => {
    const text = "MARCO GONZÁLEZ PÉREZ · AUDIO PROGRAMMER C++ · FRONTEND DEVELOPER · CREATIVE DEVELOPER · MUSICIAN · PHOTOGRAPHER";

    return (
        <div className="fixed top-0 left-0 right-0 bg-bg z-50 overflow-hidden border-b border-border">
            <div className="flex whitespace-nowrap animate-scroll py-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted px-8">
                    {text} · {text} · {text}
                </span>
            </div>
        </div>
    );
};

export { TopBanner };
export default TopBanner;
