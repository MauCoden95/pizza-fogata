import React from 'react'
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div>
      <div className="w-full h-10 bg-red-700">
        <div className='w-11/12 h-full m-auto text-white flex items-center justify-end'>
          <div>
            <span className='fas fa-user'></span>
            <Link to="http://localhost:5173/login" className='mr-2 hover:underline'> Login</Link>|
            <Link to="http://localhost:5173/registro" className='ml-2 hover:underline'>Registro</Link>
          </div>
        </div>

      </div>
      <header className="w-full h-28 bg-orange-200">
        <div className='w-11/12 h-full m-auto flex justify-between'>
          <Link to="http://localhost:5173/">
            <img className='w-28' src="http://localhost:5173/img/Logo.png" alt="Logo" />
          </Link>
          <nav className='w-3/5 h-full'>
            <ul className='w-full h-full flex items-center justify-between'>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/pizzas">Pizzas</Link></li>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/empanadas">Empanadas</Link></li>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/bebidas">Bebidas</Link></li>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/minutas">Minutas</Link></li>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/postres">Postres</Link></li>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
