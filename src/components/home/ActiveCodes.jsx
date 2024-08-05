import React, { useState } from "react";

export const ActiveCodes = () => {
  const [notification, setNotification] = useState(false);

  const codes = [
    {
      title: "ZENLESSLAUNCH",
      description: "60 Polychromes + Dennies",
      date: "04.07.2024",
    },
    {
      title: "ZENLESSGIFT",
      description: "50 Polychromes + materials",
      date: "04.07.2024",
    },
    {
      title: "ZZZ2024 / ZZZTVCM",
      description: "50 Polychromes + Dennies",
      date: "04.07.2024",
    },
    { title: "CATCHABOO", description: "30 Polychromes", date: "10.07.2024" },
    { title: "KANURBT5MQ8D", description: "40 Polychromes", date: "10.07.2024" },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setNotification(true);
        setTimeout(() => setNotification(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="bg-gray-900/90 p-4 mt-6 relative">
      <h2 className="text-white text-xl font-semibold">ACTIVE CODES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {codes.map((code, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow-lg">
            <h3
              className="text-white text-lg font-semibold cursor-pointer"
              onClick={() => copyToClipboard(code.title)}
            >
              {code.title}
            </h3>
            <p className="text-gray-300 mt-2">{code.description}</p>
            <p className="text-gray-500 mt-1 text-sm">Released on {code.date}</p>
          </div>
        ))}
      </div>

      {notification && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-lime-500 bg-opacity-65 text-white p-4 rounded shadow-lg text-center">
            copied
          </div>
        </div>
      )}
    </div>
  );
};
