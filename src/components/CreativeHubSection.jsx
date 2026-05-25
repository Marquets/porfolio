import React from 'react';
import MusicSection from './MusicSection';
import PhotoSection from './PhotoSection';
import CreativeSection from './CreativeSection';

const CreativeHubSection = () => (
  <div>
    <MusicSection />
    <div className="border-t border-border mt-16 pt-16">
      <PhotoSection />
    </div>
    <div className="border-t border-border mt-16 pt-16">
      <CreativeSection />
    </div>
  </div>
);

export default CreativeHubSection;
