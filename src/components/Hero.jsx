import React from "react";
import { motion } from "framer-motion";
import { heroData } from "../data";
import { fadeIn } from "../variants";

const constainer = {
  hidden: {},
  show: {
    transition: {
      straggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  const { btnIcon, btnText, subtitle, title } = heroData;
  return (
    <div className="relative mt-[80px] lg:mt-[90px]  bg-hero bg-cover bg-center bg-no-repeat min-h-[40vh] lg:h-[900px] ">
      <motion.div
        variants={constainer}
        initial="hidden"
        whileInView="show"
        className="container mx-auto min-h-[50vh] lg:h-full flex items-center justify-center xl:justify-end "
      >
        <div className="text-white text-center lg:text-left lg:max-w-[640px] ">
          <motion.h1 variants={fadeIn("down")} className="h1">
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("down")}
            className="mb-8 lg:mb-16 max-w-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn("down")}>
            <button className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0">
              {btnText} <span className="text-xl">{btnIcon}</span>
            </button>
          </motion.div>
        </div>
        <div className="hidden lg:flex absolute -bottom-2 right-0 left-0 before:content-outlineText"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
