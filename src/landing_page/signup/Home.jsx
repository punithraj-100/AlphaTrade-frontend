import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  // The unused 'setCookie' variable has been removed.
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/signup"); // Redirect to the main signup/login page
      } else {
        try {
          // --- FIX: Point this to your BACKEND server's address ---
          // Make sure the port (e.g., 4000) is correct.
          const { data } = await axios.post(
            "https://alphatrade-backend-1.onrender.com", // CORRECTED URL
            {},
            { withCredentials: true }
          );
          
          const { status, user } = data;
          if (status) {
            setUsername(user);
            toast(`Hello ${user}`, { position: "top-right" });
          } else {
            removeCookie("token");
            navigate("/signup"); // Redirect if token is invalid
          }
        } catch (error) {
          console.error("Verification failed:", error);
          removeCookie("token");
          navigate("/signup");
        }
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      <div className="home_page">
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
