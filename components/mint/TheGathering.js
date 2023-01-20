import styles from "/styles/Landingpage/Body.module.css"

import Image from "next/future/image" 
 
import SignUpForm from "./GetOnTheList"
import background from "/public/Landingpage/images/shutterstock_525888652 (1).png"

const TheGatheringg = () => {
      return(
            <div className={styles.TheGatheringandSignUpForm}>
                  <Image 
                        className={styles.background_tg}
                        alt="sandy dune background"
                        src={background}
                        />
                  <div
                  className={styles.TheGathering}
                  >
                        <div className={styles.maintext}>
                              <h2>The Gathering</h2>
                              <p>
                              If you have found your way to us...<br />
                              this could be your shelter...<br />
                              a place to be and to survive...<br />
                                          <br />
                                          But don&apos;t stay with us if you are satisfied with misbelief...<br />
                                          We know it will not be easy to succeed, but this is not something we just try - it is necessary!<br />
                                          <br />
                                          Ensure to build up assets with us to empower your position as one of the<br />
                                          12 Knights!<br />
                                          There is still something more to achieve and we want it!<br />
                                          <br />
                                          We want to find the hard people in weak times,<br />
                                          endure the hardship we face from weak people,<br />
                                          and lead humankind into the next age of existence...<br />
                                          <br />
                                          If you are one of those who are willing to study your stance and face the challenge...<br />
                                          <br />
                                          Knights of the Twelve Tribes...<br />
                                          Shattered and lost for thousands of years...<br />
                                          We summon you...<br />
                                          Answer the call...<br />
                                          Break through the vicious circle and GATHER AROUND!<br />
                                          <br />
                                          <br />
                                          According to Stoic guidelines, we have made it our priority to empower individuals within the community<br />
                                          to bring something unique to our mission. We look to achieve this by providing resources and<br /> opportunities across all phases of building this network.​​<br />
                                          <br />
                                          We are different and we will break down barriers, setting society free to be<br />
                                          owned by all.<br />
                                          <br />
                                          We gather to be one again!<br />
                                          <br />
                                          Be with Us!<br />
                                          Stay with Us!<br />
                                          Start the new Age!<br />
                              </p>
                        </div>
                  </div>
            <SignUpForm />
            </div>
      )
}

export default TheGatheringg