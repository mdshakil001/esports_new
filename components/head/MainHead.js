import React from 'react'
import styles from '../../styles/MainHead.module.css'
import Link from 'next/link'

const MainHead = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>

        <div className={styles.left}>
          <div className={styles.bars}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>

          <div className={styles.logo}>
            <img src="./images/mainHeadLogo_1.png" alt="mainLogo" />
            <div className={styles.text}>
              <h3>ESports</h3>
              <p>Europe</p>
            </div>
          </div>
        </div>

        <ul className={styles.links}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Brands</a></li>
          <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
          <li><a href="#">Team</a></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
        </ul>

        <button className={styles.btn}>contact</button>
      </div>
    </div>
  )
}

export default MainHead