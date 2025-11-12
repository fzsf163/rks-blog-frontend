import { SubscriberBox } from '@/components/subscribe'
import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/courses')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-auto w-[80%] space-y-10 py-16">
      <div className="w-fit space-y-10">
        {[1, 2, 3].map((item) => (
          <div key={item} className="w-fit sm:p-10 2xl:p-0">
            <p className="mb-4 w-fit text-xl font-semibold">Category: {item}</p>

            <div className="flex w-full flex-col items-center justify-center gap-6 p-4 sm:flex-row">
              {[4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-accent w-full max-w-[500px] rounded-sm p-5 shadow"
                >
                  <img
                    className="mb-4 h-60 w-full rounded-sm object-cover sm:h-72"
                    src="https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1633"
                    alt="category"
                  />
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600/50 uppercase dark:text-gray-300/50">
                      Growth
                    </p>
                    <p className="text-xl font-semibold">Life Management</p>
                    <p className="line-clamp-2 text-sm font-light text-gray-700 dark:text-gray-300">
                      Life begins as such and that Life begins as such and that
                      Life begins as such and that Life begins as such and Life
                      begins as such and that Life begins as such and that...
                      begins as such and that Life begins as such and that...
                    </p>
                  </div>
                  <Button className="mt-2 rounded-full">Learn More</Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/*subs box*/}
      <div className="">
        <SubscriberBox />
      </div>
    </div>
  )
}
