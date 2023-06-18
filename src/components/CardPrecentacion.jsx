// import React, { useEffect } from 'react'
import { FaRegSmileBeam, FaHandshake } from 'react-icons/fa'
// import ScrollReveal from 'scrollreveal'

const CardPrecentacion = () => {
  // const revealRef = useRef()

  // useEffect(() => {
  //   const sr = ScrollReveal({
  //     duration: 1500,
  //     delay: 300,
  //     distance: '50px',
  //     easing: 'ease-in-out'
  //   })

  //   sr.reveal('.card-precentacion', { interval: 100 })
  // }, [])

  return (
    <section className='cardPrecentacion w-full max-w-[1650px] h-auto bg-whiteWi flex flex-col justify-start items-center gap-4 p-5  sm:flex-row sm:justify-evenly sm:items-center md:gap-4 md:p-6 mt-10 lg:mt-20'>
      <section className='card-scroll w-full h-[290px] sm:w-1/2 sm:h-[290px] md:w-1/2 md:h-[270px] lg:w-1/2 lg:h-[280px] xl:w-1/2 xl:h-[290px] flex flex-col justify-center items-center p-5 overflow-hidden gap-2 lg:gap-3'>
        <div className='w-[48px] h-[48px] rounded-full bg-verdeMok2 flex justify-center items-center p-1'>
          <div className='w-full h-full rounded-full bg-[#8ad2da] text-purpleBal flex justify-center items-center text-2xl'>
            <FaHandshake />
          </div>
        </div>
        <h2 className='w-full font-titulo font-[600] text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-purpleBal'>¿Cuál es nuestra propuesta?</h2>
        <p className='w-full font-parrafo font-[300] text-sm sm:text-md md:text-md lg:text-lg xl:text-lg text-center text-purpleBal'>Perfeccionar la experiencia del cliente, identificar oportunidades de mejora, implementar soluciones efectivas, aumentar la satisfacción y lealtad del cliente y mejorar la reputación de la marca.</p>
      </section>

      <section className='card-scroll w-full h-[290px] sm:w-1/2 sm:h-[290px] md:w-1/2 md:h-[270px] lg:w-1/2 lg:h-[280px] xl:w-1/2 xl:h-[290px] flex flex-col justify-center items-center p-5 overflow-hidden gap-2 lg:gap-3'>
        <div className='w-[48px] h-[48px] rounded-full bg-verdeMok2 flex justify-center items-center p-1'>
          <div className='w-full h-full rounded-full bg-[#8ad2da] text-purpleBal flex justify-center items-center text-3xl'>
            <FaRegSmileBeam />
          </div>
        </div>
        <h2 className='w-full font-titulo font-[600] text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-purpleBal'>¿Para quién esta pensado?</h2>
        <p className='w-full font-parrafo font-[300] text-sm sm:text-md md:text-md lg:text-lg xl:text-lg text-center text-purpleBal'>Para emprendedores, medianas y grandes empresas de cualquier sector, que quieran aumentar la satisfacción y lealtad de sus clientes, mejorando su experiencia con el producto o servicio.</p>
      </section>
    </section>
  )
}

export default CardPrecentacion
