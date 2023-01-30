import Head from 'next/head'

import CookieConsent from "react-cookie-consent";

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

        <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName2"
        style={{ background: "white", color: "black" }}
        buttonStyle={{ background: "rgba(237,36,42,255)", color: "white", fontSize: "13px" }}
        expires={150}
        >This website uses cookies to enhance the user experience.</CookieConsent>

        <Firstsc />
        <TheGathering />
        <ThirdSc />
        <Faq />

        <Footer />
    </div>
  )
}
