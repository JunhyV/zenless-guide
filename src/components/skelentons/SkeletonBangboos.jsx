export const SkeletonBangboos = () => {
  return (
    <div className="w-[calc(100%-10px)] md:w-[calc(100%-5px)] lg:w-[calc(100%-5px)] shadow-lg rounded-lg overflow-hidden bg-gray-500 animate-pulse">
      <div className="w-full h-48 bg-gray-400"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-400 rounded mb-2"></div>
        <div className="h-4 bg-gray-400 rounded"></div>
      </div>
    </div>
  );
};
