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
        <div className='homeImage w-full h-2/5 md:w-full md:h-full top-0 left-0 bg-cover bg-center mx-auto '>
          <a href='' />
        </div>
        <div className='containerTitle relative w-full h-3/5 md:w-1/2 md:h-full md:absolute md:top-0 md:left-0 lg:w-1/2  flex flex-col justify-center items-center md:items-center  md:text-left lg:text-left '>

          {/* card  */}
          <section
            className='cardContain w-full h-auto md:w-[95%] md:h-auto px-3 py-6 text-purpleBal flex flex-col justify-center items-start gap-7 lg:gap-10 lg:p-7 pb-5'
            style={{
              background: 'rgba(103, 53, 140, 0.35)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              borderRadius: '10px',
              border: '1px solid rgba(103, 53, 140, 0.18)',
              borderColor: 'rgba(103, 53, 140, 0.18)'
            }}
          >
            <h1 className='title-font sm:text-4xl text-3xl font-medium lg:text-[48px] overflow-hidden'> Convertí a tus<br /> clientes en tus fans</h1>
            <p className=''>Mejoramos la experiencia de tus clientes y tu reputación de marca, identificamos oportunidades, implementamos soluciones efectivas, y ayudamos a impulsar tu crecimiento en el mercado.</p>
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
