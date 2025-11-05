import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'

function CardBox() {
  return (
    <div className="group relative h-60 w-full overflow-hidden rounded-sm md:h-140 md:w-160">
      <img
        className="h-full w-full rounded-sm object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174"
      />
      <div className="absolute bottom-0 flex w-full flex-col items-start justify-center rounded-sm p-6 text-white backdrop-blur-lg transition-all duration-300 ease-in-out group-hover:translate-y-0 md:translate-y-18 md:gap-5">
        <p className="line-clamp-3 text-left text-sm md:text-2xl">
          A big Story Reveal, Looking into life, peolpe see, peolpe go where
          they please. Wazz up peolpe A big Story Reveal, Looking into life,
          peolpe see, peolpe go where they please. Wazz up peolpe A big Story
          Reveal, Looking into life, peolpe see, peolpe go where they please.
          Wazz up peolpe
        </p>
        <Link
          to="/"
          className="flex items-center justify-center border p-2 text-sm font-bold transition-all duration-300 ease-in-out hover:border-amber-200 md:text-lg"
        >
          Read More{' '}
          <span className="flex items-center justify-center">
            <ChevronRight></ChevronRight>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default CardBox
