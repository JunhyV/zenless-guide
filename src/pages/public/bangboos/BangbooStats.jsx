import React from "react";
import { useParse } from "../../../hooks/useParse";

const BangbooStats = ({ data }) => {
  const { parsedData, keys } = useParse(data);

  return (
    <div>
      {keys.map((key) => (
        <p className="uppercase font-medium">
          {key}: <span className="font-normal">{parsedData[key]}</span>
        </p>
      ))}
    </div>
  );
};

export default BangbooStats;
