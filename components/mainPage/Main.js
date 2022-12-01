import React from 'react'
import styles from '../../styles/Main.module.css'
import About from './About'
import Hero from './Hero'
import IconSlider from './IconSlider'
import Portfolio from './Portfolio'
import Services from './Services'
import Testimonials from './Testimonials'
import Team from './Team'
import Blog from './Blog'
import Contact from './Contact'
import SliderBtn from '../SliderBtn'
import ContactForm from '../ContactForm'

const HomeComponent = () => {
  return (
    <div>
      <Hero />
      <IconSlider />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <Team />
      <Blog />
      <Contact />

      {/* <ContactForm /> */}

    </div>
  )
}

export default HomeComponent