import React from 'react'
import styles from '../../styles/Portfolio.module.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import SliderBtn from '../SliderBtn';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
      <div className={styles.design}>
          <img src="./images/design/rect.png" alt="" />
          <img src="./images/design/line.png" alt="" />
        </div>
        <h1 className={styles.mainTitle}>Our Portfolio</h1>
      <div className={styles.contentDiv}>

        <div className={styles.imgDiv}>
          <img src="./images/portfolio/p_1.png" alt="" />
          <div className={styles.text}>
            <h3 className={styles.title}>WSVG 2015 Maldives , MENA qualifications</h3>
            <div className={styles.viewMore}>
              <p>View Details</p>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>

        <div className={styles.imgDiv}>
          <img src="./images/portfolio/p_2.png" alt="" />
          <div className={styles.text}>
            <h3 className={styles.title}>WSVG 2015 Maldives , MENA qualifications</h3>
            <div className={styles.viewMore}>
              <p>View Details</p>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>

        <div className={styles.imgDiv}>
          <img src="./images/portfolio/p_3.png" alt="" />
          <div className={styles.text}>
              <h3 className={styles.title}>WSVG 2015 Maldives , MENA qualifications</h3>
            <div className={styles.viewMore}>
              <p>View Details</p>
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>

        
        </div>
        <div className={styles.sliderBtn}><SliderBtn /></div>
    </div>
    </div>
  )
}

export default Portfolio