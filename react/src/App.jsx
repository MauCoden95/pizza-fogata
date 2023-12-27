import { useState } from 'react'
import './App.css'
import { Header } from './components/parts-website/Header'
import { Banner } from './components/parts-website/Banner'
import { About } from './components/parts-website/About'
import { Menu } from './components/parts-website/Menu'
import { Newsletter } from './components/parts-website/Newsletter'
import { Contact } from './components/parts-website/Contact'

function App() {
 

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Menu/>
      <Newsletter/>
      <Contact/>
    </>
  )
}

export default App
