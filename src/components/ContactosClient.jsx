import React from 'react'
import { FcGoogle, FcHome, FcPhoneAndroid } from 'react-icons/fc'
import { FaWhatsapp } from 'react-icons/fa'
import BotonBase from './BotonBase'

const ContactosClient = () => {
  const mail = 'info.cxperiment@gmail.com'
  const watsapp = '541141568854'
  const ubicacion = 'Buenos Aires, Argentina'

  const handleEmailClick = (e) => {
    e.preventDefault()
    window.open(`mailto:${mail}`, '_blank')
  }

  const handlePhoneClick = (e) => {
    e.preventDefault()
    window.open(`https://wa.me/${watsapp}`, '_blank')
  }

  const handleLocationClick = (e) => {
    e.preventDefault()
    window.open(`https://www.google.com/maps?q=${ubicacion}`, '_blank')
  }

  return (
    <section className='contenidoContacto card-scroll w-full lg:w-1/2 flex flex-col gap-6 p-6'>
      <div className='w-full h-auto flex flex-col gap-4'>
        <h3 className='font-parrafo text-purpleBal  font-[700] text-lg uppercase'>Contactanos</h3>
        <h2 className='font-titulo text-purpleBal font-[700] text-5xl'>Conectemos hoy</h2>
        <p className='font-parrafo font-[400] text-lg text-[#333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptas maiores harum iusto enim aperiam, necessitatibus nisi qui velit fuga veniam est? Architecto, beatae quis perspiciatis magni blanditiis nisi eveniet!</p>
      </div>
      <div className='w-full h-auto flex flex-col gap-4'>
        <a
          href='#'
          className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'
          onClick={handleEmailClick}
        >
          <FcGoogle className='text-2xl' />
          contacto@cxperiment.com
        </a>
        <a
          href='#'
          onClick={handlePhoneClick}
          className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'
        >
          <FcPhoneAndroid className='text-2xl' />
          +54 11 41568854
        </a>
        <a
          href='#'
          onClick={handleLocationClick}
          className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'
        >
          <FcHome className='text-2xl' />
          Buenos Aires, Argentina
        </a>
      </div>
      <div className='w-full h-auto flex justify-start items-center'>
        <BotonBase
          func={handlePhoneClick}
          name='Conecta'
          clase='botonVerde font-titulo font-[600] font-md lg:text-lg '
        >
          <FaWhatsapp className='text-2xl' />
        </BotonBase>
      </div>
    </section>
  )
}

export default ContactosClient
