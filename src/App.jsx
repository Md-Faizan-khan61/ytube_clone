import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuth } from './context/AuthProvider'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import PlayingVideos from './components/PlayingVideos';
import Loading from './loader/Loading'

function App() {
  const {loading,data} = useAuth();
  // console.log(loading);
  console.log(data);
  return (
    <div>
     {loading && <Loading/>} 
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/search/:searchQuery' element={<Search/>} />
      <Route path='/video/:id' element={<PlayingVideos/>} />
    </Routes>
    </div>
  )
}

export default App