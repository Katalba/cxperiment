import { useState } from 'react'
import FlipCard from './FlipCard'
// import Swiper from 'swiper'
// import 'swiper/css/swiper.css'
import { useGeneralContext } from '../context/GeneralContext'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const FlipCardComp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const { serviciosRef } = useGeneralContext()
  const cardCount = 3
  // const cardWidth = 310 // Ancho de cada tarjeta
  // const gap = 20 // Espacio entre tarjetas

  const cards = [
    {
      titulo: 'Customer Research',
      bgColor: 'purpleBal',
      radiusFront: 'rounded-tr-[50px] rounded-l-[50px] rounded-t-[50px] lg:rounded-tr-[106px] lg:rounded-l-[106px] lg:rounded-t-[106px]',
      radiusBack: 'rounded-t-[50px] rounded-br-[50px] lg:rounded-t-[106px] lg:rounded-br-[106px]',
      radiusImg: 'rounded-t-[50px] rounded-br-[50px] lg:rounded-t-[106px] lg:rounded-br-[106px]',
      textFront: 'Conociendo realmente a tu cliente',
      textBack: 'Conoce a tus clientes desde una perspectiva profunda y significativa',
      fcbImg: 'https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/custumerResearch.png?alt=media&token=bdd5bb54-1d04-4be3-b6f9-c43b04c971cd'
    },
    {
      titulo: 'Customer Analysis',
      bgColor: 'verdeTurk',
      radiusFront: 'rounded-t-[50px] rounded-tr-[50px] rounded-b-[0] lg:rounded-t-[106px] lg:rounded-tr-[106px] lg:rounded-b-[0]',
      radiusBack: 'rounded-t-[50px] rounded-tr-[50px] rounded-b-[0] lg:rounded-t-[106px] lg:rounded-tr-[106px] lg:rounded-b-[0]',
      textFront: 'Entiende a tu cliente en profundidad',
      textBack: 'Comprende a fondo a tu cliente y su experiencia con tu marca.',
      fcbImg: 'https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/customerAnalysis.png?alt=media&token=3e049d7e-c53d-4d21-a94f-7b568163f3e0'
    },
    {
      titulo: 'Customer Insights',
      bgColor: 'purpleBal',
      radiusFront: 'rounded-t-[50px] rounded-br-[50px] lg:rounded-t-[106px] lg:rounded-br-[106px]',
      radiusBack: 'rounded-tr-[50px] rounded-l-[50px] rounded-t-[50px] lg:rounded-tr-[106px] lg:rounded-l-[106px] lg:rounded-t-[106px]',
      radiusImg: 'rounded-tr-[50px] rounded-l-[50px] rounded-t-[50px] lg:rounded-tr-[106px] lg:rounded-l-[106px] lg:rounded-t-[106px]',
      textFront: 'Fidelicemos a tu cliente',
      textBack: 'Descubre aspectos relevantes de tus clientes y sus preferencias.',
      fcbImg: 'https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/customerInsights.png?alt=media&token=440802da-e4df-4671-b064-a5bf24cc8af6'
    }
  ]

  const handleClickLeft = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cardCount - 1 : prevIndex - 1))
  }

  const handleClickRight = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cardCount - 1 ? 0 : prevIndex + 1))
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentCardIndex((prevIndex) => (prevIndex === cardCount - 1 ? 0 : prevIndex + 1))
  //   }, 5000)

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [cardCount])

  console.log(currentCardIndex)

  const calculaFlex = (index) => {
    if (index === 0) {
      return 'justify-center'
    } else if (index === 1) {
      return 'justify-start'
    } else if (index === 2) {
      return 'justify-end'
    }
  }

  return (
    <div
      ref={serviciosRef}
      id='servicios'
      className='w-full h-auto flex justify-center items-center gap-2 relative card-scroll'
    >
      <button className='block md:hidden text-[30px] text-verdeTurk ' onClick={handleClickLeft}>
        <HiChevronLeft />
      </button>
      <section
        className={`cajaPadre w-[190px] min-[450px]:w-[250px] sm:w-[310px] md:w-full  h-auto overflow-hidden lg:w-full flex ${calculaFlex(currentCardIndex)} md: justify-center lg:justify-center gap-4 pt-10 py-20 lg:py-5`}
        // style={{ transform: `translateX(${getTranslateX()}px)` }}
      >
        {
          cards.map((element, index) => {
            return (
              <FlipCard
                key={index}
                objeto={element}
                isCurrent={index === currentCardIndex}
              />

            )
          })
        }
      </section>
      <button className='block md:hidden text-[30px] text-verdeTurk ' onClick={handleClickRight}>
        <HiChevronRight />
      </button>
      <div className='w-full h-[30px] absolute bottom-10 left-0 flex justify-center items-center gap-5 md:hidden'>
        <span className={`h-[12px] aspect-square ${currentCardIndex === 2 ? 'bg-verdeTurk' : 'bg-purpleBal'} rounded-full`} />
        <span className={`h-[12px] aspect-square rounded-full ${currentCardIndex === 0 ? 'bg-verdeTurk' : 'bg-purpleBal'}`} />
        <span className={`h-[12px] aspect-square rounded-full ${currentCardIndex === 1 ? 'bg-verdeTurk' : 'bg-purpleBal'}`} />
      </div>
    </div>
  )
}

export default FlipCardComp
