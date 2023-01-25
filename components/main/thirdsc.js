import Image from "next/future/image"
import Link from "next/link"
import { useRef, useEffect } from "react"

import styles from "/styles/mainpages/index.module.css"
import nftcard from "/public/nftcardtknights.png"

const ThirdSc = () => {
  const elements = useRef([])
 
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      })
    }) 

    elements.current.forEach(element => {
      observer.observe(element)
    })
  }, [])

  return (
    <div className={styles.thirdsc}>
        <Image
          className={styles.thirdscnftcard}
          ref={el => elements.current.push(el)}
          src={nftcard}
          alt="tknights nft card"
        />
      <h3 className={styles.text1} ref={el => elements.current.push(el)}>12 KNIGHTS Collective NFT</h3>
      <p className={styles.thirdscpim} ref={el => elements.current.push(el)}>Become a member by holding a 12 Knights Collective NFT.</p>
      <div>
        <Link href="/">
          <button className={styles.button} ref={el => elements.current.push(el)}>View on Opensea</button>
        </Link>

        <h4 className={styles.text1}  ref={el => elements.current.push(el)}>Reasons to Join</h4>

        <p className={styles.text1} ref={el => elements.current.push(el)}>Enjoy privacy and exclusivity in a powerful community.</p>
        <p className={styles.text2} ref={el => elements.current.push(el)}>Meet and connect with other like-minded enthusiasts from around the globe.</p>
        <p className={styles.text3} ref={el => elements.current.push(el)}>Get early access and information on premium value NFT projects.</p>
        <p className={styles.text4} ref={el => elements.current.push(el)}>As a member, you will also have voting rights and the opportunity<br /> to be part of the governance decision-making process.</p>
      </div>
    </div>
  )
}

export default ThirdSc
