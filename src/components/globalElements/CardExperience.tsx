import { ExperienceProps } from '@/constants/Experiences'
import { styles } from '@/styles/modules.styles'
import { slideIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import Anchor from './Anchor'

const CardExperience = ({ experience }: { experience: ExperienceProps }) => {
  return (
    <motion.div className='bg-common p-2 rounded-lg w-[90%] max-w-[600px]'
    variants={slideIn({delay: 0.25, direction: 'left', duration: 0.75, type: 'spring'})}
    initial={"hidden"}
    whileInView={"show"}>
      <div className='p-2 bg-black flex flex-col gap-8'>
        <h3 className={`${styles.title}`}>{experience.title}</h3>
        <p className={`${styles.paragraph}`}>{experience.description}</p>
        <p className='text-base md:text-xl'>{experience.tecnologies}</p>
        <Anchor link={experience.link}>
          <AiFillEye className={`${styles.shadowBasic}`} />
          <b className={`${styles.shadowBasic}`}>Ver</b>
        </Anchor>
      </div>
    </motion.div>
  )
}

export default CardExperience