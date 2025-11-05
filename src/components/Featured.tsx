import * as React from 'react'
import CardBox from './cardbox'

const Featured: React.FC = () => {
  return (
    <div className="mb-10 h-full w-full">
      <p className="font-hook mb-5 text-4xl font-bold">Featured Articles</p>
      <div className="mx-auto flex h-fit w-[80%] flex-wrap items-center justify-center gap-10 p-2">
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
        <CardBox />
      </div>
    </div>
  )
}

export default Featured
