import React from 'react'

// el boton recibe la clase global y un nombre para mostrar
const BotonBase = ({ name, clase, img }) => {
  return (
    <button className={`${clase} rounded-md transition-all duration-300 ease-in-out`}>{name} {img ? <span><img src='{img}' alt='img' /></span> : null} </button>
  )
}

export default BotonBase
