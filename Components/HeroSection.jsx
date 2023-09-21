"use client";

import Image from "next/image";
import LinkButton from "./LinkButton";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="w-full rounded-lg ">
      <div
        className="bg-white top-24 relative dark:bg-[#212121] shadow-custom-sm rounded-xl max-w-2xl lg:max-w-5xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0"
        style={{ zIndex: 1 }}
      >
        <div className="p-2 lg:mx-4 ">
          <div className="lg:p-6 p-3 ">
            <div className="flex justify-between w-full lg:text-lg md:text-base text-sm">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Full-Stack Developer
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Available
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative hidden dark:block"
            >
              <div
                className="absolute mt-14 inset-0 flex justify-center items-center opacity-5 lg:top-6"
                style={{ zIndex: 0 }}
              >
                <Image
                  className="lg:w-[400px] lg:h-[320px]"
                  alt="Moon"
                  src="/images/moon.png"
                  width={300}
                  height={300}
                  // layout="responsive"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </motion.div>

            <div className="flex gap-10 flex-col lg:mt-5 mt-0 w-full items-center justify-center md:flex-row text-center md:text-left ">
              <div className="flex flex-1 flex-col mt-5 max-w-3xl items-center text-center">
                <div className="relative group">
                  <div className="mt-6 absolute -inset-10  transition-all  duration-300 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-500 bg-fuchsia-500 rounded-full blur-3xl dark:opacity-20 opacity-10"></div>
                  <motion.h1
                    initial={{ opacity: 0, scale: 2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative font-bold text-3xl md:text-4xl lg:text-5xl md:mt-0 mt-2  purple_gradient"
                  >
                    Hussain Nausam
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="mt-6 tracking-wider lg:text-lg md:text-base text-sm text-gray-500 dark:text-gray-400"
                >
                  Greetings, intrepid explorer of the digital cosmos! I am
                  <span className="text-custom_purple font-bold"> Nausam</span>,
                  a passionate and innovative{" "}
                  <span className="text-custom_purple font-bold">
                    {" "}
                    Full Stack Developer
                  </span>
                  , inviting you to embark on a journey through my celestial
                  realm of coding creations.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6"
                >
                  <LinkButton href="#projects" text="Get Started" />
                </motion.div>
              </div>
            </div>

            <div className="mt-14 rounded-xl p-3">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-start text-center text-lg text-gray-500 dark:text-gray-400"
              >
                Cosmic Code Arsenal
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-transparent mt-3 mb-4 rounded-xl dark:border-neutral-800 shadow-md dark:border p-3"
              >
                <div className="flex md:justify-between flex-wrap justify-center gap-5">
                  <motion.div
                    // initial={{ opacity: 0, y: 50 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    className="tech_stack"
                  >
                    <Image width={30} height={30} src="/icons/html.png" />
                  </motion.div>

                  <motion.div
                    // initial={{ opacity: 0, y: -50 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    className="tech_stack"
                  >
                    <Image width={30} height={30} src="/icons/css.png" />
                  </motion.div>

                  <motion.div
                    // initial={{ opacity: 0, y: 50 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    className="tech_stack"
                  >
                    <Image width={30} height={30} src="/icons/javascript.png" />
                  </motion.div>

                  <motion.div
                    // initial={{ opacity: 0, y: -50 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    className="tech_stack"
                  >
                    <Image width={30} height={30} src="/icons/tailwind.png" />
                  </motion.div>

                  <motion.div
                    // initial={{ opacity: 0, y: 50 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    className="tech_stack"
                  >
                    <Image width={30} height={30} src="/icons/react.png" />
                  </motion.div>

                  <motion.div
                    // initial={{ opacity: 0, y: -50 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    className="tech_stack"
                  >
                    <Image width={30} height={30} src="/icons/nextjs.png" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
