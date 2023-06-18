import BotonBase from './BotonBase'
import { IoArrowForwardSharp } from 'react-icons/io5'

const HomeBanner = () => {
  return (
    <div className='homeImage w-full h-[600px] z-0 bg-cover bg-center relative'>
      <div className='containerTitle space-y-6 text-purpleBal absolute top-[30%] sm:left-[1rem] lg:left-[3rem] sm:w-1/2 lg:w-2/5'>
        <h1 className='sm:text-[34px] md:text-[50px] lg:text-[56px] landing-6'> Convertí a tus clientes en tus fans</h1>
        <p className='text-justify'>Mejoramos la experiencia de tus clientes y tu reputación de marca, identificamos oportunidades, implementamos soluciones efectivas, y ayudamos a impulsar tu crecimiento en el mercado.</p>
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
