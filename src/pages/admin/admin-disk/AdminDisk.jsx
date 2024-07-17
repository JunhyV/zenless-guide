import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../../../components/admin/HomeButton";

const AdminDisk = () => {
  return (
    <div className="relative">
      <HomeButton/>
      <div className="flex flex-col items-center w-3/4 mx-auto pt-10">
        <h1 className="text-3xl font-black mb-10">Drive Disk List</h1>
        
        <Link to="/admin-zzz/disks/new" className="self-start bg-sky-600 text-white font-medium p-2 rounded-lg hover:scale-105 transform transition-transform duration-300">+ Create New Disk</Link>
        <div></div>
      </div>
    </div>
  );
};

export default AdminDisk;
