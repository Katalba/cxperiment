import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import BotonBase from './BotonBase'
import { IoArrowForwardSharp } from 'react-icons/io5'

// const HomeBanner = () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       className='mySwiper sm:flex-row  sm: h-[300px]   md:h-[400px]  lg:h-[500px] '
//     >
//       <SwiperSlide>
//         <div className='h-[915px] flex'>
//           <div className='homeImage sm:flex-row sm: h-[300px] md:h-[400px] lg:h-[500px]' />
//           <div className='homeTitle absolute top-[50%] sm:left-[1rem] lg:left-[3rem] sm: w-1/2 lg:w-2/5'>
//             <h1 className='font-medium sm:text-[34px] md:text-[50px] lg:text-[56px]'>Convertí a tus clientes en tus fans</h1>
//             <p className='text-justify hidden sm:block'>Mejoramos la experiencia de tus clientes y tu reputación de marca, identificamos oportunidades, implementamos soluciones efectivas, y ayudamos a impulsar tu crecimiento en el mercado.</p>
//             <div className='buttons sm:space-x-4'>
//               <BotonBase name='Ver servicio' clase='botonVerde'>
//                 <IoArrowForwardSharp />
//               </BotonBase>
//               <BotonBase name='Reservar consultoría' clase='botonWhite' />
//             </div>
//           </div>
//         </div>

//       </SwiperSlide>

//     </Swiper>
//   )
// }

// export default HomeBanner

const HomeBanner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className='mySwiper w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[650px] xl:h-[800px] sm:flex-row mt-[91px]'
    >
      <SwiperSlide>
        <div className='h-full flex'>
          <div className='homeImage sm:flex-row h-full' />
          <div className='homeTitle absolute top-[50%] sm:left-[1rem] lg:left-[3rem] sm: w-1/2 lg:w-2/5'>
            <h1 className='font-medium sm:text-[34px] md:text-[50px] lg:text-[56px]'>Convertí a tus clientes en tus fans</h1>
            <p className='text-justify hidden sm:block'>Mejoramos la experiencia de tus clientes y tu reputación de marca, identificamos oportunidades, implementamos soluciones efectivas, y ayudamos a impulsar tu crecimiento en el mercado.</p>
            <div className='buttons sm:space-x-4'>
              <BotonBase name='Ver servicio' clase='botonVerde'>
                <IoArrowForwardSharp />
              </BotonBase>
              <BotonBase name='Reservar consultoría' clase='botonWhite' />
            </div>
          </div>
        </div>

      </SwiperSlide>

    </Swiper>
  )
}

export default HomeBanner
