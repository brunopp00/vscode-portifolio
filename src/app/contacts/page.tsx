'use client'

import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const listaContatos = [
  {
    title: 'E-mail',
    description: 'brunofnh08@gmail.com',
    icon: <HiOutlineMail size={25} />,
    link: '',
  },
  {
    title: 'Telefone',
    description: '(51) 99918-7010',
    icon: <BsTelephone size={25} />,
    link: 'https://wa.me/5551999187010',
  },
  {
    title: 'Linkedin',
    description: '@bruno-frohlich',
    icon: <BiLogoLinkedin size={25} />,
    link: 'https://www.linkedin.com/in/bruno-frohlich-444b06234/',
  },
  {
    title: 'GitHub',
    description: '@brunopp00',
    icon: <BiLogoGithub size={25} />,
    link: 'https://github.com/brunopp00',
  },
]

export default function Contacts() {
  return (
    <div className="grid grid-cols-2 gap-4 h-full justify-center items-center">
      {listaContatos.map((contato) => {
        return (
          <div key={contato.title} className="flex flex-col items-center gap-2">
            <div
              onClick={() => window.open(contato.link, '_blank')}
              className="bg-gray-800 rounded-full p-4 cursor-pointer"
            >
              {contato.icon}
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white">{contato.title}</p>
              <p className="text-white">{contato.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
