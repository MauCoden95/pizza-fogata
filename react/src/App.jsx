import { useState } from 'react'
import './App.css'
import { Header } from './components/parts-website/Header'
import { Banner } from './components/parts-website/Banner'
import { About } from './components/parts-website/About'
import { Menu } from './components/parts-website/Menu'

function App() {
 

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Menu/>
    </>
  )
}

export default App
