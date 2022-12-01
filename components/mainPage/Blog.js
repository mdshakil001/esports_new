import React from 'react'
import styles from '../../styles/Blog.module.css'
import SliderBtn from '../SliderBtn'

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <div className={styles.design}>
          <img src="./images/design/rect.png" alt="" />
          <img src="./images/design/line.png" alt="" />
        </div>
        <div className={styles.mainTitle}>
          <h1>Our Blog</h1>
        </div>

        <div className={styles.imgText}>

          <div className={styles.div}>
            <img src="./images/blog/b_1.png" alt="" />
            <div className={styles.text}>
              <h3 className={styles.title}>STARCRAFT TOURNAMENT</h3>
              <p className={styles.description}>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing</p>
              <p className={styles.readMore}>Read More</p>
            </div>
          </div>

          <div className={styles.div}>
            <img src="./images/blog/b_2.png" alt="" />
            <div className={styles.text}>
              <h3 className={styles.title}>STARCRAFT TOURNAMENT</h3>
              <p className={styles.description}>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing</p>
              <p className={styles.readMore}>Read More</p>
            </div>
          </div>

          <div className={styles.div}>
            <img src="./images/blog/b_3.png" alt="" />
            <div className={styles.text}>
              <h3 className={styles.title}>STARCRAFT TOURNAMENT</h3>
              <p className={styles.description}>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing</p>
              <p className={styles.readMore}>Read More</p>
            </div>
          </div>


        </div>
        


      </div>
        <div className={styles.sliderBtn}><SliderBtn /></div>
    </div>
  )
}

export default Blog