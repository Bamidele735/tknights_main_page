import Link from "next/link"
import styles from "../../styles/mainpages/index.module.css"

import Image from "next/future/image" 

import logo from "/public/TknightsLogo.png"

import facebook from "../../public/socials/Facebook.png"
import instagram from "../../public/socials/Instagram.png"
import twitter from "../../public/socials/Twitter.png"
import youtube from "../../public/socials/Youtube.png"
import discord from "../../public/socials/Discord.png"

const socials = () => {
    
  return (
    <div className={styles.socials}>
            <Link href="/">
              <Image 
              className={styles.logoimage_socials}
              src={logo}
              alt="Tknights Logo"
              />
            </Link>
            <h4>JOIN OUR <br /> COMMUNITY</h4>
            <div className={styles.socialsicons}>
                  <Link href="https://discord.gg/hnvMwqRadh">
                    <Image 
                    src={discord}
                    className={styles.socialsicons_icon}
                    alt="Discord Logo"
                    />
                  </Link>
                  <Link href="https://twitter.com/12Knights2">
                    <Image 
                    src={twitter}
                    className={styles.socialsicons_icon}
                    alt="Twitter Logo"
                    />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCwWTUxHy8752vMGaLnbiHCw">
                    <Image 
                    src={youtube}
                    className={styles.socialsicons_icon}
                    alt="Youtube Logo"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/12knightscollective/">
                    <Image 
                    src={instagram}
                    className={styles.socialsicons_icon}
                    alt="Instagram Logo"
                    />
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=100089504105619">
                    <Image 
                    src={facebook}
                    className={styles.socialsicons_icon}
                    alt="Facebook Logo"
                    />
                  </Link>
            </div>
    </div>
  );
};

export default socials;
