import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Pizzas } from './components/pages/Pizzas'
import { Empanadas } from './components/pages/Empanadas'
import { Bebidas } from './components/pages/Bebidas'
import { Minutas } from './components/pages/Minutas'
import { Postres } from './components/pages/Postres'
import { Register } from './components/pages/Register'
import { Login } from './components/pages/Login'
import { Settings } from './components/pages/Settings'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pizzas' element={<Pizzas />}></Route>
        <Route path='/empanadas' element={<Empanadas />}></Route>
        <Route path='/bebidas' element={<Bebidas />}></Route>
        <Route path='/minutas' element={<Minutas />}></Route>
        <Route path='/postres' element={<Postres />}></Route>
        <Route path='/registro' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/configuracion' element={<Settings />}></Route>
      </Routes>
    </>
  )
}

export default App
