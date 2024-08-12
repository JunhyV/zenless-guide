import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tier from "../../../components/tierlist/Tier";
import { gameVersion, lastUpdate } from "../../../utils/gameVersion";
import { apiCall } from "../../../utils/apiCall";
import { tierList } from "../../../utils/tierlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TierListDetails from "../../../components/tierlist/TierListDetails";
import LoadingDots from "../../../components/loading/LoadingDots";

const Tierlist = () => {
  const [loading, setLoading] = useState(true);
  const [detailsToggle, setDetailsToggle] = useState(false);
  const [agents, setAgents] = useState([]);
  const MINIMUM_DELAY = 1000;

  useEffect(() => {
    const fetchData = async () => {
      const startTime = Date.now();

      try {
        const res = await apiCall("https://zenless-api.vercel.app/agents");
        const getData = res.map((agent) => {
          const { _id, short_img, nickname, rank } = agent;
          return {
            id: _id,
            name: nickname,
            img: short_img,
            rank,
          };
        });

        const elapsedTime = Date.now() - startTime;
        const remainingTime = MINIMUM_DELAY - elapsedTime;

        if (remainingTime > 0) {
          setTimeout(() => {
            // Order Array by name
            getData.sort((a, b) => a.name.localeCompare(b.name));
            // Set data
            setAgents(getData);
            setLoading(false);
          }, remainingTime);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-neutral-800 bg-opacity-80 min-h-full flex flex-col gap-4">
      <div className="text-white px-5 h-full">
      <h1 className="font-black text-3xl md:text-5xl text-center">
            Zenless Zone Zero || <span className="capitalize">tier list</span>
          </h1>
        <p className="mb-2">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/tierlist" className="hover:text-yellow-500">
            Tier List
          </Link>
        </p>
        <hr className="border-yellow-500" />
        <p className="mt-2">
          The continuous tier list was created with
          <span className="font-black">Zenless Zone Zero</span> (ZZZ) version
          <span className="font-black"> {gameVersion}</span> in mind. - There
          could be changes, though it is too early to establish criteria for all
          characters at the moment. We hope you enjoy the content. We're working
          to give you the best experience in the game.
        </p>
        <p>
          <span className="font-thin">Last updated: </span>
          {lastUpdate}
        </p>
      </div>
      {loading ? (
        <LoadingDots />
      ) : (
        <>
          <div className="px-5 text-white">
            <div
              className="bg-neutral-800 p-2 flex justify-between items-center hover:cursor-pointer"
              onClick={() => setDetailsToggle(!detailsToggle)}
            >
              <h2 className="text-xl font-medium">Tier List details</h2>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                detailsToggle ? "max-h-screen" : "max-h-0"
              }`}
            >
              <TierListDetails />
            </div>
          </div>

          <div className="px-5 mb-5">

            <div className="hidden md:flex">
              <div className="w-10 text-center md:hidden lg:flex text-transparent">Tier</div>
              <div className="grid grid-cols-4 w-full text-center font-medium bg-neutral-800">
                <p className="text-purple-400">DMG DPS</p>
                <p className="text-sky-400">ANOMALY DPS</p>
                <p className="text-red-400">STUN & DEFENSE</p>
                <p className="text-green-400">SUPPORT</p>
              </div>
            </div>
            {tierList.map((tier) => (
              <Tier key={tier.rank} tier={tier} agents={agents} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tierlist;
