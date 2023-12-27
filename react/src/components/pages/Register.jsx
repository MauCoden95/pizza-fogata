import React from 'react'
import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'

export const Register = () => {
  return (
    <div>
         <Header />
         <h1 className='text-center text-4xl my-12'>Registro</h1>
         <form className='w-3/6 min-h-0 m-auto' action="" method="post">
            <input className='w-full p-2 rounded-xl mb-10' type="text" placeholder='Nombre...' />
            <input className='w-full p-2 rounded-xl mb-10' type="text" placeholder='Dirección...' />
            <input className='w-full p-2 rounded-xl mb-10' type="number" placeholder='Dni...' />
            <input className='w-full p-2 rounded-xl mb-10' type="number" placeholder='Teléfono...' />
            <input className='w-full p-2 rounded-xl mb-10' type="password" placeholder='Contraseña...' />
            <input className='w-full p-2 rounded-xl mb-10' type="password" placeholder='Confirmar contraseña...' />
            <input className='w-full p-2 rounded-xl text-white mb-10 bg-red-500 hover:bg-red-800 duration-300 cursor-pointer' type="submit" value='Contraseña' />
         </form>
         <Footer />
    </div>
  )
}
