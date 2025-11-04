import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

interface DetailsBlockProps {
  title: string
  description: string
  imageUrl: string
  buttonText?: string
  href: string
}

const DetailsBlock: React.FC<DetailsBlockProps> = ({
  title,
  description,
  imageUrl,
  buttonText = 'Read More',
  href,
}) => {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg md:h-[700px]">
      {/* Background image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-70 w-full items-center justify-center px-4 md:h-full">
        <div className="w-full max-w-2xl space-y-4 text-justify text-white md:space-y-10">
          <p className="text-lg font-semibold md:text-4xl">{title}</p>
          <p className="line-clamp-5 text-sm font-medium md:line-clamp-none md:text-xl">
            {description}
          </p>
          <Link to={href}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsBlock
