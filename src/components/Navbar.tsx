import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import { Button } from './ui/button'
import SelectBox from './selectbox'

const menu = [
  { name: 'home', href: '/' },
  { name: 'blogs', href: '/blogs' },
  { name: 'about', href: '/about' },
  { name: 'courses', href: '/courses' },
  { name: 'books', href: '/books' },
]

export function Navbar() {
  return (
    <div className="bg-background fixed top-0 z-40 hidden h-20 w-full items-center justify-evenly shadow backdrop-blur-2xl lg:flex">
      {/* Logo */}
      <div className="font-sans text-lg font-extrabold tracking-wide">MHF</div>

      {/* Navigation */}
      <nav className="relative flex items-center justify-center gap-6 rounded-full bg-transparent px-4 py-2">
        {menu.map((m) => (
          <Link key={m.name} to={m.href} preload="intent">
            {({ isActive }) => (
              <button
                className="text-back relative rounded-full px-3 py-1.5 text-sm font-medium transition"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="bg-foreground absolute inset-0 z-10 mix-blend-difference"
                    style={{ borderRadius: 9999 }}
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span
                  className={
                    isActive
                      ? 'text-background dark:text-foreground relative z-20 capitalize mix-blend-difference'
                      : 'hover:text-foreground/60 relative z-20 capitalize'
                  }
                >
                  {m.name}
                </span>
              </button>
            )}
          </Link>
        ))}
      </nav>

      {/* Controls */}
      <div className="flex items-center justify-center gap-10">
        <SelectBox
          className="w-[150]"
          placeholder="Language"
          options={[
            { label: 'English', value: 'en' },
            { label: 'Bangla', value: 'bn' },
          ]}
        />
        <AnimatedThemeToggler duration={600} />
      </div>

      {/* Contact Button */}
      <div>
        <Link to="/contact">
          <Button className="cursor-pointer">Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}
