import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../assets/Images/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#2F2D73] tracking-wide">
            HealurMind
            {/* <img src={images.logo2} alt="HealurMind" className='h-18' /> */}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-[16px] font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#2F2D73] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100  ${isActive
                    ? 'text-[#2F2D73] font-semibold after:scale-x-100 '
                    : 'text-[#0D0D0D] hover:text-[#3B3973]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#2F2D73] text-white px-5 py-2 rounded-full hover:bg-[#3B3973] transition duration-300 shadow"
              >
                Request A Call
              </motion.button>
            </Link>

          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0D0D0D] focus:outline-none"
            >
              <motion.svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-4 py-3 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-[17px] font-medium px-3 py-2 rounded-md transition-all duration-300 ${isActive
                      ? 'text-[#2F2D73] bg-[#CCCCD9]/30'
                      : 'text-[#0D0D0D] hover:text-[#3B3973]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/contact">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  className="w-full bg-[#2F2D73] text-white px-4 py-2 rounded-full hover:bg-[#3B3973] transition duration-300"
                >
                  Request A Call
                </motion.button>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
