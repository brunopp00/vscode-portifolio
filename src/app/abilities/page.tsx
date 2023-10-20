import {
  BiLogoAndroid,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { SiStorybook } from 'react-icons/si'

export default function Abilities() {
  const abilitiesList = [
    { name: 'HTML5', icon: <BiLogoHtml5 size={35} /> },
    { name: 'CSS3', icon: <BiLogoCss3 size={35} /> },
    { name: 'JavaScript', icon: <BiLogoJavascript size={35} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={35} /> },
    { name: 'NodeJs', icon: <BiLogoNodejs size={35} /> },
    { name: 'ReactJs', icon: <BiLogoReact size={35} /> },
    { name: 'Tailwind CSS', icon: <BiLogoTailwindCss size={35} /> },
    { name: 'Redux', icon: <BiLogoRedux size={35} /> },
    { name: 'Figma', icon: <BiLogoFigma size={35} /> },
    { name: 'Android Java', icon: <BiLogoAndroid size={35} /> },
    { name: 'Storybook', icon: <SiStorybook size={35} /> },
    { name: 'Figma', icon: <BiLogoFigma size={35} /> },
  ]
  return (
    <div className="h-full w-full">
      <div className="grid grid-cols-2 gap-5 ">
        {abilitiesList.map((item) => {
          return (
            <div
              key={item.name}
              className="w-full gap-3 h-full p-5 bg-gray-800 flex flex-col items-center rounded border-b-4 border-default hover:opacity-80"
            >
              <div>
                <p className="text-default sm:text-sm">{item.name}</p>
              </div>
              <div className="text-default">{item.icon}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
