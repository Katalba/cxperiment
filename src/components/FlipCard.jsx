import Title from './Title'
import BotonBase from './BotonBase'
import { useEffect } from 'react'

const FlipCard = ({ objeto }) => {
  const { bgColor, radiusFront, radiusBack, radiusImg, textFront, textBack, fcbImg, titulo } = objeto

  const cardBg = `bg-${bgColor}`

  useEffect(() => {
    function rotateCard () {
      if (window.innerWidth <= 780) {
        const card = document.getElementById('flipCard')
        card.classList.toggle('flipped')
      }
    }

    const cardElement = document.getElementById('flipCard')
    cardElement.addEventListener('click', rotateCard)

    return () => {
      cardElement.removeEventListener('click', rotateCard)
    }
  }, [])

  return (
    <section className='flipCard group w-[190px] h-[190px] min-[450px]:w-[250px] min-[450px]:h-[250px] sm:w-[310px] sm:h-[310px] md:w-[200px] md:h-[200px] lg:w-[298px] lg:h-[298px] xl:w-[350px] xl:h-[350px] aspect-square p-0'>
      <div id='flipCard' className='cardService relative w-full h-full transition-all ease-in-out duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        <div className={`cardFront ${cardBg} absolute ${radiusFront} w-full h-full [backface-visibility: visible] flex flex-col justify-center items-center p-[13%]`}>
          <div className='w-full h-full p-2 flex flex-col justify-center items-center gap-4 overflow-hidden'>
            <Title name={`${titulo}`} />
            <p className='text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base text-whiteWi text-center'>{textFront}</p>
          </div>
        </div>
        <div className={`cardBack ${cardBg} absolute ${radiusBack} w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center overflow-hidden`}>
          <img className={`absolute w-full h-full object-fill ${radiusImg}`} src={`${fcbImg}`} alt='imagenServicio' />
          <div className='w-full h-full absolute text-center overflow-hidden p-[15%] flex flex-col justify-center items-center gap-4'>
            <p className='text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base text-whiteWi font-semibold'>{textBack}</p>
            <BotonBase name='Más info' clase='botonVerde' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlipCard
