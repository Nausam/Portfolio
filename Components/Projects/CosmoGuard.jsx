import Image from "next/image";
import Link from "next/link";

import LinkButton from "../LinkButton";

const CosmoGuard = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10 mt-20 items-center">
      <div className=" bg-white dark:bg-transparent  rounded-xl dark:border-neutral-800 shadow-md dark:border p-3">
        <Link
          href="https://cosmo-guard.vercel.app/"
          target="_blank"
          className="overflow-hidden rounded-xl cursor-pointer shadow-xl"
        >
          <Image
            className="rounded-xl"
            alt="Cosmo guard image"
            src="/images/cosmo-guard.png"
            layout="responsive"
            objectFit="fill"
            width={500}
            height={500}
          />
        </Link>
      </div>

      <div>
        <h3 className="text-2xl tracking-wider font-bold dark:text-gray-300">
          Cosmo Guard
        </h3>
        <p className="text-lg mt-5 tracking-wider text-gray-500">
          Cosmo Guard is a distinguished private virtual network renowned for
          its exceptional security and a wealth of distinctive features. Your
          online privacy and data protection are our top priorities.
        </p>

        <div className="w-full flex gap-3 justify-center items-center sm:justify-start mt-5">
          <div className="border border-gray-500 p-2 rounded-xl">React</div>
          <div className="border border-gray-500 p-2 rounded-xl">Next JS</div>
          <div className="border border-gray-500 p-2 rounded-xl">
            Tawilwind CSS
          </div>
        </div>

        <div className="w-full flex gap-3 justify-center items-center sm:justify-start mt-10">
          <LinkButton
            href="https://cosmo-guard.vercel.app/"
            target="_blank"
            text="Demo"
          />
          <LinkButton
            href="https://github.com/Nausam/Cosmo-Guard"
            target="_blank"
            text="Source Code"
          />
        </div>
      </div>
    </div>
  );
};

export default CosmoGuard;
