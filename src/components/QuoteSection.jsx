const QuoteSection = () => {
  return (
    <section id='sobremi' className='w-full h-[732px] bg-verdeTurk relative flex justify-center items-center'>
      <section className='absolute w-[1184px] h-[540px] flex flex-col justify-center items-center space-y-[2rem] '>
        <div className='logo w-full h-[43px]'>
          <img className='w-full h-full' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/logoCxperiment.svg?alt=media&token=ae43d2fd-4d55-49d1-805d-4866f1346e61' alt='logo' />
        </div>
        <div className='quote w-full h-[188px]'>
          <p className='text-[36px] text-whiteWi text-center'> “Mi objetivo es brindar a las empresas las herramientas necesarias para alcanzar el éxito a través de la mejora continua de su Customer Experience”.</p>
        </div>
        <div className='w-[200px] h-[200px]'>
          <img className='w-full h-full rounded-full grayscale' src='https://firebasestorage.googleapis.com/v0/b/cxperiment.appspot.com/o/Jesica.svg?alt=media&token=1e6a32bf-50bc-4b87-bedf-0ca751429aa1' alt='founder' />
        </div>
        <div className='w-[200px] h-[52px] text-center'>
          <h3 className=' text-whiteWi text-[18px] font-semibold'> Jesica Bilotti</h3>
          <p className='text-whiteWi text-[18px]'> Customer Experience</p>
        </div>
        <div />
      </section>
    </section>
  )
}

export default QuoteSection
