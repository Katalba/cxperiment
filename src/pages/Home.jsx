import CardPrecentacion from '../components/CardPrecentacion'
import Nav from '../components/Nav'
import SectionCustomer from '../components/SectionCustomer'

const Home = () => {
  const algo = 'algo'
  console.log(algo)
  return (
    <div className='w-full min-h-screen h-auto flex flex-col bg-purple-300 justify-start items-center gap-5'>
      <Nav />
      <CardPrecentacion />
      <SectionCustomer />
    </div>
  )
}

export default Home
