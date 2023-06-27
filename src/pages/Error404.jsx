import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const Error404 = () => {
  const datosSeo = { title: 'Error404', description: 'Ruta no encontrada', name: 'Katherine Cantillo', type: 'websyte', linkImg: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1687479824/consultora/home_phwpkf.png', urlWeb: 'https://www.cxperiment.com' }

  return (
    <>
      <Helmet>
        <title>{datosSeo.title}</title>
        <link rel='canonical' href='www.cxperiment.com' />
        <meta name='name' content={datosSeo.title} />
        <meta name='description' content={datosSeo.description} />

        {/* facebook tags */}
        <meta property='og:title' content={datosSeo.title} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={datosSeo.linkImg} />
        <meta property='og:url' content={datosSeo.urlWeb} />
        <meta property='og:description' content={datosSeo.description} />

        {/* taggs twitter */}
        <meta name='twitter:creator' content={datosSeo.name} />
        <meta name='twitter:card' content={datosSeo.type} />
        <meta name='twitter:title' content={datosSeo.title} />
        <meta name='twitter:description' content={datosSeo.description} />
      </Helmet>

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
