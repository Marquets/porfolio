import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MagicText = ({ text, className = '', wordDelay = 0.07, startDelay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -180px 0px' });
  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.15, color: '#f0f0f0' }}
          animate={isInView ? {
            opacity: [0.15, 1, 1],
            color: ['#f0f0f0', '#F97316', '#f0f0f0'],
          } : { opacity: 0.15, color: '#f0f0f0' }}
          transition={{
            delay: startDelay + i * wordDelay,
            duration: 0.75,
            ease: 'easeOut',
            times: [0, 0.35, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default MagicText;
