export default function Loading() {
  return (
    <div className="min-h-screen bg-white p-4 text-black antialiased transition-colors duration-200 md:p-8 dark:bg-[#121212] dark:text-gray-100">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="mb-2 h-8 w-1/2 animate-pulse bg-gray-300 dark:bg-gray-700" />
          <div className="flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:items-center sm:gap-4 dark:text-gray-400">
            <div className="h-4 w-1/3 animate-pulse bg-gray-300 dark:bg-gray-700" />
            <div className="hidden h-4 w-4 animate-pulse bg-gray-300 sm:inline dark:bg-gray-700" />
            <div className="h-4 w-1/4 animate-pulse bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>
        <div className="mb-8 animate-pulse rounded-xl bg-gray-100 p-6 shadow-sm dark:bg-gray-800">
          <div className="h-40 w-full bg-gray-300 dark:bg-gray-700" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-6 md:col-span-2 dark:bg-gray-900">
            <div className="mb-4 h-6 w-1/2 animate-pulse bg-gray-300 dark:bg-gray-700" />
            <div className="space-y-4">
              <div>
                <div className="h-4 w-16 animate-pulse bg-gray-300 dark:bg-gray-700" />
                <div className="mt-1 h-4 w-full animate-pulse bg-gray-300 dark:bg-gray-700" />
              </div>
              <div>
                <div className="h-4 w-20 animate-pulse bg-gray-300 dark:bg-gray-700" />
                <div className="mt-1 h-4 w-1/2 animate-pulse bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
            <div className="mb-4 h-6 w-1/3 animate-pulse bg-gray-300 dark:bg-gray-700" />
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                <span className="animate-pulse">A</span>
              </div>
              <div>
                <div className="h-4 w-24 animate-pulse bg-gray-300 dark:bg-gray-700" />
                <div className="mt-1 h-4 w-32 animate-pulse bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>
            <div>
              <div className="h-4 w-16 animate-pulse bg-gray-300 dark:bg-gray-700" />
              <div className="mt-1 h-4 w-1/2 animate-pulse bg-gray-300 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
