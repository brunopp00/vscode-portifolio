import PreviewIgniteCoffee from '../../assets/coffee.png'
import PreviewPokedex from '../../assets/pokedex.png'
import PreviewPrevisao from '../../assets/previsao-tempo.png'
import PreviewDtMoney from '../../assets/dtmoney.png'
import PreviewIgniteTimer from '../../assets/ignite-timer.png'
import PreviewIgniteTodo from '../../assets/ignite-todo.png'
import PreviewAndroid from '../../assets/android.png'
import PreviewIgniteFeed from '../../assets/ignite-feed.png'
import PreviewDesign from '../../assets/design-system.png'
import PreviewIgniteCall from '../../assets/ignite-call.png'
import PreviewEsgotamento from '../../assets/esgotamento.png'
import PreviewIgniteShop from '../../assets/ignite-shop.png'
import PreviewIgniteBlog from '../../assets/ignite-blog.png'
import PreviewSpotify from '../../assets/spotify.png'
import {
  BiLogoCss3,
  BiLogoFigma,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTypescript,
} from 'react-icons/bi'
import { SiStorybook } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { ItemProject } from './ItemProject'

export default function Projects() {
  const listaProjetos = [
    {
      id: 1,
      name: 'Ignite Shop',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteShop,
      urlSite: '',
      urlGitHub: 'https://github.com/brunopp00/Ignite-Shop',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoNodejs key={2} size={20} />,
        <BiLogoTypescript key={3} size={20} />,
        <BiLogoHtml5 key={4} size={20} />,
        <BiLogoCss3 key={5} size={20} />,
        <TbBrandNextjs key={6} size={20} />,
        <BiLogoFigma key={7} size={20} />,
      ],
    },
    {
      id: 2,
      name: 'Ignite Blog',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteBlog,
      urlSite: '',
      urlGitHub: 'https://github.com/brunopp00/GitHub-Blog',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoNodejs key={2} size={20} />,
        <BiLogoTypescript key={3} size={20} />,
        <BiLogoHtml5 key={4} size={20} />,
        <BiLogoCss3 key={5} size={20} />,
        <BiLogoFigma key={6} size={20} />,
      ],
    },
    {
      id: 3,
      name: 'Ignite Coffee',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteCoffee,
      urlSite: 'https://02-desafio-ignite-reactjs.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/Coffe-Delivery',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <BiLogoFigma key={5} size={20} />,
      ],
    },
    {
      id: 4,
      name: 'Pokedéx',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewPokedex,
      urlSite: 'https://brunopp00.github.io/pokedex/',
      urlGitHub: 'https://github.com/brunopp00/pokedex',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoHtml5 key={2} size={20} />,
        <BiLogoCss3 key={3} size={20} />,
      ],
    },
    {
      id: 5,
      name: 'Previsão Tempo',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewPrevisao,
      urlSite: 'https://brunopp00.github.io/previsaodotempo/',
      urlGitHub: 'https://github.com/brunopp00/previsaodotempo',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoHtml5 key={2} size={20} />,
        <BiLogoCss3 key={3} size={20} />,
      ],
    },
    {
      id: 7,
      name: 'Ignite DtMoney',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewDtMoney,
      urlSite: 'https://03-modulo-ignite-reactjs.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/DT-Money',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoNodejs key={2} size={20} />,
        <BiLogoTypescript key={3} size={20} />,
        <BiLogoHtml5 key={4} size={20} />,
        <BiLogoCss3 key={5} size={20} />,
        <TbBrandNextjs key={6} size={20} />,
        <BiLogoFigma key={7} size={20} />,
      ],
    },
    {
      id: 9,
      name: 'Ignite Timer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteTimer,
      urlSite: 'https://02-ignite-timer-seven.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/Ignite-Timer',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoTypescript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <BiLogoFigma key={5} size={20} />,
      ],
    },
    {
      id: 10,
      name: 'Ignite ToDoList',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteTodo,
      urlSite: 'https://desafio-modulo1-ignite-reactjs.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/Todo-list',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <BiLogoFigma key={5} size={20} />,
      ],
    },
    {
      id: 12,
      name: 'Projeto Android',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewAndroid,
      urlSite: 'https://brunopp00.github.io/projeto-android/',
      urlGitHub: 'https://github.com/brunopp00/projeto-android',
      icons: [
        <BiLogoHtml5 key={1} size={20} />,
        <BiLogoCss3 key={2} size={20} />,
      ],
    },
    {
      id: 13,
      name: 'Ignite Feed',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteFeed,
      urlSite: 'https://ignite-modulo-01.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/Ignite-Feed',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <BiLogoFigma key={5} size={20} />,
      ],
    },
    {
      id: 15,
      name: 'Design System',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewDesign,
      urlSite: 'https://brunopp00.github.io/design-system/',
      urlGitHub: 'https://github.com/brunopp00/design-system',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <SiStorybook key={2} size={20} />,
        <BiLogoFigma key={3} size={20} />,
      ],
    },
    {
      id: 16,
      name: 'Ignite Call',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewIgniteCall,
      urlSite: 'https://ignite-call-livid-alpha.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/ignite-call',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoTypescript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
        <TbBrandNextjs key={5} size={20} />,
        <BiLogoFigma key={6} size={20} />,
      ],
    },
    {
      id: 17,
      name: 'Esgotamento',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewEsgotamento,
      urlSite: 'https://esgotamento-sanitario.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/esgotamento-sanitario',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoHtml5 key={3} size={20} />,
        <BiLogoCss3 key={4} size={20} />,
      ],
    },
    {
      id: 18,
      name: 'Clone Spotify',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum consequuntur ipsam recusandae iste. Autem cumque repudiandae molestias animi maxime, optio nulla possimus obcaecati iste, ab asperiores, vero quibusdam eligendi sunt.',
      image: PreviewSpotify,
      urlSite: 'https://clone-spotify-sage.vercel.app/',
      urlGitHub: 'https://github.com/brunopp00/clone-spotify',
      icons: [
        <BiLogoReact key={1} size={20} />,
        <BiLogoJavascript key={2} size={20} />,
        <BiLogoTypescript key={3} size={20} />,
        <BiLogoHtml5 key={4} size={20} />,
        <BiLogoCss3 key={5} size={20} />,
      ],
    },
  ]
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      {listaProjetos.map((project) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        <ItemProject project={project} key={project.id} />
      ))}
    </div>
  )
}
