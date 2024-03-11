// src/components/Profile.js
import React, { useState } from 'react';

function Profile() {
  // State for form values
  const [formData, setFormData] = useState({
    name: '', // Initial name
    email: '', // Initial email
    password: '', // Initial password
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to update user information (API call, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition duration-300"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
