// import { useEffect } from 'react'
import FlipCard from './FlipCard'
// import Swiper from 'swiper'
// import 'swiper/css/swiper.css'
import { useGeneralContext } from '../context/GeneralContext'

const FlipCardComp = () => {
  // const swiperRef = useRef(null);

  // useEffect(() =>{
  //   const swiper = new Swiper(swiperRef.current, {

  //   });
  //   return () =>{
  //     swiper.destroy()
  //   }
  // })
  const { serviciosRef } = useGeneralContext()

  return (
    <section ref={serviciosRef} id='servicios' className='w-full h-auto flex justify-center space-x-4'>
      <FlipCard
        titulo='Custumer Research'
        bgColor='purpleBal'
        radiusFront='rounded-tr-[106px] rounded-l-[106px] rounded-t-[106px]'
        radiusBack='rounded-t-[106px] rounded-br-[106px]'
        radiusImg='rounded-t-[106px] rounded-br-[106px]'
        textFront='Conociendo realmente a tu cliente'
        textBack='Conoce a tus clientes desde una perspectiva profunda y significativa'
        fcbImg='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/custumerResearch.png?alt=media&token=bdd5bb54-1d04-4be3-b6f9-c43b04c971cd'
      />
      <FlipCard
        titulo='Custumer Analysis'
        bgColor='verdeTurk'
        radiusFront='rounded-t-[106px] rounded-tr-[106px] rounded-b-[0]'
        radiusBack='rounded-t-[106px] rounded-tr-[106px] rounded-b-[0]'
        textFront='Entiende a tu cliente en profundidad'
        textBack='Comprende a fondo a tu cliente y su experiencia con tu marca.'
        fcbImg='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/customerAnalysis.png?alt=media&token=3e049d7e-c53d-4d21-a94f-7b568163f3e0'
      />
      <FlipCard
        titulo='Custumer Insights'
        bgColor='purpleBal'
        radiusFront='rounded-t-[106px] rounded-br-[106px]'
        radiusBack='rounded-tr-[106px] rounded-l-[106px] rounded-t-[106px]'
        radiusImg='rounded-tr-[106px] rounded-l-[106px] rounded-t-[106px]'
        textFront='Fidelicemos a tu cliente'
        textBack='Descubre aspectos relevantes de tus clientes y sus preferencias.'
        fcbImg='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/customerInsights.png?alt=media&token=440802da-e4df-4671-b064-a5bf24cc8af6'
      />
    </section>
  )
}

export default FlipCardComp
