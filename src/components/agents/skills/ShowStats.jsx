import React, { useEffect, useState } from "react";

const ShowStats = ({ data }) => {
  const [stats, setStats] = useState({});
  const [statsList, setStatsList] = useState([]);

  const percentage = ["crit_rate", "crit_dmg", "pen_ratio", "anomaly_p"];

  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data);
      setStats(parsedData);
      console.log(parsedData);

      const getList = Object.keys(parsedData);
      setStatsList(getList);
    }
  }, [data]);

  return (
    <div className="bg-neutral-900 text-white m-2 p-2 lg:h-fit lg:items-center">
      <h2 className="text-center font-medium text-xl bg-neutral-800 p-1">
        Stats at lvl 60
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
        {statsList.map((stat, i) => (
          <p
            key={stat}
            className={`uppercase text-sm md:text-base font-medium p-1 ${
              i % 2 ? "bg-neutral-600" : "bg-neutral-700"
            }`}
          >
            {" "}
            {stat.replace('_', ' ').replace(' m', ' mastery').replace(' p', ' proficiency')}:{" "}
            <span className="font-thin">
              {stats[stat]}
              {percentage.includes(stat) ? "%" : ""}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ShowStats;
