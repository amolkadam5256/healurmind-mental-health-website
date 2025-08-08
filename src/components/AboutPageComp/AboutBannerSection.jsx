import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutBannerSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="relative bg-white dark:bg-gray-900  h-[60vh]">
      {/* Background Image Slide */}
      <div className="absolute inset-0 z-0 bg-cover bg-center about-hero-bg-slide animate-slide"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Centered Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div
          className="text-center text-white max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
            data-aos="fade-up"
          >
            Nurturing Healing and Growth at HealUrMind
          </h1>
          <p
            className="text-base sm:text-lg md:text-lg font-light text-gray-200 dark:text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At HealUrMind, we offer a safe and supportive space to help you heal,
            grow, and thrive. Our caring counselors guide you through life’s
            challenges with empathy, empowering you to find clarity, strength, and balance within.
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="zoom-up"
            data-aos-delay="100"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:text-black transition duration-200"
            >
              Start Your Healing Journey
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 
                  1 0 010 1.414l-6 6a1 1 0 
                  01-1.414-1.414L14.586 
                  11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                  1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerSection;
