import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../../assets/Images/images";

const GallerySection = () => {
    const masonryImages = [
        [images.MobileView1, images.hands_shake, images.yoga],
        [images.logo1, images.MobileView2, images.Square2],
        [images.MobileView4, images.homePng1, images.Square3],
        [images.Square1, images.mental, images.hands_shake2],
    ];

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
            easing: 'ease-in-out',
        });
    }, []);

    const animationEffects = [
        "fade-up",
        "fade-down",
        "zoom-in",
        "zoom-out",
        "flip-left",
        "flip-right",
        "fade-right",
        "fade-left"
    ];

    return (
        <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug">
                        Discover Tranquility in Every Corner
                    </h2>
                    <p className="text-gray-500 text-base max-w-2xl mx-auto">
                        Step into a serene sanctuary where every space is crafted to heal, soothe, and inspire.
                        At <span className="font-semibold text-primary">HealUrMind</span>, our environments reflect the calm we aim to bring within — through mindful design, gentle light, and peaceful energy.
                    </p>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto italic">
                        Let the visuals speak to your soul — a glimpse into where inner peace begins.
                    </p>
                </div>

                {/* Gallery Masonry Layout (4 Columns) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {masonryImages.map((column, colIdx) => (
                        <div className="grid gap-4" key={colIdx}>
                            {column.map((img, imgIdx) => (
                                <div
                                    key={imgIdx}
                                    data-aos={animationEffects[(colIdx + imgIdx) % animationEffects.length]}
                                    data-aos-delay={imgIdx * 100}
                                    className="transform transition-all duration-500 hover:scale-105"
                                >
                                    <img
                                        className="h-auto max-w-full rounded-lg shadow-lg"
                                        src={img}
                                        alt={`Gallery ${colIdx}-${imgIdx}`}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
