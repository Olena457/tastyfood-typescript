const SkeletonCard = () => {
  return (
    <div
      className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-lg overflow-hidden animate-pulse
                min-w-[280px]
                md:p-[25px]
                lg:p-6"
    >
      <div className="w-full h-[200px] rounded-2xl bg-gray-300 mb-6"></div>

      <div className="flex flex-col items-start w-full mb-4">
        <div className="w-3/4 h-3 rounded-md bg-gray-300 mb-1"></div>
        <div className="w-4/5 h-6 rounded-md bg-gray-300"></div>
      </div>

      <div className="flex items-center w-full mt-auto pt-4 border-t border-gray-200">
        <div className="flex justify-center items-center h-12 rounded-full bg-blue-400 w-4/5"></div>
        <div className="ml-2 w-12 h-12 rounded-full bg-blue-200 flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
