"use client";

import Image from "next/image";
import LinkButton from "./LinkButton";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="w-full rounded-lg">
      <div className="top-10 relative rounded-xl max-w-2xl lg:max-w-6xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0">
        <div className="p-6 lg:mx-4 ">
          <div className="flex gap-10 flex-col lg:mt-5 mt-10 w-full items-center justify-center md:flex-row text-center sm:text-left">
            <div className="flex flex-1 flex-col mt-5 max-w-7xl md:items-start md:text-start">
              <div className="flex sm:flex-row flex-col justify-between items-center gap-10">
                <div>
                  <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl md:mt-0 mt-2  transition duration-300 ease-in-out">
                    Welcome to my{" "}
                    <span className="purple_gradient">Celestial realm</span>
                  </h1>
                  <p className="mt-10 tracking-wider lg:text-xl md:text-lg text-base  dark:text-gray-400 transition duration-300 ease-in-out">
                    Greetings intrepid explorer of the digital cosmos! I am
                    Nausam, a passionate and innovative Full Stack Developer
                    inviting you to embark on a journey through my celestial
                    realm of coding creations.
                  </p>
                  <div className="flex mt-10 jusity-center md:justify-start">
                    <LinkButton href="#projects" text="Get Started" />
                  </div>
                </div>

                <div className="mt-6">
                  <Image
                    alt="Main icons"
                    src="/images/mainiconsdark.svg"
                    width={1700}
                    height={1700}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
