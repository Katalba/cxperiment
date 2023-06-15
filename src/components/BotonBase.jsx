import React from 'react'

// el boton recibe la clase global y un nombre para mostrar
const BotonBase = ({ name, clase, children }) => {
  return (
    <button className={`${clase} rounded-md transition-all duration-300 ease-in-out flex flex-row flex-nowrap items-center justify-start gap-2 capitalize xl:px-6 xl:py-4 xl:text-lg lg:text-md lg:py-3 lg:px-3 text-sm py-3 px-4 `}>
      {name}
      {children || null}
    </button>
  )
}

export default BotonBase
