import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const HomeBanner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className='mySwiper'
    >
      <SwiperSlide>
        <div className='h-screen flex'>
          <div className='homeImage ' />
          <div className='homeTitle absolute items-center top-[50%] sm:left-[1rem] lg:left-[3rem] sm: w-1/2 lg:w-2/5'>
            <h1 className='font-medium leading-normal sm:text-[34px] md:text-[50px] lg:text-[56px]'>Convertí a tus clientes en tus fans</h1>
            <p className='text-justify hidden md:block'>Mejoramos la experiencia de tus clientes y tu reputación de marca, identificamos oportunidades, implementamos soluciones efectivas, y ayudamos a impulsar tu crecimiento en el mercado.</p>
            <div className='buttons sm:space-x-4'>
              <button className='buttonServ rounded-full'>Ver servicios</button>
              <button className='buttonReserv rounded-full'>Reservar consultoría</button>
            </div>
          </div>
        </div>

      </SwiperSlide>

    </Swiper>
  )
}

export default HomeBanner
