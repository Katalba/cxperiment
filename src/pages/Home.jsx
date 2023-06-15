import CardPrecentacion from '../components/CardPrecentacion'
import Nav from '../components/Nav'
import SectionCustomer from '../components/SectionCustomer'
import HomeBanner from '../components/HomeBanner'
import FlipCard from '../components/FlipCard'

const Home = () => {
  const algo = 'algo'
  console.log(algo)
  return (
    <>
      <Nav />
      <HomeBanner />
      <CardPrecentacion />
      <FlipCard />
      <SectionCustomer />
    </>
  )
}

export default Home
