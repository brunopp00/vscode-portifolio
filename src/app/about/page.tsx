import fotoBruno from '@/assets/bruno.jpg'
import Image from 'next/image'

export default function About() {
  return (
    <div
      className="w-full h-full flex items-center justify-center gap-5"
      id="sobre"
    >
      <Image
        className="rounded object-cover w-[35%] h-[55%]"
        src={fotoBruno}
        alt=""
      />
      <div className="flex flex-col w-[65%] text-xl">
        <p>👨‍💻 Trabalho como desenvolvedor front end desde de 2021</p>
        <p>🎓 Cursando Análise e Desenvolvimento de Sistemas</p>
        <p>💡 Interesse em desenvolvimento front end e back end</p>
        <p>🚀 Buscando novas oportunidades e desafios</p>
      </div>
    </div>
  )
}
