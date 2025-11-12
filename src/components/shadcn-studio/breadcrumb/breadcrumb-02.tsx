import { HomeIcon } from 'lucide-react'
import { useRouterState, Link } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb' // adjust your import

export default function BreadCrumbBox() {
  const state = useRouterState()
  const pathname = state.location.pathname // e.g. "/blogs/5"
  const segments = pathname.split('/').filter(Boolean) // ["blogs", "5"]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-2">
              <HomeIcon className="size-4" />
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((seg, idx) => {
          const isLast = idx === segments.length - 1
          const href = '/' + segments.slice(0, idx + 1).join('/')

          return (
            <div key={idx} className="flex items-center justify-center gap-2">
              <BreadcrumbSeparator> / </BreadcrumbSeparator>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>
                    <Link to={href} className="capitalize">
                      {decodeURIComponent(seg)}
                    </Link>
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={href} className="capitalize">
                      {decodeURIComponent(seg)}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
