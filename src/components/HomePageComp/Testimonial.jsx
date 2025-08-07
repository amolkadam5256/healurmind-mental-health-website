import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: "Layla A.",
        text: "HealUrMind’s guidance led me from uncertainty to healing. Insightful sessions, caring counselors, and practical strategies reshaped my perspective. Journey I’m grateful for.",
    },
    {
        name: "Khalid M.",
        text: "Online counseling at HealUrMind revitalized our relationship. Communication improved, and sparks flew anew. Grateful for the transformative experience.",
    },
    {
        name: "Noura S.",
        text: "Parent-child counseling bridged gaps, transforming our relationship. Now, understanding flows, unity strengthens. HealUrMind’s impact is profound.",
    },
    {
        name: "Tariq F.",
        text: "HealUrMind fortified our marriage’s foundation. Practical wisdom navigated early hurdles, setting a course for lasting happiness.",
    },
    {
        name: "Amina H.",
        text: "Depression’s grip weakened, thanks to HealUrMind’s compassionate guidance. Managed emotions, renewed purpose. Life transformed.",
    },
    {
        name: "Youssef H.",
        text: "Stress no longer controls me. HealUrMind’s techniques empower, keeping me centered in life’s chaos. Grateful for newfound calm.",
    }
];

const Testimonial = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <section className="py-24 bg-white relative text-[#0D0D0D]">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative mb-14 text-center" data-aos="fade-down">
                    <h2 className="text-4xl font-bold text-[#2F2D73] mb-4">What Our Clients Say</h2>
                    <p className="text-[#7E7CA6] mb-6">Real stories of transformation and healing</p>
                    {/* Custom Circular Navigation Buttons - Centered Below Heading */}
                    <div className="flex justify-center gap-6 mt-6 animate-fade-in">
                        <button
                            id="slider-button-left"
                            className="swiper-button-prev group w-12 h-12 border-2 border-[#2F2D73] rounded-full flex items-center justify-center hover:bg-[#2F2D73] transition-all duration-300"
                            aria-label="Previous"
                        >
                            <svg
                                className="w-6 h-6 text-[#2F2D73] group-hover:text-[#CCCCD9]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" />
                            </svg>
                        </button>

                        <button
                            id="slider-button-right"
                            className="swiper-button-next group w-12 h-12 border-2 border-[#2F2D73] rounded-full flex items-center justify-center hover:bg-[#2F2D73] transition-all duration-300"
                            aria-label="Next"
                        >
                            <svg
                                className="w-6 h-6 text-[#2F2D73] group-hover:text-[#CCCCD9]"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" />
                            </svg>
                        </button>
                    </div>


                </div>


                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    autoplay={{ delay: 5000 }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="swiper-container"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="bg-white rounded-lg shadow-md border border-[#CCCCD9] p-6 h-full flex flex-col justify-between"
                                data-aos="zoom-in"
                            >
                                <p className="text-[#3B3973] mb-4">“{item.text}”</p>
                                <div>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
                                        ))}
                                    </div>
                                    <p className="font-semibold text-[#2F2D73]">{item.name}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
