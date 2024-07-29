import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import SaverInput from "../../../components/admin/form/SaverInput";
import DeleteButton from "../../../components/buttons/form/DeleteButton";
import AddDeleteButton from "../../../components/buttons/form/AddDeleteButton";

const BuildDiskSet = ({ data, set, disks }) => {
  const [disksets, setDisksets] = useState([]);

  // Get data
  useEffect(() => {
    if (
      data &&
      data.build &&
      data.build.diskset &&
      data.build.diskset.length > 0
    ) {
      const { diskset } = data.build;
      setDisksets(diskset);
      console.log(diskset);
    }
  }, [data]);

  const addSet = () => {console.log('adding set')};
  const deleteSet = () => {console.log('deleteing set')};
  const addSetList = () => {console.log('adding set list')};
  const deleteSetList = () => {console.log('deleting set list')};

  return (
    <div role="disk-set" className="grid gap-5">
      {disksets.map((diskset) => (
        <div className="flex" key={diskset.id}>
          <div className="grid gap-2 border border-neutral-400 p-2 w-full">
            <SaverInput title={"title"} type={"text"} />
            <div className="grid grid-cols-2 gap-5">
              <div className="relative">
                <div className="border-2 border-neutral-800 flex flex-col items-center">
                  <div className="flex justify-end items-center gap-2 p-1 w-full hover:cursor-pointer">
                    <p>--Drive Disk Set--</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
                <div className="shadow-md bg-white absolute top-full w-full z-10">
                  {disks.map((set) => (
                    <div
                      key={set.id + set.name}
                      className="flex items-center justify-center gap-2 border-b border-neutral-300 hover:cursor-pointer"
                    >
                      <p>{set.name}</p>
                      <img
                        src={`https://i.imgur.com/${set.img}.png`}
                        alt={set.name}
                        className="w-10 h-10"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <SaverInput title={"quantity"} type={"number"} />
            </div>
            <AddDeleteButton action={"add"} trigger={addSet}/>
          </div>
          <DeleteButton trigger={deleteSetList}/>
        </div>
      ))}
      <AddDeleteButton action={"delete"} trigger={addSetList}/>
    </div>
  );
};

export default BuildDiskSet;
