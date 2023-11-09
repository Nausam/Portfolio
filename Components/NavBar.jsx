"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
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
              className="md:hidden block cursor-pointer z-50"
              alt="Hamburger menu"
              src="/icons/hamburger.png"
              width={30}
              height={30}
              onClick={toggleMenu}
            />

            {showMenu ? (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-5 -left-5 p-10"
              >
                <div className="bg-gray-200 dark:bg-gray-800 p-5 rounded-lg flex flex-col items-center shadow-xl">
                  <div className="font-bold text-xl tracking-wider transition duration-300 ease-in-out purple_gradient">
                    <h1>Portfolio</h1>
                  </div>
                  <ul className="flex flex-col gap-3 mt-3">
                    <li>
                      <Link
                        className="text-gray-700 hover:text-custom_purple dark:hover:text-purple-400 dark:text-gray-300 text-md hover:scale-110 transition duration-300 ease-in-out"
                        href="#home"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-custom_purple dark:hover:text-purple-400 dark:text-gray-300 text-md hover:scale-110 transition duration-300 ease-in-out"
                        href="#about"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-custom_purple dark:hover:text-purple-400 dark:text-gray-300 text-md hover:scale-110 transition duration-300 ease-in-out"
                        href="#projects"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 dark:text-gray-300 text-md hover:text-custom_purple dark:hover:text-purple-400  hover:scale-110 transition duration-300 ease-in-out"
                        href="#contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ) : (
              <></>
            )}

            <div className="md:flex hidden items-center justify-center border border-[#7042f861] bg-[#0300145e] p-2 rounded-full px-5">
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
            </div>

            {/* <div className="flex items-center gap-x-3"></div> */}
            <ThemeButton />
          </div>
        </div>
      </motion.nav>
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-280px] w-full h-full object-fit -z-10"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video> */}
    </>
  );
};

export default NavBar;
