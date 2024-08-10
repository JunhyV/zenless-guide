import React, { useEffect, useState } from "react";
import { Header } from "../../../components/header/Header";
import { apiCall } from "../../../utils/apiCall";
import { SkeletonBangboos } from "../../../components/skelentons/SkeletonBangboos";
import BangbooModal from "../../../components/bangboos/BangbooModal";
import { getBackgroundColor } from "../../../utils/extras/getBackgroundColor";

const Bangboos = () => {
  const [bangboos, setBangboos] = useState([]);
  const [selectedBangboo, setSelectedBangboo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiCall("https://zenless-api.vercel.app/bangboos");
        setBangboos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <SkeletonBangboos key={index} />
              ))
            : bangboos.map((bangboo) => (
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

      <BangbooModal bangboo={selectedBangboo} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Bangboos;
