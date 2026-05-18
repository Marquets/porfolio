import React, { useState } from 'react';
import * as Tone from 'tone';
import StepSequencer from './audio/StepSequencer';
import Synthesizer from './audio/Synthesizer';

const PlaygroundSection = () => {
    const [audioStarted, setAudioStarted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const startAudio = async () => {
        await Tone.start();
        setAudioStarted(true);
    };

    return (
        <div className="fixed top-20 right-4 w-80 bg-sidebar border border-white/10 shadow-2xl z-50">
            {/* Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/10"
            >
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent-primary" />
                    <h2 className="text-xs font-mono uppercase tracking-widest text-white/60">Audio Playground</h2>
                </div>
                <span className="font-mono text-[10px] text-white/30">{isOpen ? '▼' : '▶'}</span>
            </button>

            {/* Content */}
            {isOpen && (
                <div className="p-3 bg-sidebar">
                    {!audioStarted && (
                        <button
                            onClick={startAudio}
                            className="w-full px-3 py-2 bg-accent-primary text-text text-xs font-mono uppercase tracking-widest hover:bg-white transition-all mb-2"
                        >
                            ▶ Start Audio
                        </button>
                    )}
                    <div className="space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto">
                        <StepSequencer />
                        <Synthesizer />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlaygroundSection;
