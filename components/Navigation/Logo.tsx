import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  navLogo?: Boolean;
}

const Logo: React.FC<LogoProps> = ({ navLogo = true }) => {
  if (!navLogo)
    return (
      <Link href="/" passHref>
        <span>
          <Image src="/Logo.webp" alt="Toss Me A Coins" width="240" height="64" />
        </span>
      </Link>
    );

  return (
    <>
      <Link href="/" passHref>
        <span>
          <div className="hidden sm:justify-center sm:items-center sm:flex h-16 w-auto cursor-pointer">
            <Image src="/Logo.webp" alt="Toss Me A Coins" width="240" height="64" />
          </div>

          <div className="flex justify-center items-center sm:hidden h-16 w-auto cursor-pointer">
            <Image src="/LogoSmall.webp" alt="Toss Me A Coins" width="64" height="64" />
          </div>
        </span>
      </Link>
    </>
  );
};

export default Logo;
