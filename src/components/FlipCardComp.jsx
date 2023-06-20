import { useEffect, useState } from 'react'
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
      titulo: 'Custumer Research',
      bgColor: 'purpleBal',
      radiusFront: 'rounded-tr-[106px] rounded-l-[106px] rounded-t-[106px]',
      radiusBack: 'rounded-t-[106px] rounded-br-[106px]',
      radiusImg: 'rounded-t-[106px] rounded-br-[106px]',
      textFront: 'Conociendo realmente a tu cliente',
      textBack: 'Conoce a tus clientes desde una perspectiva profunda y significativa',
      fcbImg: 'https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/custumerResearch.png?alt=media&token=bdd5bb54-1d04-4be3-b6f9-c43b04c971cd'
    },
    {
      titulo: 'Custumer Analysis',
      bgColor: 'verdeTurk',
      radiusFront: 'rounded-t-[106px] rounded-tr-[106px] rounded-b-[0]',
      radiusBack: 'rounded-t-[106px] rounded-tr-[106px] rounded-b-[0]',
      textFront: 'Entiende a tu cliente en profundidad',
      textBack: 'Comprende a fondo a tu cliente y su experiencia con tu marca.',
      fcbImg: 'https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/customerAnalysis.png?alt=media&token=3e049d7e-c53d-4d21-a94f-7b568163f3e0'
    },
    {
      titulo: 'Custumer Insights',
      bgColor: 'purpleBal',
      radiusFront: 'rounded-t-[106px] rounded-br-[106px]',
      radiusBack: 'rounded-tr-[106px] rounded-l-[106px] rounded-t-[106px]',
      radiusImg: 'rounded-tr-[106px] rounded-l-[106px] rounded-t-[106px]',
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

  // por si queres automatizarlo, faltan añadirle animaciones
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
    <div className='w-full h-auto flex justify-center items-center'>
      <button className='block lg:hidden text-[30px] text-verdeTurk ' onClick={handleClickLeft}>
        <HiChevronLeft />
      </button>
      <section
        ref={serviciosRef}
        id='servicios'
        className={`cajaPadre w-[300px] md:w-[385px] h-auto overflow-hidden lg:w-full flex ${calculaFlex(currentCardIndex)} lg:justify-center gap-4 py-10`}
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
      <button className='block lg:hidden text-[30px] text-verdeTurk ' onClick={handleClickRight}>
        <HiChevronRight />
      </button>
    </div>
  )
}

export default FlipCardComp
