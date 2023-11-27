import Image from "next/image";
import LinkButton from "./LinkButton";
import CosmoGuard from "./Projects/CosmoGuard";
import EmployeeDashboard from "./Projects/EmployeeDashboard";
import RideFlex from "./Projects/RideFlex";
import { Reveal } from "./Reveal";
import ProjectCard from "./ProjectCard";

const MyWork = () => {
  return (
    <section id="projects" className="w-full rounded-lg">
      <div className="rounded-xl lg:mt-40 mt-10 max-w-2xl lg:max-w-6xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex flex-col lg:mt-0 mt-10 w-full items-center justify-center md:flex-row text-center">
              <Reveal>
                <div className="flex flex-1 flex-col mt-5 md:max-w-3xl max-w-xl">
                  <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl tracking-wider text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out">
                    Cosmic Contributions
                  </h1>
                  <p className="mt-6 tracking-wider lg:text-xl md:text-lg text-base text-gray-600 dark:text-gray-400 transition duration-300 ease-in-out">
                    As a full-stack web developer, I've logged countless
                    light-years in the universe of technology. I've mastered the
                    art of harmonizing frontend elegance with backend
                    robustness, just as planets orbit their stars in perfect
                    equilibrium. My quiver is filled with the arrows of HTML,
                    CSS, JavaScript, and beyond.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="flex w-full items-center justify-center flex-wrap gap-8 mt-14">
              <ProjectCard
                title="Cosmo Guard"
                description=" Cosmo Guard is a distinguished private virtual network renowned for
                its exceptional security and a wealth of distinctive features. Your
                online privacy and data protection are our top priorities."
                image="/images/cosmo-guard.png"
                width={210}
                height={210}
                demoLink="https://cosmo-guard.vercel.app/"
                gitLink="https://github.com/Nausam/Cosmo-Guard"
                demoImage="/icons/link.svg"
                demoWidth={30}
                demoHeight={30}
                gitImage="/icons/git.svg"
                gitWidth={30}
                gitHeight={30}
                index={0}
              />

              <ProjectCard
                title="Employee Dashboard"
                description="Full-Stack Employee Dashboard offers a user-friendly platform for
                quick access to employee details and streamlined leave requests.
                Enhancing efficiency and transparency."
                image="/images/employee-dashboard.png"
                width={250}
                height={250}
                demoLink="https://employee-dashboard-alpha.vercel.app/"
                gitLink="https://github.com/Nausam/Employee-Dashboard"
                demoImage="/icons/link.svg"
                demoWidth={30}
                demoHeight={30}
                gitImage="/icons/git.svg"
                gitWidth={30}
                gitHeight={30}
                index={1}
              />

              <ProjectCard
                title="RideFlex"
                description="Full-Stack Employee Dashboard offers a user-friendly platform for
                quick access to employee details and streamlined leave requests.
                Enhancing efficiency and transparency."
                image="/images/ride-flex.png"
                width={210}
                height={210}
                demoLink="https://ride-flex.vercel.app/"
                gitLink="https://github.com/Nausam/RideFlex"
                demoImage="/icons/link.svg"
                demoWidth={30}
                demoHeight={30}
                gitImage="/icons/git.svg"
                gitWidth={30}
                gitHeight={30}
                index={2}
              />
            </div>

            {/* <CosmoGuard />
            <EmployeeDashboard />
            <RideFlex /> */}
          </div>
          <div className="w-full border mt-14 dark:opacity-5"></div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
