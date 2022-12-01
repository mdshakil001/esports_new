import React from 'react'
import Contact from '../mainPage/Contact'
import Media from './Media'
import PortfolioHero from './PortfolioHero'
import PortfolioSlider from './PortfolioSlider'
import VideoDetail from './VideoDetail'

const Main = () => {
  return (
    <div>
      <PortfolioHero />
      <VideoDetail />
      <Media />
      <PortfolioSlider />
      <Contact />
    </div>
  )
}

export default Main