import { useGeneralContext } from '../context/GeneralContext'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Jesica from '../images/Jesica.svg'
import LogoWhite from '../images/logoWhite.png'

const QuoteSection = () => {
  const { sobremiRef } = useGeneralContext()

  return (
    <section ref={sobremiRef} id='sobremi' className='card-scroll w-full h-[calc(100vh-90px)] bg-verdeTurk flex justify-center items-center'>
      <section className='w-full h-full flex flex-col items-center justify-center gap-6'>
        <div className='logo w-[240px] h-[31px]'>
          <img className='w-full h-full' src={LogoWhite} alt='logo' />
        </div>
        <div className='quote w-full px-10 md:px-40 text-center '>
          <p className='w-full text-whiteWi font-parrafo font-[400] text-base sm:text-base md:text-lg lg:text-[30px] xl:text-[30px] text-center'> “Mi objetivo es brindar a las empresas las herramientas necesarias para alcanzar el éxito a través de la mejora continua de su Customer Experience”.</p>
        </div>
        <div className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px]'>
          <img className='object-contain object-center rounded-full grayscale' src={Jesica} alt='founder' />
        </div>
        <div className='w-full h-auto text-center'>
          <h3 className=' text-whiteWi text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-semibold'> Jesica Bilotti</h3>
          <p className='text-whiteWi text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base'> Customer Experience</p>
        </div>
        <div className=' flex space-x-[1rem]'>
          <Link to='https://www.linkedin.com/in/jesicabilotti/' target='_blank'><FaLinkedin className='invert-[100%] w-[2rem] h-[2rem] transition duration-500 ease-in-out hover:scale-125 hover:text-purpleBal hover:invert-[0]' /></Link>
          <Link to='https://www.instagram.com/cxperiment/' target='_blank'><FaInstagram className='invert-[100%] w-[2rem] h-[2rem] transition duration-500 ease-in-out hover:scale-125 hover:text-purpleBal hover:invert-[0]' /> </Link>
        </div>
      </section>
    </section>
  )
}

export default QuoteSection
