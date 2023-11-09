"use client";

import Image from "next/image";
import LinkButton from "./LinkButton";

import HeroContent from "./HeroContent";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col h-[1000px] w-full"
      id="about-me"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute lg:top-[-435px] top-[-490px] h-full w-full left-0 z-[-1] object-cover"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </motion.div>
      <HeroContent />
    </motion.div>
  );
};

export default HeroSection;
