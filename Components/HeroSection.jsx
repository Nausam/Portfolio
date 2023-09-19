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
            <div className="flex justify-between w-full">
              <h1>Full-Stack Developer</h1>
              <h1>Available</h1>
            </div>

            <div className="flex gap-10 flex-col lg:mt-5 mt-10 w-full items-center justify-center md:flex-row text-center md:text-left ">
              <div className="flex flex-1 flex-col mt-5 max-w-3xl items-center text-center">
                <div className="relative group">
                  <div className="mt-6 absolute -inset-10  transition-all  duration-300 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-500 bg-fuchsia-500 rounded-full blur-3xl dark:opacity-20 opacity-10"></div>
                  <h1 className=" relative font-bold text-3xl md:text-5xl md:mt-0 mt-5  purple_gradient">
                    Hussain Nausam
                  </h1>
                </div>

                <p className="mt-6 tracking-wider md:text-lg text-sm text-gray-500 dark:text-gray-400">
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

            <div className="mt-6 rounded-xl p-6">
              <h2 className="md:text-start text-center text-lg text-gray-500 dark:text-gray-400">
                My Teck Stack
              </h2>
              <div className="bg-white dark:bg-transparent mt-3 mb-4 rounded-xl dark:border-neutral-800 shadow-md dark:border p-7">
                <div className="flex md:justify-between flex-wrap justify-center gap-10">
                  <div className="border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg dark:bg-[#2c2c2c] flex items-center justify-center">
                    <Image width={50} height={50} src="/icons/html.png" />
                  </div>
                  <div className="border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg dark:bg-[#2c2c2c] flex items-center justify-center">
                    <Image width={50} height={50} src="/icons/css.png" />
                  </div>
                  <div className="border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg dark:bg-[#2c2c2c] flex items-center justify-center">
                    <Image width={50} height={50} src="/icons/javascript.png" />
                  </div>
                  <div className="border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg dark:bg-[#2c2c2c] flex items-center justify-center">
                    <Image width={50} height={50} src="/icons/react.png" />
                  </div>
                  <div className="border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg dark:bg-[#2c2c2c] flex items-center justify-center">
                    <Image width={50} height={50} src="/icons/nextjs.png" />
                  </div>
                  <div className="border border-neutral-200 dark:border-neutral-700 rounded-full shadow-md dark:bg-[#2c2c2c] flex items-center justify-center">
                    <Image
                      width={50}
                      height={50}
                      src="/icons/tailwindcss.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="w-full flex gap-3 justify-center items-center md:justify-start">
              <button className="custom_btn_lg">Contact</button>
              <button className="custom_btn_lg">Download CV</button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
