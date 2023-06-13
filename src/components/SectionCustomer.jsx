import React from 'react'
import BotonBase from './BotonBase'

const SectionCustomer = () => {
  const imgBg = 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686618408/consultora/Untitled_design_1_1_xurh9o.svg'

  return (
    <section>
      <section>
        <p>En CXperiment, combinamos de técnicas y herramientas efectivas, realizaremos investigaciones exhaustivas para recopilar información valiosa que te permitirá comprender mejor las necesidades, expectativas y comportamientos de tus clientes. Nuestro enfoque incluye las siguientes acciones clave:</p>
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
      <section />
    </section>
  )
}

export default SectionCustomer
