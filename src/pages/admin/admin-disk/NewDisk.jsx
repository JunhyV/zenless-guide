import React, { useEffect, useState } from "react";
import InputText from "../../../components/admin/InputText";
import Text from "../../../components/admin/Text";
import SubmitButton from "../../../components/admin/SubmitButton";
import BackButton from "../../../components/admin/BackButton";

const NewDisk = () => {
  const initialData = { name: '', set2: '', set4: "", img: "" };
  const [data, setData] = useState({ name: '', set2: '', set4: "", img: "" });
  
  return (
    <div className="h-full flex items-center justify-center relative">
      <div className=" w-fit p-5">
        <BackButton url={'/admin-zzz/disks'}/>
        <h1 className="text-4xl font-black m-10">
          Create new DISK DRIVE register
        </h1>
        <div className="mb-10 flex flex-col gap-8">
          <InputText label={"name"} id={'name'} save={data} set={setData}/>
          <Text label={"set x2"} id={'set2'} save={data} set={setData}/>
          <Text label={"set x4"} id={'set4'} save={data} set={setData}/>
          <InputText label={"image"} id={'img'} save={data} set={setData} />
        </div>
        <SubmitButton name={'Create New'} data={data} url={'https://zzzapi.onrender.com/disks'} reset={setData} initialData={initialData}/>
      </div>
    </div>
  );
};

export default NewDisk;
