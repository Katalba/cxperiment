import React from 'react'
import { FcGoogle, FcHome, FcPhoneAndroid } from 'react-icons/fc'
import { FaWhatsapp } from 'react-icons/fa'

const ContactosClient = () => {
  const mail = 'info.cxperiment@gmail.com'
  const watsapp = '541141568854'
  const ubicacion = 'Buenos Aires, Argentina'

  const handleEmailClick = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${mail}`
  }

  const handlePhoneClick = (e) => {
    e.preventDefault()
    window.location.href = `https://wa.me/${watsapp}`
  }

  const handleLocationClick = (e) => {
    e.preventDefault()
    window.location.href = `https://www.google.com/maps?q=${ubicacion}`
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
        <button className='whatsapp px-4 py-3 bg-verdeTurk rounded-3xl text-whiteWi flex flex-row justify-center items-center flex-nowrap gap-2'>Conecta <FaWhatsapp className='text-2xl text-whiteWi' /> </button>
      </div>
    </section>
  )
}

export default ContactosClient
