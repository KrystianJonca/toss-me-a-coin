import React from 'react';

import SocialMediaIcon from './SocialMediaIcon';
import MenuLink from './MenuLink';

import { FaTwitter, FaYoutube, FaInstagramSquare, FaTelegram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6 px-4">
      <div className="max-w-5xl mx-auto p-1 flex-col sm:flex-row flex items-center justify-evenly text-center">
        <div className="flex items-center justify-evenly text-sm sm:text-md">
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="/explore">Explore creators</MenuLink>
          <MenuLink href="/about">About</MenuLink>
          <MenuLink href="/start">Start a page</MenuLink>
        </div>
      </div>
      <div className="p-2 flex items-center justify-center">
        {/* TODO: ADD SOCIAL MEDIA LINKS */}
        <SocialMediaIcon href="/">
          <FaTwitter />
        </SocialMediaIcon>

        <SocialMediaIcon href="/">
          <FaInstagramSquare />
        </SocialMediaIcon>

        <SocialMediaIcon href="/">
          <FaYoutube />
        </SocialMediaIcon>

        <SocialMediaIcon href="/">
          <FaTelegram />
        </SocialMediaIcon>
      </div>
      <p className="text-center p-2">Toss Me A Coin © 2022</p>
    </footer>
  );
};

export default Footer;
