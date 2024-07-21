import React, { useState } from "react";
import LoadingScreen from "../LoadingScreen";

const SubmitButton = ({ name, data, url, reset, initialData }) => {
  const [loadingToggle, setLoadingToggle] = useState(false);

  const handleSubmit = async () => {
    if (Object.values(data).includes("")) {
      console.log("Por favor, llena todos los datos.");
      return;
    }

    setLoadingToggle(true);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => typeof value === 'string' ?formData.append(key, value) : formData.append(key, JSON.stringify(value)));

    // Mostrar el contenido del FormData en la consola
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Resultado:", result);

      reset(initialData);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoadingToggle(false);
    }
  };

  return (
    <>
      <div
        className="bg-emerald-400 font-medium w-fit p-2 rounded-md text-white mx-auto hover:cursor-pointer hover:bg-emerald-600 transition-colors duration-500 mb-5"
        onClick={handleSubmit}
      >
        {name}
      </div>
      {loadingToggle && <LoadingScreen />}
    </>
  );
};

export default SubmitButton;
