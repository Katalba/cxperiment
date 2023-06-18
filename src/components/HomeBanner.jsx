import BotonBase from './BotonBase'
import { IoArrowForwardSharp } from 'react-icons/io5'

const HomeBanner = () => {
  return (
    <div className='homeImage w-full h-[161px] md:h-[380px] lg:h-[500px] mt-[90px] bg-cover bg-center relative -z-0 mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
      <div className='containerTitle md:w-1/2  lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start lg:items-start md:text-left lg:text-left mb-16 md:mb-0 lg:mb-0 items-center text-center text-purpleBal'>
        <h1 className='title-font sm:text-4xl text-3xl mb-8 font-medium'> Convertí a tus clientes en tus fans</h1>
        <p className='text-justify mb-8 leading-relaxed'>Mejoramos la experiencia de tus clientes y tu reputación de marca, identificamos oportunidades, implementamos soluciones efectivas, y ayudamos a impulsar tu crecimiento en el mercado.</p>
        <div className='containerButtons flex space-x-2'>
          <BotonBase name='Ver servicio' clase='botonWhite'>
            <IoArrowForwardSharp />
          </BotonBase>
          <BotonBase name='Asesoría inicial sin cargo' clase='botonVerde' />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
