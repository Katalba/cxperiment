import React from 'react'

// el boton recibe la clase global y un nombre para mostrar
const BotonBase = ({ name, clase, children }) => {
  return (
    <button className={`${clase} rounded-md transition-all duration-300 ease-in-out flex flex-row flex-wrap items-center justify-start gap-2`}>
      {name}
      {children || null}
    </button>
  )
}

export default BotonBase
