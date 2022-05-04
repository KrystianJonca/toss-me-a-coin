import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';

import { Button, SectionWrapper, GradientHeading } from '../UI';
import Testimonial from './Testimonial';

const HeroSection: React.FC = () => {
  const handleClick = () => {
    console.log('BTN Clicked');
  };

  return (
    <SectionWrapper id="hero">
      <div className="text-center mt-8 sm:mt-10 md:mt-12 max-w-5xl">
        <GradientHeading>Crypto Donations Made Easy For Everyone.</GradientHeading>

        <p className="text-md sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto p-4">
          Toss Me A Coin is the most convenient way to accept cryptocurrency donations from your
          fans.
        </p>

        <SignUpForm />

        <p className="font-thin text-md py-2 sm:py-4 px-4">
          It&apos;s free and you only need to connect your crypto wallet of choice.
        </p>
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
