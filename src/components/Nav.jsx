import { useState } from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  const [isOpem, setIdOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  const handleActive = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const handleToggle = () => {
    setIdOpen(!isOpem)
  }

  return (
    <>
      <section className={`nav w-full fixed top-0 left-0 z-10 h-[90px] md:h-[90px] md:max-h-[90px] lg:h-[90] overflow-hidden flex flex-row justify-between items-start px-5  bg-whiteWi ${isOpem ? 'openActive' : ''} transition-all duration-300 ease-linear`}>

        {/* logotipo */}

        <section className='icon w-[200px] h-[90px] flex flex-row justify-center items-center'>
          <Link
            to='home'
            spy
            smooth
            offset={-100}
            duration={700}
            className='cursor-pointer w-full h-full flex flex-row justify-center items-center'
          >
            <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1686474264/consultora/Logo_cxperiment_1_ctumyo.svg' alt='logotipo cxperiment' />
          </Link>
        </section>

        {/* menu de navegacion */}
        <section
          className={`navMenu absolute top-[90px] left-0 bg-whiteWi w-full flex flex-col justify-center items-center gap-7 p-5
          
          md:flex md:w-[400px] md:h-full md:flex-row md:justify-end  md:relative md:p-0 md:top-0 ${isOpem ? 'activeOpen' : ''}`}

          // className={`navMenu md:flex md:w-[400px] md:h-full md:flex-row md:justify-end flex-nowrap justify-normal items-center gap-6
          // ${isOpem ? 'absolute top-[90px] left-0 bg-whiteWi w-full flex flex-col justify-center items-center gap-6 pb-5 pr-5 pl-5 animate-slideIn' : 'absolute top-[90px] left-0 bg-whiteWi w-full flex flex-col justify-center items-center gap-6 pb-5 pr-5 pl-5 animate-slideIn'} md:flex md:relative md:pr-0 md:pl-0 md:pb-0 md:top-0 transition-all duration-300 ease-linear`}
        >
          <Link
            to='servicios'
            spy
            smooth
            offset={-100}
            duration={700}
            className={`navLink cursor-pointer font-titulo text-lg relative ${activeIndex === 0 ? 'active font-[600]' : 'font-[400]'} transition-all duration-0 ease-in-out`}
            onClick={() => handleActive(0)}
          >
            Servicios
            {/* {activeIndex === 0 && <div className='bordeBotMenu translate-x-1 transition-all duration-300 ease ' />} */}
            {activeIndex === 0 && <div className='bordeBotMenu absolute bottom-3 w-full h-[3px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}
          </Link>

          <Link
            to='sobremi'
            spy
            smooth
            offset={-100}
            duration={700}
            className={`navLink  cursor-pointer font-titulo text-lg relative ${activeIndex === 1 ? 'active font-[600]' : 'font-[400]'} transition-all duration-0 ease-in-out`}
            onClick={() => handleActive(1)}
          >
            Sobre mi
            {activeIndex === 1 && <div className='bordeBotMenu absolute bottom-3 w-full h-[3px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}

          </Link>
          <Link
            to='contacto'
            spy
            smooth
            offset={-100}
            duration={700}
            className={`navLink cursor-pointer font-titulo text-lg relative ${activeIndex === 2 ? 'active font-[600]' : 'font-[400]'} transition-all duration-0 ease-in-out`}
            onClick={() => handleActive(2)}
          >
            Contacto
            {activeIndex === 2 && <div className='bordeBotMenu absolute bottom-3 w-full h-[3px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}
          </Link>
        </section>

        {/* toggle */}
        <section className='toggle w-[60px] h-[90px] flex justify-center items-center md:hidden'>
          <div
            className={`nav_toggle w-[50px] h-50px flex flex-col justify-center items-center gap-[3px] cursor-pointer ${isOpem ? 'open' : ''}`}
            onClick={handleToggle}
          >
            <span className={`w-[30px] h-[4px] bg-verdeTurk rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'transform rotate-45 translate-x-0 translate-y-[5.5px]' : ''}`} />
            <span className={`w-[30px] h-[4px] bg-verdeTurk rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'hidden' : ''}`} />
            <span className={`w-[30px] h-[4px] bg-verdeTurk rounded-sm transition-all duration-300 ease-linear ${isOpem ? 'transform -rotate-45 translate-x-0 -translate-y-[2.5px]' : ''}`} />
          </div>
        </section>
      </section>
    </>
  )
}

export default Nav
