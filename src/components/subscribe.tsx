import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'

export function SubscriberBox() {
  const placeholders = [
    "What's the first rule of Relationship?",
    'Who are You?',
    'Where is the true self Hiding?',
    'Write a story about yourself',
    'How to assemble a broken heart?',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <div className="bg-accent flex h-180 flex-col items-center justify-center px-4">
      <h2 className="mb-10 text-center text-xl text-black sm:mb-20 sm:text-5xl dark:text-white">
        Be The First To Know
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <p className="font-hook mt-2 tracking-wider">
        Subscribe to newsletter, Unsubscribe anytime.
      </p>
    </div>
  )
}
