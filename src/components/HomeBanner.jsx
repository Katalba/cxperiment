import BotonBase from './BotonBase'
import { IoArrowForwardSharp } from 'react-icons/io5'

const HomeBanner = () => {
  return (
    <>
      <section
        id='home'
        className=' w-full h-[600px] lg:h-[calc(100vh-90px)] mt-[90px] flex flex-col justify-center items-center  md:flex-row md:justify-center md:items-center gap-3 md:gap-2 relative overflow-hidden'
        style={{ boxShadow: '5px 5px 10px #d4d4d4,-5px -5px 10px #ffffff' }}
      >
        <div className='homeImage w-full h-2/5 sm:h-1/2 md:w-full md:h-full top-0 left-0 bg-cover bg-center mx-auto '>
          <a href='' />
        </div>
        <div className='containerTitle relative w-full h-3/5 sm:h-1/2 md:w-1/2 md:h-full md:absolute md:top-0 md:left-0 lg:w-1/2  flex flex-col justify-center items-center md:items-center  md:text-left lg:text-left '>

          {/* card  */}
          <section
            className='cardContain w-full h-auto md:w-[95%] md:h-auto px-3 py-6 text-purpleBal flex flex-col justify-center items-start gap-7 lg:gap-10 lg:p-7 pb-5 overflow-hidden'
          >
            <h1 className='font-titulo font-[700] text-3xl md:text-4xl lg:text-5xl overflow-hidden xl:text-6xl'> Convertí a tus clientes en tus fans</h1>
            <p className='font-parrafo font-[400] text-md lg:text-lg'>Mejoramos la experiencia de tus clientes y tu reputación de marca, identificamos oportunidades, implementamos soluciones efectivas, y ayudamos a impulsar tu crecimiento en el mercado.</p>
            <div className='containerButtons flex space-x-2 justify-center'>
              <BotonBase name='Ver servicio' clase='botonWhite'>
                <IoArrowForwardSharp />
              </BotonBase>
              <BotonBase name='Asesoría inicial sin cargo' clase='botonVerde' />
            </div>
          </section>

        </div>
      </section>
    </>
  )
}

export default HomeBanner
