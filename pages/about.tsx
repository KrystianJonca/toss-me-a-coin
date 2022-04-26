import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Layout } from '../components/';
import { GradientHeading } from '../components/UI';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About TossMeACoin</title>
      </Head>

      <Layout>
        <div className="max-w-7xl mx-auto flex-col flex items-center justify-center p-6 text-center">
          <GradientHeading>About Toss Me A Coin</GradientHeading>
        </div>

        <div className="flex items-center justify-center bg-[#6666ff] my-2 sm:my-6 p-8 shadow-xl">
          <Image src="/AboutUsImage.webp" alt="TossMeACoin Founder" width="400" height="400" />
        </div>

        <div className="max-w-5xl mx-auto py-2 px-4">
          <p className="text-justify text-sm sm:text-md md:text-xl">
            <span className="font-bold text-3xl sm:text-4xl md:text-5xl">W</span>
            hen I started designing Toss Me A Coin, the main idea I had in mind was to make crypto
            donations playful and more convenient for everyone - content creators, as well as their
            fans. My main focus was to make the platform fast, easy and with great user experience,
            this meant giving creators support for all of the major blockchains and also integrating
            smart contracts to make the experience smoother. With Toss Me A Coin you no longer need
            to paste long crypto addresses, now you can have one short link to share with your
            followers.
          </p>
          <p className="text-justify text-sm sm:text-md md:text-xl mt-10">
            “Where did you come up with this awesome name” You might ask? Well, I wanted to make it
            charming and easy to remember. Everybody nowadays associates coins with crypto and the
            rest of the phrase came from one of my creators’ favourite songs “Toss A Coin To Your
            Witcher” ;)
          </p>
          <p className="text-justify text-sm sm:text-md md:text-xl mt-10">
            Toss Me A Coin is the first-ever Web3 Decentralized Donation Platform for crypto-loving
            content creators.
          </p>
          <p className="text-justify text-sm sm:text-md md:text-xl mt-8">Cheers, </p>
          <Image
            src="/Signature.webp"
            alt="Handwritten Toss Me A Coin Founder Signature"
            width="500"
            height="125"
          />
        </div>
      </Layout>
    </div>
  );
};

export default About;
