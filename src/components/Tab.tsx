import { Phone, Presentation, User2, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function Tab() {
  return (
    <div className="flex flex-col gap-1">
      <Link
        href="/about"
        className="flex items-center text-sm gap-1 pl-5 p-1 cursor-pointer transition-colors hover:bg-gray-700"
      >
        <User2 size={20} /> <p>About</p>
      </Link>
      <Link
        href="/abilities"
        className="flex items-center text-sm gap-1 pl-5 p-1 cursor-pointer transition-colors hover:bg-gray-700"
      >
        <Sparkles size={20} /> <p>Abilities</p>
      </Link>
      <Link
        href="/projects"
        className="flex items-center text-sm gap-1 pl-5 p-1 cursor-pointer transition-colors hover:bg-gray-700"
      >
        <Presentation size={20} /> <p>Projects</p>
      </Link>
      <Link
        href="/contacts"
        className="flex items-center text-sm gap-1 pl-5 p-1 cursor-pointer transition-colors hover:bg-gray-700"
      >
        <Phone size={20} /> <p>Contacts</p>
      </Link>
    </div>
  )
}
