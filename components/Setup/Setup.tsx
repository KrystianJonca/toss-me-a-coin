import React from 'react';

import { SectionWrapper, Heading } from '../UI';
import SetupStep from './SetupStep';

const Setup: React.FC = () => {
  return (
    <div className="bg-[#6666ff] text-white py-4 shadow-sm">
      <SectionWrapper id="setup">
        <div className="flex flex-col items-center justify-evenly max-w-5xl mx-auto  text-center">
          <Heading>Get Started in 3 Easy Steps</Heading>
          <SetupStep imgSrc="/icons/Step1.webp">
            Connect your <span className="font-bold">crypto wallet</span> of choice.
          </SetupStep>
          <SetupStep imgSrc="/icons/Step2.webp">
            Choose your <span className="font-bold">username</span>
          </SetupStep>
          <SetupStep imgSrc="/icons/Step3.webp">
            <span className="font-bold">Done!</span> Now you can customize and share your page.
          </SetupStep>

          <button className=" bg-gold hover:bg-white hover:text-darkBlue text-lg sm:text-xl md:text-2xl shadow-sm hover:shadow-xl font-bold py-2 px-4 rounded-full transition-all">
            Start my page
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Setup;
