import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2F2D73] text-white pt-12 pb-6 mt-1 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-sm text-[#CCCCD9] leading-relaxed">
            At HealurMind, we help you heal, grow, and thrive. Our certified online therapists offer support for anxiety, depression, relationships, and emotional well-being.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-[#CCCCD9]">
            <li>Study Nature</li>
            <li>Nature is a Gift</li>
            <li>A Second Spring</li>
            <li>Smiles of Nature</li>
            <li>Just Let it Rain</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm text-[#CCCCD9]">12 Avenue, New York, NY 10160</p>
          <p className="text-sm text-[#CCCCD9] mt-2">Phone: +1 910-626-85255</p>
          <p className="text-sm text-[#CCCCD9] mt-1">
            Email:{' '}
            <a href="mailto:contact@nature.com" className="text-[#7E7CA6] hover:underline">
              contact@nature.com
            </a>
          </p>
        </div>

        {/* Social & Branding */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-[#CCCCD9] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#CCCCD9] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#CCCCD9] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#CCCCD9] transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#3B3973] mt-10 pt-4 text-center text-sm text-[#CCCCD9]">
        <p>Copyright © {new Date().getFullYear()} HealurMind</p>
        <p className="mt-1 text-[#7E7CA6]">Powered by HealurMind</p>
      </div>
    </footer>
  );
};

export default Footer;
