import styles from "../styles/mainpages/index.module.css"

import Link from "next/link"
import Image from "next/future/image" 

import logo from "../public/TknightsLogo.png"


const Footer = () => {
      return(
            <div className={styles.Footer}>
                 
                  <p>© 2022 by LP Service GmbH</p>
                  <div>
                        <ul>
                              <li>
                                    <Link href={"/legalnotice"} passHref>Legal Notice</Link>
                              </li>
                              <li>
                                    <Link href={"/TermsAndConditions"} passHref>Terms and Conditions</Link>
                              </li>
                              <li>
                                    <Link href={"/PrivacyPolicy"} passHref>Privacy Policy</Link>
                              </li>
                              <li>
                                    <Link href={"/Whitepaper"} passHref>Whitepaper</Link>
                              </li>
                        </ul>
                  </div>
            </div>
            
      )
}

export default Footer