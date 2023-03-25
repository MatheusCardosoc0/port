import { photo } from '@/assets'
import { styles } from '@/styles/modules.styles'
import { fadeIn } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className={`relative w-full h-full mx-auto mt-[80px] ${styles.padding}`}>
      <motion.h1 className={`${styles.heroHeadText} text-white`}
        variants={fadeIn({ delay: 0.5, direction: 'down', duration: 1, type: 'spring' })}
        initial={"hidden"}
        whileInView={"show"}
      >
        Olá, me chamo
        <b className={`ml-4 text-[#00d5ff] ${styles.shadowBasic}`}>Matheus</b>
      </motion.h1>

      <div className='flex flex-col md:flex-row justify-between mt-12'>
        <Image src={photo}
          alt="photo"
          className='w-[360px] h-[360px] rounded-r-xl mt-8 animate-bounce photo-effect mx-auto' />

        <p className={`${styles.paragraph} w-full max-w-[400px]`}>
          Estou cursando Análise e Desenvolvimento de Sistemas e estudando tecnologias front-end, como ReactJS, NextJS e React Native, além de possuir um conhecimento básico em backend com NodeJS.
        </p>
      </div>

    </section>
  )
}

export default Hero