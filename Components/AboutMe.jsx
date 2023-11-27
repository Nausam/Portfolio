import Image from "next/image";
import CustomButton from "./CustomButton";
import { Reveal } from "./Reveal";

const AboutMe = () => {
  return (
    <section id="about" className="w-full rounded-lg ">
      <div className="rounded-xl max-w-2xl lg:max-w-6xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex md:flex-row flex-col justify-between items-center gap-10">
              <Reveal>
                <div className="md:mt-5 mt-28">
                  <Image
                    alt="Profile Image"
                    width={250}
                    height={250}
                    src="/images/me.jpg"
                    className="rounded-full md:mt-0"
                  />
                </div>
              </Reveal>
              <Reveal>
                <div className="flex flex-1 flex-col max-w-2xl">
                  <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl md:text-start text-center tracking-wider text-gray-700 dark:text-gray-300 transition duration-300 ease-in-out">
                    Stellar Origin
                  </h1>
                  <p className="mt-6 tracking-wider lg:text-xl md:text-lg text-base text-gray-600 dark:text-gray-400 md:text-start text-center transition duration-300 ease-in-out">
                    As an avid space enthusiast and a dedicated coder, I've
                    merged my two passions to create captivating digital
                    experiences. I've traversed the frontiers of both frontend
                    and backend development, mastering languages like
                    <span className="text-custom_purple font-bold">
                      {" "}
                      HTML, CSS, JavaScript, Tailwind CSS, React, Next JS
                    </span>
                    , and more. Just like a spacecraft navigating through the
                    stars, I navigate through lines of code to craft seamless,
                    user-centered websites and applications.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
