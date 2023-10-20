import fotoBruno from '@/assets/foto-bruno2.jpeg'
import Image from 'next/image'

export default function About() {
  return (
    <div className="w-full h-full p-2 flex flex-col gap-5" id="sobre">
      <div className="flex justify-center">
        <Image className="rounded" src={fotoBruno} alt="" />
      </div>
      <div className="flex flex-col pl-28 pr-28">
        <h1 className=" text-white font-tilt-warp text-center">Sobre Mim</h1>
        <p className="font-tilt-warp text-center text-white">
          Meu nome é Bruno Fröhlich, nasci em 4 de fevereiro de 2006. Desde
          muito cedo, desenvolver e programar se tornaram minhas paixões. Sou um
          programador com conhecimento em várias linguagens e tecnologias,
          incluindo JavaScript, TypeScript, Android Java, React.js e Node.js.
          Atualmente, sou estagiário na Unimed Vale do Caí, onde utilizo
          React.js para desenvolver interfaces web. Destaco um dos meus projetos
          mais significativos, o desenvolvimento de um aplicativo Android que se
          tornou fundamental para todos os funcionários da Unimed Vale do Caí,
          otimizando as operações da empresa. Demonstro meu comprometimento com
          a aprendizagem através da conclusão do curso de React.js da
          RocketSeat. Além disso, estou expandindo meu conhecimento em Node.js e
          React Native, também pela RocketSeat. Tenho experiência em
          desenvolvimento fullstack e você pode conferir alguns dos meus
          projetos na seção de projetos. Trabalho como freelancer,
          principalmente na área de front-end, contribuindo para diversos
          projetos. Minha habilidade com o Tailwind CSS me permite criar
          interfaces de usuário elegantes e responsivas. Com um futuro promissor
          pela frente e uma paixão contínua pelo desenvolvimento de software,
          estou ansioso para continuar minha jornada na programação e contribuir
          para projetos inovadores e desafiadores.
        </p>
      </div>
    </div>
  )
}
