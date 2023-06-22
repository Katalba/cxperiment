import React from 'react'

const Title = ({ name }) => {
  // Tamaños fuentes FlipCard
  // titulo:
  // font-size: 40px; >= xl = 1280px
  // font-size: 43px  = lg = 1024px
  // font-size: 31px; = md = 768px
  // font-size: 31px; <= sm = 640px
  return (
    <>
      <h2 className='text-center text-whiteWi font-titulo font-bold text-[31px] md:text-[31px] lg:text-[40px] xl:text-[43px]'>{name}</h2>
    </>
  )
}

export default Title
