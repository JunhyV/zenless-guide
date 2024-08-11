import React from "react";
import RenderStats from "../../components/bangboos/RenderStats";

const BangbooModal = ({ bangboo, isOpen, onClose }) => {
  if (!isOpen || !bangboo) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-200 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-md w-full max-h-screen overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(https://i.imgur.com/${bangboo.img}.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.95",
        }}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <strong>x</strong>
        </button>
        <div className="bg-neutral-300 bg-opacity-70 p-4 rounded">
          <h2 className="text-2xl font-bold mb-4">{bangboo.name}</h2>
          <p>
            <strong>Rank:</strong> {bangboo.rank}
          </p>
          <p>
            <strong>Skill A:</strong> {bangboo.skill_a}
          </p>
          <p>
            <strong>Skill B:</strong> {bangboo.skill_b}
          </p>
          {bangboo.skill_c !== "null" && (
            <p>
              <strong>Skill C:</strong> {bangboo.skill_c}
            </p>
          )}
          <div>
            <strong>Stats:</strong>
            <RenderStats stats={bangboo.stats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BangbooModal;
