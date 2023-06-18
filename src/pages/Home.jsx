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
    <div className='w-full min-h-screen h-auto flex flex-col bg-white justify-start items-center relative'>
      <Nav />
      <HomeBanner />
      <section className='w-full h-auto flex flex-col bg-white justify-start items-center gap-10 lg:gap-20'>
        <CardPrecentacion />
        <Titulo titulo='Servicios' />
        <FlipCardComp />
        <Titulo titulo='Descubrí los beneficios de trabajar juntos' />
        <CardListContenido />
        <QuoteSection />
        <Contacto />
        <Footer />
      </section>
    </div>
  )
}

export default Home
