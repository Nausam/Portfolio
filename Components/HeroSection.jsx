"use client";

import HeroContent from "./HeroContent";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col h-screen w-full"
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
          className="rotate-180 absolute lg:top-[-390px] top-[-420px] h-full w-full left-0 z-[-1] object-cover"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      </motion.div>
      <HeroContent />
    </motion.div>
  );
};

export default HeroSection;
