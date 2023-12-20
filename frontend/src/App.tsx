import { Routes, Route } from 'react-router-dom'
import './App.css'
import VideoList from './components/videos/VideoList'
import VideoForm from './components/videos/VideoForm'
import Navbar from './components/nav/Navbar'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <VideoList/> } />
        <Route path="/new-video" element={ <VideoForm /> } />
        <Route path="/update/:id" element={ <VideoForm /> } />
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
