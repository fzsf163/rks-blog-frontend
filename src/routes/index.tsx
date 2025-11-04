import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="text-center">
      {/*hookline*/}
      <div className="font-hook p-7 text-3xl font-semibold">
        "Everything is Good, Daijoubu Desuu"
      </div>
    </main>
  )
}
