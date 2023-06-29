import { useState } from 'react'
import FlipCard from './FlipCard'
import { useGeneralContext } from '../context/GeneralContext'
import cajaResearch from '../images/cajaResearch.svg'
import cajaInsghts from '../images/cajaInsghts.svg'
import cajaAnalysis from '../images/cajaAnalysis.svg'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const FlipCardComp = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const { serviciosRef, descripcionRef0, descripcionRef1, descripcionRef2 } = useGeneralContext()
  const cardCount = 3

  const cards = [
    {
      id: 0,
      titulo: 'Customer Research',
      bgColor: 'purpleBal',
      radiusFront: 'rounded-tr-[61px] rounded-l-[61px] rounded-t-[61px] lg:rounded-tr-[106px] lg:rounded-l-[106px] lg:rounded-t-[106px]',
      radiusBack: 'rounded-t-[61px] rounded-br-[61px] lg:rounded-t-[106px] lg:rounded-br-[106px]',
      radiusImg: 'rounded-t-[61px] rounded-br-[61px] lg:rounded-t-[106px] lg:rounded-br-[106px]',
      textFront: 'Comprende verdaderamente a tus clientes',
      textBack: ' Obtené una perspectiva profunda de tus clientes.',
      fcbImg: cajaResearch
    },
    {
      id: 1,
      titulo: 'Customer Analysis',
      bgColor: 'verdeTurk',
      radiusFront: 'rounded-t-[61px] rounded-tr-[61px] rounded-b-[0] lg:rounded-t-[106px] lg:rounded-tr-[106px] lg:rounded-b-[0]',
      radiusBack: 'rounded-t-[61px] rounded-tr-[61px] rounded-b-[0] lg:rounded-t-[106px] lg:rounded-tr-[106px] lg:rounded-b-[0]',
      textFront: 'Encuentra a tu cliente ideal',
      textBack: 'Descubrí a tu cliente ideal y su experiencia completa.',
      fcbImg: cajaAnalysis
    },
    {
      id: 2,
      titulo: 'Customer Insights',
      bgColor: 'purpleBal',
      radiusFront: 'rounded-t-[61px] rounded-br-[61px] lg:rounded-t-[106px] lg:rounded-br-[106px]',
      radiusBack: 'rounded-tr-[61px] rounded-l-[61px] rounded-t-[61px] lg:rounded-tr-[106px] lg:rounded-l-[106px] lg:rounded-t-[106px]',
      radiusImg: 'rounded-tr-[61px] rounded-l-[61px] rounded-t-[61px] lg:rounded-tr-[106px] lg:rounded-l-[106px] lg:rounded-t-[106px]',
      textFront: 'Crea lealtad en tus clientes',
      textBack: 'Mejora tu estrategia y fidelizá a tus clientes.',
      fcbImg: cajaInsghts
    }
  ]

  const handleClickLeft = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cardCount - 1 : prevIndex - 1))
  }

  const handleClickRight = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cardCount - 1 ? 0 : prevIndex + 1))
  }

  const calculaFlex = (index) => {
    if (index === 0) {
      return 'justify-start'
    } else if (index === 1) {
      return 'justify-center'
    } else if (index === 2) {
      return 'justify-end'
    }
  }

  const handleRef0 = () => {
    const refDescripcion0 = descripcionRef0.current
    const refDescricion0Rect = refDescripcion0.getBoundingClientRect()
    const offset = 150
    window.scrollTo({
      top: refDescricion0Rect.top + window.scrollY - offset,
      behavior: 'smooth'
    })
    // descripcionRef0.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleRef1 = () => {
    const refDescripcion1 = descripcionRef1.current
    const refDescricion1Rect = refDescripcion1.getBoundingClientRect()
    const offset = 150
    window.scrollTo({
      top: refDescricion1Rect.top + window.scrollY - offset,
      behavior: 'smooth'
    })
  }
  const handleRef2 = () => {
    const refDescripcion2 = descripcionRef2.current
    const refDescricion2Rect = refDescripcion2.getBoundingClientRect()
    const offset = 150
    window.scrollTo({
      top: refDescricion2Rect.top + window.scrollY - offset,
      behavior: 'smooth'
    })
  }

  const calcReferencia = (val) => {
    if (val === 0) {
      return handleRef0
    } else if (val === 1) {
      return handleRef1
    } else if (val === 2) {
      return handleRef2
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
        className={`cajaPadre w-[250.627px] h-auto overflow-hidden md:w-full lg:w-full flex ${calculaFlex(currentCardIndex)} md:justify-center lg:justify-center gap-4 pt-10 py-20 lg:py-[80px]`}
      >
        {
          cards.map((element, index) => {
            return (
              <FlipCard
                key={index}
                objeto={element}
                isCurrent={index === currentCardIndex}
                func={calcReferencia(index)}
              />

            )
          })
        }
      </section>
      <button className='block md:hidden text-[30px] text-verdeTurk ' onClick={handleClickRight}>
        <HiChevronRight />
      </button>
      <div className='w-full h-[30px] absolute bottom-10 left-0 flex justify-center items-center gap-5 md:hidden'>
        <span className={`h-[12px] aspect-square ${currentCardIndex === 0 ? 'bg-verdeTurk' : 'bg-purpleBal'} rounded-full`} />
        <span className={`h-[12px] aspect-square rounded-full ${currentCardIndex === 1 ? 'bg-verdeTurk' : 'bg-purpleBal'}`} />
        <span className={`h-[12px] aspect-square rounded-full ${currentCardIndex === 2 ? 'bg-verdeTurk' : 'bg-purpleBal'}`} />
      </div>
    </div>
  )
}

export default FlipCardComp
