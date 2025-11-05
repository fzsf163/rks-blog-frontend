const BlogsByCategory = () => {
  return (
    <div className="w-fit space-y-10">
      {[1, 2, 3].map((item) => (
        <div key={item} className="w-fit sm:p-10 2xl:p-0">
          <p className="mb-4 w-fit text-xl font-semibold">Category: {item}</p>

          <div className="flex w-full flex-col items-center justify-center gap-6 p-4 sm:flex-row 2xl:flex-wrap">
            {[4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-accent w-full max-w-[500px] rounded-sm p-5 shadow"
              >
                <img
                  className="mb-4 h-60 w-full rounded-sm object-cover sm:h-72"
                  src="https://images.unsplash.com/photo-1630948198694-c3cd4df3c9bb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
                  alt="category"
                />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600 uppercase">
                    Life-Style
                  </p>
                  <p className="text-xl font-semibold">
                    How to lead a life of peace
                  </p>
                  <p className="line-clamp-2 text-sm font-light text-gray-700">
                    Life begins as such and that Life begins as such and that
                    Life begins as such and that Life begins as such and that...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogsByCategory
