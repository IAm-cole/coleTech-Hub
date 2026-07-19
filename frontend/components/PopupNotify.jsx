import { X } from "lucide-react";
import { Button } from "./Shared/Button";

export const PopupNotify = ({ orderNotify, handleOrderPop }) => {
   
  return (
    <>
      { orderNotify && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-45 fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 p-2 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
              <div className="flex items-center justify-between ">
                <h1 className="">Order Now </h1>
                <div>
                  <X
                    onClick={handleOrderPop}
                    size={25}
                    className=" cursor-pointer"
                  />
                </div>

              </div>
              <div className="mt-4 space-y-3">
                <input type="text"
                placeholder="Name"
                className="form-input " />
                <input type="email"
                placeholder="Email"
                className="form-input " />
                <input type="text"
                placeholder="Address"
                className="form-input " />

              </div>
              <div className="flex justify-center  mt-3 ">
                <Button text="Place Order Now" className="bg-red-600 text-white px-2  "/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
