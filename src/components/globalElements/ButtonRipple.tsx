import { styles } from '@/styles/modules.styles';
import React, { ButtonHTMLAttributes, ReactNode, useEffect } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stylish?: string;
  ripple?: string;
  children: ReactNode;
}

type rippleFunctionProps = {
  pageX: number
  pageY: number
  currentTarget: {
    offsetTop: number
    offsetWidth: number
    offsetHeight: number
    offsetLeft: number
  }
}

const ButtonRipple = ({ children, stylish, ripple, ...rest }: ButtonProps) => {

  useEffect(() => {
    const btnRipple = document.querySelectorAll('.BUTTON-RIPPLE');
    btnRipple.forEach((btn: any) => {
      btn.addEventListener('click', ({ pageX, pageY, currentTarget }: rippleFunctionProps) => {
        let x = ((pageX - currentTarget.offsetLeft) * 100) / currentTarget.offsetWidth;
        let y = ((pageY - currentTarget.offsetTop) * 20) / currentTarget.offsetHeight;

        const ripple = document.createElement("span");
        const rippleColor = btn.dataset.ripple || '#212129';
        ripple.classList.add("RIPPLE-EFFECT");
        ripple.style.background = rippleColor;

        btn.appendChild(ripple);
        ripple.style.left = x + "%";
        ripple.style.top = y + "%";
        setTimeout(() => {
          ripple.remove()
        }, 700)
      });
    });
  }, []);

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
