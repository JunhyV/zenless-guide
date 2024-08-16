import React, { useState, useEffect } from "react";
import { EnginesCard } from "./EnginesCard.jsx";
import { apiCall } from "../../../utils/apiCall.js";
import { Header } from "../../../components/header/Header.jsx";
import { SkeletonEngines } from "../../../components/skelentons/SkeletonEngines.jsx";
import { newEngine, notReleasedEngine } from "../../../utils/gameVersion.js"

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

        const noB = filteredData.filter((engine) => engine.rank !== "B");
        const enginesB = filteredData.filter((engine) => engine.rank === "B");

        // Sorting by name
        noB.sort((a, b) => a.name.localeCompare(b.name));

        //New Engines
        const filtredNew = noB.filter((newData) =>
          newEngine.some((name) => newData.name.includes(name))
        );

        if (filtredNew.length !== 0) {
          const getDataFiltred = noB.filter(
            (obj) => !filtredNew.some((newData) => obj.name === newData.name)
          );

          getDataFiltred.sort((a, b) => a.name.localeCompare(b.name));

          filtredNew.forEach((newData) => getDataFiltred.unshift(newData));
          setEngines(getDataFiltred);
        } else {
          setEngines(noB);
        }

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
      <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center p-2 md:p-5 gap-5">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonEngines key={index} />
          ))
        ) : error ? (
          <p className="text-white text-center">{error}</p>
        ) : (
          engines.map((engine) => (
            <EnginesCard key={engine._id} data={engine} />
          ))
        )}
      </div>
    </div>
  );
};

export default Engines;
