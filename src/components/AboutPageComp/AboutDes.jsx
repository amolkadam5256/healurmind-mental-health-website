import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import images from '../../assets/Images/images';

const AboutDes = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="py-15 relative bg-[#F8F8FF] dark:bg-[#0D0D0D]">
            <h2 className="text-center text-2xl sm:text-3xl md:text-3xl font-bold tracking-wide  text-[#2F2D73] leading-tight py-10 ">
                <span className="text-[#3B3973]">Connect,</span>
                <span className="text-[#0D0D0D]">Share,</span>
                <span className="text-[#CCCCD9]">and Thrive Together</span>
            </h2>

            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    {/* left Image Section */}
                    <div
                        className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-first"
                        data-aos="fade-left"
                    >
                        <div className="block pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 ">
                            <img
                                className="rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                                src={images.Square2}
                                alt="Therapist offering emotional support"
                            />
                            <p className="text-[#7E7CA6] text-base leading-relaxed lg:text-start text-center pt-5"> <strong className="text-[#2F2D73] block text-lg">Mindful Moments
                            </strong>Take a break from the chaos and explore our "Mindful Moments" section, where you'll find quick tips and exercises to center yourself amidst the hustle and bustle of daily life.</p>
                        </div>
                        <div>

                            <img
                                className="sm:ml-0 ml-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-500"
                                src={images.Square1}
                                alt="Mindfulness practice session"
                            />
                            <p className="text-[#7E7CA6] text-base leading-relaxed lg:text-start text-center pt-5"><strong className="text-[#2F2D73] block text-lg">Healing Resources
                            </strong>Explore our curated collection of articles, podcasts, and recommended reads that offer insights and guidance on your journey towards emotional well-being.</p>
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div
                        className="w-full flex flex-col justify-start items-center gap-10 self-start mt-10"
                        data-aos="fade-up"
                    >

                        <div className="w-full flex flex-col justify-start items-center gap-8 text-center lg:text-left">
                            <p className="text-[#7E7CA6] text-base leading-relaxed max-w-xl">
                                Imagine sitting in a circle of understanding, surrounded by individuals who genuinely care.
                                At <strong className="text-[#2F2D73]">HealUrMind</strong>, we foster a community of
                                <span className="text-[#3B3973] font-medium"> support </span> and
                                <span className="text-[#3B3973] font-medium"> growth</span>.
                                Our diverse team of experienced counselors and therapists is dedicated to helping you navigate life’s complexities -
                                from <span className="text-[#2F2D73] font-semibold">relationship challenges</span> and
                                <span className="text-[#2F2D73] font-semibold"> personal development</span>
                                to managing <span className="text-[#3B3973]">stress</span> and overcoming
                                <span className="text-[#3B3973]"> fears</span>.
                                <br className="hidden lg:block" />
                                Join us on a journey where healing meets hope, and every challenge becomes a stepping stone toward
                                <span className="text-[#2F2D73] font-semibold"> inner peace</span>.
                            </p>
                        </div>
                        <div className="flex justify-end mt-6">
                            <Link to="/contact">
                                <button className="px-6 py-3 bg-gradient-to-r from-[#3B3973] to-[#2F2D73] hover:from-[#2F2D73] hover:to-[#1f1c4f] transition-all duration-500 ease-in-out rounded-lg shadow-xl flex items-center gap-2">
                                    <span className="text-white text-sm font-semibold tracking-wide">Contact Now</span>
                                    <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </Link>
                        </div>

                    </div>



                </div>
            </div>
        </section>
    );
};

export default AboutDes;
