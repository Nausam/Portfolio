import Image from "next/image";

import Design from "./Design";

const HeroSection = () => {
  return (
    <section className="w-full rounded-lg">
      <Design />
      <div className="bg-white top-24 relative dark:bg-[#212121] shadow-custom-sm rounded-xl max-w-2xl lg:max-w-4xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex justify-between w-full">
              <h1>Full-Stack Developer</h1>
              <h1>Available</h1>
            </div>

            <div className="flex flex-col lg:mt-5 mt-10 w-full items-center md:flex-row text-center md:text-left">
              <div className="w-[250px] h-[250px] p-4 m-2 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-md drop-shadow-md dark:bg-[#2c2c2c] flex items-center justify-center">
                <Image
                  alt="Profile"
                  width={300}
                  height={300}
                  src="/images/me.jpg"
                  className="rounded-full md:mt-0"
                />
              </div>

              <div className="flex flex-1 flex-col mt-5 ml-10 mr-10">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl md:mt-0 mt-5">
                  Hussain Nausam
                </h1>
                <p className="mt-6 tracking-wider md:text-lg text-sm text-gray-500 dark:text-gray-400">
                  Greetings, intrepid explorer of the digital cosmos! I am
                  Nausam, a passionate and innovative Full Stack Web Developer,
                  inviting you to embark on a journey through my celestial realm
                  of coding creations.
                </p>
              </div>
            </div>

            <div className="lg:mt-8 md:mt-8 mt-14 bg-[#F6f8FA] dark:bg-custom_gray rounded-xl p-6">
              <h2 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
                My Teck Stack
              </h2>
              <div className="bg-white dark:bg-[#373737] mt-3 mb-4 rounded-xl dark:border-neutral-600 shadow-md dark:border p-7">
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
