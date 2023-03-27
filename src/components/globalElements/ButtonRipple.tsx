import { RippleEffectFunction } from '@/functions/RippleEffectFunction';
import { styles } from '@/styles/modules.styles';
import React, { ButtonHTMLAttributes, ReactNode, useEffect } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stylish?: string;
  ripple?: string;
  children: ReactNode;
}

const ButtonRipple = ({ children, stylish, ripple, ...rest }: ButtonProps) => {

  RippleEffectFunction()

  return (
    <button
      className={`max-w-[400px] font-bold rounded-lg ${styles.shadowBasic} relative text-3xl BUTTON-RIPPLE hover:brightness-150 ${stylish}`}
      data-ripple={ripple}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonRipple;
