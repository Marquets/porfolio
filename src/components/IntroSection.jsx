import React from 'react';
import MagicText from './MagicText';
import Dither from './Dither';

const IntroSection = () => (
  <section className="min-h-[80vh] flex items-center px-8 md:px-16 lg:px-24 border-t border-border relative overflow-hidden">
    {/* Dither background */}
    <div className="absolute inset-0 opacity-60" style={{ height: '80vh' }}>
      <Dither
        waveColor={[0.8, 0.8, 0.8]}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.07}
      />
    </div>

    {/* Content */}
    <div className="w-full relative z-10">
      <p
        className="font-body text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-text/20"
        style={{ fontWeight: 500 }}
      >
        <MagicText
          text="Hi there, I'm Marco — a creative developer highly driven by using my technical knowledge into creative processes. My goal is to create using technology in order to be part of innovative projects."
          wordDelay={0.06}
          startDelay={0.1}
        />
      </p>
    </div>
  </section>
);

export default IntroSection;
