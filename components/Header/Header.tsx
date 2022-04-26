import React from 'react';
import Image from 'next/image';

import Button from '../UI/Button';
import SectionWrapper from '../UI/SectionWrapper';
import Testimonial from './Testimonial';

const HeroSection: React.FC = () => {
  const handleClick = () => {
    console.log('BTN Clicked');
  };

  return (
    <SectionWrapper id="hero">
      <div className="text-center mt-8 sm:mt-10 md:mt-12 max-w-5xl">
        <span className="block bg-clip-text text-transparent bg-gradient-to-r to-darkBlue from-gold p-2">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl p-2">
            Crypto Donations Made Easy For Everyone.
          </h1>
        </span>

        <p className="text-md sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto p-4">
          Toss Me A Coin is the most convenient way to accept cryptocurrency donations from your
          fans.
        </p>

        <div className="pt-4 sm:pt-8">
          <div className="mb-6 sm:mb-10 text-xs sm:text-md md:text-xl ">
            <span className="py-3 px-6 sm:py-6 sm:px-12 shadow-[0px_4px_20px_rgba(0,0,0,0.2)] rounded-full font-semibold ">
              <span>tossmeacoin.com/</span>{' '}
              <input
                className="focus:outline-none sm:w-1/5"
                type="text"
                maxLength={18}
                placeholder="Your Username"
              />{' '}
            </span>
          </div>
          <Button onClick={handleClick}>Start My Page</Button>

          <p className="font-thin text-md py-2 sm:py-4 px-4">
            It&apos;s free and you only need to connect your crypto wallet of choice.
          </p>
        </div>

        <div className="flex flex-wrap items-center xs:items-start justify-evenly py-4 sm:pb-8">
          <Testimonial>The best platform for accepting multiple crypto</Testimonial>
          <Testimonial>Simple, fast and very user-friendly</Testimonial>
          <Testimonial>A real innovation among donation platforms</Testimonial>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
