import * as React from 'react'

const AboutUsBox: React.FC = () => {
  return (
    <div className="mb-10 flex h-100 w-full items-center justify-center">
      <div className="flex h-full w-[80%] items-center justify-center gap-10 bg-neutral-100">
        <div className="w-100 max-w-3xl text-justify">
          <p className="text-3xl font-bold">Title</p>
          <p className="text-xl font-medium">
            In this post, I want to share how we can create custom cursor and
            button animations in a React application using Framer Motion. Framer
            Motion is a powerful animation library for React, perfect for
            creating interactive animations that enhance user experience.
          </p>
        </div>
        <div>
          <img
            className="h-90 w-full rounded-sm object-cover"
            src="https://plus.unsplash.com/premium_photo-1757260019141-458516170c6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default AboutUsBox
