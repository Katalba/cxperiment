import React, { useState } from 'react'
import BotonBase from '../components/BotonBase'

const CardServicios = ({ objeto }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const { bgColor, radiusBorde , textFront, textBack, fcbImg, titulo } = objeto

    // para rotar la card

    const flipCard = () => {
      setIsFlipped(!isFlipped)
    }

  return (
      <div className="bg-red-400 w-[260px] h-[260px] md:w-[340px] md:h-[340px] flex justify-center items-center py-[5rem]">

      {/* esta es la card */}
      <div className={`flip-card bg-transparent w-[250px] md:w-[300px] aspect-square rounded-tl-3xl rounded-tr-3xl border-solid ${radiusBorde} overflow-hidden perspective-1000 relative `} 
      onClick={flipCard} 
      onMouseEnter={flipCard}
      onMouseLeave={flipCard}>
        
        <section className='flip-card-inner w-[100%] h-[100%] transition-transform duration-500 ease-in-out relative' style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

          {/* front card */}
          <section className={`flip-card-fron w-[100%] h-[100%] absolute top-0 left-0 text-white bg-${bgColor} bg-opacity-60 shadow-md  backdrop-filter backdrop-blur-md border-2 border-opacity-20 border-white p-2 flex flex-col gap-3`} style={{ backfaceVisibility: 'hidden' }}>

            <h2>{titulo}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere excepturi, omnis iste unde optio eum atque odio eveniet </p>
          </section>

          {/* back  card*/}
          <section className='flip-card-back w-[100%] h-[100%] absolute top-0 left-0 text-white bg-blue-600 bg-opacity-60 shadow-md  backdrop-filter backdrop-blur-md border-2 border-opacity-20 border-white p-2 overflow-hidden flex flex-col gap-2' style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus, cumque libero voluptates autem </h3>
            <div className='flex flex-row justify-center items-center'>
            <BotonBase name={"Más info"} clase={"botonVerde"}/>
            </div>
          </section>
        </section>
      </div>
      </div>
  )
}

export default CardServicios
