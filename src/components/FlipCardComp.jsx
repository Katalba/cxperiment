import FlipCard from './FlipCard'

const FlipCardComp = () => {
  return (
    <section className='w-[1200px] h-[441px] flex'>
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
