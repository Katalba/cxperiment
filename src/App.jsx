import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Error404 from './pages/Error404'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/error404' element={<Error404 />} />
        <Route path='*' element={<Navigate to='/error404'></Navigate>} />      
      </Routes>
    </>
  )
}

export default App
