import React, { version } from "react";
import { Link } from "react-router-dom";
import Tier from "../../../components/public/Tier";
import { gameVersion, lastUpdate} from "../../../utils/gameVersion";

const Tierlist = () => {
  const tiers = ["SS", "S", "A", "B", "C"];

  return (
    <div className="bg-neutral-800 bg-opacity-80 min-h-full text-white">
      <div className="text-white p-2">
        <h1 className="font-black text-3xl text-center mb-2 ">
          Zenless Zone Zero Tier List
        </h1>
        <p className="mb-2">
          <Link to="/" className="hover:text-yellow-500">
            Home
          </Link>
          /
          <Link to="/tierlist" className="hover:text-yellow-500">
            Tier List
          </Link>
        </p>
        <hr className="border-yellow-500" />
        <p className="mt-2">
          The continuous tier list was created with
          <span className="font-black">Zenless Zone Zero</span> (ZZZ) version
          <span className="font-black"> {gameVersion}</span> in mind. - There could be
          changes, though it is too early to establish criteria for all
          characters at the moment. We hope you enjoy the content. We're working
          to give you the best experience in the game.
        </p>
        <p>
          <span className="font-thin">Last updated: </span>
          {lastUpdate}
        </p>
      </div>

      <div className="p-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
        animi, ex sequi magnam, dolor, iusto nisi alias ullam natus voluptate
        explicabo eligendi ipsam dolore? Saepe beatae odit eaque minima quia!
        Velit voluptatum nulla recusandae eligendi eos tenetur quo, iure
        quisquam earum aspernatur pariatur a dolores soluta unde, vel corrupti
        sequi.
      </div>

      <div className="p-2">
        <div className="flex bg-neutral-800">
          <div className="w-10 text-center">Tier</div>
          <div className="grid grid-cols-4 w-full text-center font-medium">
            <p className="text-purple-400">DMG DPS</p>
            <p className="text-sky-400">ANOMALY DPS</p>
            <p className="text-red-400">STUN & DEFENSE</p>
            <p className="text-green-400">SUPPORT</p>
          </div>
        </div>
        {tiers.map((tier) => (
          <Tier rank={tier} />
        ))}
      </div>
    </div>
  );
};

export default Tierlist;
