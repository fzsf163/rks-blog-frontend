import { ConctactForm } from '@/components/ConctactForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-0">
      <ConctactForm></ConctactForm>
    </main>
  )
}
