import React from 'react'
import FormContacto from './FormContacto'
import ContactosClient from './ContactosClient'

const Contacto = () => {
  return (
    <section id='contacto' className='contenedor bg-whiteWi w-full max-w-[1650px] h-auto flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:px-5 lgpy-20 px-4 py-20 gap-5'>

      <ContactosClient />
      {/* formuario */}
      <section className='contenidoFormulario w-full lg:w-1/2 p-2 flex flex-col gap-4'>
        <FormContacto />
      </section>
    </section>

  )
}

export default Contacto
