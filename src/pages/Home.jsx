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

  const datosSeo = { title: 'Home | CXperiment', description: 'cxperiment consultora, experiencia de usuario personalizada', name: 'guillermo neculqueo, katherine castillo', type: 'websyte', linkImg: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1687479824/consultora/home_phwpkf.png', urlWeb: 'https://www.cxperiment.com' }

  return (
    <>
      <Helmet>
        {/* metadatos estandard */}
        <title>{datosSeo.title}</title>
        <link rel='canonical' href='www.cxperiment.com' />
        <meta name='name' content={datosSeo.title} />
        <meta name='description' content={datosSeo.description} />
        <meta name='author' content='guille.nec' />
        <meta name='audience' content='all' />
        <meta name='keywords' content='CXperiment, customer experience, Experiencia de cliente, asesoria personalizada, ayuda profesional' />
        <meta name='image' content={datosSeo.linkImg} />
        <meta name='language' content='es' />

        <meta name='robots' content='index.follow' />
        <meta name='googlebot' content='index, follow' />

        {/* facebook tags */}
        <meta property='og:title' content={datosSeo.title} />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='CXperiment.com' />
        <meta property='og:image' content={datosSeo.linkImg} />
        <meta property='og:url' content={datosSeo.urlWeb} />
        <meta property='og:description' content={datosSeo.description} />

        {/* taggs twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@CXperiment' />
        <meta name='twitter:title' content={datosSeo.title} />
        <meta name='twitter:description' content={datosSeo.description} />
        <meta property='og:url' content={datosSeo.urlWeb} />
        <meta name='twitter:creator' content={datosSeo.name} />
        <meta property='og:image' content={datosSeo.linkImg} />

        {/* <!-- Geo tags --> */}
        {/* <meta name='ICBM' content='latitude, longitude' />
        <meta name='geo.position' content='latitude;longitude' />
        <meta name='geo.region' content='country[-state]' />
        <meta name='geo.placename' content='city/town' /> */}

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
