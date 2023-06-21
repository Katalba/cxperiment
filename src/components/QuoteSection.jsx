import { useGeneralContext } from '../context/GeneralContext'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const QuoteSection = () => {
  const { sobremiRef } = useGeneralContext()

  return (
    <section ref={sobremiRef} id='sobremi' className='contenedor w-full h-[732px] bg-verdeTurk relative flex justify-center items-center py-6 overflow-hidden'>
      <section className='absolute w-[1184px] h-[540px] flex flex-col justify-center items-center space-y-[2rem] '>
        <div className='logo w-full h-[43px]'>
          <img className='w-full h-full' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/logoCxperiment.svg?alt=media&token=ae43d2fd-4d55-49d1-805d-4866f1346e61' alt='logo' />
        </div>
        <div className='quote w-full h-[188px]'>
          <p className='w-full text-whiteWi text-center sm:text-4xl text-3xl mb-8 lg:text-[36px]'> “Mi objetivo es brindar a las empresas las herramientas necesarias para alcanzar el éxito a través de la mejora continua de su Customer Experience”.</p>
        </div>
        <div className='w-[200px] h-[200px]'>
          <img className='w-full h-full rounded-full grayscale' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/Jesica.svg?alt=media&token=1e6a32bf-50bc-4b87-bedf-0ca751429aa1' alt='founder' />
        </div>
        <div className='w-[200px] h-[52px] text-center'>
          <h3 className=' text-whiteWi text-[18px] font-semibold'> Jesica Bilotti</h3>
          <p className='text-whiteWi text-[18px]'> Customer Experience</p>
        </div>
        <div className=' flex justify-center w-[200px] h-[52px] space-x-[1rem]'>
          <Link to='https://www.linkedin.com/in/jesicabilotti/' target='_blank'><FaLinkedin className='invert-[100%] w-[44px] h-[44px]' /></Link>
          <Link to='https://www.instagram.com/cxperiment/' target='_blank'><FaInstagram className='invert-[100%] w-[44px] h-[44px]' /> </Link>
        </div>
        <div />
      </section>
    </section>
  )
}

export default QuoteSection
