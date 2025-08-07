import React from 'react'

import HeroSection from '../components/HomePageComp/HeroSection';
import AboutHomeSection from '../components/HomePageComp/AboutHomeSection';
import GallerySection from '../components/HomePageComp/GallerySection';
import ServicesSection from '../components/HomePageComp/ServicesSection'
import Testimonial from '../components/HomePageComp/Testimonial'
const Home = () => {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <AboutHomeSection />
        <GallerySection />
        <ServicesSection />
        <Testimonial />
      </main>
    </>
  )
}

export default Home