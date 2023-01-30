import Head from 'next/head'

import React from 'react';

import Firstsc from "../components/main/firstsc";
import Footer from '../components/Footer';
import ThirdSc from '../components/main/thirdsc';
import Faq from '../components/main/faq';
import TheGathering from '@/components/main/thegathering';

import styles from "../styles/mainpages/general.module.css"



export default function Home() {
  return (
    <div className={styles.indexpage}>

        <Head>
          <title>Twelve Knights - The Gathering</title>
          <meta name="description" content="Twelve Knights NFT Project" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="f4b941ee-9b4b-49a6-a339-c5edc93925cb" data-blockingmode="auto" type="text/javascript"></script>

        <Firstsc />
        <TheGathering />
        <ThirdSc />
        <Faq />

        <Footer />
    </div>
  )
}
