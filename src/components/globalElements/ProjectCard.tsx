import { styles } from '@/styles/modules.styles'
import React, { ReactNode } from 'react'
import ButtonRipple from './ButtonRipple'

interface ProjectCardProps{
  children: ReactNode
}

const ProjectCard = ({children}: ProjectCardProps) => {
  return (
    <ButtonRipple stylish={`bg-gradient-to-tr from-sky-500 via-green-400 to-blue-400 p-1`}
    ripple="#ffff">
      <div className={`${styles.padding} flex flex-col text-4xl items-center gap-4 bg-black`}>
        {children}
      </div>
    </ButtonRipple>
  )
}

export default ProjectCard