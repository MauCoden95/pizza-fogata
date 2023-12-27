import { useState } from 'react'
import './App.css'
import { Header } from './components/parts-website/Header'
import { Banner } from './components/parts-website/Banner'
import { About } from './components/parts-website/About'
import { Menu } from './components/parts-website/Menu'
import { Newsletter } from './components/parts-website/Newsletter'
import { Chefs } from './components/parts-website/Chefs'
import { Contact } from './components/parts-website/Contact'
import { Footer } from './components/parts-website/Footer'

function App() {
 

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Menu/>
      <Newsletter/>
      <Chefs/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
