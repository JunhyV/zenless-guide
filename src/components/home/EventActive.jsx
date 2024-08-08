import React, { useState, useEffect } from "react";
import { calculateTimeLeft } from "../../utils/functions/general/timeCounter";
import TimeCounter from "./TimeCounter";
import { Link } from "react-router-dom";

const EventActive = ({ data }) => {
  const { img, start, end, description, link } = data;
  const started = new Date(start);
  const ended = new Date(end);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(ended));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(ended));
    }, 1000);

    return () => clearInterval(timer);
  }, [ended]);

  const hasEventStarted = new Date() >= started;
  const hasEventEnded = new Date() >= ended;

  return !hasEventEnded ? (
    <Link to={link} target="_blank" className="bg-neutral-800 hover:bg-gradient-to-b hover:from-amber-900 hover:to-amber-400 transition-colors duration-500 shadow-xl hover-grayscale">
      <img src={`https://imgur.com/${img}.jpg`} alt="Event Image" className="grayscale-image"/>
      {hasEventStarted ? (
        <div className="grid gap-2 p-2">
          <p className="font-thin text-center">{description}</p>

          <TimeCounter data={timeLeft}/>
        </div>
      ) : (
        <div className="p-2">
          <p className="font-thin text-center">{description}</p>
          <p className="font-medium text-center">
            The event has not started yet.
          </p>
          <p className="text-center">
            Release on: <span className="font-black">{start} (Server Time)</span>
          </p>
        </div>
      )}
    </Link>
  ) : null;
};

export default EventActive;
