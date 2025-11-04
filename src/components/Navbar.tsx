import { Link } from '@tanstack/react-router'
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
    <div className="fixed top-0 hidden h-20 w-full items-center justify-evenly lg:flex">
      <div className="font-sans font-extrabold">MHF</div>
      <nav className="flex items-center justify-center gap-10">
        {menu.map((m) => {
          return (
            <div key={m.name} className="">
              <Link to={m.href}>
                <li className="list-none rounded-sm p-2 capitalize transition-all duration-100 ease-in-out hover:bg-blue-100">
                  {m.name}
                </li>
              </Link>
            </div>
          )
        })}
      </nav>
      <div className="flex items-center justify-center gap-10">
        <div>
          <SelectBox
            className="w-[150]"
            placeholder="Language"
            options={[
              { label: 'English', value: 'en' },
              { label: 'Bangla', value: 'bn' },
            ]}
          ></SelectBox>
        </div>
        <AnimatedThemeToggler duration={600}></AnimatedThemeToggler>
      </div>
      <div>
        <Link to="/contact">
          <Button className="cursor-pointer">Contact Us</Button>
        </Link>
      </div>
    </div>
  )
}
