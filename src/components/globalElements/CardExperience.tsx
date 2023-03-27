import { ExperienceProps } from '@/constants/Experiences'
import { styles } from '@/styles/modules.styles'
import React from 'react'
import { AiFillEye } from 'react-icons/ai'

const CardExperience = ({experience}: {experience:ExperienceProps}) => {
  return (
    <div className='bg-common p-2 rounded-lg w-[90%] max-w-[600px]'>
      <div className='p-2 bg-black flex flex-col gap-8'>
        <h3 className={`${styles.title}`}>{experience.title}</h3>
        <p className={`${styles.paragraph}`}>{experience.description}</p>
        <p className='text-base md:text-xl'>{experience.tecnologies}</p>
        <a href={experience.link}
        target={"_blank"}
        className="mx-auto flex flex-col items-center text-3xl rounded-full bg-common p-1 w-[100px] h-[100px] justify-center relative overflow-hidden">
          <span className='RIPPLE-EFFECT-TWO' />
          <AiFillEye className={`${styles.shadowBasic}`} />
          <b className={`${styles.shadowBasic}`}>Ver</b>
        </a>
      </div>
    </div>
  )
}

export default CardExperience