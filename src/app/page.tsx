import { Abilities } from '@/components/Abilities'

export default function Home() {
  return (
    <div className="w-full h-full" id="sobre">
      <Abilities />
      <div className="flex flex-col gap-10 mt-10 items-center justify-center text-center">
        <h1 className="font-bold text-2xl">
          Bem-vindo ao Bruno Fröhlich Portfólio
        </h1>
        <p>
          Onde a criatividade encontra funcionalidade, e as ideias se
          transformam em experiências extraordinárias.
        </p>
        <p>
          🚀 <strong>Explore o Inovador:</strong> Embarque em uma jornada visual
          através das minhas criações, onde cada pixel conta uma história e cada
          linha de código é uma expressão de possibilidades ilimitadas.
        </p>
        <p>
          🎨 <strong>Design que Cativa:</strong> Cada projeto é uma obra de arte
          em si, cuidadosamente concebida para envolver, inspirar e deixar uma
          marca duradoura.
        </p>
        <p>
          💻 <strong>Desenvolvimento com Propósito:</strong> Do conceito à
          execução, transformo ideias em realidade. Minhas habilidades de
          desenvolvimento combinam inovação com funcionalidade.
        </p>
        <p>
          🌐<strong> Conectando o Mundo Digital:</strong> Navegue pelos meus
          trabalhos e descubra como eu contribuo para a construção de
          experiências online memoráveis.
        </p>
        <p>
          Pronto para Transformar Ideias em Realidade? Vamos criar algo
          extraordinário juntos.
        </p>
      </div>
    </div>
  )
}
