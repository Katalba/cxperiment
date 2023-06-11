import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [idOpem, setIdOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  const handleOpen = () => {
    setIdOpen(!idOpem)
  }

  const handleActive = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <>
      <section className='nav w-full h-[90px] bg-white flex flex-row justify-between items-center px-5'>
        <section className='icon w-[200px]'>
          <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1686474264/consultora/Logo_cxperiment_1_ctumyo.svg' alt='logotipo cxperiment' />
        </section>
        <section className='navMenu flex flex-row flex-nowrap justify-normal items-center gap-6'>
          <NavLink
            to='#'
            className={`navLink font-titulo text-lg relative ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleActive(0)}
          >
            Servicios
            {/* {activeIndex === 0 && <div className='bordeBotMenu translate-x-1 transition-all duration-300 ease ' />} */}
            {activeIndex === 0 && <div className='bordeBotMenu absolute bottom-3 w-full h-[4px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}
          </NavLink>

          <NavLink
            to='#'
            className={`navLink font-titulo text-lg relative ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleActive(1)}
          >
            Sobre mi
            {activeIndex === 1 && <div className='bordeBotMenu absolute bottom-3 w-full h-[4px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}

          </NavLink>
          <NavLink
            to='#'
            className={`navLink font-titulo text-lg relative  ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleActive(2)}
          >
            Contacto
            {activeIndex === 2 && <div className='bordeBotMenu absolute bottom-3 w-full h-[4px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}
          </NavLink>
        </section>
      </section>
    </>
  )
}

export default Nav
