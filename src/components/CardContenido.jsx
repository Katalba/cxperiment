import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import BotonBase from './BotonBase'
import { IoCheckmarkSharp } from 'react-icons/io5'

const CardContenido = ({ item, imgBg }) => {
  const isPar = (val) => {
    return val % 2 !== 0
  }

  /*

  Tamaños fuentes componente CardContenido
  titulo:
  font-size: 32px; >= xl = 1280px
  font-size: 17px  = lg = = 1024px
  font-size: 17px; = md = md = 768px
  font-size: 20px; <= sm = 640px

  parrafo:
            tamaño  |  en resolucion:
  font-size:  text-base 16px; >=  xl 1280px
  font-size:  text-sm 14px; ==  lg = 1024px
  font-size:  text-xs 12px; ==  md = 768px
  font-size:  text-xs 12px; <=  sm = 640px

  leading-[18px] lg:leading-[24px] //linehe height
  */
  const overlayStyleRight = {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
  }
  const overlayStyleLeft = {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
  }

  return (
    <>
      <section className={`contenedoCard card-scroll bg-whiteWi w-full h-auto md:h-auto flex flex-col-reverse  flex-wrap justify-start items-center md:flex-row md:flex-nowrap md:justify-start md:items-center ${isPar(item.id) ? 'md:flex-row-reverse' : 'md:flex-row'} py-1 overflow-hidden gap-5 lg:gap-5 `}>

        {/* seccion contenido */}
        <section className='contenido w-full xl:h-[500px] md:w-[50%] lg:w-[40%] md:h-full flex flex-col md:flex-col justify-center items-start gap-5 md:gap-5 lg:gap-6 relative'>
          <p className='w-full md:w-full font-parrafo font-[400] text-textPurple text-xs md:text-sm xl:text-base md:pb-0 leading-[18px] md:leading-[24px] xl:leading-[27px]'>En <span className='font-[600]'>CXperiment</span>, {item.parrafo}</p>
          <div className='main w-full gap-3 md:w-full flex flex-row justify-around items-center relative'>
            <ul className='w-full flex flex-col justify-start items-start gap-3'>
              {
            item.lista.map((element) => {
              return (
                <li
                  key={uuidv4()} className='font-parrafo font-[400] text-textPurple flex flex-row flex-nowrap justify-start items-center gap-1 xl:gap-2 text-xs lg:text-sm xl:text-base
                leading-[18px] lg:leading-[24px] xl:leading-[27px]'
                >
                  <span className='text-purpleBal p-1 bg-verdeMok rounded-full text-sm lg:text-lg'>
                    <IoCheckmarkSharp />
                  </span>
                  {element}
                </li>
              )
            })
            }

            </ul>
          </div>
          <section className='pie w-full h-auto relative flex justify-start items-start md:right-auto md:bottom-auto md:relative md:w-full  md:flex-row md:justify-start md:items-center'>
            <BotonBase name='Solicita información' clase='botonVerde' />
          </section>
        </section>

        {/* seccion imagen */}
        <section className={`imgBg w-full h-auto py-2 sm:h-[50px] md:w-[50%] md:h-full lg:w-[60%] overflow-hidden flex justify-start items-center ${isPar(item.id) ? 'justify-end' : 'justify-start'} relative`}>
          <div style={isPar(item.id) ? overlayStyleLeft : overlayStyleRight} className='absolute top-0 bottom-0 left-0 right-0 w-full h-full z-10' />
          <img
            src={imgBg} alt='logo cxPeriment'
            className={`bgCustomerCards h-full w-full hidden sm:block object-contain md:object-cover object-center lg:object-left opacity-40 transform relative  ${isPar(item.id) ? '-scale-x-100' : ''}`}
          />
          <h2 className={`absolute w-full h-auto text-center md:w-[100px] lg:w-[130px] xl:w-[200px] ${isPar(item.id) ? 'md:mr-[50px] lg:mr-[90px] xl:mr-[70px] 2xl:mr-[120px]' : 'md:ml-[65px] lg:ml-[90px] xl:ml-[70px] 2xl:ml-[120px]'} font-titulo font-[700] text-[20px] md:text-[17px] lg:text-[17px] xl:text-[31px] 2xl:text-4xl text-textPurple leading-none`}>
            {item.titulo}
          </h2>
        </section>
      </section>
    </>

  )
}

export default CardContenido
