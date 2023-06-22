import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer card-scroll w-full h-[60vh] bg-purpleBal text-whiteWi text-base sm:text-base md:text-lg lg:text-xl xl:text-xl'>
      <div className='w-full flex flex-wrap flex-col md:flex-row md:flex-nowrap p-[5%]'>
        <div className='logo mr-[5%] w-[70%] h-[10%] md:w-[30%] md:h-[3%] mb-4'>
          <img className='w-full h-full' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/logoWhite.png?alt=media&token=e025e897-8318-46c4-b001-3ad03397f262' alt='logo' />
        </div>
        <div className='contact md:w-[45%] flex flex-col space-y-3 mb-3 '>
          <p>Jesica Bilotti</p>

          <Link to='https://wa.me/541141568854?text=Hola%20,%20estoy%20interesado%20en%20una%20asesoría%20.%20Me%20gustaría%20tener%20más%20información%20.%20Gracias%20.'>
            <div className='whatsapp flex space-x-2'>
              <FaWhatsapp className='text-[2rem]' />
              <p>WhatsApp +54 11 4156-8854</p>
            </div>
          </Link>

          <Link to='mailto:info.cxperiment@gmail.com' target='_blank'>
            <div className='mail flex space-x-2'>
              <IoMailOutline className='text-[2rem]' />
              <p>info.cxperiment@gmail.com</p>
            </div>
          </Link>

        </div>
        <div className='redes'>
          <h3>Redes Sociales</h3>
          <div className='flex space-x-2 mt-3'>
            <Link to='https://www.linkedin.com/in/jesicabilotti/' target='_blank'><FaLinkedin className='w-[2rem] h-[2rem] hover:text-[#264BD3] hover:bg-whiteWi rounded-lg' /></Link>
            <Link to='https://www.instagram.com/cxperiment/' target='_blank'><FaInstagram className='w-[2rem] h-[2rem] transition duration-700 ease-in-out hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg' /> </Link>
          </div>
        </div>
      </div>
      <div className='w-full h-[10vh] flex justify-center items-end'>
        <p className='copyright '>©cxperiment</p>
      </div>
    </div>
  )
}

export default Footer
