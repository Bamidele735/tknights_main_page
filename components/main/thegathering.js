import { useRef, useEffect } from "react"

import styles from "../../styles/mainpages/index.module.css"

const TheGathering = () => {
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
    <div className={styles.TheGathering}>
      <div className={styles.maintext}>
        <h2 className={styles.texttg} ref={el => elements.current.push(el)}>The Gathering</h2>
        <br />
        <br />
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          If you have found your way to us...
        </p>
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          this could be your shelter...
        </p>
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          a place to be and to survive...
        </p>
        <br />
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          But don't stay with us if you are satisfied with misbelief...
        </p>
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          We know it will not be easy to succeed, but this is not something we just try - it is necessary!
        </p>
        <br />
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          Ensure to build up assets with us to empower your position as one of the
        </p>
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          12 Knights!
        </p>
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          There is still something more to achieve and we want it!
        </p>
        <br />
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          We want to find the hard people in weak times,
        </p>
        <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          endure the hardship we face from weak people,
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          and lead humankind into the next age of existence...
      </p>
      <br />
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          If you are one of those who are willing to study your stance and face the challenge...
      </p>
      <br />
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          Knights of the Twelve Tribes...
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          Shattered and lost for thousands of years...
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          We summon you...
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          Answer the call...
      </p>
      <br />
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          
          Break through the vicious circle and GATHER AROUND!
      </p>
      <br />
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          According to Stoic guidelines, we have made it our priority to empower individuals within the community
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          to bring something unique to our mission. We look to achieve this by providing resources and
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
         opportunities across all phases of building this network.
      </p>
      <br />
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          We are different and we will break down barriers, setting society free to be
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          owned by all.
      </p>
      <br />
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          We gather to be one again!
      </p>
      <br />
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          Be with us!
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          stay with us!
      </p>
      <p
          className={styles.texttg}
          ref={el => elements.current.push(el)}
        >
          Start the new age!
      </p>
      </div>
      </div>
  )
}

export default TheGathering