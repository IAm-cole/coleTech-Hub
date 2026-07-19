import { Button } from "./Shared/Button";
import { CategortyData } from "../src/data/NavbarData";

export const Category = () => {
  return (
    <div className=" mx-8 mb-8 ">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-linear-to-br from-black/90 to-black/70  py-10 pl-5  h-80 flex items-end rounded-3xl text-white relative overflow-hidden">
          <div className="mb-4   ">
            <p className="mb-0.5 text-gray-400 font-bold">Enjoy</p>
            <p className="font-semibold mb-0.5 text-2xl">With</p>
            <p className="text-4xl xl:text-5xl opacity-20 mb-0.5 font-bold">
              PLAYSTATIONS
            </p>
            <Button text="Browse" className="text-white bg-red-800 px-6" />
          </div>
          <div className="">
            <img
              src={CategortyData[0].image}
              alt=""
              className="lg:w-35 w-40 z-20 lg:z-40 absolute right-4 top-8 md:w-56  lg:top-10  scale-100 hover:scale-110 transition-transform duration-300 ease-in-out 
            "
            />
          </div>
        </div>
        {/*   */}

        <div className="bg-linear-to-br  py-10 pl-5 
          h-80 flex items-end rounded-3xl text-white relative overflow-hidden from-yellow-400 to-yellow-500/90">
          <div className="mb-4 ">
            <p className="mb-0.5 text-white font-bold">Enjoy</p>
            <p className="font-semibold mb-0.5 text-2xl">With</p>
            <p className="text-4xl xl:text-5xl opacity-50 mb-0.5 font-bold">
              CAMERAS
            </p>
            <Button text="Browse" className="bg-white text-yellow-400 px-6" />
          </div>
          <div className="">
            <img
              src={CategortyData[1].image}
              alt=""
              className="lg:w-35 w-40 z-20 lg:z-40 absolute right-4 top-8   md:w-56  lg:top-10  scale-100 hover:scale-110 transition-transform duration-300 ease-in-out  "
            />
          </div>
        </div>
      
       

        <div className="col-span-2 bg-linear-to-br  py-10 pl-5 h-80 flex items-end rounded-3xl  from-red-600 to-red-600/90 text-white relative overflow-hidden  ">
          <div className="mb-4">
            <p className="mb-0.5 text-white font-bold">Enjoy</p>
            <p className="font-semibold mb-0.5 text-2xl">With</p>
            <p className="text-4xl xl:text-5xl opacity-20 mb-0.5 font-bold">
              CONSOLES(PAD)
            </p>
            <Button text="Browse" className="bg-white text-red-500 px-6" />
          </div>

          <div>
            <img
              src={CategortyData[2].image}
              alt=""
              className=" right-1/3 top-1/3 md:w-50  lg:w-50 w-40 z-20 lg:z-40 absolute  md:top-5 bottom-1/2 translate-x-2/4 translate-y-1/2   lg:top-10  scale-100 hover:scale-110 transition-transform duration-300 ease-in-out "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
