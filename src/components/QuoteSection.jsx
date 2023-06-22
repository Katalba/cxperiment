import { useGeneralContext } from '../context/GeneralContext'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const QuoteSection = () => {
  const { sobremiRef } = useGeneralContext()

  return (
    <section ref={sobremiRef} id='sobremi' className='card-scroll contenedor w-full h-[calc(100vh_-_90px)] bg-verdeTurk relative flex justify-center items-center space-y-[2rem] overflow-hidden'>
      <section className='container absolute h-full flex flex-col justify-center items-center space-y-6'>
        <div className='logo w-[240px] h-[31px]'>
          <img className='w-full h-full' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/logoWhite.png?alt=media&token=e025e897-8318-46c4-b001-3ad03397f262' alt='logo' />
        </div>
        <div className='quote w-full px-20 text-center '>
          <p className='w-full text-whiteWi font-parrafo font-[400] text-base sm:text-base md:text-lg lg:text-xl xl:text-xl text-center'> “Mi objetivo es brindar a las empresas las herramientas necesarias para alcanzar el éxito a través de la mejora continua de su Customer Experience”.</p>
        </div>
        <div className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px]'>
          <img className='object-contain object-center rounded-full grayscale' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/Jesica.svg?alt=media&token=1e6a32bf-50bc-4b87-bedf-0ca751429aa1' alt='founder' />
        </div>
        <div className='w-[200px] h-[52px] text-center'>
          <h3 className=' text-whiteWi text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base font-semibold'> Jesica Bilotti</h3>
          <p className='text-whiteWi text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base'> Customer Experience</p>
        </div>
        <div className=' flex justify-center w-[200px] h-[52px] space-x-[1rem]'>
          <Link to='https://www.linkedin.com/in/jesicabilotti/' target='_blank'><FaLinkedin className='invert-[100%] w-[2rem] h-[2rem] hover:text-[#264BD3] hover:bg-whiteWi rounded-lg hover:invert-0' /></Link>
          <Link to='https://www.instagram.com/cxperiment/' target='_blank'><FaInstagram className='invert-[100%] w-[2rem] h-[2rem] transition duration-500 ease-in-out hover:invert-0 hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg hover:text-[#fff]' /> </Link>
        </div>
        <div />
      </section>
    </section>
  )
}

export default QuoteSection
