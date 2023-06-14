import React from 'react'
import BotonBase from './BotonBase'

const CardContenido = ({ item, imgBg }) => {
  const isPar = (val) => {
    return val % 2 !== 0
  }
  return (
    <section className={`contenedoCard w-full max-w-[1650px] h-[440px] flex bg-whiteWi ${isPar(item.id) ? 'flex-row-reverse' : 'flex-row'} flex-row justify-start items-center px-10`}>
      <section className='contenido w-[40%] h-full flex flex-col justify-center items-start gap-4'>
        <p className='w-full font-parrafo font-[400] text-textPurple text-lg '>En <span className='font-[600]'>CXperiment</span>, {item.parrafo}</p>
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

      <section className={`imgBg w-[60%] h-full overflow-hidden flex items-center ${isPar(item.id) ? 'justify-end' : 'justify-start'}`}>
        <img src={imgBg} alt='logo cxPeriment' className={`h-[150%] mb-10 object-cover object-left overflow-hidden transform relative ${isPar(item.id) ? '-scale-x-100' : ''}`} />
        <h2 className={`absolute w-[300px] ${isPar(item.id) ? 'mr-[200px]' : 'ml-[220px]'} font-titulo font-[700] text-[56px] text-textPurple leading-none`}>
          {item.titulo}
        </h2>
      </section>
    </section>

  )
}

export default CardContenido
