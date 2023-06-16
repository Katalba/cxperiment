import React from 'react'

const Titulo = ({ titulo }) => {
  return (
    <div className='titulo w-full text-center p-1'>
      <h2 className='font-titulo font-[700] text-purpleBal text-center text-3xl md:text-4xl lg:text-5xl'>{titulo}</h2>
    </div>
  )
}

export default Titulo
