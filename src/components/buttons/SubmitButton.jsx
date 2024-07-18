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
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

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
        className="bg-neutral-600 w-fit p-2 rounded-2xl text-white font-medium mx-auto hover:cursor-pointer hover:scale-105 transform transition-transform duration-300"
        onClick={handleSubmit}
      >
        {name}
      </div>
      {loadingToggle && <LoadingScreen />}
    </>
  );
};

export default SubmitButton;
