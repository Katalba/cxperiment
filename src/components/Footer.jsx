import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full bg-purpleBal text-whiteWi text-[18px] lg:h-[382px] md:h-[257px] sm:h-[347px] '>
      <div className='flex items-center p-[5%]'>
        <div className='logo mr-[5%] lg:w-[247px] lg:h-[31.47px]'>
          <img className='w-full h-full' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/logoWhite.png?alt=media&token=e025e897-8318-46c4-b001-3ad03397f262' alt='logo' />
        </div>
        <div className='contact mr-[30%]'>
          <p>Jesica Bilotti</p>
          <p>WhatsApp +54 11 4156-8854</p>
          <p>info.cxperiment@gmail.com</p>
        </div>
        <div className='redes'>
          <h3>Redes Sociales</h3>
          <div className='flex space-x-2 mt-[1rem]'>
            <Link to='https://www.linkedin.com/in/jesicabilotti/' target='_blank'><FaLinkedin className='w-[44px] h-[44px]' /></Link>
            <Link to='https://www.instagram.com/cxperiment/' target='_blank'><FaInstagram className='w-[44px] h-[44px]' /> </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-end m-0 h-[30%]'>
        <p className='copyright mt-auto'>©cxperiment | Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default Footer
