import { Link } from "react-router-dom";

export const Home = ({ user, error, loading }) => {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-200 px-6">
      <div className="w-full max-w-md">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {user ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
              Welcome, {user.username}!
            </h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ) : (
          <div className="flex flex-col space-y-2 ">
            <h1 className="text-base font-semi-bold text-gray-900 mb-4 font-serif gap-2 ">
              Welcome,{" "}
              <span className=" text-sm">
                please Login or Register to continue!
              </span>
            </h1>
            <Link
              to="/login"
              className="bg-blue-400 hover:bg-blue-500 text-slate-50 font-bold py-2 px-4 rounded"
            >
              Login
            </Link>
            {/* {loading && <p className="text-gray-500">Loading...</p>} */}
            <Link
              to="/register"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
