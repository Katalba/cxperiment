import { v4 as uuidv4 } from 'uuid'
import BotonBase from './BotonBase'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { useGeneralContext } from '../context/GeneralContext'

const CardContenido = ({ item, imgBg }) => {
  const { contactoRef } = useGeneralContext()

  const isPar = (val) => {
    return val % 2 !== 0
  }

  const overlayStyleRight = {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
  }
  const overlayStyleLeft = {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))'
  }

  const handleClick = () => {
    contactoRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className={`contenedoCard card-scroll bg-whiteWi w-full h-auto md:h-auto flex flex-col-reverse  flex-wrap justify-start items-center md:flex-row md:flex-nowrap md:justify-start md:items-center ${isPar(item.id) ? 'md:flex-row-reverse' : 'md:flex-row'} py-1 overflow-hidden gap-5 lg:gap-5 `}>

        {/* seccion contenido */}
        <section className='contenido w-full xl:h-[500px] md:w-[50%] lg:w-[40%] md:h-full flex flex-col md:flex-col justify-center items-start gap-5 md:gap-5 lg:gap-6 relative'>
          <h2 className='font-titulo font-[700] text-[20px] md:text-[16.511px ] xl:text-[31px] 2xl:text-4xl text-textPurple'>{item.titulo}</h2>
          <p className='w-full md:w-full font-parrafo font-[400] text-textPurple text-xs md:text-sm xl:text-base md:pb-0 leading-[18px] md:leading-[24px] xl:leading-[27px]'>En <span className='font-[600]'>CXperiment</span>, {item.parrafo}</p>
          <div className='main w-full gap-3 md:w-full flex flex-row justify-around items-center relative'>
            <ul className='w-full flex flex-col justify-start items-start gap-3'>
              {
            item.lista.map((element) => {
              return (
                <li
                  key={uuidv4()} className='font-parrafo font-[400] text-textPurple flex flex-row flex-nowrap justify-start items-center gap-1 xl:gap-2 text-xs lg:text-sm xl:text-base
                leading-[18px] lg:leading-[24px] xl:leading-[27px]'
                >
                  <span className='text-purpleBal p-1 bg-verdeMok rounded-full text-sm lg:text-lg'>
                    <IoCheckmarkSharp />
                  </span>
                  {element}
                </li>
              )
            })
            }

            </ul>
          </div>
          <section className='pie w-full h-auto relative flex justify-start items-start md:right-auto md:bottom-auto md:relative md:w-full  md:flex-row md:justify-start md:items-center'>
            <BotonBase func={handleClick} name='Solicita información' clase='botonVerde text-[14px] font-[700] md:text-[9.287px] md:font-[600] xl:font-[600]' />
          </section>
        </section>

        {/* seccion imagen */}
        <section className={`imgBg hidden w-full h-auto py-2 sm:h-[50px] md:w-[50%] md:h-full lg:w-[60%] overflow-hidden md:flex justify-start items-center ${isPar(item.id) ? 'justify-end' : 'justify-start'} relative`}>
          <div style={isPar(item.id) ? overlayStyleLeft : overlayStyleRight} className='absolute w-[10px] md:w-full md:h-full md:top-0 md:left-0 top-0 right-0 z-10' />
          <img
            src={imgBg} alt='logo cxPeriment'
            className={`bgCustomerCards h-full w-full hidden md:block object-contain md:object-cover object-center lg:object-left opacity-40 transform relative  ${isPar(item.id) ? '-scale-x-100' : ''}`}
          />
          <h2 className={`text-left hidden md:block md:absolute w-full h-auto md:text-center md:w-[100px] lg:w-[130px] xl:w-[200px] ${isPar(item.id) ? 'md:mr-[50px] lg:mr-[90px] xl:mr-[70px] 2xl:mr-[120px]' : 'md:ml-[50px] lg:ml-[90px] xl:ml-[70px] 2xl:ml-[120px]'} font-titulo font-[700] text-[20px] md:text-[17px] lg:text-[17px] xl:text-[31px] 2xl:text-4xl text-textPurple leading-none`}>
            {item.titulo}
          </h2>
        </section>
      </section>
    </>

  )
}

export default CardContenido
