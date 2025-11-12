import { Search } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { Input } from './ui/input'
export default function SearchDialogue() {
  const [open, setOpen] = useState(false)
  return (
    <Dialog defaultOpen={false} open={open} onOpenChange={setOpen} modal>
      <DialogTrigger>
        <Search></Search>
      </DialogTrigger>
      <DialogContent className="flex max-h-200 min-h-100 flex-col items-center justify-baseline md:min-h-150 md:min-w-200">
        <DialogHeader className="h-fit w-full">
          <DialogTitle>Let's find something you like</DialogTitle>
          <DialogDescription>
            You can search by titles, content for blogs, courses or books.
          </DialogDescription>
        </DialogHeader>
        <div className="flex min-w-full items-center justify-center gap-1">
          {/*select box*/}
          <div className="flex-3">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title" className="capitalize">
                  Title
                </SelectItem>
                <SelectItem value="content" className="capitalize">
                  Content
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            type="search"
            placeholder="type something..."
            className="flex-9"
          ></Input>
          <Search className="h-8 w-8 flex-1"></Search>
        </div>
      </DialogContent>
    </Dialog>
  )
}
