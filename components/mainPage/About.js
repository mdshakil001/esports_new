import React from 'react'
import styles from '../../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
      <div className={styles.left}>
        <img src="./images/pexels-yan-krukov.png" alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.design}>
          <img src="./images/design/rectangle.png" alt="" />
          <img src="./images/design/line.png" alt="" />
        </div>
        <div className={styles.text}>
          <h1>Who We Are</h1>
          <p>ESME is the lead Middle East Solution for Gaming & Esports operators. We help gmaing operators around the world to redefine their products & find their customers online or within the retail channel in the Arabic world (ME, NA, GCC).</p>
          <p>Through our services & network, we can adapt your operation to demanding & competitive new markets, with a new markets, with a team of experts driving the operation on your behalf. Within weeks we will be able to fully manage your operation and start acquiring customers from exciting new markets</p>
        </div>
        <div className={styles.numbers}>
          <div className={styles.up}>
            <h1>30+</h1>
            <div className={styles.line}></div>
            <h1>20+</h1>
          </div>
          <div className={styles.down}>
            <h1>5M+</h1>
            <div className={styles.line}></div>
            <h1>10+</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About