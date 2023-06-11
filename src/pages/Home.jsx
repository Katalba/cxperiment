import BotonBase from '../components/BotonBase'

const Home = () => {
  const algo = 'algo'
  console.log(algo)
  return (
    <div className='w-full h-screen flex flex-col bg-purple-300 justify-center items-center gap-5'>
      <h1 className=' text-4xl text-white font-parrafo font-[700]'>CXperiment</h1>
      <BotonBase name='enviar1' clase='botonVerde' />
      <BotonBase name='enviar2' clase='botonWhite' />
    </div>
  )
}

export default Home
