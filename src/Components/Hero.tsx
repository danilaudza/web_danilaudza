import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import banner from "../Assets/banner.webp";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5efaff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#5efaff]">Dani</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Interested in Code, Videography{" "}
            <br className="sm:block hidden" /> and Content Creating.
          </p>
        </div>
      </div>
      <div className="absolute bottom-32 w-full flex justify-center">
      <motion.img
        src={banner}
        alt="me"
        className="h-[500px]"
        animate={{ rotate: [5, -5, 5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      </div>
      {/* <ComputersCanvas/> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-3 rounded-full bg-secondary mb-3"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
