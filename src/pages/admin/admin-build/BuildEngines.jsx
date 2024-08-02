import React, { useEffect, useState } from "react";
import SaverInput from "../../../components/admin/form/SaverInput";
import AddDeleteButton from "../../../components/buttons/form/AddDeleteButton";
import DeleteButton from "../../../components/buttons/form/DeleteButton";
import { addEngine, addEngineList, deleteEngine, deleteEngineList, handleSaveEngine, handleSaveEngineTitle } from "../../../utils/functions/admin/build/buildEngines";

const BuildEngines = ({ data, set, engines }) => {
  const [engineData, setEngineData] = useState([]);

  // Get data
  useEffect(() => {
    if (data && data.build && data.build.engines) {
      setEngineData(data.build.engines);
    }
  }, [data]);

  return (
    <div role="w-engines" className="grid gap-5">
      {engineData.map((engineList) => (
        <div className="flex" key={engineList.id}>
          <div className="grid gap-2 border border-neutral-400 p-2 w-full">
            <SaverInput
              title={"title"}
              type={"text"}
              value={engineList.title}
              action={(e) => handleSaveEngineTitle(e, data, set, engineList.id)}
            />
            <div className="grid grid-cols-2">
              {engineList.engines.map((core) => (
                <div key={core.id} className="flex items-center gap-5">
                  <select
                    value={core.name}
                    className="p-2 border border-neutral-400 rounded-md text-center" 
                    onChange={(e) =>
                      handleSaveEngine(
                        e,
                        data,
                        set,
                        core.id,
                        engineList.id,
                        engines
                      )
                    }
                  >
                    <option value="">--Drive Disk Selection--</option>
                    {engines.map((engine) => (
                      <option key={engine.name} value={engine.name}>
                        {engine.name}
                      </option>
                    ))}
                  </select>
                  <AddDeleteButton
                    type={"delete"}
                    trigger={() => deleteEngine(core.id, data, set)}
                  />
                </div>
              ))}
            </div>
            <AddDeleteButton
              action={"add"}
              trigger={() => addEngine(engineList.id, data, set, engineList)}
            />
          </div>
          <DeleteButton
            trigger={() => deleteEngineList(engineList.id, data, set)}
          />
        </div>
      ))}
      <AddDeleteButton
        action={"add"}
        trigger={() => addEngineList(data, set, engineData)}
      />
    </div>
  );
};

export default BuildEngines;
