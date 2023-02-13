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

export default function firstsc(){
 
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

  const settings = {
    apiKey: "XBNgUjajG3zooORT2XTn_U83NkVSx6Xj", // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);
  
  const main = async () => {
    // Check if walletAddress owns a 12KnightsNFT
    const response = await alchemy.nft.verifyNftOwnership(walletAddress, "0xb49aae650E499BFb5F3AbaF9d4ac8F48Ae972b3F")
    
    responseglobal = response
    console.log(response)
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
        	window.open('/memberaccess', "_parent");
      }
      setStatus({ status: true, message: '' });
    } catch (e) {
      setStatus({ status: false, message: e.message });
    }
  };

  // Alchemy SDK end





  
  // CHAT GPT GENERATED


  const [responseGlobal, setResponseGlobal] = useState();

    useEffect(() => {
      if (responseGlobal == true) {
        const token = crypto.randomBytes(64).toString('hex');
        sessionStorage.setItem('ujfijkjnkljhdshgiozg', token);
        console.log("token")

        // Removing token after 15min hour
        setTimeout(() => {
          sessionStorage.removeItem('ujfijkjnkljhdshgiozg');
        }, 900000);
      }
    }, [responseGlobal]);


  return (
    <div className={styles.firstsc}>
      
      <div className={styles.firstsc_buttondiv}>
      <Link href="/mint"  passHref >
        <a target="_parent" rel="noopener noreferrer" className={styles.mintbutton}>
          MINT NOW
        </a>
      </Link>

        <a target="_parent" rel="noopener noreferrer" className={styles.memberaccessbutton}
          onClick={() => {
            const token = sessionStorage.getItem('ujfijkjnkljhdshgiozg'); 
            if (token) {
              window.open('/memberaccess', "_parent")
            } else {
              connectWalletHandler().then(() => handleClick());
            }
          }}>
          Memberaccess
        </a>
      
        
      </div>
      <h2 className={styles.h2elementfsc}>The private members club for NFT enthusiasts</h2>
      <div className={styles.firstsc_maskandvideo}>
        <Image 
        src={Mask}
        alt="video mask"
        className={styles.videomaskfsc}
        />
        <video alt="video tknights" className={styles.firstscvideo} autoPlay muted>
          <source alt="video tknights" src="/videofirstsc.mp4" type="video/mp4"/>
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

