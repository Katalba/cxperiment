import React from 'react'
import { FcGoogle, FcHome, FcPhoneAndroid } from 'react-icons/fc'

const ContactosClient = () => {
  const mail = 'guillermoneculqueo@gmail.com'
  const watsapp = '5492944396887'
  const ubicacion = 'Jacobacci, Rio Negro, Argentina'

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
      <h3 className='font-parrafo font-[700] text-lg uppercase'>Contactanos</h3>
      <h2 className='font-titulo font-[700] text-5xl'>Conectemos hoy</h2>
      <p className='font-parrafo font-[400] text-lg text-[#333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptas maiores harum iusto enim aperiam, necessitatibus nisi qui velit fuga veniam est? Architecto, beatae quis perspiciatis magni blanditiis nisi eveniet!</p>
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
        +54 9 1155555555
      </a>
      <a
        href='#'
        onClick={handleLocationClick}
        className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'
      >
        <FcHome className='text-2xl' />
        Buenos Aires, Argentina
      </a>
    </section>
  )
}

export default ContactosClient
