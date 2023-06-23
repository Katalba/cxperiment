import { useState } from 'react'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import CardServicios from './CardServicios.jsx'
import { useGeneralContext } from '../context/GeneralContext.jsx'

const ListCardServicios = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const { serviciosRef } = useGeneralContext()
  const cardCount = 3
  // const cardWidth = 310 // Ancho de cada tarjeta
  // const gap = 20 // Espacio entre tarjetas

  const cards = [
    {
      titulo: 'Customer Research',
      bgColor: 'purpleBal',
      radiusBorde: 'rounded-bl-3xl',
      textFront: 'Conociendo realmente a tu cliente',
      textBack: 'Conoce a tus clientes desde una perspectiva profunda y significativa',
      fcbImg: 'https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/custumerResearch.png?alt=media&token=bdd5bb54-1d04-4be3-b6f9-c43b04c971cd'
    },
    {
      titulo: 'Customer Analysis',
      bgColor: 'verdeTurk',
      radiusBorde: '',
      textFront: 'Entiende a tu cliente en profundidad',
      textBack: 'Comprende a fondo a tu cliente y su experiencia con tu marca.',
      fcbImg: 'https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/customerAnalysis.png?alt=media&token=3e049d7e-c53d-4d21-a94f-7b568163f3e0'
    },
    {
      titulo: 'Customer Insights',
      bgColor: 'purpleBal',
      radiusBorde: 'rounded-br-3xl',
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

  // const calculaFlex = (index) => {
  //   if (index === 0) {
  //     return 'justify-center'
  //   } else if (index === 1) {
  //     return 'justify-start'
  //   } else if (index === 2) {
  //     return 'justify-end'
  //   }
  // }
  const getTranslateX = () => {
    if (currentCardIndex === 0) {
    return 0
    } else if (currentCardIndex === 1) {
    return -260
    } else if (currentCardIndex === 2) {
      return -520
    }
  }


  return (
    <div
      ref={serviciosRef}
      id='servicios'
      className="w-full h-[500px] flex justify-center items-center gap-2 relative card-scroll"
    >
      <button className='block lg:hidden text-[30px] text-verdeTurk ' onClick={handleClickLeft}>
        <HiChevronLeft />
      </button>
      <div className='w-400px h-400px overflow-hidden'>
        <section
          className="sliderContain w-[340px]  flex flex-row justify-start items-center h-[350px] px-5 overflow-x: scroll lg:overflow-hidden gap-5
          lg:w-full lg:justify-center py-20 lg:py-5"
          style={{ transform: `translateX(${currentCardIndex * -320}px)`, transition: 'transform 0.5s linear',  }}
          >
            {
              cards.map((element, index) => {
                return (
                  <CardServicios
                    key={index}
                    objeto={element}
                    isCurrent={index === currentCardIndex}
                  />

                )
              })
            }
        </section>

      </div>
      <button className='block lg:hidden text-[30px] text-verdeTurk ' onClick={handleClickRight}>
        <HiChevronRight />
      </button>
      <div className='w-full h-[30px] absolute bottom-10 left-0 flex justify-center items-center gap-5 lg:hidden'>
        <span className={`h-[12px] aspect-square ${currentCardIndex === 2 ? 'bg-verdeTurk' : 'bg-purpleBal'} rounded-full`} />
        <span className={`h-[12px] aspect-square rounded-full ${currentCardIndex === 0 ? 'bg-verdeTurk' : 'bg-purpleBal'}`} />
        <span className={`h-[12px] aspect-square rounded-full ${currentCardIndex === 1 ? 'bg-verdeTurk' : 'bg-purpleBal'}`} />
      </div>
    </div>
  )
}

export default ListCardServicios
