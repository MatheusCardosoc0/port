import { styles } from '@/styles/modules.styles'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto mt-[80px]'>
      <h1 className={`${styles.heroHeadText} ${styles.padding} text-white`}>
        Olá, me chamo 
        <b className={`ml-4 text-[#00d5ff] ${styles.shadowBasic}`}>Matheus</b>
      </h1>

    </section>
  )
}

export default Hero