import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Error404 from './pages/Error404'
import { GeneralContextProvider } from './context/GeneralContext'
import ListCardServicios from './backup/ListCardServicios'

function App () {
  return (
    <>
      <GeneralContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/error404' element={<Error404 />} />
          <Route path='*' element={<Navigate to='/error404' />} />
          <Route path='/servicios' element={<ListCardServicios />} />
        </Routes>
      </GeneralContextProvider>
    </>
  )
}

export default App
