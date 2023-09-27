import Image from "next/image";
import Link from "next/link";

import LinkButton from "../LinkButton";

const EmployeeDashboard = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10 mt-20 items-center border-2 p-10 rounded-xl dark:border-custom_purple dark:border-opacity-20">
      <div>
        <h3 className="text-2xl md:text-start text-center tracking-wider font-bold text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out">
          Employee Dashboard
        </h3>
        <p className="lg:text-xl md:text-lg text-base md:text-start text-center mt-5 tracking-wider text-gray-600 dark:text-gray-400 transition duration-300 ease-in-out">
          Cosmo Guard is a distinguished private virtual network renowned for
          its exceptional security and a wealth of distinctive features. Your
          online privacy and data protection are our top priorities.
        </p>

        <div className="w-full flex gap-3 justify-center items-center md:justify-start mt-5 text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out tracking-wider">
          <div className="border border-gray-500 p-2 rounded-xl">React</div>
          <div className="border border-gray-500 p-2 rounded-xl">
            Tawilwind CSS
          </div>
          <div className="border border-gray-500 p-2 rounded-xl">Mongodb</div>
          <div className="border border-gray-500 p-2 rounded-xl">Next Auth</div>
        </div>

        <div className="w-full flex gap-3 justify-center items-center md:justify-start mt-10">
          <LinkButton
            href="https://employee-dashboard-alpha.vercel.app/"
            target="_blank"
            text="Demo"
          />
          <LinkButton
            href="https://github.com/Nausam/Employee-Dashboard"
            target="_blank"
            text="Source Code"
          />
        </div>
      </div>

      <div className="rounded-xl border-neutral-300 dark:border-neutral-800 hover:dark:border-custom_purple transition-all duration-500 ease-in-out shadow-md border p-3 overflow-hidden">
        <Link
          href="https://employee-dashboard-alpha.vercel.app/"
          target="_blank"
          className="overflow-hidden rounded-xl cursor-pointer shadow-xl"
        >
          <Image
            className="rounded-xl hover:scale-110 transition duration-500 ease-in-out"
            alt="Cosmo guard image"
            src="/images/cosmo-guard.png"
            layout="responsive"
            objectFit="fill"
            width={500}
            height={500}
          />
        </Link>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
