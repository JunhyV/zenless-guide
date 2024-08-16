import React, { useEffect, useState } from "react";
import { apiCall } from "../../../utils/apiCall";
import Selector from "../../../components/buttons/Selector";
import AgentCard from "./AgentCard";
import Coffees from "./Coffees";
import { gameVersion, lastUpdate } from "../../../utils/gameVersion";
import { Link } from "react-router-dom";
import LoadingDots from "../../../components/loading/LoadingDots";

const Farm = () => {
  const [agents, setAgents] = useState([]);
  const [selection, setSelection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiCall("https://zenless-api.vercel.app/agents");
        const filterData = data.map((agent) => ({
          nickname: agent.nickname,
          full_img: agent.full_img,
          short_img: agent.short_img,
          element: agent.element,
          rol: agent.rol,
          rank: agent.rank,
          faction: agent.faction,
        }));

        setAgents(filterData);
        preloadImages(filterData.map((agent) => agent.full_img));
      } catch (error) {
        setError("Failed to fetch agents");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const preloadImages = (urls) => {
      urls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    fetchData();
  }, []);

  return (
    <div className="bg-neutral-800 bg-opacity-80 min-h-full gap-4 text-white relative flex flex-col">
      <header>
        <div className="text-white px-5 h-full">
          <h1 className="font-black text-3xl md:text-5xl text-center">
            <span className="capitalize">farm guide</span>
          </h1>
          <p className="mb-2">
            <Link to={"/"} className="hover:text-yellow-500">
              Home
            </Link>{" "}
            /{" "}
            <Link
              to={`/calculator`}
              className="hover:text-yellow-500 capitalize"
            >
              Calculator
            </Link>
          </p>
          <hr className="border-yellow-500" />
          <p className="mt-2">
            Select an agent and try the materials{" "}
            <span className="font-black capitalize">calculator</span>. Plan the
            resources needed to level up your favorite characters.
          </p>
          <p>
            <span className="font-thin">Last updated: </span>
            {lastUpdate}
          </p>
        </div>
      </header>
      {loading ? (
        <div className="h-full flex-1 flex items-center justify-center">
          <LoadingDots />
        </div>
      ) : (
        <>
          <div className="flex p-2 md:px-5">
            <Selector data={agents} type={"agent"} set={setSelection} />
          </div>
          {selection.length > 0 && (
            <div
              className={`grid gap-2 ${
                selection.length === 1 ? "md:grid-cols-1" : "md:grid-cols-1"
              } ${
                selection.length === 1
                  ? "md:grid-cols-1"
                  : selection.length === 2
                  ? "2xl:grid-cols-2"
                  : "2xl:grid-cols-3"
              }  p-2 md:px-5 landscape-grid-2`}
            >
              {selection.map((agent, i) => (
                <div key={i}>
                  <AgentCard
                    data={agent}
                    set={setSelection}
                    list={selection}
                    setMaterials={setMaterials}
                    materials={materials}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="px-2 md:px-5 py-2">
            <Coffees />
          </div>
        </>
      )}
    </div>
  );
};

export default Farm;
