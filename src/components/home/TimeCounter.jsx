import React from "react";

const TimeCounter = ({ data }) => {
  const { days, hours, minutes, seconds } = data;
  return (
    <div className="flex items-center gap-2 mx-auto">
      <p className="bg-neutral-600 p-2 font-black rounded-xl w-12 text-center">
        {days + "d"}
      </p>{" "}
      :
      <p className="bg-neutral-600 p-2 font-black rounded-xl w-12 text-center">
        {hours + "h"}
      </p>{" "}
      :
      <p className="bg-neutral-600 p-2 font-black rounded-xl w-12 text-center">
        {minutes + "m"}
      </p>{" "}
      :
      <p className="bg-neutral-600 p-2 font-black rounded-xl w-12 text-center">
        {seconds + "s"}
      </p>
    </div>
  );
};

export default TimeCounter;
