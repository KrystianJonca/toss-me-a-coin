import React from 'react';

interface SectionWrapperProps {
  id?: String;
  readonly children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section
      className="flex items-center justify-center p-2 md:p-4"
      {...(typeof id !== undefined && `id=${id}`)}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
