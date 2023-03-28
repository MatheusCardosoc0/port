import { experiences } from '@/constants/Experiences'
import { styles } from '@/styles/modules.styles'
import React from 'react'
import CardExperience from '../../components/globalElements/CardExperience'

const Experience = () => {
  return (
    <section className={`${styles.paddingX} flex flex-col justify-center mt-20`}>
      <div className={`${styles.container} justify-center items-center flex flex-col gap-12`}>
        <div className={`flex flex-col gap-12 w-full max-w-[500px] text-center ${styles.shadowBasic}`}>
          <h2 className={`${styles.title2}`}>Experiência</h2>
          <hr className='border-4 border-white/30' />
        </div>
        <div className={`flex justify-center items-center sm:border-l-8 sm:border-r-8 border-white/30 ${styles.shadowBasic}`}>
          {experiences.map(experience => (
            <CardExperience key={experience.title}
              experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience