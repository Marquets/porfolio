import React, { useState, useEffect, useRef } from 'react';

const Knob = ({
    label,
    value,
    min = 0,
    max = 100,
    onChange,
    size = 60,
    color = '#ff5722'
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [startValue, setStartValue] = useState(0);
    const knobRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const deltaY = startY - e.clientY;
            const range = max - min;
            const deltaValue = (deltaY / 100) * range; // 100px drag = full range

            let newValue = startValue + deltaValue;
            newValue = Math.max(min, Math.min(max, newValue));

            onChange(newValue);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startY, startValue, min, max, onChange]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartY(e.clientY);
        setStartValue(value);
    };

    // Calculate rotation (-135 to 135 degrees)
    const percentage = (value - min) / (max - min);
    const rotation = -135 + (percentage * 270);

    return (
        <div className="flex flex-col items-center gap-2 select-none">
            <div
                ref={knobRef}
                className="relative rounded-full bg-white border-2 border-text cursor-ns-resize shadow-sm hover:shadow-md transition-shadow"
                style={{ width: size, height: size }}
                onMouseDown={handleMouseDown}
            >
                <div
                    className="absolute w-1.5 h-1/2 bg-text left-1/2 -ml-[3px] origin-bottom rounded-full"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        bottom: '50%',
                        backgroundColor: color
                    }}
                />
            </div>
            <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-text/70">{label}</div>
                <div className="text-xs font-mono text-text/50">{Math.round(value)}</div>
            </div>
        </div>
    );
};

export default Knob;
