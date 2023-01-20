import Head from 'next/head'

import React from 'react';

import Firstsc from "../components/main/firstsc";
import TheGathering from '../components/main/thegathering';
import Footer from '../components/Footer';
import ThirdSc from '../components/main/thirdsc';
import Faq from '../components/main/faq';



export default function Home() {
  return (
    <div>

        <Head>
          <title>Twelve Knights - The Gathering</title>
          <meta name="description" content="Twelve Knights NFT Project" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

          <Firstsc />
        
        <TheGathering />
        <ThirdSc />
        <Faq />

        <Footer />
    </div>
  )
}
