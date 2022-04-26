import React from 'react';

interface SectionWrapperProps {
  id?: string;
  readonly children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section id={id} className="flex items-center justify-center p-2 md:p-4">
      {children}
    </section>
  );
};

export default SectionWrapper;
