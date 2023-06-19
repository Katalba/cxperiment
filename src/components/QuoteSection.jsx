import { useGeneralContext } from '../context/GeneralContext'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const QuoteSection = () => {
  const { sobremiRef } = useGeneralContext()

  return (
    <section ref={sobremiRef} id='sobremi' className='contenedor w-full h-[calc(100vh_-_90px)] bg-verdeTurk relative flex justify-center items-center space-y-[2rem]'>
      <section className='container absolute h-full flex flex-col justify-center items-center space-y-6'>
        <div className='logo w-[240px] h-[31px]'>
          <img className='w-full h-full' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/logoWhite.png?alt=media&token=e025e897-8318-46c4-b001-3ad03397f262' alt='logo' />
        </div>
        <div className='quote w-full px-4 text-center '>
          <p className='w-full text-whiteWi text-center text-2xl md:text-3xl xl:text-4xl'> “Mi objetivo es brindar a las empresas las herramientas necesarias para alcanzar el éxito a través de la mejora continua de su Customer Experience”.</p>
        </div>
        <div className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[160px] lg:h-[160px]'>
          <img className='object-cover object-center rounded-full grayscale' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/Jesica.svg?alt=media&token=1e6a32bf-50bc-4b87-bedf-0ca751429aa1' alt='founder' />
        </div>
        <div className='w-[200px] h-[52px] text-center'>
          <h3 className=' text-whiteWi text-[18px] font-semibold'> Jesica Bilotti</h3>
          <p className='text-whiteWi text-[18px]'> Customer Experience</p>
        </div>
        <div className=' flex justify-center w-[200px] h-[52px] space-x-[1rem]'>
          <Link to='https://www.linkedin.com/in/jesicabilotti/' target='_blank'><FaLinkedin className='invert-[100%] w-[44px] h-[44px] hover:linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))' /></Link>
          <Link to='https://www.instagram.com/cxperiment/' target='_blank'><FaInstagram className='invert-[100%] w-[44px] h-[44px]' /> </Link>
        </div>
        <div />
      </section>
    </section>
  )
}

export default QuoteSection
