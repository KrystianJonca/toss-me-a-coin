import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../UI/Button';
import MenuLink from './MenuLink';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed h-16 top-0 bg-white shadow-sm inset-x-0 z-50">
      <div className="flex h-full items-center justify-between max-w-6xl mx-auto px-1 sm:px-4">
        <div className="flex items-center justify-center mx-1 cursor-pointer">
          <Logo />
        </div>

        <div>
          <MenuLink href="/explore" className="inline xs:hidden">
            Explore
          </MenuLink>
          <MenuLink href="/explore" className="hidden xs:inline">
            Explore creators
          </MenuLink>
          <MenuLink href="/about" className="mr-1 sm:mr-2">
            About
          </MenuLink>
          <Button onClick={() => console.log('BTN Clicked')}>Get started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
