import { ConctactForm } from '@/components/ConctactForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex items-center justify-center p-4 sm:p-0 md:min-h-screen">
      <ConctactForm></ConctactForm>
    </main>
  )
}
