import Image from "next/image";

const Footer = () => {
  return (
    <footer id="contact" className="w-full rounded-lg">
      <div className="bg-white top-36 relative dark:bg-[#212121] shadow-custom-sm rounded-xl max-w-2xl lg:max-w-5xl lg:mx-auto mx-4 md:mx-auto sm:mx-auto lg:px-0 ">
        <div className="p-2 lg:mx-4">
          <div className="lg:p-6 p-3">
            <div className="flex flex-col lg:mt-0 mt-10 w-full items-center md:flex-row text-center ">
              <div className="flex flex-1 flex-col mt-5 max-w-full">
                <h1 className="font-bold text-center text-3xl md:text-3xl lg:text-4xl tracking-wider">
                  Don't be shy!
                </h1>
                <p className="mt-6 tracking-wider lg:text-lg md:text-base text-sm text-gray-500 dark:text-gray-400 text-center">
                  Ready to collaborate on a cosmic coding venture? Feel free to
                  reach out to me at <strong>nausam.hussain@gamil.com</strong>.
                  Let's join forces and build the future of the digital universe
                  together!
                </p>
              </div>
            </div>

            <div className="lg:mt-8 md:mt-8 mt-14  rounded-xl p-6">
              {/* <h2 className="mb-5 text-lg text-gray-500 dark:text-gray-400 tracking-wider">
                Projects
              </h2> */}
              <div className="flex flex-wrap justify-between gap-5 bg-white dark:bg-transparent mt-3 mb-4 rounded-xl dark:border-neutral-800 shadow-md dark:border p-7 tracking-wider">
                <div>Copyright © 2023. All rights are reserved</div>
              </div>
            </div>

            {/* <div className="w-full flex gap-3 justify-center items-center md:justify-start">
      <button className="custom_btn_lg">Contact</button>
      <button className="custom_btn_lg">Download CV</button>
    </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
