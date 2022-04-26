import React from 'react';
import Link from 'next/link';

interface MenuLinkProps {
  href: string;
  className?: string;
  readonly children: React.ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = ({ children, href, className }) => {
  return (
    <Link href={href} passHref>
      <span
        className={`${className} text-xs sm:text-sm md:text-lg font-semibold px-1 sm:px-2 mr-1 sm:mr-2 hover:text-darkBlue transition-colors cursor-pointer`}
      >
        {children}
      </span>
    </Link>
  );
};

export default MenuLink;
