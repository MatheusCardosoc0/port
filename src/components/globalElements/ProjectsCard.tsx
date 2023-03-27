import { ProjectProps } from '@/constants/Projects'
import { styles } from '@/styles/modules.styles'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import Anchor from './Anchor'

const ProjectsCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className='bg-common p-2 w-[90%] max-w-[500px] rounded-lg'>
      <div className='p-2 bg-black flex flex-col gap-4'>
        <a href={`${project.viewLink}`}
        className="hover:brightness-150"
        target={"_blank"}>
          <img src={`${project.image}`} />
        </a>
        <p className={`${styles.paragraph}`}>{project.description}</p>
        <Anchor link={project.viewLink}
        color={"bg-black drop-shadow-[0px_0px_3px_white]"}>
          <BsGithub />
        </Anchor>
      </div>
    </div>
  )
}

export default ProjectsCard