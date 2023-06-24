import React from 'react'

// el boton recibe la clase global y un nombre para mostrar
// px-8 == 32px   py-6 == 24px ,
const BotonBase = ({ name, clase, func, children }) => {
  return (
    <button
      onClick={func}
      className={`${clase} font-titulo rounded-md transition-all duration-300 ease-in-out flex flex-row flex-nowrap items-center justify-start gap-2 py-[10px] px-[24px] md:py-[16px] md:px-[32px] xl:px-[36px] xl:py-[24px] xl:text-[18px]`}
    >
      {name}
      {children || null}
    </button>
  )
}

export default BotonBase
