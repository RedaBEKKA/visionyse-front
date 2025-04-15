const SkeletonRecordingCard = () => (
  <div className="animate-pulse overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-all duration-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
    <div className="p-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-6 w-2/3 rounded bg-gray-300"></div>
        <div className="h-5 w-12 rounded bg-purple-100 dark:bg-purple-900/30"></div>
      </div>
      <div className="mb-4 flex items-center space-x-3">
        <div className="h-4 w-16 rounded bg-gray-300"></div>
        <div className="h-4 w-24 rounded bg-gray-300"></div>
      </div>
      <div className="mb-4 space-y-2">
        <div className="h-4 rounded bg-gray-300"></div>
        <div className="h-4 rounded bg-gray-300"></div>
      </div>
      <div className="h-4 w-28 rounded bg-purple-100 dark:bg-purple-900/30"></div>
    </div>
    <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 text-xs text-gray-500 dark:border-gray-700 dark:bg-gray-700/50 dark:text-gray-400">
      <div className="h-3 w-20 rounded bg-gray-300"></div>
    </div>
  </div>
);

export const SkeletonRecordingList = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonRecordingCard key={index} />
      ))}
    </div>
  );
};
