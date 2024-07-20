import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiCall } from "../../../utils/apiCall";
import UpdateButton from "../../../components/buttons/UpdateButton";
import InputData from "../../../components/admin/form/InputData";
import TextData from "../../../components/admin/form/TextData";
import { diskInitial } from "../../../utils/initialStates";

const UpdateDisk = () => {
  const [disk, setDisk] = useState(diskInitial);
  const params = useParams();

  useEffect(() => {
    // Obtener discos por endpoint
    const fetchData = async () => {
      try {
        const data = await apiCall(
          `https://zenless-api.vercel.app/disks/${params.id}`
        );
        setDisk({
          name: data.name,
          set2: data.set2,
          set4: data.set4,
          img: data.img,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="w-1/2">
        <h1 className="font-black text-center text-4xl mb-10">
          Update Drive Disk Set
        </h1>
        <div className="flex flex-col gap-5 mb-5 border border-neutral-400 p-5 w-full">
          <h2 className="font-medium text-lg">Drive Disk Set Information</h2>
          <InputData label={"name"} data={disk} set={setDisk} />
          <TextData label={"set2"} data={disk} set={setDisk} />
          <TextData label={"set4"} data={disk} set={setDisk} />
          <InputData label={"img"} data={disk} set={setDisk} />
        </div>
        <UpdateButton
          type={"Drive Disk Set"}
          data={disk}
          url={`https://zenless-api.vercel.app/disks/${params.id}`}
          redirect={"/admin-zzz/disks"}
        />
      </div>
    </div>
  );
};

export default UpdateDisk;
