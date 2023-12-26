import React from 'react'

export const Header = () => {
  return (
    <div>
      <div className="w-full h-10 bg-red-700">
        <div className='w-11/12 h-full m-auto text-white flex items-center justify-end'>
          <div>
            <a href="#" className='mr-2 hover:underline'><span className='fas fa-user'></span> Login</a>|
            <a href="#" className='ml-2 hover:underline'>Registro</a>
          </div>
        </div>

      </div>
      <header className="w-full h-28 bg-orange-200">
        <div className='w-11/12 h-full m-auto flex justify-between'>
          <a href="#">
            <img className='w-28' src="http://localhost:5173/img/Logo.png" alt="Logo" />
          </a>
          <nav className='w-2/4 h-full'>
            <ul className='w-full h-full flex items-center justify-between'>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><a href="">Pizzas</a></li>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><a href="">Empanadas</a></li>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><a href="">Bebidas</a></li>
                <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><a href="">Postres</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
