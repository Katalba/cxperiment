import React from 'react'

const CardPrecentacion = () => {
  return (
    <section className='cardPrecentacion w-full h-auto bg-whiteWi flex flex-col justify-start items-center gap-4 p-5  sm:flex-row sm:justify-center sm:items-center md:gap-4 md:p-6 '>

      <section className='w-full h-[230px] sm:w-1/2 sm:h-[280px] md:w-[400px] md:h-[250px] lg:w-1/2 lg:h-[250px] xl:w-[650px] xl:h-[230px] flex flex-col justify-center items-center border-verdeTurk border-2 rounded-[0] rounded-t-[50px] rounded-tr-[0] rounded-b-[50px] rounded-l-[50px]  p-5 overflow-hidden gap-2 lg:gap-3'>
        <h2 className='w-full font-titulo font-[600] text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>¿Cuál es la propuesta de cxperiment?</h2>
        <p className='w-full font-parrafo font-[300] text-sm sm:text-md md:text-md lg:text-lg xl:text-lg'>Perfeccionar la experiencia del cliente, identificar oportunidades de mejora, implementar soluciones efectivas, aumentar la satisfacción y lealtad del cliente y mejorar la reputación de la marca.</p>
      </section>
      <section className='w-full h-[230px] sm:w-1/2 sm:h-[280px] md:w-[400px] md:h-[250px] lg:w-1/2 lg:h-[250px] xl:w-[650px] xl:h-[230px] flex flex-col justify-center items-center  border-verdeTurk border-2 rounded-[0] rounded-t rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px]  p-5 overflow-hidden gap-2 lg:gap-3'>
        <h2 className='w-full font-titulo font-[600] text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>¿Para quién está pensado?</h2>
        <p className='w-full font-parrafo font-[300] text-sm sm:text-md md:text-md lg:text-lg xl:text-lg'>Para emprendedores, medianas y grandes empresas de cualquier sector, que quieran aumentar la satisfacción y lealtad de sus clientes, mejorando su experiencia con el producto o servicio.</p>
      </section>
    </section>
  )
}

export default CardPrecentacion
