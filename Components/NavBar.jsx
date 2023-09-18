import React from "react";
import ThemeButton from "./ThemeButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed w-full z-30 py-4 rounded-lg">
      <div className="lg:max-w-5xl mx-auto max-2xl px-4 lg:px-0">
        <div className="flex items-center justify-between shadow-custom-sm bg-white dark:bg-custom_gray dark:border-neutral-700/30 border border-gray-200 rounded-xl p-3 ">
          <div className="flex space-x-3 items-center ">
            <Link
              className="custom_btn text-gray-500 dark:text-gray-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="custom_btn text-gray-500 dark:text-gray-300"
              href="/"
            >
              About
            </Link>
            <Link
              className="custom_btn text-gray-500 dark:text-gray-300"
              href="/"
            >
              Projects
            </Link>
          </div>
          <div className="flex items-center gap-x-3">
            <ThemeButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
