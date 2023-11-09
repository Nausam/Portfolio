"use client";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const HeroContent = () => {
  console.log(typeof slideInFromLeft);
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      id="about"
      className="w-full h-full rounded-lg"
    >
      <div className="top-40 relative rounded-xl max-w-2xl lg:max-w-6xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
              <motion.div
                variants={slideInFromLeft(0.3)}
                className="flex flex-1 flex-col max-w-2xl"
              >
                <h1 className="font-bold text-4xl md:text-4xl lg:text-6xl lg:text-start text-center tracking-wider text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out">
                  Welcome to my{" "}
                  <span className="purple_gradient">Celestial realm</span>
                </h1>
                <p className="mt-6 tracking-wider lg:text-xl md:text-lg text-base text-gray-600 dark:text-gray-400 lg:text-start text-center transition duration-300 ease-in-out">
                  Greetings intrepid explorer of the digital cosmos! I am
                  Nausam, a passionate and innovative Full Stack Developer
                  inviting you to embark on a journey through my celestial realm
                  of coding creations.
                </p>
              </motion.div>

              <motion.div variants={slideInFromRight(0.3)} className="mt-5">
                <Image
                  alt="Main icons"
                  src="/images/hero_icon_dark.svg"
                  width={400}
                  height={400}
                  objectFit="contain"
                  objectPosition="center"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroContent;
