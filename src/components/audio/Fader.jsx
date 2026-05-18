import React from 'react';

const Fader = ({
    label,
    value,
    min = -60,
    max = 0,
    onChange,
    height = 150,
    color = '#4a90e2'
}) => {
    return (
        <div className="flex flex-col items-center gap-2 h-full">
            <div className="relative w-8 bg-white border-2 border-text rounded-full overflow-hidden" style={{ height }}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={(e) => onChange(parseFloat(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    orient="vertical" // Firefox support
                    style={{ WebkitAppearance: 'slider-vertical' }} // Webkit support
                />
                <div
                    className="absolute bottom-0 left-0 right-0 w-full transition-all duration-75"
                    style={{
                        height: `${((value - min) / (max - min)) * 100}%`,
                        backgroundColor: color
                    }}
                />
            </div>
            <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-text/70">{label}</div>
                <div className="text-xs font-mono text-text/50">{Math.round(value)} dB</div>
            </div>
        </div>
    );
};

export default Fader;
