import React from 'react'

import AboutBannerSection from '../components/AboutPageComp/AboutBannerSection';
import HeroServicesSection from '../components/ServicesPageComp/HeroServicesSection';
import ServiceSection from '../components/ServicesPageComp/ServiceSection';


const Services = () => {
  return (
    <>
      <main className="w-full">
        <HeroServicesSection />
        <ServiceSection/>
        <AboutBannerSection />

      </main>
    </>
  )
}
export default Services