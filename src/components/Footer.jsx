import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer card-scroll w-full bg-purpleBal text-whiteWi text-[18px]'>
      <div className='items-start p-[5%] pb-[8rem] pt-[20px] mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col space-y-10'>
        <div className='logo mr-[5%] w-[70%] h-[10%] md:w-[30%] md:h-[3%]'>
          <img className='w-full h-full' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/logoWhite.png?alt=media&token=e025e897-8318-46c4-b001-3ad03397f262' alt='logo' />
        </div>
        <div className='contact w-[45%] flex-shrink-0 md:mx-0 text-left'>
          <p>Jesica Bilotti</p>
          <p>WhatsApp +54 11 4156-8854</p>
          <p>info.cxperiment@gmail.com</p>
        </div>
        <div className='redes md:mx-0'>
          <h3>Redes Sociales</h3>
          <div className='flex space-x-2 mt-[1rem]'>
            <Link to='https://www.linkedin.com/in/jesicabilotti/' target='_blank'><FaLinkedin className='w-[44px] h-[44px] hover:text-[#264BD3] hover:bg-whiteWi rounded-lg' /></Link>
            <Link to='https://www.instagram.com/cxperiment/' target='_blank'><FaInstagram className='w-[44px] h-[44px] transition duration-700 ease-in-out hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg' /> </Link>
          </div>
        </div>
      </div>
      <div className='mx-auto py-4 px-5'>
        <p className='copyright text-center'>©cxperiment | Todos los derechos reservados</p>
      </div>
    </div>
  )
}

export default Footer
