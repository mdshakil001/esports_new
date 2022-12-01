import React from 'react'
import styles from '../../styles/Team.module.css'

const Team = () => {
  return (
    <div className={styles.container}>

      <div className={styles.contents}>

        <div className={styles.divText}>
          <div className={styles.design}>
            <img src="./images/design/rectangle.png" alt="" />
            <img src="./images/design/line.png" alt="" />
          </div>
          <div className={styles.text}>
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ut harum alias ex quas eum. dolor, sit amet consectetur adipisicing elit. Maiores ut har dolor, sit amet consectetur adipisicing elit. Maiores ut har</p>
          </div>
        </div>

        <div className={styles.div}>
          <img src="./images/team/t_2.png" alt="" />
        </div>

        <div className={styles.div}>
          <img src="./images/team/t_3.png" alt="" />
        </div>

        <div className={styles.div}>
          <img src="./images/team/t_6.png" alt="" />
        </div>

        <div className={styles.div}>
          <img src="./images/team/t_3.png" alt="" />
        </div>

        <div className={styles.div}>
          <img src="./images/team/t_4.png" alt="" />
        </div>

        <div className={styles.div}>
          <img src="./images/team/t_5.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Team