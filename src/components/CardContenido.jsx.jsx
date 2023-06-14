import React from 'react'
import BotonBase from './BotonBase'
import { IoArrowForwardSharp } from 'react-icons/io5'

const CardContenido = ({ item, imgBg }) => {
  const isPar = (val) => {
    return val % 2 !== 0
  }

  // const imgBgStyle = {
  //   backgroundImage: `url(${imgBg})`,
  //   backgroundPosition: isPar(item.id) ? 'right' : 'left',
  //   width: 'auto',
  //   height: '150%',
  //   marginBottom: '46px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   opacity: 0.5,
  //   transform: isPar(item.id) ? 'scaleX(-1)' : 'none'
  // };

  return (
    <section className={`contenedoCard bg-whiteWi w-full max-w-[1650px] h-auto lg:h-[460px] flex flex-row flex-wrap justify-start items-center lg:flex-row lg:justify-start lg:items-center ${isPar(item.id) ? 'lg:flex-row-reverse' : 'lg:flex-row'} p-2 xl:px-10 py-1 overflow-hidden gap-5 lg:gap-0 `}>

      {/* seccion contenido */}
      <section className='contenido w-full md:h-auto xl:h-[400px] lg:w-[40%] lg:h-full flex flex-col md:flex-row lg:flex-col justify-center items-start gap-5 md:gap-2 lg:gap-6 relative'>
        <p className='w-full md:w-[50%] lg:w-full font-parrafo font-[300] text-textPurple text-md lg:text-lg md:pb-[100px] lg:pb-0'>En <span className='font-[600]'>CXperiment</span>, {item.parrafo}</p>
        <div className='main w-full md:w-[50%] gap-3 lg:w-full flex flex-row justify-around items-center relative'>
          <div className='icono w-[30%] xl:w-[110px] aspect-square'>
            <img src={item.icono} alt='icono seccion contenido' className='w-full aspect-square object-contain p-3 sm:p-6' />
          </div>
          <div className='contenido w-[70%]'>
            <p className='text-parrafo font-[400] text-md lg:text-xl text-textPurple'>{item.subparrafo}</p>
          </div>
        </div>
        <section className='pie w-full relative md:absolute md:right-0 md:bottom-3 lg:relative lg:w-full flex justify-center items-center  lg:flex-row lg:justify-start lg:items-center gap-3'>
          <BotonBase name='ver servicio' clase='botonVerde'>
            <IoArrowForwardSharp />
          </BotonBase>
          <BotonBase name='reservar consultoría' clase='botonWhite' />
        </section>
      </section>

      {/* seccion imagen */}
      <section className={`imgBg w-full h-[280px] lg:w-[60%] lg:h-full overflow-hidden flex items-center ${isPar(item.id) ? 'justify-end' : 'justify-start'}`}>
        <img src={imgBg} alt='logo cxPeriment' className={`h-[150%] mb-10 object-cover object-center lg:object-left opacity-40 overflow-hidden transform relative ${isPar(item.id) ? '-scale-x-100' : ''}`} />
        <h2 className={`absolute w-full text-center lg:w-[300px] ${isPar(item.id) ? 'lg:mr-[200px]' : 'lg:ml-[220px]'} font-titulo font-[700] text-[56px] text-textPurple leading-none`}>
          {item.titulo}
        </h2>
      </section>
    </section>

  )
}

export default CardContenido
