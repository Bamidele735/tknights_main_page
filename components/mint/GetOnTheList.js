import Link from "next/link"
import styles from "/styles/Landingpage/Body.module.css"

import Mint from "./mint"


const GetOnTheList = () => {

      

  return (
    <>
      <div className={styles.mintInterface}>
          
          <Mint />
          
      </div>
      <div className={styles.viewwhitepaper}>
          <Link href={"/Whitepaper"}>
            <button>View our Whitepaper</button>
          </Link>
      </div>
    </>
  )
}


export default GetOnTheList
