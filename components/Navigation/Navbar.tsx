import React, { useContext } from 'react';
import Link from 'next/link';
import Button from '../UI/Button';
import MenuLink from './MenuLink';
import Logo from './Logo';

import { creatorContext } from '../../context/creatorContext';

const Navbar: React.FC = () => {
  const { connectWallet, creator } = useContext(creatorContext);

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
          {typeof creator == undefined ? (
            <Button onClick={connectWallet}>Connect Wallet</Button>
          ) : (
            !creator.username &&
            creator.ethAddress && (
              <Link href="/create" passHref>
                <Button onClick={() => console.log('redirecting...')}>Create Page</Button>
              </Link>
            )
          )}
          {creator.username && (
            <Link href={`/creators/${creator.username}`} passHref>
              <span className="text-sm sm:text-md md:text-lg bg-[#6666ff] hover:bg-[#5e17eb] text-white font-bold py-2 px-4 rounded-full cursor-pointer">
                {creator.username}
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
