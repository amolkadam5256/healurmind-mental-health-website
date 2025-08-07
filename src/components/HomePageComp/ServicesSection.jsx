import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaBrain,
  FaHeart,
  FaPeopleArrows,
  FaSeedling,
  FaLeaf,
  FaBookOpen
} from 'react-icons/fa';

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center space-y-4">
        <h2
          className="text-4xl font-extrabold text-[#2F2D73] leading-snug"
          data-aos="fade-up"
        >
          Discover Healing, Growth, and Balance
        </h2>
        <p
          className="text-lg text-[#3B3973] max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore a range of nurturing services tailored to support your emotional, mental, and social well-being.
        </p>
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6 py-6 border border-[#CCCCD9] rounded-2xl shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <Icon className="text-4xl mb-4 text-[#2F2D73] animate-bounce-slow" />
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">{title}</h3>
            <p className="text-[#7E7CA6]">{description}</p>
          </div>
        ))}
      </div>

      {/* Custom CSS for infinite animation */}
      <style>{`
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

const services = [
  {
    icon: FaBrain,
    title: 'Depression Counseling',
    description:
      'Navigate emotional lows with guidance, empathy, and personalized coping techniques.'
  },
  {
    icon: FaLeaf,
    title: 'Stress Relief & Management',
    description:
      'Learn effective tools to calm your mind and build resilience amidst life’s pressures.'
  },
  {
    icon: FaPeopleArrows,
    title: 'Relationship Support',
    description:
      'Rebuild emotional bonds and rediscover connection through guided therapy sessions.'
  },
  {
    icon: FaHeart,
    title: 'Community Connection',
    description:
      'Heal through shared experiences in safe, empathetic group settings.'
  },
  {
    icon: FaSeedling,
    title: 'Mindful Moments',
    description:
      'Recharge with simple mindfulness exercises and grounding techniques.'
  },
  {
    icon: FaBookOpen,
    title: 'Healing Resources',
    description:
      'Expert-curated content — articles, podcasts, and tools to guide your wellness journey.'
  }
];
