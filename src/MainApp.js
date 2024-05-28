import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './auths/login'
import Register from './auths/register'
export default function MainApp() {
  return (
    <div>
        <BrowserRouter>
        <Routes>   
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
        </BrowserRouter>
        
      
    </div>
  )
}
