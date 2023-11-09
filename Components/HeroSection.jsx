"use client";

import Image from "next/image";
import LinkButton from "./LinkButton";

import { motion } from "framer-motion";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col h-[720px] w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute lg:top-[-280px] top-[-340px] h-full w-full left-0 z-[-1] object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default HeroSection;
