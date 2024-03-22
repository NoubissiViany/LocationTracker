import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import location2 from "../images/location2.jpg";

export default function Login() {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.target);
    const formObject = Object.fromEntries(data.entries());
    try {
      const response = await axios.post(
        "https://locationtracker-rr5q.onrender.com/api/login",
        {
          ...formObject,
        }
      );
      const responseData = response.data;
      toast.success("Successfully login!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setResponse("");
      event.target.reset();
      localStorage.setItem("id", responseData.user.id);
      navigate("home/map-location");
    } catch (error) {
      console.error("Error:", error);
      setResponse(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen py-40 flex items-center justify-center bg-gradient-to-r from-blue-900">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-xl overflow-hidden">
              {/* login form code */}
              <div className="w-full lg:w-1/2 py-16 px-12">
                <h2 className="text-3xl mb-4">Login</h2>
                <p className="mb-4 text-sm">Tracking made easy!</p>
                <form onSubmit={handleSubmit}>
                  <div className="mt-5 text-sm-bold">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="border border-gray-400 p-2 w-full rounded-md"
                      required
                    />
                  </div>
                  <div className="mt-5 text-sm-bold">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="border border-gray-400 p-2 w-full rounded-md"
                      required
                    />
                  </div>
                  <div className="mt-5 text-sm-bold text-red-600">
                    {response && <p>{response}</p>}
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="w-full bg-blue-500 py-3 text-center text-white font-semibold rounded-md text-sm lg:text-sm"
                    >
                      Login
                    </button>
                  </div>

                  <div className="mt-5 text-center">
                    <span className="text-sm-bold">
                      Don't have an account?
                      <Link
                        to="/registration"
                        className="text-blue-900 font-semibold ml-1"
                      >
                        Register now
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
              {/*   Background image and header code */}
              <div className={`sm:w-full lg:w-1/2 flex flex-col items-center justify-center p-12`} style={{ backgroundImage: `url(${location2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: 'xl' }}>
                <div className="bg-black bg-opacity-50 p-5">
                  <h1 className="text-white text-4xl mb-3 whitespace-nowrap max-[425px]:text-center max-[425px]:whitespace-normal">
                    Location Tracker App
                  </h1>
                  <p className="text-white text-center text-xl">
                    Technology meets Destination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
