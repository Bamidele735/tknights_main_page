import Link from "next/link"
import styles from "/styles/Landingpage/Body.module.css"


const GetOnTheList = () => {

      

  return (
    <>
      <div className={styles.mintInterface}>
          <p>Mint interface will be here</p>
          <p>Die border soll nur den bereich zeigen!</p>
      </div>
      <div className={styles.viewwhitepaper}>
          <Link href={"/Whitepaper"}>
            <button>View our Whitepaper!</button>
          </Link>
      </div>
    </>
  )
}


export default GetOnTheList
