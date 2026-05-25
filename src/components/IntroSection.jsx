import React from 'react';
import { motion } from 'framer-motion';
import MagicText from './MagicText';

const IntroSection = () => (
  <section className="min-h-[80vh] flex items-center px-8 md:px-16 lg:px-24 border-t border-border">
    <div className="w-full">
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
