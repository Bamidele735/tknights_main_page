import Link from "next/link"
import styles from "../../styles/mainpages/index.module.css"
import React, { useRef, useEffect } from "react"

import Image from "next/future/image" 

import logo from "/public/TknightsLogo.png"

const socials = () => {
  
  return (
    <div className={styles.socials}>
            <Image 
            className={styles.logoimage_socials}
            src={logo}
            alt="Tknights Logo"
            />
            <div className={styles.socialsicons}>
                  
            </div>
    </div>
  );
};

export default socials;
