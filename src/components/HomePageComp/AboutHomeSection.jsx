import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../../assets/Images/images';

const AboutHomeSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-24 relative bg-[#F8F8FF] dark:bg-[#0D0D0D] overflow-hidden">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    
                    {/* Left Text Content */}
                    <div
                        className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
                        data-aos="fade-right"
                    >
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h1 className="text-md font-semibold text-[#3B3973] uppercase tracking-wider">
                                    About Us
                                </h1>
                                <h2 className="text-[#2F2D73] text-4xl font-bold leading-snug lg:text-start text-center">
                                    Healing Minds, Transforming Lives
                                </h2>
                                <p className="text-[#7E7CA6] text-base leading-relaxed lg:text-start text-center">
                                    At <strong className="text-[#2F2D73]">HealUrMind</strong>, we provide a safe space where healing begins with understanding. 
                                    Our compassionate counselors guide you through emotional challenges toward peace, clarity, and empowerment.
                                </p>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h3 className="text-[#2F2D73] text-4xl font-bold">10+</h3>
                                    <p className="text-[#7E7CA6] text-base">Expert Therapists</p>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-[#2F2D73] text-4xl font-bold">500+</h4>
                                    <p className="text-[#7E7CA6] text-base">Lives Touched</p>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-[#2F2D73] text-4xl font-bold">99.99%</h4>
                                    <p className="text-[#7E7CA6] text-base">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/about" data-aos="zoom-in-up">
                            <button className="sm:w-fit w-full px-6 py-3 bg-[#3B3973] hover:bg-[#2F2D73] transition-all duration-500 ease-in-out rounded-lg shadow-lg flex justify-center items-center">
                                <span className="text-white text-sm font-semibold tracking-wide">Read More</span>
                            </button>
                        </Link>
                    </div>

                    {/* Right Image Section */}
                    <div
                        className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-last order-last"
                        data-aos="fade-left"
                    >
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img
                                className="rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                                src={images.MobileView4}
                                alt="Therapist offering emotional support"
                            />
                        </div>
                        <img
                            className="sm:ml-0 ml-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                            src={images.Square1}
                            alt="Mindfulness practice session"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHomeSection;
