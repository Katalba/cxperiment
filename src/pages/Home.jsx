import CardPrecentacion from '../components/CardPrecentacion'
import Nav from '../components/Nav'
import HomeBanner from '../components/HomeBanner'
import Contacto from '../components/Contacto'
import CardListContenido from '../components/CardListContenido'
import Titulo from '../components/Titulo'
import QuoteSection from '../components/QuoteSection'
import FlipCardComp from '../components/FlipCardComp'

const Home = () => {
  return (
    <div className='w-full min-h-screen h-auto flex flex-col bg-white justify-start items-center'>
      <Nav />
      <HomeBanner />
      <CardPrecentacion />
      <Titulo titulo='Servicios' />
      <FlipCardComp />
      <Titulo titulo='Descubrí los beneficios de trabajar juntos' />
      <CardListContenido />
      <QuoteSection />
      <Contacto />
    </div>
  )
}

export default Home
