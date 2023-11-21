import CosmoGuard from "./Projects/CosmoGuard";
import EmployeeDashboard from "./Projects/EmployeeDashboard";
import WeddingInvitation from "./Projects/WeddingInvitation";

const MyWork = () => {
  return (
    <section id="projects" className="w-full rounded-lg">
      <div className="rounded-xl max-w-2xl lg:max-w-6xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex flex-col lg:mt-0 mt-10 w-full items-center justify-center md:flex-row text-center">
              <div className="flex flex-1 flex-col mt-5 md:max-w-3xl max-w-xl">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl tracking-wider text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out">
                  Cosmic Contributions
                </h1>
                <p className="mt-6 tracking-wider lg:text-xl md:text-lg text-base text-gray-600 dark:text-gray-400 transition duration-300 ease-in-out">
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
            <WeddingInvitation />
          </div>
          <div className="w-full border mt-14 dark:opacity-5"></div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
