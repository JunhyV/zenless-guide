import React from "react";

const RenderStats = ({ stats }) => {
  const statsObj = JSON.parse(stats);

  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(statsObj).map(([key, value]) => (
        <div key={key} className="flex gap-2">
          <strong>{key}:</strong>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default RenderStats;
