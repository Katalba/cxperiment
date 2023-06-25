import BotonBase from './BotonBase'
import { useGeneralContext } from '../context/GeneralContext'

const HomeBanner = () => {
  const { contactoRef, serviciosRef } = useGeneralContext()

  const servicio = () => {
    serviciosRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const contacto = () => {
    contactoRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section
        id='home'
        className=' w-full h-[calc(100vh-90px)] mt-[90px] flex flex-col justify-center items-center  md:flex-row md:justify-center md:items-center gap-3 md:gap-2 relative overflow-hidden'
      >
        <div className='homeImage w-full h-2/5 sm:h-1/2 md:w-full md:h-full top-0 left-0 bg-cover bg-center mx-auto ' />
        <div className='containerTitle relative w-full h-1/2 sm:h-1/2 md:w-3/5 md:h-full md:absolute md:top-0 md:left-0 lg:w-3/5  flex flex-col justify-center items-center md:items-center  md:text-left lg:text-left '>

          {/* card  */}
          <section
            className='cardContain w-full h-auto md:w-[95%] md:h-auto px-3 md:py-6 text-purpleBal flex flex-col justify-center items-start gap-7 lg:gap-10 lg:p-7 pb-5 overflow-hidden absolute -z-1'
          >
            <h1 className='font-titulo font-[700] text-2xl md:text-4xl lg:text-5xl overflow-hidden xl:text-5xl'> Haz de la experiencia del cliente tu diferencial</h1>
            <p className='lg:w-3/4 font-parrafo font-[400] text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base'>Mejoramos la experiencia de tus clientes y tu reputación de marca, identificamos oportunidades, implementamos soluciones efectivas, y ayudamos a impulsar tu crecimiento en el mercado.</p>
            <div className='containerButtons flex space-x-2 justify-center'>
              <BotonBase func={servicio} name='Ver servicios' clase='botonWhite text-[12px] md:text-[12px]' />
              <BotonBase func={contacto} name='Asesoría inicial sin cargo' clase='botonVerde text-[12px] md:text-[12px]' />
            </div>
          </section>

        </div>
      </section>
    </>
  )
}

export default HomeBanner
