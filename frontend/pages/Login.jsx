// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { Register } from "./Register";

// export const Login = ({ setUser, loading, setLoading }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;
//     setLoading(true);
//     setError("");
//     try {
//       const res = await axios.post("/api/users/login", formData);
//       localStorage.setItem("token", res.data.token);
//       setUser(res.data.user);

//       navigate("/");
//     } catch (error) {
//       setError(error.response ? error.response.data.message : "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white w-full max-w-md border border-gray-200 p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl text-gray-900 font-bold text-center mb-4 font-serif">
//           Login
//         </h1>
//         <div>
//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <form onSubmit={handleSubmit} className="space-y-3 ">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-medium mb-2 "
//               >
//                 Email
//               </label>
//               <input
//                 value={formData.email}
//                 type="email"
//                 onChange={handleChange}
//                 name="email"
//                 required
//                 autoComplete="no"
//                 className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-base"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-gray-700 font-medium mb-2"
//               >
//                 Password
//               </label>
//               <input
//                 value={formData.password}
//                 type="password"
//                 onChange={handleChange}
//                 name="password"
//                 required
//                 autoComplete="no"
//                 shown="false"
//                 className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//             </div>

//             <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer">
//               Login
//             </button>
//             <div className="flex justify-between items-center mt-3 text-base font-semibold">
//               <h1>Don't have an account?</h1>
//               <Link to="/register">Register</Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
