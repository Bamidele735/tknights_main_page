import Link from "next/link"
import styles from "../styles/Landingpage/general.module.css"

const Header = ({ children }) => {
      return(
            <div className={styles.Header}>
                  { children }
                  <Link  href={"/"}>
                        
                  <button className={styles.link}>Home</button>
                        
                  </Link>
            </div>
      )
}
 


export default Header