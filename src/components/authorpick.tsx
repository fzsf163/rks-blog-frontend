import * as React from 'react'

const Authorspick: React.FC = () => {
  return (
    <div className="flex w-fit flex-col items-start gap-5 px-4 md:px-10">
      {/* Title */}
      <p className="font-hook text-2xl font-semibold tracking-wider lg:text-4xl">
        Author's Picks
      </p>

      {/* Card Container */}
      <div className="flex flex-col items-center justify-center gap-5 xl:flex-row">
        {/* Main Large Card */}
        <div className="bg-accent w-full rounded-sm p-5 shadow sm:w-[90%] lg:w-[600px]">
          <img
            className="mb-4 h-60 w-full rounded-sm object-cover sm:h-80 lg:h-[300px]"
            src="https://images.unsplash.com/photo-1630948198694-c3cd4df3c9bb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
            alt="Author's pick main"
          />
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-600/50 uppercase dark:text-gray-300/50">
              Life-Style
            </p>
            <p className="text-xl font-semibold">How to lead a life of peace</p>
            <p className="line-clamp-2 text-sm font-light text-gray-700 dark:text-gray-300">
              Life begins as such and that Life begins as such and that Life
              begins as such and that Life begins as such and that Life begins
              as such and that...
            </p>
          </div>
        </div>

        {/* Smaller Side Cards */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-[90%] lg:w-[600px]">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-accent flex w-full flex-col items-start gap-3 rounded-sm p-5 shadow sm:flex-row"
            >
              <img
                className="h-48 w-full rounded-sm object-cover sm:h-[150px] sm:w-[150px]"
                src="https://images.unsplash.com/photo-1630948198694-c3cd4df3c9bb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
                alt={`Author's pick ${item}`}
              />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-gray-600/50 uppercase dark:text-gray-300/50">
                  Life-Style
                </p>
                <p className="text-lg font-semibold">
                  How to lead a life of peace
                </p>
                <p className="line-clamp-2 text-sm font-light text-gray-700 dark:text-gray-300">
                  Life begins as such and that Life begins as such and that Life
                  begins as such and that Life begins as such and that...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Authorspick
