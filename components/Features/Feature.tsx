import React from 'react';
import Image from 'next/image';

interface FeatureProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  topText: string;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ imgSrc, imgAlt, title, topText, text }) => {
  return (
    <div className="text-left m-4 xs:w-1/2 min-w-[280px] max-w-[420px]">
      <Image src={imgSrc} alt={imgAlt} width="75" height="75" />
      <h2 className="font-semibold pt-4 text-xl sm:text-2xl md:text-3xl">{title}</h2>
      <p className="font-medium text-md py-2">{topText}</p>
      <p className="py-2">{text}</p>
    </div>
  );
};

export default Feature;
