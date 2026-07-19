// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { Navbar } from '../components/Navbar'
// import { Home } from '../pages/Home'
// import { Login } from '../pages/Login'
// import { Register } from '../pages/Register'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Admin } from "../pages/Admin";

// import {Hero} from "../components/Hero";
import { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Blogs } from "../components/Blogs";
import { Category } from "../components/Category";
import { Category2 } from "../components/Category2";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Partners } from "../components/Partners";
import { PopupNotify } from "../components/PopupNotify";
import { Products } from "../components/Products";
import { Services } from "../components/Services";
import AOS from "aos";
import "aos/dist/aos.css";

// function App() {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const res = await axios.get("/api/users/me", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setUser(res.data);
//           console.log(res.data);
//         } catch (error) {
//           setError(
//             error.response ? error.response.data.message : "An error occurred",
//           );
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     fetchUser();
//   }, []);
//   console.log("Auth initialized, user:", user);

//   return (
//     <>
//       <Router>
//         <Navbar user={user} setUser={setUser} />
//         <Routes>
//           <Route
//             path="/"
//             element={<Home user={user} error={error} loading={loading} />}
//           />
//           <Route
//             path="/login"
//             element={
//               <Login
//                 setUser={setUser}
//                 loading={loading}
//                 setLoading={setLoading}
//               />
//             }
//           />
//           <Route
//             path="/register"
//             element={
//               <Register
//                 setUser={setUser}
//                 loading={loading}
//                 setLoading={setLoading}
//               />
//             }
//           />
//           <Route path="/admin" element={<Admin />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App

const BannerData = {
    discount: "30 OFF",
    title: "Fine Smile",
    date: "10 jan to 28 jan",
    title3: "Winter Sale",
    title2: "Air Solo",

    title4:
      "lorem, ipsun hit  buy date read sit give better function long point",
    bgColor: "#f42c37",
  },
  BannerData2 = {
    discount: "30 OFF",
    title: "Happy Hour",
    date: "14 jan to 28 jan",
    title3: "Winter Solo",
    title2: "Smart Solo",

    title4:
      "lorem, ipsun hit  buy date read sit give better function long point",
    bgColor: "#2dcc6f",
  };

const App = () => {
  const [orderNotify, setOrderNotify] = useState(false);
  console.log(orderNotify);

  const handleOrderPop = () => {
    setOrderNotify(!orderNotify);
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPop={handleOrderPop} />
      <Hero handleOrderPop={handleOrderPop} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <PopupNotify orderNotify={orderNotify} handleOrderPop={handleOrderPop} />
      {/* <TestMotion /> */}
    </div>
  );
};

// orderNotify={orderNotify} handleOrderPop={handleOrderPop}
export default App;
