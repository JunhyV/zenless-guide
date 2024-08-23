import React, { useEffect, useState } from "react";
import { Header } from "../../../components/header/Header";
import { apiCall } from "../../../utils/apiCall";
import { SkeletonBangboos } from "../../../components/skelentons/SkeletonBangboos";
import { newBangboo, notReleasedBangboo } from "../../../utils/gameVersion";
import BangbooCard from "./BangbooCard";
import BangbooStats from "./BangbooStats";

const Bangboos = () => {
  const [bangboos, setBangboos] = useState([]);
  const [selectedBangboo, setSelectedBangboo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiCall("https://zenless-api.vercel.app/bangboos");

        // Filter bangboos
        const noYet = res.filter((bangboo) =>
          notReleasedBangboo.some((name) => bangboo.name.includes(name))
        );

        const data = noYet.length === 0
          ? res
          : res.filter(
              (bangboo) =>
                !notReleasedBangboo.some((name) => bangboo.name.includes(name))
            );

        // Order Array by name
        data.sort((a, b) => a.name.localeCompare(b.name));

        // New Bangboos
        const filtredNew = data.filter((newData) =>
          newBangboo.some((name) => newData.name.includes(name))
        );
        
        if (filtredNew.length !== 0) {
          const getDataFiltred = data.filter(
            (obj) =>
              !filtredNew.some((newData) => obj.name === newData.name)
          );
          
          getDataFiltred.sort((a, b) => a.name.localeCompare(b.name));
          
          filtredNew.forEach((newData) => getDataFiltred.unshift(newData));
          setBangboos(getDataFiltred);
        } else {
          setBangboos(data);
        }
        

        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to load bangboos. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openModal = (bangboo) => {
    setSelectedBangboo(bangboo);
  };

  const closeModal = () => {
    setSelectedBangboo(null);
  };

  return (
    <div className="min-h-full bg-neutral-800 bg-opacity-80">
      <Header pages="bangboos" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-8 justify-items-center">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <SkeletonBangboos key={index} />
              ))
            : error ? (
                <p className="text-white text-center">{error}</p>
              ) : (
                bangboos.map((bangboo) => (
                  <BangbooCard
                    key={bangboo.name}
                    data={bangboo}
                    openModal={openModal}
                  />
                ))
              )}
        </div>
      </div>

      {selectedBangboo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-neutral-200 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-neutral-300 bg-opacity-70 p-4 rounded">
              <h2 className="text-2xl font-bold mb-4">
                {selectedBangboo.name}
              </h2>
              <img
                src={`https://i.imgur.com/${selectedBangboo.img}.png`}
                alt={selectedBangboo.name}
                className="mx-auto"
              />
              <p>
                <strong>Rank:</strong> {selectedBangboo.rank}
              </p>
              <p>
                <strong>Skill A:</strong> {selectedBangboo.skill_a}
              </p>
              <p>
                <strong>Skill B:</strong> {selectedBangboo.skill_b}
              </p>
              {selectedBangboo.skill_c !== "null" && (
                <p>
                  <strong>Skill C:</strong> {selectedBangboo.skill_c}
                </p>
              )}
              <div>
                <strong>Stats:</strong>{" "}
                <BangbooStats data={selectedBangboo.stats} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bangboos;
