import React, { useEffect, useState } from "react";
import SaverInput from "../../../components/admin/form/SaverInput";
import DeleteButton from "../../../components/buttons/form/DeleteButton";
import AddDeleteButton from "../../../components/buttons/form/AddDeleteButton";
import {
  addSet,
  addSetList,
  deleteSet,
  deleteSetList,
  handleSaveDiskSet,
  handleSaveQuantity,
  handleSaveTitle,
} from "../../../utils/functions/admin/build/buildSets";

const BuildDiskSet = ({ data, set, disks }) => {
  const [disksets, setDisksets] = useState([]);

  // Get data
  useEffect(() => {
    if (data && data.build && data.build.disksets) {
      setDisksets(data.build.disksets);
    }
  }, [data]);

  return (
    <div role="disk-set" className="grid gap-5">
      {disksets.map((diskset) => (
        <div className="flex" key={diskset.id}>
          <div className="grid gap-2 border border-neutral-400 p-2 w-full">
            <SaverInput
              title={"title"}
              type={"text"}
              value={diskset.title}
              action={(e) => handleSaveTitle(e, data, set, diskset.id)}
            />
            {diskset.sets.map((core) => (
              <div key={core.id} className="flex items-center gap-5">
                <select
                  value={core.name}
                  onChange={(e) => handleSaveDiskSet(e, data, set, core.id, diskset.id, disks)}
                >
                  <option value="">--Drive Disk Selection--</option>
                  {disks.map((disk) => (
                    <option key={disk.name} value={disk.name}>{disk.name}</option>
                  ))}
                </select>
                <SaverInput
                  title={"quantity"}
                  type={"number"}
                  value={core.quantity}
                  action={(e) => handleSaveQuantity(e, data, set, core.id, diskset.id)}
                />
                <AddDeleteButton
                  type={"delete"}
                  trigger={() => deleteSet(core.id, data, set)}
                />
              </div>
            ))}
            <AddDeleteButton
              action={"add"}
              trigger={() => addSet(diskset.id, data, set, diskset)}
            />
          </div>
          <DeleteButton trigger={() => deleteSetList(diskset.id, data, set)} />
        </div>
      ))}
      <AddDeleteButton
        action={"add"}
        trigger={() => addSetList(data, set, disksets)}
      />
    </div>
  );
};

export default BuildDiskSet;