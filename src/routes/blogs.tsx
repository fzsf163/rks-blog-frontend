import Authorspick from '@/components/authorpick'
import BlogsByCategory from '@/components/blogsbyctg'
import CarouselBox from '@/components/Carousel'
import { SubscriberBox } from '@/components/subscribe'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mx-auto mb-20 space-y-16">
      <div>
        {' '}
        <CarouselBox />
      </div>
      {/*Author's Pick*/}
      <div className="flex items-center justify-center">
        <Authorspick />
      </div>
      {/*subs*/}
      <div>
        <SubscriberBox />
      </div>
      {/*list by category*/}
      <div className="flex items-center justify-center">
        <BlogsByCategory />
      </div>
    </div>
  )
}
