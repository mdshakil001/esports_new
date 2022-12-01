import React from 'react'
import styles from '../../styles/HeroBlog.module.css'

import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiTiktok } from 'react-icons/si';

import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

const HeroBlog = () => {
  return (
      <div className={styles.container}>
          <div className={styles.allContents}>
              <img src="./images/blog/hero.png" alt="" className={styles.heroImg} />

          <div className={styles.contents}>
              <h2 className={styles.blogTitle}>Dota Madness</h2>
              <p>Nisl non ultrices vel velit quis vel. Cursus dolor donec fermentum nibh lacus praesent sit est suspendisse. Et, sed aliquet morbi tortor amet eget dis. Id amet, malesuada arcu, quam faucibus at. Nunc, nibh lectus nec, gravida. Scelerisque mattis diam sagittis in turpis vitae, pharetra, porttitor eu. Elementum eget mauris arcu mattis nibh in augue quis dolor. Nunc sed lobortis amet venenatis aenean leo nunc. Elit nec mi pellentesque ut ut pellentesque.
            Gravida odio enim, dictumst elementum, urna sed. Consequat rhoncus imperdiet integer congue eu facilisis. Potenti vestibulum tortor dictum euismod nisi. Neque commodo sed egestas eu gravida. Lacus eget sit metus odio ultrices aliquet odio nunc blandit. Vestibulum elementum euismod eu egestas faucibus ipsum diam a.
                  Nisi massa leo donec eu consequat, egestas. Ac pellentesque et in consequat. Aenean iaculis non, ornare mauris cras vivamus viverra nisl. Quis odio tortor elementum orci ultricies venenatis semper interdum dictum. Eget diam diam quis faucibus sed ante ornare. Risus quis quam dignissim aliquet ut arcu, tempor. Nam semper quisque nulla sed ac blandit. Neque, quam augue sit fermentum amet consequat massa.
              </p>

              <h3 className={styles.subTitle}>Neque sed nulla lectus</h3>
              <p>Nisl non ultrices vel velit quis vel. Cursus dolor donec fermentum nibh lacus praesent sit est suspendisse. Et, sed aliquet morbi tortor amet eget dis. Id amet, malesuada arcu, quam faucibus at. Nunc, nibh lectus nec, gravida. Scelerisque mattis diam sagittis in turpis vitae, pharetra, porttitor eu. Elementum eget mauris arcu mattis nibh in augue quis dolor. Nunc sed lobortis amet venenatis aenean leo nunc. Elit nec mi pellentesque ut ut pellentesque.
Gravida odio enim, dictumst elementum, urna sed. Consequat rhoncus imperdiet integer congue eu facilisis. Potenti vestibulum tortor dictum euismod nisi. Neque commodo sed egestas eu gravida. Lacus eget sit metus odio ultrices aliquet odio nunc blandit. Vestibulum elementum euismod eu egestas faucibus ipsum diam a.
                      Nisi massa leo donec eu consequat, egestas. Ac pellentesque et in consequat. Aenean iaculis non, ornare mauris cras vivamus viverra nisl. Quis odio tortor elementum orci ultricies venenatis semper interdum dictum. Eget diam diam quis faucibus sed ante ornare. Risus quis quam dignissim aliquet ut arcu, tempor. Nam semper quisque nulla sed ac blandit. Neque, quam augue sit fermentum amet consequat massa.</p>
                  <div className={styles.line}></div>

                  <div className={styles.blogFooter}>
                      <div className={styles.upper}>
                          <h2>Share The Blog</h2>
                              <div className={styles.right}>
            <div className={styles.iconx}><AiFillYoutube color="#000" size={15}/></div>
            <div className={styles.iconx}><FaFacebookF color="#000" size={15}/></div>
            <div className={styles.iconx}><BsTwitter color="#000" size={15}/></div>
            <div className={styles.iconx}><AiOutlineInstagram color="#000" size={15}/></div>
            <div className={styles.iconx}><RiLinkedinFill color="#000" size={15}/></div>
            <div className={styles.iconx}><SiTiktok color="#000" size={15}/></div>
          </div>
                   
                      </div>

                      <div className={styles.lower}>
                          {/* <div className={styles.contents}> */}
              <div className={styles.sliderLeft}>
                  <BsArrowLeft />
                  <p>Previous Blog</p>
              </div>
              <div className={styles.sliderRight}>
                  <p>Next Blog</p>
                  <BsArrowRight />
                  
              </div>
          {/* </div> */}
                      </div>
                  </div>
          </div>
          </div>
    </div>
  )
}

export default HeroBlog