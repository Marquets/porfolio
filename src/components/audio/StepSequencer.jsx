import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone';
import Fader from './Fader';

const StepSequencer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [tempo, setTempo] = useState(120);
  const [volume, setVolume] = useState(-6);

  // 4 Tracks x 16 Steps
  const [grid, setGrid] = useState([
    Array(16).fill(false), // Kick
    Array(16).fill(false), // Snare
    Array(16).fill(false), // HiHat
    Array(16).fill(false), // Perc
  ]);

  const playersRef = useRef(null);
  const seqRef = useRef(null);

  // Initialize Audio Engine
  useEffect(() => {
    // Create synths for drum sounds to avoid loading external samples
    const kick = new Tone.MembraneSynth({
      pitchDecay: 0.05,
      octaves: 10,
      oscillator: { type: "sine" },
      envelope: { attack: 0.001, decay: 0.4, sustain: 0.01, release: 1.4, attackCurve: "exponential" }
    }).toDestination();

    const snare = new Tone.NoiseSynth({
      noise: { type: "white" },
      envelope: { attack: 0.005, decay: 0.1, sustain: 0 }
    }).toDestination();

    const hihat = new Tone.MetalSynth({
      frequency: 200,
      envelope: { attack: 0.001, decay: 0.1, release: 0.01 },
      harmonicity: 5.1,
      modulationIndex: 32,
      resonance: 4000,
      octaves: 1.5
    }).toDestination();

    const perc = new Tone.PluckSynth({
      attackNoise: 1,
      dampening: 4000,
      resonance: 0.7
    }).toDestination();

    // Master Volume for Sequencer
    const vol = new Tone.Volume(volume).toDestination();
    kick.connect(vol);
    snare.connect(vol);
    hihat.connect(vol);
    perc.connect(vol);

    playersRef.current = { kick, snare, hihat, perc, vol };

    return () => {
      kick.dispose();
      snare.dispose();
      hihat.dispose();
      perc.dispose();
      vol.dispose();
    };
  }, []);

  // Update Volume
  useEffect(() => {
    if (playersRef.current) {
      playersRef.current.vol.volume.value = volume;
    }
  }, [volume]);

  // Update Tempo
  useEffect(() => {
    Tone.Transport.bpm.value = tempo;
  }, [tempo]);

  // Toggle Step
  const toggleStep = (trackIndex, stepIndex) => {
    const newGrid = [...grid];
    newGrid[trackIndex][stepIndex] = !newGrid[trackIndex][stepIndex];
    setGrid(newGrid);
  };

  // Play/Pause
  const togglePlay = async () => {
    await Tone.start();

    if (isPlaying) {
      Tone.Transport.pause();
      setIsPlaying(false);
    } else {
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  // Sequencer Loop
  useEffect(() => {
    // Dispose old sequence if it exists
    if (seqRef.current) {
      seqRef.current.dispose();
    }

    const loop = new Tone.Sequence(
      (time, step) => {
        setCurrentStep(step);

        if (grid[0][step] && playersRef.current) playersRef.current.kick.triggerAttackRelease("C1", "8n", time);
        if (grid[1][step] && playersRef.current) playersRef.current.snare.triggerAttackRelease("8n", time);
        if (grid[2][step] && playersRef.current) playersRef.current.hihat.triggerAttackRelease("32n", time, 0.3);
        if (grid[3][step] && playersRef.current) playersRef.current.perc.triggerAttackRelease("C4", "16n", time);
      },
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      "16n"
    );

    loop.loop = true;
    loop.start(0);
    seqRef.current = loop;

    return () => {
      if (loop) {
        loop.dispose();
      }
    };
  }, [grid]);

  const trackNames = ['Kick', 'Snare', 'HiHat', 'Perc'];

  return (
    <div className="p-1.5 rounded border border-border/30">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-1">
          <input
            type="number"
            value={tempo}
            onChange={(e) => setTempo(Number(e.target.value))}
            className="w-10 text-center border border-border/50 rounded px-0.5 text-xs"
          />
          <span className="text-xs text-text/50">BPM</span>
        </div>
        <button
          onClick={togglePlay}
          className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${isPlaying
            ? 'bg-accent-primary text-white'
            : 'bg-text text-bg hover:bg-accent-primary hover:text-white'
            }`}
        >
          {isPlaying ? '■' : '▶'}
        </button>
      </div>

      <div className="space-y-1">
        {grid.map((track, trackIndex) => (
          <div key={trackIndex} className="flex items-center gap-1">
            <div className="w-8 text-xs text-text/60 text-right text-[10px]">
              {trackNames[trackIndex]}
            </div>
            <div className="flex-1 grid grid-cols-8 gap-0.5">
              {track.slice(0, 8).map((active, stepIndex) => (
                <button
                  key={stepIndex}
                  onClick={() => toggleStep(trackIndex, stepIndex)}
                  className={`aspect-square rounded-sm transition-colors ${active
                    ? 'bg-accent-primary'
                    : 'bg-border/30 hover:bg-border'
                    } ${currentStep === stepIndex && isPlaying ? 'ring-1 ring-text' : ''
                    }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSequencer;
