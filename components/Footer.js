import React from 'react'
import styles from '../styles/Footer.module.css'

import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>


        <div className={styles.upper}>

          <div className={styles.left}>

            <div className={styles.logo}>
              <img src="./images/mainHeadLogo_1.png" alt="mainLogo" />
              <div className={styles.text}>
                <h3>Esports</h3>
                <p>Europe</p>
              </div>
            </div>

            <div className={styles.description}>
              <p>Esports is the lead Europe Solution for Gaming & Esports operators. </p>
            </div>

          </div>

          <div className={styles.right}>
            <div className={styles.iconx}><AiFillYoutube color="#000" size={15} /></div>
            <div className={styles.iconx}><FaFacebookF color="#000" size={15} /></div>
            <div className={styles.iconx}><BsTwitter color="#000" size={15} /></div>
            <div className={styles.iconx}><AiOutlineInstagram color="#000" size={15} /></div>
            <div className={styles.iconx}><RiLinkedinFill color="#000" size={15} /></div>
            <div className={styles.iconx}><SiTiktok color="#000" size={15} /></div>
          </div>

        </div>


        <div className={styles.lower}>
          <div className={styles.copyright}>
            <p>&copy; All Right Reserved By Esports.</p>
          </div>
          <div className={styles.privacy_condition}>
            <p>Privacy policy</p>
            <p>Tearms & Condition</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer