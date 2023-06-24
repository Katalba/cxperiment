import { useEffect, useRef } from 'react'

const useTitle = ({ title }) => {
  const prevTitle = useRef(document.title)

  useEffect(() => {
    const previusTitle = prevTitle.current
    document.title = title

    return () => { document.title = previusTitle }
  }, [title])
}

export default useTitle
