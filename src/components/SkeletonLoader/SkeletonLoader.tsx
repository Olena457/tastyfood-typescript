import SkeletonCard from "../SkeletonCard/SkeletonCard";

const SkeletonLoader = () => {
  return (
    <div
      className="grid grid-cols-1 gap-5 justify-items-center p-5 min-h-screen bg-gray-50
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                2xl:grid-cols-6
                "
    >
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default SkeletonLoader;
