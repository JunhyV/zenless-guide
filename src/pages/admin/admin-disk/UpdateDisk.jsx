import React, { useEffect, useState } from "react";
import InputText from "../../../components/admin/InputText";
import Text from "../../../components/admin/Text";
import BackButton from "../../../components/buttons/BackButton";
import { useParams } from "react-router-dom";
import { apiCall } from "../../../utils/apiCall";
import UpdateButton from "../../../components/buttons/UpdateButton";

const UpdateDisk = () => {
  const [data, setData] = useState({ name: '', set2: '', set4: "", img: "" });
  const params = useParams();

  useEffect(() => {
    // Obtener discos por endpoint
    const fetchData = async () => {
      try {        
        const data = await apiCall(`https://zenless-api.vercel.app/disks/${params.id}`);
        setData({ name: data.name, set2: data.set2, set4: data.set4, img: data.img})
      } catch (error) {
        console.error(error);
        setError("Failed to fetch disks. Please try again later.");
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="h-full flex items-center justify-center relative">
      <div className=" w-fit p-5">
        <BackButton url={'/admin-zzz/disks'}/>
        <h1 className="text-4xl font-black m-10">
          Update DISK DRIVE register
        </h1>
        <div className="mb-10 flex flex-col gap-8">
          <InputText label={"name"} id={'name'} save={data} set={setData}/>
          <Text label={"set x2"} id={'set2'} save={data} set={setData}/>
          <Text label={"set x4"} id={'set4'} save={data} set={setData}/>
          <InputText label={"image"} id={'img'} save={data} set={setData} />
        </div>
        <UpdateButton type={'Drive Disk Set'} data={data} url={`https://zzzapi.onrender.com/disks/${params.id}`} redirect={'/admin-zzz/disks'}/>
      </div>
    </div>
  );
};

export default UpdateDisk;
