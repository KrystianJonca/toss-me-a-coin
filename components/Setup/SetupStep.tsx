import React from 'react';
import Image from 'next/image';

interface SetupStepProps {
  imgSrc: string;
  readonly children: React.ReactNode;
}

const SetupStep: React.FC<SetupStepProps> = ({ children, imgSrc }) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <Image src={imgSrc} alt="Number Icon" width="100" height="100" />
      <p className="font-medium text-xl sm:text-2xl py-2">{children}</p>
    </div>
  );
};

export default SetupStep;
