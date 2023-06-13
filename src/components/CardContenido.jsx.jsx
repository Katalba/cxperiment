import React from 'react'
import BotonBase from './BotonBase'

const CardContenido = ({ item, imgBg }) => {
  const isPar = (val) => {
    return val % 2 === 0
  }
  return (
    <section className={`contenedoCard w-full flex ${isPar(item.id) ? 'flex-row-reverse' : 'flex-row'} flex-row justify-start items-center`}>
      <section className='contenido w-1/2'>
        <p>En<span>CXperiment</span>, {item.parrafo}</p>
        <div className='main'>
          <div className='icono'>
            <img src={item.icono} alt='icono seccion contenido' />
          </div>
          <div className='contenido '>
            <p>{item.subparrafo}</p>
          </div>
        </div>
        <section className='pie'>
          <BotonBase name='ver servicio' clase='botonVerde' />
          <BotonBase name='reservar consultori' clase='botonWhite' />
        </section>
      </section>

      <section className='imgBg w-1/2'>
        <img src={imgBg} alt='logo cxPeriment background' />
        <h2 />
      </section>
    </section>

  )
}

export default CardContenido
