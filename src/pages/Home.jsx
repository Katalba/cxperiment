import CardPrecentacion from '../components/CardPrecentacion'
import Nav from '../components/Nav'
import SectionCustomer from '../components/SectionCustomer'
import HomeBanner from '../components/HomeBanner'

const Home = () => {
  const algo = 'algo'
  console.log(algo)
  return (
    <>
      <Nav />
      <HomeBanner />
      <CardPrecentacion />
      <SectionCustomer />
    </>
  )
}

export default Home
