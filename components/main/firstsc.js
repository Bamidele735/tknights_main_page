import Link from "next/link"
import Image from "next/future/image" 

import styles from "../../styles/mainpages/index.module.css"


import React, { useEffect, useState, useRef } from 'react';

import crypto from 'crypto'; 
import { initOnboard } from "../../ulits/onboard";
import { Alchemy, Network } from "alchemy-sdk";

import Mask from "/public/mask.png"
import logo from "/public/TknightsLogo.png"

import { useRouter } from 'next/router';

const Firstsc = () => {
  const h2Element = useRef(null);
  
  // add empty dependencies array to prevent an infinite loop 
  useEffect(() => {
    setTimeout(() => {
      h2Element.current.classList.add('redtext');
    }, 4);
  }, []);


  // Memberaccess

  // Connect Wallet Function

  const [status, setStatus] = useState(null)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  const router = useRouter();

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
    apiKey: "XBNgUjajG3zooORT2XTn_U83NkVSx6Xj",
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
    console.log(nfts)
  };

  const afterCheck = async () => {
    if(responseglobal == true){
    setResponseGlobal(true)
    }else {
      setResponseGlobal(false)
    }
  };

  const handleClick = async () => {
    try {
      await main();
      await afterCheck();
      if (responseglobal) {
        router.push('/memberaccess');
      }
      setStatus({ status: true, message: '' });
    } catch (e) {
      setStatus({ status: false, message: e.message });
    }
  };

  // Alchemy SDK end
  // WORKING PERFECTLY


  // CHAT GPT GENERATED



  const [responseGlobal, setResponseGlobal] = useState();

useEffect(() => {
  if (responseGlobal === true) {
    const token = crypto.randomBytes(64).toString('hex');
    sessionStorage.setItem('ujfijkjnkljhdshgiozg', token);

    // Removing token after 15min hour
    setTimeout(() => {
      sessionStorage.removeItem('ujfijkjnkljhdshgiozg');
    }, 900000);
  }
}, [responseGlobal]);


  return (
    <div className={styles.firstsc}>
      <div className={styles.firstsc_buttondiv}>
        <Link href={"/mint"}>
          <button
          className={styles.mintbutton}
          >MINT NOW</button>
        </Link>
        
          <button
          onClick={() => {
            connectWalletHandler().then(() => handleClick())}}
          className={styles.memberaccessbutton}
          >
            MEMBER ACCESS
          </button>
        
      </div>
      <h2 className={styles.h2elementfsc} ref={h2Element}>The private members club for NFT enthusiasts</h2>
      <div className={styles.firstsc_maskandvideo}>
        <Image 
        src={Mask}
        alt=""
        className={styles.videomaskfsc}
        />
        <video className={styles.firstscvideo} autoPlay muted>
          <source src="/videofirstsc.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video> 
      </div>
      <Image 
      src={logo}
      className={styles.mobilelogo_firstsc}
      alt="Tknights Logo"
      />
    </div>
  );
};

export default Firstsc;
