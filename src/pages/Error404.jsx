import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen bg-purpleBal'>
        <div id='error-page' className='w-auto h-auto flex flex-col items-center justify-center gap-5'>
          <h1 className='lg:text-6xl font-bold text-2xl font-parrafo text-whiteWi'>Oops!</h1>
          <p className='text-xl text-whiteWi font-parrafo'>
            Ruta no encontrada, disculpe
          </p>
          <p className='text-3xl text-whiteWi font-parrafo'>
            error 404
          </p>
          <div className='mt-4'>
            <Link
              to='/'
              className='botonVerde px-5 py-2 font-parrafo text-sm rounded-md transition duration-300 ease-in-out'
            >
              vuelve al home
            </Link>
          </div>
        </div>
      </div>
    </>

  )
}

export default Error404
