import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  readonly children: React.ReactNode;
}

const Testimonial: React.FC<TestimonialProps> = ({ children }) => {
  return (
    <div className="w-4/5 xs:w-1/5 py-2">
      <Image src="/Stars.webp" alt="5-Star Review" width="75" height="25" />
      <p className="font-['Montserrat'] text-sm md:text-md italic">&quot;{children}&quot;</p>
    </div>
  );
};

export default Testimonial;
