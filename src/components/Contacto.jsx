import FormContacto from './FormContacto'
import ContactosClient from './ContactosClient'
import { useGeneralContext } from '../context/GeneralContext'

const Contacto = () => {
  const { contactoRef } = useGeneralContext()
  return (
    <section ref={contactoRef} id='contacto' className='contenedor bg-whiteWi w-full max-w-[1650px] h-auto flex flex-col justify-center items-start lg:flex-row lg:gap-4  gap-5'>

      <section className='contenidoContacto card-scroll w-full h-full lg:w-1/2 flex flex-col justify-center items-center gap-6'>
        <ContactosClient />
      </section>

      {/* formuario */}
      <section className='contenidoFormulario w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center'>
        <FormContacto />
      </section>
    </section>

  )
}

export default Contacto
