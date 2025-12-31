export default function TableSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm animate-pulse"
        >
          <div className="relative aspect-square bg-gray-200 rounded-t-lg"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="flex items-center mt-1">
              <div className="flex text-gray-200">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="h-4 w-4 bg-gray-200 rounded-full"
                  ></span>
                ))}
              </div>
              <div className="h-4 bg-gray-200 rounded w-1/4 ml-2"></div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="space-x-2">
                <div className="h-8 bg-gray-200 rounded w-20"></div>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
