import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';
import Knob from './Knob';

const Synthesizer = () => {
    // Osc 1
    const [osc1Type, setOsc1Type] = useState('sine');
    const [osc1Vol, setOsc1Vol] = useState(0); // dB

    // Osc 2
    const [osc2Type, setOsc2Type] = useState('square');
    const [osc2Vol, setOsc2Vol] = useState(-10); // dB

    // Filter
    const [cutoff, setCutoff] = useState(2000);
    const [resonance, setResonance] = useState(1);

    // Effects
    const [chorusWet, setChorusWet] = useState(0);
    const [reverbWet, setReverbWet] = useState(0);

    const synthRef = useRef(null);

    useEffect(() => {
        // Effects Chain
        const reverb = new Tone.Reverb({ decay: 4, wet: 0 }).toDestination();
        const chorus = new Tone.Chorus({ frequency: 4, delayTime: 2.5, depth: 0.5, wet: 0 }).connect(reverb);
        const filter = new Tone.Filter({ frequency: 2000, Q: 1, type: "lowpass" }).connect(chorus);

        // PolySynth (Dual Oscillator simulation by layering or using PolySynth features)
        // For simplicity and better control, we'll use one PolySynth but change its voice
        // To do true dual osc with independent volume, we need 2 PolySynths

        const synth1 = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: osc1Type },
            envelope: { attack: 0.05, decay: 0.1, sustain: 0.3, release: 1 }
        }).connect(filter);

        const synth2 = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: osc2Type },
            envelope: { attack: 0.05, decay: 0.1, sustain: 0.3, release: 1 }
        }).connect(filter);

        // Initial Volumes
        synth1.volume.value = osc1Vol;
        synth2.volume.value = osc2Vol;

        synthRef.current = { synth1, synth2, filter, chorus, reverb };

        return () => {
            synth1.dispose();
            synth2.dispose();
            filter.dispose();
            chorus.dispose();
            reverb.dispose();
        };
    }, []);

    // Update Params
    useEffect(() => {
        if (!synthRef.current) return;
        const { synth1, synth2, filter, chorus, reverb } = synthRef.current;

        synth1.set({ oscillator: { type: osc1Type } });
        synth1.volume.value = osc1Vol;

        synth2.set({ oscillator: { type: osc2Type } });
        synth2.volume.value = osc2Vol;

        filter.frequency.value = cutoff;
        filter.Q.value = resonance;

        chorus.wet.value = chorusWet / 100;
        reverb.wet.value = reverbWet / 100;

    }, [osc1Type, osc1Vol, osc2Type, osc2Vol, cutoff, resonance, chorusWet, reverbWet]);

    // Keyboard Input
    const playNote = (note) => {
        if (synthRef.current) {
            synthRef.current.synth1.triggerAttack(note);
            synthRef.current.synth2.triggerAttack(note);
        }
    };

    const stopNote = (note) => {
        if (synthRef.current) {
            synthRef.current.synth1.triggerRelease(note);
            synthRef.current.synth2.triggerRelease(note);
        }
    };

    const keys = [
        { note: 'C4', label: 'A', key: 'a' },
        { note: 'D4', label: 'S', key: 's' },
        { note: 'E4', label: 'D', key: 'd' },
        { note: 'F4', label: 'F', key: 'f' },
        { note: 'G4', label: 'G', key: 'g' },
        { note: 'A4', label: 'H', key: 'h' },
        { note: 'B4', label: 'J', key: 'j' },
        { note: 'C5', label: 'K', key: 'k' },
    ];

    // Keyboard event listeners
    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = keys.find(k => k.key === e.key.toLowerCase());
            if (key && !e.repeat) {
                playNote(key.note);
            }
        };

        const handleKeyUp = (e) => {
            const key = keys.find(k => k.key === e.key.toLowerCase());
            if (key) {
                stopNote(key.note);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <div className="p-1.5 rounded border border-border/30">
            <div className="grid grid-cols-4 gap-1.5">
                {/* Oscillator 1 */}
                <div className="p-1 rounded border border-border/20">
                    <h4 className="font-bold text-center mb-0.5 text-[9px] text-accent-primary">O1</h4>
                    <div className="flex justify-center gap-0.5 mb-0.5">
                        <button
                            onClick={() => setOsc1Type('sine')}
                            className={`px-0.5 py-0.5 rounded text-[9px] font-bold ${osc1Type === 'sine' ? 'bg-accent-primary text-white' : 'bg-white border'}`}
                        >∿</button>
                        <button
                            onClick={() => setOsc1Type('square')}
                            className={`px-0.5 py-0.5 rounded text-[9px] font-bold ${osc1Type === 'square' ? 'bg-accent-primary text-white' : 'bg-white border'}`}
                        >⊓</button>
                    </div>
                    <Knob label="" value={osc1Vol + 60} min={0} max={60} onChange={(v) => setOsc1Vol(v - 60)} color="#ff5722" size={25} />
                </div>

                {/* Oscillator 2 */}
                <div className="p-1 rounded border border-border/20">
                    <h4 className="font-bold text-center mb-0.5 text-[9px] text-accent-primary">O2</h4>
                    <div className="flex justify-center gap-0.5 mb-0.5">
                        <button
                            onClick={() => setOsc2Type('sine')}
                            className={`px-0.5 py-0.5 rounded text-[9px] font-bold ${osc2Type === 'sine' ? 'bg-accent-primary text-white' : 'bg-white border'}`}
                        >∿</button>
                        <button
                            onClick={() => setOsc2Type('square')}
                            className={`px-0.5 py-0.5 rounded text-[9px] font-bold ${osc2Type === 'square' ? 'bg-accent-primary text-white' : 'bg-white border'}`}
                        >⊓</button>
                    </div>
                    <Knob label="" value={osc2Vol + 60} min={0} max={60} onChange={(v) => setOsc2Vol(v - 60)} color="#ff5722" size={25} />
                </div>

                {/* Filter */}
                <div className="p-1 rounded border border-border/20">
                    <h4 className="font-bold text-center mb-0.5 text-[9px] text-accent-secondary">FLT</h4>
                    <Knob label="" value={cutoff} min={20} max={10000} onChange={setCutoff} color="#ffd93d" size={25} />
                </div>

                {/* Effects */}
                <div className="p-1 rounded border border-border/20">
                    <h4 className="font-bold text-center mb-0.5 text-[9px] text-accent-secondary">FX</h4>
                    <Knob label="" value={reverbWet} min={0} max={100} onChange={setReverbWet} color="#4a90e2" size={25} />
                </div>
            </div>
        </div>
    );
};

export default Synthesizer;
