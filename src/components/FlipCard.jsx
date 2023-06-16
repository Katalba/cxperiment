import React from 'react'
import Title from './Title'
import BotonBase from './BotonBase'

const FlipCard = ({ bgColor, borderRadius, textFront, textBack }) => {
  const cardBg = `bg-${bgColor}`

  return (
    <section className='flipCard group w-[80%] h-[80%] lg:h-[441px] [perspective:1000px]'>
      <div className='cardService relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        <div className={`cardFront ${cardBg} absolute inset-0  border-2 ${borderRadius} w-full h-full [backface-visibility: visible] flex flex-col justify-center items-center`}>
          <div className='w-[305px] h-[60]'>
            <Title name='Customer Analysis' />
            <p className='text-[18px] text-whiteWi mt-[30px] text-center'>{textFront}</p>
          </div>
        </div>
        <div className={`cardBack ${cardBg} absolute inset-0  border-2 ${borderRadius} w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center`}>
          <div className='w-[305px] h-[60] '>
            <p className='text-[18px] text-purpleBal mb-[50px]'>{textBack}</p>
            <BotonBase name='¿Comenzamos?' clase='botonWhite' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlipCard
