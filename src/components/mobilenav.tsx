'use client'
import { MenuIcon, Search, X } from 'lucide-react'
import * as React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from '@tanstack/react-router' // or next/link if you’re using Next.js
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import { Button } from './ui/button'

const menu = [
  { name: 'home', href: '/' },
  { name: 'blogs', href: '/blogs' },
  { name: 'about', href: '/about' },
  { name: 'courses', href: '/courses' },
  { name: 'books', href: '/books' },
]

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      {/* Top Navbar */}
      <div className="flex h-20 w-full items-center justify-between p-2 lg:hidden">
        <button onClick={() => setIsOpen(true)}>
          <MenuIcon className="h-7 w-7" />
        </button>
        <div className="font-sans text-xl font-extrabold">MHF</div>
        <div className="flex items-center justify-around gap-5">
          <AnimatedThemeToggler duration={600} />
          <Search className="h-6 w-6" />
        </div>
      </div>

      {/* Slide-in Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="bg-background text-foreground fixed inset-0 z-50 flex flex-col p-5"
          >
            {/* Header with Close Icon */}
            <div className="mb-10 flex items-center justify-between">
              <div className="text-2xl font-extrabold">MHF</div>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col space-y-6 text-xl">
              {menu.map((m) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={m.href}
                    onClick={() => setIsOpen(false)}
                    className="capitalize hover:text-blue-500"
                    preload="intent"
                  >
                    {({ isActive }) => {
                      return (
                        <span
                          className={isActive ? 'rounded-sm bg-black p-2' : ''}
                        >
                          <span
                            className={
                              isActive
                                ? 'mix-blend-differencee text-blue-200'
                                : ''
                            }
                          >
                            {m.name}
                          </span>{' '}
                        </span>
                      )
                    }}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-5">
              <Link to="/contact">
                <Button
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNav
