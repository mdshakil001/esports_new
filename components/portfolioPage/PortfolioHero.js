import React, { useState, useEffect } from 'react'
import styles from '../../styles/PortfolioHero.module.css'

const PortfolioHero = () => {
    const [width, setWidth] = useState(0);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);


    return (
        <div className={styles.container}>
            <img src="./images/portfolio/portfolio_hero.png" alt="logo" className={styles.heroImg} />

            <div className={styles.contents}>
                <div className={styles.left}>

                    <div className={styles.text_btn}>
                        <div className={styles.text}>
                            <h2>WSVG 2015 Maldives, MENA qualifications</h2>
                            <p>Nisl non ultrices vel velit quis vel. Cursus dolor donec fermentum nibh lacus praesent sit est suspendisse. Et, sed aliquet morbi tortor amet eget dis. Id amet, malesuada arcu, quam faucibus at. Nunc, nibh lectus nec, gravida. Scelerisque mattis diam sagittis in turpis vitae, pharetra, porttitor eu.</p>
                        </div>
                    </div>

                </div>

                <div className={styles.right}>
                    <img src="./images/portfolio/group_01.png" alt="logo" />
                </div>
            </div>

            {
                width > 1024 &&
                <div className={styles.footer}>

                    <div className={styles.div}>
                        <h3>3 amazing</h3>
                        <p>NBA2K esports events</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.div}>
                        <h3>60 national</h3>
                        <p>NBA2K esports events</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.div}>
                        <h3>10 million+</h3>
                        <p>NBA2K esports events</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.div}>
                        <h3>180 hours</h3>
                        <p>NBA2K esports events</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.div}>
                        <h3>Fiba & Nba2k</h3>
                        <p>NBA2K esports events</p>
                    </div>

                </div>
            }
            {
                width < 1024 && width > 768 && <div className={styles.footer}>

                    <div className={styles.firstRow}>
                        <div className={styles.div}>
                            <h3>3 amazing</h3>
                            <p>NBA2K esports events</p>
                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.div}>
                            <h3>60 national</h3>
                            <p>NBA2K esports events</p>
                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.div}>
                            <h3>10 million+</h3>
                            <p>NBA2K esports events</p>
                        </div>
                    </div>


                    <div className={styles.secondRow}>
                        <div className={styles.div}>
                            <h3>180 hours</h3>
                            <p>NBA2K esports events</p>
                        </div>

                        <div className={styles.line}></div>

                        <div className={styles.div}>
                            <h3>Fiba & Nba2k</h3>
                            <p>NBA2K esports events</p>
                        </div>
                    </div>

                </div>
            }
            {
                width < 768 && <div className={styles.footer}>

                    <div className={styles.div}>
                        <h3>3 amazing</h3>
                        <p>NBA2K esports events</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.div}>
                        <h3>60 national</h3>
                        <p>NBA2K esports events</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.div}>
                        <h3>10 million+</h3>
                        <p>NBA2K esports events</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.div}>
                        <h3>180 hours</h3>
                        <p>NBA2K esports events</p>
                    </div>

                    <div className={styles.line}></div>

                    <div className={styles.div}>
                        <h3>Fiba & Nba2k</h3>
                        <p>NBA2K esports events</p>
                    </div>

                </div>
            }


        </div>
    )
}

export default PortfolioHero