import { Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'

function CardBox() {
  return (
    <div className="group relative h-60 w-full overflow-hidden md:h-80 md:w-100">
      <img
        className="h-full w-full rounded-sm object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174"
      />
      <div className="absolute bottom-0 flex flex-col items-start justify-center p-2 text-white backdrop-blur-lg transition-all duration-300 ease-in-out group-hover:translate-y-0 md:translate-y-12 md:gap-5">
        <p className="text-left text-sm md:text-2xl">
          A big Story Reveal, Looking into life, peolpe see, peolpe go
        </p>
        <Link
          to="/"
          className="flex items-center justify-center p-2 text-sm font-bold md:text-lg"
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
