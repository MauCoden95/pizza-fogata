import React from 'react'


import { Header } from '../parts-website/Header'
import { Banner } from '../parts-website/Banner'
import { About } from '../parts-website/About'
import { Menu } from '../parts-website/Menu'
import { Newsletter } from '../parts-website/Newsletter'
import { Chefs } from '../parts-website/Chefs'
import { Contact } from '../parts-website/Contact'
import { Footer } from '../parts-website/Footer'

export const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <About />
            <Menu />
            <Newsletter />
            <Chefs />
            <Contact />
            <Footer />
        </div>
    )
}
