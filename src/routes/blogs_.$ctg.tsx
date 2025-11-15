import BreadCrubmsBox from '@/components/shadcn-studio/breadcrumb/breadcrumb-02'
import PaginationBox from '@/components/shadcn-studio/pagination/pagination-07'
import { SubscriberBox } from '@/components/subscribe'
import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs_/$ctg')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ctg } = Route.useParams()
  return (
    <div className="mx-auto w-full space-y-10 px-3 py-16 sm:px-0 md:w-[80%]">
      <BreadCrubmsBox></BreadCrubmsBox>
      <p className="text-xl font-semibold capitalize">{ctg}</p>
      <div className="w-full space-y-10">
        <div className="grid min-h-fit gap-4 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          {[4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-accent h-fit w-full max-w-[500px] rounded-sm p-5 shadow"
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
                  Life begins as such and that Life begins as such and that Life
                  begins as such and that Life begins as such and Life begins as
                  such and that Life begins as such and that... begins as such
                  and that Life begins as such and that...
                </p>
              </div>
              <Link
                to="/blogs/$ctg/$id"
                params={{ id: i.toString(), ctg: ctg }}
              >
                <Button className="mt-2 rounded-full">Learn More</Button>
              </Link>
            </div>
          ))}
        </div>
        <PaginationBox></PaginationBox>
      </div>

      {/*subs box*/}
      <div className="">
        <SubscriberBox />
      </div>
    </div>
  )
}
