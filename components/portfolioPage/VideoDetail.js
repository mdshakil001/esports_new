import React from 'react'
import styles from '../../styles/VideoDetail.module.css'

const VideoDetail = () => {
  return (
      <div className={styles.container}>
          <div className={styles.contents}>
              <div className={styles.left}>
                  <img src="./images/portfolio/video.png" alt="" />
                  <div className={styles.ballBig}></div>
                  <div className={styles.ballSmall}></div>
            </div>
            <div className={styles.right}>
                  <h2 className={styles.text}>Neque sed nulla lectus</h2> 
                  <p>Nisl non ultrices vel velit quis vel. Cursus dolor donec fermentum nibh lacus praesent sit est suspendisse. Et, sed aliquet morbi tortor amet eget dis. Id amet, malesuada arcu, quam faucibus at. Nunc, nibh lectus nec, gravida. Scelerisque mattis diam sagittis in turpis vitae, pharetra, porttitor eu.</p>
            </div>
          </div>
    </div>
  )
}

export default VideoDetail