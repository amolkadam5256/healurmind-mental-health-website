import React from 'react'

import AboutBannerSection from '../components/AboutPageComp/AboutBannerSection';
import HeroServicesSection from '../components/ServicesPageComp/HeroServicesSection';
import ServiceSection from '../components/ServicesPageComp/ServiceSection';
import ContactForm from '../components/ContactPages/ContactForm';
const Contact = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <ContactForm />
        <HeroServicesSection />
        <ServiceSection/>
        <AboutBannerSection />

      </main>
    </>
  )
}
export default Contact;