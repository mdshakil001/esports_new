import React from 'react'
import styles from '../../styles/Media.module.css'

const Media = () => {
  return (
      <div className={styles.container}>
          <div className={styles.contents}>
              <h1 className={styles.title}>Media</h1>
              <div className={styles.images}>
                   <img src="./images/portfolio/med_1.png" alt="" />
                <img src="./images/portfolio/med_2.png" alt="" />
                <img src="./images/portfolio/med_3.png" alt="" />
                <img src="./images/portfolio/med_4.png" alt="" />
                <img src="./images/portfolio/med_2.png" alt="" />
                <img src="./images/portfolio/med_3.png" alt="" />
                <img src="./images/portfolio/med_5.png" alt="" />
             </div>
          </div>
    </div>
  )
}

export default Media