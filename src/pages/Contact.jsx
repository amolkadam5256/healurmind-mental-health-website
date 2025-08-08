import React from 'react'

import AboutBannerSection from '../components/AboutPageComp/AboutBannerSection';
import HeroServicesSection from '../components/ServicesPageComp/HeroServicesSection';
import ContactForm from '../components/ContactPages/ContactForm';
const Contact = () => {
  return (
    <>
      <main className="">
        <ContactForm />
        <HeroServicesSection />
        <AboutBannerSection />

      </main>
    </>
  )
}
export default Contact;