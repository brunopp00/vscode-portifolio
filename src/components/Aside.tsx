import {
  Blocks,
  Files,
  GitFork,
  Search,
  Settings,
  UserCircle2,
  ChevronDown,
  MoreVertical,
} from 'lucide-react'
import { Tab } from './Tab'

export function Aside() {
  return (
    <>
      <aside className="w-[5%] h-full flex flex-col justify-between p-2 bg-gray-700 rounded-bl">
        <div className="flex flex-col items-center gap-4">
          <div className="text-slate-300">
            <Files size={32} />
          </div>
          <div className="text-slate-500">
            <Search size={32} />
          </div>
          <div className="text-slate-500">
            <GitFork size={32} />
          </div>
          <div className="text-slate-500">
            <Blocks size={32} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="text-slate-500">
            <UserCircle2 size={32} />
          </div>
          <div className="text-slate-500">
            <Settings size={32} />
          </div>
        </div>
      </aside>
      <main className="w-[20%] bg-gray-800">
        <div className="flex justify-between items-center p-2">
          <p className="text-sm">Explorer</p>
          <MoreVertical size={20} />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center text-sm font-bold gap-1 bg-gradient-to-r from-gray-800 to-gray-700 ">
            <ChevronDown size={20} />
            <p>BRUNO FRÖHLICH</p>
          </div>
          <Tab />
        </div>
      </main>
    </>
  )
}
