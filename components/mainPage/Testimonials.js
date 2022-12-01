import React from 'react'
import styles from '../../styles/Testimonials.module.css'
import SliderBtn from '../SliderBtn'

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.design}>
          <img src="./images/design/rect.png" alt="" />
          <img src="./images/design/line.png" alt="" />
        </div>
        <div className={styles.mainTitle}>
          <h2>Testimonials</h2>
        </div>
        <div className={styles.box}>
          <p className="name">Wayne Song</p>
          <p className={styles.position}>Gaming Operation Manager</p>
          <p className={styles.quote}>“We believe that in a region with a strong hunger for Esport like the Middle East & North Africa, MLBB's tournament ecosystem will be developed into world-class quality thanks to our cooperation with ESME.”</p>
          <div className={styles.footer}>
            <p className={styles.legendTitle}>Mobile Legends :</p>
            <p className={styles.legendName}>Bana Bana</p>
          </div>
        </div>

        <div className={styles.sliderBtn}><SliderBtn /></div>
      </div>
    </div>
  )
}

export default Testimonials