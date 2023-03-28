import { navLinks } from '@/constants/navLinks'
import { styles } from '@/styles/modules.styles'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { logo, menu, close } from '../../assets'

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-radial`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link href={'/'}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}>

          <Image src={logo}
            alt="logo"
            className='w-12 h-12 object-contain' />

          <p className='text-lg font-bold cursor-pointer'>
            Matheus Cardoso
            <span className='sm:block hidden'>| Programador front-end</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map(link => (
            <li key={link.id}
              className={`${active == link.title ? "text-white bg-[#4dff40]" : ""} 
                hover:text-white hover:bg-[#4dff40] text-lg font-medium cursor-pointer transition duration-700 rounded-full pr-2 py-3 group`}
            >
              <a href={`#${link.id}`}
                className={`${styles.shadowBasic}`}
                onClick={() => {
                  setActive(link.title)
                  setToggle(!toggle)
                }}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <Image src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />

          <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-h-[140px] z-10 rounded-xl`}>
            <ul className='flex flex-col justify-end items-start gap-4'>
              {navLinks.map(link => (
                <li key={link.id}
                  className={`${active == link.title ? "text-white bg-[#4dff40]" : ""} 
                hover:text-white hover:bg-[#4dff40] text-lg font-medium cursor-pointer transition duration-700 rounded-full pr-2 py-3 group`}
                >
                  <a href={`#${link.id}`}
                    className={`${styles.shadowBasic}`}
                    onClick={() => {
                      setActive(link.title)
                      setToggle(!toggle)
                    }}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar