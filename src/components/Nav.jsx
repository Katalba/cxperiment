import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <section className='w-full h-[90px] bg-white flex flex-row justify-between items-center px-5'>
        <section className='icon w-[200px]'>
          <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1686474264/consultora/Logo_cxperiment_1_ctumyo.svg' alt='logotipo cxperiment' />
        </section>
        <section className='navMenu flex flex-row flex-nowrap justify-normal items-center gap-6'>
          <NavLink to='/' className='navLink font-titulo text-lg'>Servicios</NavLink>
          <NavLink to='/' className='navLink font-titulo text-lg'>Sobre mi</NavLink>
          <NavLink to='/' className='navLink font-titulo text-lg'>Contacto</NavLink>
        </section>
      </section>
    </>
  )
}

export default Nav
