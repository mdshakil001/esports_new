import React from 'react'
import styles from '../../styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>

        <div className={styles.text}>
          <h1 className={styles.letsTalk}>Let's Talk</h1>
          <h1 >About Your Next Project</h1>
        </div>

        <div className={styles.contactBtn}>
          <button className={styles.btn}>Get In Touch</button>
        </div>

      </div>
    </div>
  )
}

export default Contact