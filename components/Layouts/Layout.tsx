import React from 'react';

import Navbar from '../Navigation/Navbar';
import Footer from '../Navigation/Footer';

type LayoutProps = {
  readonly children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />

    <main className="h-full w-full bg-white mt-16">{children}</main>

    <Footer />
  </>
);

export default Layout;
