import Image from "next/image";

import Design from "./Design";
import Link from "next/link";
import CustomButton from "./CustomButton";
import LinkButton from "./LinkButton";

const HeroSection = () => {
  return (
    <section id="home" className="w-full rounded-lg">
      {/* <Design /> */}
      <div className="bg-white top-24 relative dark:bg-[#212121] shadow-custom-sm rounded-xl max-w-2xl lg:max-w-5xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0">
        <div className="p-2 lg:mx-4 ">
          <div className="lg:p-6 p-3 ">
            <div className="flex justify-between w-full lg:text-lg md:text-base text-sm">
              <h1>Full-Stack Developer</h1>
              <h1>Available</h1>
            </div>

            <div className="flex gap-10 flex-col lg:mt-5 mt-0 w-full items-center justify-center md:flex-row text-center md:text-left ">
              <div className="flex flex-1 flex-col mt-5 max-w-3xl items-center text-center">
                <div className="relative group">
                  <div className="mt-6 absolute -inset-10  transition-all  duration-300 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-500 bg-fuchsia-500 rounded-full blur-3xl dark:opacity-20 opacity-10"></div>
                  <h1 className="relative font-bold text-3xl md:text-4xl lg:text-5xl md:mt-0 mt-2  purple_gradient">
                    Hussain Nausam
                  </h1>
                </div>

                <p className="mt-6 tracking-wider lg:text-lg md:text-base text-sm text-gray-500 dark:text-gray-400">
                  Greetings, intrepid explorer of the digital cosmos! I am
                  <span className="text-custom_purple font-bold"> Nausam</span>,
                  a passionate and innovative{" "}
                  <span className="text-custom_purple font-bold">
                    {" "}
                    Full Stack Developer
                  </span>
                  , inviting you to embark on a journey through my celestial
                  realm of coding creations.
                </p>

                <div className="mt-6">
                  <LinkButton href="#projects" text="Get Started" />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl p-3">
              <h2 className="md:text-start text-center text-lg text-gray-500 dark:text-gray-400">
                My Teck Stack
              </h2>
              <div className="bg-white dark:bg-transparent mt-3 mb-4 rounded-xl dark:border-neutral-800 shadow-md dark:border p-3">
                <div className="flex md:justify-between flex-wrap justify-center gap-5">
                  <div className="tech_stack">
                    <Image width={30} height={30} src="/icons/html.png" />
                  </div>

                  <div className="tech_stack">
                    <Image width={30} height={30} src="/icons/css.png" />
                  </div>

                  <div className="tech_stack">
                    <Image width={30} height={30} src="/icons/javascript.png" />
                  </div>

                  <div className="tech_stack">
                    <Image width={30} height={30} src="/icons/tailwind.png" />
                  </div>

                  <div className="tech_stack">
                    <Image width={30} height={30} src="/icons/react.png" />
                  </div>

                  <div className="tech_stack">
                    <Image width={30} height={30} src="/icons/nextjs.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
