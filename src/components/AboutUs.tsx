import * as React from 'react'

const AboutUsBox: React.FC = () => {
  return (
    <div className="bg-accent flex w-full items-center justify-center md:h-200">
      <div className="flex h-full w-[80%] flex-col items-center justify-center gap-10 p-2 md:flex-row">
        <div className="max-w-3xl text-justify md:w-100">
          <p className="font-bold md:text-3xl">Title</p>
          <p className="font-medium md:text-xl">
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
