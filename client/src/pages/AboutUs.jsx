import React from 'react'
import AboutSection from '../components/AboutSection.jsx'
import FaqSection from '../components/FaqSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'

const AboutUs = () => {
  return (
    <div className='about-us-pages-container'>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </div>
  )
}

export default AboutUs
