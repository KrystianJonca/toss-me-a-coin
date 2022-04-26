import React from 'react';

interface GradientHeadingProps {
  readonly children: React.ReactNode;
}

const GradientHeading: React.FC<GradientHeadingProps> = ({ children }) => {
  return (
    <span className="block bg-clip-text text-transparent bg-gradient-to-r to-darkBlue from-gold p-2">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl p-2">{children}</h1>
    </span>
  );
};

export default GradientHeading;
