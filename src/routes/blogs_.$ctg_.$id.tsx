import Loader from '@/components/loader/loader'
import BreadCrumbBox from '@/components/shadcn-studio/breadcrumb/breadcrumb-02'
import { Button } from '@/components/ui/button'
import { base } from '@/source'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/blogs_/$ctg_/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ctg, id } = Route.useParams()
  const { data, status, error, isFetching } = useQuery({
    queryKey: ['getsinglepost'],
    queryFn: async () => {
      const data = await fetch(
        `${base}/content/item/posts/6918bea23322821c23bd5ca1`,
      )
        .then((res) => res.json())
        .then((res) => {
          return res
        })
        .catch((error) => {
          throw new Error(error)
        })
      return data
    },
    initialData: [],
  })
  console.log(data, error?.message)
  if (status === 'error')
    return (
      <div className="flex min-h-150 w-full flex-col items-center justify-center gap-4">
        <p className="w-fit text-center text-5xl font-black">
          {error?.message}
        </p>
        <Button
          onClick={() => {
            window.location.reload()
          }}
        >
          Try Again
        </Button>
      </div>
    )
  if (status === 'success')
    return (
      <div className="bg-accent flex items-center justify-center">
        <Loader></Loader>
      </div>
    )
  return (
    <div>
      <BreadCrumbBox></BreadCrumbBox>
      <div>
        {isFetching ? <div>Refreshing...</div> : null}
        Hello {ctg}:{id}
      </div>
    </div>
  )
}
