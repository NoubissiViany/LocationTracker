import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      {/*   Background image and header code */}
      <div className="min-h-screen py-40 flex items-center justify-center bg-gradient-to-r from-blue-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-xl overflow-hidden">
            <div className="sm:w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[url('./images/location.jpg')] bg-no-repeat bg-cover bg-center shadow-xl">
              <h1 className="text-white text-4xl mb-3">Welcome</h1>
              <div>
                <p className="text-yellow-300 text-3xl">to Location Tracker App</p>
              </div>
            </div>
            {/* registration form code */}
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-4xl mb-4">Register</h2>
              <p className="mb-4 text-sm">
                Create an account. It's free and only take a minute
              </p>
              <form action="#">
                <div class="grid grid-cols-2 gap-5 text-sm-bold">
                  <input
                    type="text"
                    placeholder="Firstname"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Lastname"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="mt-5 text-sm-bold">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-gray-400 p-2 w-full rounded-md"
                  />
                </div>
                <div className="mt-5 text-sm-bold">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 p-2 w-full rounded-md"
                  />
                </div>
                <div className="mt-5 text-sm-bold">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-gray-400 p-2 w-full rounded-md"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="checkbox"
                    className="border border-gray-400 mr-1"
                  />
                  <span className="text-sm-bold">
                    I accept
                    the  <a href="#" className="text-blue-900 font-semibold mr-1">
                      Terms of use
                    </a>
                    &
                    <a href="#" class="text-blue-900 font-semibold ml-1">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>

                <div className="mt-5 text-sm">
                  <button className="w-full bg-blue-500 py-3 text-center text-white rounded-md">
                    Register Now
                  </button>
                </div>

                <div className="mt-5 text-center text-sm-bold">
                  <span>
                    Already have an account?
                    <Link to="/" className="text-blue-900 font-semibold ml-1">
                      Login now
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
