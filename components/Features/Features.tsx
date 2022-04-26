import React from 'react';
import Image from 'next/image';

import { Heading, SectionWrapper } from '../UI';
import Feature from './Feature';

const Features: React.FC = () => {
  return (
    <SectionWrapper id="info">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
        <Heading>All the features you could ever need.</Heading>
        <div className="flex flex-wrap items-start justify-evenly">
          <Feature
            imgSrc="/icons/InteractIcon.webp"
            imgAlt="Message box"
            title="A new way to interact with your fans."
            topText="Now your fans can send you custom messages with their donations."
            text="Sending regular crypto transactions is a bit of a fuff and not a lot of fun. With Toss
              Me A Coin it all changes. You can not only donate your crypto much more easily but
              also optionally include your name and a custom message."
          />
          <Feature
            imgSrc="/icons/CoinIcon.webp"
            imgAlt="Crypto coin"
            title="All of your favorite crypto in one place."
            topText="BTC, ETH, BNB, MATIC, SOL, LUNA? We have got them all!"
            text="The times of passing around public keys to make a crypto donation are over. Now you
              can keep all of crypto wallet addresses in one place, available to the public."
          />
          <Feature
            imgSrc="/icons/CustomIcon.webp"
            imgAlt="Crypto coin"
            title="High Page Customization."
            topText="Make your TossMeACoin Page reflect your style."
            text="Once you create your TossMeACoin Page you can add a custom avatar, header and a bio.
              You can also create a longer and more detailed section describing yourself."
          />
          <Feature
            imgSrc="/icons/WalletIcon.webp"
            imgAlt="Crypto coin"
            title="98% Fee Free"
            topText="We only take 2% of every donation to upkeep our platform."
            text="Here, at Toss Me A Coin we know damn well how annoying fees are, especially for a
              crypto enthusiast. That is why we try our best to keep them very low."
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
