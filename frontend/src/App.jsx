import React from 'react'
import { Toaster } from 'react-hot-toast'

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ExplorePage from './pages/ExplorePage'
import LikesPage from './pages/LikesPage'
import Sidebar from './components/Sidebar'
import { Routes,Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'  

function App() {
  const {authUser,loading} = useAuthContext();
  console.log("Authenticated User",authUser);

  if (loading) return null;

  return (
    <div className='flex text-white'>
       <Sidebar /> 
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-100 flex-1'>
        <Routes>
          <Route path='/' element={!authUser ? <LoginPage/> : <HomePage />}  />
          <Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to ={"/"} />} />
          <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to ={"/"} /> } />
          <Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to ={"/login"} />} />
          <Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to ={"/login"} />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  )
}

export default App
