import React, { useEffect, useState } from 'react'
import DataTable from '../../../components/admin/data/DataTable';
import { apiCall } from '../../../utils/apiCall';
import BangbooCard from './BangbooCard';
import CreateButton from '../../../components/buttons/CreateButton';

const ReadBangboos = () => {
  const [bangboos, setBangboos] = useState([]);
  
  useEffect(() => {
    // Obtener discos por endpoint
    const fetchData = async () => {
      try {
        const data = await apiCall("https://zenless-api.vercel.app/bangboos");
        setBangboos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex items-end justify-center">
      <div className="w-5/6 flex flex-col">
        <h1 className="text-3xl font-black my-10 text-center">Bangboos List</h1>
        <CreateButton type={'Bangboo'} url={'/admin-zzz/bangboos/new'}/>
        <div>
          <DataTable
            tableParams={["Name", "Skills", "Image", "Options"]}
            data={bangboos}
            url={"https://zenless-api.vercel.app/bangboos"}
          />
          {bangboos.map(bangboo => <BangbooCard key={bangboo._id} data={bangboo}/>)}
        </div>
      </div>
    </div>
  )
}

export default ReadBangboos