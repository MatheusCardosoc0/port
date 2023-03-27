import React, { ReactNode } from 'react'

interface AnchorProps{
  link: string
  children: ReactNode
  color?: string
}

const Anchor = ({children, link, color}: AnchorProps) => {
  return (
    <a href={link}
      target={"_blank"}
      className={`mx-auto flex flex-col items-center text-4xl rounded-full ${color? color: 'bg-common'} p-1 w-[100px] h-[100px] justify-center relative overflow-hidden`}>
      <span className='RIPPLE-EFFECT-TWO' />
      {children}
    </a>
  )
}

export default Anchor