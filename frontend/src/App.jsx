import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Admin } from "../pages/Admin";


function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get("/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(res.data);
          console.log(res.data);
        } catch (error) {
          setError(
            error.response ? error.response.data.message : "An error occurred",
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUser();
  }, []);
  console.log("Auth initialized, user:", user);
 

  return (
    <>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} error={error} loading={loading} />}
          />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                setUser={setUser}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
