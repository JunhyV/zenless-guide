import React, { useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";
import TimeCounter from "./TimeCounter";
import { gameVersion } from "../../utils/gameVersion";

const Banner = ({ data }) => {
  const { start, end, version, characters, weapons } = data;
  const { timeLeft, hasStarted, hasEnded } = useTimer(start, end);

  return version === gameVersion ? (
    <div className="grid gap-2">
      {hasEnded ? (
        <p className="text-center font-medium">Banner Ended</p>
      ) : hasStarted ? (
        <div className="flex">
          <TimeCounter data={timeLeft} />
        </div>
      ) : (
        <div>
          <p className="text-center font-thin">Release date: </p>
          <p className="text-center font-medium">
            <span className="text-amber-400">{start}</span> - {end}
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2">
        <img
          src={`https://imgur.com/${characters}.jpg`}
          alt="character-banner"
          className="shadow-xl"
        />
        <img
          src={`https://imgur.com/${weapons}.jpg`}
          alt="weapon-banner"
          className="shadow-xl"
        />
      </div>
    </div>
  ) : null;
};

export default Banner;
