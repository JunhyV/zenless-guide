export const SkeletonEngines = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden m-4 box-border bg-gray-500 animate-pulse">
      <div className="flex p-3 box-border bg-slate-700">
        <div className="w-24 h-24 bg-gray-400 flex-none"></div>
        <div className="flex flex-col justify-between p-4 box-border text-gray-100">
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-2/3"></div>
        </div>
      </div>
      <div className="px-4 py-4 box-border bg-gray-300 rounded-b">
        <div className="h-4 bg-gray-400 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-5/6"></div>
      </div>
    </div>
  );
};
