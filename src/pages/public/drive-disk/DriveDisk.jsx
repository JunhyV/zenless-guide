import React, { useEffect, useState } from "react";
import { Header } from "../../../components/header/Header.jsx";
import { SkeletonEngines } from "../../../components/skelentons/SkeletonEngines.jsx";
import { apiCall } from "../../../utils/apiCall.js";

const DriveDisk = () => {
  const [driveDisk, setDriveDisk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiCall("https://zenless-api.vercel.app/disks");
        let filteredData = res;
        /* 
        // Filter bangboos
        const noYet = filteredData.filter((disk) =>
          notReleaseDisk.some((name) => disk.name.includes(name))
        );

        if (noYet.length === 0) {
          filteredData = res;
        } else {
          filteredData = res.filter(
            (engine) =>
              !notReleasedEngine.some((name) => engine.name.includes(name))
          );
        } */

        setDriveDisk(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to load engines. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-800 bg-opacity-80 text-white">
      <Header pages="Drive Disk" link="disk-sets" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center p-2 md:p-5 gap-5 landscape-grid-2">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonEngines key={index} />
          ))
        ) : error ? (
          <p className="text-white text-center">{error}</p>
        ) : (
          driveDisk.map((disk) => (
            <div key={disk.name} className="flex flex-col h-full">
              <p className="text-center bg-neutral-800 font-black p-1">
                {disk.name}
              </p>
              <div className="flex gap-2 bg-neutral-600 items-start flex-1">
                <div className="bg-gradient-to-b from-amber-600 to-amber-400 min-w-28 h-full flex">
                  <img
                    src={`https://i.imgur.com/${disk.img}.png`}
                    alt={disk.name}
                    className="w-28 h-28 p-2 my-auto"
                  />
                </div>
                <div>
                  <div className="flex gap-2 text-sm p-1">
                    <p className="text-amber-400 font-medium">(2)</p>
                    <p>{disk.set2.split("(2)")}</p>
                  </div>
                  <div className="flex gap-2 text-sm p-1">
                    <p className="text-amber-400 font-medium">(4)</p>
                    <p>{disk.set4.split("(4)")}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DriveDisk;
