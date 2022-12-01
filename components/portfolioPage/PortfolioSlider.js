import React from 'react'
import styles from '../../styles/PortfolioSlider.module.css'
// BsArrowLeft  BsArrowRight
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

const PortfolioSlider = () => {
  return (
      <div className={styles.container}>
          <div className={styles.contents}>
              <div className={styles.left}>
                  <BsArrowLeft />
                  <p>Previous Project</p>
              </div>
              <div className={styles.right}>
                  <p>Next Project</p>
                  <BsArrowRight />
                  
              </div>
          </div>
    </div>
  )
}

export default PortfolioSlider