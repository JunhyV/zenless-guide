import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../utils/functions/general/timeCounter";

export function useTimer(start, end) {
  const started = new Date(start);
  const ended = new Date(end);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(ended));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(ended));
    }, 1000);

    return () => clearInterval(timer);
  }, [ended]);

  const hasStarted = new Date() >= started;
  const hasEnded = new Date() >= ended;

  return {timeLeft, hasStarted, hasEnded}
}
