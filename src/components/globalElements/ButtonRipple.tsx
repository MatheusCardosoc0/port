import React, { ReactNode } from 'react'

interface ButtonProps {
  type: string
  id: string
  className: string
  onclick: () => void
  ripple: any
  children: ReactNode
}

const ButtonRipple = ({ children, className, id, onclick, ripple, type }: ButtonProps) => {
  return (
    <button className={className}
      data-ripple={ripple}
      id={id}
      onClick={onclick}>
      {children}
    </button>
  )
}

export default ButtonRipple