import React from 'react'
import styles from '../styles/ContactForm.module.css'

const ContactForm = () => {
  return (
      <div className={styles.container}>
          <div className={styles.line}></div>
          <form>
              <label className={styles.nameDiv}>
                <p className={styles.text}>Name *</p>
                <input type="text" name="name" className={styles.nameForm} placeholder="enter name"/>
            </label>
              
            <label>
                <p className={styles.text}>Email</p>
                <input type="email" name="name" />
            </label>
              
              <br />

               <label>
                <p className={styles.text}>Whatsapp : </p>
                <input type="text" name="name" />
              </label>
               <label>
                <p className={styles.text}>Wechat : </p>
                <input type="text" name="name" />
              </label>
              
              <br />
               <label>
                <p className={styles.text}>Subject</p>
                <input type="text" name="name" />
              </label>
              <br />
               <label>
                <p className={styles.text}>Message :</p>
                <input type="textarea" name="name" />
            </label>
              
        </form>
    </div>
  )
}

export default ContactForm