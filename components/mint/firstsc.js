import styles from "../../styles/Landingpage/Body.module.css"

import Image from "next/future/image"
import Link from "next/link"

import logo from "../../public/TknightsLogo.png"

const Firstscsc = () => {
      return(
            <div className={styles.firstsc}>
                        <Link href="https://tknights-main-page.vercel.app/">
                              <Image 
                              alt="Tknights Logo"
                              src={logo}
                              className={styles.imagefirstscmint}
                              /> 
                        </Link>
                  <h2>We Are Coming</h2>
                  <h1>MINT NOW</h1>
                  
                  <button><span className={styles.downarrow}>&darr;</span></button>                 
            </div>
            
      )
}
 
export default Firstscsc