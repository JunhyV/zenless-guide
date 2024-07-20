import React, { useEffect, useState } from "react";
import { apiCall } from "../../../utils/apiCall";
import CreateButton from "../../../components/buttons/CreateButton";
import DataTable from "../../../components/admin/data/DataTable";
import DiskCard from "./DiskCard";

const ReadDisks = () => {
  const [disks, setDisks] = useState([]);

  useEffect(() => {
    // Obtener discos por endpoint
    const fetchData = async () => {
      try {
        const data = await apiCall("https://zenless-api.vercel.app/disks");
        setDisks(data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch disks. Please try again later.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-end justify-center">
      <div className="w-5/6 flex flex-col">
        <h1 className="text-3xl font-black my-10 text-center">Disk Drive Sets List</h1>
        <CreateButton type={'Disk Set'} url={'/admin-zzz/disks/new'}/>
        <div>
          <DataTable
            tableParams={["Name", "Description", "Image", "Options"]}
            data={disks}
            url={"https://zenless-api.vercel.app/disks"}
          />
          {disks.map(disk => <DiskCard key={disk._id} data={disk}/>)}
        </div>
      </div>
    </div>
  );
};

export default ReadDisks;
