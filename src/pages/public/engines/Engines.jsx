import React, { useState, useEffect } from "react";
import { EnginesCard } from "../../../components/engines/EnginesCard";
import { apiCall } from "../../../utils/apiCall.js";
import { extractStats } from "../../../utils/extras/w-engines-Funcion";
import { Header } from "../../../components/header/Header.jsx";
import { SkeletonEngines } from "../../../components/skelentons/SkeletonEngines.jsx";
import { notReleasedEngine } from "../../../utils/gameVersion.js";

const Engines = () => {
  const [engines, setEngines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiCall("https://zenless-api.vercel.app/engines");
        let filteredData = res;

        // Filter bangboos
        const noYet = filteredData.filter((engine) =>
          notReleasedEngine.some((name) => engine.name.includes(name))
        );

        if (noYet.length === 0) {
          filteredData = res;
        } else {
          filteredData = res.filter(
            (engine) =>
              !notReleasedEngine.some((name) => engine.name.includes(name))
          );
        }

        const noB = filteredData.filter(engine => engine.rank !== 'B');
        const enginesB = filteredData.filter(engine => engine.rank === 'B');

        // Sorting by name
        noB.sort((a, b) => a.name.localeCompare(b.name));

        const processedData = noB.map((engine) => {
          const { baseAttack, secondaryStat } = extractStats(engine.stats);
          return {
            ...engine,
            baseAttack,
            secondaryStat,
          };
        });

        setEngines(processedData);
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
    <div className="min-h-screen bg-neutral-800 bg-opacity-80">
      <Header pages="w-engines" link="engines" />
      <div className="flex flex-wrap justify-center items-center">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonEngines key={index} />
          ))
        ) : error ? (
          <p className="text-white text-center">{error}</p>
        ) : (
          engines.map((engine) => (
            <EnginesCard
              key={engine._id}
              name={engine.name}
              type={`${engine.rol} - ${engine.rank}`}
              baseAttack={engine.baseAttack}
              secondaryStat={engine.secondaryStat}
              description={engine.effect}
              image={engine.img}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Engines;
