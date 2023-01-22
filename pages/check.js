import Head from 'next/head'
import { Alchemy, Network } from "alchemy-sdk";

import styles from "../styles/memberaccess/check.module.css"

import { initOnboard } from "../ulits/onboard"

import React, { useEffect, useState, useRef } from 'react';

import Link from 'next/link';

import crypto from 'crypto';



export default function Check() {

  // Connect Wallet Function

  const [status, setStatus] = useState(null)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  // functions

      //
  useEffect( () => {
      const onboardData = initOnboard( {
        address: (address) => setWalletAddress(address ? address : ''),
        wallet: (wallet) => {
          if (wallet.provider) {
            window.localStorage.setItem('selectedWallet', wallet.name)
          } else {
            window.localStorage.removeItem('selectedWallet') }}
      }
      )
    setOnboard(onboardData)
    }, [])
  
    const previouslySelectedWallet = typeof window !== 'undefined' &&
    window.localStorage.getItem('selectedWallet')

    useEffect(() => {
      if (previouslySelectedWallet !== null && onboard) {
        onboard.walletSelect(previouslySelectedWallet)
      }
    }, [onboard, previouslySelectedWallet])
    
      const connectWalletHandler = async () => {
        const walletSelected = await onboard.walletSelect()
        if (walletSelected) {
          await onboard.walletCheck()
        }
      }

    // Connect Wallet function end 
    // WORKING PERFECT





  // Alchemy SDK

  let responseglobal;

  const config = {
    apiKey: "mRYz1i-kOFKICtAb6paBSnHMl5Whn9vT",
    network: Network.ETH_GOERLI,
  };
  const alchemy = new Alchemy(config);
  
  const main = async () => {
    // Check if 0xshah.eth owns a Bored Ape.
    const nfts = await alchemy.nft.checkNftOwnership(
      walletAddress,
      ["0x93e866Ccb52c745F210b6330EF1F39799e7d8eA6"]
    );
    // Print NFTs
    responseglobal = nfts;
  };

  const afterCheck = async () => {
    if(responseglobal == true){
    setResponseGlobal(true)
    }else {
      setResponseGlobal(false)
    }
  };

  // Execute the code
  const runMain = async () => {
    try {
      await main();
      await afterCheck();
      setStatus({status:true, message:''})
    } catch(e){
      setStatus({status:false, message:e.message})
    }
  };

  // Alchemy SDK end
  // WORKING PERFECTLY


  // CHAT GPT GENERATED



  const [responseGlobal, setResponseGlobal] = useState();
  
  useEffect(() => {
    if (responseGlobal === true) {
      const token = crypto.randomBytes(64).toString('hex');
      localStorage.setItem('ujfijkjnkljhdshgiozg', token);
      setTimeout(() => {
        localStorage.removeItem('ujfijkjnkljhdshgiozg');
      }, 900000); // 1 hour in milliseconds
    }
  }, [responseGlobal]);
  



  const divContent = responseGlobal !== undefined && (
    responseGlobal ? 
    <div className={styles.memberWElcome}>
      <p>Welcome to the Collective!</p>
      <p>Click the button below to visit our Memberacces page!</p>
      <Link href="/memberaccess">
        <button>Members only</button>
      </Link>
    </div> :
    <div id="not-hello-world">
      <p>Sorry you're not holding one of the 12Knights in your Wallet.</p>
      <p>Check out our collection on opensea to buy one!</p>
      <p>If you got any issues please send us an email or send us a message on discord.</p>
      <Link href="/">
"        <button>Go to Another Page</button>
      </Link>
    </div>)

  // CHAT GPT END

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.memberaccesslol}>

          <p>
              Wallet Address - {walletAddress
                ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4)
                : ''}
            </p>
            <br />

            <button onClick={() => {
                connectWalletHandler().then(() => runMain())
            }}>Connect Wallet and Check NFT Ownership</button>


            {responseGlobal !== undefined && divContent}


      </div>
    </>
  )
}
