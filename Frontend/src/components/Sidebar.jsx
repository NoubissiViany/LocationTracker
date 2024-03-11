// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { SlLocationPin } from "react-icons/sl"
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiHistoryFill } from "react-icons/ri";

function Sidebar() {
  return (
    <div className="h-screen w-72 p-4 ">
      <div className="flex items-center mb-6">
        <SlLocationPin className="mr-2" size={24} style={{ color: '#9333EA' }} />
        <span className="text-xl font-semibold font-sans text-purple-600">Location Tracker</span>
      </div>
      <ul>
        <div className="flex items-center mb-1  hover:bg-indigo-400 p-1 rounded">
           <MdOutlineSpaceDashboard  className="mr-1" size={20} />
           <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        </div>

        <div className="flex items-center mb-1 hover:bg-indigo-400 p-1 rounded">
            <CgProfile className="mr-1" size={20} />
            <li><Link to="/profile" className="hover:underline ">Profile</Link></li>
        </div>

        <div className="flex items-center mb-1 hover:bg-indigo-400 p-1 rounded">
            <RiHistoryFill className="mr-1" size={20} />
            <li><Link to="/location-history" className="hover:underline">Location History</Link></li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
