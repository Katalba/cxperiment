import { createContext, useContext, useRef, useState } from 'react'

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
