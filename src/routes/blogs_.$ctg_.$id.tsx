import BreadCrumbBox from '@/components/shadcn-studio/breadcrumb/breadcrumb-02'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs_/$ctg_/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { ctg, id } = Route.useParams()
  return (
    <div>
      <BreadCrumbBox></BreadCrumbBox>
      <div>
        Hello {ctg}:{id}
      </div>
    </div>
  )
}
