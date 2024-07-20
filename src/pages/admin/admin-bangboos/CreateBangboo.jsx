import React, { useEffect, useState } from "react";
import { bangbooInitial } from "../../../utils/initialStates";
import InputData from "../../../components/admin/form/InputData";
import TextData from "../../../components/admin/form/TextData";
import SubmitButton from "../../../components/buttons/SubmitButton";
import SelectData from "../../../components/admin/form/SelectData";
import { rankOptions } from "../../../utils/options";

const CreateBangboo = () => {
  const [bangboo, setBangboo] = useState(bangbooInitial);
  const bangbooStats = Object.keys(bangboo.stats);

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
          <div className="flex justify-between">
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
      <SubmitButton
        name={"Create New Banboo"}
        data={bangboo}
        url={"https://zenless-api.vercel.app/bangboos"}
        reset={setBangboo}
        initialData={bangbooInitial}
      />
    </div>
  );
};

export default CreateBangboo;
