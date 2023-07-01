import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useGeneralContext } from '../context/GeneralContext'
import logo from '../images/Logo_cxperiment_1_ctumyo.svg'

const Nav = () => {
  const [isOpem, setIdOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const { contactoRef, serviciosRef, sobremiRef } = useGeneralContext()

  const rutaImg = logo

  const handleToggle = () => {
    setIdOpen(!isOpem)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: contactoRef, id: 'contacto' },
        { ref: serviciosRef, id: 'servicios' },
        { ref: sobremiRef, id: 'sobremi' }
      ]

      const currentSection = sections.find((section) => {
        const { ref } = section
        if (ref && ref.current) {
          const top = window.scrollY
          const offset = ref.current.offsetTop - (isOpem && window.innerWidth < 768 ? 340 : 150)
          const height = ref.current.offsetHeight
          return top >= offset && top < offset + height
        }
        return false
      })

      setActiveIndex(currentSection ? currentSection.id : null)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [contactoRef, serviciosRef, sobremiRef])

  const handleRefService = () => {
    const refServiciosRef = serviciosRef.current
    const serviciosRefRect = refServiciosRef.getBoundingClientRect()
    const offset = isOpem && window.innerWidth < 768 ? 330 : 150
    window.scrollTo({
      top: serviciosRefRect.top + window.scrollY - offset,
      behavior: 'smooth'
    })
  }

  const handleRefContact = () => {
    const refContactoRef = contactoRef.current
    const refContactoRefRect = refContactoRef.getBoundingClientRect()
    const offset = isOpem && window.innerWidth < 768 ? 330 : 150
    window.scrollTo({
      top: refContactoRefRect.top + window.scrollY - offset,
      behavior: 'smooth'
    })
  }

  const handleRefSobreMi = () => {
    const refSobremiRef = sobremiRef.current
    const refSobremiRefRect = refSobremiRef.getBoundingClientRect()
    const offset = isOpem && window.innerWidth < 768 ? 330 : 150
    window.scrollTo({
      top: refSobremiRefRect.top + window.scrollY - offset,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <nav className={`nav z-50 w-full fixed top-0 left-0 h-[90px] md:h-[90px] md:max-h-[90px] lg:h-[90] overflow-hidden flex flex-row justify-between items-start px-5  bg-whiteWi ${isOpem ? 'openActive' : ''} transition-all duration-300 ease-linear`}>

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
            <img src={rutaImg} alt='logotipo cxperiment' />
          </Link>
        </section>

        {/* menu de navegacion */}
        <section
          className={`navMenu absolute top-[90px] left-0 bg-whiteWi w-full flex flex-col justify-center items-center gap-7 p-5
          
          md:flex md:w-[400px] md:h-full md:flex-row md:justify-end  md:relative md:p-0 md:top-0 ${isOpem ? 'activeOpen' : ''}`}

        >
          <a
            // to='servicios'
            // spy
            // smooth
            // offset={-150}
            // duration={700}
            className={`navLink cursor-pointer font-titulo text-lg relative text-purpleBal ${activeIndex === 'servicios' ? 'active font-titulo text-lg font-[700] ' : 'font-[500]'} transition-all duration-0 ease-in-out`}
            onClick={handleRefService}
          >
            Servicios
            {/* {activeIndex === 0 && <div className='bordeBotMenu translate-x-1 transition-all duration-300 ease ' />} */}
            {activeIndex === 'servicios' && <div className='bordeBotMenu absolute bottom-3 w-full h-[3px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}
          </a>

          <a
            // to='sobremi'
            // spy
            // smooth
            // offset={-90}
            // duration={700}
            className={`navLink  cursor-pointer font-titulo text-lg relative text-purpleBal ${activeIndex === 'sobremi' ? 'active font-[700]' : 'font-[500]'} transition-all duration-0 ease-in-out`}
            onClick={handleRefSobreMi}
          >
            Sobre mi
            {activeIndex === 'sobremi' && <div className='bordeBotMenu absolute bottom-3 w-full h-[3px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}

          </a>
          <a
            // to='contacto'
            // spy
            // smooth
            // offset={-150}
            // duration={700}
            className={`navLink cursor-pointer font-titulo text-lg relative text-purpleBal ${activeIndex === 'contacto' ? 'active font-[700]' : 'font-[500]'} transition-all duration-0 ease-in-out`}
            onClick={handleRefContact}
          >
            Contacto
            {activeIndex === 'contacto' && <div className='bordeBotMenu absolute bottom-3 w-full h-[3px] bg-whiteWi rounded-sm  z-0 opacity-0 transition-all duration-300 ease' />}
          </a>
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
      </nav>
    </>
  )
}

export default Nav
