import React from 'react'

const Title = ({ name }) => {
  // Tamaños fuentes FlipCard
  // titulo:
  // font-size: 40px; >= xl = 1280px
  // font-size: 38px  = lg = 1024px
  // font-size: 25px; = md = 768px
  // font-size: 29px; <= sm = 640px
  return (
    <>
      <h2 className='text-center leading-tight text-whiteWi font-titulo font-bold text-[25px] sm:text-[29px] md:text-[25px] lg:text-[38px] xl:text-[43px]'>{name}</h2>
    </>
  )
}

export default Title
