import React from 'react'
import styles from '../../styles/TopHead.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai';

import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiTiktok } from 'react-icons/si';

const TopHead = () => {
  return (
    <div className={styles.container}>
    {/* <div className="container"> */}
      <div className={styles.contents}>
        <div className={styles.left}>
        <p>logo</p>
        <div className={styles.language}>
          <p>English</p>
          <AiOutlineArrowDown />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.text}>
          <p>Follow Us On</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.socialIcon}>
          <div className={styles.icon}><AiFillYoutube color="#f7c003"/></div>
          <div className={styles.icon}><FaFacebookF color="#f7c003"/></div>
          <div className={styles.icon}><BsTwitter color="#f7c003"/></div>
          <div className={styles.icon}><AiOutlineInstagram color="#f7c003"/></div>
          <div className={styles.icon}><RiLinkedinFill color="#f7c003"/></div>
          <div className={styles.icon}><SiTiktok color="#f7c003"/></div>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default TopHead