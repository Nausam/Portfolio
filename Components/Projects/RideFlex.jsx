import Image from "next/image";
import Link from "next/link";

import LinkButton from "../LinkButton";
import { Reveal } from "../Reveal";

const RideFlex = () => {
  return (
    <Reveal>
      <div className="flex lg:flex-row flex-col gap-10 mt-20 items-center border-2 p-10 rounded-xl dark:border-custom_purple dark:border-opacity-20">
        <div className="lg:hidden md:block">
          <div className="mb-10 rounded-xl dark:border-neutral-800 border-neutral-300 hover:dark:border-custom_purple transition-all duration-500 ease-in-out shadow-md border p-3 overflow-hidden">
            <Link
              href="https://ride-flex.vercel.app/"
              target="_blank"
              className="overflow-hidden rounded-xl cursor-pointer shadow-xl "
            >
              <Image
                className="rounded-xl hover:scale-110 transition duration-500 ease-in-out mx-auto"
                alt="Cosmo guard image"
                src="/images/ride-flex.png"
                objectFit="fill"
                width={300}
                height={300}
              />
            </Link>
          </div>

          <h1 className="text-2xl lg:text-start text-center tracking-wider font-bold text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out">
            RideFlex
          </h1>
          <p className="lg:text-xl md:text-lg text-base text-center lg:text-start mt-5 tracking-wider text-gray-600 dark:text-gray-400 transition duration-300 ease-in-out">
            RideFlex is a legacy of innovation and a dedication to pushing
            boundaries, we offer more than just bikes; we provide a gateway to
            adventure, excitement, and the thrill of the open road.
          </p>

          <div className="w-full flex flex-wrap gap-3 items-center justify-center lg:justify-start mt-5 text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out tracking-wider">
            <div className="border border-gray-500 p-2 rounded-xl">React</div>
            <div className="border border-gray-500 p-2 rounded-xl">Next JS</div>
            <div className="border border-gray-500 p-2 rounded-xl">
              Tawilwind CSS
            </div>
          </div>

          <div className="w-full flex gap-3 justify-center items-center lg:justify-start mt-10">
            <LinkButton
              href="https://ride-flex.vercel.app/"
              target="_blank"
              text="Demo"
            />
            <LinkButton
              href="https://github.com/Nausam/RideFlex"
              target="_blank"
              text="Source Code"
            />
          </div>
        </div>

        <div className="hidden lg:block rounded-xl dark:border-neutral-800 border-neutral-300 hover:dark:border-custom_purple transition-all duration-500 ease-in-out shadow-md border p-3 overflow-hidden">
          <Link
            href="https://ride-flex.vercel.app/"
            target="_blank"
            className="overflow-hidden rounded-xl cursor-pointer shadow-xl "
          >
            <Image
              className="rounded-xl hover:scale-110 transition duration-500 ease-in-out"
              alt="Cosmo guard image"
              src="/images/ride-flex.png"
              objectFit="fill"
              width={800}
              height={800}
            />
          </Link>
        </div>

        <div className="lg:block hidden">
          <h2 className="text-2xl md:text-start text-center tracking-wider font-bold text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out">
            RideFlex
          </h2>
          <p className="lg:text-xl md:text-lg text-base text-center md:text-start mt-5 tracking-wider text-gray-600 dark:text-gray-400 transition duration-300 ease-in-out">
            RideFlex is a legacy of innovation and a dedication to pushing
            boundaries, we offer more than just bikes; we provide a gateway to
            adventure, excitement, and the thrill of the open road.
          </p>

          <div className="w-full flex flex-wrap gap-3 items-center justify-center md:justify-start mt-5 text-gray-600 dark:text-gray-400 transition duration-300 ease-in-out tracking-wider">
            <div className="border border-gray-500 p-2 rounded-xl">React</div>
            <div className="border border-gray-500 p-2 rounded-xl">Next JS</div>
            <div className="border border-gray-500 p-2 rounded-xl">
              Tawilwind CSS
            </div>
          </div>

          <div className="w-full flex gap-3 justify-center items-center md:justify-start mt-10">
            <LinkButton
              href="https://ride-flex.vercel.app/"
              target="_blank"
              text="Demo"
            />
            <LinkButton
              href="https://github.com/Nausam/RideFlex"
              target="_blank"
              text="Source Code"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default RideFlex;
