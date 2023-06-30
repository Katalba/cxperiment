import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import BotonBase from './BotonBase'
import { useFetchForm } from '../hook/useFetchForm'
import Loader from './Loader'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const FormContacto = () => {
  const [loader, setLoader] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [opciones, setOpciones] = useState('')
  const [mensaje, setMensaje] = useState('')

  // control del error
  const [errors, setErrors] = useState({})

  // control de mensaje y modal
  // const [successMessage, setSuccessMessage] = useState({})
  // const [showModal, setShowModal] = useState(false)

  const mailUser = 'info.cxperiment@gmail.com'
  // const mailUser = 'guillermoneculqueo@gmail.com'

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

  const handleReset = () => {
    setName('')
    setEmail('')
    setTelefono('')
    setEmpresa('')
    setOpciones('')
    setMensaje('')
    setErrors({})
  }

  // const handleCloseModal = () => {
  //   setSuccessMessage({})
  //   setShowModal(false)
  //   handleReset()
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensajeUsuario = {
      name,
      message: mensaje,
      email,
      telefono,
      empresa,
      opciones,
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
    if (!opciones || opciones === 'Selecciona una servicio') {
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
      setLoader(true)
      useFetchForm(mailUser, mensajeUsuario)
        .then((response) => {
          setLoader(false)
          if (response.message === 'The form was submitted successfully.') {
            toast.success('Mensaje enviado, me pondre en contacto contigo a la brevedad')
          } else if (response.message === 'This form needs Activation. We\'ve sent you an email containing an \'Activate Form\' link. Just click it and your form will be actived!') {
            toast.warning('Necesita activar el formulario, se le ha enviado un email con un enlace para activarlo')
          } else {
            toast.error('Ocurrio un error al enviar el mensaje')
          }

          handleReset()
        })
        .catch((error) => {
          if (error.message === 'Failed to fetch') {
            toast.error('Ups!!! algo salio mal, intentalo mas tarde')
          } else {
            toast.error(error.message)
          }

          handleReset()
        })
        .finally(() => {
          setTimeout(() => {
            setLoader(false)
          }, 6000)
        })
    }
  }

  return (
    <section className='card-scroll w-full xl:w-full xl:max-w-[600px] flex flex-col justify-center items-center gap-2'>

      <form
        onSubmit={handleSubmit}
        className='w-full h-auto md:w-[80%] lg:w-full xl:w-full xl:h-auto bg-bgForm rounded-lg px-5 md:px-5 lg:px-0 xl:px-8 py-14 flex flex-col justify-center items-center gap-5 lg:gap-6 xl:gap-7 border-[.5px] text-[16px] md:text-[14px] lg:text-[14px] xl:text-[18px]'
        style={{ boxShadow: '5px 5px 10px #d4d4d4,-5px -5px 10px #ffffff' }}
      >
        <div className='w-full lg:w-[92%] xl:w-full flex flex-col md:flex-row md:flex-nowrap gap-4 xl:gap-5 lg:gap-3'>
          <label htmlFor='name' className='md:w-1/2 flex flex-col gap-2 font-titulo font-[600] text-textPurple leading-[1.5rem]'>
            Nombre
            <input
              type='text' name='name' id='name'
              value={name}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-lg font-parrafo font-[400] outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 border-[.5px] ${errors.name ? 'border-2 border-red-600 focus:ring-0' : ''}`}
              style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
              placeholder='Nombre'
            />
            {errors.name && (<p className='text-red-500 font-parrafo font-[400] w-full'>{errors.name}</p>)}
          </label>
          <label htmlFor='email' className='md:w-1/2 flex flex-col gap-2 font-titulo font-[600] text-textPurple leading-[1.5rem]'>
            Email
            <input
              type='email' name='email' id='email'
              value={email}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-lg font-parrafo font-[400] outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 border-[.5px] ${errors.email ? 'border-2 border-red-600 focus:ring-0' : ''}`}
              style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
              placeholder='Email'
            />
            {errors.email && (<p className='text-red-500 font-parrafo font-[400] w-full'>{errors.email}</p>)}
          </label>
        </div>

        <div className='w-full lg:w-[92%] xl:w-full flex flex-col md:flex-row md:flex-nowrap gap-4 xl:gap-5 lg:gap-3'>
          <label htmlFor='telefono' className='md:w-1/2 flex flex-col gap-2 font-titulo font-[600] text-textPurple leading-[1.5rem]'>
            Teléfono
            <input
              type='text' name='telefono' id='telefono'
              value={telefono}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-lg font-parrafo font-[400] outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 border-[.5px] ${errors.telefono ? 'border-2 border-red-600 focus:ring-0' : ''}`}
              style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
              placeholder='Teléfono'
            />
            {errors.telefono && (<p className='text-red-500 font-parrafo font-[400] w-full'>{errors.telefono}</p>)}
          </label>
          <label htmlFor='empresa' className='md:w-1/2 flex flex-col gap-2 font-titulo font-[600] text-textPurple leading-[1.5rem]'>
            Empresa
            <input
              type='text' name='empresa' id='empresa'
              value={empresa}
              onChange={handleInputChange}
              className={`p-3 lg:p-3 xl:p-5 rounded-lg font-parrafo font-[400] outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 border-[.5px] ${errors.empresa ? 'border-2 border-red-600 focus:ring-0' : ''}`}
              style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
              placeholder='Empresa'
            />
            {errors.empresa && (<p className='text-red-500 font-parrafo font-[400] w-full'>{errors.empresa}</p>)}
          </label>
        </div>

        <div className='w-full lg:w-[92%] xl:w-full flex flex-row flex-nowrap gap-5'>
          <label htmlFor='opciones' className='w-full flex flex-col gap-2 font-titulo font-[600] text-textPurple leading-[1.5rem] relative'>Opciones de consulta
            <div className='w-full h-full relative'>
              <select
                id='opciones' name='opciones'
                value={opciones}
                onChange={handleInputChange}
                className={`w-full p-3 lg:p-3 xl:p-5 rounded-lg font-parrafo font-[400] bg-whiteWi outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 appearance-none inputBgCard relative border-[.5px] 
              ${errors.opciones ? 'border-2 border-red-600 focus:ring-0' : ''}`}
                style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
              >
                <option value=''>Selecciona una servicio</option>
                <option value='opcion1'>Customer Research</option>
                <option value='opcion2'>Customer Analysis</option>
                <option value='opcion3'>Customer Insights</option>
              </select>
              <div className='absolute w-auto h-full flex items-center justify-center bottom-0 right-0 px-2 pointer-events-none'>
                {/* Reemplazar 'IconComponent' con el icono deseado */}
                <IoChevronDown className={`w-5 h-5  ${errors.opciones ? 'text-red-500 ' : 'text-verdeTurk'} `} />
              </div>
            </div>
            {errors.opciones && (<p className='text-red-500 font-parrafo font-[400] w-full'>{errors.opciones}</p>)}
          </label>
        </div>

        <label htmlFor='mensaje' className='w-full lg:w-[92%] xl:w-full  flex flex-col gap-2 font-titulo font-[600] text-textPurple leading-[1.5rem]'>
          Mensaje
          <textarea
            name='mensaje' id='mensaje'
            value={mensaje}
            onChange={handleInputChange}
            className={`block p-3 lg:p-3 xl:p-4 w-full h-[140px] rounded-lg  outline-none shadow-sm focus:ring focus:ring-verdeTurk focus:ring-opacity-100 font-parrafo font-[400] resize-none border-[.5px]  ${errors.mensaje ? 'border-2 border-red-600 focus:ring-0' : ''}`}
            placeholder='Ingrese su mensaje'
            style={{ boxShadow: '5px 5px 10px #dcdbe4,-5px -5px 10px #ffffff' }}
          />
          {errors.mensaje && (<p className='text-red-500 font-parrafo font-[400] w-full'>{errors.mensaje}</p>)}
        </label>
        <div className='w-full flex flex-row flex-nowrap justify-center items-center mt-6'>
          {loader ? <div className='font-titulo rounded-md transition-all duration-300 ease-in-out flex flex-row flex-nowrap items-center justify-start gap-2 py-[10px] px-[24px] md:py-[16px] md:px-[32px] xl:px-[36px] xl:py-[24px] xl:text-[18px]'><Loader /></div> : <BotonBase type='submit' name='Enviar mensaje' clase='botonVerde text-[16px] md:text-[16px] font-[600] xl:font-[700]' />}
        </div>
      </form>

      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        className='toastify font-titulo font-[600] text-md lg:text-lg'
      />
    </section>
  )
}

export default FormContacto
