import React from 'react'
import styles from '../styles/SliderBtn.module.css'

import { HiArrowNarrowLeft } from 'react-icons/hi';
import { HiArrowNarrowRight } from 'react-icons/hi';


const SliderBtn = () => {
  return (
      <div className={styles.container}>
            <div className={styles.leftDiv}>
                <div className={styles.lineLeft}></div>
              <div className={styles.leftIcon}><HiArrowNarrowLeft size={25} color="white" /></div>
            </div>

            <div className={styles.rightDiv}>
                <div className={styles.lineRight}></div>
                <div className={styles.rightIcon}><HiArrowNarrowRight size={25} color="white" /></div>
            </div>
        </div>
  )
}

export default SliderBtn