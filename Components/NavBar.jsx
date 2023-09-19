import React from "react";
import ThemeButton from "./ThemeButton";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed backdrop-blur-md w-full z-30 pt-4 rounded-lg">
      <div className="lg:max-w-5xl mx-auto max-2xl px-4 lg:px-0">
        <div className="flex items-center justify-between shadow-custom-sm bg-white dark:bg-custom_gray dark:border-neutral-700/30 border border-gray-200 rounded-xl p-3 ">
          <div className="hidden md:block">Portfolio</div>
          <Image
            className="md:hidden block"
            alt="Hamburger menu"
            src="/icons/hamburger.png"
            width={30}
            height={30}
          />

          <div className="flex gap-8 items-center tracking-wider mx-auto">
            <Link className="text-gray-500 dark:text-gray-300" href="#home">
              Home
            </Link>
            <Link className="text-gray-500 dark:text-gray-300" href="#about">
              About
            </Link>
            <Link className="text-gray-500 dark:text-gray-300" href="#projects">
              Projects
            </Link>
          </div>
          <div className="flex items-center gap-x-3"></div>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
