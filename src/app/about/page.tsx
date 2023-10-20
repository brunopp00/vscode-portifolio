import fotoBruno from '@/assets/foto-bruno2.jpeg'
import Image from 'next/image'

export default function About() {
  return (
    <div className="w-full h-full p-2 flex flex-col gap-5" id="sobre">
      <div className="flex justify-center">
        <Image className="rounded" src={fotoBruno} alt="" />
      </div>
      <div className="flex flex-col pl-28 pr-28">
        <h1 className=" text-white font-tilt-warp text-center">About me</h1>
        <p className="font-tilt-warp text-center text-white">
          My name is Bruno Fröhlich, I was born on February 4, 2006. Since Very
          early on, developing and programming became my passions. I am a
          programmer with knowledge of several languages and technologies,
          including JavaScript, TypeScript, Android Java, React.js and Node.js.
          I am currently an intern at Unimed Vale do Caí, where I use React.js
          to develop web interfaces. I highlight one of my projects most
          significant, the development of an Android application that made it
          essential for all Unimed Vale do Caí employees, optimizing company
          operations. I demonstrate my commitment to learning through completing
          the React.js course at RocketSeat. Additionally, I am expanding my
          knowledge in Node.js and React Native, also by RocketSeat. I have
          experience in fullstack development and you can check out some of my
          projects in the projects section. I work as a freelancer, mainly in
          the front-end area, contributing to several projects. My skill with
          Tailwind CSS allows me to create elegant and responsive user
          interfaces. With a promising future ahead and a continued passion for
          software development, I look forward to continuing my programming
          journey and contributing for innovative and challenging projects.
        </p>
      </div>
    </div>
  )
}
