import CarouselBox from '@/components/Carousel'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-auto bg-amber-100">
      <div>
        {' '}
        <CarouselBox />
      </div>
      {/*list by category*/}
      <div></div>
    </div>
  )
}
