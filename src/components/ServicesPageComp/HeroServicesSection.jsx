import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaHandsHelping, FaBrain, FaHeartbeat } from "react-icons/fa";
import images from '../../assets/Images/images'

const HeroServicesSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <section className="bg-white py-20" id="hero-services" >
            <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                {/* Left Image */}
                <div data-aos="fade-right" data-aos-delay="300">
                    <img
                        src={images.Square1}
                        alt="Therapy support"
                        className="w-2/3 m-auto rounded-2xl shadow-xl"
                    />
                </div>

                {/* Right Content */}
                <div className="space-y-6" data-aos="fade-left" data-aos-delay="400">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2F2D73]">
                        Why Choose HealUrMind?
                    </h2>
                    <p className="text-[#7E7CA6] text-lg leading-relaxed">
                        You deserve support that sees you fully. Our therapists offer not just care but compassion, insight, and proven tools to guide your journey to well-being.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-6">
                        <div className="flex flex-col items-center space-y-2">
                            <FaHandsHelping className="text-3xl text-[#3B3973]" />
                            <p className="text-[#0D0D0D] font-semibold">Empathetic Support</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <FaBrain className="text-3xl text-[#3B3973]" />
                            <p className="text-[#0D0D0D] font-semibold">Mindful Methods</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2">
                            <FaHeartbeat className="text-3xl text-[#3B3973]" />
                            <p className="text-[#0D0D0D] font-semibold">Heart-Centered Healing</p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#3B3973] rounded-full hover:bg-[#2F2D73] transition duration-200"
                        >
                            Explore Our Services
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[#0D0D0D] border border-[#3B3973] rounded-full hover:bg-[#CCCCD9] transition duration-200"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroServicesSection;
