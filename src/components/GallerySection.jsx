import { fadeIn } from "../variants";
import { galleryData } from "../data";
import { motion } from "framer-motion";

import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const { btnIcon, btnText, images, title } = galleryData;
  return (
    <div className="section bg-[#f9f9f9] relative mt-9 lg:mt-0">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[320px] lg:mb-20 "
        >
          {title}
        </motion.h2>
      </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <PhotoAlbum
          onClick={(event, photo, index) => setIndex(index)}
          layout="rows"
          photos={images}
        />
        <Lightbox
          slides={images}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center mt-8 lg:mt-20"
      >
        <button className="btn btn-lg btn-dark">
          {btnText} <span>{btnIcon}</span>
        </button>
      </motion.div>
    </div>
  );
};

export default GallerySection;
