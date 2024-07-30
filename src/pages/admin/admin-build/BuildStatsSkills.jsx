import React, { useEffect, useState } from "react";
import SelectMainStat from "../../../components/admin/form/SelectMainStat";
import {
  slot4,
  slot5,
  slot6,
} from "../../../utils/materials/mainAndSecondaryStats";
import SaverInput from "../../../components/admin/form/SaverInput";
import {
  handleSecondaryStats,
  handleSlot4,
  handleSlot5,
  handleSlot6,
} from "../../../utils/functions/admin/build/BuildStats";

const BuildStatsSkills = ({ data, set }) => {
  const [mainStats, setMainStats] = useState({
    fourth: "",
    fifth: "",
    sixth: "",
  });
  const [subStats, setSubStats] = useState("");

  useEffect(() => {
    if (data && data.build) {
      setMainStats(data.build.main_stats || {});
      setSubStats(data.build.sub_stats || "");
    }
  }, [data]);

  return (
    <>
      {data && (
        <>
          <div role="skill-priority">
            <div>Core</div>
            <div>Skills</div>
          </div>

          <div role="stats" className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-5">
              <SelectMainStat
                data={data}
                set={set}
                options={slot4}
                title={"Slot 4"}
                value={mainStats.fourth}
                action={(e) => handleSlot4(e, data, set)}
              />
              <SelectMainStat
                data={data}
                set={set}
                options={slot5}
                title={"Slot 5"}
                value={mainStats.fifth}
                action={(e) => handleSlot5(e, data, set)}
              />
              <SelectMainStat
                data={data}
                set={set}
                options={slot6}
                title={"Slot 6"}
                value={mainStats.sixth}
                action={(e) => handleSlot6(e, data, set)}
              />
            </div>
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