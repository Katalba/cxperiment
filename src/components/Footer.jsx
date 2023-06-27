import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer card-scroll w-full h-[357px] bg-purpleBal text-whiteWi px-[20px] py-[40px] lg:py-[40px] lg:px-[128px] font-[500]'>
      <div className='w-full flex flex-wrap flex-col md:flex-row md:flex-nowrap lg:items-center space-y-5 md:space-y-0'>
        <div className='logo mr-[5%] w-[247px] h-[31.467px] md:w-[140px] md:h-[17.835px] lg:w-[247px] lg:h-[31.467px]'>
          <img className='w-full h-full object-contain' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/logoWhite.png?alt=media&token=e025e897-8318-46c4-b001-3ad03397f262' alt='logo' />
        </div>
        <div className='contact md:w-[45%] flex flex-col space-y-4 lg:pt-10 '>
          <p className='text-base sm:text-base md:text-lg lg:text-xl xl:text-xl'>Jesica Bilotti</p>

          <Link to='https://wa.me/541141568854?text=Hola,%20estoy%20interesado%20en%20una%20asesoría.%20Me%20gustaría%20tener%20más%20información.%20Gracias.' target='_blank'>
            <div className='whatsapp flex space-x-2 transition duration-500 ease-in-out hover:text-verdeMok'>
              <FaWhatsapp className='text-[2rem]' />
              <p className='text-base sm:text-base md:text-lg lg:text-xl xl:text-xl'>WhatsApp +54 11 4156-8854</p>
            </div>
          </Link>

          <Link to='mailto:info.cxperiment@gmail.com' target='_blank'>
            <div className='mail flex space-x-2 transition duration-500 ease-in-out hover:text-verdeMok'>
              <IoMailOutline className='text-[2rem]' />
              <p className='text-base sm:text-base md:text-lg lg:text-xl xl:text-xl'>info.cxperiment@gmail.com</p>
            </div>
          </Link>

        </div>
        <div className='redes text-lg lg:text-xl xl:text-xl'>
          <h3>Redes Sociales</h3>
          <div className='flex space-x-2 mt-3'>
            <Link to='https://www.linkedin.com/in/jesicabilotti/' target='_blank'><FaLinkedin className='text-[2rem] transition duration-500 ease-in-out hover:scale-125 hover:text-verdeMok' /></Link>
            <Link to='https://www.instagram.com/cxperiment/' target='_blank'><FaInstagram className='text-[2rem] transition duration-500 ease-in-out hover:scale-125 hover:text-verdeMok' /> </Link>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-end lg:h-[110px] pt-[20px]'>
        <p className='copyright font-[500]'>©cxperiment</p>
      </div>
    </div>
  )
}

export default Footer
