import React from 'react'

// el boton recibe la clase global y un nombre para mostrar
const BotonBase = ({ name, clase }) => {
  return (
    <button className={`${clase} rounded-md transition-all duration-300 ease-in-out`}>{name}</button>
  )
}

export default BotonBase
