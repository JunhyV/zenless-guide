import React from "react";
import { coffees } from "../../../utils/info/coffees";
import AgentTitles from "../../../components/titles/AgentTitles";

const Coffees = () => {
  const {
    coffee1,
    coffee2,
    coffee3,
    coffee4,
    coffee5,
    coffee6,
    coffee7,
    battery,
    engineAnomaly,
    agentAttack,
    engineAttack,
    fireBoost,
    agentDefense,
    engineDefense,
    etherBoost,
    iceBoost,
    physicalBoost,
    electricBoost,
    agentStun,
    engineStun,
    agentSupport,
    engineSupport,
  } = coffees;

  const coffeeList1 = [coffee2, coffee3];
  const coffeeList2 = [coffee1, coffee6];
  const coffeeList3 = [coffee4, coffee5];
  return (
    <div className="bg-gradient-to-b border from-neutral-800 to-neutral-600 p-5 max-w-screen-md mx-auto">
      <h2 className="font-black text-center text-xl">Coffee Shop</h2>
      <div className="md:grid md:grid-cols-4 gap-2 items-center">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {coffeeList1.map((coffee, i) => (
            <div key={coffee} className="relative z bg-gradient-to-b  from-amber-600 to-amber-400">
              <img src={coffee} alt="" className="w-14 h-14 mx-auto" />
              <div className="bg-neutral-800">
                <p className=" text-sm text-center font-medium">
                  {i === 0 ? "Black Tea Latte" : "Fruit Foam Latte"}
                </p>
                <p className=" text-sm text-center font-thin">
                  (Certification Seals)
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {coffeeList2.map((coffee, i) => (
            <div key={coffee} className="relative z bg-gradient-to-b  from-amber-600 to-amber-400">
              <img src={coffee} alt="" className="w-14 h-14 mx-auto" />
              <div className="bg-neutral-800">
                <p className=" text-sm text-center font-medium">
                  {i === 0 ? "Barely Latte" : "Pepper Latte"}
                </p>
                <p className=" text-sm text-center font-thin">
                  (Engine Components)
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {coffeeList3.map((coffee, i) => (
            <div key={coffee} className="relative z bg-gradient-to-b  from-amber-600 to-amber-400">
              <img src={coffee} alt="" className="w-14 h-14 mx-auto" />
              <div className="bg-neutral-800">
                <p className=" text-sm text-center font-medium">
                  {i === 0 ? "Mochaccino" : "Moonrock Mochaccino"}
                </p>
                <p className=" text-sm text-center font-thin">
                  (Tactical Chips)
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-b  from-amber-600 to-amber-400">
          <img src={coffee7} alt="" className="w-14 h-14 mx-auto" />
          <div className="bg-neutral-800">
            <p className=" text-sm text-center font-medium">
              New Eridu Special
            </p>
            <p className=" text-sm text-center font-thin">(Energy +60)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffees;
