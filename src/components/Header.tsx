import { Copy, Minus, X } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full flex bg-gray-800 rounded-t">
      <div className="w-[90%] flex items-center justify-center">
        <p className="text-gray-400">portifólio.json - vscode</p>
      </div>
      <div className="w-[10%] flex">
        <div className="w-[33%] flex items-center justify-center transition-colors hover:bg-gray-700 p-1">
          <Minus />
        </div>
        <div className="w-[33%] flex items-center justify-center transition-colors hover:bg-gray-700 p-1">
          <Copy />
        </div>
        <div className="w-[33%] flex items-center justify-center p-1 rounded-tr transition-colors hover:bg-red-600">
          <X />
        </div>
      </div>
    </header>
  )
}
