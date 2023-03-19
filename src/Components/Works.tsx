import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../Constants/Constants";
import { fadeIn, textVariant } from "../Utils/Motion";

import vid from "../Assets/video/video.webm"
import drone from "../Assets/video/droneweb.webm"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  icon,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={icon}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(null)}>
        <p className={`${styles.sectionSubText} `}>Karya Saya</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Berikut adalah beberapa showcase dari proyek yang saya kerjakan
          menggunakan ketrampilan dan pengalaman saya. Contoh ini dapat
          mencerminkan kemampuan saya untuk memecahkan masalah yang kompleks,
          bekerja dengan teknologi yang berbeda, dan mengelola proyek secara
          efektif.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-20">
      <motion.div variants={textVariant(null)}>
        <p className={`${styles.sectionSubText} `}>Upload Youtube Terakhir</p>
        <h2 className={`${styles.sectionHeadText}`}>YouTube.</h2>
      </motion.div>
        <div className="mt-10 flex h-full w-full rounded-lg ">
          <iframe
            className="h-full w-full aspect-video"
            src="https://www.youtube-nocookie.com/embed?listType=playlist&list=PLmTyU5d9Kg_cG-ZrjsvNxkHcVxVAN1PqL&rel=0&controls=0"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 mt-7  ">
          <div>
          <video src={vid} className='w-max lg:w-full shadow-lg' controls={true} autoPlay={true} muted loop/>
          </div>
          <div>
          <video src={drone} className='w-max lg:w-full shadow-lg' controls={true} autoPlay={true} muted loop/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
