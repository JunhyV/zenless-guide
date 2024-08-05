export const EnginesCard = ({
  name,
  type,
  baseAttack,
  secondaryStat,
  description,
  image,
}) => {
  const imageBackgroundColorClass = (rank) => {
    switch (rank) {
      case "S":
        return "bg-yellow-400";
      case "A":
        return "bg-purple-400";
      case "B":
        return "bg-blue-400";
      default:
        return "bg-white";
    }
  };

  const upperBackgroundColorClass = "bg-slate-800";
  const lowerBackgroundColorClass = "bg-gray-100";

  return (
    <div className="max-w-sm rounded overflow-hidden  m-4 box-border">
      <div className={`flex p-3 box-border ${upperBackgroundColorClass}`}>
        <div
          className={`w-24 h-24 object-cover box-border flex-none ${imageBackgroundColorClass(
            type.split(" - ")[1]
          )}`}
        >
          <img
            className="w-full h-full"
            src={`https://i.imgur.com/${image}.png`}
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-between p-4 box-border text-gray-100">
          <h2 className="text-xl font-bold text-yellow-200">{name}</h2>
          <div className="font-bold text-lg text-rose-400">{type}</div>
          <p className=" text-sm">
            Base attack: {baseAttack} <br />
            Secondary stat: {secondaryStat} %
          </p>
        </div>
      </div>
      <div className={`px-4 py-4 box-border ${lowerBackgroundColorClass} rounded-b `}>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};
