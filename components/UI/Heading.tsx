import React from 'react';

interface HeadingProps {
  readonly children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl py-4">{children}</h2>;
};

export default Heading;
