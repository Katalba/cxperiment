import CardPrecentacion from '../components/CardPrecentacion'
import Nav from '../components/Nav'
import HomeBanner from '../components/HomeBanner'
import Contacto from '../components/Contacto'
import CardListContenido from '../components/CardListContenido'
import Titulo from '../components/Titulo'
import QuoteSection from '../components/QuoteSection'
import FlipCardComp from '../components/FlipCardComp'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  // useSeo({ title: 'CXperiment' })

  const datosSeo = { title: 'cxperiment2.0', description: 'cxperiment consultora, experiencia de usuario personalizada', name: 'guillermo neculqueo', type: 'article' }

  return (
    <>
      <Helmet>
        {/* metadatos estandard */}
        <title>{datosSeo.title}</title>
        <link rel='canonical' href='www.cxperiment.com' />
        <meta name='description' content={datosSeo.description} />

        {/* facebook tags */}
        <meta property='og:type' content={datosSeo.type} />
        <meta property='og:title' content={datosSeo.title} />'
        <meta property='og:description' content={datosSeo.description} />

        <meta property='og:title' content='Omiod website' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://www.omiod.com/gfx/favicon512.png' />
        <meta property='og:url' content='https://www.www.omiod.com' />

        {/* taggs twitter */}
        <meta name='twitter:creator' content={datosSeo.name} />
        <meta name='twitter:card' content={datosSeo.type} />
        <meta name='twitter:title' content={datosSeo.title} />
        <meta name='twitter:description' content={datosSeo.description} />

      </Helmet>
      <div className='w-full min-h-screen h-auto flex flex-col bg-white justify-start items-center relative z-1'>
        <Nav />
        <HomeBanner />
        <section className='w-full max-w-[1440px] h-auto flex flex-col bg-white justify-start items-center gap-10 lg:pb-[80px] lg:gap-20 px-5 md:px-8 lg:px-10 xl:px-32 2xl:px-0 overflow-hidden'>
          <CardPrecentacion />
        </section>
        <div className='separador w-full h-10 lg:h-20' />
        <Titulo titulo='Servicios' />
        <FlipCardComp />
        <section className='w-full max-w-[1440px] h-auto flex flex-col bg-white justify-start items-center gap-10 lg:gap-20 lg:pt-[80px] px-5 md:px-8 lg:px-10 xl:px-32 2xl:px-0 overflow-hidden'>
          <Titulo titulo='Descubrí los beneficios de trabajar juntos' />
          <CardListContenido />
        </section>

        {/* separador margen */}
        <div className='separador w-full h-10 lg:h-20' />

        {/* banner 2 */}
        <QuoteSection />
        <div className='separador w-full h-10 lg:h-20' />

        <section className='w-full max-w-[1440px] h-auto flex flex-col bg-white justify-start items-center gap-10 lg:gap-20 px-5 md:px-8 lg:px-10 xl:px-32 2xl:px-0 overflow-hidden'>
          <Contacto />
        </section>
        <div className='separador w-full h-10 lg:h-20' />
        <Footer />
      </div>
    </>
  )
}

export default Home
