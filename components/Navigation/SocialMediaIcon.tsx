import React from 'react';
import Link from 'next/link';

interface SocialMediaIconProps {
  href: string;
  readonly children: React.ReactNode;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ children, href }) => {
  return (
    <Link href="/" passHref>
      <span className="px-4 hover:scale-105 transition-transform text-3xl">{children}</span>
    </Link>
  );
};

export default SocialMediaIcon;
