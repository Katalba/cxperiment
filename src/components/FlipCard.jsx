import Title from './Title'
import BotonBase from './BotonBase'

const FlipCard = () => {
  return (
    <section className='flipCard group w-[441px] h-[441px] [perspective:1000px]'>
      <div className='cardService relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        <div className='cardFront absolute inset-0  border-2 rounded-t-[100px] rounded-tr-[100px] rounded-b-[0] w-full h-full bg-verdeTurk [backface-visibility: visible] flex flex-col justify-center items-center'>
          <div className='w-[305px] h-[60]'>
            <Title name='Customer Analysis' />
            <p className='text-[18px] text-whiteWi mt-[30px]'>Conoce a tus clientes desde una perspectiva profunda y significativa.</p>
          </div>
        </div>
        <div className='cardBack absolute inset-0  border-2 rounded-t-[50px] rounded-tr-[50px] rounded-b-[0] rounded-l-[50px] w-full h-full bg-whiteWi [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center'>
          <div className='w-[305px] h-[60] '>
            <p className='text-[18px] text-purpleBal mb-[50px]'>Quiero ayudarte a comprender las necesidades, expectativas y deseos de tus clientes, y así impulsar tu crecimiento y ventaja competitiva en el mercado.</p>
            <BotonBase name='¿Comenzamos?' clase='botonWhite' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlipCard
