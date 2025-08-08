import React from "react";

const services = [
    {
        title: "Depression Counseling",
        description:
            "Find solace and support as our trained counselors help you navigate the complexities of depression, offering coping mechanisms and fostering a sense of hope.",
        iconBg: "#3B3973",
        iconColor: "#CCCCD9",
        icon: (
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "Stress Counseling Services",
        description:
            "Learn to manage and reduce stress with the guidance of our counselors, equipping you with tools to lead a more balanced and tranquil life.",
        iconBg: "#3B3973",
        iconColor: "#CCCCD9",
        icon: (
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M7.28856 0.796908C7.42258 0.734364 7.57742 0.734364 7.71144 0.796908L13.7114 3.59691C13.8875 3.67906 14 3.85574 14 4.05V10.95C14 11.1443 13.8875 11.3209 13.7114 11.4031L7.71144 14.2031C7.57742 14.2656 7.42258 14.2656 7.28856 14.2031L1.28856 11.4031C1.11252 11.3209 1 11.1443 1 10.95V4.05C1 3.85574 1.11252 3.67906 1.28856 3.59691L7.28856 0.796908Z" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: "Relationship Counseling",
        description:
            "Strengthen and mend your relationships through our expert guidance, enhancing communication, understanding, and emotional connection.",
        iconBg: "#3B3973",
        iconColor: "#CCCCD9",
        icon: (
            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998..." fill="currentColor" />
            </svg>
        ),
    },
];

const ServiceSection = () => {
    return (
        <section className="py-20 bg-white" id="services">
            <div className="max-w-screen-lg mx-auto px-5">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-[#2F2D73]">Our Services</h2>
                    <p className="text-[#7E7CA6] mt-3 max-w-2xl mx-auto">
                        Guiding You Towards Wellness: Explore Our Diverse Counseling Services at HealUrMind
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-start bg-[#CCCCD9] p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] group"
                        >
                            {/* Hover underline glow effect */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-[#3B3973] to-[#2F2D73] transition-all duration-300 group-hover:w-full rounded-full"></div>

                            {/* Icon */}
                            <span
                                className="p-3 rounded-full transition-transform duration-300 group-hover:animate-bounce"
                                style={{
                                    backgroundColor: service.iconBg,
                                    color: service.iconColor,
                                }}
                            >
                                {service.icon}
                            </span>

                            {/* Text */}
                            <div className="mt-4">
                                <h3 className="font-semibold text-xl text-[#0D0D0D] mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[#3B3973] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
