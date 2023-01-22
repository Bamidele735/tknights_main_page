import Link from "next/link"
import styles from "../../styles/mainpages/index.module.css"
import React, { useRef, useEffect } from "react"

import Image from "next/future/image" 

import Mask from "/public/mask.png"
import logo from "/public/TknightsLogo.png"

const Firstsc = () => {
  const h2Element = useRef(null);
  
  // add empty dependencies array to prevent an infinite loop 
  useEffect(() => {
    setTimeout(() => {
      h2Element.current.classList.add('redtext');
    }, 4);
  }, []);


  return (
    <div className={styles.firstsc}>
      <div className={styles.firstsc_buttondiv}>
        <Link href={"/mint"}>
          <button
          className={styles.mintbutton}
          >MINT NOW</button>
        </Link>
        <Link href={"/check"}>
          <button
          className={styles.memberaccessbutton}
          >
            MEMBER ACCESS
          </button>
        </Link>
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
