import { useEffect, useRef } from 'react'

const useSeo = ({ title }) => {
  const prevTitle = useRef(document.title)

  useEffect(() => {
    const previusTitle = prevTitle.current
    if (title) {
      document.title = title | 'CXprueb'
    }

    return () => { document.title = previusTitle }
  }, [title])
}

export default useSeo
