import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { engineInitial } from "../../../utils/initialStates";
import InputData from "../../../components/admin/form/InputData";
import SelectData from "../../../components/admin/form/SelectData";
import TextData from "../../../components/admin/form/TextData";
import UpdateButton from "../../../components/buttons/UpdateButton";
import {
  advancedStats,
  rarityOptions,
  rolOptions,
} from "../../../utils/options";
import { apiCall } from "../../../utils/apiCall";

const UpdateEngine = () => {
  const [engine, setEngine] = useState(engineInitial);
  const params = useParams();

  useEffect(() => {
    // Obtener discos por endpoint
    const fetchData = async () => {
      try {
        const data = await apiCall(
          `https://zenless-api.vercel.app/engines/${params.id}`
        );
        console.log();
        setEngine({
          name: data.name,
          rank: data.rank,
          rol: data.rol,
          effect: data.effect,
          advanced_stat: data.advanced_stat,
          stats: JSON.parse(data.stats),
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
          Create New W-Engine
        </h1>
        <div className="flex flex-col gap-5 mb-5 border border-neutral-400 p-5 w-full">
          <h2 className="font-medium text-lg">W-Engine Information</h2>
          <InputData label={"name"} data={engine} set={setEngine} />
          <div className="flex justify-between gap-2">
            <SelectData
              label={"rol"}
              options={rolOptions}
              data={engine}
              set={setEngine}
            />
            <SelectData
              label={"rank"}
              options={rarityOptions}
              data={engine}
              set={setEngine}
            />
          </div>
          <TextData label={"effect"} data={engine} set={setEngine} />
          <div className="flex justify-between">
            <SelectData
              label={"advanced_stat"}
              options={advancedStats}
              data={engine}
              set={setEngine}
            />
            <div></div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex items-center">
              <label htmlFor="attack" className="min-w-20 font-medium text-md">
                Base Attack:
              </label>
              <input
                type="number"
                id="attack"
                className="w-full p-2 border border-neutral-400 rounded-md text-end"
                value={engine.stats.base_attack}
                onChange={(e) =>
                  setEngine({
                    ...engine,
                    stats: { ...engine.stats, base_attack: e.target.value },
                  })
                }
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="attack" className="min-w-20 font-medium text-md">
                Secondary stat:
              </label>
              <input
                type="number"
                id="attack"
                placeholder="%"
                className="w-full p-2 border border-neutral-400 rounded-md text-end"
                value={engine.stats.secondary_stat}
                onChange={(e) =>
                  setEngine({
                    ...engine,
                    stats: { ...engine.stats, secondary_stat: e.target.value },
                  })
                }
              />
            </div>
          </div>
          <InputData label={"img"} data={engine} set={setEngine} />
        </div>
      </div>
      <UpdateButton
        type={"W-Engine"}
        data={engine}
        url={`https://zenless-api.vercel.app/engines/${params.id}`}
        redirect={"/admin-zzz/engines"}
      />
    </div>
  );
};

export default UpdateEngine;
