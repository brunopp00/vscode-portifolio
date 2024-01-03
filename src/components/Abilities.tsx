import {
  BiLogoAndroid,
  BiLogoCss3,
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'
import { SiStorybook } from 'react-icons/si'

export function Abilities() {
  const abilitiesList = [
    { name: 'HTML5', icon: <BiLogoHtml5 size={35} /> },
    { name: 'CSS3', icon: <BiLogoCss3 size={35} /> },
    { name: 'JavaScript', icon: <BiLogoJavascript size={35} /> },
    { name: 'TypeScript', icon: <BiLogoTypescript size={35} /> },
    { name: 'NodeJs', icon: <BiLogoNodejs size={35} /> },
    { name: 'ReactJs', icon: <BiLogoReact size={35} /> },
    { name: 'Tailwind CSS', icon: <BiLogoTailwindCss size={35} /> },
    { name: 'Android Java', icon: <BiLogoAndroid size={35} /> },
    { name: 'Storybook', icon: <SiStorybook size={35} /> },
    { name: 'Figma', icon: <BiLogoFigma size={35} /> },
  ]
  return (
    <div className="relative m-auto w-full overflow-hidden">
      <div className="animate-infinite-slider flex w-[calc(250px*10)] bg-gray-800 p-2">
        {abilitiesList.map((logo) => (
          <div
            className="slide w-[125px] items-center justify-center"
            key={logo.name}
          >
            {logo.icon}
          </div>
        ))}
        {abilitiesList.map((logo) => (
          <div
            className="slide w-[125px] items-center justify-center"
            key={logo.name}
          >
            {logo.icon}
          </div>
        ))}
      </div>
    </div>
  )
}
// before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']
// {
//   abilitiesList.map((item) => {
//     return (
//       <li
//         key={item.name}
//         className=" gap-3 p-5 flex flex-col items-center rounded-full bg-zinc-900 hover:opacity-80"
//       >
//         {/* <div>
//         <p className="text-white text-default sm:text-sm">
//           {item.name}
//         </p>
//       </div> */}
//         {item.icon}
//       </li>
//     )
//   })
// }
