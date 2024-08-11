export const getBackgroundColor = (rank) => {
  switch (rank) {
    case "S":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    case "A":
      return "bg-gradient-to-r from-purple-500 to-purple-700";
    default:
      return "bg-gray-400";
  }
};
