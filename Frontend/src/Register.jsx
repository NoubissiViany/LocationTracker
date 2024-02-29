import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formObject = Object.fromEntries(data.entries());
    const username = `${formObject.firstName} ${formObject.lastName} `;
    delete formObject.firstName;
    delete formObject.lastName;
    await axios.post("http://localhost:3000/api/sign-up", {
      ...formObject,
      username: username,
    });
    alert("Data created successfully!");
    event.target.reset();
  };

  return (
    <>
      {/*   Background image and header code */}
      <div className="min-h-screen py-40 flex items-center justify-center bg-gradient-to-r from-blue-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-xl overflow-hidden">
            <div className="sm:w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[url('./images/location.jpg')] bg-no-repeat bg-cover bg-center shadow-xl">
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-white">to Location Tracker App</p>
              </div>
            </div>
            {/* registration form code */}
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Register</h2>
              <p className="mb-4">
                Create an account. It's free and only take a minute
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Firstname"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Lastname"
                    className="border border-gray-400 p-2 rounded-md"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="border border-gray-400 p-2 w-full rounded-md"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border border-gray-400 p-2 w-full rounded-md"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    name="password_repeat"
                    placeholder="Confirm Password"
                    className="border border-gray-400 p-2 w-full rounded-md"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="checkbox"
                    className="border border-gray-400 mr-1"
                  />
                  <span>
                    I accept the
                    <a href="#" className="text-blue-900 font-semibold mr-1">
                      Terms of use
                    </a>
                    &
                    <a href="#" className="text-blue-900 font-semibold ml-1">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 py-3 text-center text-white rounded-md"
                  >
                    Register Now
                  </button>
                </div>

                <div className="mt-5 text-center">
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
