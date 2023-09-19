import Image from "next/image";
import CustomButton from "./CustomButton";

const AboutMe = () => {
  return (
    <section id="about" className="w-full rounded-lg">
      <div className="bg-white top-28 relative dark:bg-[#212121] shadow-custom-sm rounded-xl max-w-2xl lg:max-w-5xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex sm:flex-row flex-col justify-between items-center gap-10">
              <div className="mt-5">
                <Image
                  alt="Profile Image"
                  width={250}
                  height={250}
                  src="/images/me.jpg"
                  className="rounded-full md:mt-0"
                />
              </div>
              <div className="flex flex-1 flex-col max-w-xl">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl md:text-start text-center tracking-wider">
                  Stellar Origin
                </h1>
                <p className="mt-6 tracking-wider lg:text-lg md:text-base text-sm text-gray-500 dark:text-gray-400 md:text-start text-center">
                  As an avid space enthusiast and a dedicated coder, I've merged
                  my two passions to create captivating digital experiences.
                  I've traversed the frontiers of both frontend and backend
                  development, mastering languages like
                  <span className="text-custom_purple font-bold">
                    {" "}
                    HTML, CSS, JavaScript, Tailwind CSS, React, Next JS
                  </span>
                  , and more. Just like a spacecraft navigating through the
                  stars, I navigate through lines of code to craft seamless,
                  user-centered websites and applications.
                </p>
              </div>
            </div>

            <div className="w-full flex gap-3 justify-center items-center sm:justify-start mt-10">
              <CustomButton href="#" text="Contact" />
              <CustomButton href="#" text="Download CV" />
            </div>

            <div className="flex sm:flex-row flex-col justify-between items-center gap-10">
              <div className="flex flex-1 flex-col mt-16 max-w-xl">
                <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl md:text-start text-center tracking-wider">
                  Mission Statement
                </h1>
                <p className="mt-6 tracking-wider lg:text-lg md:text-base text-sm text-gray-500 dark:text-gray-400 md:text-start text-center">
                  My mission? To craft digital constellations of code that
                  inspire awe and wonder. To journey through the dark matter of
                  challenges and emerge with innovative solutions that shine
                  like supernovas. To boldly code what no one has coded before!
                </p>
              </div>

              <div>
                <Image
                  alt="Rocket"
                  width={250}
                  height={250}
                  src="/images/rocket.png"
                  className="rounded-full md:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
