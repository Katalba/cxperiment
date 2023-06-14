import React from 'react'
import { IoCall, IoLocation, IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import FormContacto from './FormContacto'

const Contacto = () => {
  return (
    <section className='contenedoCard bg-whiteWi w-full max-w-[1650px] h-auto flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:px-5 lgpy-20 px-4 py-20 gap-5'>
      <section className='contenidoContacto w-full lg:w-1/2 p-2 flex flex-col gap-4 bg-slate-400'>
        <h3>Contactanos</h3>
        <h2>Conectemos hoy</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem voluptas maiores harum iusto enim aperiam, necessitatibus nisi qui velit fuga veniam est? Architecto, beatae quis perspiciatis magni blanditiis nisi eveniet!</p>
        <Link className='flex flex-row justify-start items-center gap-2'>
          <IoMail />
          contacto@cxperiment.com
        </Link>
        <Link className='flex flex-row justify-start items-center gap-2'>
          <IoCall />
          +54 9 1155555555
        </Link>
        <Link className='flex flex-row justify-start items-center gap-2'>
          <IoLocation />
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
