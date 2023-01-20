import Link from "next/link"
import styles from "/styles/Landingpage/general.module.css"

const Header = ({ children }) => {
      return(
            <div className={styles.Header}>
                  { children }
                  <Link className={styles.link} href={"/"}>Home</Link>
            </div>
      )
}



export default Header