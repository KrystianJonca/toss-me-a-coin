import React from 'react';
import Image from 'next/image';

import SectionWrapper from '../UI/SectionWrapper';
import Heading from '../UI/Heading';

const Info: React.FC = () => {
  return (
    <div className="bg-lightBlue text-white py-4 shadow-sm">
      <SectionWrapper id="info">
        <div className="text-center sm:my-4 md:my-6 max-w-5xl">
          <Heading>Give your fans an easier way to donate their favorite cryptocurrencies</Heading>
          <p className="text-sm sm:text-md md:text-xl py-2">
            Toss Me A Coin makes crypto donations fun and easy. In just a couple of clicks your
            audience can connect their favorite wallet and make a donation with a customizable
            message. The funds will be send to your crypto wallet instantly thru a smart contract!
          </p>
          <Image src="/InfoImage.webp" alt="Form and notification image" width="750" height="450" />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Info;
