import React from 'react'
import { IoCall, IoLocation, IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import BotonBase from './BotonBase'

const Contacto = () => {
  return (
    <section className='contenedoCard bg-whiteWi w-full max-w-[1650px] h-auto flex flex-col justify-center items-center p-4 lg:flex-row lg:gap-4 lg:p-5'>
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
        <section>
          <form action='' className='xl:w-[620px] xl:h-auto bg-bgForm rounded-lg px-7 py-14 flex flex-col gap-7'>
            <div className='w-full flex flex-row flex-nowrap gap-5'>
              <label htmlFor='name' className='w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
                Nombre
                <input type='text' name='name' id='name' className='p-5 rounded-[50px] font-parrafo font-[400] border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100' placeholder='Nombre' />
              </label>
              <label htmlFor='email' className='w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
                Email
                <input type='email' name='email' id='email' className='p-5 rounded-[50px] font-parrafo font-[400] border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100' placeholder='Email' />
              </label>
            </div>

            <div className='w-full flex flex-row flex-nowrap gap-5'>
              <label htmlFor='telefono' className='w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
                Teléfono
                <input type='text' name='telefono' id='telefono' className='p-5 rounded-[50px] font-parrafo font-[400] border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100' placeholder='Teléfono' />
              </label>
              <label htmlFor='empresa' className='w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
                Empresa
                <input type='text' name='empresa' id='empresa' className='p-5 rounded-[50px] font-parrafo font-[400] border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100' placeholder='Empresa' />
              </label>
            </div>

            <div className='w-full flex flex-row flex-nowrap gap-5'>
              <label for='opciones' className='w-full flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>Opciones de consulta
                <select id='opciones' name='opciones' className='w-full p-5 rounded-[50px] font-parrafo font-[400] text-lg bg-whiteWi border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100'>
                  <option value=''>Servicio de customer research</option>
                  <option value='opcion1'>Opción 1</option>
                  <option value='opcion2'>Opción 2</option>
                  <option value='opcion3'>Opción 3</option>
                </select>
              </label>
            </div>

            <label htmlFor='mensaje' className='w-full flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
              Mensaje
              <textarea
                name='mensaje' id='mensaje'
                className='block w-full h-[140px] rounded-xl border-none outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 p-4 font-parrafo font-[400] text-lg resize-none'
                placeholder='Ingrese su mensaje'
              />
            </label>
            <div className='w-full flex flex-row flex-nowrap gap-5'>
              <BotonBase name='enviar mensaje' clase='botonVerde' />
            </div>
          </form>
        </section>
      </section>
    </section>

  )
}

export default Contacto
