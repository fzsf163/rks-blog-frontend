import Authorspick from '@/components/authorpick'
import CarouselBox from '@/components/Carousel'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-auto space-y-10">
      <div>
        {' '}
        <CarouselBox />
      </div>
      {/*list by category*/}
      {/*Author's Pick*/}
      <div className="flex items-center justify-center">
        <Authorspick />
      </div>
    </div>
  )
}
