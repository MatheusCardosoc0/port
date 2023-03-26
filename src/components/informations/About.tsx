import { typeProjects } from '@/constants/TypeProjects'
import { styles } from '@/styles/modules.styles'
import React from 'react'
import ProjectCard from '../globalElements/ProjectCard'

const About = () => {
  return (
    <section className={`w-full flex flex-col lg:flex-row gap-20 items-center justify-between ${styles.paddingX}`}>
      <div className={`${styles.container} p-4 ml-4 flex flex-col gap-6 items-start max-w-[500px] BACK tilt-container`}>
        <div>
          <p className='text-base text-white/75 '>Introdução</p>
          <h2 className={`${styles.title2}`}>Sobre mim</h2>
        </div>
        <div>
          <p className={` ${styles.paragraph} w-full sm:w-[480px]`}>
            Tenho um bom conhecimento em JavaScript/TypeScript e ReactJS/NextJS, incluindo a criação de sites responsivos, contextos globais, consumo de APIs, técnicas de clean code e estilização tanto com CSS tradicional quanto com seus frameworks.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 p-12 BACK">
        <h2 className={`${styles.title2}`}>Projetos</h2>
        <p className={`${styles.paragraph} ${styles.shadowBasic}`}>Projetos que realizei para praticar minhas habilidades.</p>

        {typeProjects.map(type => (
          <ProjectCard key={type.title}>
            {type.icon()}
            <h3>{type.title}</h3>
          </ProjectCard>
        ))}
      </div>
    </section>
  )
}

export default About