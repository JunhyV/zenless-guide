import React, { useState } from "react";
import SubmitButton from "../../../components/buttons/SubmitButton";
import InputData from "../../../components/admin/form/InputData";
import TextData from "../../../components/admin/form/TextData";
import { diskInitial } from "../../../utils/initialStates";

const CreateDisk = () => {
  const [disk, setDisk] = useState(diskInitial);

  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="w-1/2">
        <h1 className="font-black text-center text-4xl mb-10">
          Create New Drive Disk Set
        </h1>
        <div className="flex flex-col gap-5 mb-5 border border-neutral-400 p-5 w-full">
          <h2 className="font-medium text-lg">Drive Disk Set Information</h2>
          <InputData label={"name"} data={disk} set={setDisk} />
          <TextData label={"set2"} data={disk} set={setDisk} />
          <TextData label={"set4"} data={disk} set={setDisk} />
          <InputData label={"img"} data={disk} set={setDisk} />
        </div>
      </div>
      <SubmitButton
        name={"Create New Disk Set"}
        data={disk}
        url={"https://zenless-api.vercel.app/disks"}
        reset={setDisk}
        initialData={diskInitial}
      />
    </div>
  );
};

export default CreateDisk;
