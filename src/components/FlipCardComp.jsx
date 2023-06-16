import FlipCard from './FlipCard'

const FlipCardComp = () => {
  return (
    <section className='w-full h-auto flex flex-col max-w-[1650px] lg:flex-row justify-center items-center overflow-hidden py-10 gap-5 lg:gap-5'>
      <FlipCard
        bgColor='purpleBal'
        borderRadius='rounded-tr-[100px] rounded-l-[100px] rounded-t-[100px]'
        textFront='Conociendo realmente a tu cliente'
        textBack='Conoce a tus clientes desde una perspectiva profunda y significativa'
      />
      <FlipCard
        bgColor='verdeTurk'
        borderRadius='rounded-t-[100px] rounded-tr-[100px] rounded-b-[0]'
        textFront='Entiende a tu cliente en profundidad'
        textBack='Conoce a tus clientes desde una perspectiva profunda y significativa'
      />
      <FlipCard
        bgColor='purpleBal'
        borderRadius='rounded-tr-[100px] rounded-l-[100px] rounded-bl-lg-[100px]'
        textFront='Fidelicemos a tu cliente'
        textBack='Conoce a tus clientes desde una perspectiva profunda y significativa'
      />
    </section>
  )
}

export default FlipCardComp
