import React, { useEffect, useState } from "react";
import DataTable from "../../../components/admin/data/DataTable";
import { apiCall } from "../../../utils/apiCall";
import CreateButton from "../../../components/buttons/CreateButton";
import EngineCard from "./EngineCard";

const ReadEngines = () => {
  const [engines, setEngines] = useState([]);

  useEffect(() => {
    // Obtener discos por endpoint
    const fetchData = async () => {
      try {
        const data = await apiCall("https://zenless-api.vercel.app/engines");
        setEngines(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex items-end justify-center">
      <div className="w-5/6 flex flex-col">
        <h1 className="text-3xl font-black my-10 text-center">
          W-Engines List
        </h1>
        <CreateButton type={'Engine'} url={"/admin-zzz/engines/new"} />
        <div>
          <DataTable
            tableParams={["Name", "Effect", "Image", "Options"]}
            data={engines}
            url={"https://zenless-api.vercel.app/engines"}
          />
          {engines.map((engine) => (
            <EngineCard key={engine._id} data={engine} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadEngines;
