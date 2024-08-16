import React from "react";
import { coffees } from "../../../utils/info/coffees";
import CoffeeDay from "./CoffeeDay";

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
    agentAnomaly,
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
  const mon = {
    seal: [agentAttack, agentDefense],
    engine: [engineAttack, engineDefense],
    element: [fireBoost],
  };
  const tue = {
    seal: [agentStun, agentAnomaly],
    engine: [engineStun, engineAnomaly],
    element: [iceBoost],
  };
  const wen = {
    seal: [agentSupport],
    engine: [engineSupport],
    element: [etherBoost, physicalBoost, electricBoost],
  };
  const sun = {
    seal: [agentAttack, agentDefense, agentStun, agentAnomaly, agentSupport],
    engine: [
      engineAttack,
      engineDefense,
      engineStun,
      engineAnomaly,
      engineSupport,
    ],
    element: [fireBoost, iceBoost, etherBoost, physicalBoost, electricBoost],
  };
  return (
    <div className="bg-gradient-to-b border from-neutral-800 to-neutral-600 p-5 max-w-screen-lg mx-auto">
      <div className="grid md:grid-cols-2 landscape-grid-2">
        <CoffeeDay days={"Monday / Thursday"} coffees={mon} />
        <CoffeeDay days={"Tuesday / Friday"} coffees={tue} floor={true} />
        <CoffeeDay days={"Wednesday / Saturday"} coffees={wen} adjust={true} />
        <CoffeeDay days={"Sunday"} coffees={sun} last={true} floor={true} />
      </div>
      <h2 className="font-black text-center text-xl">Coffee Shop</h2>
      <div className="grid md:grid-cols-4 gap-2 items-center landscape-grid-2">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 lands">
          {coffeeList1.map((coffee, i) => (
            <div key={coffee} className="relative">
              <div className="bg-gradient-to-b  from-amber-600 to-amber-400">
                <img src={coffee} alt={coffee} className="w-14 h-14 mx-auto" />
              </div>
              <div className="bg-neutral-800">
                <p className=" text-sm text-center font-medium">
                  {i === 0 ? "Black Tea Latte" : "Fruit Foam Latte"}
                </p>
                <div className="flex p-1 items-center justify-center gap-2">
                  {coffee === coffee2 ? (
                    <>
                      <img src={agentStun} alt={agentStun} className="w-6" />
                      <img
                        src={agentAnomaly}
                        alt={agentAnomaly}
                        className="w-6"
                      />
                      <img
                        src={agentAttack}
                        alt={agentAttack}
                        className="w-6"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={agentDefense}
                        alt={agentDefense}
                        className="w-6"
                      />
                      <img
                        src={agentSupport}
                        alt={agentSupport}
                        className="w-6"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {coffeeList2.map((coffee, i) => (
            <div key={coffee} className="relative">
              <div className="bg-gradient-to-b  from-amber-600 to-amber-400">
                <img src={coffee} alt="coffee" className="w-14 h-14 mx-auto" />
              </div>
              <div className="bg-neutral-800">
                <p className=" text-sm text-center font-medium">
                  {i === 0 ? "Barely Latte" : "Pepper Latte"}
                </p>
                <div className="flex p-1 items-center justify-center gap-2">
                  {coffee === coffee1 ? (
                    <>
                      <img
                        src={physicalBoost}
                        alt={physicalBoost}
                        className="w-6"
                      />
                      <img src={iceBoost} alt={iceBoost} className="w-6" />
                      <img src={fireBoost} alt={fireBoost} className="w-6" />
                    </>
                  ) : (
                    <>
                      <img src={etherBoost} alt={etherBoost} className="w-6" />
                      <img
                        src={electricBoost}
                        alt={electricBoost}
                        className="w-6"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {coffeeList3.map((coffee, i) => (
            <div key={coffee} className="relative">
              <div className="bg-gradient-to-b  from-amber-600 to-amber-400">
                <img src={coffee} alt="coffee" className="w-14 h-14 mx-auto" />
              </div>
              <div className="bg-neutral-800">
                <p className=" text-sm text-center font-medium">
                  {i === 0 ? "Mochaccino Coffee" : "Moonrock Mochaccino"}
                </p>
                <div className="flex p-1 items-center justify-center gap-2">
                  {coffee === coffee4 ? (
                    <>
                      <img src={engineStun} alt={engineStun} className="w-6" />
                      <img
                        src={engineAnomaly}
                        alt={engineAnomaly}
                        className="w-6"
                      />
                      <img
                        src={engineAttack}
                        alt={engineAttack}
                        className="w-6"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={engineDefense}
                        alt={engineDefense}
                        className="w-6"
                      />
                      <img
                        src={engineSupport}
                        alt={engineSupport}
                        className="w-6"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-gradient-to-b  from-amber-600 to-amber-400">
            <img src={coffee7} alt="coffee" className="w-14 h-14 mx-auto" />
          </div>
          <div className="bg-neutral-800">
            <p className=" text-sm text-center font-medium">
              New Eridu Special
            </p>
            <p className=" text-sm text-center font-thin flex justify-center items-center p-1 gap-2">
              <span className="font-medium">+60</span>
              <img src={battery} alt="battery" className="w-6" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffees;
