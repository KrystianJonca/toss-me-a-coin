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
        <Image src="/Logo.webp" alt="Toss Me A Coins" width="240" height="64" />
      </Link>
    );

  return (
    <>
      <div className="hidden sm:justify-center sm:items-center sm:flex h-16 w-auto cursor-pointer">
        <Link href="/" passHref>
          <Image src="/Logo.webp" alt="Toss Me A Coins" width="240" height="64" />
        </Link>
      </div>

      <div className="flex justify-center items-center sm:hidden h-16 w-auto cursor-pointer">
        <Link href="/" passHref>
          <Image src="/LogoSmall.webp" alt="Toss Me A Coins" width="48" height="48" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
