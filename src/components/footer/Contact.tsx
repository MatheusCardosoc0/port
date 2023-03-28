import { ContactLinks } from '@/constants/contatLinks'
import { styles } from '@/styles/modules.styles'
import React from 'react'
import ButtonRipple from '../globalElements/ButtonRipple'

const Contact = () => {
  return (
    <footer className={`${styles.paddingY}`}>
      <div className={`${styles.container} ${styles.shadowBasic} flex flex-col justify-center items-center text-center gap-12`}>
        <span className=''>
          <h2 className={`${styles.title2}`} id="contato">Contato</h2>
          <h3 className={`${styles.title} mt-8`}>Matheus Cardoso Luiz Costa</h3>
        </span>

        <span  className='text-xl font-semibold'>
          <p>Aparecida de Goiânia, Goias, Brasil.</p>
          <p>(62) 99604-2564</p>
        </span>

        <span className="flex flex-col md:flex-row justify-between gap-2">
          {ContactLinks.map(contact => (
            <ButtonRipple ripple='#fc0000'
              key={contact.name}
              stylish={contact.color}>
              <a className='flex justify-center gap-8  items-center w-full h-full p-4 group'
                href='https://github.com/MatheusCardosoc0'
                target={"_blank"}>
                <span className='RIPPLE-EFFECT-TWO' />
                {contact.icon()}
                {contact.name}
              </a>
            </ButtonRipple>
          ))}
        </span>

      </div>
    </footer>
  )
}

export default Contact