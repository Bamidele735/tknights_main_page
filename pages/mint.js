import Head from 'next/head'

import React from 'react';
import styles from "../styles/Landingpage/general.module.css"

import Footer from '../components/Footer';

import Firstscsc from '@/components/mint/firstsc';
import TheGatheringg from '../components/mint/TheGathering'
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
        <Faq />
        <div className={styles.newsletter_mint}>
        <iframe src="https://t4fe34ba5.emailsys1a.net/202/24/6d10d1c7ed/subscribe/form.html?_g=1674515215" frameborder="0" width="100%" height="450"></iframe>
        </div>
        <Footer />
    </div>
  )
}
