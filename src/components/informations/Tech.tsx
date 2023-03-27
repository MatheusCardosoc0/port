import { styles } from '@/styles/modules.styles'
import React from 'react'
import { TbBrandCss3, TbBrandDocker, TbBrandGit, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandPrisma, TbBrandReact, TbBrandRedux, TbBrandTailwind, TbBrandTypescript } from 'react-icons/tb'
import { SiStyledcomponents } from 'react-icons/si'

const Tech = () => {
  return (
    <section className={`${styles.paddingY} overflow-x-hidden`}>
      <div className={`${styles.container} flex flex-col justify-center items-center`}>
        <h2 className={`${styles.title2}`}>
          Habilidades
        </h2>

        <div className='triangle flex flex-col gap-6 w-[180%] text-3xl sm:text-4xl md:text-5xl mt-20'>
          <div className='flex-col'>
            <TbBrandNextjs title='Nextjs' />
            <TbBrandReact title='Reactjs' />
            <TbBrandTypescript title='Typescript' />
          </div>
          <div>
            <TbBrandTailwind title='Tailwindcss' />
            <TbBrandRedux title="Redux" />
            <TbBrandPrisma title="Prisma" />
            <SiStyledcomponents title="Styled-Components" />
          </div>
          <div>
            <TbBrandJavascript title="Javascript" />
            <TbBrandHtml5 title="Html5" />
            <TbBrandCss3 title="Css3" />
            <TbBrandGit title="Git" />
            <TbBrandDocker title="Docker" />
            <TbBrandMysql title="Mysql" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech