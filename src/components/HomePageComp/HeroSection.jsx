import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../../assets/Images/images";
import { Link } from "react-router-dom";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section className="relative bg-white dark:bg-gray-900">
            {/* Background image slideshow container */}
            <div className="absolute inset-0 z-0 bg-cover bg-center hero-bg-slide animate-slide"></div>

            {/* Overlay to dim background for better text contrast */}
            <div className="absolute inset-0 bg-black opacity-40 z-10 dark:opacity-50"></div>

            {/* Content */}
            <div className="relative z-20 grid max-w-screen-xl px-4 py-20 mx-auto lg:grid-cols-12 lg:gap-8 lg:py-28">
                {/* Left Content */}
                <div
                    className="mr-auto place-self-center lg:col-span-7 text-white"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h1
                        className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl"
                        data-aos="fade-right"
                    >
                        Nurturing Healing and Growth at HealUrMind
                    </h1>
                    <p
                        className="max-w-2xl mb-6 font-light md:text-lg lg:text-xl text-gray-200 dark:text-gray-300"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        At HealUrMind, we offer a safe and supportive space to help you heal, grow,
                        and thrive. Our caring counselors guide you through life’s challenges with
                        empathy, empowering you to find clarity, strength, and balance within.
                    </p>
                    {/* Buttons */}

                    <div
                        className="flex flex-col sm:flex-row gap-4 sm:items-center"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition duration-200"
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

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-white hover:text-black transition duration-200"
                        >
                            Talk to Us
                        </Link>
                    </div>

                </div>

                {/* Right-side image (optional) */}
                <div
                    className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center z-20"
                    data-aos="fade-up-left"
                    data-aos-delay="800"
                >
                    <img
                        src={images.homePng}
                        alt="Product mockup"
                        className="w-full h-auto max-w-md "
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
