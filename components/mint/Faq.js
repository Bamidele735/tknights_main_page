import styles from "/styles/Landingpage/Body.module.css"
import Link from "next/link"

const FunctionLog1 = () => {
      const answer = document.querySelector("#answer1")
      if(answer.style.display == "flex"){
            answer.style.display = "none"
      }else{ 
      answer.style.display = "flex";
      }
}
const FunctionLog2 = () => {
      const answer = document.querySelector("#answer2")
      if(answer.style.display == "flex"){
            answer.style.display = "none"
      }else{
      answer.style.display = "flex";
      }
}

const FunctionLog3 = () => {
      const answer = document.querySelector("#answer3")
      if(answer.style.display == "flex"){
            answer.style.display = "none"
      }else{
      answer.style.display = "flex";
      }
}

const FunctionLog4 = () => {
      const answer = document.querySelector("#answer4")
      if(answer.style.display == "flex"){
            answer.style.display = "none"
      }else{
            answer.style.display = "flex";     
      }
}
const FunctionLog5 = () => {
      const answer = document.querySelector("#answer5")
      if(answer.style.display == "flex"){
            answer.style.display = "none"
      }else{
            answer.style.display = "flex";     
      }
}
const FunctionLog6 = () => {
      const answer = document.querySelector("#answer6")
      if(answer.style.display == "flex"){
            answer.style.display = "none"
      }else{
            answer.style.display = "flex";     
      }
}
const FunctionLog7 = () => {
      const answer = document.querySelector("#answer7")
      if(answer.style.display == "flex"){
            answer.style.display = "none"
      }else{
            answer.style.display = "flex";     
      }
}



const Faq = () => {
      return(
      <div className={styles.Faq}>

            <h2>FAQ</h2>

            <div className={styles.questionone}>
                  <button onClick={FunctionLog1}>When is the mint date?</button>
                  <p id={"answer1"} className={styles.answer}>Thursday January 12th 2023 @ 12pm CET (6am EST / 11am GMT) There will be a period of 4 days for pre-sale, the public sale will start after. </p>
            </div>
            <hr className={styles.hrlinefaq} />
            <div className={styles.questionone}>
                  <button onClick={FunctionLog2}>How can I buy an NFT?</button>
                  <p id={"answer2"} className={styles.answer}>You will be able to mint an NFT directly from this website. After the collection sells out, you will be able to buy on secondary markets such as opensea.</p>
            </div>
            <hr className={styles.hrlinefaq} />
            <div className={styles.questionone}>
                  <button onClick={FunctionLog3}>How many NFTs are available?</button>
                  <p id={"answer3"} className={styles.answer}>The 12 Knight NFTs are limited to 120. You can verify the ownership of your NFT and others on the blockchain.</p>
            </div>
            <hr className={styles.hrlinefaq} />
            <div className={styles.questionone}>
                  <button onClick={FunctionLog4}>How can I join the community?</button>
                  <p id={"answer4"} className={styles.answer}>We have a very active community and we welcome new members with open arms! Come and chat with us on Discord.</p>
            </div>
            <hr className={styles.hrlinefaq} />
            <div className={styles.questionone}>
                  <button onClick={FunctionLog5}>What are the funds used for?</button>
                  <p id={"answer5"} className={styles.answer}>50% will remain in the wallet for asset security, 20% Charity Project, 15% Project development, 9% Public Relations, 6% Collective events.</p>
            </div>
            <hr className={styles.hrlinefaq} />
            <div className={styles.questionone}>
                  <button onClick={FunctionLog6}>What are our future plans?</button>
                  <p id={"answer6"} className={styles.answer}>We have set our goal to achieve  real life value for our members, so that there is caculable a point of return for the investments instead of non reliable promises we empower our mebers by providing a sset with continious benefits.</p>
            </div>
            <hr className={styles.hrlinefaq} />
            <div className={styles.questionone}>
                  <button onClick={FunctionLog7}>How to contact us?</button>
                  <div id={"answer7"} className={styles.answer}>
                        <div className={styles.answer5answer}><p>Join our Discord:</p>
                        <Link href={"https://discord.gg/hnvMwqRadh"}>
                        https://discord.gg/hnvMwqRadh
                        </Link></div>
                        <p>Write us an Email: support@12knights.team</p>
                  </div>
            </div>
            <hr className={styles.hrlinefaq} />
      </div>
      )
}
export default Faq
