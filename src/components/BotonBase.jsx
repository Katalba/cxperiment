import React from 'react'

// el boton recibe la clase global y un nombre para mostrar
const BotonBase = ({ name, clase, func, children }) => {
  return (
    <button
      onClick={func}
      className={`${clase} rounded-md transition-all duration-300 ease-in-out flex flex-row flex-nowrap items-center justify-start gap-2 xl:px-8 xl:py-6 py-[10px] px-[24px] font-[600] font-titulo text-xs lg:text-xs xl:text-lg`}
    >
      {name}
      {children || null}
    </button>
  )
}

export default BotonBase
