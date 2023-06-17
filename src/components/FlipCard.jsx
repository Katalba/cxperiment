import React from 'react'
import Title from './Title'
import BotonBase from './BotonBase'

FLIPCARD

const FlipCard = ({ bgColor, radiusFront, radiusBack, radiusImg, textFront, textBack, fcbImg, titulo }) => {
  const cardBg = `bg-${bgColor}`

  return (
    <section className='flipCard group w-[381px] h-[381px] lg:h-[441px] [perspective:1000px]'>
      <div className='cardService relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        <div className={`cardFront ${cardBg} absolute inset-0  border-2 ${radiusFront} w-full h-full [backface-visibility: visible] flex flex-col justify-center items-center`}>
          <div className='w-[305px] h-[208px]'>
            <Title name={`${titulo}`} />
            <p className='text-[18px] text-whiteWi mt-[30px] text-center'>{textFront}</p>
          </div>
        </div>
        <div className={`cardBack ${cardBg} absolute inset-0  border-2 ${radiusBack} w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center`}>
          <img className={`absolute w-full h-full object-fill ${radiusImg}`} src={`${fcbImg}`} alt='imagenServicio' />
          <div className='w-[305px] h-[60] absolute text-center'>
            <p className='text-[18px] text-whiteWi mb-[50px] font-semibold'>{textBack}</p>
            <BotonBase name='Más info' clase='botonVerde' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlipCard
