import { Button } from "./Shared/Button";
import { CategortyData2 } from "../src/data/NavbarData";

export const Category2 = () => {
  return (
    <div className=" mx-8  mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/*  */}
        <div className="col-span-2 bg-linear-to-br  from-gray-300/90 to-gray-100  py-10 pl-5  h-80 flex items-end rounded-3xl text-white relative">
          <div className="mb-4 z-40">
            <p className="mb-0.5 text-white font-bold">Enjoy</p>
            <p className="font-semibold mb-0.5 text-2xl">With</p>
            <p className="text-4xl xl:text-5xl opacity-20 mb-2 font-bold">
              Speakers
            </p>
            <Button text="Browse" className="bg-red-600 text-white px-6" />
          </div>
          <div>
            <img
              src={CategortyData2[2].image}
              alt=""
              className="w-40
          right-1/3 top-1/3 md:w-50 translate-x-2/4 translate-y-1/2 lg:top-10 lg:z-40  scale-110 hover:rotate-6 absolute md:top-5"
            />
          </div>
        </div>
        {/* from-green-500/90 to-green-500/90 */}

        <div className="bg-linear-to-br  bg-green-600 sm:bg-fuchsia-600 md:bg-cyan-600 lg:bg-amber-600  py-10 pl-5  h-80 flex items-start rounded-3xl text-white relative md:items-center lg:items-start">
          <div className="mb-4 z-40">
            <p className="mb-0.5 text-white font-bold">Enjoy</p>
            <p className="font-semibold mb-0.5 text-2xl">With</p>
            <p className="text-4xl xl:text-5xl opacity-20 mb-0.5 font-bold">
             Monitors
            </p>
            <Button text="Browse" className="bg-white text-green-400 px-6" />
          </div>
          <div>
            <img
              src={CategortyData2[1].image}
              alt=""
              className="
           bottom-2 right-4  max-w-32   absolute md:w-52  scale-110 hover:rotate-6 "
            />
          </div>
        </div>
        {/* from-blue-600/90 to-blue-600/70 */}

        <div className="bg-linear-to-br  bg-green-600 sm:bg-fuchsia-600 md:bg-cyan-600 lg:bg-amber-600   py-10 pl-5  h-80 flex items-start  md:items-center rounded-3xl text-white relative lg:items-start">
          <div className="mb-4">
            <p className="mb-0.5 text-gray-400 font-bold">Enjoy</p>
            <p className="font-semibold mb-0.5 text-2xl">With</p>
            <p className="text-4xl xl:text-5xl opacity-20 mb-0.5 font-bold">
              Computers
            </p>
            <Button text="Browse" className="text-blue-600 bg-white px-6" />
          </div>
          <div>
            <img
              src={CategortyData2[0].image}
              alt=""
              className=" max-w-40  absolute bottom-2 right-4 md:w-52 hover:rotate-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
