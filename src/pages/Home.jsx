import CardPrecentacion from '../components/CardPrecentacion'
import Nav from '../components/Nav'
import HomeBanner from '../components/HomeBanner'
import Contacto from '../components/Contacto'
import CardListContenido from '../components/CardListContenido'
import Titulo from '../components/Titulo'
import QuoteSection from '../components/QuoteSection'
import FlipCardComp from '../components/FlipCardComp'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full min-h-screen h-auto flex flex-col bg-white justify-start items-center relative z-1'>
      <Nav />
      <HomeBanner />
      <section className='w-full max-w-[1440px] h-auto flex flex-col bg-white justify-start items-center gap-10 lg:gap-20 px-5 md:px-8 lg:px-10 xl:px-32 2xl:px-0 overflow-hidden'>
        <CardPrecentacion />
        <Titulo titulo='Servicios' />
        <FlipCardComp />
        <Titulo titulo='Descubrí los beneficios de trabajar juntos' />
        <CardListContenido />
      </section>

      {/* separador margen */}
      <div className='separador w-full h-10 lg:h-20' />

      {/* banner 2 */}
      <QuoteSection />

      <section className='w-full max-w-[1440px] h-auto flex flex-col bg-white justify-start items-center gap-10 lg:gap-20 px-5 md:px-8 lg:px-10 xl:px-32 2xl:px-0 overflow-hidden'>
        <Contacto />
        <Footer />
      </section>
    </div>
  )
}

export default Home
