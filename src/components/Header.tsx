import MobileNav from './mobilenav'
import { Navbar } from './Navbar'

export default function Header() {
  return (
    <div className="relative lg:mb-20">
      <Navbar></Navbar>
      <MobileNav></MobileNav>
    </div>
  )
}
