import Head from 'next/head'

import React from 'react';

import Footer from '../components/Footer';

import Firstscsc from '@/components/mint/firstsc';
import TheGatheringg from '../components/mint/TheGathering'
import GetOnTheList from '../components/mint/GetOnTheList'
import Faq from '@/components/main/faq';



export default function Home() {
  return (
    <div>

        <Head>
          <title>Twelve Knights - The Gathering</title>
          <meta name="description" content="Twelve Knights NFT Project" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Firstscsc />
        <TheGatheringg />
        <GetOnTheList />
        <Faq />
        
        <Footer />
    </div>
  )
}
