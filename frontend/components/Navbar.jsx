import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";

export const Navbar = ({ user, setUser }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };
  return (
    <nav className="bg-gray-800 text-white   flex items-center justify-center">
      <div className="w-full rounded-xl p-4">
        <div className="flex justify-between   h-full text-center   ">
          <Link to="/" className="text-lg font-bold">
            My App
          </Link>

          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-1 px-3 rounded"
              >
                Logout
              </button>
            ) : (
              <div className="hidden md:flex">
                <Link
                  to="/login"
                  className="hover:underline text-white font-bold py-1 px-3 rounded mr-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:underline text-white font-bold py-1 px-3 rounded"
                >
                  Register
                </Link>
              </div>
            )}

            {
              <div className="md:hidden ">
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className="cursor-pointer"
                >
                  {isMobileOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            }
          </div>
        </div>
        {isMobileOpen && (
          <div className=" md:hidden block w-full h-full   bg-gray-800 backdrop-blur-lg mt-5  border-border border-t ">
            <div className="flex flex-col space-y-2  ">
              <Link
                to="/login"
                className="hover:underline text-white font-bold"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:underline text-white font-bold  "
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
