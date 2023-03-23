import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../Constants/Constants";
import { motion } from "framer-motion";

const Tech = () => {
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.random() * (max - min + 1) + min;
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <motion.img
            animate={{ rotate: [5, -5, 5] }}
            transition={{
              duration: randomNumberInRange(1,2),
              repeat: Infinity,
              repeatType: "loop",
            }}
            src={technology.icon}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
