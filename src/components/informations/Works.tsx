import { Projects } from '@/constants/Projects'
import { styles } from '@/styles/modules.styles'
import React from 'react'
import ProjectsCard from '../globalElements/ProjectsCard'

const Works = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <div className={`${styles.container} flex flex-col gap-20 justify-center items-center`}>
        <div>
          <h2 className={`${styles.title2} w-[90%] max-w-[440px]`}>Projetos</h2>
          <p className={`${styles.paragraph} text-white/60`}>Projetos que realizei para praticar minhas habilidades</p>
        </div>

        <div>
          {Projects.map(project => (
            <ProjectsCard project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Works