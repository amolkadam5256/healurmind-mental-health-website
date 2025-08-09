import React from 'react'

import AboutHeroSection from '../components/AboutPageComp/AboutHeroSection';
import AboutBannerSection from '../components/AboutPageComp/AboutBannerSection';
import AboutDes from '../components/AboutPageComp/AboutDes';
const About = () => {
  return (
    <>
      <main className="w-full">
        <AboutHeroSection />
        <AboutDes/>
        <AboutBannerSection />

      </main>
    </>
  )
}
export default About