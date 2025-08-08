import React from 'react'

import AboutHeroSection from '../components/AboutPageComp/AboutHeroSection';
import AboutBannerSection from '../components/AboutPageComp/AboutBannerSection';
const About = () => {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden">
        <AboutHeroSection />
        <AboutBannerSection />
      </main>
    </>
  )
}
export default About