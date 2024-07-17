import React from "react";

const SubmitButton = ({ name, data, url, reset, initialData}) => {
  const handleSubmit = async () => {
    if (Object.values(data).includes("")) {
      console.log("llenar los datos");
      return;
    }

    const formData = new FormData();
    const send = Object.entries(data);
    send.forEach((dato) => formData.append(dato[0], dato[1]));

    // Mostrar el contenido del FormData en la consola
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });
      const result = await response.json();
      console.log(result);

    } catch (error) {
      console.log(error);
    }

    reset(initialData);
  };
  return (
    <div
      className="bg-neutral-600 w-fit p-2 rounded-2xl text-white font-medium mx-auto hover:cursor-pointer hover:scale-105 transform transition-transform duration-300"
      onClick={handleSubmit}
    >
      {name}
    </div>
  );
};

export default SubmitButton;
