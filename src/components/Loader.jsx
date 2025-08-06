// src/components/Loader.jsx
import React from 'react';
import images from '../assets/Images/images';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#2F2D73] via-[#3F3D92] to-[#2F2D73]">
      <div className="relative w-24 h-24">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-dashed border-[#CCCCD9] border-t-[#7E7CA6] rounded-full animate-spin-slow"></div>

        {/* Middle ring with reverse spin */}
        <div className="absolute inset-2 border-4 border-dashed border-[#7E7CA6] border-b-[#CCCCD9] rounded-full animate-[spin_5s_reverse_linear_infinite]"></div>

        {/* Center image or dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={images.favicon}
            alt="Loading..."
            className="w-10 h-10 object-contain animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
