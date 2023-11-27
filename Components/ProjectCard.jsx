import React from "react";
import LinkButton from "./LinkButton";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  title,
  description,
  image,
  width,
  height,
  demoImage,
  demoWidth,
  demoHeight,
  demoLink,
  gitImage,
  gitWidth,
  gitHeight,
  gitLink,
}) => {
  return (
    <div className="w-[300px] h-[370px] bg-slate-800 border border-slate-500 rounded-md cursor-pointer hover:rotate-1 hover:border-slate-200 hover:scale-105 hover:shadow-2xl shadow-md shadow-slate-800 transition-all duration-300">
      <div className="w-full h-[150px] rounded-md bg-slate-800">
        <Image
          className="rounded-xl hover:scale-110 transition duration-500 ease-in-out cursor-pointer mx-auto"
          alt="project image"
          src={image}
          width={width}
          height={height}
          objectFit="cover"
        />
      </div>
      <div className="w-full h-[218px] rounded-md bg-slate-900">
        <div className="w-full p-3">
          <h1 className="text-gray-300"> {title}</h1>
          <p3 className="text-xs text-gray-400 mt-3">{description}</p3>
        </div>

        <div className="flex gap-3 p-2 mt-5">
          <Link href={demoLink} target="_blank">
            <Image
              className="rounded-xl hover:scale-110 transition duration-500 ease-in-out cursor-pointer mx-auto"
              alt="demo link"
              src={demoImage}
              width={demoWidth}
              height={demoHeight}
              objectFit="cover"
            />
          </Link>

          <Link href={gitLink} target="_blank">
            <Image
              className="rounded-xl hover:scale-110 transition duration-500 ease-in-out cursor-pointer mx-auto"
              alt="git link"
              src={gitImage}
              width={gitWidth}
              height={gitHeight}
              objectFit="cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
