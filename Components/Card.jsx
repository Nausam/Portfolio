import React from "react";

export const Card = () => {
  return (
    <div className="relative w-350 h-[196.875px] bg-[#f2f2f2] rounded-10 flex items-center justify-center overflow-hidden perspective-1000 shadow-box transition-shadow duration-600 ease-in-out">
      <svg className="w-48 fill-[#333] transition-transform duration-600 ease-in-out">
        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
      </svg>

      <img
        src="your-image-source"
        alt="Card"
        className="w-full h-full card__image"
      />

      <div className="absolute top-0 left-0 w-full h-full p-20 box-border bg-[#f2f2f2] transform rotate-x-[-90deg] origin-bottom transition-transform duration-600 ease-in-out card__content">
        <h2 className="m-0 text-20 text-[#333] font-semibold card__title">
          Project Name
        </h2>
        <p className="my-10 text-12 text-[#777] leading-1.4 card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="px-15 py-15 rounded-8 bg-[#777] border-none text-white card__button">
          Live Demo
        </button>
        <button className="px-15 py-15 rounded-8 border-1 border-[#777] text-[#777] card__button secondary">
          Source Code
        </button>
      </div>
    </div>
  );
};
