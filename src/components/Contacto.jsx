import React from 'react'
import { FcGoogle, FcHome, FcPhoneAndroid } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import FormContacto from './FormContacto'

const Contacto = () => {
  return (
    <section className='contenedoCard bg-whiteWi w-full max-w-[1650px] h-auto flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:px-5 lgpy-20 px-4 py-20 gap-5'>
      <section className='contenidoContacto w-full lg:w-1/2 flex flex-col gap-6 bg-orange-200 p-6'>
        <h3 className='font-parrafo font-[700] text-lg uppercase'>Contactanos</h3>
        <h2 className='font-titulo font-[700] text-5xl'>Conectemos hoy</h2>
        <p className='font-parrafo font-[400] text-lg text-[#333]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptas maiores harum iusto enim aperiam, necessitatibus nisi qui velit fuga veniam est? Architecto, beatae quis perspiciatis magni blanditiis nisi eveniet!</p>
        <Link className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'>
          <FcGoogle className='text-2xl' />
          contacto@cxperiment.com
        </Link>
        <Link className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'>
          <FcPhoneAndroid className='text-2xl' />
          +54 9 1155555555
        </Link>
        <Link className='flex flex-row justify-start items-center  font-parrafo font-[400] text-lg gap-2'>
          <FcHome className='text-2xl' />
          Buenos Aires, Argentina
        </Link>
      </section>

      {/* formuario */}
      <section className='contenidoFormulario w-full lg:w-1/2 p-2 flex flex-col gap-4'>
        <FormContacto />
      </section>
    </section>

  )
}

export default Contacto
