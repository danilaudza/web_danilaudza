import React from "react";
import imagus from '../Assets/banner.webp'

const Hero = () => {

  return (
    <div className="relative">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 h-screen px-5">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-blue-600 font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
            Dhany Laudza
          </h2>
          <p className="texxt-gray-600 text-lg text-ecnter lg:text-legt mb-6">
            Seorang mas-mas yang mendalami bidang Coding, Design, Videografi 
          </p>
          <div className="flex justify-center flex-wrap gap-6"></div>
          <button type="button" className="bg-blue-600 hover:bg-blue-300 text-white px-3 py-2 rounded-md">
            Find Me Here!
          </button>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img className="w-full h-full object-contain" src={imagus} alt="" />
        </div>
      </div>
      <div className="hidden md:block overflow-hidden bg-blue-600 rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
    </div>
  );
};

export default Hero;
