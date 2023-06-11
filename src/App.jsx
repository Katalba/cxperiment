import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div className='w-full h-screen flex flex-col bg-purple-300 justify-center items-center gap-5'>
        <h1 className=' text-4xl text-white font-parrafo font-[700]'>CXperiment</h1>
        <button className='botonVerde rounded-md transition-all duration-300 ease-in-out'>CXperiment</button>
        <button className='botonWhite rounded-md transition-all duration-300 ease-in-out'>CXperiment</button>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
      </Routes>
    </>
  )
}

export default App
