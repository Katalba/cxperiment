import React from 'react'

const Titulo = ({ titulo }) => {
  return (
    <div className='titulo w-full text-center p-1 overflow-hidden'>
      <h2 className='font-titulo font-[700] text-purpleBal text-center text-2xl md:text-[25px] lg:text-3xl xl:text-[40px]'>{titulo}</h2>
    </div>
  )
}

export default Titulo
