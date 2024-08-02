import React, { useEffect, useState } from "react";
import SelectMainStat from "../../../components/admin/form/SelectMainStat";
import {
  corePriority,
  skillPriority,
  slot4,
  slot5,
  slot6,
} from "../../../utils/materials/mainAndSecondaryStats";
import SaverInput from "../../../components/admin/form/SaverInput";
import {
  handleCore,
  handlePior,
  handleSecondaryStats,
  handleSlot,
} from "../../../utils/functions/admin/build/BuildStats";

const BuildStatsSkills = ({ data, set }) => {
  const [mainStats, setMainStats] = useState({});
  const [skillPrior, setSkillPrior] = useState("");
  const [corePrior, setCorePrior] = useState("");
  const [subStats, setSubStats] = useState("");

  useEffect(() => {
    if (data && data.build) {
      setMainStats(data.build.main_stats || {});
      setSubStats(data.build.sub_stats || "");
      setSkillPrior(data.build.skill_priority || {});
      setCorePrior(data.build.core || "");
    }
  }, [data]);

  return (
    <>
      {data && (
        <>
          <div role="skill-priority">
            <h4 className="font-thin text-xl">Select Skill Priority</h4>
            <div className="grid grid-cols-5 gap-5">
              <SelectMainStat
                data={data}
                set={set}
                options={skillPriority}
                title={"Priority 1"}
                value={skillPrior.first}
                action={(e) => handlePior(e, data, set, "first")}
              />
              <SelectMainStat
                data={data}
                set={set}
                options={skillPriority}
                title={"Priority 2"}
                value={skillPrior.second}
                action={(e) => handlePior(e, data, set, "second")}
              />
              <SelectMainStat
                data={data}
                set={set}
                options={skillPriority}
                title={"Priority 3"}
                value={skillPrior.third}
                action={(e) => handlePior(e, data, set, "third")}
              />
              <SelectMainStat
                data={data}
                set={set}
                options={skillPriority}
                title={"Priority 4"}
                value={skillPrior.fourth}
                action={(e) => handlePior(e, data, set, "fourth")}
              />
              <SelectMainStat
                data={data}
                set={set}
                options={skillPriority}
                title={"Priority 5"}
                value={skillPrior.fifth}
                action={(e) => handlePior(e, data, set, "fifth")}
              />
            </div>
            <h4 className="font-thin text-xl">Select Core Priority</h4>
            <SelectMainStat
              data={data}
              set={set}
              options={corePriority}
              title={"Core Priority"}
              value={corePrior}
              action={(e) => handleCore(e, data, set)}
            />
          </div>

          <div role="stats" className="flex flex-col gap-5">
            <h4 className="font-thin text-xl">Select Main Stats</h4>
            <div className="grid grid-cols-3 gap-5">
              <SelectMainStat
                data={data}
                set={set}
                options={slot4}
                title={"Slot 4"}
                value={mainStats.fourth}
                action={(e) => handleSlot(e, data, set, "fourth")}
              />
              <SelectMainStat
                data={data}
                set={set}
                options={slot5}
                title={"Slot 5"}
                value={mainStats.fifth}
                action={(e) => handleSlot(e, data, set, "fifth")}
              />
              <SelectMainStat
                data={data}
                set={set}
                options={slot6}
                title={"Slot 6"}
                value={mainStats.sixth}
                action={(e) => handleSlot(e, data, set, "sixth")}
              />
            </div>
            <h4 className="font-thin text-xl">Set Secondary Stats</h4>
            <SaverInput
              title={"Secondary stats"}
              type={"text"}
              action={(e) => handleSecondaryStats(e, data, set)}
              value={subStats}
            />
          </div>
        </>
      )}
    </>
  );
};

export default BuildStatsSkills;
