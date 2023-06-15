import { useState } from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'
import BotonBase from './BotonBase'

const FormContacto = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [opciones, setOpciones] = useState('')
  const [mensaje, setMensaje] = useState('')

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'telefono':
        setTelefono(value)
        break
      case 'empresa':
        setEmpresa(value)
        break
      case 'opciones':
        setOpciones(value)
        break
      case 'mensaje':
        setMensaje(value)
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensajeUsuario = {
      name,
      email,
      telefono,
      empresa,
      opciones,
      mensaje,
      fecha: new Date()
    }

    const validationErrors = {}

    // validamod el nombre
    if (!name) {
      validationErrors.name = 'Se requiere un nombre'
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      validationErrors.name = 'El nombre solo puede contener letras'
    }
    // validamos el email
    if (!email) {
      validationErrors.email = 'Se requiere un email'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validationErrors.email = 'El email no es valido'
    }
    // validamos el telefono
    if (!telefono) {
      validationErrors.telefono = 'Se requiere un telefono'
    } else if (!/^[0-9]+$/.test(telefono)) {
      validationErrors.telefono = 'El telefono solo puede contener numeros'
    } else if (!/^\d{4}\d{6}$/.test(telefono)) {
      validationErrors.telefono = '⌨ forma no valida (4 caracteristica) + (6 numero) , ejemplo: 2944123456'
    }
    // validamos empres
    if (!empresa) {
      validationErrors.empresa = 'Se requiere una empresa'
    }
    // validamos opciones
    if (!opciones || opciones === 'Servicio de customer research') {
      validationErrors.opciones = 'Se requiere una opcion'
    }
    // validamos mensaje
    if (!mensaje) {
      validationErrors.mensaje = 'Se requiere un mensaje'
    } else if (mensaje.length < 10) {
      validationErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    } else if (mensaje.length > 500) {
      validationErrors.mensaje = 'El mensaje debe tener menos de 500 caracteres'
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else if (Object.keys(validationErrors).length === 0) {
      setErrors({})
      console.log(mensajeUsuario)
    }
  }

  return (
    <section className='w-full flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-full h-auto md:w-[80%] lg:w-full xl:w-[620px] xl:h-auto bg-bgForm rounded-lg px-5 md:px-5 lg:px-3 xl:px-7 py-14 flex flex-col gap-4 lg:gap-6 xl:gap-7'>
        <div className='w-full flex flex-col md:flex-row md:flex-nowrap gap-4 xl:gap-5 lg:gap-3'>
          <label htmlFor='name' className='md:w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
            Nombre
            <input
              type='text' name='name' id='name'
              value={name}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 ${errors.name ? 'border-2 border-red-600 focus:ring-0' : ''}`} placeholder='Nombre'
            />
            {errors.name && (<p className='text-red-500 font-parrafo font-[400] text-lg w-full'>{errors.name}</p>)}
          </label>
          <label htmlFor='email' className='md:w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
            Email
            <input
              type='email' name='email' id='email'
              value={email}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 ${errors.email ? 'border-2 border-red-600 focus:ring-0' : ''}`} placeholder='Email'
            />
            {errors.email && (<p className='text-red-500 font-parrafo font-[400] text-lg w-full'>{errors.email}</p>)}
          </label>
        </div>

        <div className='w-full flex flex-col md:flex-row md:flex-nowrap gap-4 xl:gap-5 lg:gap-3'>
          <label htmlFor='telefono' className='md:w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
            Teléfono
            <input
              type='text' name='telefono' id='telefono'
              value={telefono}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 ${errors.telefono ? 'border-2 border-red-600 focus:ring-0' : ''}`} placeholder='Teléfono'
            />
            {errors.telefono && (<p className='text-red-500 font-parrafo font-[400] text-lg w-full'>{errors.telefono}</p>)}
          </label>
          <label htmlFor='empresa' className='md:w-1/2 flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
            Empresa
            <input
              type='text' name='empresa' id='empresa'
              value={empresa}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 ${errors.empresa ? 'border-2 border-red-600 focus:ring-0' : ''}`} placeholder='Empresa'
            />
            {errors.empresa && (<p className='text-red-500 font-parrafo font-[400] text-lg w-full'>{errors.empresa}</p>)}
          </label>
        </div>

        <div className='w-full flex flex-row flex-nowrap gap-5'>
          <label htmlFor='opciones' className='w-full flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem] relative'>Opciones de consulta
            <select
              id='opciones' name='opciones'
              value={opciones}
              onChange={handleInputChange}
              className={`w-full p-3 lg:p-3 xl:p-5 rounded-[50px] font-parrafo font-[400] text-lg bg-whiteWi outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 appearance-none inputBgCard
              ${errors.opciones ? 'border-2 border-red-600 focus:ring-0' : ''}`}
            >
              <option value=''>Servicio de customer research</option>
              <option value='opcion1'>Opción 1</option>
              <option value='opcion2'>Opción 2</option>
              <option value='opcion3'>Opción 3</option>
            </select>
            <div className={`absolute ${errors.opciones ? 'bottom-8 right-2' : 'bottom-0 right-2'} w-[50px] h-[68px] flex items-center px-2 pointer-events-none`}>
              {/* Reemplazar 'IconComponent' con el icono deseado */}
              <IoArrowForwardOutline className={`w-5 h-5  ${errors.opciones ? 'text-red-500 ' : 'text-verdeTurk'} `} />
            </div>
            {errors.opciones && (<p className='text-red-500 font-parrafo font-[400] text-lg w-full'>{errors.opciones}</p>)}
          </label>
        </div>

        <label htmlFor='mensaje' className='w-full flex flex-col gap-1 font-titulo font-[600] text-textPurple text-lg leading-[1.5rem]'>
          Mensaje
          <textarea
            name='mensaje' id='mensaje'
            value={mensaje}
            onChange={handleInputChange}
            className={`block p-3 lg:p-3 xl:p-4 w-full h-[140px] rounded-xl  outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 font-parrafo font-[400] text-lg resize-none ${errors.mensaje ? 'border-2 border-red-600 focus:ring-0' : ''}`}
            placeholder='Ingrese su mensaje'
          />
          {errors.mensaje && (<p className='text-red-500 font-parrafo font-[400] text-lg w-full'>{errors.mensaje}</p>)}
        </label>
        <div className='w-full flex flex-row flex-nowrap gap-5'>
          <BotonBase type='submit' name='enviar mensaje' clase='botonVerde' />
        </div>
      </form>
    </section>
  )
}

export default FormContacto
