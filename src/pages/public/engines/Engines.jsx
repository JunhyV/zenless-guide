import React, { useState, useEffect } from "react";
import { EnginesCard } from "../../../components/engines/EnginesCard";
import { apiCall } from "../../../utils/apiCall.js";
import { extractStats } from "../../../utils/extras/w-engines-Funcion";
import { Header } from "../../../components/header/Header.jsx";

const Engines = () => {
  const [engines, setEngines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiCall("https://zenless-api.vercel.app/engines");
        const processedData = data.map((engine) => {
          const { baseAttack, secondaryStat } = extractStats(engine.stats);
          return {
            ...engine,
            baseAttack,
            secondaryStat,
          };
        });
        setEngines(processedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen  bg-neutral-800 bg-opacity-80">
      <Header pages="w-engines" link={'engines'}/>
      <div className="flex flex-wrap justify-center items-center">
        {engines.map((engine) => (
          <EnginesCard
            key={engine._id}
            name={engine.name}
            type={`${engine.rol} - ${engine.rank}`}
            baseAttack={engine.baseAttack}
            secondaryStat={engine.secondaryStat}
            description={engine.effect}
            image={engine.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Engines;
