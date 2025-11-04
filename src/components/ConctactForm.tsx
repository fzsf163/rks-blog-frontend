import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { Label } from './ui/label'
import { Mail, Pen } from 'lucide-react'
import { useState, type ChangeEvent } from 'react'
import { Button } from './ui/button'

export function ConctactForm() {
  const [letterLeft, setLetterLeft] = useState<number>(500)

  const handleLetterCount = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setLetterLeft(event.currentTarget.textLength)
  }
  return (
    <div className="grid w-full max-w-3xl gap-6">
      <div className="flex flex-col items-start gap-5">
        <Label>What should we call you?</Label>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>
              <Pen></Pen>
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="name..." />
        </InputGroup>
      </div>
      <div className="flex flex-col items-start gap-5">
        <Label>How can we reach you?</Label>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>
              {' '}
              <Mail></Mail>{' '}
            </InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="email..." />
        </InputGroup>
      </div>
      <div className="flex flex-col items-start gap-5">
        <Label>Please leave a message</Label>
        <InputGroup>
          <InputGroupTextarea
            placeholder="Enter your message"
            onChange={handleLetterCount}
            maxLength={500}
            className="w-full max-w-3xl"
          />
          <InputGroupAddon align="block-end">
            <InputGroupText className="text-muted-foreground text-xs">
              {500 - letterLeft} characters left
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <Button type="button">Submit</Button>
    </div>
  )
}
