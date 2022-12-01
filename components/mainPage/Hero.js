import React from 'react'
import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
import path from '../../public/images/header/image5.png'

const Hero = () => {
  return (
    <div className={styles.contents}>
      <img src="./images/header/image5.png" alt="logo" />

      <div className={styles.container}>
        <div className={styles.text_btn}>
          <div className={styles.text}>
            <h2>Grow Your Player Base.</h2>
            <p>Based in UAE & with an office in the UK, ESME was Launched in early 2012 and drew a top notch expertise in the business management as one of the best Esports operators in the Middle East</p>
          </div>
          <button className={styles.btn}>Start Now</button>
        </div>
      </div>

    </div>
  )
}

export default Hero