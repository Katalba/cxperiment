import FlipCard from './FlipCard'

const FlipCardComp = () => {
  return (
  // <section className='w-full h-auto flex flex-col max-w-[1650px] lg:flex-row justify-center items-center overflow-hidden py-10 gap-5 lg:gap-5'>
    <section id='servicios' className='contenedor w-[1200px] h-[441px] flex'>
      <FlipCard
        bgColor='purpleBal'
        textFront='Conociendo realmente a tu cliente'
        textBack='Conoce a tus clientes desde una perspectiva profunda y significativa'
      />
      <FlipCard
        bgColor='verdeTurk'
        textFront='Conociendo realmente a tu cliente'
        textBack='Conoce a tus clientes desde una perspectiva profunda y significativa'
      />
      <FlipCard
        bgColor='purpleBal'
        textFront='Conociendo realmente a tu cliente'
        textBack='Conoce a tus clientes desde una perspectiva profunda y significativa'
      />
    </section>
  )
}

export default FlipCardComp
