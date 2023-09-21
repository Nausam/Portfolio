import Image from "next/image";
import Link from "next/link";

import LinkButton from "./LinkButton";
import Projects from "./Projects/CosmoGuard";
import CosmoGuard from "./Projects/CosmoGuard";
import EmployeeDashboard from "./Projects/EmployeeDashboard";

const MyWork = () => {
  return (
    <section id="projects" className="w-full rounded-lg">
      <div className="bg-white top-32 relative dark:bg-[#212121] shadow-custom-sm rounded-xl max-w-2xl lg:max-w-5xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex flex-col lg:mt-0 mt-10 w-full items-center md:flex-row text-center md:text-left">
              <div className="flex flex-1 flex-col mt-5 max-w-xl">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl tracking-wider">
                  Cosmic Contributions
                </h1>
                <p className="mt-6 tracking-wider lg:text-lg md:text-base text-sm text-gray-500 dark:text-gray-400">
                  As a full-stack web developer, I've logged countless
                  light-years in the universe of technology. I've mastered the
                  art of harmonizing frontend elegance with backend robustness,
                  just as planets orbit their stars in perfect equilibrium. My
                  quiver is filled with the arrows of HTML, CSS, JavaScript, and
                  beyond.
                </p>
              </div>
            </div>

            <CosmoGuard />
            <EmployeeDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
