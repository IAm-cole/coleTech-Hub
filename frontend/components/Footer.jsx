import { ArrowRight, FilePieChart, FocusIcon, Phone } from "lucide-react";
import { FooterLinks } from "../src/data/NavbarData";


export const Footer = () => {
  return (
    <div>
      <div className="mx-8 mb-8">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-red-600 font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-gray-400/70">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              dignissimos pariatur similique illo consectetur
            </p>
            <p className="text-gray-500 mt-4">
              Made with 💝 by The coding journey
            </p>
            <a
              href="https://www.youtube.com"
              className="inline-block bg-red-500 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visit our YouTube Chanel
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index} className="">
                    {" "}
                    <a
                      className="text-gray-600 hover:text-black hover:dark:text-white duration-300 dark:text-gray-400"
                      href=""
                    >
                      {data.title}
                    </a>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* Second Link */}

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 ">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index} className="">
                    {" "}
                    <a
                      className="text-gray-600 hover:text-black hover:dark:text-white duration-300 dark:text-gray-400"
                      href=""
                    >
                      {data.title}
                    </a>{" "}
                  </li>
                ))}
              </ul>
            </div>

            {/* 

                Company Address */}

            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div>
                <div className="flex items-center gap-3">
                  <ArrowRight />
                  <p>Noida Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <Phone/>

                  <p>234 9162594091</p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                    <a href="#" className="text-3xl hover:text-red-600 duration-300 "><FilePieChart /> </a>
                    <a href="#" className="text-3xl hover:text-red-600 duration-300 "><FocusIcon /> </a>
                    <a href="#" className="text-3xl hover:text-red-600 duration-300 "><FocusIcon /> </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
