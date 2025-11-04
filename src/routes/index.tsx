import CarouselBox from '@/components/Carousel'
import Socials from '@/components/Socials'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="space-y-10 text-center">
      {/*hookline*/}
      <div className="font-hook pt-10 text-3xl font-semibold">
        "Everything is Good, Daijoubu Desuu"
      </div>
      {/*caruosel*/}
      <div className="flex items-center justify-center">
        <CarouselBox />
      </div>
      {/*socials*/}
      <div>
        <Socials />
      </div>
    </main>
  )
}
