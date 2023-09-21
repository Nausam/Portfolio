import Image from "next/image";
import Link from "next/link";

import LinkButton from "../LinkButton";

const EmployeeDashboard = () => {
  return (
    <div className="flex md:flex-row flex-col gap-10 mt-20 items-center">
      <div>
        <h3 className="text-2xl tracking-wider font-bold dark:text-gray-300">
          Employee Dashboard
        </h3>
        <p className="text-lg mt-5 tracking-wider text-gray-500">
          Cosmo Guard is a distinguished private virtual network renowned for
          its exceptional security and a wealth of distinctive features. Your
          online privacy and data protection are our top priorities.
        </p>

        <div className="w-full flex gap-3 justify-center items-center sm:justify-start mt-5">
          <div className="border border-gray-500 p-2 rounded-xl">React</div>
          <div className="border border-gray-500 p-2 rounded-xl">
            Tawilwind CSS
          </div>
          <div className="border border-gray-500 p-2 rounded-xl">Mongodb</div>
          <div className="border border-gray-500 p-2 rounded-xl">Next Auth</div>
        </div>

        <div className="w-full flex gap-3 justify-center items-center sm:justify-start mt-10">
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

      <div className=" bg-white dark:bg-transparent  rounded-xl dark:border-neutral-800 shadow-md dark:border p-3">
        <Link
          href="https://employee-dashboard-alpha.vercel.app/"
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
    </div>
  );
};

export default EmployeeDashboard;
