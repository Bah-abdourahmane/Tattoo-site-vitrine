import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../data";
import { fadeIn } from "../variants";

const About = () => {
  const { btnIcon, btnText, subtitle1, subtitle2, title } = aboutData;
  return (
    <div className="lg:py-16 xl:pb-40">
      <div className="container mx-auto">
        <div className="flex items-center flex-col lg:flex-row flex-1">
          {/* number */}
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[460px] xl:text-[660px] leading-none font-tertiary lg:tracking-[.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent "
          >
            <span>01</span>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="xl:mt-48"
          >
            <h2 className="h2">{title}</h2>
            <div className="flex flex-col items-end text-grey">
              <p className="mb-6">{subtitle1}</p>
              <p className="mb-9">{subtitle2}</p>
              <button className="btn btn-lg btn-link">
                {btnText} <span className="text-xl">{btnIcon}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
