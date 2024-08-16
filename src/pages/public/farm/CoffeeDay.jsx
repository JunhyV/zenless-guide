import React from "react";

const CoffeeDay = ({ days, coffees, last = false, floor = false, adjust = false}) => {
  const coffeeType = Object.keys(coffees);
  return (
    <div className={`flex flex-col border-2 ${last ? "border-b-2" : "border-b-0"} ${floor ? 'md:border-r-2 landscape:border-r-2' : 'md:border-r-0 landscape:border-r-0'} ${adjust ? 'md:border-b-2 landscape:border-b-2' : ''}`}>
      <p className="bg-neutral-800 text-center font-medium h-">{days}</p>
      <div className="grid grid-cols-3 gap-2 bg-neutral-700 h-full">
        {coffeeType
          ? coffeeType.map((type) => (
              <div>
                <p className="text-xs h-8 flex text-center items-center justify-center">
                  {type === "seal"
                    ? "Certification Seal"
                    : type === "engine"
                    ? "W-engine Component"
                    : "Tactical Chips"}
                </p>
                {days === 'Sunday' ? <p className="text-center">All</p> : <div
                  className={`grid ${
                    coffees[type].length > 1 ? "grid-cols-2" : ""
                  } p-1 gap-2`}
                >
                  {coffees[type].map((boost) => (
                    <img src={boost} alt="boost" className="mx-auto" />
                  ))}
                </div>}
                
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default CoffeeDay;
