import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import Loader from "./Loader";

function Profile() {
  const userId = localStorage.getItem("id");
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/${userId}`
        );
        setFormData({
          ...formData,
          username: response.data.user.username,
          email: response.data.user.email,
          password: response.data.user.password,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/user/${userId}`,
        formData
      );
      toast.success("User updated successfully!", {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-800 font-semibold mb-2"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-800 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;
