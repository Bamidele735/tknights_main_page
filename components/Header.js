import Link from "next/link"
import styles from "../styles/Landingpage/general.module.css"

const Header = ({ children }) => {
      return(
            <div className={styles.Header}>
                  { children }
                  <Link  href={"/"}>
                        <a target="_parent" rel="noopener noreferrer">
                        
                              <button className={styles.link}>Home</button>
                              
                        </a>
                  </Link>
            </div>
      )
}
 


export default Header