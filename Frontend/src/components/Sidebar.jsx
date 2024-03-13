import React from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { RiHistoryFill } from "react-icons/ri";

// Move icon imports outside the component function

const LocationHistory = () => (
  <div className="h-screen w-72 p-4">
    <nav>
      <div className="flex items-center mb-6">
        <SlLocationPin
          className="mr-2"
          size={24}
          style={{ color: "#9333EA" }}
        />
        <span className="text-xl font-semibold font-sans text-purple-600">
          Location Tracker
        </span>
      </div>
      <ul>
        <li className="flex items-center mb-1 hover:bg-indigo-400 p-1 rounded">
          <RiHistoryFill className="mr-1" size={20} />
          <Link to="/location-history" className="hover:underline">
            Location History
          </Link>
        </li>
        <li className="flex items-center mb-1 hover:bg-indigo-400 p-1 rounded">
          <CgProfile className="mr-1" size={20} />
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default LocationHistory;
