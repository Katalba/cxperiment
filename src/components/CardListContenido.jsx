// import React, { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CardContenido from './CardContenido.jsx'
import fondo from '../images/logotipo.svg'

const CardListContenido = () => {
  const imgBg = fondo

  const contenido = [
    { id: 0, parrafo: 'combinamos de técnicas y herramientas efectivas, realizaremos investigaciones exhaustivas para recopilar información valiosa que te permitirá comprender mejor las necesidades, expectativas y comportamientos de tus clientes. Nuestro enfoque incluye las siguientes acciones clave:', icono: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686618751/consultora/fa-solid_search_izii5k.svg', titulo: 'Customer Research', lista: ['Encuestas Personalizadas', 'Métricas relevantes', 'Análisis de redes sociales', 'Charlas con colaboradores'] },

    { id: 1, parrafo: 'ofrecemos un servicio integral de Customer Analysis que te permitirá comprender a fondo a tu cliente ideal y entender su experiencia completa al interactuar con tu marca. A través de la colaboración estrecha contigo, desarrollaremos los siguientes elementos clave:', icono: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686618751/consultora/Vector_t6wscd.svg', titulo: 'Customer Analysis', lista: ['Arquetipo de cliente', 'Customer Journey Map'] },

    { id: 2, parrafo: 'te ayudamos descubrir los aspectos más relevantes de tus clientes y obtener una comprensión completa de sus necesidades, preferencias y comportamientos. Basándonos en los datos recopilados a través del Customer Analysis previo, brindaremos feedback valioso sobre los siguientes aspectos clave:', icono: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686618751/consultora/fa-solid_search_1_kff27u.svg', titulo: 'Customer insights', lista: ['Puntos de dolor', 'Canales preferidos', 'Momentos de verdad'] }
  ]

  return (
    <section className='conteinerContenido w-full flex flex-col items-center justify-center gap-10 lg:gap-20'>
      {
      contenido.map(item => {
        return (
          <CardContenido key={uuidv4()} item={item} imgBg={imgBg} />
        )
      })
      }
    </section>

  )
}

export default CardListContenido
