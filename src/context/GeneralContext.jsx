import { createContext, useContext, useEffect, useRef, useState } from 'react'
import ScrollReveal from 'scrollreveal'

// se crea el contexto
export const GeneralContext = createContext([])

// se exporta el hook
export const useGeneralContext = () => useContext(GeneralContext)

export const GeneralContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const homeRef = useRef(null)
  const contactoRef = useRef(null)
  const serviciosRef = useRef(null)
  const sobremiRef = useRef(null)

  useEffect(() => {
    const sr = ScrollReveal({
      duration: 1500,
      delay: 300,
      distance: '50px',
      easing: 'ease-in-out'
    })

    sr.reveal('.card-scroll', { interval: 100 })
  }, [])

  return (
    <GeneralContext.Provider
      value={{
        loading,
        setLoading,
        homeRef,
        contactoRef,
        serviciosRef,
        sobremiRef
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
