import React from 'react'

import HeroSection from '../components/HomePageComp/HeroSection';
import AboutHomeSection from '../components/HomePageComp/AboutHomeSection';
import GallerySection from '../components/HomePageComp/GallerySection';
import ServicesSection from '../components/HomePageComp/ServicesSection'
import Testimonial from '../components/HomePageComp/Testimonial'
import AboutBannerSection from '../components/AboutPageComp/AboutBannerSection';
const Home = () => {
  return (
    <>
      <main className="w-full">
        <HeroSection />
        <AboutHomeSection />
        <GallerySection />
        <ServicesSection />
        <Testimonial />
        <AboutBannerSection/>
      </main>
    </>
  )
}

export default Home