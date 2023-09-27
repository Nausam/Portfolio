"use client";

import React from "react";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed backdrop-blur-md w-full z-30 rounded-lg dark:border-neutral-700/30 border border-gray-200"
    >
      <div className="lg:max-w-6xl mx-auto max-2xl px-4 lg:px-0">
        <div className="flex items-center justify-between rounded-xl p-3 ">
          <div className="hidden md:block font-bold text-2xl tracking-wider transition duration-300 ease-in-out">
            <h1>Portfolio</h1>
          </div>
          <Image
            className="md:hidden block"
            alt="Hamburger menu"
            src="/icons/hamburger.png"
            width={30}
            height={30}
          />

          <div className="flex gap-8 items-center tracking-wider mx-auto">
            <Link
              className="text-gray-700 hover:text-custom_purple dark:hover:text-purple-400 dark:text-gray-300 text-lg hover:scale-110 transition duration-300 ease-in-out"
              href="#home"
            >
              Home
            </Link>

            <Link
              className="text-gray-700 hover:text-custom_purple dark:hover:text-purple-400 dark:text-gray-300 text-lg hover:scale-110 transition duration-300 ease-in-out"
              href="#about"
            >
              About
            </Link>

            <Link
              className="text-gray-700 hover:text-custom_purple dark:hover:text-purple-400 dark:text-gray-300 text-lg hover:scale-110 transition duration-300 ease-in-out"
              href="#projects"
            >
              Projects
            </Link>

            <Link
              className="text-gray-700 dark:text-gray-300 text-lg hover:text-custom_purple dark:hover:text-purple-400  hover:scale-110 transition duration-300 ease-in-out"
              href="#contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-x-3"></div>
          <ThemeButton />
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
