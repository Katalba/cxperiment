import React from 'react'
import BotonBase from './BotonBase'

const SectionCustomer = () => {
  const imgBg = 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686618408/consultora/Untitled_design_1_1_xurh9o.svg'

  const contenido = [
    { id: 0, parrafo: 'combinamos de técnicas y herramientas efectivas, realizaremos investigaciones exhaustivas para recopilar información valiosa que te permitirá comprender mejor las necesidades, expectativas y comportamientos de tus clientes. Nuestro enfoque incluye las siguientes acciones clave:', icono: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686618751/consultora/fa-solid_search_izii5k.svg', subparrafo: 'Encuestas Personalizadas Métricas Relevantes Análisis de Redes Sociale Charlas con Colaboradores' },
    { id: 1, parrafo: 'ofrecemos un servicio integral de Customer Analysis que te permitirá comprender a fondo a tu cliente ideal y entender su experiencia completa al interactuar con tu marca. A través de la colaboración estrecha contigo, desarrollaremos los siguientes elementos clave:', icono: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686618751/consultora/Vector_t6wscd.svg', subparrafo: 'Arquetipo de Cliente Customer Journey Map' },
    { id: 2, parrafo: 'te ayudamos descubrir los aspectos más relevantes de tus clientes y obtener una comprensión completa de sus necesidades, preferencias y comportamientos. Basándonos en los datos recopilados a través del Customer Analysis previo, brindaremos feedback valioso sobre los siguientes aspectos clave:', icono: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686618751/consultora/fa-solid_search_1_kff27u.svg', subparrafo: 'Puntos de Dolor Canales Preferidos Momentos de Verdad' }
  ]

  return (
    <section>
      {
      contenido.map(item => {
        return (
          <section key={item.id} className='contenedoCard'>
            <section className='contenido'>
              <p>En<span>CXperiment</span>, {objeto.parrafo}</p>
              <div className='main'>
                <div className='icono'>
                  <img src='' alt='' />
                </div>
                <div className='contenido '>
                  <p>Encuestas Personalizadas Métricas Relevantes Análisis de Redes Sociale Charlas con Colaboradores</p>
                </div>
              </div>
              <section className='pie'>
                <BotonBase name='ver servicio' clase='botonVerde' />
                <BotonBase name='reservar consultori' clase='botonWhite' />
              </section>
            </section>
            <section className='imgBg'>
              <img src={imgBg} alt='' />
              <h2 />
            </section>
          </section>
        )
      })
      }
    </section>

  )
}

export default SectionCustomer
