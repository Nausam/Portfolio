import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about" className="w-full rounded-lg">
      <div className="bg-white top-28 relative dark:bg-[#212121] shadow-custom-sm rounded-xl max-w-2xl lg:max-w-4xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex flex-col lg:mt-0 mt-10 w-full items-center justify-center md:flex-row text-center md:text-left">
              <div className="flex flex-1 flex-col mt-5 max-w-xl">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl">
                  About Me
                </h1>
                <p className="mt-6 tracking-wider md:text-lg text-sm text-gray-500 dark:text-gray-400">
                  As an avid space enthusiast and a dedicated coder, I've merged
                  my two passions to create captivating digital experiences.
                  I've traversed the frontiers of both frontend and backend
                  development, mastering languages like HTML, CSS, JavaScript,
                  React, Next JS and more. Just like a spacecraft navigating
                  through the stars, I navigate through lines of code to craft
                  seamless, user-centered websites and applications.
                </p>
              </div>

              <div className="p-4 m-2 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-md drop-shadow-md dark:bg-[#2c2c2c] flex items-center justify-center mt-10 md:mt-0">
                <Image
                  alt="Profile"
                  width={250}
                  height={250}
                  src="/images/rocket.png"
                  className="rounded-full  md:mt-0"
                />
              </div>
            </div>

            {/* <div className="lg:mt-8 md:mt-8 mt-14 bg-[#F6f8FA] dark:bg-custom_gray rounded-xl p-6">
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
            </div> */}

            <div className="w-full flex gap-3 justify-center items-center md:justify-start mt-10">
              <button className="custom_btn_lg">Contact</button>
              <button className="custom_btn_lg">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
