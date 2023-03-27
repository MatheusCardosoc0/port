import { useEffect } from "react";

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


export function RippleEffectFunction(){
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
}