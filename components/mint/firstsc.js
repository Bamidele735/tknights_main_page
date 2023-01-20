import styles from "../../styles/Landingpage/Body.module.css"

import Image from "next/future/image"

import logo from "../../public/TknightsLogo.png"

const Firstscsc = () => {
      return(
            <div className={styles.firstsc}>
                        <Image 
                        alt="Tknights Logo"
                        src={logo}
                        className={styles.imagefirstscmint}
                        /> 
                  <h2>We Are Coming</h2>
                  <h1>MINT NOW</h1>
                  
                  <button>&darr;</button>                 
            </div>
            
      )
}

export default Firstscsc