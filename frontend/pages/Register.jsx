import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Register = ({ setUser, loading, setLoading }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    console.log("Before axios");
    try {
      const res = await axios.post("/api/users/register", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);

      console.log(error.response);
      console.log(error.message);

      setError(
        error.response?.data?.message || error.message || "Registration failed",
      );
    }
    setLoading(true);
    setFormData("");
    console.log("SUBMIT CLICKED");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-full max-w-md border border-gray-200 p-6 rounded-lg">
        <h1 className="text-2xl text-gray-900 font-bold text-center mb-4 font-serif">
          Register
        </h1>
        <div>
          {error && <p className="text-red-500 text-sm">{setError}</p>}

          <form onSubmit={handleSubmit} className="space-y-3 ">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <input
                value={formData.username}
                type="text"
                onChange={handleChange}
                name="username"
                required
                autoComplete="no"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 "
              >
                Email
              </label>
              <input
                value={formData.email}
                type="email"
                onChange={handleChange}
                name="email"
                required
                autoComplete="no"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                value={formData.password}
                type="password"
                onChange={handleChange}
                name="password"
                required
                autoComplete="no"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer"
                type="submit"
                onClick={() => alert("button clicked")}
              >
                Register 
              </button>
            </div>

            <div className="flex justify-between items-center mt-3 text-base font-semibold">
              <h1>Already have an account?</h1>
              <Link to="/login">login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
