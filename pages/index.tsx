import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout, Header, Info, Features, Setup } from '../components/';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TossMeACoin - Web3 Donation Platform</title>
        <meta
          name="description"
          content="Toss Me A Coin is the most convenient way to accept cryptocurrency donations from your fans."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header />
        <Info />
        <Features />
        <Setup />
      </Layout>
    </>
  );
};

export default Home;
