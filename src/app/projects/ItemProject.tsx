'use client'

import Image from 'next/image'
import React, { ReactElement, useState } from 'react'
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi'

interface ProjectProps {
  id: number
  name: string
  description: string
  image: string
  urlSite: string
  urlGitHub: string
  icons: ReactElement[]
}

interface ItemProjectProps {
  project: ProjectProps
}

export const ItemProject = ({ project }: ItemProjectProps) => {
  const [showInfo, setShowInfo] = useState(true)

  const handleMouseEnter = () => {
    setShowInfo(false)
  }

  const handleMouseLeave = () => {
    setShowInfo(true)
  }

  const handleGitHubClick = () => {
    window.open(project.urlGitHub, '_blank')
  }

  const handleWebsiteClick = () => {
    if (project.urlSite) {
      window.open(project.urlSite, '_blank')
    }
  }

  return (
    <div
      className="flex flex-col transform transition-transform hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover"
        src={project.image}
        alt=""
      />
      <div className="p-16 gap-3 w-full h-full z-10 bg-zinc-950 bg-opacity-50 flex flex-col items-center justify-center border-b-4 border-default">
        {showInfo ? (
          <>
            <div className="text-white sm:text-sm text-[1.2rem] font-bold">
              <p>{project.name}</p>
            </div>
            <div className="flex text-zinc-300">
              {project.icons.map((icon: ReactElement) => {
                return icon
              })}
            </div>
          </>
        ) : (
          <div className="flex justify-between items-end gap-4">
            <button
              title="Repositório GitHub"
              className="text-white"
              onClick={handleGitHubClick}
            >
              <BiLogoGithub size={35} />
            </button>
            {project.urlSite && (
              <button
                title="Acessar site"
                className="text-white"
                onClick={handleWebsiteClick}
              >
                <BiLinkExternal size={35} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
