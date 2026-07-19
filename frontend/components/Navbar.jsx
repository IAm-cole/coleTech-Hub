// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { X, Menu } from "lucide-react";

// export const Navbar = ({ user, setUser }) => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/");
//   };
//   return (
//     <nav className="bg-gray-800 text-white   flex items-center justify-center">
//       <div className="w-full rounded-xl p-4">
//         <div className="flex justify-between   h-full text-center   ">
//           <Link to="/" className="text-lg font-bold">
//             My App
//           </Link>

//           <div>
//             {user ? (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-1 px-3 rounded"
//               >
//                 Logout
//               </button>
//             ) : (
//               <div className="hidden md:flex">
//                 <Link
//                   to="/login"
//                   className="hover:underline text-white font-bold py-1 px-3 rounded mr-2"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   className="hover:underline text-white font-bold py-1 px-3 rounded"
//                 >
//                   Register
//                 </Link>
//               </div>
//             )}

//             {
//               <div className="md:hidden ">
//                 <button
//                   onClick={() => setIsMobileOpen(!isMobileOpen)}
//                   className="cursor-pointer"
//                 >
//                   {isMobileOpen ? (
//                     <X className="h-6 w-6" />
//                   ) : (
//                     <Menu className="h-6 w-6" />
//                   )}
//                 </button>
//               </div>
//             }
//           </div>
//         </div>
//         {isMobileOpen && (
//           <div className=" md:hidden block w-full h-full   bg-gray-800 backdrop-blur-lg mt-5  border-border border-t ">
//             <div className="flex flex-col space-y-2  ">
//               <Link
//                 to="/login"
//                 className="hover:underline text-white font-bold"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="hover:underline text-white font-bold  "
//               >
//                 Register
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };
import { MenuLinks, DropdownLinks, HeroSlide } from "../src/data/NavbarData";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { DarkMode } from "./DarkMode";
import { useState } from "react";


export const Navbar = ({ handleOrderPop }) => {
  const [search, setSearch] = useState("");
  const [showSuggestion, setShowSuggestion] = useState("false");

  const handleSearch = (value) => {
    setSearch(value);
    setShowSuggestion(true);
  };

  const filteredData = HeroSlide.filter((item) =>
    item.subtitle.toLowerCase().includes(search.toLowerCase()),
  );
  // 

  return (
    <div className=" bg-white  dark:bg-gray-900 dark:text-white    duration-200 relative z-40">
      <div className="py-4">
        <div className="p-8 sm:p-12 flex justify-between items-center">
          <div className="flex  items-center gap-4">
            <a
              className=" text-red-500 opacity-80 font-semibold tracking-widest text-2xl sm:text-3xl "
              href="#"
            >
              {" "}
              ColeTech-
              <span className="text-red-600">Hub</span>
            </a>

            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={index.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 cursor-pointer"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                <li className="relative group cursor-pointer">
                  <a
                    href=""
                    className="flex items-center gap-2 font-semibold text-gray-500 hover:dark:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <ChevronDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  <div className="absolute z-9999 hidden group-hover:block w-50 rounded-md bg-white shadow-md  p-2 ">
                    <ul className="space-y-2">
                      {DropdownLinks.map((item, index) => (
                        <li key={index}>
                          <a
                            href={index.link}
                            className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-red-300 rounded-md font-semibold"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
                onChange={(e) => handleSearch(e.target.value)}
                value={search}
              />
              <Search
                size={14}
                className=" absolute top-1/2  -translate-y-1/2 right-3 "
              />
              {showSuggestion && search && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white shadow-lg rounded-2xl">
                  {filteredData.map((item) => (
                    <div
                      onClick={() => {
                        setSearch(item.subtitle);
                        setShowSuggestion(false);
                      }}
                      key={item.id}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.subtitle}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="p-3 relative cursor-pointer">
              <ShoppingCart
                size={16}
                className="text-gray-800 dark:text-white   "
                onClick={handleOrderPop}
              />
              <div className="flex items-center justify-center bg-red-500 rounded-full w-3 h-3 text-white text-xs absolute top-0 right-2">
                4
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
