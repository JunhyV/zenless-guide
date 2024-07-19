import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiCall } from "../../../utils/apiCall";
import DiskCard from "./extras/DiskCard";
import HomeButton from "../../../components/buttons/HomeButton";

const ReadDisks = () => {
  const [disks, setDisks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener discos por endpoint
    const fetchData = async () => {
      try {        
        const data = await apiCall('https://zenless-api.vercel.app/disks');
        setDisks(data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch disks. Please try again later.");
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="relative">
      <HomeButton />
      <div className="flex flex-col items-center w-3/4 mx-auto pt-10">
        <h1 className="text-3xl font-black mb-10">Drive Disk List</h1>

        <Link
          to="/admin-zzz/disks/new"
          className="self-start bg-sky-500 text-white font-medium p-2 rounded-lg hover:scale-105 transform transition-transform duration-300 mb-5"
        >
          + Create New Disk
        </Link>
        <div className="w-full">
          <div className="grid grid-cols-4 bg-neutral-800 text-white text-center p-1">
            <p>Name</p>
            <p>Effects</p>
            <p>Img</p>
            <p>Option</p>
          </div>
          {error && (
            <div className="text-red-500 text-center my-4">
              {error}
            </div>
          )}
          {disks.map(set => <DiskCard key={set.name} data={set}/>)}
        </div>
      </div>
    </div>
  );
};

export default ReadDisks;
