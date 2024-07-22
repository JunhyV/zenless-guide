import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bangbooInitial } from "../../../utils/initialStates";
import InputData from "../../../components/admin/form/InputData";
import SelectData from "../../../components/admin/form/SelectData";
import TextData from "../../../components/admin/form/TextData";
import { rankOptions } from "../../../utils/options";
import UpdateButton from "../../../components/buttons/UpdateButton";
import { apiCall } from "../../../utils/apiCall";

const UpdateBangboo = () => {
  const [bangboo, setBangboo] = useState(bangbooInitial);
  const params = useParams();
  const bangbooStats = Object.keys(bangboo.stats);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiCall(
          `https://zenless-api.vercel.app/bangboos/${params.id}`
        );
        setBangboo({
          img: data.img,
          name: data.name,
          rank: data.rank,
          skill_a: data.skill_a,
          skill_b: data.skill_b,
          skill_c: data.skill_c,
          stats: JSON.parse(data.stats),
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (bangboo.rank === "A") {
      setBangboo({ ...bangboo, skill_c: "null" });
    } else if (bangboo.rank === "S" || bangboo.rank === "") {
      setBangboo({ ...bangboo, skill_c: "" });
    }
  }, [bangboo.rank]);
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <div className="w-1/2">
        <h1 className="font-black text-center text-4xl mb-10">
          Create New Bangboo
        </h1>
        <div className="flex flex-col gap-5 mb-5 border border-neutral-400 p-5 w-full">
          <h2 className="font-medium text-lg">Bangboo Information</h2>
          <div className="flex justify-between gap-2">
            <InputData label={"name"} data={bangboo} set={setBangboo} />
            <SelectData
              label={"rank"}
              options={rankOptions}
              data={bangboo}
              set={setBangboo}
            />
          </div>
          <TextData label={"skill_a"} data={bangboo} set={setBangboo} />
          <TextData label={"skill_b"} data={bangboo} set={setBangboo} />
          {bangboo.rank === "S" ? (
            <TextData label={"skill_c"} data={bangboo} set={setBangboo} />
          ) : null}
          <div className="grid grid-cols-3 gap-5">
            {bangbooStats.map((stat) => (
              <div key={stat} className="flex items-center w-fit">
                <label
                  htmlFor={stat}
                  className="min-w-20 capitalize font-medium text-lg"
                >
                  {stat}:
                </label>
                <input
                  type="number"
                  id={stat}
                  className="w-full p-2 border border-neutral-400 rounded-md text-end"
                  placeholder={
                    stat === "crit_rate" ||
                    stat === "crit_dmg" ||
                    stat === "imp"
                      ? "%"
                      : null
                  }
                  value={bangboo.stats[stat]}
                  onChange={(e) =>
                    setBangboo({
                      ...bangboo,
                      stats: { ...bangboo.stats, [stat]: e.target.value },
                    })
                  }
                />
              </div>
            ))}
          </div>
          <InputData label={"img"} data={bangboo} set={setBangboo} />
        </div>
      </div>
      <UpdateButton
        type={"Bangboo"}
        data={bangboo}
        url={`https://zenless-api.vercel.app/bangboos/${params.id}`}
        redirect={"/admin-zzz/bangboos"}
      />
    </div>
  );
};

export default UpdateBangboo;
