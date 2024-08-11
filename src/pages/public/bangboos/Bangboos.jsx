import React, { useEffect, useState } from "react";
import { Header } from "../../../components/header/Header";
import { apiCall } from "../../../utils/apiCall";
import { RenderStats } from "../../../components/bangboos/RenderStats";
import { notReleasedBangboo } from "../../../utils/gameVersion";

const Bangboos = () => {
  const [bangboos, setBangboos] = useState([]);
  const [selectedBangboo, setSelectedBangboo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let data;

      try {
        const res = await apiCall("https://zenless-api.vercel.app/bangboos");

        // Filter bangboos
        const noYet = res.filter((bangboo) =>
          notReleasedBangboo.some((name) => bangboo.name.includes(name))
        );

        if (noYet.length !== 0) {
          data = res.filter(
            (bangboo) =>
              !notReleasedBangboo.some((name) => bangboo.name.includes(name))
          );
        } else {
          data = res;
        }

        // Order Array by name
        data.sort((a, b) => a.name.localeCompare(b.name));
        
        setBangboos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getBackgroundColor = (rank) => {
    switch (rank) {
      case "S":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case "A":
        return "bg-gradient-to-r from-purple-500 to-purple-700";
      default:
        return "bg-gray-400";
    }
  };

  const openModal = (bangboo) => {
    setSelectedBangboo(bangboo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-800 bg-opacity-80">
      <Header pages="bangboos" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {bangboos.map((bangboo) => (
            <div
              key={bangboo._id}
              className={`w-[calc(100%-10px)] md:w-[calc(100%-5px)] lg:w-[calc(100%-5px)] shadow-lg rounded-lg overflow-hidden cursor-pointer ${getBackgroundColor(
                bangboo.rank
              )}`}
              onClick={() => openModal(bangboo)}
            >
              <img
                src={`https://i.imgur.com/${bangboo.img}.png`}
                alt={bangboo.name}
                className="w-full h-48 object-scale-down transform transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedBangboo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-neutral-200 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundImage: `url(https://i.imgur.com/${selectedBangboo.img}.png)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.95",
            }}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <strong>x</strong>
            </button>
            <div className="bg-neutral-300 bg-opacity-70 p-4 rounded">
              <h2 className="text-2xl font-bold mb-4">
                {selectedBangboo.name}
              </h2>
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
                <strong>Stats:</strong>
                {RenderStats(selectedBangboo.stats)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bangboos;
